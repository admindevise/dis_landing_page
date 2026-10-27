import * as THREE from "three";
import { FLOOR_Y, inkLine, lineSegments, segments, type ModelDefinition, type Piece } from "../kit";

// Valuo · "Ciudad de valor": a district seen from above whose block heights are the value heat
// map. The subject property carries the pin; each step is a ring of blocks further out, and the
// comparables are tied to the subject by arcs inside the search radius.

const PITCH = 0.36;
const MAP_R = 2.6;
const BANDS = [0.2, 0.8, 1.3, 1.75, 2.15, MAP_R];
const zoneOf = (d: number) => BANDS.findIndex((edge) => d < edge);

export const valuo: ModelDefinition = {
  palette: { night: "#021414", glass: "#053434", deep: "#0A4C4C", base: "#4FD8D8", c700: "#0E7C86", c50: "#E6F8F9" },
  create(kit) {
    const { palette, track, rng } = kit;
    const object = new THREE.Group();
    object.position.set(0, FLOOR_Y, 0);
    object.rotation.y = -0.3;

    const heat = (x: number, z: number) =>
      THREE.MathUtils.clamp(
        0.78 * Math.exp(-((x - 0.9) ** 2 + (z + 0.5) ** 2) / 1.1) + 0.55 * Math.exp(-((x + 1.1) ** 2 + (z - 0.7) ** 2) / 0.7) + 0.25 * Math.exp(-(x * x + z * z) / 0.5) + 0.12 * rng(),
        0,
        1
      );
    const lowColor = new THREE.Color(palette.c700);
    const midColor = new THREE.Color(palette.base);
    const highColor = new THREE.Color(palette.c50);
    const heatColor = (v: number) => (v < 0.5 ? lowColor.clone().lerp(midColor, v * 2) : midColor.clone().lerp(highColor, (v - 0.5) * 2));

    type Block = { x: number; z: number; sx: number; sz: number; h: number; v: number };
    const zones: Block[][] = BANDS.map(() => []);
    for (let gx = -7; gx <= 7; gx++) {
      for (let gz = -7; gz <= 7; gz++) {
        const x = gx * PITCH;
        const z = gz * PITCH;
        const d = Math.hypot(x, z);
        if (d > MAP_R) continue;
        const v = heat(x, z);
        const subject = gx === 0 && gz === 0;
        zones[zoneOf(d)].push({
          x,
          z,
          sx: subject ? 0.3 : 0.22 + rng() * 0.07,
          sz: subject ? 0.3 : 0.22 + rng() * 0.07,
          h: subject ? 0.78 : 0.08 + v * 1.25 + rng() * 0.1,
          v: subject ? 1 : v
        });
      }
    }

    const boxGeo = track(new THREE.BoxGeometry(1, 1, 1).translate(0, 0.5, 0));
    const dummy = new THREE.Object3D();
    const subjectTop = zones[0][0].h;
    const pinTop = subjectTop + 1.05;
    let comparablesMat: THREE.LineBasicMaterial | null = null;
    let markerMat: THREE.MeshBasicMaterial | null = null;
    let pin: THREE.Mesh | null = null;

    const pieces = kit.stages.map((_, i): Piece => {
      const grp = new THREE.Group();
      object.add(grp);
      const blocks = zones[i];
      const { segs, seg, rim } = segments();
      const blockMat = track(new THREE.MeshPhysicalMaterial({ color: 0xffffff, roughness: 0.3, metalness: 0.1, clearcoat: 1, transparent: true, opacity: 0.05, envMapIntensity: 0.7, depthWrite: false }));
      const mesh = new THREE.InstancedMesh(boxGeo, blockMat, blocks.length);
      mesh.castShadow = true;
      mesh.renderOrder = i;
      const edges: number[] = [];
      blocks.forEach((b, k) => {
        dummy.position.set(b.x, 0, b.z);
        dummy.scale.set(b.sx, b.h, b.sz);
        dummy.updateMatrix();
        mesh.setMatrixAt(k, dummy.matrix);
        mesh.setColorAt(k, heatColor(b.v));
        const x0 = b.x - b.sx / 2;
        const x1 = b.x + b.sx / 2;
        const z0 = b.z - b.sz / 2;
        const z1 = b.z + b.sz / 2;
        [[x0, z0], [x1, z0], [x1, z1], [x0, z1]].forEach(([cx, cz]) => {
          edges.push(cx, 0, cz, cx, b.h, cz);
          seg(cx, 0, cz, cx, b.h, cz, 0.6);
        });
        edges.push(x0, b.h, z0, x1, b.h, z0, x1, b.h, z0, x1, b.h, z1, x1, b.h, z1, x0, b.h, z1, x0, b.h, z1, x0, b.h, z0);
        rim(x0, x1, z0, z1, b.h, 1.3 + b.v);
      });
      grp.add(mesh);
      const edgeMat = inkLine(kit);
      grp.add(lineSegments(kit, edges, edgeMat));

      if (i === 0) {
        // the subject property: beam and turning marker
        const pinMat = track(new THREE.MeshBasicMaterial({ color: palette.c50, transparent: true, opacity: 0, toneMapped: false }));
        const beam = new THREE.Mesh(track(new THREE.CylinderGeometry(0.01, 0.01, pinTop - subjectTop, 8)), pinMat);
        beam.position.y = (subjectTop + pinTop) / 2;
        pin = new THREE.Mesh(track(new THREE.OctahedronGeometry(0.15)), pinMat);
        pin.position.y = pinTop;
        pin.castShadow = true;
        grp.add(beam, pin);
        seg(0, subjectTop, 0, 0, pinTop, 0, 3);
        [[0.15, 0, 0], [-0.15, 0, 0], [0, 0, 0.15], [0, 0, -0.15]].forEach(([x, , z]) => {
          seg(0, pinTop + 0.15, 0, x, pinTop, z, 2);
          seg(0, pinTop - 0.15, 0, x, pinTop, z, 2);
        });
        blockMat.emissive.set(palette.base);
        blockMat.emissiveIntensity = 0.35;
      }

      if (i === 1) {
        // comparables inside the search radius, tied to the subject
        const candidates = [...zones[1], ...zones[2]].filter((b) => Math.abs(b.v - zones[0][0].v * 0.7) < 0.45);
        const picks = candidates.filter((_, k) => k % Math.max(1, Math.floor(candidates.length / 7)) === 0).slice(0, 7);
        comparablesMat = inkLine(kit, 0, palette.base);
        markerMat = track(new THREE.MeshBasicMaterial({ color: palette.base, transparent: true, opacity: 0, toneMapped: false }));
        const markerGeo = track(new THREE.OctahedronGeometry(0.06));
        const arcs: number[] = [];
        picks.forEach((b) => {
          const marker = new THREE.Mesh(markerGeo, markerMat!);
          marker.position.set(b.x, b.h + 0.14, b.z);
          grp.add(marker);
          const curve = new THREE.QuadraticBezierCurve3(new THREE.Vector3(0, subjectTop + 0.05, 0), new THREE.Vector3(b.x / 2, Math.max(subjectTop, b.h) + 0.7, b.z / 2), new THREE.Vector3(b.x, b.h + 0.08, b.z));
          const pts = curve.getPoints(20);
          for (let k = 0; k < pts.length - 1; k++) {
            arcs.push(pts[k].x, pts[k].y, pts[k].z, pts[k + 1].x, pts[k + 1].y, pts[k + 1].z);
            seg(pts[k].x, pts[k].y, pts[k].z, pts[k + 1].x, pts[k + 1].y, pts[k + 1].z, 1.1);
          }
        });
        grp.add(lineSegments(kit, arcs, comparablesMat));
        // dashed search radius on the ground
        const dashes: number[] = [];
        const r = BANDS[2];
        for (let k = 0; k < 96; k += 2) {
          const a0 = (k / 96) * Math.PI * 2;
          const a1 = ((k + 1) / 96) * Math.PI * 2;
          dashes.push(Math.sin(a0) * r, 0.012, Math.cos(a0) * r, Math.sin(a1) * r, 0.012, Math.cos(a1) * r);
          seg(Math.sin(a0) * r, 0.012, Math.cos(a0) * r, Math.sin(a1) * r, 0.012, Math.cos(a1) * r, 1.6);
        }
        grp.add(lineSegments(kit, dashes, comparablesMat));
      }

      const inner = i === 0 ? 0 : BANDS[i - 1];
      const hitGeo = track(i === 0 ? new THREE.CircleGeometry(BANDS[0], 24) : new THREE.RingGeometry(inner, BANDS[i], 64));
      hitGeo.rotateX(-Math.PI / 2);
      const hit = new THREE.Mesh(hitGeo, kit.hidden);
      hit.position.y = 0.3;
      grp.add(hit);

      const isComparables = i === 1;
      return {
        group: grp,
        hit,
        segs,
        update({ fm, act, hov }) {
          blockMat.opacity = 0.05 + (0.4 + 0.18 * act) * fm;
          edgeMat.opacity = 0.04 + (0.16 + 0.4 * act) * fm;
          if (isComparables && comparablesMat && markerMat) {
            comparablesMat.opacity = fm * (0.5 + 0.45 * act);
            markerMat.opacity = fm;
          }
          // hovering a ring raises its blocks
          grp.scale.y = 1 + 0.45 * hov;
        }
      };
    });

    // the map: a disc with its streets
    const plateMat = track(new THREE.MeshBasicMaterial({ color: palette.glass, transparent: true, opacity: 0, depthWrite: false, toneMapped: false }));
    const plate = new THREE.Mesh(track(new THREE.CircleGeometry(MAP_R + 0.18, 96)), plateMat);
    plate.rotation.x = -Math.PI / 2;
    plate.position.y = 0.004;
    plate.receiveShadow = true;
    const streets: number[] = [];
    for (let k = -7; k <= 6; k++) {
      const s = (k + 0.5) * PITCH;
      const half = Math.sqrt(Math.max(0, (MAP_R + 0.1) ** 2 - s * s));
      streets.push(s, 0.006, -half, s, 0.006, half, -half, 0.006, s, half, 0.006, s);
    }
    const streetMat = inkLine(kit, 0);
    object.add(plate, lineSegments(kit, streets, streetMat));
    const pinMesh = pin as THREE.Mesh | null;

    return {
      object,
      pieces,
      view: { target: [0, FLOOR_Y + 0.75, 0], dir: [0, 0.62, 1], fitRadius: 3.7 },
      density: 0.5,
      sources: [
        { code: "CAT", pos: [-3.6, 0.9, -1.0] },
        { code: "OFR", pos: [-3.5, -1.2, 1.3] },
        { code: "NOT", pos: [0.2, 0.7, -2.9] },
        { code: "POT", pos: [3.6, 0.4, -1.0] },
        { code: "MAP", pos: [3.3, -1.7, 2.0] }
      ],
      tick({ time, mat, reduced }) {
        plateMat.opacity = 0.18 + 0.32 * mat;
        streetMat.opacity = 0.05 + 0.12 * mat;
        if (pinMesh) {
          pinMesh.rotation.y = reduced ? 0.4 : time * 0.8;
          (pinMesh.material as THREE.MeshBasicMaterial).opacity = 0.2 + 0.8 * mat;
        }
      }
    };
  }
};
