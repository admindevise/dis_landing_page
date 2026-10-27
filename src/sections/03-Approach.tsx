import { Fragment, useEffect, useId, useState, type CSSProperties } from "react";
import { StageIcon, TowerLayer, TowerScaffold } from "../components/landing/BrickflowArt";
import SectionHeading from "../components/landing/SectionHeading";
import { STEPS } from "../constants/content";
import { fitScale, useFitScale } from "../hooks/useFitScale";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { pad } from "../lib/tabs";
import { cn } from "../lib/utils";

const STEP_MS = 3400;
const CANVAS_WIDTH = 1216;
const MOBILE_CANVAS_WIDTH = 358;
// Below this scale the side callouts drop under 12 px, so the mobile composition takes over.
const MIN_DESKTOP_SCALE = 0.75;

// Tower canvas (1216 × 450): top of each course and, per stage, where the callouts sit.
// m = side callouts (vertical centre), l = lead lines, d = lead dots, f = deliverable, fl = deliverable stem.
const LAYER_TOPS = [224, 188, 152, 116];
const CALLOUTS = [
  { m: 354, l: 353, d: 349, f: 124, fl: 202 },
  { m: 318, l: 317, d: 313, f: 88, fl: 166 },
  { m: 282, l: 281, d: 277, f: 52, fl: 130 },
  { m: 246, l: 245, d: 241, f: 16, fl: 94 }
];
const MOBILE_LAYER_TOPS = [150, 126, 102, 78];
const MOBILE_CALLOUTS = [
  { f: 74, fl: 138 },
  { f: 50, fl: 114 },
  { f: 26, fl: 90 },
  { f: 2, fl: 66 }
];

// Map canvas (1216 × 680): left edge of each stage column.
const MAP_COLUMNS = [186, 446, 706, 966];
const DIRECTION_LEADS = [true, false, false, true];
const DELIVERABLE_PULSES = [0.68, 2.74, 4.8, 6.86];
const OWNER = 3;

function PlusMinus({ open }: { open: boolean }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
      <circle cx="8" cy="8" r="7" />
      <path d="M5 8 H11" />
      <path d="M8 5 V11" opacity={open ? 0 : 1} />
    </svg>
  );
}

