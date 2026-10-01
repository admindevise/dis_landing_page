import { PALETTE, edges, glass, gridLines } from "../materials";
import type { SceneFactory } from "../types";
import { clamp, createRandom, follow, lerp, smoothstep } from "../utils";

/** Quiénes somos · Flujo de datos: scattered particles become ordered lanes as they cross three planes. */
export const dataFlow: SceneFactory = ({ T, camera }) => {
  camera.fov = 32;
  camera.position.set(0, 0.4, 11);
  camera.lookAt(0, 0, 0);
  camera.updateProjectionMatrix();

  const random = createRandom(23);
  const root = new T.Group();
  const rig = new T.Group();
  root.add(rig);

  const planeX = [-2.4, 0, 2.4];
  const planeColors = [PALETTE.info, PALETTE.primary, PALETTE.primaryLight];
  const planeGeometry = new T.PlaneGeometry(2.6, 3.4);
  const planes = planeX.map((x, index) => {
    const plane = new T.Mesh(planeGeometry, glass(T, planeColors[index], 0.07));
    plane.add(edges(T, planeGeometry, PALETTE.primaryLight, 0.55));
    plane.add(gridLines(T, 2.6, 3.4, 5, 7, PALETTE.primary, 0.12, true));
    plane.position.x = x;
    plane.rotation.y = Math.PI / 2;
    rig.add(plane);
    return plane;
  });

  const count = 480;
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const particles = Array.from({ length: count }, (_, index) => {
    const lane = index % 24;
    return {
      laneY: (Math.floor(lane / 6) - 1.5) * 0.62,
      laneZ: ((lane % 6) - 2.5) * 0.42,
      scatterY: (random() - 0.5) * 4.2,
      scatterZ: (random() - 0.5) * 3.6,
      offset: random(),
      speed: 0.05 + random() * 0.04
    };
  });
  const positionAttribute = new T.BufferAttribute(positions, 3);
  const colorAttribute = new T.BufferAttribute(colors, 3);
  const geometry = new T.BufferGeometry();
  geometry.setAttribute("position", positionAttribute);
  geometry.setAttribute("color", colorAttribute);
  rig.add(new T.Points(geometry, new T.PointsMaterial({
    size: 0.06,
    vertexColors: true,
    transparent: true,
    opacity: 0.95,
    depthWrite: false,
    blending: T.AdditiveBlending
  })));

  const from = new T.Color(PALETTE.info);
  const to = new T.Color(PALETTE.primaryLight);
  const mixed = new T.Color();
  const smooth = { spread: 0 };

  return {
    object: root,
    update(input) {
      const { time, pointer, hover, progress, aspect } = input;

      particles.forEach((particle, index) => {
        const travel = (time * particle.speed + particle.offset) % 1;
        const x = -4.8 + travel * 9.6;
        const order = smoothstep(-3.2, 1.2, x);
        const wobble = Math.sin(time * 1.4 + particle.offset * 12) * 0.05 * (1 - order);
        positions[index * 3] = x;
        positions[index * 3 + 1] = lerp(particle.scatterY, particle.laneY, order) + wobble;
        positions[index * 3 + 2] = lerp(particle.scatterZ, particle.laneZ, order);
        mixed.copy(from).lerp(to, order);
        colors[index * 3] = mixed.r;
        colors[index * 3 + 1] = mixed.g;
        colors[index * 3 + 2] = mixed.b;
      });
      positionAttribute.needsUpdate = true;
      colorAttribute.needsUpdate = true;

      smooth.spread = follow(smooth.spread, hover, 3, input);
      planes.forEach((plane, index) => {
        plane.position.x = planeX[index] * (1 + smooth.spread * 0.15);
      });

      rig.rotation.y = -0.62 + pointer.x * 0.35 + (progress - 0.5) * 0.5;
      rig.rotation.x = 0.12 - pointer.y * 0.18;
      root.scale.setScalar(clamp(aspect * 0.85, 0.55, 1));
    }
  };
};
