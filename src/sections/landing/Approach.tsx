import { useMemo } from "react";
import SectionHeading from "../../components/landing/SectionHeading";
import ThreeStage from "../../components/landing/ThreeStage";
import { STEPS } from "../../constants/content";
import { useScrollSteps } from "../../hooks/useScrollSteps";
import { pad } from "../../lib/tabs";
import { cn } from "../../lib/utils";
import { traceabilityChain } from "../../three/objects/traceabilityChain";

export default function Approach() {
  const { ref, active, progress } = useScrollSteps<HTMLElement>(STEPS.length, "pinned");
  const stageState = useMemo(() => ({ active, progress }), [active, progress]);

  return (
    <section ref={ref} id="enfoque" className="lp-section lp-tone-navy lp-approach" data-screen-label="05 Metodología" aria-labelledby="enfoque-title">
      <div className="lp-approach__pin">
        <div className="lp-container lp-approach__inner">
          <div className="lp-approach__head">
            <SectionHeading index="05" eyebrow="Nuestra metodología" titleId="enfoque-title" title={["Del diagnóstico", "a resultados", "sostenibles."]} accent={[2]} />
            <p className="lp-lead" data-reveal>
              Cada caso se desarrolla en cuatro etapas con entregables verificables. La tecnología se define una vez el problema ha sido medido, nunca antes.
            </p>
          </div>

          <ThreeStage
            factory={traceabilityChain}
            state={stageState}
            className="lp-approach__stage"
            label={`Cadena de cuatro bloques enlazados que se iluminan a medida que avanza el proyecto. Etapa actual: ${STEPS[active].t}.`}
          />

          <div className="lp-approach__rail" aria-hidden="true"><span style={{ transform: `scaleX(${progress})` }} /></div>

          <ol className="lp-approach__steps">
            {STEPS.map((step, index) => (
              <li
                key={step.t}
                className={cn("lp-step", index === active && "is-current", index < active && "is-done")}
                aria-current={index === active ? "step" : undefined}
              >
                <span className="lp-step__num">{pad(index + 1)}</span>
                <h3 className="lp-step__title">{step.t}</h3>
                <p className="lp-step__desc">{step.d}</p>
                <p className="lp-step__out"><span>Entregable</span>{step.out}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
