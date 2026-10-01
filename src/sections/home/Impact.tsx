import React from "react";
import { METRICS } from "../../constants/content";

export default function Impact() {
  return (
    <section
      id="impacto"
      data-screen-label="07 Impacto"
      style={{
        maxWidth: "1240px",
        margin: "0 auto",
        padding: "72px 24px"
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "1px",
          borderRadius: "24px",
          overflow: "hidden",
          background: "rgb(255 255 255 / 0.08)",
          border: "1px solid rgb(255 255 255 / 0.1)"
        }}
      >
        {METRICS.map((metric) => (
          <div
            key={metric.v}
            style={{
              padding: "36px 28px",
              background: "rgb(15 28 39 / 0.72)",
              backdropFilter: "blur(20px)",
              display: "flex",
              flexDirection: "column",
              gap: "10px"
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: "clamp(36px, 4vw, 52px)",
                fontWeight: 600,
                letterSpacing: "-0.03em",
                fontFamily: "'Space Grotesk', sans-serif",
                color: "#fff",
                fontVariantNumeric: "tabular-nums"
              }}
            >
              {metric.v}
            </p>
            <p
              style={{
                margin: 0,
                fontSize: "15px",
                lineHeight: 1.6,
                color: "#B0C4D4"
              }}
            >
              {metric.l}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