export default function Approach() {
  const prefersReducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const [stage, setStage] = useState(0);
  const [playChoice, setPlaying] = useState<boolean | null>(null);
  const [inView, setInView] = useState(false);
  const [introOpen, setIntroOpen] = useState(false);
  const [mapOpen, setMapOpen] = useState(false);
  const [announcement, setAnnouncement] = useState("");
  const { ref: towerRef, width } = useFitScale<HTMLDivElement>();
  const arrowId = useId();

  const step = STEPS[stage];
  const scale = fitScale(width, CANVAS_WIDTH);
  const compact = scale < MIN_DESKTOP_SCALE;
  const owned = stage === OWNER;
  const pos = CALLOUTS[stage];
  const stageLabel = `Capa ${pad(stage + 1)} / 04 · ${step.layer}`;
  // Until the visitor chooses, the tour plays unless reduced motion is requested.
  const playing = playChoice ?? !prefersReducedMotion;

  // The tour only runs while the tower is on screen.
  useEffect(() => {
    const element = towerRef.current;
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.3 });
    observer.observe(element);
    return () => observer.disconnect();
  }, [towerRef]);

  const running = playing && inView;

  useEffect(() => {
    if (!running) return;
    const timer = window.setTimeout(() => setStage((current) => (current + 1) % STEPS.length), STEP_MS);
    return () => window.clearTimeout(timer);
  }, [running, stage]);

  const pick = (index: number) => {
    setStage(index);
    setPlaying(false);
    setAnnouncement(`Capa ${pad(index + 1)} de 04 · ${STEPS[index].layer}`);
  };

  const toggleMap = () => {
    setMapOpen((open) => !open);
    setPlaying(false);
  };

  return (
    <section id="proceso" className="lp-section lp-tone-navy bf bf-method" data-screen-label="03 Metodología Brickflow" aria-labelledby="enfoque-title">
      <div className="lp-container">
        <div className="bf-method__head">
          <SectionHeading
            index="03"
            eyebrow="Metodología Brickflow"
            titleId="enfoque-title"
            title={["Del ladrillo al flujo financiero;", "del diagnóstico a la capacidad instalada."]}
            accent={[1]}
          />
          <button className="bf-pill" type="button" aria-expanded={introOpen} aria-controls="brickflow-intro" onClick={() => setIntroOpen((open) => !open)} data-reveal>
            <PlusMinus open={introOpen} />
            {introOpen ? "Ocultar" : "¿Por qué Brickflow?"}
          </button>
          {introOpen && (
            <p id="brickflow-intro" className="lp-lead bf-in">
              Nuestro nombre nace de nuestra propia historia: entendemos los negocios de punta a punta, desde la realidad física del ladrillo inmobiliario hasta la complejidad de los flujos financieros. Aplicamos esa misma disciplina constructiva a la inteligencia artificial: levantamos cada solución capa por capa, pasando de cimientos estratégicos sólidos a flujos operativos continuos gobernados por tu propio equipo.
            </p>
          )}
        </div>

        <div ref={towerRef} className="bf-tower" aria-label="La torre Brickflow, capa por capa" role="group" data-reveal>
          <p className="bf-tower__label">{stageLabel}</p>

          {compact ? (
            <>
              <div className="bf-canvas" style={{ height: 300 * fitScale(width, MOBILE_CANVAS_WIDTH) }}>
                <div className="bf-canvas__inner" style={{ width: MOBILE_CANVAS_WIDTH, height: 300, "--s": fitScale(width, MOBILE_CANVAS_WIDTH) } as CSSProperties}>
                  <span className="bf-tower__glow" style={{ left: 79, top: 252, width: 200, height: 46 }} aria-hidden="true" />
                  <div className="bf-abs" style={{ left: 79, top: 78, width: 200, height: 196 }}><TowerScaffold /></div>
                  {MOBILE_LAYER_TOPS.slice(0, stage + 1).map((top, index) => (
                    <div key={index} className="bf-course bf-drop bf-drop--short" style={{ left: 79, top, width: 200, height: 124 }}>
                      <TowerLayer active={index === stage} />
                    </div>
                  ))}
                  <span className="bf-tower__stem" style={{ left: 178, top: MOBILE_CALLOUTS[stage].fl, height: 12 }} aria-hidden="true" />
                  <div className="bf-deliverable bf-deliverable--compact" style={{ left: 29, top: MOBILE_CALLOUTS[stage].f }}>
                    <span className="bf-diamond" aria-hidden="true" />
                    <span><span className="bf-tag">Entregable</span>{step.out}</span>
                  </div>
                </div>
              </div>
              <div className="bf-partners" data-owned={owned || undefined}>
                <p className="bf-callout bf-callout--dis"><span className="bf-tag">Equipo DIS</span>{step.lead}</p>
                <svg className="bf-partners__swap" width="16" height="12" viewBox="0 0 16 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M1 3.5 H14 M11 1 L14 3.5 L11 6 M15 8.5 H2 M5 6 L2 8.5 L5 11" /></svg>
                <p className="bf-callout bf-callout--client"><span className="bf-tag">Contraparte cliente</span>{step.counterpart}</p>
              </div>
            </>
          ) : (
            <div className="bf-canvas" style={{ height: 450 * scale }}>
              <div className="bf-canvas__inner" style={{ width: CANVAS_WIDTH, height: 450, "--s": scale } as CSSProperties} data-owned={owned || undefined}>
                <span className="bf-tower__glow" style={{ left: 428, top: 372, width: 360, height: 80 }} aria-hidden="true" />
                <div className="bf-abs" style={{ left: 458, top: 116, width: 300, height: 294 }}><TowerScaffold /></div>
                {LAYER_TOPS.slice(0, stage + 1).map((top, index) => (
                  <div key={index} className="bf-course bf-drop" style={{ left: 458, top, width: 300, height: 186 }}>
                    <TowerLayer active={index === stage} />
                  </div>
                ))}
                <span className="bf-tower__stem" style={{ left: 607, top: pos.fl, height: 22 }} aria-hidden="true" />
                <div className="bf-deliverable" style={{ left: 438, top: pos.f }}>
                  <span className="bf-diamond" aria-hidden="true" />
                  <span><span className="bf-tag">Entregable</span>{step.out}</span>
                </div>
                <span className="bf-lead bf-lead--dis" style={{ left: 320, top: pos.l }} aria-hidden="true" />
                <span className="bf-lead bf-lead--client" style={{ left: 696, top: pos.l }} aria-hidden="true" />
                <span className="bf-lead-dot" style={{ left: 515, top: pos.d }} aria-hidden="true" />
                <span className="bf-lead-dot" style={{ left: 691, top: pos.d }} aria-hidden="true" />
                <p className="bf-callout bf-callout--dis bf-callout--side" style={{ left: 40, top: pos.m }}>
                  <span className="bf-tag">Equipo DIS</span>{step.lead}
                </p>
                <p className="bf-callout bf-callout--client bf-callout--side" style={{ left: 896, top: pos.m }}>
                  <span className="bf-tag">Contraparte cliente</span>{step.counterpart}
                </p>
              </div>
            </div>
          )}

          <div className={cn("bf-stepper", compact && "bf-stepper--compact")}>
            <ol className="bf-stepper__steps" aria-label="Etapas de Brickflow" style={{ "--progress": `${stage * 25}%` } as CSSProperties}>
              {STEPS.map((item, index) => (
                <li key={item.t} className={cn(index === stage && "is-current", index < stage && "is-done")}>
                  <button type="button" aria-current={index === stage ? "step" : undefined} aria-label={compact ? `Capa ${pad(index + 1)}, ${item.t}` : undefined} onClick={() => pick(index)}>
                    <span className="bf-stepper__dot">{compact ? pad(index + 1) : <StageIcon index={index} />}</span>
                    {!compact && <span className="bf-stepper__name"><span>{pad(index + 1)}</span>{item.t}</span>}
                  </button>
                </li>
              ))}
            </ol>
            <button className="bf-play" type="button" aria-label={playing ? "Pausar recorrido" : "Reproducir recorrido"} onClick={() => setPlaying(!playing)}>
              {running && (
                <svg key={stage} className="bf-play__ring" viewBox="0 0 48 48" aria-hidden="true">
                  <circle cx="24" cy="24" r="23" pathLength={1} />
                </svg>
              )}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                {playing ? <><rect x="3.5" y="2.5" width="3" height="11" rx="1" /><rect x="9.5" y="2.5" width="3" height="11" rx="1" /></> : <path d="M4.5 2.5 L13 8 L4.5 13.5 Z" />}
              </svg>
            </button>
          </div>
          {compact && <p className="bf-stepper__current">{step.t}</p>}
          <p className="sr-only" aria-live="polite">{announcement}</p>

          <button className="bf-map-toggle" type="button" aria-expanded={mapOpen} aria-controls="brickflow-map" onClick={toggleMap}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="2" y="3" width="16" height="4" rx="1" />
              <rect x="2" y="9" width="16" height="4" rx="1" />
              <path d="M2 16 H18" strokeDasharray="2 2.5" />
            </svg>
            {mapOpen ? "Ocultar el flujo completo" : "Ver el flujo completo"}
            <svg className="bf-map-toggle__chevron" width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 5 L7 9 L11 5" /></svg>
          </button>
        </div>

        {mapOpen && (
          <div id="brickflow-map" className="bf-map bf-in">
            {compact ? (
              <div className="bf-map-list">
                <span className="bf-map-list__rail" aria-hidden="true" />
                <span className="bf-map-list__packet" aria-hidden="true" />
                <ol aria-label="Flujo completo por etapa">
                {STEPS.map((item, index) => {
                  const current = index === stage;
                  return (
                    <li key={item.t} className={cn("bf-map-card", current && "is-current")}>
                      <span className="bf-diamond bf-map-card__node" aria-hidden="true" />
                      <button className="bf-map-card__head" type="button" aria-pressed={current} onClick={() => pick(index)}>
                        <StageIcon index={index} />
                        <span><span className="bf-tag">Capa {pad(index + 1)} / 04</span>{item.t}</span>
                      </button>
                      <p className={cn("bf-role", DIRECTION_LEADS[index] && "bf-role--direction")}>
                        <span className="bf-tag">{DIRECTION_LEADS[index] ? "Dirección · lidera" : "Operación · lidera"}</span>
                        {item.lead}
                      </p>
                      <p className="bf-map-card__deliverable"><span className="bf-diamond" aria-hidden="true" /><span><span className="bf-tag">Entregable</span>{item.out}</span></p>
                      <p className={cn("bf-map-card__counterpart", index === OWNER && owned && "is-owned")}><span className="bf-tag">Contraparte</span>{item.counterpart}</p>
                      {current && !playing && <p className="bf-map-card__text bf-in">{item.d}</p>}
                    </li>
                  );
                })}
                </ol>
              </div>
            ) : (
              <>
                <div className="bf-canvas" style={{ height: 680 * scale }}>
                  <div className="bf-canvas__inner bf-flowmap bf-reveal" style={{ width: CANVAS_WIDTH, height: 680, "--s": scale } as CSSProperties}>
                    <span className="bf-flowmap__band" style={{ top: 152, height: 104 }} aria-hidden="true" />
                    <span className="bf-flowmap__band" style={{ top: 264, height: 104 }} aria-hidden="true" />
                    <span className="bf-flowmap__band bf-flowmap__band--deliverables" style={{ top: 384, height: 132 }} aria-hidden="true" />
                    <span className="bf-flowmap__band bf-flowmap__band--client" style={{ top: 532, height: 140 }} aria-hidden="true" />
                    <span className="bf-flowmap__highlight" style={{ left: MAP_COLUMNS[stage] }} aria-hidden="true" />

                    <p className="bf-flowmap__row" style={{ top: 182 }}><span className="bf-tag">Equipo DIS</span>Dirección · FDT</p>
                    <p className="bf-flowmap__row" style={{ top: 294 }}><span className="bf-tag">Equipo DIS</span>Operación · FDE</p>
                    <p className="bf-flowmap__row" style={{ top: 428 }}><span className="bf-tag">Flujo</span>Entregables</p>
                    <p className="bf-flowmap__row bf-flowmap__row--client" style={{ top: 580 }}><span className="bf-tag">Cliente</span>Contraparte</p>

                    {STEPS.map((item, index) => (
                      <button key={item.t} className="bf-flowmap__column" type="button" style={{ left: MAP_COLUMNS[index] }} aria-pressed={index === stage} onClick={() => pick(index)}>
                        <StageIcon index={index} filled />
                        <span className="bf-tag">Capa {pad(index + 1)} / 04</span>
                        <strong>{item.t}</strong>
                      </button>
                    ))}

                    <svg className="bf-flowmap__arrows" viewBox="0 0 1216 680" aria-hidden="true">
                      <defs>
                        <marker id={arrowId} viewBox="0 0 4 4" refX="2" refY="2" markerWidth="5" markerHeight="5" orient="auto" overflow="visible">
                          <path d="M0 0 L4 2 L0 4 Z" />
                        </marker>
                      </defs>
                      <path className="bf-flowmap__relay" d="M406 204 H566 V273" markerEnd={`url(#${arrowId})`} />
                      <path className="bf-flowmap__relay" d="M666 316 H721" markerEnd={`url(#${arrowId})`} />
                      <path className="bf-flowmap__relay" d="M926 316 H1086 V245" markerEnd={`url(#${arrowId})`} />
                      <path className="bf-flow bf-flowmap__support" d="M306 240 V278" />
                      <path className="bf-flow bf-flowmap__spine" d="M190 450 H1200" />
                      {MAP_COLUMNS.map((x) => <path key={x} className="bf-flow bf-flowmap__drop" d={`M${x + 120} 500 V548`} />)}
                    </svg>
                    <span className="bf-packet" style={{ offsetPath: "path('M 406 204 L 566 204 L 566 316 L 926 316 L 1086 316 L 1086 240')", animationDuration: "6s" }} aria-hidden="true" />
                    <span className="bf-packet" style={{ offsetPath: "path('M 190 450 L 1200 450')", animationDuration: "8s" }} aria-hidden="true" />

                    {MAP_COLUMNS.map((x, index) => (
                      <Fragment key={x}>
                        {DIRECTION_LEADS[index] && (
                          <p className="bf-role bf-role--direction bf-flowmap__cell" style={{ left: x + 20, top: 168, height: 72 }}><span className="bf-tag">Lidera</span>Director de Transformación (FDT)</p>
                        )}
                        {index === 0 && (
                          <p className="bf-role bf-role--support bf-flowmap__cell" style={{ left: x + 20, top: 278, height: 76 }}><span className="bf-tag">Apoyo</span>FDE</p>
                        )}
                        {(index === 1 || index === 2) && (
                          <p className="bf-role bf-flowmap__cell" style={{ left: x + 20, top: 278, height: 76 }}><span className="bf-tag">Lidera</span>Ingeniero Desplegado en Campo (FDE)</p>
                        )}
                        <p className="bf-flowmap__deliverable" style={{ left: x + 20 }}>
                          <span className="bf-diamond bf-hit" style={{ animationDelay: `${DELIVERABLE_PULSES[index]}s` }} aria-hidden="true" />
                          <span><span className="bf-tag">Entregable</span>{STEPS[index].out}</span>
                        </p>
                        <p className={cn("bf-flowmap__counterpart", index === OWNER && owned && "is-owned")} style={{ left: x + 10 }}>
                          <span className="bf-tag">Contraparte</span>{STEPS[index].counterpart}
                        </p>
                      </Fragment>
                    ))}
                  </div>
                </div>
                <div className="bf-map__detail">
                  <span className="bf-tag">{stageLabel}</span>
                  <p>{step.d}</p>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
