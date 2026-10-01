import React, { useState } from "react";
import { FAQS } from "../../constants/content";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="preguntas"
      data-screen-label="14 FAQ"
      style={{
        maxWidth: "1240px",
        margin: "0 auto",
        padding: "96px 24px"
      }}
    >
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))", gap: "48px", alignItems: "start" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: "13px", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#4FD8D8" }}>Preguntas frecuentes</span>
          <h2 style={{ margin: 0, fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: "clamp(32px, 4vw, 48px)", lineHeight: 1.08, letterSpacing: "-0.025em", color: "#fff" }}>Respuestas claras antes de empezar.</h2>
          <p style={{ margin: 0, fontSize: "16px", lineHeight: 1.65, color: "#B0C4D4" }}>Si su pregunta no está aquí, escríbanos a <a href="mailto:contacto@dishub.co">contacto@dishub.co</a>.</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {FAQS.map((faq, idx) => (
            <div key={idx} data-glass="" style={{ borderRadius: "16px", background: openIndex === idx ? "rgb(255 255 255 / 0.07)" : "rgb(255 255 255 / 0.03)", backdropFilter: "blur(16px)", border: "1px solid rgb(255 255 255 / 0.1)", transition: "background 200ms" }}>
              <h3 style={{ margin: 0 }}>
                <button type="button" id={`faq-b-${idx}`} aria-expanded={openIndex === idx} aria-controls={`faq-p-${idx}`} onClick={() => setOpenIndex(openIndex === idx ? null : idx)} style={{ width: "100%", padding: "20px 24px", border: 0, borderRadius: "16px", background: "transparent", color: "#fff", textAlign: "left", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: "15px" }}>
                  {faq.q}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4FD8D8" strokeWidth="2" style={{ transition: "transform 200ms", transform: openIndex === idx ? "rotate(180deg)" : "rotate(0deg)", flexShrink: 0 }}>
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
              </h3>
              {openIndex === idx && (
                <p id={`faq-p-${idx}`} role="region" aria-labelledby={`faq-b-${idx}`} style={{ margin: "0 24px 20px", fontSize: "15px", lineHeight: 1.6, color: "#B0C4D4" }}>
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
