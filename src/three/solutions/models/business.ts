import * as THREE from "three";
import { FLOOR_H, FLOOR_Y, TIER_H, curtainBlock, curtainTexture, facadeGeo, flat, glassBody, inkLine, lineSegments, makeLabel, segments, slab, type ModelDefinition, type Piece } from "../kit";

// Devise Business · "Expediente vivo": twin glass towers with stepped setbacks, one four-floor
// tier per step. Each tier carries its sign on the facade of tower A.

const BAY = 0.25;
// [step, x, z, width, depth] — tower A (left, taller), low connector and stepped tower B
const MASS: [number, number, number, number, number][] = [
  [0, -0.8, 0, 1.6, 1.6], [0, 0.16, 0.12, 0.42, 1.2], [0, 0.98, 0.05, 1.5, 1.5],
  [1, -0.8, 0, 1.6, 1.6], [1, 0.16, 0.12, 0.42, 1.2], [1, 0.95, 0.05, 1.44, 1.46],
  [2, -0.8, 0, 1.6, 1.6], [2, 0.88, 0.04, 1.3, 1.42],
  [3, -0.8, 0, 1.6, 1.56], [3, 0.8, 0.02, 1.14, 1.34],
  [4, -0.86, 0, 1.48, 1.52], [4, 0.72, 0, 0.98, 1.24],
  [5, -0.92, 0, 1.36, 1.46]
];
const exposedTop = (b: (typeof MASS)[number]) => !MASS.some((o) => o[0] === b[0] + 1 && Math.abs(o[1] - b[1]) < 0.02 && Math.abs(o[3] - b[3]) < 0.02 && Math.abs(o[4] - b[4]) < 0.02);
// [step, x, z, width, depth, height]
const ROOFS: [number, number, number, number, number, number][] = [[4, 0.7, -0.06, 0.62, 0.7, 0.2], [5, -0.98, -0.06, 0.86, 0.86, 0.3]];

