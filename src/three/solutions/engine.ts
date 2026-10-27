import * as THREE from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";
import { FLOOR_Y, FONT, clamp, colorTexture, damp, mkCanvas, mulberry32, rgba, type Kit, type Piece, type ScenePalette, type SceneView, type SolutionModel, type StageText } from "./kit";
import { MODELS, type SolutionKey } from "./models";

// Soluciones · one WebGL stage shared by the five products. Data scattered across five sources
// flows into the product's six-step object, holds while the steps light up in turn, and dissolves.
// Switching product dissolves the current object and assembles the next one in the same canvas.

export interface SolutionSceneOptions {
  /** Rectangle (inside the container) the object is fitted to. Defaults to the container. */
  anchor?: HTMLElement | null;
  /** Fires when the highlighted step changes (auto cycle, floor hover or `focus`). */
  onStage?(index: number): void;
}

export interface SolutionScene {
  setModel(key: SolutionKey, stages: StageText[]): void;
  /** Static preview: jump to `seconds` of the cycle, settle and draw one frame. */
  renderAt(seconds: number): void;
  /** Pin a step (-1 releases it): the cycle fast-forwards to the assembled object and waits. */
  focus(index: number): void;
  dispose(): void;
}

const CFG = {
  particles: 16000, // desktop; tablet ×0.7, phone ×0.4
  dustShare: 0.3,
  particleSize: 0.05,
  timeline: { dispersed: 2.4, converge: 3.6, hold: 9, dissolve: 2.8 },
  parallax: 0.08,
  sway: 0.1,
  maxPixels: 5.5e6
};

const DEFAULT_VIEW: SceneView = { target: [0, -0.1, 0], dir: [0, 0.26, 1], fitRadius: 4.1 };

// ---------- shaders ----------
const FLOW_GLSL = /* glsl */ `
uniform float uTime, uAssemble, uSize;
uniform vec3 uDust, uDustCenter;
attribute vec3 aCenter, aOffset;
attribute vec4 aSeed;   // x: delay, y-w: random
attribute float aKind;  // 0: source cloud, 1: free dust
vec3 rotY(vec3 p, float a) { float c = cos(a), s = sin(a); return vec3(c * p.x + s * p.z, p.y, -s * p.x + c * p.z); }
vec3 flowPos(out float prog) {
  float p = clamp((uAssemble - aSeed.x) / 0.55, 0.0, 1.0);
  p = p * p * (3.0 - 2.0 * p);
  prog = p;
  float ph = aSeed.z * 6.28318;
  vec3 src;
  if (aKind > 0.5) {
    src = uDustCenter + aOffset * uDust + vec3(sin(uTime * 0.21 + ph), cos(uTime * 0.17 + ph * 1.3), sin(uTime * 0.19 + ph * 0.7)) * 0.35;
  } else {
    src = aCenter + rotY(aOffset, uTime * (0.12 + aSeed.y * 0.3) + ph);
    src.y += sin(uTime * 0.7 + ph) * 0.08;
  }
  vec3 ctrl = mix(src, position, 0.5) + vec3((aSeed.z - 0.5) * 2.4, 0.6 + aSeed.y * 1.6, (aSeed.w - 0.5) * 2.4);
  float q = 1.0 - p;
  vec3 pos = q * q * src + 2.0 * q * p * ctrl + p * p * position;
  pos += vec3(sin(uTime * 1.7 + aSeed.x * 53.0), cos(uTime * 1.3 + aSeed.y * 47.0), sin(uTime * 1.1 + aSeed.w * 31.0)) * 0.012 * p * (1.0 - 0.6 * p);
  return pos;
}`;

