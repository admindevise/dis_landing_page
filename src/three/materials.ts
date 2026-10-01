import type * as THREE from "three";
import type { ThreeModule } from "./types";

export const PALETTE = {
  primaryLight: 0x4fd8d8,
  primary: 0x02b2b2,
  deep: 0x007e82,
  slate: 0x27445a,
  infoLight: 0x42c9ff,
  info: 0x1fa2ff,
  white: 0xffffff
} as const;

export function glass(T: ThreeModule, color: number, opacity: number) {
  return new T.MeshPhysicalMaterial({
    color,
    transparent: true,
    opacity,
    roughness: 0.15,
    metalness: 0.1,
    clearcoat: 1,
    clearcoatRoughness: 0.2,
    emissive: color,
    emissiveIntensity: 0.12,
    depthWrite: false,
    side: T.DoubleSide
  });
}

export function lineMaterial(T: ThreeModule, color: number, opacity: number) {
  return new T.LineBasicMaterial({ color, transparent: true, opacity, depthWrite: false });
}

export function edges(T: ThreeModule, geometry: THREE.BufferGeometry, color: number, opacity: number) {
  return new T.LineSegments(new T.EdgesGeometry(geometry), lineMaterial(T, color, opacity));
}

/** Flat grid in the XZ plane (or XY when `vertical`). */
export function gridLines(T: ThreeModule, width: number, depth: number, columns: number, rows: number, color: number, opacity: number, vertical = false) {
  const points: THREE.Vector3[] = [];
  const point = (x: number, y: number) => (vertical ? new T.Vector3(x, y, 0) : new T.Vector3(x, 0, y));
  for (let column = 0; column <= columns; column++) {
    const x = -width / 2 + (column / columns) * width;
    points.push(point(x, -depth / 2), point(x, depth / 2));
  }
  for (let row = 0; row <= rows; row++) {
    const y = -depth / 2 + (row / rows) * depth;
    points.push(point(-width / 2, y), point(width / 2, y));
  }
  return new T.LineSegments(new T.BufferGeometry().setFromPoints(points), lineMaterial(T, color, opacity));
}

export function addStudioLights(T: ThreeModule, scene: THREE.Scene) {
  scene.add(new T.AmbientLight(0xffffff, 0.75));
  const key = new T.DirectionalLight(PALETTE.primaryLight, 2.2);
  key.position.set(3, 5, 5);
  scene.add(key);
  const rim = new T.PointLight(PALETTE.info, 40, 20);
  rim.position.set(-4, -2, 4);
  scene.add(rim);
}
