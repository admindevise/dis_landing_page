import React, { useState } from "react";
import { TESTIMONIALS } from "../../constants/content";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonial = TESTIMONIALS[activeIndex];

  return (
    <section
      id="testimonios"
      data-screen-label="13 Testimonios"
      style={{
        maxWidth: "1240px",
        margin: "0 auto",
        padding: "96px 24px"
      }}
    >
      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "24px", marginBottom: "32px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "640px" }}>
          <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: "13px", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#4FD8D8" }}>Testimonios</span>
          <h2 style={{ margin: 0, fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: "clamp(32px, 4vw, 48px)", lineHeight: 1.08, letterSpacing: "-0.025em", color: "#fff" }}>
            Lo que dicen quienes operan con nosotros.
          </h2>
        </div>
        <div style={{ display: "flex", gap: "8px" }}>
          <button type="button" onClick={() => setActiveIndex((activeIndex + TESTIMONIALS.length - 1) % TESTIMONIALS.length)} aria-label="Testimonio anterior" style={{ width: "48px", height: "48px", padding: 0, borderRadius: "12px", border: "1px solid rgb(255 255 255 / 0.16)", background: "rgb(255 255 255 / 0.06)", color: "#fff", cursor: "pointer", display: "grid", placeItems: "center" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg>
          </button>
          <button type="button" onClick={() => setActiveIndex((activeIndex + 1) % TESTIMONIALS.length)} aria-label="Testimonio siguiente" style={{ width: "48px", height: "48px", padding: 0, borderRadius: "12px", border: "1px solid rgb(255 255 255 / 0.16)", background: "rgb(255 255 255 / 0.06)", color: "#fff", cursor: "pointer", display: "grid", placeItems: "center" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg>
          </button>
        </div>
      </div>
      <figure data-glass="" aria-live="polite" aria-roledescription="diapositiva" style={{ margin: 0, padding: "clamp(28px, 5vw, 56px)", borderRadius: "24px", background: "linear-gradient(180deg, rgb(255 255 255 / 0.06), rgb(255 255 255 / 0.02))", backdropFilter: "blur(20px)", border: "1px solid rgb(255 255 255 / 0.1)", display: "flex", flexDirection: "column", gap: "28px" }}>
        <blockquote style={{ margin: 0, fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500, fontSize: "clamp(22px, 2.6vw, 32px)", lineHeight: 1.35, letterSpacing: "-0.01em", color: "#fff", textWrap: "pretty" }}>“{testimonial.q}”</blockquote>
        <figcaption style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <span aria-hidden="true" style={{ width: "48px", height: "48px", borderRadius: "50%", border: "1px dashed rgb(176 196 212 / 0.4)" }} />
            <div><div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600, color: "#fff" }}>{testimonial.a}</div><div style={{ fontSize: "14px", color: "#B0C4D4" }}>{testimonial.r}</div></div>
          </div>
          <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "14px", color: "#B0C4D4" }}>{activeIndex + 1} / {TESTIMONIALS.length}</span>
        </figcaption>
      </figure>
    </section>
  );
}
