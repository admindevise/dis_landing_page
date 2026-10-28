import type * as THREE from "three";
import { PALETTE, edges, lineMaterial } from "../materials";
import type { SceneFactory, ThreeModule } from "../types";
import { clamp, createRandom, follow, randomOnSphere, smoothstep } from "../utils";

// Face tones of the disHub symbol (top, left ±x, right ±z), sides deepened so the cube reads in 3D.
const FACE = { top: 0x7adcd9, left: 0x3a9fa1, right: 0x1f6a6d } as const;
const NAVY = 0x0f1a26;
/** Tilt that looks down the cube diagonal, so its silhouette is the brand hexagon. */
const ISO_TILT = Math.atan(1 / Math.SQRT2);
const BRICK = 0.56;
const GAP = 0.07;
const FRAME_RADIUS = 2.45;
const FRAME_DEPTH = 0.32;
const POP_PERIOD = 1.6;

interface Brick {
  mesh: THREE.Mesh<THREE.BoxGeometry, THREE.MeshBasicMaterial>;
  home: THREE.Vector3;
  from: THREE.Vector3;
  normal: THREE.Vector3;
  layer: number;
  delay: number;
}

interface Source {
  mesh: THREE.Object3D;
  base: THREE.Vector3;
  vertex: number;
  phase: number;
}

/** Pointy-top hexagon in the XY plane, facing the camera like the brand symbol. */
function hexagon(T: ThreeModule, radius: number, z = 0) {
  return Array.from({ length: 6 }, (_, index) => {
    const angle = Math.PI / 2 + (index * Math.PI) / 3;
    return new T.Vector3(Math.cos(angle) * radius, Math.sin(angle) * radius, z);
  });
}

/** Box whose faces carry the symbol tones through vertex colors (face order: ±x, ±y, ±z). */
function brickGeometry(T: ThreeModule) {
  const geometry = new T.BoxGeometry(BRICK, BRICK, BRICK);
  const tones = [FACE.left, FACE.left, FACE.top, FACE.right, FACE.right, FACE.right].map((hex) => new T.Color(hex));
  const colors = new Float32Array(geometry.attributes.position.count * 3);
  for (let vertex = 0; vertex < geometry.attributes.position.count; vertex++) {
    tones[Math.floor(vertex / 4)].toArray(colors, vertex * 3);
  }
  geometry.setAttribute("color", new T.BufferAttribute(colors, 3));
  return geometry;
}

function glowTexture(T: ThreeModule) {
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = 128;
  const context = canvas.getContext("2d");
  if (context) {
    const gradient = context.createRadialGradient(64, 64, 0, 64, 64, 64);
    gradient.addColorStop(0, "rgba(255,255,255,1)");
    gradient.addColorStop(0.25, "rgba(95,207,209,0.7)");
    gradient.addColorStop(1, "rgba(2,178,178,0)");
    context.fillStyle = gradient;
    context.fillRect(0, 0, 128, 128);
  }
  return new T.CanvasTexture(canvas);
}

const easeOut = (t: number) => 1 - Math.pow(1 - clamp(t), 3);

/**
 * Hero · Núcleo disHub: the brand symbol built in 3D. A cube of BrickFlow bricks, seen down its
 * diagonal inside a hexagonal frame, assembles from the bottom up, receives data from loose pieces
 * outside and opens on scroll to reveal the AI core at its root.
 */
