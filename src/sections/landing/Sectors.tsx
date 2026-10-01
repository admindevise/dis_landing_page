import type { CSSProperties } from "react";
import SectionHeading from "../../components/landing/SectionHeading";
import { SECTORS } from "../../constants/content";
import { pad } from "../../lib/tabs";

export default function Sectors() {
  return (
    <section id="sectores" className="lp-section lp-panel lp-tone-paper lp-sectors" data-screen-label="09 Contextos" aria-labelledby="sectores-title">
      <div className="lp-container">
        <div className="lp-sectors__head">
          <SectionHeading index="09" eyebrow="Dónde tiene sentido" titleId="sectores-title" title={["Del sector financiero", "a cualquier operación compleja."]} />
          <p className="lp-lead" data-reveal>
            Nuestra experiencia nace en finanzas e inmuebles, pero el método viaja bien: allí donde hay regulación, múltiples actores, datos sensibles y una operación que necesita evolucionar.
          </p>
        </div>
        <ul className="lp-sectors__list">
          {SECTORS.map((sector, index) => (
            <li key={sector.t} className="lp-sector" data-reveal style={{ "--d": index } as CSSProperties}>
              <span className="lp-sector__num">{pad(index + 1)}</span>
              <h3 className="lp-sector__title">{sector.t}</h3>
              <p className="lp-sector__desc">{sector.d}</p>
              <span className="lp-sector__icon" aria-hidden="true">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d={sector.icon} /></svg>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