export const business: ModelDefinition = {
  palette: { night: "#07061A", glass: "#17123F", deep: "#312478", base: "#8B7CF0", c700: "#5B4BD1", c50: "#F1EFFD" },
  create(kit) {
    const { palette, track } = kit;
    const curtain = curtainTexture(kit);
    const object = new THREE.Group();
    object.position.set(0.05, FLOOR_Y, 0);
    object.rotation.y = -0.34;

    const pieces = kit.stages.map((_, i): Piece => {
      const grp = new THREE.Group();
      grp.position.y = i * TIER_H;
      object.add(grp);
      const blocks = MASS.filter((b) => b[0] === i);
      const roofs = ROOFS.filter((r) => r[0] === i);
      const bodyMat = glassBody(kit);
      const edgeMat = inkLine(kit);
      const sideMat = flat(kit, curtain);
      const slabMat = slab(kit);
      const slabEdgeMat = inkLine(kit, 0.14);
      const roofMat = roofs.length
        ? track(new THREE.MeshPhysicalMaterial({ color: palette.glass, roughness: 0.4, metalness: 0.4, clearcoat: 0.6, transparent: true, opacity: 0.08, envMapIntensity: 0.6 }))
        : null;
      const { segs, seg, rim } = segments();
      const e = 0.025;
      let minX = Infinity;
      let maxX = -Infinity;
      let minZ = Infinity;
      let maxZ = -Infinity;

      blocks.forEach((b) => {
        const [, x, z, w, d] = b;
        const top = exposedTop(b);
        const geo = track(facadeGeo(w, TIER_H, d, x, z, BAY));
        const { bodyMesh, wallMesh } = curtainBlock(kit, geo, bodyMat, sideMat);
        bodyMesh.position.set(x, TIER_H / 2, z);
        bodyMesh.renderOrder = i * 3;
        wallMesh.position.copy(bodyMesh.position);
        wallMesh.renderOrder = i * 3 + 1;
        grp.add(bodyMesh, wallMesh);
        const hx = w / 2;
        const hz = d / 2;
        const ex: number[] = [];
        [[-hx, -hz], [hx, -hz], [hx, hz], [-hx, hz]].forEach(([cx, cz]) => ex.push(cx, 0, cz, cx, TIER_H, cz));
        if (i === 0) [[-hx, -hz, hx, -hz], [hx, -hz, hx, hz], [hx, hz, -hx, hz], [-hx, hz, -hx, -hz]].forEach(([a, b2, c2, d2]) => ex.push(a, 0, b2, c2, 0, d2));
        const edges = lineSegments(kit, ex, edgeMat);
        edges.position.set(x, 0, z);
        edges.renderOrder = i * 3;
        grp.add(edges);
        if (top) {
          const capGeo = track(new THREE.BoxGeometry(w + 0.05, 0.035, d + 0.05));
          const cap = new THREE.Mesh(capGeo, slabMat);
          cap.position.set(x, TIER_H, z);
          cap.castShadow = true;
          cap.renderOrder = i * 3 + 2;
          const capEdges = new THREE.LineSegments(track(new THREE.EdgesGeometry(capGeo)), slabEdgeMat);
          capEdges.position.copy(cap.position);
          capEdges.renderOrder = i * 3 + 2;
          grp.add(cap, capEdges);
        }
        minX = Math.min(minX, x - w / 2);
        maxX = Math.max(maxX, x + w / 2);
        minZ = Math.min(minZ, z - d / 2);
        maxZ = Math.max(maxZ, z + d / 2);

        // particle targets: slab lines, mullions and corners on the two visible faces
        const x0 = x - w / 2;
        const x1 = x + w / 2;
        const z0 = z - d / 2;
        const z1 = z + d / 2;
        for (let y = FLOOR_H; y < TIER_H - 1e-6; y += FLOOR_H) {
          seg(x0, y, z1 + e, x1, y, z1 + e);
          seg(x1 + e, y, z1, x1 + e, y, z0);
        }
        for (let xx = Math.ceil(x0 / BAY) * BAY; xx <= x1 + 1e-6; xx += BAY) seg(xx, 0, z1 + e, xx, TIER_H, z1 + e, 0.5);
        for (let zz = Math.ceil(z0 / BAY) * BAY; zz <= z1 + 1e-6; zz += BAY) seg(x1 + e, 0, zz, x1 + e, TIER_H, zz, 0.5);
        [[x0, z0], [x1, z0], [x1, z1], [x0, z1]].forEach(([cx, cz]) => seg(cx, 0, cz, cx, TIER_H, cz, 1.3));
        if (top) rim(x0 - 0.025, x1 + 0.025, z0 - 0.025, z1 + 0.025, TIER_H + 0.02, 1.6);
      });

      roofs.forEach(([, x, z, w, d, h]) => {
        const geo = track(new THREE.BoxGeometry(w, h, d));
        const mesh = new THREE.Mesh(geo, roofMat!);
        mesh.position.set(x, TIER_H + h / 2 + 0.018, z);
        mesh.castShadow = true;
        mesh.renderOrder = i * 3 + 2;
        const roofEdges = new THREE.LineSegments(track(new THREE.EdgesGeometry(geo)), edgeMat);
        roofEdges.position.copy(mesh.position);
        grp.add(mesh, roofEdges);
        const x0 = x - w / 2;
        const x1 = x + w / 2;
        const z0 = z - d / 2;
        const z1 = z + d / 2;
        const y0 = TIER_H + 0.018;
        rim(x0, x1, z0, z1, y0 + h, 1.4);
        [[x0, z0], [x1, z0], [x1, z1], [x0, z1]].forEach(([cx, cz]) => seg(cx, y0, cz, cx, y0 + h, cz, 1.4));
      });

      const hit = new THREE.Mesh(track(new THREE.BoxGeometry(maxX - minX, TIER_H, maxZ - minZ)), kit.hidden);
      hit.position.set((minX + maxX) / 2, TIER_H / 2, (minZ + maxZ) / 2);
      grp.add(hit);

      // step sign on the facade of tower A
      const [, ax, az, aw, ad] = blocks[0];
      const sign = makeLabel(kit, i, aw * 0.9);
      const label = sign.place(ax, TIER_H * 0.5, az + ad / 2 + 0.02);
      sign.mesh.renderOrder = i * 3 + 2;
      grp.add(sign.mesh);

      return {
        group: grp,
        hit,
        segs,
        label,
        update({ fm, act, hov }) {
          bodyMat.opacity = 0.05 + (0.36 + 0.1 * act) * fm;
          edgeMat.opacity = 0.1 + (0.38 + 0.45 * act) * fm;
          sign.material.opacity = fm * (0.7 + 0.3 * act);
          sideMat.opacity = fm * (0.5 + 0.3 * act);
          if (roofMat) roofMat.opacity = 0.08 + 0.72 * fm;
          slabMat.opacity = 0.08 + 0.4 * fm;
          slabEdgeMat.opacity = 0.14 + 0.46 * fm;
          grp.position.x = 0.18 * hov;
        }
      };
    });

    return {
      object,
      pieces,
      sources: [
        { code: "ERP", pos: [-3.1, 2.2, -3.0] },
        { code: "CORE", pos: [-3.0, -1.6, 0.6] },
        { code: "DOC", pos: [0.9, 3.2, -3.2] },
        { code: "FE", pos: [4.3, 1.5, -1.2] },
        { code: "PQR", pos: [3.6, -1.6, 1.8] }
      ]
    };
  }
};
