/**
 * Runs `setup` on the initial page load and after every client-side navigation (Astro's ClientRouter).
 * The signal aborts right before the page is swapped out: use it to remove window/document listeners,
 * stop timers and observers, and dispose 3D scenes.
 */
export function onPageLoad(setup: (signal: AbortSignal) => void) {
  document.addEventListener("astro:page-load", () => {
    const controller = new AbortController();
    document.addEventListener("astro:before-swap", () => controller.abort(), { once: true });
    setup(controller.signal);
  });
}

/** Calls `cleanup` when `signal` aborts. */
export const onAbort = (signal: AbortSignal, cleanup: () => void) => signal.addEventListener("abort", cleanup, { once: true });
