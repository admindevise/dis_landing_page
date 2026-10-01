import React from "react";
import { VALUES } from "../../constants/content";
import SectionVisualObject from "../../components/global/SectionVisualObject";

export default function Values() {
  return (
    <section
      id="valores"
      className="dis-values-section"
      data-screen-label="12 Valores"
      style={{
        maxWidth: "1240px",
        margin: "0 auto",
        padding: "96px 24px"
      }}
    >
      <div className="dis-values-heading" style={{ maxWidth: "720px", display: "flex", flexDirection: "column", gap: "16px", marginBottom: "40px" }}>
        <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: "13px", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#4FD8D8" }}>Valores y cultura</span>
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
        Una cultura de innovación, dentro y fuera de la compañía.
      </h2>
      </div>

      <div className="dis-values-stage" aria-label="Visualización de la cultura disHub">
        <SectionVisualObject variant="network" />
      </div>

      <div
        className="dis-values-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
          gap: "16px"
        }}
      >
        {VALUES.map((value) => (
          <div
            key={value.n}
            style={{
              padding: "28px 24px",
              borderRadius: "20px",
              background: "rgb(255 255 255 / 0.03)",
              border: "1px solid rgb(255 255 255 / 0.08)"
            }}
          >
            <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "14px", color: "#42C9FF" }}>{value.n}</span>
            <h3
              style={{
                margin: 0,
                fontSize: "20px",
                fontWeight: 600,
                color: "#fff",
                fontFamily: "'Outfit', sans-serif"
              }}
            >
              {value.t}
            </h3>
            <p
              style={{
                margin: 0,
                fontSize: "15px",
                lineHeight: 1.6,
                color: "#B0C4D4"
              }}
            >
              {value.d}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
