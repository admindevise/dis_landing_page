import { useEffect, useState } from "react";

const windowLoaded = () =>
  document.readyState === "complete"
    ? Promise.resolve()
    : new Promise<void>((resolve) => window.addEventListener("load", () => resolve(), { once: true }));

/**
 * Waits for fonts, page assets and the Three.js module before revealing the landing.
 * `minDuration` avoids a flash; `maxDuration` guarantees the page never stays blocked.
 */
export function usePreload(minDuration = 1400, maxDuration = 6000) {
  const [taskProgress, setTaskProgress] = useState(0);
  const [timeProgress, setTimeProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let completed = 0;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const lightweight = window.matchMedia("(max-width: 1099px), (pointer: coarse)").matches;
    const duration = reduced || lightweight ? 350 : minDuration;
    const start = performance.now();
    const clock = setInterval(() => setTimeProgress(Math.min(1, (performance.now() - start) / duration)), 50);

    const requiredTasks: Promise<unknown>[] = lightweight
      ? []
      : [document.fonts?.ready ?? Promise.resolve(), windowLoaded(), import("three")];

    const tasks = requiredTasks.map((task) => task.catch(() => undefined).then(() => {
      if (cancelled) return;
      completed += 1;
      setTaskProgress(completed / tasks.length);
    }));

    const minimum = new Promise((resolve) => setTimeout(resolve, duration));
    const maximum = new Promise((resolve) => setTimeout(resolve, maxDuration));

    Promise.race([Promise.all([Promise.all(tasks), minimum]), maximum]).then(() => {
      clearInterval(clock);
      if (cancelled) return;
      setTaskProgress(1);
      setTimeProgress(1);
      setDone(true);
    });

    return () => {
      cancelled = true;
      clearInterval(clock);
    };
  }, [minDuration, maxDuration]);

  // The counter never runs ahead of the minimum duration, so it doesn't jump to 100 instantly.
  return { progress: done ? 1 : Math.min(taskProgress, timeProgress), done };
}
