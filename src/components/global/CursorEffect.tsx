import { useEffect, useRef } from "react";

export default function CursorEffect() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!finePointer.matches || reducedMotion.matches) return;

    const root = document.documentElement;
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let targetX = -100;
    let targetY = -100;
    let currentX = targetX;
    let currentY = targetY;
    let frame = 0;

    const render = () => {
      currentX += (targetX - currentX) * 0.18;
      currentY += (targetY - currentY) * 0.18;
      dot.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`;
      ring.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      frame = requestAnimationFrame(render);
    };

    const handlePointerMove = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      root.classList.add("custom-cursor-visible");
      const interactive = (event.target as HTMLElement).closest(
        "a, button, [role='button'], input, textarea, select",
      );
      root.classList.toggle("custom-cursor-active", Boolean(interactive));
    };

    const hideCursor = () => root.classList.remove("custom-cursor-visible");

    root.classList.add("custom-cursor-enabled");
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerleave", hideCursor);
    window.addEventListener("blur", hideCursor);
    frame = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(frame);
      root.classList.remove(
        "custom-cursor-enabled",
        "custom-cursor-visible",
        "custom-cursor-active",
      );
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", hideCursor);
      window.removeEventListener("blur", hideCursor);
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="custom-cursor-ring" aria-hidden="true" />
      <div ref={dotRef} className="custom-cursor-dot" aria-hidden="true" />
    </>
  );
}