import type { CSSProperties } from "react";
import SectionHeading from "../../components/landing/SectionHeading";
import { CAPABILITIES } from "../../constants/content";
import { pad } from "../../lib/tabs";

export default function Lab() {
  return (
    <section id="laboratorio" className="lp-section lp-tone-navy lp-lab" data-screen-label="06 Tecnología aplicada" aria-labelledby="laboratorio-title">
      <div className="lp-container">
        <SectionHeading
          index="06"
          eyebrow="Tecnología aplicada"
          titleId="laboratorio-title"
          align="center"
          title={["La herramienta se define", "después del diagnóstico."]}
          accent={[1]}
          lead="No ofrecemos desarrollo de software por encargo ni dependemos de una tecnología específica. Evaluamos cada caso y aplicamos la alternativa que mejor resuelve el problema, con criterios de costo, riesgo y facilidad de adopción."
        />
        <ul className="lp-lab__grid">
          {CAPABILITIES.map((capability, index) => (
            <li key={capability.t} className="lp-cap" data-reveal style={{ "--d": index } as CSSProperties}>
              <div className="lp-cap__meta">
                <span className="lp-cap__num">{pad(index + 1)}</span>
                <span className="lp-cap__icon" aria-hidden="true">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d={capability.icon} /></svg>
                </span>
              </div>
              <h3>{capability.t}</h3>
              <p>{capability.d}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
