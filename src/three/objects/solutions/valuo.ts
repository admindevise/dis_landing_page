import type * as THREE from "three";
import { PALETTE, glass, gridLines } from "../../materials";
import { createRandom } from "../../utils";
import type { SolutionModelFactory } from "./types";

/** Valuo · a miniature city whose heights form a value heatmap, scanned by a comparables ring. */
export const valuoModel: SolutionModelFactory = (T) => {
  const random = createRandom(59);
  const group = new T.Group();
  const bars: THREE.Mesh<THREE.BoxGeometry, THREE.MeshPhysicalMaterial>[] = [];
  const geometry = new T.BoxGeometry(0.22, 1, 0.22);
  geometry.translate(0, 0.5, 0);
  const baseColor = new T.Color(PALETTE.slate);
  const primaryColor = new T.Color(PALETTE.primary);
  const infoColor = new T.Color(PALETTE.info);
  const count = 11;
  const gap = 0.28;

  for (let i = 0; i < count; i++) for (let j = 0; j < count; j++) {
    const x = (i - (count - 1) / 2) * gap;
    const z = (j - (count - 1) / 2) * gap;
    const value = Math.min(1,
      Math.exp(-((x - 0.5) ** 2 + (z + 0.3) ** 2) / 0.9)
      + 0.7 * Math.exp(-((x + 0.8) ** 2 + (z - 0.7) ** 2) / 0.5)
      + 0.12 * random()
    );
    const color = value < 0.5 ? baseColor.clone().lerp(primaryColor, value * 2) : primaryColor.clone().lerp(infoColor, (value - 0.5) * 2);
    const mesh = new T.Mesh(geometry, glass(T, color.getHex(), 0.55));
    mesh.position.set(x, -1.1, z);
    mesh.scale.y = 0.12 + value * 1.8;
    group.add(mesh);
    bars.push(mesh);
  }

  const grid = gridLines(T, 3.6, 3.6, 12, 12, PALETTE.slate, 0.6);
  grid.position.y = -1.1;
  group.add(grid);

  const ring = new T.Mesh(new T.TorusGeometry(0.55, 0.015, 8, 64), new T.MeshBasicMaterial({ color: PALETTE.primaryLight }));
  ring.rotation.x = Math.PI / 2;
  group.add(ring);

  const highest = bars.reduce((current, mesh) => (mesh.scale.y > current.scale.y ? mesh : current));
  const pin = new T.Group();
  const pinMaterial = new T.MeshBasicMaterial({ color: PALETTE.infoLight });
  const tip = new T.Mesh(new T.ConeGeometry(0.1, 0.25, 16), pinMaterial);
  tip.rotation.x = Math.PI;
  tip.position.y = -0.17;
  pin.add(new T.Mesh(new T.SphereGeometry(0.14, 16, 16), pinMaterial), tip);
  pin.position.set(highest.position.x, 0, highest.position.z);
  group.add(pin);

  return {
    group,
    tick(time, hover, speed) {
      const x = Math.sin(time * 0.5 * speed) * 1.1;
      const z = Math.cos(time * 0.37 * speed) * 1.1;
      const radius = 0.55 * (1 + hover * 0.6);
      ring.position.set(x, -1.05, z);
      ring.scale.setScalar(1 + hover * 0.6);
      bars.forEach((mesh) => {
        const active = Math.hypot(mesh.position.x - x, mesh.position.z - z) < radius;
        mesh.material.emissiveIntensity += ((active ? 0.9 : 0.12) - mesh.material.emissiveIntensity) * 0.15;
      });
      pin.position.y = highest.position.y + highest.scale.y + 0.45 + Math.sin(time * 2) * 0.06 * speed;
    }
  };
};
