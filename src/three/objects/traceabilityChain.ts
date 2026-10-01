import type * as THREE from "three";
import { PALETTE, edges, glass } from "../materials";
import type { SceneFactory } from "../types";
import { clamp, follow, lerp } from "../utils";

/**
 * Cómo trabajamos · Trazabilidad: four linked ledger blocks.
 * State: `active` (stage index) and `progress` (0..1 across the sequence).
 */
export const traceabilityChain: SceneFactory = ({ T, camera }) => {
  camera.fov = 30;
  camera.position.set(0, 1.2, 12);
  camera.lookAt(0, 0, 0);
  camera.updateProjectionMatrix();

  const root = new T.Group();
  const rig = new T.Group();
  root.add(rig);

  const spacing = 2.4;
  const size = 1.15;
  const xs = [-1.5, -0.5, 0.5, 1.5].map((value) => value * spacing);
  const blockGeometry = new T.BoxGeometry(size, size, size);
  const coreGeometry = new T.OctahedronGeometry(0.3, 0);

  const blocks = xs.map((x) => {
    const material = glass(T, PALETTE.primary, 0.16);
    const mesh = new T.Mesh(blockGeometry, material);
    const outline = edges(T, blockGeometry, PALETTE.primaryLight, 0.3);
    mesh.add(outline);
    const coreMaterial = new T.MeshBasicMaterial({ color: PALETTE.infoLight, transparent: true, opacity: 0.3 });
    const core = new T.Mesh(coreGeometry, coreMaterial);
    mesh.add(core);
    mesh.position.x = x;
    rig.add(mesh);
    return { mesh, material, outline: outline.material, core, coreMaterial, lit: 0, scale: 1 };
  });

  const beamLength = spacing - size;
  const beamGeometry = new T.BoxGeometry(beamLength, 0.04, 0.04);
  beamGeometry.translate(beamLength / 2, 0, 0);
  const trackMaterial = new T.MeshBasicMaterial({ color: PALETTE.slate, transparent: true, opacity: 0.8 });
  const fillMaterial = new T.MeshBasicMaterial({ color: PALETTE.primaryLight });
  const fills: THREE.Mesh[] = [];
  xs.slice(0, -1).forEach((x) => {
    const track = new T.Mesh(beamGeometry, trackMaterial);
    track.position.x = x + size / 2;
    rig.add(track);
    const fill = new T.Mesh(beamGeometry, fillMaterial);
    fill.position.x = x + size / 2;
    fill.scale.set(0.001, 1.6, 1.6);
    rig.add(fill);
    fills.push(fill);
  });

  const token = new T.Mesh(new T.SphereGeometry(0.11, 16, 16), new T.MeshBasicMaterial({ color: PALETTE.white }));
  rig.add(token);

  const ring = new T.Mesh(
    new T.TorusGeometry(0.98, 0.012, 8, 72),
    new T.MeshBasicMaterial({ color: PALETTE.primaryLight, transparent: true, opacity: 0.9 })
  );
  rig.add(ring);

  return {
    object: root,
    update(input) {
      const { time, pointer, aspect } = input;
      const active = clamp(Math.round(input.state.active ?? 0), 0, blocks.length - 1);
      const progress = clamp(input.state.progress ?? 0);

      blocks.forEach((block, index) => {
        const target = index < active ? 0.7 : index === active ? 1 : 0.12;
        block.lit = follow(block.lit, target, 5, input);
        block.scale = follow(block.scale, index === active ? 1.12 : 1, 5, input);
        block.material.emissiveIntensity = 0.08 + block.lit * 0.6;
        block.material.opacity = 0.1 + block.lit * 0.22;
        block.outline.opacity = 0.2 + block.lit * 0.75;
        block.coreMaterial.opacity = 0.15 + block.lit * 0.85;
        block.core.rotation.set(time * 0.6 + index, time * 0.8, 0);
        block.mesh.scale.setScalar(block.scale);
        block.mesh.rotation.y = Math.sin(time * 0.4 + index) * 0.12 + block.lit * 0.35;
        block.mesh.position.y = Math.sin(time * 0.9 + index * 0.8) * 0.05;
      });

      fills.forEach((fill, index) => {
        fill.scale.x = Math.max(0.001, clamp(progress * fills.length - index));
      });

      token.position.set(lerp(xs[0], xs[xs.length - 1], progress), Math.sin(time * 2.4) * 0.04, 0);
      ring.position.x = follow(ring.position.x, xs[active], 6, input);
      ring.rotation.set(Math.PI / 2 + Math.sin(time * 0.6) * 0.25, time * 0.5, 0);

      rig.rotation.y = -0.18 + pointer.x * 0.25;
      rig.rotation.x = 0.1 - pointer.y * 0.12;
      // Fill roughly half of wide, short stages while staying inside narrow ones.
      root.scale.setScalar(clamp(aspect * 0.42, 0.42, 2.6));
    }
  };
};
