import type * as THREE from "three";
import { PALETTE, edges, glass, lineMaterial } from "../materials";
import type { SceneFactory } from "../types";
import { clamp, createRandom, follow, randomOnSphere } from "../utils";

interface Route {
  from: THREE.Vector3;
  to: THREE.Vector3;
}

/** Valores · Redes de inversión: investors linked to three asset hubs with capital pulses. */
export const investmentNetwork: SceneFactory = ({ T, camera }) => {
  camera.fov = 34;
  camera.position.set(0, 0, 10.5);
  camera.updateProjectionMatrix();

  const random = createRandom(31);
  const root = new T.Group();
  const rig = new T.Group();
  root.add(rig);

  const hubPositions = [0, 1, 2].map((index) => {
    const angle = (index / 3) * Math.PI * 2 + Math.PI / 2;
    return new T.Vector3(Math.cos(angle) * 1.5, Math.sin(angle) * 1.2, (index - 1) * 0.4);
  });
  const hubGeometry = new T.OctahedronGeometry(0.34, 0);
  const hubs = hubPositions.map((position, index) => {
    const mesh = new T.Mesh(hubGeometry, glass(T, index === 1 ? PALETTE.info : PALETTE.primary, 0.4));
    mesh.add(edges(T, hubGeometry, PALETTE.primaryLight, 0.95));
    mesh.position.copy(position);
    rig.add(mesh);
    return mesh;
  });

  const investors: THREE.Vector3[] = [];
  const links: THREE.Vector3[] = [];
  const routes: Route[] = [];
  for (let index = 0; index < 54; index++) {
    const point = randomOnSphere(T, random, 2.6 + random() * 1.1);
    investors.push(point);
    const sorted = [...hubPositions].sort((a, b) => a.distanceToSquared(point) - b.distanceToSquared(point));
    links.push(point, sorted[0]);
    routes.push({ from: point, to: sorted[0] });
    if (random() < 0.25) {
      links.push(point, sorted[1]);
      routes.push({ from: point, to: sorted[1] });
    }
  }
  rig.add(new T.LineSegments(new T.BufferGeometry().setFromPoints(links), lineMaterial(T, PALETTE.primary, 0.18)));

  const hubLinks = hubPositions.flatMap((position, index) => [position, hubPositions[(index + 1) % hubPositions.length]]);
  rig.add(new T.LineSegments(new T.BufferGeometry().setFromPoints(hubLinks), lineMaterial(T, PALETTE.primaryLight, 0.6)));

  const investorPoints = new T.Points(
    new T.BufferGeometry().setFromPoints(investors),
    new T.PointsMaterial({ color: PALETTE.infoLight, size: 0.09, transparent: true, opacity: 0.95 })
  );
  rig.add(investorPoints);

  const pulseGeometry = new T.SphereGeometry(0.04, 8, 8);
  const pulseMaterial = new T.MeshBasicMaterial({ color: PALETTE.primaryLight });
  const pulses = Array.from({ length: 28 }, () => {
    const mesh = new T.Mesh(pulseGeometry, pulseMaterial);
    rig.add(mesh);
    return { mesh, route: routes[Math.floor(random() * routes.length)], offset: random() };
  });

  const smooth = { gather: 0 };

  return {
    object: root,
    update(input) {
      const { time, pointer, hover, aspect } = input;
      smooth.gather = follow(smooth.gather, hover, 3, input);

      hubs.forEach((hub, index) => {
        hub.rotation.set(time * 0.4 + index, time * 0.6, 0);
        hub.scale.setScalar(1 + Math.sin(time * 1.6 + index * 2) * 0.06 + smooth.gather * 0.15);
      });
      investorPoints.scale.setScalar(1 - smooth.gather * 0.06);
      pulses.forEach((pulse) => {
        const t = (time * 0.3 + pulse.offset) % 1;
        pulse.mesh.position.lerpVectors(pulse.route.from, pulse.route.to, t);
      });

      rig.rotation.y = time * 0.08 + pointer.x * 0.45;
      rig.rotation.x = -pointer.y * 0.22 + Math.sin(time * 0.2) * 0.05;
      root.scale.setScalar(clamp(aspect, 0.6, 1));
    }
  };
};
