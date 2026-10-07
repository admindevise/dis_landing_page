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
            lead="Abordamos los problemas complejos con conocimiento del negocio y rigor metodológico. Nuestro punto de partida no es una tecnología, sino la necesidad que debe atenderse."
          />
          <div className="lp-about__body">
            <p data-reveal>
              disHub es el laboratorio de innovación de Digital Investment Systems S.A.S. Surgimos en el seno de una operación real y comprobamos que las soluciones más efectivas no se adquieren listas: se comprenden, se diseñan y se validan junto a quienes las operan.
            </p>
            <p data-reveal style={{ "--d": 1 } as CSSProperties}>
              Hoy integramos el conocimiento de industrias reguladas con una metodología propia de diagnóstico, diseño, validación y escalamiento. La respuesta puede consistir en el rediseño de un proceso, un modelo de datos, una automatización, inteligencia artificial o una plataforma especializada. En todos los casos aplicamos el mismo criterio: que la solución atienda una necesidad concreta y mantenga su vigencia después de implementada.
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
