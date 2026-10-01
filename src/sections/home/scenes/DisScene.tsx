import React, { useEffect, useRef, useState } from "react";
import { SOLUTIONS } from "../../../constants/content";
import { createDisScenes, type DisScenesController } from "./dis-3d";

interface DisSceneProps {
  mode: "hero" | "solutions";
  narrow?: boolean;
  selectedIndex?: number;
}

export default function DisScene({ mode, narrow = false, selectedIndex = 0 }: DisSceneProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const selectedIndexRef = useRef(selectedIndex);
  const controllerRef = useRef<DisScenesController | null>(null);
  const [available, setAvailable] = useState(true);

  useEffect(() => {
    selectedIndexRef.current = selectedIndex;
  }, [selectedIndex]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    let disposed = false;

    const updatePointer = (event: PointerEvent) => {
      controllerRef.current?.setPointer(event.clientX / window.innerWidth * 2 - 1, event.clientY / window.innerHeight * 2 - 1);
    };
    const updateScroll = () => controllerRef.current?.setScroll(window.scrollY);
    window.addEventListener("pointermove", updatePointer, { passive: true });
    window.addEventListener("scroll", updateScroll, { passive: true });

    createDisScenes({
      hero: mode === "hero" ? container : undefined,
      solutions: mode === "solutions" ? container : undefined,
      getSolution: () => selectedIndexRef.current
    }).then((controller) => {
      if (disposed) {
        controller?.dispose();
        return;
      }
      controllerRef.current = controller;
      setAvailable(Boolean(controller));
      updateScroll();
    }).catch(() => setAvailable(false));

    return () => {
      disposed = true;
      window.removeEventListener("pointermove", updatePointer);
      window.removeEventListener("scroll", updateScroll);
      controllerRef.current?.dispose();
      controllerRef.current = null;
    };
  }, [mode]);

  const alt = mode === "hero"
    ? "Estructura de nodos de datos interconectados alrededor de un núcleo de vidrio, que representa el ecosistema disHub."
    : SOLUTIONS[selectedIndex].alt;

  return (
    <div
      ref={containerRef}
      className={mode === "hero" ? undefined : "dis-solutions-canvas"}
      role="img"
      aria-label={alt}
      style={mode === "hero"
        ? { position: "absolute", top: 0, bottom: 0, right: 0, width: narrow ? "100%" : "56%", opacity: narrow ? 0.35 : 1 }
        : { position: "relative", minHeight: "440px", background: "radial-gradient(circle at 50% 55%, rgb(2 178 178 / 0.14), transparent 65%)", borderRight: "1px solid rgb(255 255 255 / 0.06)" }}
    >
      {mode === "solutions" && !available && (
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center", padding: "40px", textAlign: "center", color: "#B0C4D4", fontSize: "15px", lineHeight: 1.6 }}>
          <span style={{ maxWidth: "320px" }}>La visualización interactiva no está disponible en este dispositivo.</span>
        </div>
      )}
      {mode === "solutions" && available && (
        <div aria-hidden="true" style={{ position: "absolute", left: "20px", bottom: "18px", fontFamily: "'Outfit', sans-serif", fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgb(176 196 212 / 0.8)", pointerEvents: "none" }}>
          {SOLUTIONS[selectedIndex].hint}
        </div>
      )}
    </div>
  );
}