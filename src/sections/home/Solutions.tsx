import React, { useState } from "react";
import { SITE, SOLUTIONS } from "../../constants/content";
import DisScene from "./scenes/DisScene";

export default function Solutions() {
  const [selectedSolution, setSelectedSolution] = useState(0);
  const selectByKey = (event: React.KeyboardEvent<HTMLDivElement>) => {
    let next = selectedSolution;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") next = (next + 1) % SOLUTIONS.length;
    else if (event.key === "ArrowLeft" || event.key === "ArrowUp") next = (next + SOLUTIONS.length - 1) % SOLUTIONS.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = SOLUTIONS.length - 1;
    else return;
    event.preventDefault();
    setSelectedSolution(next);
    document.getElementById(`solution-tab-${next}`)?.focus();
  };
  const solution = SOLUTIONS[selectedSolution];

  return (
    <section
      id="soluciones"
      data-screen-label="06 Soluciones"
      style={{
        maxWidth: "1240px",
        margin: "0 auto",
        padding: "96px 24px"
      }}
    >
      <div
        style={{
          maxWidth: "760px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          marginBottom: "40px"
        }}
      >
        <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: "13px", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#4FD8D8" }}>Ecosistema de soluciones</span>
        <h2 style={{ margin: 0, fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: "clamp(32px, 4vw, 52px)", lineHeight: 1.08, letterSpacing: "-0.025em", color: "#fff", textWrap: "balance" }}>
          Cuatro soluciones, una misma base de datos y de confianza.
        </h2>
        <p
          style={{
            margin: 0,
            fontSize: "16px",
            lineHeight: 1.7,
            color: "#B0C4D4"
          }}
        >
          Cada producto resuelve una etapa distinta del ciclo inmobiliario y financiero. Juntos comparten información, reglas y trazabilidad.
        </p>
      </div>

      {/* Solution tabs */}
      <div
        role="tablist"
        aria-label="Soluciones"
        onKeyDown={selectByKey}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "8px",
          padding: "6px",
          borderRadius: "18px",
          background: "rgb(255 255 255 / 0.04)",
          border: "1px solid rgb(255 255 255 / 0.08)",
          marginBottom: "16px"
        }}
      >
        {SOLUTIONS.map((solution, idx) => (
          <button
            key={idx}
            id={`solution-tab-${idx}`}
            role="tab"
            type="button"
            aria-selected={selectedSolution === idx}
            aria-controls="solution-panel"
            tabIndex={selectedSolution === idx ? 0 : -1}
            onClick={() => setSelectedSolution(idx)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              minHeight: "56px",
              padding: "10px 16px",
              borderRadius: "12px",
              background: selectedSolution === idx ? "rgb(2 178 178 / 0.16)" : "transparent",
              border: selectedSolution === idx ? "1px solid rgb(79 216 216 / 0.45)" : "1px solid transparent",
              color: selectedSolution === idx ? "#fff" : "#B0C4D4",
              fontSize: "15px",
              fontWeight: 600,
              fontFamily: "'Outfit', sans-serif",
              cursor: "pointer",
              transition: "all 200ms"
            }}
            onMouseEnter={(e) => {
              if (selectedSolution !== idx) {
                (e.currentTarget as HTMLElement).style.background = "rgb(255 255 255 / 0.04)";
              }
            }}
            onMouseLeave={(e) => {
              if (selectedSolution !== idx) {
                (e.currentTarget as HTMLElement).style.background = "transparent";
              }
            }}
          >
            <svg width="26" height="26" viewBox="0 0 48 48" aria-hidden="true" style={{ flex: "none" }}><path d={solution.mark} fill="currentColor" fillRule="evenodd" /></svg>
            <span style={{ display: "flex", flexDirection: "column", gap: "2px", textAlign: "left" }}>
              <span>{solution.name}</span>
              <span style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 500, fontSize: "12px", opacity: 0.8 }}>{solution.kind}</span>
            </span>
          </button>
        ))}
      </div>

      <div
        id="solution-panel"
        role="tabpanel"
        aria-labelledby={`solution-tab-${selectedSolution}`}
        data-glass=""
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 440px), 1fr))",
          borderRadius: "28px",
          overflow: "hidden",
          background: "linear-gradient(180deg, rgb(255 255 255 / 0.06), rgb(255 255 255 / 0.02))",
          backdropFilter: "blur(24px) saturate(140%)",
          border: "1px solid rgb(255 255 255 / 0.12)",
          boxShadow: "inset 0 1px 0 rgb(255 255 255 / 0.1), 0 40px 80px -40px rgb(0 0 0 / 0.8)"
        }}
      >
        <DisScene mode="solutions" selectedIndex={selectedSolution} />
        <div style={{ padding: "clamp(28px, 4vw, 48px)", display: "flex", flexDirection: "column", gap: "20px", justifyContent: "center" }}>
          <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: "13px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#42C9FF" }}>{solution.kind}</span>

          <h3 style={{ margin: 0, fontSize: "clamp(28px, 3vw, 38px)", fontWeight: 600, lineHeight: 1.1, letterSpacing: "-0.02em", fontFamily: "'Space Grotesk', sans-serif", color: "#fff" }}>{solution.name}</h3>
          <p style={{ margin: 0, fontFamily: "'Outfit', sans-serif", fontSize: "19px", lineHeight: 1.45, color: "#fff", fontWeight: 500 }}>{solution.tagline}</p>

          <p
            style={{
              margin: 0,
              fontSize: "16px",
              lineHeight: 1.65,
              color: "#B0C4D4",
              textWrap: "pretty"
            }}
          >
            {solution.desc}
          </p>

          <ul
            style={{
              margin: 0,
              padding: 0,
              listStyle: "none"
            }}
          >
            {solution.points.map((point) => (
              <li
                key={point}
                style={{
                  display: "flex",
                  gap: "12px",
                  alignItems: "flex-start",
                  fontSize: "15px",
                  color: "#fff"
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4FD8D8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none", marginTop: "2px" }}><path d="m20 6-11 11-5-5" /></svg>
                {point}
              </li>
            ))}
          </ul>

          <a
            href={SITE.links[solution.key as keyof typeof SITE.links]}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              alignSelf: "flex-start",
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              minHeight: "48px",
              padding: "0 20px",
              marginTop: "8px",
              borderRadius: "12px",
              background: "rgb(255 255 255 / 0.06)",
              border: "1px solid rgb(255 255 255 / 0.16)",
              color: "#fff",
              fontFamily: "'Outfit', sans-serif",
              fontSize: "15px",
              fontWeight: 600,
              textDecoration: "none",
              transition: "background 200ms"
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgb(2 178 178 / 0.12)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgb(255 255 255 / 0.06)";
            }}
          >
            Conocer más sobre {solution.name}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9" /></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
