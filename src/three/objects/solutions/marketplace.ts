import type * as THREE from "three";
import { PALETTE, edges, glass } from "../../materials";
import { createRandom } from "../../utils";
import type { SolutionModelFactory } from "./types";

/** Devise Marketplace · a building split into fractional units flowing to investors. */
export const marketplaceModel: SolutionModelFactory = (T) => {
  const random = createRandom(41);
  const group = new T.Group();
  const cells: THREE.Mesh[] = [];
  const geometry = new T.BoxGeometry(0.4, 0.4, 0.4);

  for (let y = 0; y < 6; y++) for (let x = 0; x < 3; x++) for (let z = 0; z < 3; z++) {
    const mesh = new T.Mesh(geometry, glass(T, y % 2 ? PALETTE.primary : PALETTE.info, 0.2));
    mesh.add(edges(T, geometry, PALETTE.primaryLight, 0.5));
    mesh.position.set((x - 1) * 0.44, (y - 2.5) * 0.44, (z - 1) * 0.44);
    mesh.userData.base = mesh.position.clone();
    group.add(mesh);
    cells.push(mesh);
  }

  const investorGeometry = new T.OctahedronGeometry(0.16, 0);
  const investorMaterial = new T.MeshBasicMaterial({ color: PALETTE.infoLight });
  const investors = Array.from({ length: 4 }, (_, index) => {
    const angle = (index / 4) * Math.PI * 2 + 0.4;
    const investor = new T.Mesh(investorGeometry, investorMaterial);
    investor.position.set(Math.cos(angle) * 2.6, -0.6 + (index % 2) * 0.9, Math.sin(angle) * 2.6);
    group.add(investor);
    return investor;
  });

  const count = 70;
  const positions = new Float32Array(count * 3);
  const paths = Array.from({ length: count }, (_, index) => ({
    cell: cells[Math.floor(random() * cells.length)],
    investor: investors[index % investors.length],
    offset: random()
  }));
  const attribute = new T.BufferAttribute(positions, 3);
  const particleGeometry = new T.BufferGeometry();
  particleGeometry.setAttribute("position", attribute);
  group.add(new T.Points(particleGeometry, new T.PointsMaterial({ color: PALETTE.primaryLight, size: 0.05, transparent: true, opacity: 0.9 })));

  const position = new T.Vector3();

  return {
    group,
    tick(time, hover, speed) {
      cells.forEach((mesh) => mesh.position.copy(mesh.userData.base as THREE.Vector3).multiplyScalar(1 + hover * 0.6));
      paths.forEach((path, index) => {
        const progress = (time * 0.18 * speed + path.offset) % 1;
        position.lerpVectors(path.cell.position, path.investor.position, progress);
        positions[index * 3] = position.x;
        positions[index * 3 + 1] = position.y + Math.sin(progress * Math.PI) * 0.4;
        positions[index * 3 + 2] = position.z;
      });
      attribute.needsUpdate = true;
      investors.forEach((investor, index) => {
        investor.rotation.y = time * (0.6 + index * 0.1);
      });
    }
  };
};
