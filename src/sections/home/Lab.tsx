import React from "react";
import { CAPABILITIES } from "../../constants/content";

export default function Lab() {
  return (
    <section
      id="laboratorio"
      data-screen-label="10 Laboratorio"
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
          gap: "48px",
          alignItems: "center"
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: "13px", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#4FD8D8" }}>Laboratorio de tecnología</span>
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
            Capacidades técnicas al servicio del negocio.
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
            La madurez de las tecnologías FinTech, SaaS e inteligencia artificial nos permite construir soluciones robustas y especializadas, sin depender de desarrollos genéricos.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1px", borderRadius: "20px", overflow: "hidden", border: "1px solid rgb(255 255 255 / 0.1)", background: "rgb(255 255 255 / 0.08)" }}>
          {CAPABILITIES.map((capability) => (
            <div key={capability.t} style={{ display: "grid", gridTemplateColumns: "48px 1fr", gap: "18px", padding: "22px 24px", background: "rgb(15 28 39 / 0.75)", backdropFilter: "blur(16px)" }}>
              <span style={{ width: "48px", height: "48px", borderRadius: "12px", display: "grid", placeItems: "center", background: "rgb(31 162 255 / 0.12)", border: "1px solid rgb(66 201 255 / 0.25)" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#42C9FF" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={capability.icon} /></svg>
              </span>
              <div><h3 style={{ margin: "0 0 4px", fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: "18px", color: "#fff" }}>{capability.t}</h3><p style={{ margin: 0, fontSize: "14px", lineHeight: 1.6, color: "#B0C4D4" }}>{capability.d}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
