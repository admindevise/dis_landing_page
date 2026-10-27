import { useEffect, useRef, useState } from "react";

/** Scale that fits a fixed-width canvas into `width`; never upscales. */
export const fitScale = (width: number, baseWidth: number) => Math.min(1, width / baseWidth);

/** Tracks the content width of an element, for canvases drawn at a fixed design size. */
export function useFitScale<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [width, setWidth] = useState(() => (typeof window === "undefined" ? 1280 : window.innerWidth));

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const measure = () => setWidth(element.clientWidth);
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return { ref, width };
}
