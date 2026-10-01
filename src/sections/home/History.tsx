import React, { useState } from "react";
import { ERAS } from "../../constants/content";

export default function History() {
  const [selectedEra, setSelectedEra] = useState(ERAS.length - 1);

  return (
    <section
      id="historia"
      data-screen-label="11 Historia"
      style={{
        maxWidth: "1240px",
        margin: "0 auto",
        padding: "96px 24px"
      }}
    >
      <div style={{ maxWidth: "720px", display: "flex", flexDirection: "column", gap: "16px", marginBottom: "40px" }}>
        <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: "13px", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#4FD8D8" }}>Trayectoria</span>
        <h2 style={{ margin: 0, fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: "clamp(32px, 4vw, 52px)", lineHeight: 1.08, letterSpacing: "-0.025em", color: "#fff", textWrap: "balance" }}>
          De una necesidad del mercado a soluciones en producción.
        </h2>
      </div>

      <div role="tablist" aria-label="Etapas de la trayectoria" style={{ position: "relative", display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: "8px", marginBottom: "20px" }}>
        <div aria-hidden="true" style={{ position: "absolute", left: 0, right: 0, top: "27px", height: "1px", background: "rgb(255 255 255 / 0.12)" }} />
        {ERAS.map((era, idx) => (
          <button
            key={idx}
            type="button"
            role="tab"
            aria-selected={selectedEra === idx}
            onClick={() => setSelectedEra(idx)}
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "14px",
              padding: "18px 0 0",
              background: "none",
              border: "none",
              cursor: "pointer",
              textAlign: "left",
              color: selectedEra === idx ? "#fff" : "#B0C4D4",
              minHeight: "44px"
            }}
          >
            <span style={{ width: "18px", height: "18px", borderRadius: "50%", border: `2px solid ${idx <= selectedEra ? "#4FD8D8" : "rgb(176 196 212 / 0.4)"}`, background: selectedEra === idx ? "#02B2B2" : "#0F1C27", transition: "all 300ms" }} />
            <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: "16px", lineHeight: 1.25, overflowWrap: "anywhere" }}>{era.year}</span>
          </button>
        ))}
      </div>

      <div data-glass="" aria-live="polite" style={{ padding: "clamp(24px, 4vw, 40px)", borderRadius: "24px", background: "linear-gradient(180deg, rgb(255 255 255 / 0.06), rgb(255 255 255 / 0.02))", backdropFilter: "blur(20px) saturate(140%)", border: "1px solid rgb(255 255 255 / 0.1)", boxShadow: "inset 0 1px 0 rgb(255 255 255 / 0.08)" }}>
        <h3
          style={{
            margin: "0 0 24px",
            fontSize: "28px",
            fontWeight: 600,
            letterSpacing: "-0.02em",
            fontFamily: "'Space Grotesk', sans-serif",
            color: "#fff",
          }}
        >
          {ERAS[selectedEra].title}
        </h3>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
            gap: "24px"
          }}
        >
          {ERAS[selectedEra].items.map((item, idx) => (
            <div key={idx} style={{ display: "flex", flexDirection: "column", gap: "6px", paddingTop: "16px", borderTop: "1px solid rgb(79 216 216 / 0.3)" }}>
              <p
                style={{
                  margin: 0,
                  fontSize: "15px",
                  fontWeight: 600,
                  color: "#4FD8D8",
                  fontFamily: "'Outfit', sans-serif",
                  letterSpacing: 0
                }}
              >
                {item.k}
              </p>
              <p
                style={{
                  margin: 0,
                  fontSize: "15px",
                  lineHeight: 1.6,
                  color: "#B0C4D4"
                }}
              >
                {item.v}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
