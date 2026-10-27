import * as THREE from "three";

// Shared vocabulary for the solution scenes: every product is a six-step object that
// particles from five sources assemble, hold and dissolve (see engine.ts).

export const FLOOR_Y = -2.9;
export const TIER_H = 0.9;
export const FLOOR_H = 0.225;

export const FONT = {
  display: "'Space Grotesk', system-ui, sans-serif",
  ui: "'Outfit', system-ui, sans-serif",
  body: "'Manrope', system-ui, sans-serif"
};

export interface ScenePalette {
  /** Background field of the stage. */
  night: string;
  /** Glass bodies. */
  glass: string;
  /** Source cubes and dark metal. */
  deep: string;
  base: string;
  c700: string;
  c50: string;
}

export interface StageText {
  name: string;
  summary: string;
  title: string;
  desc: string;
  tag: string;
}

export interface SourceSpec {
  code: string;
  pos: [number, number, number];
}

/** A segment the particles land on: a → b with a sampling weight (length × weight). */
export type Seg = [number, number, number, number, number, number, number];

export interface LabelRect {
  canvas: HTMLCanvasElement;
  x: number;
  y: number;
  z: number;
  w: number;
  h: number;
}

export interface PieceState {
  /** Material reveal of this piece, 0..1. */
  fm: number;
  /** Focus (auto cycle, hover or pinned step), 0..1. */
  act: number;
  /** Pointer hover, 0..1. */
  hov: number;
}

/** One of the six steps: a group the particles build, with its own hit volume. */
export interface Piece {
  group: THREE.Object3D;
  hit: THREE.Object3D;
  /** Segments in `group` local space. */
  segs: Seg[];
  /** Optional sign whose lit pixels also become particle targets (group local, facing +z). */
  label?: LabelRect;
  update(state: PieceState, dt: number): void;
}

export interface SceneView {
  target: [number, number, number];
  dir: [number, number, number];
  fitRadius: number;
}

export interface SolutionModel {
  object: THREE.Object3D;
  pieces: Piece[];
  sources: SourceSpec[];
  view?: Partial<SceneView>;
  /** Particle count multiplier for dense objects (default 1). */
  density?: number;
  tick?(frame: { time: number; dt: number; mat: number; reduced: boolean }): void;
}

export interface Kit {
  palette: ScenePalette;
  stages: StageText[];
  rng: () => number;
  aniso: number;
  /** Invisible material for hit volumes and hidden faces. */
  hidden: THREE.Material;
  track<T extends { dispose(): void }>(resource: T): T;
}

export type ModelFactory = (kit: Kit) => SolutionModel;

export interface ModelDefinition {
  palette: ScenePalette;
  create: ModelFactory;
}

// ---------- math ----------

export const clamp = (x: number, a = 0, b = 1) => Math.min(b, Math.max(a, x));
export const damp = (current: number, target: number, lambda: number, dt: number) => current + (target - current) * (1 - Math.exp(-lambda * dt));