const VERT = FLOW_GLSL + /* glsl */ `
uniform float uScale, uMat, uPointerAmt, uAspect, uFocus, uFade;
uniform vec2 uPointerNdc;
uniform vec3 uColA, uColB, uColC;
varying vec3 vColor; varying float vAlpha;
void main() {
  float p; vec3 pos = flowPos(p);
  vec4 mv = modelViewMatrix * vec4(pos, 1.0);
  if (uPointerAmt > 0.001) {
    vec4 cl = projectionMatrix * mv;
    vec2 d = (cl.xy / cl.w - uPointerNdc) * vec2(uAspect, 1.0);
    float r = length(d);
    mv.xy += (d / max(r, 1e-4)) * smoothstep(0.26, 0.0, r) * uPointerAmt * (-mv.z) * 0.035;
  }
  gl_Position = projectionMatrix * mv;
  float transit = sin(3.14159 * p);
  gl_PointSize = max(1.0, uSize * (0.7 + aSeed.y * 0.7) * (1.0 + transit * 0.15) * uScale / -mv.z);
  vColor = mix(mix(uColA, uColB, 0.35 + aSeed.w * 0.65), uColC, 0.12 + 0.22 * transit + 0.5 * p);
  float depthFade = smoothstep(uFocus + 10.0, uFocus - 4.0, -mv.z);
  float dustDim = mix(1.0, 0.55, aKind * (1.0 - p));
  vAlpha = uFade * mix(0.36, 0.9, p * p) * (1.0 - 0.3 * transit) * mix(1.0, 0.36, uMat * p) * mix(0.45, 1.0, depthFade) * dustDim * (0.6 + 0.4 * aSeed.z);
}`;

const FRAG = /* glsl */ `
varying vec3 vColor; varying float vAlpha;
void main() {
  vec2 c = abs(gl_PointCoord - 0.5);
  float a = smoothstep(0.5, 0.32, max(c.x, c.y));
  if (a < 0.02) discard;
  gl_FragColor = vec4(vColor, a * vAlpha);
  #include <colorspace_fragment>
}`;

// Shadow pass: depth comes from gl_FragCoord, the colour output is ignored.
const DEPTH_VERT = FLOW_GLSL + /* glsl */ `
uniform float uShadowScale;
varying float vP;
void main() {
  float p; vec3 pos = flowPos(p); vP = p;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  gl_PointSize = max(1.0, uSize * (0.7 + aSeed.y * 0.7) * uShadowScale);
}`;

const DEPTH_FRAG = /* glsl */ `
uniform float uFade;
varying float vP;
void main() {
  vec2 c = abs(gl_PointCoord - 0.5);
  if (max(c.x, c.y) > 0.44) discard;
  float n = fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453);
  if (n > mix(0.3, 1.0, vP) * uFade) discard; // scattered particles cast less shadow
  gl_FragColor = vec4(1.0);
}`;

// ---------- textures ----------

function floorTexture(palette: ScenePalette) {
  const S = 1024;
  const canvas = mkCanvas(S, S);
  const g = canvas.getContext("2d")!;
  const gradient = g.createRadialGradient(S / 2, S / 2, 0, S / 2, S / 2, S / 2);
  gradient.addColorStop(0, rgba(palette.c700, 0.28));
  gradient.addColorStop(0.45, rgba(palette.c700, 0.09));
  gradient.addColorStop(1, rgba(palette.c700, 0));
  g.fillStyle = gradient;
  g.fillRect(0, 0, S, S);
  for (let y = 16; y < S; y += 32) {
    for (let x = 16; x < S; x += 32) {
      const a = Math.pow(Math.max(0, 1 - Math.hypot(x - S / 2, y - S / 2) / (S / 2)), 1.6) * 0.3;
      if (a < 0.01) continue;
      g.fillStyle = rgba(palette.c50, Number(a.toFixed(3)));
      g.fillRect(x - 1.5, y - 1.5, 3, 3);
    }
  }
  return colorTexture(canvas);
}

function sourceFace(code: string) {
  const S = 256;
  const canvas = mkCanvas(S, S);
  const g = canvas.getContext("2d")!;
  g.fillStyle = "#000";
  g.fillRect(0, 0, S, S);
  g.strokeStyle = "rgba(255,255,255,.26)";
  g.lineWidth = 3;
  g.strokeRect(28, 28, S - 56, S - 56);
  g.fillStyle = "rgba(255,255,255,.95)";
  g.fillRect(46, 46, 18, 18);
  g.font = `600 44px ${FONT.ui}`;
  g.fillStyle = "rgba(255,255,255,.72)";
  g.fillText(code, 46, S - 50);
  return colorTexture(canvas);
}

function brushedTexture() {
  const S = 256;
  const canvas = mkCanvas(S, S);
  const g = canvas.getContext("2d")!;
  const rnd = mulberry32(7);
  g.fillStyle = "rgb(150,150,150)";
  g.fillRect(0, 0, S, S);
  for (let i = 0; i < 260; i++) {
    const v = 90 + Math.floor(rnd() * 140);
    g.fillStyle = `rgba(${v},${v},${v},.35)`;
    g.fillRect(0, rnd() * S, S, 1 + rnd() * 2);
  }
  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  return texture;
}

