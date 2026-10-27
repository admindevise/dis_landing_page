import type * as THREE from "three";
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
  const activeColor = 0x10b981;
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
  const planeMaterials = planes.map((plane) => ({
    fill: plane.material as THREE.MeshPhysicalMaterial,
    edge: (plane.children[0] as THREE.LineSegments).material as THREE.LineBasicMaterial,
    grid: (plane.children[1] as THREE.LineSegments).material as THREE.LineBasicMaterial
  }));
  const planeFocus = [0, 0, 0];
  const raycaster = new T.Raycaster();

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
  const to = new T.Color(activeColor);
  const mixed = new T.Color();
  const smooth = { spread: 0 };

  return {
    object: root,
    update(input) {
      const { time, pointer, hover, progress, aspect } = input;
      const activeIndex = clamp(Math.round(input.state.activeLayer ?? 1) - 1, 0, planes.length - 1);

      particles.forEach((particle, index) => {
        const travel = (time * particle.speed + particle.offset) % 1;
        const x = -4.8 + travel * 9.6;
        const order = smoothstep(-3.2, 1.2, x);
        const wobble = Math.sin(time * 1.4 + particle.offset * 12) * 0.05 * (1 - order);
        positions[index * 3] = x;
        positions[index * 3 + 1] = lerp(particle.scatterY, particle.laneY, order) + wobble;
        positions[index * 3 + 2] = lerp(particle.scatterZ, particle.laneZ, order);
        mixed.copy(from).lerp(to, order);
        const brightness = 0.28 + 0.72 * (1 - smoothstep(0.15, 2.2, Math.abs(x - planeX[activeIndex])));
        colors[index * 3] = mixed.r * brightness;
        colors[index * 3 + 1] = mixed.g * brightness;
        colors[index * 3 + 2] = mixed.b * brightness;
      });
      positionAttribute.needsUpdate = true;
      colorAttribute.needsUpdate = true;

      smooth.spread = follow(smooth.spread, hover, 3, input);
      planes.forEach((plane, index) => {
        const focus = follow(planeFocus[index], index === activeIndex ? 1 : 0, 14, input);
        planeFocus[index] = focus;
        plane.position.x = planeX[index] * (1 + smooth.spread * 0.15);
        plane.position.y = focus * 0.055;
        planeMaterials[index].fill.color.setHex(index === activeIndex ? activeColor : planeColors[index]);
        planeMaterials[index].fill.opacity = 0.15 * (0.28 + 0.72 * focus);
        planeMaterials[index].fill.emissiveIntensity = 0.07 + focus * 0.25;
        planeMaterials[index].edge.color.setHex(index === activeIndex ? activeColor : PALETTE.primary);
        planeMaterials[index].edge.opacity = 0.28 + focus * 0.72;
        planeMaterials[index].grid.opacity = 0.04 + focus * 0.2;
      });

      rig.rotation.y = -0.62 + pointer.x * 0.35 + (progress - 0.5) * 0.5;
      rig.rotation.x = 0.12 - pointer.y * 0.18;
      root.scale.setScalar(clamp(aspect * 0.85, 0.55, 1));
    },
    pick(pointer) {
      raycaster.setFromCamera(new T.Vector2(pointer.x, pointer.y), camera);
      const intersection = raycaster.intersectObjects(planes, false)[0];
      if (!intersection) return null;
      return planes.indexOf(intersection.object as (typeof planes)[number]) + 1;
    }
  };
};
