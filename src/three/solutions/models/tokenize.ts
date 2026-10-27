import * as THREE from "three";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";
import { FLOOR_Y, FONT, TIER_H, colorTexture, mkCanvas, makeLabel, rgba, segments, slab, type Kit, type ModelDefinition, type Piece } from "../kit";

// Devise Tokenize · "Activo en unidades": a stepped building made of glass token cubes. Each step
// is three layers of tokens; hovering a step pulls its tokens apart, loose tokens rise from the
// roof and the issued token turns above it.

const V = 0.3; // token pitch
const S = 0.25; // token size
const FOOT: [number, number][] = [[6, 6], [6, 6], [6, 5], [5, 5], [5, 4], [4, 4]]; // [columns x, rows z]
const BACK = -0.9;

const EDGE_VERT = /* glsl */ `
uniform float uExplode;
attribute vec3 aCenter;
void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position + aCenter * uExplode, 1.0);
}`;
const EDGE_FRAG = /* glsl */ `
uniform vec3 uColor;
uniform float uOpacity;
void main() {
  gl_FragColor = vec4(uColor, uOpacity);
  #include <colorspace_fragment>
}`;

function coinFace(kit: Kit) {
  const { palette } = kit;
  const size = 512;
  const canvas = mkCanvas(size, size);
  const g = canvas.getContext("2d")!;
  g.fillStyle = "#000";
  g.fillRect(0, 0, size, size);
  g.strokeStyle = rgba(palette.c50, 0.55);
  g.lineWidth = 10;
  g.beginPath();
  g.arc(size / 2, size / 2, size * 0.42, 0, Math.PI * 2);
  g.stroke();
  g.fillStyle = rgba(palette.c50, 0.95);
  g.fillRect(size / 2 - 46, size / 2 - 120, 92, 92);
  g.font = `600 64px ${FONT.ui}`;
  g.textAlign = "center";
  g.fillStyle = rgba(palette.c50, 0.8);
  g.fillText("AT-07", size / 2, size / 2 + 90);
  return kit.track(colorTexture(canvas));
}

