import type * as THREE from "three";
import { PALETTE, edges, glass, lineMaterial } from "../materials";
import type { SceneFactory } from "../types";
import { createRandom, fibonacciSphere, follow, smoothstep } from "../utils";

interface OrbitNode {
  mesh: THREE.Mesh;
  radius: number;
  angle: number;
  speed: number;
  height: number;
  phase: number;
}

/** Hero · Activos conectados: an asset built in layers, linked to orbiting nodes that exchange data. */
export const connectedAssets: SceneFactory = ({ T, camera }) => {
  camera.fov = 34;
  camera.position.set(0, 0, 11);
  camera.updateProjectionMatrix();

  const random = createRandom(11);
  const root = new T.Group();
  const rig = new T.Group();
  root.add(rig);

  const slabGeometry = new T.BoxGeometry(1.7, 0.12, 1.7);
  const slabs = Array.from({ length: 6 }, (_, index) => {
    const slab = new T.Mesh(slabGeometry, glass(T, index % 2 ? PALETTE.primary : PALETTE.info, 0.22));
    slab.add(edges(T, slabGeometry, PALETTE.primaryLight, 0.8));
    slab.userData.baseY = (index - 2.5) * 0.38;
    rig.add(slab);
    return slab;
  });

  const spine = new T.Mesh(
    new T.CylinderGeometry(0.03, 0.03, 3, 8),
    new T.MeshBasicMaterial({ color: PALETTE.primaryLight, transparent: true, opacity: 0.75 })
  );
  rig.add(spine);

  const shell = edges(T, new T.IcosahedronGeometry(2.05, 1), PALETTE.info, 0.16);
  rig.add(shell);

  const octahedron = new T.OctahedronGeometry(0.17, 0);
  const cube = new T.BoxGeometry(0.24, 0.24, 0.24);
  const nodes: OrbitNode[] = Array.from({ length: 12 }, (_, index) => {
    const isAsset = index % 3 === 0;
    const geometry = isAsset ? cube : octahedron;
    const mesh = new T.Mesh(geometry, glass(T, isAsset ? PALETTE.primary : PALETTE.infoLight, 0.6));
    mesh.add(edges(T, geometry, PALETTE.primaryLight, 0.9));
    rig.add(mesh);
    return {
      mesh,
      radius: index % 2 ? 3.5 : 2.8,
      angle: (index / 12) * Math.PI * 2 + random() * 0.4,
      speed: index % 2 ? 0.09 : -0.12,
      height: (random() - 0.5) * 2,
      phase: random() * Math.PI * 2
    };
  });

  const linkPositions = new Float32Array(nodes.length * 6);
  const linkAttribute = new T.BufferAttribute(linkPositions, 3);
  const linkGeometry = new T.BufferGeometry();
  linkGeometry.setAttribute("position", linkAttribute);
  rig.add(new T.LineSegments(linkGeometry, lineMaterial(T, PALETTE.primary, 0.4)));

  const pulseGeometry = new T.SphereGeometry(0.05, 10, 10);
  const pulseMaterial = new T.MeshBasicMaterial({ color: PALETTE.primaryLight });
  const pulses = nodes.map((_, index) => {
    const pulse = new T.Mesh(pulseGeometry, pulseMaterial);
    pulse.userData.offset = index / nodes.length;
    rig.add(pulse);
    return pulse;
  });

  const constellation = new T.Group();
  const stars = fibonacciSphere(T, 150, 5, random);
  const starLinks: THREE.Vector3[] = [];
  for (let i = 0; i < stars.length; i++) {
    for (let j = i + 1; j < stars.length; j++) if (stars[i].distanceTo(stars[j]) < 1.15) starLinks.push(stars[i], stars[j]);
  }
  constellation.add(new T.LineSegments(new T.BufferGeometry().setFromPoints(starLinks), lineMaterial(T, PALETTE.primary, 0.14)));
  constellation.add(new T.Points(
    new T.BufferGeometry().setFromPoints(stars),
    new T.PointsMaterial({ color: PALETTE.primaryLight, size: 0.05, transparent: true, opacity: 0.8 })
  ));
  root.add(constellation);

  const hub = new T.Vector3();
  const smooth = { spread: 0 };

  return {
    object: root,
    update(input) {
      const { time, pointer, exit, aspect, hover } = input;
      const wide = aspect > 1.15;
      root.position.x = wide ? Math.min(3.1, aspect * 1.35) : 0;
      root.position.y = wide ? -0.1 : 1.7;
      root.scale.setScalar(wide ? 1 : Math.max(0.55, aspect * 0.95));

      smooth.spread = follow(smooth.spread, smoothstep(0, 0.7, exit) + hover * 0.18, 3, input);
      slabs.forEach((slab, index) => {
        slab.position.y = slab.userData.baseY * (1 + smooth.spread * 1.4) + Math.sin(time * 0.9 + index) * 0.025;
        slab.rotation.y = (index - 2.5) * smooth.spread * 0.18 + Math.sin(time * 0.35 + index) * 0.05;
      });
      spine.scale.y = 1 + smooth.spread * 1.3;
      shell.rotation.set(time * 0.05, -time * 0.07, 0);

      nodes.forEach((node, index) => {
        const angle = node.angle + time * node.speed;
        const radius = node.radius * (1 + smooth.spread * 0.25);
        const position = node.mesh.position;
        position.set(Math.cos(angle) * radius, node.height + Math.sin(time * 0.8 + node.phase) * 0.12, Math.sin(angle) * radius);
        node.mesh.rotation.set(time * 0.4 + node.phase, time * 0.3, 0);
        hub.set(0, node.height * 0.35, 0);
        linkPositions.set([position.x, position.y, position.z, hub.x, hub.y, hub.z], index * 6);
        pulses[index].position.lerpVectors(position, hub, (time * 0.4 + pulses[index].userData.offset) % 1);
      });
      linkAttribute.needsUpdate = true;

      rig.rotation.y = time * 0.1 + pointer.x * 0.5 + exit * 1.1;
      rig.rotation.x = 0.16 - pointer.y * 0.25 + exit * 0.35;
      constellation.rotation.y = -time * 0.025 + pointer.x * 0.18;
      constellation.rotation.x = -pointer.y * 0.1;
      camera.position.z = 11 + exit * 2.5;
    }
  };
};
