import type { CSSProperties } from "react";
import ThreeStage from "../../components/landing/ThreeStage";
import SplitLines from "../../components/landing/SplitLines";
import { connectedAssets } from "../../three/objects/connectedAssets";
import { SITE } from "../../constants/content";

const PILLARS = [
  {
    title: "Cumplimiento",
    description: "Arquitectura diseñada sobre sus políticas de seguridad y datos personales."
  },
  {
    title: "Trazabilidad auditable",
    description: "Cada decisión registra fuente, regla aplicada y responsable."
  },
  {
    title: "Carga operativa liberada",
    description: "Agentes que concilian, revisan y reportan con aprobación humana."
  }
];

export default function Hero() {
  return (
    <section id="inicio" className="lp-hero" data-screen-label="Portada" aria-labelledby="hero-title">
      <ThreeStage
        factory={connectedAssets}
        className="lp-hero__stage"
            label="Estructura por capas que conecta personas, datos y decisiones mediante flujos de información."
      />
      <div className="lp-hero__veil" aria-hidden="true" />

      <div className="lp-container lp-hero__content">
        <h1 id="hero-title" className="lp-hero__title" data-reveal="lines">
          <SplitLines lines={["Su socio para llevar la", "IA a producción."]} accent={[1]} />
        </h1>
        <p className="lp-hero__lead" data-reveal style={{ "--d": 4 } as CSSProperties}>
          Menos carga operativa, cada decisión auditable y el dato donde su política lo exige.
        </p>
        <p className="lp-hero__brand" data-reveal style={{ "--d": 5 } as CSSProperties}>
          disHub, de Digital Investment Systems, con la metodología Brickflow.
        </p>
        <div className="lp-hero__actions" data-reveal style={{ "--d": 6 } as CSSProperties}>
          <a className="lp-btn lp-btn--primary" href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer">
            Agendar una reunión
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </a>
          <a className="lp-btn lp-btn--ghost" href="/metodologia">Conocer Brickflow</a>
        </div>
      </div>

      <div className="lp-container lp-hero__footer">
        <ul className="lp-hero__pillars" aria-label="Pilares de Brickflow">
          {PILLARS.map((pillar, index) => (
            <li key={pillar.title} data-reveal style={{ "--d": index } as CSSProperties}>
              <strong>{pillar.title}</strong>
              <span>{pillar.description}</span>
            </li>
          ))}
        </ul>
        <div className="lp-hero__caio" data-reveal style={{ "--d": 3 } as CSSProperties}>
          <p>En la dirección, su <strong>Chief AI Transformation Officer</strong> fraccional. En la operación, ingenieros desplegados con su equipo.</p>
          <a href="/metodologia#fdt">Así funciona Brickflow <span aria-hidden="true">→</span></a>
        </div>
      </div>
    </section>
  );
}
