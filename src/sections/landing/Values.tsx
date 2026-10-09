import type { CSSProperties } from "react";
import SectionHeading from "../../components/landing/SectionHeading";
import ThreeStage from "../../components/landing/ThreeStage";
import { ERAS, SECTORS, SOLUTIONS, STEPS, VALUES } from "../../constants/content";
import { investmentNetwork } from "../../three/objects/investmentNetwork";

const FACTS = [
  { value: String(SOLUTIONS.length), label: "soluciones integradas en un mismo ecosistema" },
  { value: String(SECTORS.length), label: "perfiles de organización que atendemos" },
  { value: String(STEPS.length), label: "etapas de la metodología, con entregables verificables" },
  { value: ERAS[0].year.slice(0, 4), label: "año de inicio de la exploración del problema" }
];

export default function Values() {
  return (
    <section id="valores" className="lp-section lp-tone-deep lp-values" data-screen-label="14 Valores" aria-labelledby="valores-title">
      <div className="lp-container lp-values__grid">
        <div className="lp-values__copy">
          <SectionHeading
            index="14"
            eyebrow="Valores y cultura"
            titleId="valores-title"
            title={["Los principios", "que orientan", "nuestro trabajo."]}
            accent={[2]}
            lead="Nuestro equipo se distingue por la manera en que escucha, simplifica, cuida lo que implementa y continúa aprendiendo después de cada entrega."
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
        <p className="lp-values__source">Cifras correspondientes al ecosistema disHub descrito en esta página.</p>
      </div>
    </section>
  );
}
