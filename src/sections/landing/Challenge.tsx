import SectionHeading from "../../components/landing/SectionHeading";
import { PROBLEMS } from "../../constants/content";
import { useScrollSteps } from "../../hooks/useScrollSteps";
import { pad } from "../../lib/tabs";
import { cn } from "../../lib/utils";

export default function Challenge() {
  const { ref, active, progress } = useScrollSteps<HTMLOListElement>(PROBLEMS.length, "flow");

  return (
    <section id="desafio" className="lp-section lp-tone-ink lp-challenge" data-screen-label="04 Desafío" aria-labelledby="desafio-title">
      <div className="lp-container lp-challenge__grid">
        <div className="lp-challenge__aside">
          <div className="lp-challenge__sticky">
            <SectionHeading
              index="04"
              eyebrow="El punto de partida"
              titleId="desafio-title"
              title={["Los negocios", "complejos exigen", "tecnología que", "entienda el contexto."]}
              accent={[2]}
              lead="Cuando una operación crece, aparecen sistemas que no conversan, decisiones que dependen de personas clave y procesos que ya no escalan. Ahí empieza nuestro trabajo."
            />
            <div className="lp-challenge__counter" aria-hidden="true">
              <p className="lp-challenge__numbers">
                <span className="lp-challenge__current">{pad(active + 1)}</span>
                <span className="lp-challenge__total">/ {pad(PROBLEMS.length)}</span>
              </p>
              <span className="lp-challenge__track"><span style={{ transform: `scaleX(${progress})` }} /></span>
              <p className="lp-challenge__label">{PROBLEMS[active].t}</p>
            </div>
          </div>
        </div>

        <ol ref={ref} className="lp-challenge__list">
          {PROBLEMS.map((problem, index) => (
            <li
              key={problem.t}
              className={cn("lp-problem", index === active && "is-current", index < active && "is-past")}
              data-reveal
            >
              <div className="lp-problem__head">
                <span className="lp-problem__num">{pad(index + 1)}</span>
                <span className="lp-problem__icon" aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d={problem.icon} /></svg>
                </span>
              </div>
              <h3 className="lp-problem__title">{problem.t}</h3>
              <p className="lp-problem__desc">{problem.d}</p>
              <p className="lp-problem__effect"><span>Efecto</span>{problem.c}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
