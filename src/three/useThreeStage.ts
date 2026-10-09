import { useCallback, useEffect, useRef, useState } from "react";
import { mountStage } from "./stage";
import type { SceneFactory, StageController } from "./types";

export type StageStatus = "idle" | "ready" | "unsupported" | "disabled";

/**
 * Lazily mounts a Three.js scene when its container approaches the viewport.
 * `factory` must be a stable (module-level) reference.
 */
export function useThreeStage(factory: SceneFactory, enabled = true) {
  const ref = useRef<HTMLDivElement | null>(null);
  const controllerRef = useRef<StageController | null>(null);
  const pendingState = useRef<Record<string, number>>({});
  const [status, setStatus] = useState<StageStatus>("idle");

  useEffect(() => {
    if (!enabled) return;

    const element = ref.current;
    if (!element) return;
    let cancelled = false;

    const observer = new IntersectionObserver((entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) return;
      observer.disconnect();
      mountStage(element, factory)
        .then((controller) => {
          if (cancelled) {
            controller?.dispose();
            return;
          }
          controllerRef.current = controller;
          if (controller) Object.entries(pendingState.current).forEach(([key, value]) => controller.setState(key, value));
          setStatus(controller ? "ready" : "unsupported");
        })
        .catch(() => {
          if (!cancelled) setStatus("unsupported");
        });
    }, { rootMargin: "60% 0px" });
    observer.observe(element);

    return () => {
      cancelled = true;
      observer.disconnect();
      controllerRef.current?.dispose();
      controllerRef.current = null;
    };
  }, [factory, enabled]);

  const setState = useCallback((key: string, value: number) => {
    pendingState.current[key] = value;
    controllerRef.current?.setState(key, value);
  }, []);

  return { ref, status: enabled ? status : "disabled", setState };
}
