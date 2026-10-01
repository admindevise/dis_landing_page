import React, { useEffect, useRef, useState } from "react";
import { STEPS } from "../../constants/content";

export default function Approach() {
  const stepsRef = useRef<HTMLOListElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [stepProgress, setStepProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const rect = stepsRef.current?.getBoundingClientRect();
      if (!rect) return;
      const progress = Math.min(1, Math.max(0, (window.innerHeight * 0.55 - rect.top) / rect.height));
      setStepProgress(progress);
      setActiveStep(Math.min(STEPS.length - 1, Math.floor(progress * STEPS.length)));
    };
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    updateProgress();
    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <section
      id="enfoque"
      data-screen-label="05 Enfoque"
      style={{
        maxWidth: "1240px",
        margin: "0 auto",
        padding: "96px 24px"
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))",
          gap: "56px",
          alignItems: "start"
        }}
      >
        <div style={{ position: "sticky", top: "120px", display: "flex", flexDirection: "column", gap: "16px" }}>
          <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: "13px", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#4FD8D8" }}>Cómo trabajamos</span>
          <h2
            style={{
              margin: 0,
              fontSize: "clamp(32px, 4vw, 52px)",
              fontWeight: 600,
              lineHeight: 1.08,
              letterSpacing: "-0.025em",
              fontFamily: "'Space Grotesk', sans-serif",
              color: "#fff",
              textWrap: "balance"
            }}
          >
            Un método probado, del problema a la operación.
          </h2>
          <p
            style={{
              margin: 0,
              fontSize: "17px",
              lineHeight: 1.65,
              color: "#B0C4D4",
              textWrap: "pretty"
            }}
          >
            Cada proyecto avanza por cuatro etapas con entregables verificables. Usted conoce en todo momento qué se construye, por qué y con qué resultado.
          </p>
          <div aria-hidden="true" style={{ height: "4px", borderRadius: "4px", background: "rgb(255 255 255 / 0.08)", overflow: "hidden", marginTop: "12px" }}>
            <div style={{ height: "100%", background: "linear-gradient(90deg, #007E82, #4FD8D8)", width: `${Math.max((activeStep + 1) / STEPS.length * 100, stepProgress * 100)}%`, transition: "width 300ms" }} />
          </div>
        </div>

        <ol ref={stepsRef} style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "16px" }}>
          {STEPS.map((step, idx) => (
            <li
              key={idx}
              data-glass=""
              style={{
                padding: "28px",
                borderRadius: "20px",
                background: idx === activeStep ? "rgb(2 178 178 / 0.1)" : "rgb(255 255 255 / 0.03)",
                backdropFilter: "blur(20px) saturate(140%)",
                border: `1px solid ${idx === activeStep ? "rgb(79 216 216 / 0.4)" : "rgb(255 255 255 / 0.08)"}`,
                transition: "background 400ms, border-color 400ms",
                display: "grid",
                gridTemplateColumns: "56px 1fr",
                gap: "20px"
              }}
            >
              <div
                style={{
                  flexShrink: 0,
                  width: "56px",
                  height: "56px",
                  borderRadius: "14px",
                  background: idx <= activeStep ? "#02B2B2" : "rgb(255 255 255 / 0.06)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: idx <= activeStep ? "#0F1C27" : "#B0C4D4",
                  fontWeight: 700,
                  fontSize: "18px",
                  fontFamily: "'Space Grotesk', sans-serif"
                }}
              >
                {idx + 1}
              </div>
              <div>
                <h3
                  style={{
                    margin: "0 0 8px",
                    fontSize: "18px",
                    fontWeight: 600,
                    color: "#fff",
                    fontFamily: "'Outfit', sans-serif"
                  }}
                >
                  {step.t}
                </h3>
                <p
                  style={{
                    margin: 0,
                    fontSize: "15px",
                    lineHeight: 1.6,
                    color: "#B0C4D4"
                  }}
                >
                  {step.d}
                </p>
                <p style={{ margin: "8px 0 0", fontSize: "12px", lineHeight: 1.5, color: "#4FD8D8", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                  Resultado: {step.out}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
