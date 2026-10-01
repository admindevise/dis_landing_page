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
            label="Partículas de datos que atraviesan tres planos —negocio, producto e ingeniería— y pasan de un estado disperso a carriles ordenados."
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
            title={["Un equipo para", "pensar, diseñar", "y construir", "software."]}
            accent={[3]}
            lead="Un equipo que entra en problemas complejos con curiosidad de negocio y disciplina de ingeniería. No partimos de una tecnología: partimos de lo que necesita cambiar."
          />
          <div className="lp-about__body">
            <p data-reveal>
              disHub es el estudio de software de Digital Investment Systems S.A.S. Nacimos dentro de un negocio real y aprendimos que las mejores soluciones no se compran listas: se entienden, se diseñan y se construyen cerca de quienes las van a operar.
            </p>
            <p data-reveal style={{ "--d": 1 } as CSSProperties}>
              Hoy combinamos conocimiento de industrias reguladas con producto e ingeniería. Construimos plataformas propias, desarrollos a la medida y nuevas capacidades digitales con una misma exigencia: que la tecnología resuelva algo real y permanezca útil después del lanzamiento.
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
