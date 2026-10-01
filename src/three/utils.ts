import type * as THREE from "three";
import type { SceneInput, ThreeModule } from "./types";

export const clamp = (value: number, min = 0, max = 1) => Math.min(max, Math.max(min, value));

export const lerp = (from: number, to: number, t: number) => from + (to - from) * t;

export function smoothstep(edge0: number, edge1: number, value: number) {
  const t = clamp((value - edge0) / (edge1 - edge0));
  return t * t * (3 - 2 * t);
}

/** Frame-rate independent easing that snaps to the target under reduced motion. */
export function follow(current: number, target: number, lambda: number, input: Pick<SceneInput, "delta" | "reduced">) {
  if (input.reduced) return target;
  return lerp(current, target, 1 - Math.exp(-lambda * input.delta));
}

/** Deterministic PRNG (mulberry32) so every scene keeps the same composition. */
export function createRandom(seed: number) {
  let state = seed >>> 0;
  return () => {
    state = (state + 0x6d2b79f5) >>> 0;
    let t = state;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function fibonacciSphere(T: ThreeModule, count: number, radius: number, random: () => number, jitter = 0.08) {
  const points: THREE.Vector3[] = [];
  for (let index = 0; index < count; index++) {
    const y = 1 - (index / (count - 1)) * 2;
    const ring = Math.sqrt(1 - y * y);
    const theta = index * 2.39996;
    const scale = radius * (1 + (random() - 0.5) * jitter);
    points.push(new T.Vector3(Math.cos(theta) * ring * scale, y * scale, Math.sin(theta) * ring * scale));
  }
  return points;
}

export function randomOnSphere(T: ThreeModule, random: () => number, radius: number) {
  const theta = random() * Math.PI * 2;
  const phi = Math.acos(2 * random() - 1);
  return new T.Vector3(
    Math.sin(phi) * Math.cos(theta) * radius,
    Math.cos(phi) * radius,
    Math.sin(phi) * Math.sin(theta) * radius
  );
}
