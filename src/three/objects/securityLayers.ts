import { PALETTE, edges, glass } from "../materials";
import type { SceneFactory } from "../types";
import { clamp, createRandom, fibonacciSphere, follow, smoothstep } from "../utils";

/** Seguridad · Capas de seguridad: a data core wrapped by access, encryption, audit and perimeter layers. */
export const securityLayers: SceneFactory = ({ T, camera }) => {
  camera.fov = 34;
  camera.position.set(0, 0.6, 10.5);
  camera.lookAt(0, 0, 0);
  camera.updateProjectionMatrix();

  const random = createRandom(5);
  const root = new T.Group();
  const rig = new T.Group();
  root.add(rig);

  const coreGeometry = new T.OctahedronGeometry(0.6, 0);
  const core = new T.Mesh(coreGeometry, glass(T, PALETTE.info, 0.35));
  core.add(edges(T, coreGeometry, PALETTE.infoLight, 0.95));
  rig.add(core);

  const icoGeometry = new T.IcosahedronGeometry(1.3, 0);
  const access = new T.Mesh(icoGeometry, glass(T, PALETTE.primary, 0.08));
  access.add(edges(T, icoGeometry, PALETTE.primaryLight, 0.7));

  const encryption = new T.Group();
  const ringGeometry = new T.TorusGeometry(1.95, 0.012, 8, 120);
  const ringMaterial = new T.MeshBasicMaterial({ color: PALETTE.primaryLight, transparent: true, opacity: 0.7 });
  ([[0, 0], [Math.PI / 2, 0], [Math.PI / 2, Math.PI / 2]] as const).forEach(([x, y]) => {
    const ring = new T.Mesh(ringGeometry, ringMaterial);
    ring.rotation.set(x, y, 0);
    encryption.add(ring);
  });

  const vaultGeometry = new T.CylinderGeometry(2.7, 2.7, 3, 6, 1, true);
  const audit = new T.Mesh(vaultGeometry, glass(T, PALETTE.info, 0.05));
  audit.add(edges(T, vaultGeometry, PALETTE.info, 0.45));

  const scanMaterial = new T.MeshBasicMaterial({
    color: PALETTE.primaryLight,
    transparent: true,
    opacity: 0.45,
    side: T.DoubleSide,
    blending: T.AdditiveBlending,
    depthWrite: false
  });
  const scanRig = new T.Group();
  scanRig.rotation.y = Math.PI / 6;
  const scan = new T.Mesh(new T.RingGeometry(2.62, 2.78, 6, 1), scanMaterial);
  scan.rotation.x = -Math.PI / 2;
  scanRig.add(scan);
  audit.add(scanRig);

  const perimeter = new T.Points(
    new T.BufferGeometry().setFromPoints(fibonacciSphere(T, 260, 3.6, random)),
    new T.PointsMaterial({ color: PALETTE.primaryLight, size: 0.035, transparent: true, opacity: 0.55 })
  );

  const layers = [access, encryption, audit, perimeter];
  layers.forEach((layer) => rig.add(layer));
  const smooth = { assemble: 0 };

  return {
    object: root,
    update(input) {
      const { time, pointer, hover, aspect } = input;
      smooth.assemble = follow(smooth.assemble, smoothstep(0.08, 0.5, input.progress), 3, input);
      const assemble = input.reduced ? 1 : smooth.assemble;

      layers.forEach((layer, index) => {
        const depth = (index + 1) / layers.length;
        layer.scale.setScalar(1 + (1 - assemble) * 0.6 * depth + hover * 0.06 * (index + 1));
      });

      core.rotation.y = time * 0.6;
      core.scale.setScalar(1 + Math.sin(time * 2) * 0.04);
      access.rotation.set(time * 0.18, time * 0.22, 0);
      encryption.rotation.set(time * 0.1, -time * 0.14, time * 0.06);
      audit.rotation.y = -time * 0.05;
      perimeter.rotation.y = time * 0.02;

      const sweep = (time * 0.25) % 1;
      scan.position.y = -1.5 + sweep * 3;
      scanMaterial.opacity = input.reduced ? 0 : 0.5 * Math.sin(sweep * Math.PI);

      rig.rotation.x = 0.28 - pointer.y * 0.2;
      rig.rotation.y = pointer.x * 0.35;
      root.scale.setScalar(clamp(aspect, 0.6, 1));
    }
  };
};
