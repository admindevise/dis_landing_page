import type { CSSProperties } from "react";
import ThreeStage from "../../components/landing/ThreeStage";
import SplitLines from "../../components/landing/SplitLines";
import { connectedAssets } from "../../three/objects/connectedAssets";
import { SITE } from "../../constants/content";

const AUDIENCE = ["Diagnóstico", "Diseño", "Validación", "Escalamiento"];
const HUD_ROWS = [
  ["Diagnóstico", "Completado"],
  ["Solución", "Validada"],
  ["Escalamiento", "En curso"]
];

export default function Hero() {
  return (
    <section id="inicio" className="lp-hero" data-screen-label="01 Hero" aria-labelledby="hero-title">
      <ThreeStage
        factory={connectedAssets}
        className="lp-hero__stage"
            label="Estructura por capas que conecta personas, datos y decisiones mediante flujos de información."
      />
      <div className="lp-hero__veil" aria-hidden="true" />

      <div className="lp-container lp-hero__content">
        <h1 id="hero-title" className="lp-hero__title" data-reveal="lines">
          <SplitLines lines={["Resolvemos", "retos operativos", "con metodología", "y tecnología."]} accent={[3]} />
        </h1>
        <p className="lp-hero__lead" data-reveal style={{ "--d": 4 } as CSSProperties}>
          disHub es el laboratorio de innovación de Digital Investment Systems S.A.S. Aplicamos una metodología propia para diagnosticar los retos operativos de cada organización y resolverlos con la herramienta pertinente: rediseño de procesos, datos, automatización, inteligencia artificial o plataformas especializadas.
        </p>
        <div className="lp-hero__actions" data-reveal style={{ "--d": 5 } as CSSProperties}>
          <a className="lp-btn lp-btn--primary" href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer">
            Agendar una reunión
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </a>
          <a className="lp-btn lp-btn--ghost" href="#enfoque">Conocer la metodología</a>
        </div>
      </div>

      <div className="lp-hero__hud" aria-hidden="true">
        <p className="lp-hero__hud-title">Metodología en curso <span>Vista ilustrativa</span></p>
        <dl>
          {HUD_ROWS.map(([label, value]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="lp-container lp-hero__footer">
        <ul className="lp-hero__audience" aria-label="Etapas de la metodología">
          {AUDIENCE.map((item) => <li key={item}>{item}</li>)}
        </ul>
        <a href="#nosotros" className="lp-hero__cue">
          Continuar
          <span aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
