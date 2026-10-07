import { useEffect, type RefObject } from "react";

const clamp = (value: number) => Math.min(1, Math.max(0, value));

/**
 * Drives the landing's editorial motion:
 * - reveals `[data-reveal]` elements once they enter the viewport (sets `data-revealed`);
 * - toggles `.is-active` on sections in view;
 * - exposes `--progress`, `--enter` and `--exit` per section for parallax and panel transitions;
 * - updates the reading progress bar.
 */
export function useLandingMotion(rootRef: RefObject<HTMLElement | null>, progressRef: RefObject<HTMLElement | null>, enabled = true, routeKey = "") {
  useEffect(() => {
    const root = rootRef.current;
    if (!root || !enabled) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealItems = Array.from(root.querySelectorAll<HTMLElement>("[data-reveal]"));
    const sections = Array.from(root.querySelectorAll<HTMLElement>(".lp-section, .lp-hero"));

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        // Attribute (not class) so React className updates never reset it.
        entry.target.setAttribute("data-revealed", "");
        revealObserver.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });

    if (reduced) revealItems.forEach((item) => item.setAttribute("data-revealed", ""));
    else revealItems.forEach((item) => revealObserver.observe(item));

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.target.classList.toggle("is-active", entry.isIntersecting));
    }, { threshold: 0.08 });
    sections.forEach((section) => sectionObserver.observe(section));

    let frame = 0;
    const update = () => {
      frame = 0;
      const viewport = window.innerHeight;
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.bottom < -viewport || rect.top > viewport * 2) return;
        section.style.setProperty("--progress", clamp((viewport - rect.top) / (viewport + rect.height)).toFixed(4));
        section.style.setProperty("--enter", clamp((viewport - rect.top) / (viewport * 0.75)).toFixed(4));
        section.style.setProperty("--exit", clamp(-rect.top / Math.max(rect.height, 1)).toFixed(4));
      });
      const scrollable = document.documentElement.scrollHeight - viewport;
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${scrollable > 0 ? clamp(window.scrollY / scrollable) : 0})`;
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    return () => {
      cancelAnimationFrame(frame);
      revealObserver.disconnect();
      sectionObserver.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [rootRef, progressRef, enabled, routeKey]);
}
