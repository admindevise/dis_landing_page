import type { CSSProperties } from "react";
import SectionHeading from "../../components/landing/SectionHeading";
import ThreeStage from "../../components/landing/ThreeStage";
import { PILLARS } from "../../constants/content";
import { pad } from "../../lib/tabs";
import { dataFlow } from "../../three/objects/dataFlow";

export default function About() {
  return (
    <section id="nosotros" className="lp-section lp-tone-navy lp-about" data-screen-label="02 Quiénes somos" aria-labelledby="nosotros-title">
      <div className="lp-container lp-about__grid">
        <div className="lp-about__visual" data-reveal="scale">
          <ThreeStage
            factory={dataFlow}
            className="lp-about__stage"
            label="Partículas de datos que atraviesan tres planos —negocio, metodología y tecnología— y pasan de un estado disperso a un flujo ordenado."
          />
          <ol className="lp-about__legend" aria-hidden="true">
            {PILLARS.map((pillar, index) => (
              <li key={pillar.t}><span>{pad(index + 1)}</span>{pillar.t}</li>
            ))}
          </ol>
        </div>

        <div className="lp-about__copy">
          <SectionHeading
            index="02"
            eyebrow="Quiénes somos"
            titleId="nosotros-title"
            title={["Un equipo para", "comprender, diseñar", "y resolver", "retos operativos."]}
            accent={[3]}
            lead="Partimos de la necesidad, no de la tecnología. Conocemos el negocio y lo resolvemos con método."
          />
          <div className="lp-about__body">
            <p data-reveal>
              Nacimos dentro de una operación real y diseñamos junto a quienes usan cada solución.
            </p>
            <p data-reveal style={{ "--d": 1 } as CSSProperties}>
              Cuatro etapas —diagnóstico, arquitectura, agentes y adopción— llevan la IA de la idea a producción en industrias reguladas, con trazabilidad y en manos de su equipo.
            </p>
          </div>
          <ol className="lp-about__pillars">
            {PILLARS.map((pillar, index) => (
              <li key={pillar.t} data-reveal style={{ "--d": index } as CSSProperties}>
                <span className="lp-about__pillar-num">{pad(index + 1)}</span>
                <h3>{pillar.t}</h3>
                <p>{pillar.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
