import React from "react";
import { PILLARS } from "../../constants/content";

export default function Manifesto() {
  return (
    <section
      id="nosotros"
      data-screen-label="03 Manifiesto"
      style={{
        maxWidth: "1240px",
        margin: "0 auto",
        padding: "96px 24px"
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 440px), 1fr))",
          gap: "56px",
          alignItems: "start"
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: "13px", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#4FD8D8" }}>Quiénes somos</span>
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
            Donde el sector inmobiliario, las finanzas y la tecnología se encuentran.
          </h2>
          <p
            style={{
              margin: 0,
              fontSize: "16px",
              lineHeight: 1.7,
              color: "#B0C4D4"
            }}
          >
            Un laboratorio de innovación que nace de la experiencia en finanzas e inmuebles.
            Identificamos problemas reales, diseñamos soluciones con rigor tecnológico y las
            llevamos a operación.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px", fontSize: "17px", lineHeight: 1.7, color: "#B0C4D4" }}>
          <p style={{ margin: 0, textWrap: "pretty" }}>
            disHub es el laboratorio de innovación de Digital Investment Systems S.A.S. Nacimos al constatar que no existía una solución a la medida para la cadena de valor inmobiliaria de la región, y decidimos construirla.
          </p>
          <p style={{ margin: 0, textWrap: "pretty" }}>
            Combinamos conocimiento del negocio fiduciario e inmobiliario con ingeniería de producto. Cada solución parte de un problema operativo real, se valida con quienes lo viven a diario y se implementa con criterios de seguridad, trazabilidad y cumplimiento.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "12px", marginTop: "8px" }}>
            {PILLARS.map((pillar) => (
              <div key={pillar.t} data-glass="" style={{ padding: "18px", borderRadius: "14px", background: "rgb(255 255 255 / 0.04)", backdropFilter: "blur(16px)", border: "1px solid rgb(255 255 255 / 0.08)" }}>
                <h3 style={{ margin: "0 0 6px", fontFamily: "'Outfit', sans-serif", fontSize: "16px", color: "#fff" }}>{pillar.t}</h3>
                <p style={{ margin: 0, fontSize: "13px", lineHeight: 1.55 }}>{pillar.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
