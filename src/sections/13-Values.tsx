import type { CSSProperties } from "react";
import SectionHeading from "../components/landing/SectionHeading";
import ThreeStage from "../components/landing/ThreeStage";
import { VALUES } from "../constants/content";
import { investmentNetwork } from "../three/objects/investmentNetwork";

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
            lead="Construimos la forma en que las empresas crean valor con IA, y la probamos primero en nuestra propia operación."
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
    </section>
  );
}
