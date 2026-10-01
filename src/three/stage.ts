import type * as THREE from "three";
import { addStudioLights } from "./materials";
import type { SceneFactory, SceneInput, StageController, ThreeModule } from "./types";
import { clamp } from "./utils";

export function hasWebGL() {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(canvas.getContext("webgl2") || canvas.getContext("webgl"));
  } catch {
    return false;
  }
}

function disposeScene(scene: THREE.Scene) {
  const disposed = new Set<{ dispose(): void }>();
  scene.traverse((object) => {
    const item = object as THREE.Object3D & { geometry?: THREE.BufferGeometry; material?: THREE.Material | THREE.Material[] };
    if (item.geometry) disposed.add(item.geometry);
    if (item.material) (Array.isArray(item.material) ? item.material : [item.material]).forEach((material) => disposed.add(material));
  });
  disposed.forEach((resource) => resource.dispose());
}

/**
 * Mounts a Three.js scene inside `element` with resize handling, offscreen pausing,
 * pointer/scroll input and prefers-reduced-motion support.
 */
export async function mountStage(element: HTMLElement, factory: SceneFactory): Promise<StageController | null> {
  if (!hasWebGL()) return null;

  let T: ThreeModule;
  try {
    T = await import("three");
  } catch {
    return null;
  }
  if (!element.isConnected) return null;

  const renderer = new T.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
  renderer.setClearColor(0x000000, 0);
  const canvas = renderer.domElement;
  canvas.className = "lp-stage__canvas";
  canvas.setAttribute("aria-hidden", "true");
  element.appendChild(canvas);

  const scene = new T.Scene();
  const camera = new T.PerspectiveCamera(35, 1, 0.1, 100);
  camera.position.set(0, 0, 10);
  addStudioLights(T, scene);

  const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  const input: SceneInput = {
    time: 0,
    delta: 0,
    pointer: { x: 0, y: 0 },
    hover: 0,
    progress: 0.5,
    exit: 0,
    aspect: 1,
    reduced: motionQuery.matches,
    state: {}
  };
  const instance = factory({ T, scene, camera });
  scene.add(instance.object);

  const target = { x: 0, y: 0, hover: 0 };
  let visible = false;
  let frame = 0;
  let last = performance.now();
  let elapsed = 0;

  const schedule = () => {
    if (!frame && visible && !document.hidden) frame = requestAnimationFrame(render);
  };

  const fit = () => {
    const width = element.clientWidth;
    const height = element.clientHeight;
    if (!width || !height) return;
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    input.aspect = camera.aspect;
    schedule();
  };

  function render(now: number) {
    frame = 0;
    if (!visible || document.hidden) return;
    const delta = Math.min((now - last) / 1000, 0.05);
    last = now;
    const reduced = input.reduced;

    if (!reduced) elapsed += delta;
    input.time = elapsed;
    input.delta = reduced ? 0 : delta;

    if (reduced) {
      input.pointer.x = 0;
      input.pointer.y = 0;
      input.hover = 0;
      input.progress = 0.5;
      input.exit = 0;
    } else {
      const ease = 1 - Math.exp(-delta * 4);
      input.pointer.x += (target.x - input.pointer.x) * ease;
      input.pointer.y += (target.y - input.pointer.y) * ease;
      input.hover += (target.hover - input.hover) * ease;
      const rect = element.getBoundingClientRect();
      const viewport = window.innerHeight;
      input.progress = clamp((viewport - rect.top) / (viewport + rect.height));
      input.exit = clamp(-rect.top / Math.max(rect.height, 1));
    }

    instance.update(input);
    renderer.render(scene, camera);
    if (!reduced) schedule();
  }

  const resizeObserver = new ResizeObserver(fit);
  resizeObserver.observe(element);
  const visibilityObserver = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    last = performance.now();
    schedule();
  }, { rootMargin: "80px" });
  visibilityObserver.observe(element);

  const onPointerMove = (event: PointerEvent) => {
    if (!visible || input.reduced || event.pointerType === "touch") return;
    const rect = element.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -(((event.clientY - rect.top) / rect.height) * 2 - 1);
    target.x = clamp(x, -1.4, 1.4);
    target.y = clamp(y, -1.4, 1.4);
    target.hover = Math.abs(x) <= 1 && Math.abs(y) <= 1 ? 1 : 0;
  };
  const resetPointer = () => {
    target.x = 0;
    target.y = 0;
    target.hover = 0;
  };
  const onMotionChange = () => {
    input.reduced = motionQuery.matches;
    schedule();
  };
  const onVisibility = () => {
    last = performance.now();
    schedule();
  };

  window.addEventListener("pointermove", onPointerMove, { passive: true });
  document.documentElement.addEventListener("pointerleave", resetPointer);
  window.addEventListener("blur", resetPointer);
  document.addEventListener("visibilitychange", onVisibility);
  motionQuery.addEventListener("change", onMotionChange);
  fit();

  return {
    setState(key, value) {
      input.state[key] = value;
      schedule();
    },
    dispose() {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      document.documentElement.removeEventListener("pointerleave", resetPointer);
      window.removeEventListener("blur", resetPointer);
      document.removeEventListener("visibilitychange", onVisibility);
      motionQuery.removeEventListener("change", onMotionChange);
      instance.dispose?.();
      disposeScene(scene);
      renderer.dispose();
      renderer.forceContextLoss();
      canvas.remove();
    }
  };
}
