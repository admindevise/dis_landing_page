import React from "react";
import { ICON } from "../../constants/content";

export default function Security() {
  return (
    <section
      id="seguridad"
      data-screen-label="08 Seguridad"
      style={{
        maxWidth: "1240px",
        margin: "0 auto",
        padding: "96px 24px"
      }}
    >
      <div data-glass="" style={{ padding: "clamp(28px, 5vw, 64px)", borderRadius: "28px", background: "linear-gradient(135deg, rgb(31 58 77 / 0.7), rgb(15 28 39 / 0.6))", backdropFilter: "blur(24px) saturate(140%)", border: "1px solid rgb(255 255 255 / 0.12)", boxShadow: "inset 0 1px 0 rgb(255 255 255 / 0.1)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))", gap: "48px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: "13px", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#4FD8D8" }}>Seguridad y cumplimiento</span>
            <h2 style={{ margin: 0, fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: "clamp(32px, 4vw, 48px)", lineHeight: 1.08, letterSpacing: "-0.025em", color: "#fff", textWrap: "balance" }}>
              Construido para entidades que responden ante reguladores.
            </h2>
            <p style={{ margin: 0, fontSize: "17px", lineHeight: 1.65, color: "#B0C4D4", textWrap: "pretty" }}>
              La confianza se diseña desde la arquitectura. Cada solución registra quién hizo qué y cuándo, protege la información de sus clientes y facilita la labor de auditoría.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px" }}>
            {[
              { icon: ICON.lock, title: "Protección de datos", desc: "Tratamiento de datos personales conforme a la Ley 1581 de 2012 y sus decretos reglamentarios." },
              { icon: ICON.trace, title: "Trazabilidad", desc: "Registro auditable de cada operación: quién, qué y cuándo." },
              { icon: ICON.server, title: "Infraestructura", desc: "Nube con cifrado en tránsito y en reposo." },
              { icon: ICON.usercheck, title: "Gobierno de accesos", desc: "Permisos por rol, separación de funciones y revisión periódica de accesos." }
            ].map((item) => (
              <div key={item.title} style={{ padding: "22px", borderRadius: "16px", background: "rgb(255 255 255 / 0.04)", border: "1px solid rgb(255 255 255 / 0.08)", display: "flex", flexDirection: "column", gap: "10px" }}>
                <span style={{ width: "44px", height: "44px", borderRadius: "12px", display: "grid", placeItems: "center", background: "rgb(2 178 178 / 0.12)", border: "1px solid rgb(79 216 216 / 0.25)" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4FD8D8" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={item.icon} /></svg>
                </span>
                <h3 style={{ margin: 0, fontFamily: "'Outfit', sans-serif", fontSize: "17px", color: "#fff" }}>{item.title}</h3>
                <p style={{ margin: 0, fontSize: "14px", lineHeight: 1.6, color: "#B0C4D4" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
