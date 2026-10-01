import type * as THREE from "three";
import { PALETTE, edges, glass } from "../../materials";
import type { SolutionModelFactory } from "./types";

/** Devise Business · stacked modules that separate on hover, crossed by data pulses. */
export const businessModel: SolutionModelFactory = (T) => {
  const group = new T.Group();
  const modules: THREE.Mesh[] = [];
  const colors = [PALETTE.slate, PALETTE.primary, PALETTE.info];

  ([[2.6, -1.05], [2.2, 0], [1.8, 1.05]] as const).forEach(([width, y], layer) => {
    const size = width / 2 - 0.1;
    const geometry = new T.BoxGeometry(size, 0.55, size);
    for (let index = 0; index < 4; index++) {
      const mesh = new T.Mesh(geometry, glass(T, colors[layer], 0.22));
      mesh.add(edges(T, geometry, layer ? PALETTE.primaryLight : PALETTE.infoLight, 0.6));
      mesh.position.set(((index % 2) - 0.5) * (width / 2), y, (Math.floor(index / 2) - 0.5) * (width / 2));
      mesh.userData.base = mesh.position.clone();
      group.add(mesh);
      modules.push(mesh);
    }
  });

  group.add(new T.Mesh(
    new T.CylinderGeometry(0.025, 0.025, 3.4, 8),
    new T.MeshBasicMaterial({ color: PALETTE.primaryLight, transparent: true, opacity: 0.6 })
  ));

  const pulseGeometry = new T.SphereGeometry(0.07, 12, 12);
  const pulseMaterial = new T.MeshBasicMaterial({ color: PALETTE.primaryLight });
  const pulses = Array.from({ length: 5 }, (_, index) => {
    const pulse = new T.Mesh(pulseGeometry, pulseMaterial);
    pulse.userData.offset = index / 5;
    group.add(pulse);
    return pulse;
  });

  return {
    group,
    tick(time, hover, speed) {
      modules.forEach((mesh) => {
        const base = mesh.userData.base as THREE.Vector3;
        mesh.position.set(base.x * (1 + hover * 0.4), base.y * (1 + hover * 0.5), base.z * (1 + hover * 0.4));
      });
      pulses.forEach((pulse) => {
        pulse.position.y = (-1.7 + ((time * 0.25 * speed + pulse.userData.offset) % 1) * 3.4) * (1 + hover * 0.5);
      });
    }
  };
};
