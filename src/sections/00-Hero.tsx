import type { CSSProperties } from "react";
import ThreeStage from "../components/landing/ThreeStage";
import SplitLines from "../components/landing/SplitLines";
import { connectedAssets } from "../three/objects/connectedAssets";
import { SITE } from "../constants/content";

const PILLARS = [
  {
    label: "Estrategia ejecutiva",
    title: "Chief AI Transformation Officer Residente",
    description: "Nos integramos con tu directiva para diagnosticar dónde la IA mueve indicadores reales —no dónde luce en una demo— y trazar una ruta ejecutable."
  },
  {
    label: "Misión crítica",
    title: "IA para industrias sin margen de error",
    description: "Desplegamos arquitecturas a la medida (on-premise o nube privada) con reglas explícitas, datos protegidos y trazabilidad total para auditorías desde el primer día."
  },
  {
    label: "Ejecución en campo",
    title: "Metodología BrickFlow e Ingeniería Desplegada",
    description: "Nuestros equipos se integran en tu operación para conectar datos, arquitecturas y agentes sobre tus sistemas centrales, garantizando adopción y gobierno de IA."
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
          <SplitLines lines={["El socio para llevar la IA", "a la práctica."]} accent={[1]} />
        </h1>
        <h2 className="lp-hero__subtitle" data-reveal style={{ "--d": 2 } as CSSProperties}>
          Transformamos tecnología de frontera en resultados reales de negocio.
        </h2>
        <p className="lp-hero__lead" data-reveal style={{ "--d": 4 } as CSSProperties}>
          Integramos IA y tecnologías disruptivas desde la raíz de tu operación para resolver problemas complejos y dejar sistemas reales funcionando en producción.
        </p>
        <div className="lp-hero__actions" data-reveal style={{ "--d": 6 } as CSSProperties}>
          <a className="lp-btn lp-btn--primary" href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer">
            INICIAR TRANSFORMACIÓN
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </a>
        </div>
      </div>

      <div className="lp-container lp-hero__footer">
        <ul className="lp-hero__pillars" aria-label="Pilares de Brickflow">
          {PILLARS.map((pillar, index) => (
            <li key={pillar.title} data-reveal style={{ "--d": index } as CSSProperties}>
              <small>{pillar.label}</small>
              <strong>{pillar.title}</strong>
              <span>{pillar.description}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
