import { onAbort } from "../lib/lifecycle";
import { mountStage } from "./stage";
import type { SceneFactory, StageController } from "./types";

export type StageStatus = "idle" | "ready" | "unsupported" | "disabled";

interface StageOptions {
  /** Unmounts the scene when it aborts (page navigation). */
  signal: AbortSignal;
  /** Called with the layer under the pointer when the scene is clicked (outside buttons). */
  onLayerSelect?: (layer: number) => void;
}

/**
 * Lazily mounts a Three.js scene in a `ThreeStage` container when it approaches the viewport.
 * Below 1100 px the scene is disabled and a static fallback is shown instead.
 */
export function initThreeStage(element: HTMLElement, factory: SceneFactory, { signal, onLayerSelect }: StageOptions) {
  const lightweight = window.matchMedia("(max-width: 1099px)");
  const pendingState: Record<string, number> = {};
  let controller: StageController | null = null;
  let observer: IntersectionObserver | null = null;
  let generation = 0;

  const setStatus = (status: StageStatus) => {
    element.dataset.status = status;
    const fallback = element.querySelector(":scope > .lp-stage__fallback");
    if (status === "unsupported" || status === "disabled") {
      if (fallback) return;
      const div = document.createElement("div");
      div.className = "lp-stage__fallback";
      div.setAttribute("aria-hidden", "true");
      element.prepend(div);
    } else {
      fallback?.remove();
    }
  };

  const stop = () => {
    generation += 1;
    observer?.disconnect();
    controller?.dispose();
    controller = null;
  };

  const start = () => {
    stop();
    if (lightweight.matches) {
      setStatus("disabled");
      return;
    }
    setStatus("idle");
    const current = generation;
    observer = new IntersectionObserver((entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) return;
      observer?.disconnect();
      mountStage(element, factory)
        .then((mounted) => {
          if (current !== generation) {
            mounted?.dispose();
            return;
          }
          controller = mounted;
          if (mounted) Object.entries(pendingState).forEach(([key, value]) => mounted.setState(key, value));
          setStatus(mounted ? "ready" : "unsupported");
        })
        .catch(() => {
          if (current === generation) setStatus("unsupported");
        });
    }, { rootMargin: "60% 0px" });
    observer.observe(element);
  };

  const pick = (clientX: number, clientY: number) => {
    const rect = element.getBoundingClientRect();
    if (!rect.width || !rect.height) return null;
    const x = ((clientX - rect.left) / rect.width) * 2 - 1;
    const y = 1 - ((clientY - rect.top) / rect.height) * 2;
    return controller?.pick(x, y) ?? null;
  };

  if (onLayerSelect) {
    element.addEventListener("click", (event) => {
      if ((event.target as HTMLElement).closest("button")) return;
      const layer = pick(event.clientX, event.clientY);
      if (layer !== null) onLayerSelect(layer);
    }, { signal });
  }

  lightweight.addEventListener("change", start, { signal });
  onAbort(signal, stop);
  start();

  return {
    setState(key: string, value: number) {
      pendingState[key] = value;
      controller?.setState(key, value);
    }
  };
}
