import * as THREE from "three";
import { FLOOR_Y, TIER_H, glassBody, inkLine, makeLabel, segments, slab, type ModelDefinition, type Piece } from "../kit";

// Devise Marketplace · "Torre en participaciones": a round tower whose every step is cut into
// eight participations around a core. One participation per step sits out, on the secondary
// market; hovering a step fractions it, and an orbit of investors circles the tower.

const SLICES = 8;
const GAP = 0.035;
const CORE = 0.3;
const TRADED = [3, 6, 2, 5, 1, 7];
const radius = (i: number) => 1.12 - i * 0.045;

/** Ring sector extruded upwards; angle 0 faces +z. */
function wedgeGeo(rIn: number, rOut: number, a0: number, a1: number, h: number) {
  const pt = (r: number, a: number): [number, number] => [r * Math.sin(a), -r * Math.cos(a)];
  const shape = new THREE.Shape();
  const steps = 10;
  shape.moveTo(...pt(rIn, a0));
  for (let k = 0; k <= steps; k++) shape.lineTo(...pt(rOut, a0 + ((a1 - a0) * k) / steps));
  for (let k = steps; k >= 0; k--) shape.lineTo(...pt(rIn, a0 + ((a1 - a0) * k) / steps));
  const geometry = new THREE.ExtrudeGeometry(shape, { depth: h, bevelEnabled: false, curveSegments: 1 });
  geometry.rotateX(-Math.PI / 2);
  return geometry;
}

