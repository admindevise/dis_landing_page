import * as THREE from "three";
import { FLOOR_H, FLOOR_Y, TIER_H, cornerLines, curtainBlock, curtainTexture, facadeGeo, flat, glassBody, inkLine, lineSegments, makeLabel, segments, slab, type ModelDefinition, type Piece } from "../kit";

// Devise Hospitality · "Hotel en giro": a lobby podium and five room slabs that turn a little
// on every step, each with a balcony per floor, lit rooms on the curtain wall and a rooftop pool.

const BAY = 0.25;
const SLAB_W = [2.9, 2.5, 2.45, 2.4, 2.3, 2.15];
const SLAB_D = [1.7, 0.95, 0.95, 0.95, 0.95, 0.95];
const twist = (i: number) => (i === 0 ? 0 : -0.32 + (i - 1) * 0.16);

export const hospitality: ModelDefinition = {
  palette: { night: "#140806", glass: "#33150E", deep: "#5E2417", base: "#FF7A5C", c700: "#C2412D", c50: "#FFF0EB" },
  create(kit) {
    const { palette, track } = kit;
    const curtain = curtainTexture(kit, 53, 0.42);
    const object = new THREE.Group();
    object.position.set(0, FLOOR_Y, 0);
    object.rotation.y = -0.18;

    const pieces = kit.stages.map((_, i): Piece => {
      const grp = new THREE.Group();
      const rot = twist(i);
      grp.position.y = i * TIER_H;
      grp.rotation.y = rot;
      object.add(grp);

      const w = SLAB_W[i];
      const d = SLAB_D[i];
      const z = i === 0 ? 0.1 : 0;
      const x0 = -w / 2;
      const x1 = w / 2;
      const z0 = z - d / 2;
      const z1 = z + d / 2;
      const e = 0.025;
      const bodyMat = glassBody(kit);
      const edgeMat = inkLine(kit);
      const sideMat = flat(kit, curtain);
      const slabMat = slab(kit);
      const slabEdgeMat = inkLine(kit, 0.14);
      const warmMat = flat(kit, undefined, palette.base);
      const { segs, seg, rim } = segments();

      const geo = track(facadeGeo(w, TIER_H, d, 0, z, BAY));
      const { bodyMesh, wallMesh } = curtainBlock(kit, geo, bodyMat, sideMat);
      bodyMesh.position.set(0, TIER_H / 2, z);
      bodyMesh.renderOrder = i * 3;
      wallMesh.position.copy(bodyMesh.position);
      wallMesh.renderOrder = i * 3 + 1;
      grp.add(bodyMesh, wallMesh);
      const corners = lineSegments(kit, cornerLines(w, d, TIER_H), edgeMat);
      corners.position.z = z;
      grp.add(corners);

      const capGeo = track(new THREE.BoxGeometry(w + 0.05, 0.035, d + 0.05));
      const cap = new THREE.Mesh(capGeo, slabMat);
      cap.position.set(0, TIER_H, z);
      cap.castShadow = true;
      cap.renderOrder = i * 3 + 2;
      const capEdges = new THREE.LineSegments(track(new THREE.EdgesGeometry(capGeo)), slabEdgeMat);
      capEdges.position.copy(cap.position);
      grp.add(cap, capEdges);

      for (let y = FLOOR_H; y < TIER_H - 1e-6; y += FLOOR_H) {
        seg(x0, y, z1 + e, x1, y, z1 + e);
        seg(x1 + e, y, z1, x1 + e, y, z0);
      }
      for (let xx = Math.ceil(x0 / BAY) * BAY; xx <= x1 + 1e-6; xx += BAY) seg(xx, 0, z1 + e, xx, TIER_H, z1 + e, 0.5);
      [[x0, z0], [x1, z0], [x1, z1], [x0, z1]].forEach(([cx, cz]) => seg(cx, 0, cz, cx, TIER_H, cz, 1.3));
      rim(x0 - 0.025, x1 + 0.025, z0 - 0.025, z1 + 0.025, TIER_H + 0.02, 1.6);

      if (i === 0) {
        // lobby canopy on two posts
        const canopyGeo = track(new THREE.BoxGeometry(0.95, 0.035, 0.5));
        const canopy = new THREE.Mesh(canopyGeo, slabMat);
        canopy.position.set(0.72, 0.44, z1 + 0.25);
        canopy.castShadow = true;
        const canopyEdges = new THREE.LineSegments(track(new THREE.EdgesGeometry(canopyGeo)), slabEdgeMat);
        canopyEdges.position.copy(canopy.position);
        const posts = lineSegments(kit, [0.3, 0, z1 + 0.44, 0.3, 0.44, z1 + 0.44, 1.14, 0, z1 + 0.44, 1.14, 0.44, z1 + 0.44], edgeMat);
        grp.add(canopy, canopyEdges, posts);
        rim(0.245, 1.195, z1, z1 + 0.5, 0.46, 1.6);
        seg(0.3, 0, z1 + 0.44, 0.3, 0.44, z1 + 0.44, 1.2);
        seg(1.14, 0, z1 + 0.44, 1.14, 0.44, z1 + 0.44, 1.2);
      } else {
        // one balcony per floor, with its railing
        const balconyGeo = track(new THREE.BoxGeometry(w - 0.16, 0.025, 0.16));
        const rails: number[] = [];
        for (let k = 0; k < 4; k++) {
          const y = k * FLOOR_H + 0.02;
          const balcony = new THREE.Mesh(balconyGeo, slabMat);
          balcony.position.set(0, y, z1 + 0.08);
          balcony.castShadow = true;
          balcony.renderOrder = i * 3 + 2;
          grp.add(balcony);
          const ry = y + 0.09;
          rails.push(x0 + 0.08, ry, z1 + 0.16, x1 - 0.08, ry, z1 + 0.16, x0 + 0.08, ry, z1, x0 + 0.08, ry, z1 + 0.16, x1 - 0.08, ry, z1, x1 - 0.08, ry, z1 + 0.16);
          seg(x0 + 0.08, y, z1 + 0.16, x1 - 0.08, y, z1 + 0.16, 1.2);
          seg(x0 + 0.08, ry, z1 + 0.16, x1 - 0.08, ry, z1 + 0.16, 0.8);
        }
        grp.add(lineSegments(kit, rails, slabEdgeMat));
      }

      if (i === kit.stages.length - 1) {
        // rooftop: pool and pergola
        const poolGeo = track(new THREE.BoxGeometry(0.95, 0.05, 0.48));
        const pool = new THREE.Mesh(poolGeo, warmMat);
        pool.position.set(-0.45, TIER_H + 0.045, 0.04);
        grp.add(pool);
        rim(-0.925, 0.025, -0.2, 0.28, TIER_H + 0.07, 2);
        const pergola: number[] = [];
        for (let k = 0; k < 6; k++) {
          const px = 0.32 + k * 0.13;
          pergola.push(px, TIER_H + 0.3, -0.28, px, TIER_H + 0.3, 0.32);
          seg(px, TIER_H + 0.3, -0.28, px, TIER_H + 0.3, 0.32, 1.2);
        }
        [[0.3, -0.28], [0.98, -0.28], [0.3, 0.32], [0.98, 0.32]].forEach(([px, pz]) => {
          pergola.push(px, TIER_H + 0.02, pz, px, TIER_H + 0.3, pz);
          seg(px, TIER_H + 0.02, pz, px, TIER_H + 0.3, pz, 1.2);
        });
        grp.add(lineSegments(kit, pergola, slabEdgeMat));
      }

      const hit = new THREE.Mesh(track(new THREE.BoxGeometry(w, TIER_H, d + 0.35)), kit.hidden);
      hit.position.set(0, TIER_H / 2, z + 0.17);
      grp.add(hit);

      const sign = makeLabel(kit, i, i === 0 ? 1.3 : 1.2);
      const label = i === 0 ? sign.place(-0.62, TIER_H * 0.6, z1 + 0.02) : sign.place(x0 + 0.72, TIER_H * 0.5, z1 + 0.19);
      sign.mesh.renderOrder = i * 3 + 2;
      grp.add(sign.mesh);

      const fx = Math.sin(rot);
      const fz = Math.cos(rot);
      return {
        group: grp,
        hit,
        segs,
        label,
        update({ fm, act, hov }) {
          bodyMat.opacity = 0.05 + (0.36 + 0.1 * act) * fm;
          edgeMat.opacity = 0.1 + (0.38 + 0.45 * act) * fm;
          sign.material.opacity = fm * (0.7 + 0.3 * act);
          sideMat.opacity = fm * (0.5 + 0.35 * act);
          slabMat.opacity = 0.08 + 0.45 * fm;
          slabEdgeMat.opacity = 0.14 + (0.46 + 0.3 * act) * fm;
          warmMat.opacity = fm * (0.55 + 0.35 * act);
          // the slab slides out like a drawer towards its own front
          grp.position.x = fx * 0.2 * hov;
          grp.position.z = fz * 0.2 * hov;
        }
      };
    });

    return {
      object,
      pieces,
      sources: [
        { code: "PMS", pos: [-3.2, 1.9, -2.6] },
        { code: "OTA", pos: [-3.1, -1.4, 0.9] },
        { code: "POS", pos: [0.6, 3.3, -3.0] },
        { code: "HK", pos: [4.2, 1.2, -1.4] },
        { code: "CRM", pos: [3.5, -1.5, 1.9] }
      ]
    };
  }
};
