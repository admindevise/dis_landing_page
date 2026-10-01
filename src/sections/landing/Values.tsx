import type { CSSProperties } from "react";
import SectionHeading from "../../components/landing/SectionHeading";
import ThreeStage from "../../components/landing/ThreeStage";
import { ERAS, SECTORS, SOLUTIONS, STEPS, VALUES } from "../../constants/content";
import { investmentNetwork } from "../../three/objects/investmentNetwork";

const FACTS = [
  { value: String(SOLUTIONS.length), label: "soluciones conectadas en un mismo ecosistema" },
  { value: String(SECTORS.length), label: "perfiles de organización a los que servimos" },
  { value: String(STEPS.length), label: "etapas con entregables verificables por proyecto" },
  { value: ERAS[0].year.slice(0, 4), label: "año en que empezamos a explorar el problema" }
];

export default function Values() {
  return (
    <section id="valores" className="lp-section lp-tone-deep lp-values" data-screen-label="12 Valores" aria-labelledby="valores-title">
      <div className="lp-container lp-values__grid">
        <div className="lp-values__copy">
          <SectionHeading
            index="12"
            eyebrow="Valores y cultura"
            titleId="valores-title"
            title={["La forma en que", "hacemos que las", "cosas funcionen."]}
            accent={[2]}
            lead="Un equipo de software se reconoce por sus decisiones: cómo escucha, cómo simplifica, cómo cuida lo que construye y cómo sigue aprendiendo después de lanzar."
          />
          <ol className="lp-values__list">
            {VALUES.map((value, index) => (
              <li key={value.n} data-reveal style={{ "--d": index } as CSSProperties}>
                <span className="lp-values__num">{value.n}</span>
                <div>
                  <h3>{value.t}</h3>
                  <p>{value.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <ThreeStage
          factory={investmentNetwork}
          className="lp-values__stage"
          label="Red de inversionistas conectada a tres centros de activos, con pulsos de capital que circulan entre ellos."
        />
      </div>

      <div className="lp-container">
        <dl className="lp-values__facts">
          {FACTS.map((fact, index) => (
            <div key={fact.label} data-reveal="scale" style={{ "--d": index } as CSSProperties}>
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
        <p className="lp-values__source">Cifras del propio ecosistema disHub descrito en esta página.</p>
      </div>
    </section>
  );
}