export function mulberry32(seed: number) {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function rgba(hex: string, alpha: number) {
  const c = new THREE.Color(hex);
  return `rgba(${Math.round(c.r * 255)},${Math.round(c.g * 255)},${Math.round(c.b * 255)},${alpha})`;
}

export function mkCanvas(w: number, h: number) {
  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  return canvas;
}

export function colorTexture(canvas: HTMLCanvasElement) {
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

// ---------- segments ----------

export function segments() {
  const segs: Seg[] = [];
  const seg = (ax: number, ay: number, az: number, bx: number, by: number, bz: number, wt = 1) => {
    segs.push([ax, ay, az, bx, by, bz, Math.hypot(bx - ax, by - ay, bz - az) * wt]);
  };
  const rim = (x0: number, x1: number, z0: number, z1: number, y: number, wt = 1) => {
    seg(x0, y, z0, x1, y, z0, wt);
    seg(x1, y, z0, x1, y, z1, wt);
    seg(x1, y, z1, x0, y, z1, wt);
    seg(x0, y, z1, x0, y, z0, wt);
  };
  /** Horizontal arc around (cx, cz); angle 0 faces +z, growing towards +x. */
  const arc = (cx: number, cz: number, r: number, a0: number, a1: number, y: number, wt = 1, steps = 8) => {
    for (let i = 0; i < steps; i++) {
      const t0 = a0 + ((a1 - a0) * i) / steps;
      const t1 = a0 + ((a1 - a0) * (i + 1)) / steps;
      seg(cx + Math.sin(t0) * r, y, cz + Math.cos(t0) * r, cx + Math.sin(t1) * r, y, cz + Math.cos(t1) * r, wt);
    }
  };
  return { segs, seg, rim, arc };
}

/** Line segments from a flat [x, y, z, x, y, z, …] list. */
export function lineSegments(kit: Kit, points: number[], material: THREE.LineBasicMaterial) {
  const geometry = kit.track(new THREE.BufferGeometry());
  geometry.setAttribute("position", new THREE.Float32BufferAttribute(points, 3));
  return new THREE.LineSegments(geometry, material);
}

// ---------- materials ----------

export function glassBody(kit: Kit, color = kit.palette.glass) {
  return kit.track(new THREE.MeshPhysicalMaterial({
    color,
    roughness: 0.3,
    metalness: 0.1,
    clearcoat: 1,
    clearcoatRoughness: 0.12,
    transparent: true,
    opacity: 0.05,
    envMapIntensity: 0.7,
    depthWrite: false
  }));
}

export function slab(kit: Kit) {
  return kit.track(new THREE.MeshPhysicalMaterial({
    color: kit.palette.base,
    roughness: 0.25,
    metalness: 0.2,
    clearcoat: 1,
    transparent: true,
    opacity: 0.08,
    depthWrite: false,
    envMapIntensity: 0.8
  }));
}

export function inkLine(kit: Kit, opacity = 0.1, color = kit.palette.c50) {
  return kit.track(new THREE.LineBasicMaterial({ color, transparent: true, opacity }));
}

export function flat(kit: Kit, map?: THREE.Texture, color?: string) {
  const material = new THREE.MeshBasicMaterial({ map, transparent: true, opacity: 0, depthWrite: false, toneMapped: false });
  if (color) material.color.set(color);
  return kit.track(material);
}

// ---------- textures ----------

const LABEL_W = 1024;
const LABEL_H = 220;

/** The step sign: brand square, step name and the datum it shows on the facade. */
export function drawLabel(kit: Kit, index: number) {
  const { palette, stages } = kit;
  const canvas = mkCanvas(LABEL_W, LABEL_H);
  const g = canvas.getContext("2d")!;
  const my = LABEL_H / 2;
  g.fillStyle = rgba(palette.night, 0.6);
  g.beginPath();
  g.roundRect(6, 18, LABEL_W - 12, LABEL_H - 36, 20);
  g.fill();
  g.fillStyle = palette.base;
  g.fillRect(48, my - 14, 28, 28);
  g.textBaseline = "alphabetic";
  g.textAlign = "left";
  g.fillStyle = palette.c50;
  g.font = `600 92px ${FONT.display}`;
  g.fillText(stages[index].name, 108, my + 32);
  g.font = `500 34px ${FONT.ui}`;
  g.textAlign = "right";
  g.fillStyle = rgba(palette.c50, 0.72);
  g.fillText(stages[index].tag, LABEL_W - 44, my + 12);
  return canvas;
}

/** A sign plane for step `index`, `width` world units wide, placed by the caller. */
export function makeLabel(kit: Kit, index: number, width: number) {
  const canvas = drawLabel(kit, index);
  const texture = kit.track(colorTexture(canvas));
  texture.anisotropy = kit.aniso;
  const material = flat(kit, texture);
  const height = (width * LABEL_H) / LABEL_W;
  const mesh = new THREE.Mesh(kit.track(new THREE.PlaneGeometry(width, height)), material);
  const place = (x: number, y: number, z: number): LabelRect => {
    mesh.position.set(x, y, z);
    return { canvas, x, y, z: z + 0.015, w: width, h: height };
  };
  return { mesh, material, place };
}

/**
 * Curtain wall: `bays` modules × 4 floors per tile with per-panel reflections, mullions and slab bands.
 * `lit` > 0 lights that share of the panels warm, as occupied rooms.
 */
export function curtainTexture(kit: Kit, seed = 31, lit = 0) {
  const { palette } = kit;
  const S = 512;
  const canvas = mkCanvas(S, S);
  const g = canvas.getContext("2d")!;
  const rnd = mulberry32(seed);
  const q = S / 4;
  for (let fy = 0; fy < 4; fy++) {
    for (let bx = 0; bx < 4; bx++) {
      const a = 0.03 + rnd() * 0.11;
      const gradient = g.createLinearGradient(bx * q, fy * q, bx * q + q, fy * q + q);
      gradient.addColorStop(0, rgba(palette.c50, Number(a.toFixed(3))));
      gradient.addColorStop(1, rgba(palette.base, Number((a * 0.4).toFixed(3))));
      g.fillStyle = gradient;
      g.fillRect(bx * q, fy * q, q, q);
      if (lit && rnd() < lit) {
        g.fillStyle = rgba(palette.base, 0.28);
        g.fillRect(bx * q + 10, fy * q + 18, q - 20, q - 26);
        g.fillStyle = rgba(palette.c50, 0.22);
        g.fillRect(bx * q + 10, fy * q + q - 22, q - 20, 6);
      }
      g.fillStyle = rgba(palette.c50, 0.1);
      g.fillRect(bx * q + q / 2, fy * q, 1.5, q);
    }
  }
  g.fillStyle = rgba(palette.c50, 0.42);
  for (let i = 0; i < 4; i++) g.fillRect(i * q, 0, 3, S);
  g.fillStyle = rgba(palette.c50, 0.3);
  for (let i = 0; i < 4; i++) g.fillRect(0, i * q, S, 10);
  const texture = colorTexture(canvas);
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.anisotropy = kit.aniso;
  return kit.track(texture);
}

/** Box whose side UVs run in world units, so curtain-wall modules line up across volumes. */
export function facadeGeo(w: number, h: number, d: number, ox: number, oz: number, bay = 0.25) {
  const geometry = new THREE.BoxGeometry(w, h, d);
  const p = geometry.attributes.position;
  const n = geometry.attributes.normal;
  const uv = geometry.attributes.uv;
  for (let i = 0; i < p.count; i++) {
    const y = (p.getY(i) + h / 2) / (FLOOR_H * 4);
    if (Math.abs(n.getZ(i)) > 0.5) uv.setXY(i, (p.getX(i) + ox) / (bay * 4), y);
    else if (Math.abs(n.getX(i)) > 0.5) uv.setXY(i, (p.getZ(i) + oz) / (bay * 4), y);
  }
  return geometry;
}

/** Mesh pair for a curtain-walled block: glass body plus the textured walls (top and bottom hidden). */
export function curtainBlock(kit: Kit, geometry: THREE.BufferGeometry, body: THREE.Material, wall: THREE.Material) {
  const bodyMesh = new THREE.Mesh(geometry, body);
  bodyMesh.receiveShadow = true;
  const wallMesh = new THREE.Mesh(geometry, [wall, wall, kit.hidden, kit.hidden, wall, wall]);
  wallMesh.scale.setScalar(1.004);
  return { bodyMesh, wallMesh };
}

/** Four vertical corner lines of a w × d footprint centred on the origin. */
export function cornerLines(w: number, d: number, h: number, base = 0) {
  const hx = w / 2;
  const hz = d / 2;
  const out: number[] = [];
  [[-hx, -hz], [hx, -hz], [hx, hz], [-hx, hz]].forEach(([x, z]) => out.push(x, base, z, x, base + h, z));
  return out;
}
