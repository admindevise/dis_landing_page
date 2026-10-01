import type * as THREE from "three";

export type ThreeModule = typeof THREE;

export interface SceneInput {
  /** Seconds of animated time; frozen when reduced motion is active. */
  time: number;
  delta: number;
  /** Smoothed pointer relative to the stage, -1..1 (y up). */
  pointer: { x: number; y: number };
  hover: number;
  /** 0 when the stage enters from the bottom, 1 when it leaves from the top. */
  progress: number;
  /** 0 while the stage top is below the viewport top, 1 once fully scrolled past. */
  exit: number;
  aspect: number;
  reduced: boolean;
  state: Record<string, number>;
}

export interface SceneContext {
  T: ThreeModule;
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
}

export interface SceneInstance {
  object: THREE.Object3D;
  update(input: SceneInput): void;
  dispose?(): void;
}

export type SceneFactory = (context: SceneContext) => SceneInstance;

export interface StageController {
  setState(key: string, value: number): void;
  dispose(): void;
}
