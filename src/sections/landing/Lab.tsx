import type { CSSProperties } from "react";
import SectionHeading from "../../components/landing/SectionHeading";
import { CAPABILITIES } from "../../constants/content";
import { pad } from "../../lib/tabs";

export default function Lab() {
  return (
    <section id="laboratorio" className="lp-section lp-tone-navy lp-lab" data-screen-label="06 Capacidades" aria-labelledby="laboratorio-title">
      <div className="lp-container">
        <SectionHeading
                index="06"
                eyebrow="Capacidades"
          titleId="laboratorio-title"
          align="center"
          title={["Negocio, producto", "e ingeniería en la misma mesa."]}
          accent={[1]}
          lead="No somos una fábrica de código. Reunimos estrategia, diseño, datos, arquitectura e ingeniería para tomar mejores decisiones y llevarlas a producción."
        />
        <ul className="lp-lab__grid">
          {CAPABILITIES.map((capability, index) => (
            <li key={capability.t} className="lp-cap" data-reveal style={{ "--d": index } as CSSProperties}>
              <span className="lp-cap__num">{pad(index + 1)}</span>
              <span className="lp-cap__icon" aria-hidden="true">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d={capability.icon} /></svg>
              </span>
              <h3>{capability.t}</h3>
              <p>{capability.d}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
