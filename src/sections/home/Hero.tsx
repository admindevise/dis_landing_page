import React from "react";
import DisScene from "./scenes/DisScene";
import { SITE } from "../../constants/content";

export default function Hero({ narrow = false }: { narrow?: boolean } = {}) {
  return (
    <section
      id="inicio"
      className="dis-hero-fullscreen"
      data-screen-label="01 Hero"
      style={{
        position: "relative",
        minHeight: "calc(100vh - 88px)",
        display: "flex",
        alignItems: "center"
      }}
    >
      {/* Three.js Hero Scene */}
      <DisScene mode="hero" narrow={narrow} />

      <div
        style={{
          position: "relative",
          maxWidth: "1240px",
          width: "100%",
          margin: "0 auto",
          padding: "64px 24px 96px",
          boxSizing: "border-box",
          pointerEvents: "none"
        }}
        className="dis-large-hero"
      >
        <div
          style={{
            maxWidth: "640px",
            display: "flex",
            flexDirection: "column",
            gap: "28px",
            pointerEvents: "auto"
          }}
        >
          <div style={{ display: "inline-flex", alignSelf: "flex-start", alignItems: "center", gap: "10px", padding: "8px 14px", borderRadius: "999px", border: "1px solid rgb(79 216 216 / 0.3)", background: "rgb(2 178 178 / 0.1)", fontFamily: "'Outfit', sans-serif", fontSize: "13px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#4FD8D8" }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#4FD8D8" }} />
            Laboratorio de innovación · PropTech · FinTech
          </div>
          <h1
            style={{
              margin: 0,
              fontSize: "clamp(40px, 6vw, 76px)",
              fontWeight: 600,
              lineHeight: 1.02,
              letterSpacing: "-0.035em",
              fontFamily: "'Space Grotesk', sans-serif",
              color: "#fff",
              textWrap: "balance"
            }}
          >
            Tecnología con ADN inmobiliario para quienes <span style={{ color: "#4FD8D8" }}>administran capital</span>.
          </h1>

          <p
            style={{
              margin: 0,
              maxWidth: "600px",
              fontSize: "clamp(17px, 1.5vw, 20px)",
              lineHeight: 1.6,
              color: "#B0C4D4",
              textWrap: "pretty"
            }}
          >
            Diseñamos, construimos e implementamos productos que convierten operaciones fragmentadas en procesos trazables, eficientes y auditables para el sector financiero e inmobiliario.
          </p>

          <div
            style={{
              display: "flex",
              gap: "12px",
              flexWrap: "wrap"
            }}
          >
            <a
              href={SITE.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                minHeight: "52px",
                padding: "0 24px",
                borderRadius: "12px",
                background: "#02B2B2",
                color: "#0F1C27",
                fontFamily: "'Outfit', sans-serif",
                fontSize: "16px",
                fontWeight: 600,
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                boxShadow: "0 12px 32px -12px rgb(2 178 178 / 0.7), inset 0 1px 0 rgb(255 255 255 / 0.3)",
                transition: "background 200ms"
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#4FD8D8";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#02B2B2";
              }}
            >
              Agendar una reunión
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>

            <a
              href="#soluciones"
              style={{
                minHeight: "52px",
                padding: "0 24px",
                borderRadius: "12px",
                background: "rgb(255 255 255 / 0.06)",
                color: "#fff",
                fontFamily: "'Outfit', sans-serif",
                fontSize: "16px",
                fontWeight: 600,
                textDecoration: "none",
                border: "1px solid rgb(255 255 255 / 0.14)",
                backdropFilter: "blur(16px)",
                display: "inline-flex",
                alignItems: "center",
                transition: "background 200ms"
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgb(2 178 178 / 0.1)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgb(255 255 255 / 0.06)";
              }}
            >
              Conocer el ecosistema
            </a>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#confianza"
        aria-label="Desplazarse a la siguiente sección"
        style={{
          position: "absolute",
          left: "50%",
          bottom: "24px",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          color: "#B0C4D4",
          fontSize: "12px",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          fontFamily: "'Outfit', sans-serif",
          textDecoration: "none",
          animation: "none"
        }}
      >
        <span style={{ width: "22px", height: "36px", borderRadius: "12px", border: "1.5px solid rgb(176 196 212 / 0.5)", display: "flex", justifyContent: "center", paddingTop: "6px", boxSizing: "border-box" }}>
          <span style={{ width: "3px", height: "8px", borderRadius: "2px", background: "#4FD8D8", animation: "cue 1.6s ease-out infinite" }} />
        </span>
      </a>
    </section>
  );
}
