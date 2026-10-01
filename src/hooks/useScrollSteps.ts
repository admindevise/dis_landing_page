import { useEffect, useRef, useState } from "react";

const clamp = (value: number) => Math.min(1, Math.max(0, value));

/**
 * Maps scroll position to a step index.
 * - `pinned`: progress runs while a tall element scrolls past a sticky viewport.
 * - `flow`: progress runs while the element crosses the middle of the viewport.
 */
export function useScrollSteps<T extends HTMLElement>(count: number, mode: "pinned" | "flow") {
  const ref = useRef<T | null>(null);
  const [state, setState] = useState({ active: 0, progress: 0 });

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    let frame = 0;

    const measure = () => {
      frame = 0;
      const rect = element.getBoundingClientRect();
      const viewport = window.innerHeight;
      const travel = rect.height - viewport;
      const progress = mode === "pinned" && travel > 0
        ? clamp(-rect.top / travel)
        : clamp((viewport * 0.55 - rect.top) / rect.height);
      const rounded = Math.round(progress * 1000) / 1000;
      const active = Math.min(count - 1, Math.floor(progress * count));
      setState((previous) => (previous.active === active && previous.progress === rounded ? previous : { active, progress: rounded }));
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [count, mode]);

  return { ref, ...state };
}
