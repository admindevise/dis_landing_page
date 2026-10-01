import type * as THREE from "three";
import { PALETTE, edges, glass, gridLines } from "../materials";
import type { SceneFactory } from "../types";
import { clamp, createRandom, follow, lerp, smoothstep } from "../utils";

interface Packet {
  mesh: THREE.Mesh;
  pillar: THREE.Vector2;
  direction: 1 | -1;
  offset: number;
  speed: number;
}

/** Contacto · Infraestructura financiera: settlement, ledger and application layers joined by data pillars. */
export const financialInfrastructure: SceneFactory = ({ T, camera }) => {
  camera.fov = 32;
  camera.position.set(0, 3.2, 10.5);
  camera.lookAt(0, 0, 0);
  camera.updateProjectionMatrix();

  const random = createRandom(97);
  const root = new T.Group();
  const rig = new T.Group();
  root.add(rig);

  const size = 4.2;
  const plateGeometry = new T.BoxGeometry(size, 0.06, size);
  const plateColors = [PALETTE.slate, PALETTE.primary, PALETTE.info];
  const plates = plateColors.map((color, index) => {
    const plate = new T.Group();
    const slab = new T.Mesh(plateGeometry, glass(T, color, 0.14 + index * 0.03));
    slab.add(edges(T, plateGeometry, PALETTE.primaryLight, 0.55));
    plate.add(slab);
    const grid = gridLines(T, size, size, 8, 8, PALETTE.primary, 0.2);
    grid.position.y = 0.035;
    plate.add(grid);
    rig.add(plate);
    return plate;
  });

  const appGeometry = new T.BoxGeometry(0.42, 0.42, 0.42);
  [[-1.2, -1.2], [1.2, -0.6], [0, 1.2], [-0.6, 0.4], [1.4, 1.3]].forEach(([x, z]) => {
    const app = new T.Mesh(appGeometry, glass(T, PALETTE.infoLight, 0.3));
    app.add(edges(T, appGeometry, PALETTE.primaryLight, 0.85));
    app.position.set(x, 0.24, z);
    plates[2].add(app);
  });

  const settlement = new T.Mesh(
    new T.TorusGeometry(1.9, 0.012, 8, 120),
    new T.MeshBasicMaterial({ color: PALETTE.primaryLight, transparent: true, opacity: 0.6 })
  );
  settlement.rotation.x = Math.PI / 2;
  settlement.position.y = 0.05;
  plates[0].add(settlement);

  const pillarCoordinates = [-1.4, 0, 1.4].flatMap((x) => [-1.4, 0, 1.4].map((z) => new T.Vector2(x, z)));
  const pillarGeometry = new T.CylinderGeometry(0.03, 0.03, 1, 8);
  const pillarMaterial = new T.MeshBasicMaterial({ color: PALETTE.primary, transparent: true, opacity: 0.5 });
  const pillars = pillarCoordinates.map((coordinate) => {
    const pillar = new T.Mesh(pillarGeometry, pillarMaterial);
    pillar.position.set(coordinate.x, 0, coordinate.y);
    rig.add(pillar);
    return pillar;
  });

  const packetGeometry = new T.BoxGeometry(0.09, 0.09, 0.09);
  const upMaterial = new T.MeshBasicMaterial({ color: PALETTE.primaryLight });
  const downMaterial = new T.MeshBasicMaterial({ color: PALETTE.infoLight });
  const packets: Packet[] = Array.from({ length: 36 }, (_, index) => {
    const direction = index % 3 === 0 ? -1 : 1;
    const mesh = new T.Mesh(packetGeometry, direction > 0 ? upMaterial : downMaterial);
    rig.add(mesh);
    return {
      mesh,
      pillar: pillarCoordinates[index % pillarCoordinates.length],
      direction,
      offset: random(),
      speed: 0.18 + random() * 0.12
    };
  });

  const smooth = { separation: 1.15 };

  return {
    object: root,
    update(input) {
      const { time, pointer, hover, progress, aspect } = input;
      const target = input.reduced ? 1.4 : 1.1 + smoothstep(0.15, 0.6, progress) * 0.35 + hover * 0.25;
      smooth.separation = follow(smooth.separation, target, 3, input);
      const separation = smooth.separation;

      plates.forEach((plate, index) => {
        plate.position.y = (index - 1) * separation;
      });
      pillars.forEach((pillar) => {
        pillar.scale.y = separation * 2;
      });
      packets.forEach((packet) => {
        const t = (time * packet.speed + packet.offset) % 1;
        const y = lerp(-separation, separation, packet.direction > 0 ? t : 1 - t);
        packet.mesh.position.set(packet.pillar.x, y, packet.pillar.y);
        packet.mesh.rotation.y = time * 2;
      });
      settlement.rotation.z = time * 0.2;

      rig.rotation.y = 0.7 + time * 0.05 + pointer.x * 0.35;
      rig.rotation.x = -pointer.y * 0.12;
      root.scale.setScalar(clamp(aspect * 0.95, 0.6, 1));
    }
  };
};
