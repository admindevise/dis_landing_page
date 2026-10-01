import React from "react";
import { SITE } from "../../constants/content";

export default function CTA() {
  return (
    <section
      id="cta"
      data-screen-label="15 CTA final"
      style={{
        maxWidth: "1240px",
        margin: "0 auto",
        padding: "72px 24px"
      }}
    >
      <div data-glass="" style={{ position: "relative", overflow: "hidden", padding: "clamp(40px, 7vw, 88px) clamp(24px, 5vw, 64px)", borderRadius: "32px", background: "linear-gradient(135deg, rgb(2 178 178 / 0.22), rgb(31 162 255 / 0.1) 55%, rgb(15 28 39 / 0.4))", backdropFilter: "blur(24px) saturate(140%)", border: "1px solid rgb(79 216 216 / 0.3)", boxShadow: "inset 0 1px 0 rgb(255 255 255 / 0.15)", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "24px" }}>
        <img src="/DIS.svg" alt="" aria-hidden="true" style={{ position: "absolute", right: "-60px", bottom: "-60px", width: "320px", opacity: 0.06 }} />
        <h2 style={{ position: "relative", margin: 0, maxWidth: "820px", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: "clamp(32px, 4.5vw, 56px)", lineHeight: 1.05, letterSpacing: "-0.03em", color: "#fff", textWrap: "balance" }}>
          Conversemos sobre la operación que quiere transformar.
        </h2>
        <p style={{ position: "relative", margin: 0, maxWidth: "600px", fontSize: "18px", lineHeight: 1.6, color: "#fff", opacity: 0.9 }}>
          En una reunión de 30 minutos entendemos su contexto y le indicamos qué solución, o combinación de soluciones, tiene sentido para su organización.
        </p>
        <div style={{ position: "relative", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px" }}>
          <a href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", minHeight: "52px", padding: "0 26px", borderRadius: "12px", background: "#02B2B2", color: "#0F1C27", fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: "16px", boxShadow: "0 12px 32px -12px rgb(2 178 178 / 0.7), inset 0 1px 0 rgb(255 255 255 / 0.3)" }}>Agendar una reunión</a>
          <a href="#contacto" style={{ display: "inline-flex", alignItems: "center", minHeight: "52px", padding: "0 26px", borderRadius: "12px", background: "rgb(255 255 255 / 0.08)", border: "1px solid rgb(255 255 255 / 0.2)", color: "#fff", fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: "16px" }}>Escribirnos</a>
        </div>
      </div>
    </section>
  );
}