async function fontsReady() {
  if (!document.fonts) return;
  const wanted = [`600 44px ${FONT.display}`, `500 34px ${FONT.ui}`, `600 44px ${FONT.ui}`].map((font) => document.fonts.load(font));
  await Promise.race([Promise.all(wanted), new Promise((resolve) => setTimeout(resolve, 1600))]);
}

// ---------- scene ----------

interface Card {
  piece: Piece;
  act: number;
  hov: number;
}

interface Active {
  key: SolutionKey;
  stages: StageText[];
  model: SolutionModel;
  view: SceneView;
  cards: Card[];
  cubes: THREE.Mesh[];
  points: THREE.Points;
  resources: { dispose(): void }[];
}

export function createSolutionScene(container: HTMLElement, options: SolutionSceneOptions = {}): SolutionScene {
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const coarse = matchMedia("(pointer: coarse)").matches;
  const small = container.clientWidth < 760 || coarse;
  let disposed = false;
  let fontsLoaded = false;

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFShadowMap;
  renderer.setClearColor(0x000000, 0);
  const canvas = renderer.domElement;
  canvas.className = "lp-solutions__canvas";
  canvas.setAttribute("aria-hidden", "true");
  container.appendChild(canvas);
  const aniso = renderer.capabilities.getMaxAnisotropy();

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 140);
  const pmrem = new THREE.PMREMGenerator(renderer);
  const envTex = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  scene.environment = envTex;

  // lights: cool key from top-left (shadows), product-coloured back light, darker fill
  const hemi = new THREE.HemisphereLight(0xffffff, 0x000000, 0.6);
  const key = new THREE.DirectionalLight(0xffffff, 2.4);
  key.position.set(-5, 10, 7);
  key.target.position.set(0, -1, 0);
  key.castShadow = true;
  const mapSize = small ? 1024 : 2048;
  key.shadow.mapSize.set(mapSize, mapSize);
  Object.assign(key.shadow.camera, { left: -7.5, right: 7.5, top: 7.5, bottom: -7.5, near: 1, far: 32 });
  key.shadow.bias = -0.0004;
  key.shadow.normalBias = 0.02;
  const rim = new THREE.PointLight(0xffffff, 45, 30, 2);
  rim.position.set(5, 3, -5);
  const fill = new THREE.PointLight(0xffffff, 18, 24, 2);
  fill.position.set(-6, -1, 4);
  scene.add(hemi, key, key.target, rim, fill);

  const root = new THREE.Group();
  scene.add(root);

  // floor: glow + square grid + real shadow
  const floorGeo = new THREE.PlaneGeometry(22, 22);
  const floorMat = new THREE.MeshBasicMaterial({ transparent: true, depthWrite: false, toneMapped: false });
  const floor = new THREE.Mesh(floorGeo, floorMat);
  floor.rotation.x = -Math.PI / 2;
  floor.position.y = FLOOR_Y;
  floor.renderOrder = -2;
  root.add(floor);
  const shadowMat = new THREE.ShadowMaterial({ opacity: 0.4, depthWrite: false });
  const shadowPlane = new THREE.Mesh(floorGeo, shadowMat);
  shadowPlane.rotation.x = -Math.PI / 2;
  shadowPlane.position.y = FLOOR_Y + 0.002;
  shadowPlane.receiveShadow = true;
  shadowPlane.renderOrder = -1;
  root.add(shadowPlane);

  const uniforms = {
    uTime: { value: 0 },
    uAssemble: { value: 0 },
    uMat: { value: 0 },
    uFade: { value: 0 },
    uSize: { value: CFG.particleSize },
    uScale: { value: 1 },
    uShadowScale: { value: mapSize / 15 },
    uPointerNdc: { value: new THREE.Vector2(9, 9) },
    uPointerAmt: { value: 0 },
    uAspect: { value: 1 },
    uFocus: { value: 16 },
    uDust: { value: new THREE.Vector3(8, 4, 3.5) },
    uDustCenter: { value: new THREE.Vector3() },
    uColA: { value: new THREE.Color() },
    uColB: { value: new THREE.Color() },
    uColC: { value: new THREE.Color() }
  };
  const pointsMat = new THREE.ShaderMaterial({ uniforms, vertexShader: VERT, fragmentShader: FRAG, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending });
  const depthMat = new THREE.ShaderMaterial({ uniforms, vertexShader: DEPTH_VERT, fragmentShader: DEPTH_FRAG });
  const cubeGeo = new RoundedBoxGeometry(0.56, 0.56, 0.56, 4, 0.08);
  const rough = brushedTexture();

  // ---------- step tooltip (pointer over a floor) ----------
  const tipEl = document.createElement("div");
  tipEl.className = "lp-solutions__tip";
  tipEl.setAttribute("aria-hidden", "true");
  const tipName = document.createElement("p");
  const tipTitle = document.createElement("p");
  const tipDesc = document.createElement("p");
  tipName.className = "lp-solutions__tip-name";
  tipTitle.className = "lp-solutions__tip-title";
  tipDesc.className = "lp-solutions__tip-desc";
  tipEl.append(tipName, tipTitle, tipDesc);
  container.appendChild(tipEl);

  let active: Active | null = null;
  let requested: { key: SolutionKey; stages: StageText[] } | null = null;
  let pending: { key: SolutionKey; stages: StageText[] } | null = null;
  let fade = 0;
  let floorTex: THREE.Texture | null = null;

  function applyPalette(palette: ScenePalette) {
    hemi.color.set(palette.c50);
    hemi.groundColor.set(palette.night);
    key.color.set(palette.c50);
    rim.color.set(palette.base);
    fill.color.set(palette.c700);
    uniforms.uColA.value.set(palette.c700);
    uniforms.uColB.value.set(palette.base);
    uniforms.uColC.value.set(palette.c50);
    shadowMat.color.set(palette.night).multiplyScalar(0.3);
    floorTex?.dispose();
    floorTex = floorTexture(palette);
    floorMat.map = floorTex;
    floorMat.needsUpdate = true;
  }

  // ---------- build a product (after fonts load, so the signs carry real text) ----------
  function build(modelKey: SolutionKey, stages: StageText[]) {
    const def = MODELS[modelKey];
    const resources: { dispose(): void }[] = [];
    const track = <T extends { dispose(): void }>(resource: T) => (resources.push(resource), resource);
    const kit: Kit = {
      palette: def.palette,
      stages,
      rng: mulberry32(2847),
      aniso,
      hidden: track(new THREE.MeshBasicMaterial({ visible: false })),
      track
    };
    applyPalette(def.palette);
    root.rotation.set(0, 0, 0);
    const model = def.create(kit);
    root.add(model.object);
    model.pieces.forEach((piece, index) => {
      piece.hit.userData.index = index;
    });

    const rng = mulberry32(911);
    const cubes = model.sources.map((source) => {
      const material = track(new THREE.MeshPhysicalMaterial({
        color: def.palette.deep,
        metalness: 0.7,
        roughness: 0.5,
        roughnessMap: rough,
        clearcoat: 1,
        clearcoatRoughness: 0.2,
        emissive: def.palette.c50,
        emissiveMap: track(sourceFace(source.code)),
        emissiveIntensity: 0.7,
        envMapIntensity: 1
      }));
      const mesh = new THREE.Mesh(cubeGeo, material);
      mesh.position.fromArray(source.pos);
      mesh.rotation.set(rng() * 0.6 - 0.3, rng() * Math.PI * 2, rng() * 0.4 - 0.2);
      mesh.castShadow = mesh.receiveShadow = true;
      mesh.userData.baseY = source.pos[1];
      root.add(mesh);
      return mesh;
    });

    // particles: targets are the signs (real pixels) and the segments each piece declares
    // fewer particles when the object is drawn small, so the assembled form stays legible
    const fitSize = Math.min(anchorBox.w, anchorBox.h);
    const N = Math.round(CFG.particles * clamp(fitSize / 900, 0.45, 1) * (model.density ?? 1) * (small ? 0.6 : 1) * (reduced ? 0.6 : 1));
    const pos = new Float32Array(N * 3);
    const center = new Float32Array(N * 3);
    const offset = new Float32Array(N * 3);
    const seed = new Float32Array(N * 4);
    const kind = new Float32Array(N);
    root.updateMatrixWorld(true);
    const rootInv = root.matrixWorld.clone().invert();
    const v = new THREE.Vector3();
    const pieces = model.pieces;
    const last = pieces.length - 1;
    const sources = model.sources;
    const sample = (cnv: HTMLCanvasElement) => {
      const img = cnv.getContext("2d")!.getImageData(0, 0, cnv.width, cnv.height).data;
      const px: number[] = [];
      for (let p = 0, i = 0; p < img.length; p += 4, i++) if (img[p + 3] > 24 && (img[p] + img[p + 1] + img[p + 2]) / 3 > 110) px.push(i);
      return { img, px, w: cnv.width, h: cnv.height };
    };
    const take = (sp: ReturnType<typeof sample>) => {
      let idx = 0;
      for (let t = 0; t < 12; t++) {
        idx = sp.px[(rng() * sp.px.length) | 0];
        if (rng() * 255 < sp.img[idx * 4 + 3]) break;
      }
      return [((idx % sp.w) + rng()) / sp.w, (Math.floor(idx / sp.w) + rng()) / sp.h];
    };
    let k = 0;
    const emit = (x: number, y: number, z: number, m: THREE.Matrix4, fi: number, srcs: number[]) => {
      v.set(x, y, z).applyMatrix4(m);
      pos[k * 3] = v.x;
      pos[k * 3 + 1] = v.y;
      pos[k * 3 + 2] = v.z;
      const dust = rng() < CFG.dustShare;
      kind[k] = dust ? 1 : 0;
      if (dust) {
        offset[k * 3] = rng() * 2 - 1;
        offset[k * 3 + 1] = rng() * 2 - 1;
        offset[k * 3 + 2] = rng() * 2 - 1;
      } else {
        center.set(sources[srcs[(rng() * srcs.length) | 0]].pos, k * 3);
        const th = rng() * Math.PI * 2;
        const ph = Math.acos(2 * rng() - 1);
        const r = 0.45 + Math.pow(rng(), 0.7) * 0.75;
        offset[k * 3] = Math.sin(ph) * Math.cos(th) * r;
        offset[k * 3 + 1] = Math.cos(ph) * r * 0.7;
        offset[k * 3 + 2] = Math.sin(ph) * Math.sin(th) * r;
      }
      seed[k * 4] = (fi / last) * 0.16 + rng() * 0.28;
      seed[k * 4 + 1] = rng();
      seed[k * 4 + 2] = rng();
      seed[k * 4 + 3] = rng();
      k++;
    };
    const weights = pieces.map((piece) => {
      let acc = 0;
      const cum = piece.segs.map((s) => (acc += s[6]));
      return { cum, total: acc };
    });
    const sumL = weights.reduce((a, w) => a + w.total, 0);
    pieces.forEach((piece, fi) => {
      const m = new THREE.Matrix4().multiplyMatrices(rootInv, piece.group.matrixWorld);
      const srcs = [fi % sources.length, (fi + 2) % sources.length];
      const label = piece.label;
      const sl = label ? sample(label.canvas) : null;
      const { cum, total } = weights[fi];
      const n = fi === last ? N - k : Math.round(N * ((0.55 * total) / sumL + 0.45 / pieces.length));
      for (let j = 0; j < n && k < N; j++) {
        if (label && sl && sl.px.length && rng() < 0.14) {
          const [u, w] = take(sl);
          emit(label.x + (u - 0.5) * label.w, label.y + (0.5 - w) * label.h, label.z, m, fi, srcs);
          continue;
        }
        const r = rng() * total;
        let lo = 0;
        let hi = cum.length - 1;
        while (lo < hi) {
          const mid = (lo + hi) >> 1;
          if (cum[mid] < r) lo = mid + 1;
          else hi = mid;
        }
        const sg = piece.segs[lo];
        const t = rng();
        emit(sg[0] + (sg[3] - sg[0]) * t, sg[1] + (sg[4] - sg[1]) * t, sg[2] + (sg[5] - sg[2]) * t, m, fi, srcs);
      }
    });
    const geo = track(new THREE.BufferGeometry());
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    geo.setAttribute("aCenter", new THREE.BufferAttribute(center, 3));
    geo.setAttribute("aOffset", new THREE.BufferAttribute(offset, 3));
    geo.setAttribute("aSeed", new THREE.BufferAttribute(seed, 4));
    geo.setAttribute("aKind", new THREE.BufferAttribute(kind, 1));
    const points = new THREE.Points(geo, pointsMat);
    points.frustumCulled = false;
    points.renderOrder = 10;
    points.castShadow = true;
    points.customDepthMaterial = depthMat;
    root.add(points);

    active = {
      key: modelKey,
      stages,
      model,
      view: { ...DEFAULT_VIEW, ...model.view },
      cards: pieces.map((piece) => ({ piece, act: 0, hov: 0 })),
      cubes,
      points,
      resources
    };
    layout();
  }

  function teardown() {
    if (!active) return;
    const { model, cubes, points, resources } = active;
    root.remove(model.object, points, ...cubes);
    const owned = new Set<{ dispose(): void }>(resources);
    model.object.traverse((object) => {
      const item = object as THREE.Object3D & { geometry?: THREE.BufferGeometry; material?: THREE.Material | THREE.Material[] };
      if (item.geometry) owned.add(item.geometry);
      if (item.material) (Array.isArray(item.material) ? item.material : [item.material]).forEach((material) => owned.add(material));
    });
    owned.forEach((resource) => resource.dispose());
    active = null;
  }

  function resetTimeline() {
    tl = reduced ? TL.dispersed + TL.converge + TL.hold * 0.5 : TL.dispersed * 0.55;
    mat = reduced ? 1 : 0;
    fade = reduced ? 1 : 0;
    hoverIdx = -1;
    showTip(-1);
  }

  // ---------- tooltip ----------
  let hoverIdx = -1;
  const raycaster = new THREE.Raycaster();
  function showTip(h: number) {
    if (h < 0 || !active) {
      tipEl.style.opacity = "0";
      return;
    }
    const stage = active.stages[h];
    tipName.textContent = stage.name;
    tipTitle.textContent = stage.title;
    tipDesc.textContent = stage.desc;
    tipEl.style.opacity = "1";
  }
  function moveTip() {
    const x = Math.max(8, Math.min(pointer.x + 22, W - tipEl.offsetWidth - 8));
    const y = clamp(pointer.y + 18, 8, Math.max(8, H - tipEl.offsetHeight - 8));
    tipEl.style.transform = `translate(${x.toFixed(0)}px,${y.toFixed(0)}px)`;
  }
  function pickFloor() {
    let h = -1;
    if (active && !pending && mat > 0.5 && pointer.inside) {
      raycaster.setFromCamera(new THREE.Vector2(pointer.nx, pointer.ny), camera);
      const hit = raycaster.intersectObjects(active.cards.map((c) => c.piece.hit), false)[0];
      if (hit) h = hit.object.userData.index as number;
    }
    if (h !== hoverIdx) {
      hoverIdx = h;
      showTip(h);
    }
  }

  // ---------- framing: the object fits the anchor rectangle ----------
  let W = 1;
  let H = 1;
  let anchorBox = { x: 0, y: 0, w: 1, h: 1 };
  const tmp2 = new THREE.Vector2();
  const target = new THREE.Vector3();
  const viewDir = new THREE.Vector3();
  function layout() {
    const cr = container.getBoundingClientRect();
    W = Math.max(1, cr.width);
    H = Math.max(1, cr.height);
    let ar: DOMRect | undefined = options.anchor?.getBoundingClientRect();
    if (!ar || ar.width < 40 || ar.height < 40) ar = cr;
    anchorBox = { x: ar.left - cr.left, y: ar.top - cr.top, w: ar.width, h: ar.height };
    const ax = anchorBox.x + anchorBox.w / 2;
    const ay = anchorBox.y + anchorBox.h / 2;
    const size = Math.max(160, Math.min(anchorBox.w, anchorBox.h));
    const pr = Math.min(window.devicePixelRatio || 1, small ? 1.5 : 2, Math.sqrt(CFG.maxPixels / (W * H)));
    renderer.setPixelRatio(Math.max(0.75, pr));
    renderer.setSize(W, H, false);
    camera.aspect = W / H;
    const view = active?.view ?? DEFAULT_VIEW;
    target.fromArray(view.target);
    viewDir.fromArray(view.dir).normalize();
    const t = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
    const dist = (view.fitRadius * H) / (t * size);
    camera.position.copy(target).addScaledVector(viewDir, dist);
    camera.lookAt(target);
    camera.setViewOffset(W, H, W / 2 - ax, H / 2 - ay, W, H);
    camera.updateProjectionMatrix();
    renderer.getDrawingBufferSize(tmp2);
    uniforms.uScale.value = tmp2.y / (2 * t);
    uniforms.uAspect.value = W / H;
    uniforms.uFocus.value = dist;
    const unit = (dist * t) / (H / 2); // world units per pixel on the object plane
    uniforms.uDust.value.set((W / 2) * unit * 0.95, (H / 2) * unit * 0.85, 3.5);
    uniforms.uDustCenter.value.set((W / 2 - ax) * unit, -(H / 2 - ay) * unit, 0).add(target);
  }
  const ro = new ResizeObserver(() => layout());
  ro.observe(container);
  if (options.anchor) ro.observe(options.anchor);

  // ---------- pointer ----------
  const pointer = { nx: 0, ny: 0, x: 0, y: 0, inside: false };
  const onMove = (event: PointerEvent) => {
    if (event.pointerType === "touch") return;
    const r = canvas.getBoundingClientRect();
    pointer.x = event.clientX - r.left;
    pointer.y = event.clientY - r.top;
    pointer.nx = (pointer.x / r.width) * 2 - 1;
    pointer.ny = -(pointer.y / r.height) * 2 + 1;
    pointer.inside = pointer.x >= 0 && pointer.y >= 0 && pointer.x <= r.width && pointer.y <= r.height;
  };
  const onLeave = () => {
    pointer.inside = false;
  };
  window.addEventListener("pointermove", onMove, { passive: true });
  document.documentElement.addEventListener("pointerleave", onLeave);
  const overAnchor = () => pointer.inside && pointer.x > anchorBox.x && pointer.x < anchorBox.x + anchorBox.w && pointer.y > anchorBox.y && pointer.y < anchorBox.y + anchorBox.h;

  // ---------- timeline ----------
  const TL = CFG.timeline;
  const total = TL.dispersed + TL.converge + TL.hold + TL.dissolve;
  let tl = 0;
  let pinned = -1;
  function phaseAt(time: number) {
    let t = time;
    if (t < TL.dispersed) return { name: "dispersed", a: 0 };
    t -= TL.dispersed;
    if (t < TL.converge) return { name: "converge", a: t / TL.converge };
    t -= TL.converge;
    if (t < TL.hold) return { name: "hold", a: 1 };
    t -= TL.hold;
    return { name: "dissolve", a: 1 - t / TL.dissolve };
  }

  // ---------- loop ----------
  let last = performance.now();
  let raf = 0;
  let running = false;
  let inView = true;
  let firstFrame = true;
  let time = 0;
  let mat = 0;
  let rx = 0;
  let ry = 0;
  let lastStage = -2;

  function frame(now: number) {
    raf = requestAnimationFrame(frame);
    step(Math.min((now - last) / 1000, 0.05));
    last = now;
  }

  function swap() {
    if (!pending) return;
    const next = pending;
    pending = null;
    teardown();
    build(next.key, next.stages);
    resetTimeline();
  }

  function step(dt: number, draw = true) {
    time += dt;
    let ph = phaseAt(tl);
    const switching = pending !== null;
    const waiting = ph.name === "hold" && (pinned >= 0 || overAnchor());
    if (!reduced && !switching && !waiting) {
      tl += dt * (pinned >= 0 ? 3 : 1);
      if (tl >= total) tl -= total;
      ph = phaseAt(tl);
    }
    if (switching) {
      fade = damp(fade, 0, 7, dt);
      if (fade < 0.03) {
        swap();
        ph = phaseAt(tl);
      }
    } else {
      fade = damp(fade, 1, 3.2, dt);
    }
    if (!active) return;
    const assembled = ph.name === "hold" && !pending;

    uniforms.uTime.value = reduced ? 0 : time;
    uniforms.uAssemble.value = pending ? ph.a * fade : ph.a;
    uniforms.uFade.value = fade;
    mat = damp(mat, assembled ? 1 : 0, assembled ? 2.4 : 5, dt);
    uniforms.uMat.value = mat;
    uniforms.uPointerAmt.value = damp(uniforms.uPointerAmt.value, pointer.inside ? 1 : 0, 4, dt);
    uniforms.uPointerNdc.value.set(pointer.nx, pointer.ny);

    pickFloor();
    const nF = active.cards.length;
    const holdT = tl - TL.dispersed - TL.converge;
    const auto = ph.name === "hold" ? Math.min(nF - 1, Math.floor((holdT / TL.hold) * nF)) : -1;
    const focus = hoverIdx >= 0 ? hoverIdx : pinned >= 0 ? pinned : auto;
    active.cards.forEach((card, i) => {
      const fm = clamp(mat * 1.5 - (i / (nF - 1)) * 0.5) * fade;
      card.act = damp(card.act, i === focus && mat > 0.5 ? 1 : 0, 7, dt);
      card.hov = damp(card.hov, i === hoverIdx ? 1 : 0, 8, dt);
      card.piece.update({ fm, act: card.act, hov: card.hov }, dt);
    });
    active.model.tick?.({ time, dt, mat: mat * fade, reduced });
    if (hoverIdx >= 0) moveTip();
    shadowMat.opacity = 0.32 + 0.22 * mat;
    active.cubes.forEach((mesh, i) => {
      if (!reduced) {
        mesh.rotation.y += dt * (0.12 + i * 0.02);
        mesh.position.y = (mesh.userData.baseY as number) + Math.sin(time * 0.6 + i * 1.7) * 0.06;
      }
      mesh.scale.setScalar(0.001 + fade);
      (mesh.material as THREE.MeshPhysicalMaterial).emissiveIntensity = 0.3 + 0.35 * (1 - ph.a);
    });

    const par = pointer.inside ? CFG.parallax : 0;
    rx = damp(rx, -pointer.ny * par * 0.5, 3, dt);
    ry = damp(ry, pointer.nx * par + (reduced ? 0 : Math.sin((time * 2 * Math.PI) / 30) * CFG.sway), 3, dt);
    root.rotation.set(rx, ry, 0);

    const stage = hoverIdx >= 0 ? hoverIdx : pinned >= 0 ? pinned : ph.name === "converge" ? Math.min(nF - 1, Math.floor(ph.a * nF)) : ph.name === "hold" ? auto : 0;
    if (stage !== lastStage) {
      lastStage = stage;
      options.onStage?.(stage);
    }

    if (!draw) return;
    renderer.render(scene, camera);
    if (firstFrame) {
      firstFrame = false;
      requestAnimationFrame(() => {
        canvas.style.opacity = "1";
      });
    }
  }

  function sync() {
    const want = active !== null && inView && !document.hidden && !disposed;
    if (want && !running) {
      running = true;
      last = performance.now();
      raf = requestAnimationFrame(frame);
    } else if (!want && running) {
      running = false;
      cancelAnimationFrame(raf);
    }
  }
  const io = new IntersectionObserver(([entry]) => {
    inView = entry.isIntersecting;
    sync();
  });
  io.observe(container);
  document.addEventListener("visibilitychange", sync);
  layout();

  fontsReady().then(() => {
    if (disposed) return;
    fontsLoaded = true;
    if (requested) {
      build(requested.key, requested.stages);
      requested = null;
      resetTimeline();
      if (reduced) step(0);
    }
    sync();
  });

  return {
    setModel(modelKey, stages) {
      if (!fontsLoaded) {
        requested = { key: modelKey, stages };
        return;
      }
      if (active?.key === modelKey) {
        pending = null;
        return;
      }
      pending = { key: modelKey, stages };
      if (!active || reduced) {
        swap();
        if (reduced) step(0);
        sync();
      }
    },
    renderAt(seconds) {
      if (pending) swap();
      if (!active) return;
      tl = seconds;
      fade = 1;
      mat = phaseAt(seconds).name === "hold" ? 1 : 0;
      for (let i = 0; i < 40; i++) step(0.05, false);
      tl = seconds;
      step(0);
      canvas.style.opacity = "1";
    },
    focus(index) {
      pinned = index;
      if (reduced && active) step(0);
    },
    dispose() {
      disposed = true;
      running = false;
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      document.removeEventListener("visibilitychange", sync);
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      teardown();
      [floorGeo, floorMat, shadowMat, pointsMat, depthMat, cubeGeo, rough, envTex, pmrem].forEach((resource) => resource.dispose());
      floorTex?.dispose();
      key.shadow.map?.dispose();
      renderer.dispose();
      renderer.forceContextLoss();
      canvas.remove();
      tipEl.remove();
    }
  };
}
