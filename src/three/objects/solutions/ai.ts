import type * as THREE from "three";
import { PALETTE, edges, glass, lineMaterial } from "../../materials";
import { createRandom, randomOnSphere } from "../../utils";
import type { SolutionModelFactory } from "./types";

interface Brick {
  mesh: THREE.Mesh;
  ordered: THREE.Vector3;
  chaotic: THREE.Vector3;
  rotationX: number;
  rotationY: number;
}

/** Transformación con AI · scattered bricks that a neural layer arranges into a wall. */
export const aiModel: SolutionModelFactory = (T) => {
  const random = createRandom(73);
  const group = new T.Group();
  const axis = new T.Vector3(0, 1, 0);
  const geometry = new T.BoxGeometry(0.5, 0.24, 0.26);
  const bricks: Brick[] = [];

  for (let row = 0; row < 5; row++) for (let column = 0; column < 6; column++) {
    if (row % 2 && column === 5) continue;
    const mesh = new T.Mesh(geometry, glass(T, row % 2 ? PALETTE.primary : PALETTE.info, 0.24));
    mesh.add(edges(T, geometry, PALETTE.primaryLight, 0.6));
    group.add(mesh);
    bricks.push({
      mesh,
      ordered: new T.Vector3((column - 2.5 + (row % 2 ? 0.5 : 0)) * 0.54, (row - 2) * 0.28, 0),
      chaotic: randomOnSphere(T, random, 1.4 + random() * 1.4),
      rotationX: random() * 6,
      rotationY: random() * 6
    });
  }

  const nodes: THREE.Vector3[] = [];
  [-2.2, 0, 2.2].forEach((x) => {
    for (let index = 0; index < 5; index++) nodes.push(new T.Vector3(x, (index - 2) * 0.55, -1.6));
  });
  const lines: THREE.Vector3[] = [];
  for (let i = 0; i < 5; i++) for (let j = 0; j < 5; j++) lines.push(nodes[i], nodes[5 + j], nodes[5 + i], nodes[10 + j]);
  group.add(new T.LineSegments(new T.BufferGeometry().setFromPoints(lines), lineMaterial(T, PALETTE.info, 0.2)));
  group.add(new T.Points(new T.BufferGeometry().setFromPoints(nodes), new T.PointsMaterial({ color: PALETTE.infoLight, size: 0.12 })));

  const vector = new T.Vector3();

  return {
    group,
    tick(time, hover, speed) {
      let progress = speed ? (Math.sin(time * 0.5) + 1) / 2 : 1;
      progress = Math.max(progress, hover);
      progress = progress * progress * (3 - 2 * progress);
      bricks.forEach((brick) => {
        vector.copy(brick.chaotic).applyAxisAngle(axis, time * 0.2 * speed);
        brick.mesh.position.lerpVectors(vector, brick.ordered, progress);
        brick.mesh.rotation.set(brick.rotationX * (1 - progress), brick.rotationY * (1 - progress), 0);
      });
    }
  };
};
