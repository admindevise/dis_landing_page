import React from "react";
import { CLIENT_SLOTS, PROOFS } from "../../constants/content";

export default function Trust() {
  return (
    <section
      id="confianza"
      data-screen-label="02 Confianza"
      style={{
        maxWidth: "1240px",
        margin: "0 auto",
        padding: "24px 24px 72px"
      }}
    >
      <div
        data-glass=""
        style={{
          padding: "28px 32px",
          borderRadius: "20px",
          background: "linear-gradient(180deg, rgb(255 255 255 / 0.06), rgb(255 255 255 / 0.02))",
          backdropFilter: "blur(20px) saturate(140%)",
          border: "1px solid rgb(255 255 255 / 0.1)",
          boxShadow: "inset 0 1px 0 rgb(255 255 255 / 0.08)",
          display: "flex",
          flexDirection: "column",
          gap: "24px"
        }}
      >
          <p
          style={{
            margin: 0,
            fontSize: "13px",
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#B0C4D4",
            fontFamily: "'Outfit', sans-serif",
            textAlign: "center"
          }}
        >
          Trabajamos junto a entidades del sector financiero e inmobiliario
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "12px" }}>
          {CLIENT_SLOTS.map((slot) => (
            <div key={slot} style={{ height: "56px", borderRadius: "12px", border: "1px dashed rgb(176 196 212 / 0.3)", display: "grid", placeItems: "center", fontFamily: "'Manrope', sans-serif", fontSize: "12px", color: "#B0C4D4" }}>
              {slot}
            </div>
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px", borderTop: "1px solid rgb(255 255 255 / 0.08)", paddingTop: "20px" }}>
          {PROOFS.map((proof) => (
            <div key={proof} style={{ display: "flex", alignItems: "center", gap: "12px", color: "#fff", fontSize: "15px" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4FD8D8" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>
              {proof}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