export const dishubCore: SceneFactory = ({ T, camera }) => {
  camera.fov = 34;
  camera.position.set(0, 0, 11);
  camera.updateProjectionMatrix();

  const random = createRandom(23);
  const root = new T.Group();
  const core = new T.Group();
  root.add(core);

  // Brand hexagon: a shallow prism so pointer tilt reveals its depth.
  const frame = new T.Group();
  const front = hexagon(T, FRAME_RADIUS, FRAME_DEPTH);
  const back = hexagon(T, FRAME_RADIUS, -FRAME_DEPTH);
  const framePoints: THREE.Vector3[] = [];
  front.forEach((point, index) => {
    const next = (index + 1) % 6;
    framePoints.push(point, front[next], back[index], back[next], point, back[index]);
  });
  const frameMaterial = lineMaterial(T, PALETTE.primaryLight, 0.55);
  frame.add(new T.LineSegments(new T.BufferGeometry().setFromPoints(framePoints), frameMaterial));
  const inner = hexagon(T, FRAME_RADIUS * 0.9, FRAME_DEPTH);
  const innerMaterial = lineMaterial(T, PALETTE.primary, 0.22);
  frame.add(new T.LineLoop(new T.BufferGeometry().setFromPoints(inner), innerMaterial));
  const plateShape = new T.Shape(back.map((point) => new T.Vector2(point.x, point.y)));
  const plateMaterial = new T.MeshBasicMaterial({ color: NAVY, transparent: true, opacity: 0.55, depthWrite: false });
  frame.add(new T.Mesh(new T.ShapeGeometry(plateShape), plateMaterial));
  core.add(frame);

  const nodeGeometry = new T.SphereGeometry(0.055, 12, 12);
  const vertexNodes = front.map((point) => {
    const node = new T.Mesh(nodeGeometry, new T.MeshBasicMaterial({ color: PALETTE.primaryLight }));
    node.position.copy(point);
    frame.add(node);
    return node;
  });

  // The cube, rotated so its front corner points at the camera (true isometric view).
  const cube = new T.Group();
  cube.rotation.set(ISO_TILT, Math.PI / 4, 0);
  core.add(cube);

  const geometry = brickGeometry(T);
  const edgeMaterial = lineMaterial(T, PALETTE.primaryLight, 0.25);
  const edgeGeometry = new T.EdgesGeometry(geometry);
  const step = BRICK + GAP;
  const bricks: Brick[] = [];
  for (let x = 0; x < 3; x++) {
    for (let y = 0; y < 3; y++) {
      for (let z = 0; z < 3; z++) {
        if (x === 1 && y === 1 && z === 1) continue;
        const mesh = new T.Mesh(geometry, new T.MeshBasicMaterial({ vertexColors: true }));
        mesh.add(new T.LineSegments(edgeGeometry, edgeMaterial));
        const home = new T.Vector3((x - 1) * step, (y - 1) * step, (z - 1) * step);
        // Visible faces are -x, +y and +z: surface bricks pop out along one of them.
        const normal = y === 2 ? new T.Vector3(0, 1, 0) : x === 0 ? new T.Vector3(-1, 0, 0) : z === 2 ? new T.Vector3(0, 0, 1) : new T.Vector3();
        const from = home.clone().normalize().add(randomOnSphere(T, random, 0.6)).normalize().multiplyScalar(3.2).add(home);
        cube.add(mesh);
        bricks.push({ mesh, home, from, normal, layer: y, delay: 0.35 + y * 0.42 + (x + z) * 0.06 + random() * 0.08 });
      }
    }
  }
  const surface = bricks.filter((brick) => brick.normal.lengthSq() > 0);

  // AI core: hidden at the centre until the bricks open.
  const seedGeometry = new T.BoxGeometry(BRICK * 0.62, BRICK * 0.62, BRICK * 0.62);
  const seed = new T.Mesh(seedGeometry, new T.MeshBasicMaterial({ color: 0xe6fffe }));
  seed.add(edges(T, seedGeometry, PALETTE.primaryLight, 0.9));
  cube.add(seed);
  const texture = glowTexture(T);
  const glow = new T.Sprite(new T.SpriteMaterial({ map: texture, color: PALETTE.primaryLight, transparent: true, opacity: 0.9, blending: T.AdditiveBlending, depthWrite: false }));
  glow.scale.setScalar(1.6);
  cube.add(glow);

  // Loose pieces outside the frame (scattered technology) feeding the hexagon vertices.
  const pieceGeometry = new T.BoxGeometry(0.2, 0.2, 0.2);
  const pieceMaterial = new T.MeshBasicMaterial({ color: PALETTE.deep, transparent: true, opacity: 0.55 });
  const sources: Source[] = Array.from({ length: 12 }, (_, index) => {
    const vertex = index % 6;
    const angle = Math.PI / 2 + (vertex * Math.PI) / 3 + (index < 6 ? -0.28 : 0.3) + (random() - 0.5) * 0.2;
    const radius = index < 6 ? 4.1 + random() * 0.5 : 5 + random() * 0.8;
    const mesh = new T.Mesh(pieceGeometry, pieceMaterial);
    mesh.add(edges(T, pieceGeometry, PALETTE.primaryLight, 0.7));
    core.add(mesh);
    return { mesh, base: new T.Vector3(Math.cos(angle) * radius, Math.sin(angle) * radius, (random() - 0.5) * 2.4), vertex, phase: random() * Math.PI * 2 };
  });

  const linkPositions = new Float32Array(sources.length * 12);
  const linkAttribute = new T.BufferAttribute(linkPositions, 3);
  const linkGeometry = new T.BufferGeometry();
  linkGeometry.setAttribute("position", linkAttribute);
  core.add(new T.LineSegments(linkGeometry, lineMaterial(T, PALETTE.primary, 0.3)));

  const pulseGeometry = new T.SphereGeometry(0.045, 10, 10);
  const pulseMaterial = new T.MeshBasicMaterial({ color: PALETTE.primaryLight });
  const pulses = sources.map((_, index) => {
    const pulse = new T.Mesh(pulseGeometry, pulseMaterial);
    pulse.userData.offset = (index * 0.37) % 1;
    core.add(pulse);
    return pulse;
  });

  const field = new T.Points(
    new T.BufferGeometry().setFromPoints(Array.from({ length: 110 }, () => randomOnSphere(T, random, 5 + random() * 3))),
    new T.PointsMaterial({ color: PALETTE.primaryLight, size: 0.04, transparent: true, opacity: 0.55 })
  );
  root.add(field);

  const smooth = { spread: 0 };
  let buildStart = -1;
  const position = new T.Vector3();
  const centre = new T.Vector3();
  const vertex = new T.Vector3();
  const vertexGlow = new Array<number>(6).fill(0);

  return {
    object: root,
    update(input) {
      const { time, pointer, exit, aspect, hover, reduced } = input;
      const wide = aspect > 1.15;
      root.position.x = wide ? Math.min(3.1, aspect * 1.35) : 0;
      root.position.y = wide ? -0.1 : 1.7;
      root.scale.setScalar(wide ? 0.86 : Math.max(0.5, aspect * 0.85));
      // Turn the core toward the camera so the off-centre perspective keeps the isometric view.
      const facing = Math.atan2(root.position.x, camera.position.z);

      // The cube assembles once the preloader is gone (`ready` state), or at once under reduced motion.
      if (buildStart < 0 && (input.state.ready || reduced)) buildStart = time;
      const clock = buildStart < 0 ? -1 : time - buildStart;

      smooth.spread = follow(smooth.spread, smoothstep(0, 0.7, exit) + hover * 0.08, 3, input);
      const spread = smooth.spread;

      // A light wave climbs the three layers, then rests (the BrickFlow stages).
      const wave = (time * 0.6) % 6;
      const popIndex = Math.floor(time / POP_PERIOD);
      const popBrick = surface[Math.floor(createRandom(popIndex + 101)() * surface.length)];
      const pop = Math.sin(Math.PI * clamp(((time % POP_PERIOD) / POP_PERIOD) * 1.6));

      bricks.forEach((brick) => {
        const build = reduced ? 1 : easeOut((clock - brick.delay) / 0.9);
        const lit = Math.max(0, 1 - Math.abs(wave - brick.layer - 0.5) * 1.4) * 0.28;
        const popping = brick === popBrick && build >= 1 ? pop : 0;
        position.copy(brick.home).multiplyScalar(1 + spread * 0.85).addScaledVector(brick.normal, popping * 0.2);
        brick.mesh.position.lerpVectors(brick.from, position, build);
        brick.mesh.scale.setScalar((0.25 + build * 0.75) * (1 - clamp(spread) * 0.3));
        brick.mesh.material.color.setScalar(0.55 + build * 0.45 + lit + popping * 0.35);
      });

      const assembled = reduced ? 1 : smoothstep(0.3, 2.3, clock);
      const open = clamp(spread * 1.6);
      seed.rotation.set(time * 0.5, time * 0.7, 0);
      seed.scale.setScalar(0.8 + open * 0.6 + Math.sin(time * 2) * 0.04);
      glow.scale.setScalar(1.4 + open * 2.2);
      glow.material.opacity = 0.5 + open * 0.5;

      frame.scale.setScalar(1 + spread * 0.18);
      frameMaterial.opacity = (0.2 + assembled * 0.35) * (1 - open * 0.5);
      innerMaterial.opacity = 0.22 * (1 - open);
      plateMaterial.opacity = 0.55 * (1 - open * 0.7);

      sources.forEach((source, index) => {
        const target = vertex.copy(vertexNodes[source.vertex].position).multiplyScalar(frame.scale.x);
        const piece = source.mesh.position;
        piece.copy(source.base).multiplyScalar(1 + spread * 0.25);
        piece.y += Math.sin(time * 0.7 + source.phase) * 0.12;
        source.mesh.rotation.set(time * 0.35 + source.phase, time * 0.25, 0);
        linkPositions.set([piece.x, piece.y, piece.z, target.x, target.y, target.z, target.x, target.y, target.z, centre.x, centre.y, centre.z], index * 12);

        // Pulses travel piece → hexagon vertex → into the cube, where the bricks hide them.
        const t = (time * 0.32 + pulses[index].userData.offset) % 1;
        if (t < 0.7) pulses[index].position.lerpVectors(piece, target, t / 0.7);
        else pulses[index].position.lerpVectors(target, centre, (t - 0.7) / 0.3);
        pulses[index].visible = assembled > 0.5;
        if (t > 0.66 && t < 0.78) vertexGlow[source.vertex] = 1;
      });
      linkAttribute.needsUpdate = true;
      vertexNodes.forEach((node, index) => {
        vertexGlow[index] = follow(vertexGlow[index], 0, 4, input);
        node.scale.setScalar(1 + vertexGlow[index] * 0.9);
      });

      core.rotation.y = -facing + pointer.x * 0.34 + Math.sin(time * 0.22) * 0.07 + exit * 0.6;
      core.rotation.x = -pointer.y * 0.24 + Math.sin(time * 0.17) * 0.04 + exit * 0.3;
      field.rotation.y = -time * 0.02 + pointer.x * 0.15;
      field.rotation.x = -pointer.y * 0.08;
      camera.position.z = 11 + exit * 2.5;
    },
    dispose() {
      texture.dispose();
    }
  };
};