export const marketplace: ModelDefinition = {
  palette: { night: "#02121A", glass: "#06303A", deep: "#0B4A57", base: "#2BC4CF", c700: "#0E7C86", c50: "#E6F8F9" },
  create(kit) {
    const { palette, track, rng } = kit;
    const object = new THREE.Group();
    object.position.set(0, FLOOR_Y, 0);
    const last = kit.stages.length - 1;

    const pieces = kit.stages.map((_, i): Piece => {
      const grp = new THREE.Group();
      grp.position.y = i * TIER_H;
      object.add(grp);
      const R = radius(i);
      const y0 = 0.035;
      const h = TIER_H - 0.05;
      const bodyMat = glassBody(kit);
      const tradeMat = glassBody(kit, palette.c700);
      const edgeMat = inkLine(kit);
      const tradeEdgeMat = inkLine(kit, 0.14, palette.base);
      const floorMat = inkLine(kit, 0.06);
      const slabMat = slab(kit);
      const slabEdgeMat = inkLine(kit, 0.14);
      const { segs, seg, arc } = segments();

      const wedges = Array.from({ length: SLICES }, (_, k) => {
        const c = (k / SLICES) * Math.PI * 2;
        const a0 = c - Math.PI / SLICES + GAP / 2;
        const a1 = c + Math.PI / SLICES - GAP / 2;
        const traded = TRADED[i] === k;
        const geo = track(wedgeGeo(CORE + 0.04, R, a0, a1, h));
        const mesh = new THREE.Mesh(geo, traded ? tradeMat : bodyMat);
        mesh.position.y = y0;
        mesh.castShadow = true;
        mesh.renderOrder = i * 3;
        mesh.add(new THREE.LineSegments(track(new THREE.EdgesGeometry(geo, 25)), traded ? tradeEdgeMat : edgeMat));
        const floors: number[] = [];
        for (let f = 1; f < 4; f++) {
          const fy = (h * f) / 4;
          for (let s = 0; s < 6; s++) {
            const t0 = a0 + ((a1 - a0) * s) / 6;
            const t1 = a0 + ((a1 - a0) * (s + 1)) / 6;
            floors.push(Math.sin(t0) * R, fy, Math.cos(t0) * R, Math.sin(t1) * R, fy, Math.cos(t1) * R);
          }
        }
        const floorGeo = track(new THREE.BufferGeometry());
        floorGeo.setAttribute("position", new THREE.Float32BufferAttribute(floors, 3));
        mesh.add(new THREE.LineSegments(floorGeo, floorMat));
        grp.add(mesh);

        const dir = new THREE.Vector3(Math.sin(c), 0, Math.cos(c));
        const out = traded ? 0.24 : 0;
        const ox = dir.x * out;
        const oz = dir.z * out;
        for (let f = 0; f <= 4; f++) arc(ox, oz, R, a0, a1, y0 + (h * f) / 4, f === 0 || f === 4 ? 1.3 : 0.9, 5);
        [a0, a1].forEach((a) => {
          seg(ox + Math.sin(a) * R, y0, oz + Math.cos(a) * R, ox + Math.sin(a) * R, y0 + h, oz + Math.cos(a) * R, 1.2);
          seg(ox + Math.sin(a) * (CORE + 0.04), y0 + h, oz + Math.cos(a) * (CORE + 0.04), ox + Math.sin(a) * R, y0 + h, oz + Math.cos(a) * R, 0.7);
        });
        return { mesh, dir, out };
      });

      // floor plate and core
      const plateGeo = track(new THREE.CylinderGeometry(R + 0.06, R + 0.06, 0.035, 64));
      const plate = new THREE.Mesh(plateGeo, slabMat);
      plate.position.y = 0.0175;
      plate.castShadow = true;
      plate.renderOrder = i * 3 + 2;
      const plateEdges = new THREE.LineSegments(track(new THREE.EdgesGeometry(plateGeo, 20)), slabEdgeMat);
      plateEdges.position.copy(plate.position);
      const coreGeo = track(new THREE.CylinderGeometry(CORE, CORE, TIER_H, 32, 1, true));
      const core = new THREE.Mesh(coreGeo, tradeMat);
      core.position.y = TIER_H / 2;
      grp.add(plate, plateEdges, core);
      arc(0, 0, R + 0.06, 0, Math.PI * 2, 0.035, 1.4, 24);

      if (i === last) {
        // crown and spire
        const crownGeo = track(new THREE.TorusGeometry(R * 0.82, 0.018, 8, 64));
        crownGeo.rotateX(Math.PI / 2);
        const crown = new THREE.Mesh(crownGeo, slabMat);
        crown.position.y = TIER_H + 0.12;
        const spireGeo = track(new THREE.CylinderGeometry(0.012, 0.024, 1.05, 8));
        const spire = new THREE.Mesh(spireGeo, slabMat);
        spire.position.y = TIER_H + 0.52;
        spire.castShadow = true;
        grp.add(crown, spire);
        arc(0, 0, R * 0.82, 0, Math.PI * 2, TIER_H + 0.12, 1.8, 24);
        seg(0, TIER_H, 0, 0, TIER_H + 1.05, 0, 2);
      }

      const hit = new THREE.Mesh(track(new THREE.CylinderGeometry(R + 0.22, R + 0.22, TIER_H, 24)), kit.hidden);
      hit.position.y = TIER_H / 2;
      grp.add(hit);

      const sign = makeLabel(kit, i, R * 0.72);
      const label = sign.place(0, TIER_H * 0.5, R + 0.03);
      sign.mesh.renderOrder = i * 3 + 2;
      grp.add(sign.mesh);

      let spread = -1;
      return {
        group: grp,
        hit,
        segs,
        label,
        update({ fm, act, hov }) {
          bodyMat.opacity = 0.05 + (0.34 + 0.1 * act) * fm;
          tradeMat.opacity = 0.08 + (0.5 + 0.15 * act) * fm;
          edgeMat.opacity = 0.1 + (0.36 + 0.45 * act) * fm;
          tradeEdgeMat.opacity = 0.14 + 0.7 * fm;
          floorMat.opacity = 0.04 + (0.22 + 0.2 * act) * fm;
          slabMat.opacity = 0.08 + 0.42 * fm;
          slabEdgeMat.opacity = 0.14 + 0.46 * fm;
          sign.material.opacity = fm * (0.7 + 0.3 * act);
          const s = 0.16 * hov;
          if (Math.abs(s - spread) > 1e-4) {
            spread = s;
            wedges.forEach((w) => w.mesh.position.set(w.dir.x * (w.out + s), y0, w.dir.z * (w.out + s)));
          }
        }
      };
    });

    // orbit of investors around the tower
    const orbitR = 2.15;
    const orbit = new THREE.Group();
    orbit.position.y = 2.9;
    orbit.rotation.set(0.2, 0, 0.06);
    const ringPts: THREE.Vector3[] = [];
    for (let k = 0; k <= 128; k++) ringPts.push(new THREE.Vector3(Math.sin((k / 128) * Math.PI * 2) * orbitR, 0, Math.cos((k / 128) * Math.PI * 2) * orbitR));
    const ringMat = inkLine(kit, 0, palette.base);
    orbit.add(new THREE.Line(track(new THREE.BufferGeometry().setFromPoints(ringPts)), ringMat));
    const nodeMat = track(new THREE.MeshBasicMaterial({ color: palette.c50, transparent: true, opacity: 0, toneMapped: false }));
    const nodeGeo = track(new THREE.SphereGeometry(0.05, 12, 12));
    const nodes = Array.from({ length: 9 }, (_, k) => {
      const node = new THREE.Mesh(nodeGeo, nodeMat);
      node.userData.a = (k / 9) * Math.PI * 2 + rng() * 0.3;
      orbit.add(node);
      return node;
    });
    object.add(orbit);

    return {
      object,
      pieces,
      sources: [
        { code: "OPO", pos: [-3.3, 2.1, -2.6] },
        { code: "INV", pos: [-3.1, -1.5, 1.0] },
        { code: "PAG", pos: [0.4, 3.4, -3.2] },
        { code: "CUS", pos: [4.3, 1.4, -1.0] },
        { code: "SEC", pos: [3.5, -1.6, 2.0] }
      ],
      tick({ time, mat, reduced }) {
        ringMat.opacity = 0.32 * mat;
        nodeMat.opacity = 0.9 * mat;
        nodes.forEach((node) => {
          const a = (node.userData.a as number) + (reduced ? 0 : time * 0.18);
          node.position.set(Math.sin(a) * orbitR, 0, Math.cos(a) * orbitR);
        });
      }
    };
  }
};
