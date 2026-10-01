import type { CSSProperties } from "react";
import ThreeStage from "../../components/landing/ThreeStage";
import SplitLines from "../../components/landing/SplitLines";
import { connectedAssets } from "../../three/objects/connectedAssets";
import { SITE } from "../../constants/content";

const AUDIENCE = ["Estrategia", "Producto", "Ingeniería", "Operación"];
const HUD_ROWS = [
  ["Contexto", "Entendido"],
  ["Hipótesis", "Validada"],
  ["Siguiente paso", "En marcha"]
];

export default function Hero() {
  return (
    <section id="inicio" className="lp-hero" data-screen-label="01 Hero" aria-labelledby="hero-title">
      <ThreeStage
        factory={connectedAssets}
        className="lp-hero__stage"
            label="Sistema digital construido por capas, conectado a personas, datos y decisiones que intercambian pulsos de información."
      />
      <div className="lp-hero__veil" aria-hidden="true" />

      <div className="lp-container lp-hero__content">
        <p className="lp-hero__badge" data-reveal>
          <span className="lp-hero__dot" aria-hidden="true" />
          Estudio de software · Bogotá
        </p>
        <h1 id="hero-title" className="lp-hero__title" data-reveal="lines">
          <SplitLines lines={["Construimos", "tecnología para", "negocios que", "mueven el mundo."]} accent={[3]} />
        </h1>
        <p className="lp-hero__lead" data-reveal style={{ "--d": 4 } as CSSProperties}>
          disHub es un estudio de software. Unimos entendimiento de negocio, diseño de producto e ingeniería para convertir operaciones complejas en tecnología útil, segura y lista para crecer.
        </p>
        <div className="lp-hero__actions" data-reveal style={{ "--d": 5 } as CSSProperties}>
          <a className="lp-btn lp-btn--primary" href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer">
            Agendar una reunión
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </a>
          <a className="lp-btn lp-btn--ghost" href="#nosotros">Conocer disHub</a>
        </div>
      </div>

      <div className="lp-hero__hud" aria-hidden="true">
        <p className="lp-hero__hud-title">Sistema en construcción <span>Vista ilustrativa</span></p>
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
        <ul className="lp-hero__audience" aria-label="Cómo construimos">
          {AUDIENCE.map((item) => <li key={item}>{item}</li>)}
        </ul>
        <a href="#nosotros" className="lp-hero__cue">
          Desplazar
          <span aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
