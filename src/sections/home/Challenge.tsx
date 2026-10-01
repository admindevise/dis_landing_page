import React from "react";
import { PROBLEMS } from "../../constants/content";

export default function Challenge() {
  return (
    <section
      id="desafio"
      data-screen-label="04 Desafío"
      style={{
        maxWidth: "1240px",
        margin: "0 auto",
        padding: "96px 24px"
      }}
    >
      <div
        style={{
          maxWidth: "720px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          marginBottom: "48px"
        }}
      >
        <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: "13px", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#4FD8D8" }}>El desafío</span>
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
          La gestión de activos sigue desconectada de la inversión.
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
          Información dispersa, procesos manuales y baja visibilidad limitan el crecimiento de fiduciarias, gestores e inversionistas. Estos son los puntos de fricción que abordamos.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
          gap: "16px"
        }}
      >
        {PROBLEMS.map((problem, idx) => (
            <article
            key={idx}
            style={{
              padding: "28px",
              borderRadius: "20px",
              background: "linear-gradient(180deg, rgb(255 255 255 / 0.06), rgb(255 255 255 / 0.02))",
              backdropFilter: "blur(20px) saturate(140%)",
              border: "1px solid rgb(255 255 255 / 0.1)",
              boxShadow: "inset 0 1px 0 rgb(255 255 255 / 0.08)",
              display: "flex",
              flexDirection: "column",
              gap: "14px",
              transition: "transform 320ms cubic-bezier(0.16,1,0.3,1), border-color 200ms"
            }}
              data-glass=""
              onMouseEnter={(event) => {
                event.currentTarget.style.transform = "translateY(-4px)";
                event.currentTarget.style.borderColor = "rgb(79 216 216 / 0.35)";
              }}
              onMouseLeave={(event) => {
                event.currentTarget.style.transform = "translateY(0)";
                event.currentTarget.style.borderColor = "rgb(255 255 255 / 0.1)";
              }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{ width: "44px", height: "44px", borderRadius: "12px", display: "grid", placeItems: "center", background: "rgb(2 178 178 / 0.12)", border: "1px solid rgb(79 216 216 / 0.25)" }}>
                <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#4FD8D8"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
                  <path d={problem.icon} />
                </svg>
              </span>
              <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "14px", color: "rgb(176 196 212 / 0.7)" }}>{String(idx + 1).padStart(2, "0")}</span>
            </div>
            <h3
              style={{
                margin: 0,
                fontSize: "20px",
                fontWeight: 600,
                color: "#fff",
                fontFamily: "'Outfit', sans-serif"
              }}
            >
              {problem.t}
            </h3>
            <p
              style={{
                margin: 0,
                fontSize: "15px",
                lineHeight: 1.6,
                color: "#B0C4D4",
                textWrap: "pretty"
              }}
            >
              {problem.d}
            </p>
            </article>
        ))}
      </div>
    </section>
  );
}
