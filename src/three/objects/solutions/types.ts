import type * as THREE from "three";
import type { ThreeModule } from "../../types";

export interface SolutionModel {
  group: THREE.Group;
  tick(time: number, hover: number, speed: number): void;
}

export type SolutionModelFactory = (T: ThreeModule) => SolutionModel;
