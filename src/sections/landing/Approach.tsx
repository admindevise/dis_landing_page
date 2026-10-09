import { BrickLayers } from "../../components/landing/BrickflowArt";
import SectionHeading from "../../components/landing/SectionHeading";
import { STEPS } from "../../constants/content";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { useScrollSteps } from "../../hooks/useScrollSteps";
import { pad } from "../../lib/tabs";
import { cn } from "../../lib/utils";

export default function Approach() {
  const { ref, active, progress } = useScrollSteps<HTMLElement>(STEPS.length, "pinned");
  const showLayerVisual = useMediaQuery("(min-width: 1100px)");

  return (
    <section ref={ref} id="proceso" className="lp-section lp-tone-navy lp-approach" data-screen-label="05 Metodología" aria-labelledby="enfoque-title">
      <div className="lp-approach__pin">
        <div className="lp-container lp-approach__inner">
          <div className="lp-approach__head">
            <div className="lp-approach__copy">
            <SectionHeading index="05" eyebrow="Metodología disHub" titleId="enfoque-title" title={["Del diagnóstico", "a la capacidad instalada."]} accent={[1]} />
            <p className="lp-lead" data-reveal>
              Integrar inteligencia artificial exige entender primero la operación. Avanzamos por cuatro etapas para pasar del diagnóstico a una solución controlada, adoptada y operada por su equipo.
            </p>
            </div>
            {showLayerVisual && (
              <div className="lp-approach__stage lp-bf-stage">
                <p className="lp-bf-stage__label">Capa {pad(active + 1)} / {pad(STEPS.length)} <span>{STEPS[active].layer}</span></p>
                <BrickLayers active={active} />
              </div>
            )}
          </div>

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
