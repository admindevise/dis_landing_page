import React from "react";
import { SECTORS } from "../../constants/content";

export default function Sectors() {
  return (
    <section
      id="sectores"
      data-screen-label="09 Sectores"
      style={{
        maxWidth: "1240px",
        margin: "0 auto",
        padding: "96px 24px"
      }}
    >
      <div style={{ maxWidth: "720px", display: "flex", flexDirection: "column", gap: "16px", marginBottom: "40px" }}>
        <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: "13px", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#4FD8D8" }}>A quién servimos</span>
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
        Productos para quienes hacen posible la inversión.
      </h2>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))",
          gap: "16px"
        }}
      >
        {SECTORS.map((sector) => (
          <article
            key={sector.t}
            style={{
              padding: "24px",
              borderRadius: "20px",
              background: "rgb(255 255 255 / 0.04)",
              backdropFilter: "blur(16px)",
              border: "1px solid rgb(255 255 255 / 0.08)",
              display: "flex",
              flexDirection: "column",
              gap: "14px",
              transition: "border-color 200ms, background 200ms"
            }}
            data-glass=""
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgb(31 162 255 / 0.06)";
              e.currentTarget.style.borderColor = "rgb(66 201 255 / 0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgb(255 255 255 / 0.04)";
              e.currentTarget.style.borderColor = "rgb(255 255 255 / 0.08)";
            }}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#4FD8D8" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={sector.icon} /></svg>
            <h3 style={{ margin: 0, fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: "18px", color: "#fff" }}>{sector.t}</h3>
            <p style={{ margin: 0, fontSize: "14px", lineHeight: 1.6, color: "#B0C4D4", textWrap: "pretty" }}>{sector.d}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
