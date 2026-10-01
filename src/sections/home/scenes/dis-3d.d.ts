export interface DisScenesOptions {
  hero?: HTMLElement | null;
  solutions?: HTMLElement | null;
  getSolution?: () => number;
  reducedMotion?: boolean;
}

export interface DisScenesController {
  setPointer(x: number, y: number): void;
  setScroll(y: number): void;
  dispose(): void;
}

export function hasWebGL(): boolean;
export function createDisScenes(options?: DisScenesOptions): Promise<DisScenesController | null>;