export const tokenize: ModelDefinition = {
  palette: { night: "#110C02", glass: "#2E2208", deep: "#5E430A", base: "#FBB833", c700: "#9A6200", c50: "#FFF7E7" },
  create(kit) {
    const { palette, track, rng } = kit;
    const object = new THREE.Group();
    object.position.set(0, FLOOR_Y, 0.1);
    object.rotation.y = -0.42;
    const tokenGeo = track(new RoundedBoxGeometry(S, S, S, 2, 0.025));
    const dummy = new THREE.Object3D();
    const last = kit.stages.length - 1;
    let issued: THREE.Mesh | null = null;

    const pieces = kit.stages.map((_, i): Piece => {
      const grp = new THREE.Group();
      grp.position.y = i * TIER_H;
      object.add(grp);
      const [nx, nz] = FOOT[i];
      const zFront = BACK + nz * V;
      const zMid = (BACK + zFront) / 2;
      const { segs, seg, rim } = segments();

      // shell tokens only: the inside of the building stays hollow glass
      const tokens: { base: THREE.Vector3; spread: THREE.Vector3 }[] = [];
      const edgePos: number[] = [];
      const edgeCenter: number[] = [];
      const h = S / 2;
      for (let ly = 0; ly < 3; ly++) {
        for (let ix = 0; ix < nx; ix++) {
          for (let iz = 0; iz < nz; iz++) {
            const side = ix === 0 || ix === nx - 1 || iz === 0 || iz === nz - 1;
            if (!side && ly < 2) continue;
            const x = (ix - (nx - 1) / 2) * V;
            const y = ly * V + V / 2;
            const z = BACK + V / 2 + iz * V;
            const lifted = i >= 2 && ly === 2 && (ix === nx - 1 || iz === nz - 1) && rng() < 0.16;
            const base = new THREE.Vector3(x, y + (lifted ? 0.12 + rng() * 0.22 : 0), z + (lifted ? 0.05 : 0));
            const spread = new THREE.Vector3(x, (ly - 1) * 0.5 * V, z - zMid);
            tokens.push({ base, spread });
            const [bx, by, bz] = [base.x, base.y, base.z];
            const corners = [
              [-h, -h, -h], [h, -h, -h], [h, h, -h], [-h, h, -h],
              [-h, -h, h], [h, -h, h], [h, h, h], [-h, h, h]
            ];
            [[0, 1], [1, 2], [2, 3], [3, 0], [4, 5], [5, 6], [6, 7], [7, 4], [0, 4], [1, 5], [2, 6], [3, 7]].forEach(([a, b]) => {
              edgePos.push(bx + corners[a][0], by + corners[a][1], bz + corners[a][2], bx + corners[b][0], by + corners[b][1], bz + corners[b][2]);
              edgeCenter.push(spread.x, spread.y, spread.z, spread.x, spread.y, spread.z);
            });
            // particle targets: the faces the camera sees
            if (iz === nz - 1) {
              const fz = bz + h;
              seg(bx - h, by - h, fz, bx + h, by - h, fz);
              seg(bx - h, by + h, fz, bx + h, by + h, fz);
              seg(bx - h, by - h, fz, bx - h, by + h, fz);
              seg(bx + h, by - h, fz, bx + h, by + h, fz);
            }
            if (ix === nx - 1) {
              const fx = bx + h;
              seg(fx, by - h, bz - h, fx, by + h, bz - h, 0.8);
              seg(fx, by + h, bz - h, fx, by + h, bz + h, 0.8);
              seg(fx, by - h, bz - h, fx, by - h, bz + h, 0.6);
            }
            if (ly === 2) rim(bx - h, bx + h, bz - h, bz + h, by + h, 0.9);
          }
        }
      }

      const tokenMat = track(new THREE.MeshPhysicalMaterial({
        color: palette.glass,
        emissive: palette.c700,
        emissiveIntensity: 0.25,
        roughness: 0.28,
        metalness: 0.2,
        clearcoat: 1,
        clearcoatRoughness: 0.15,
        transparent: true,
        opacity: 0.05,
        envMapIntensity: 0.9,
        depthWrite: false
      }));
      const mesh = new THREE.InstancedMesh(tokenGeo, tokenMat, tokens.length);
      mesh.renderOrder = i * 3;
      mesh.castShadow = true;
      grp.add(mesh);
      let explode = -1;
      const place = (amount: number) => {
        tokens.forEach((token, k) => {
          dummy.position.copy(token.base).addScaledVector(token.spread, amount);
          dummy.updateMatrix();
          mesh.setMatrixAt(k, dummy.matrix);
        });
        mesh.instanceMatrix.needsUpdate = true;
        explode = amount;
      };
      place(0);

      const edgeGeo = track(new THREE.BufferGeometry());
      edgeGeo.setAttribute("position", new THREE.Float32BufferAttribute(edgePos, 3));
      edgeGeo.setAttribute("aCenter", new THREE.Float32BufferAttribute(edgeCenter, 3));
      const edgeMat = track(new THREE.ShaderMaterial({
        uniforms: { uExplode: { value: 0 }, uColor: { value: new THREE.Color(palette.c50) }, uOpacity: { value: 0.1 } },
        vertexShader: EDGE_VERT,
        fragmentShader: EDGE_FRAG,
        transparent: true,
        depthWrite: false
      }));
      const edges = new THREE.LineSegments(edgeGeo, edgeMat);
      edges.renderOrder = i * 3 + 1;
      grp.add(edges);

      // floor plate under every step: the asset's structure
      const plateMat = slab(kit);
      const plateGeo = track(new THREE.BoxGeometry(nx * V + 0.08, 0.03, nz * V + 0.08));
      const plate = new THREE.Mesh(plateGeo, plateMat);
      plate.position.set(0, 0.0, zMid);
      plate.castShadow = true;
      grp.add(plate);
      rim(-(nx * V) / 2 - 0.04, (nx * V) / 2 + 0.04, BACK - 0.04, zFront + 0.04, 0.015, 1.6);

      const hit = new THREE.Mesh(track(new THREE.BoxGeometry(nx * V + 0.1, TIER_H, nz * V + 0.1)), kit.hidden);
      hit.position.set(0, TIER_H / 2, zMid);
      grp.add(hit);

      const sign = makeLabel(kit, i, Math.min(nx * V * 0.92, 1.6));
      const label = sign.place(0, TIER_H * 0.48, zFront + 0.03);
      sign.mesh.renderOrder = i * 3 + 2;
      grp.add(sign.mesh);

      // the issued token turns above the roof
      let coinMat: THREE.MeshPhysicalMaterial | null = null;
      if (i === last) {
        const coinGeo = track(new THREE.CylinderGeometry(0.4, 0.4, 0.07, 64));
        coinGeo.rotateX(Math.PI / 2);
        coinMat = track(new THREE.MeshPhysicalMaterial({
          color: palette.c700,
          metalness: 0.85,
          roughness: 0.3,
          clearcoat: 1,
          emissive: palette.c50,
          emissiveMap: coinFace(kit),
          emissiveIntensity: 0.55,
          transparent: true,
          opacity: 0
        }));
        const coin = new THREE.Mesh(coinGeo, coinMat);
        coin.position.set(0, TIER_H + 0.78, zMid);
        coin.castShadow = true;
        grp.add(coin);
        issued = coin;
        for (const dz of [-0.035, 0.035]) {
          for (let k = 0; k < 24; k++) {
            const a0 = (k / 24) * Math.PI * 2;
            const a1 = ((k + 1) / 24) * Math.PI * 2;
            seg(Math.sin(a0) * 0.4, coin.position.y + Math.cos(a0) * 0.4, zMid + dz, Math.sin(a1) * 0.4, coin.position.y + Math.cos(a1) * 0.4, zMid + dz, 1.8);
          }
        }
      }

      return {
        group: grp,
        hit,
        segs,
        label,
        update({ fm, act, hov }) {
          tokenMat.opacity = 0.05 + (0.42 + 0.12 * act) * fm;
          tokenMat.emissiveIntensity = 0.2 + 0.5 * act * fm;
          edgeMat.uniforms.uOpacity.value = 0.08 + (0.3 + 0.45 * act) * fm;
          sign.material.opacity = fm * (0.7 + 0.3 * act);
          plateMat.opacity = 0.08 + 0.45 * fm;
          const amount = 0.32 * hov;
          if (Math.abs(amount - explode) > 1e-4) place(amount);
          edgeMat.uniforms.uExplode.value = amount;
          if (coinMat) coinMat.opacity = fm;
        }
      };
    });

    // loose tokens rising from the roof
    const roofY = kit.stages.length * TIER_H;
    const [rx, rz] = FOOT[last];
    const riseMat = track(new THREE.MeshBasicMaterial({ color: palette.base, transparent: true, opacity: 0, depthWrite: false, toneMapped: false }));
    const rise = new THREE.InstancedMesh(track(new THREE.BoxGeometry(0.09, 0.09, 0.09)), riseMat, 12);
    const seeds = Array.from({ length: 12 }, () => ({ x: (rng() - 0.5) * rx * V, z: BACK + rng() * rz * V, o: rng(), s: 0.6 + rng() * 0.6 }));
    object.add(rise);
    const coin = issued as THREE.Mesh | null;

    return {
      object,
      pieces,
      density: 0.75,
      sources: [
        { code: "TIT", pos: [-3.2, 2.0, -2.8] },
        { code: "AVA", pos: [-3.0, -1.5, 0.8] },
        { code: "FID", pos: [-1.5, 3.6, -3.3] },
        { code: "KYC", pos: [4.2, 1.6, -1.1] },
        { code: "LED", pos: [3.6, -1.5, 1.9] }
      ],
      tick({ time, mat, reduced }) {
        if (coin) coin.rotation.y = reduced ? 0.3 : Math.sin(time * 0.5) * 0.55;
        riseMat.opacity = 0.75 * mat;
        seeds.forEach((s, k) => {
          const t = reduced ? s.o : (time * 0.12 * s.s + s.o) % 1;
          dummy.position.set(s.x * (1 + t * 0.6), roofY + 0.1 + t * 1.7, s.z);
          dummy.rotation.set(t * 3, t * 4, 0);
          dummy.scale.setScalar(Math.sin(Math.PI * t) + 0.001);
          dummy.updateMatrix();
          rise.setMatrixAt(k, dummy.matrix);
        });
        rise.instanceMatrix.needsUpdate = true;
      }
    };
  }
};
