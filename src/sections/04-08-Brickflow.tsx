import type { CSSProperties } from "react";
import { useId, useState } from "react";
import { DisHubSymbol, StageIcon } from "../components/landing/BrickflowArt";
import SectionHeading from "../components/landing/SectionHeading";
import { BF_CAPABILITIES, BF_COMPARE, BF_FRAMEWORKS, BF_PROFILES } from "../constants/content";
import { fitScale, useFitScale } from "../hooks/useFitScale";
import { handleTabKeys, pad } from "../lib/tabs";
import { cn } from "../lib/utils";

const FDE_PRINCIPLES = [
  "Desde principios fundamentales",
  "Junto al experto de dominio",
  "Velocidad e impacto temprano",
  "Sistemas duraderos a escala"
];

const FDE_STEPS = ["Problema Específico y Ambigüedad", "Impacto Validado en Producción", "Patrones que Escalan"];

// Read clockwise from the left node; the mobile legend uses the same order.
const FDT_NODES = [
  { tag: "", t: "Construir desde principios fundamentales" },
  { tag: "FDT + Comité", t: "Gobierno, Riesgo y Priorización" },
  { tag: "", t: "Co-diseño con expertos de dominio" },
  { tag: "FDE + TI", t: "Valor temprano e iteración a escala" }
];

const ROLE_COPY = {
  fde: {
    index: "04",
    eyebrow: "Ingeniería desplegada en campo (FDE)",
    title: "¿Qué es un FDE (Ingeniero Desplegado)?",
    body: "Es la forma en que llevamos la IA a producción en entornos reales de alta complejidad donde los enfoques de software tradicional fallan. En lugar de llegar con un producto genérico, nuestros ingenieros se integran en tu operación para resolver un problema específico desde principios fundamentales, validar su impacto en terreno e identificar patrones escalables."
  },
  fdt: {
    index: "05",
    eyebrow: "Transformación desplegada (FDT)",
    title: "El FDT: tu Director de Transformación IA Residente.",
    body: "Mientras el FDE construye en el terreno operativo, el FDT actúa como tu contraparte estratégica ante la presidencia y el comité directivo. Su objetivo es asegurar que la velocidad técnica se traduzca en retorno financiero, gobierno corporativo y adopción real en toda la organización."
  }
};

function PlusMinus({ open }: { open: boolean }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
      <circle cx="8" cy="8" r="7" />
      <path d="M5 8 H11" />
      <path d="M8 5 V11" opacity={open ? 0 : 1} />
    </svg>
  );
}

function FdeDiagram({ width }: { width: number }) {
  const arrowId = useId();
  const scale = fitScale(width, 512);

  if (scale < 0.8) {
    return (
      <div className="bf-fde-v">
        <div className="bf-fde-v__track">
          <span className="bf-fde-v__rail" aria-hidden="true" />
          <span className="bf-fde-v__packet" aria-hidden="true" />
          <ol>
            {FDE_STEPS.map((label, index) => (
              <li key={label} className={cn("bf-fde-v__step", index === 0 && "is-start")}>
                <span className="bf-fde-v__node" aria-hidden="true" />
                <span><span className="bf-tag">{pad(index + 1)}</span>{label}</span>
              </li>
            ))}
          </ol>
        </div>
        <svg className="bf-fde-v__fan" viewBox="0 0 282 60" aria-hidden="true">
          <path className="bf-flow" d="M20 4 L60 56" />
          <path className="bf-flow" d="M20 4 L141 56" />
          <path className="bf-flow" d="M20 4 L222 56" />
        </svg>
      </div>
    );
  }

  return (
    <div className="bf-canvas" style={{ height: 190 * scale }}>
      <div className="bf-canvas__inner bf-fde" style={{ width: 512, height: 190, "--s": scale } as CSSProperties} aria-hidden="true">
        <svg className="bf-fde__lines" viewBox="0 0 512 190">
          <defs>
            <marker id={arrowId} viewBox="0 0 4 4" refX="2" refY="2" markerWidth="5" markerHeight="5" orient="auto" overflow="visible">
              <path d="M0 0 L4 2 L0 4 Z" />
            </marker>
          </defs>
          <path className="bf-fde__solid" d="M56 60 H171" markerEnd={`url(#${arrowId})`} />
          <path className="bf-flow" d="M204 60 H352" />
          <path className="bf-flow" d="M352 60 L490 20" />
          <path className="bf-flow" d="M352 60 H490" />
          <path className="bf-flow" d="M352 60 L490 100" />
        </svg>
        {["M 28 60 L 352 60 L 496 20", "M 28 60 L 352 60 L 496 60", "M 28 60 L 352 60 L 496 100"].map((path) => (
          <span key={path} className="bf-packet bf-packet--small" style={{ offsetPath: `path('${path}')`, animationDuration: "4s" }} />
        ))}
        <span className="bf-fde__start bf-pulse">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.6" /><circle cx="11" cy="11" r="2.5" fill="currentColor" /></svg>
        </span>
        <span className="bf-fde__check">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 6.2 L5 8.5 L9.5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </span>
        {[[346, 54], [490, 14], [490, 54], [490, 94]].map(([left, top]) => <span key={`${left}-${top}`} className="bf-fde__node" style={{ left, top }} />)}
        {FDE_STEPS.map((label, index) => (
          <p key={label} className="bf-fde__label" style={{ left: index * 176 }}><span className="bf-tag">{pad(index + 1)}</span>{label}</p>
        ))}
      </div>
      <ol className="sr-only">
        {FDE_STEPS.map((label) => <li key={label}>{label}</li>)}
      </ol>
    </div>
  );
}

function FdtCycle({ numbered = false }: { numbered?: boolean }) {
  // Node centres on the 220 px ring: left, top, right, bottom (clockwise from the left).
  const nodes = [
    { left: -20, top: 90, size: 40, className: "bf-fdt__node--solid", delay: 7.5 },
    { left: 96, top: -14, size: 28, className: "", delay: 0 },
    { left: 192, top: 82, size: 56, className: "bf-fdt__node--deep", delay: 2.5 },
    { left: 96, top: 206, size: 28, className: "", delay: 5 }
  ];
  return (
    <div className="bf-fdt__ring-wrap">
      <span className="bf-fdt__dome" />
      <span className="bf-fdt__ring bf-spin" />
      <svg className="bf-fdt__axis" viewBox="0 0 220 8"><path d="M0 4 H220" /></svg>
      {[[183, 27, 45], [183, 183, 135], [27, 183, 225], [27, 27, 315]].map(([left, top, rotate]) => (
        <svg key={rotate} className="bf-fdt__chevron" viewBox="0 0 10 10" style={{ left, top, transform: `rotate(${rotate}deg)` }}><path d="M2 1 L8 5 L2 9 Z" /></svg>
      ))}
      <span className="bf-fdt__lane">Dirección · FDT</span>
      <span className="bf-fdt__lane bf-fdt__lane--operation">Operación · FDE</span>
      <span className="bf-fdt__orbit bf-spin"><span /></span>
      {nodes.map((node, index) => (
        <span key={index} style={{ left: node.left, top: node.top, width: node.size, height: node.size }}>
          <span className="bf-fdt__ripple bf-ripple" style={{ animationDelay: `${node.delay}s` }} />
          <span className={cn("bf-fdt__node", node.className)}>{numbered ? index + 1 : null}</span>
        </span>
      ))}
    </div>
  );
}

function FdtDiagram({ width }: { width: number }) {
  const scale = fitScale(width, 512);

  if (scale < 0.8) {
    return (
      <div className="bf-fdt-v">
        <div className="bf-fdt-v__cycle" aria-hidden="true"><FdtCycle numbered /></div>
        <ol className="bf-fdt-v__legend">
          {FDT_NODES.map((node, index) => (
            <li key={node.t}>
              <span className="bf-fdt-v__num" aria-hidden="true">{index + 1}</span>
              <span>{node.tag && <span className="bf-tag">{node.tag}</span>}{node.t}</span>
            </li>
          ))}
        </ol>
      </div>
    );
  }

  return (
    <div className="bf-canvas" style={{ height: 384 * scale }}>
      <div className="bf-canvas__inner bf-fdt" style={{ width: 512, height: 384, "--s": scale } as CSSProperties}>
        <div className="bf-fdt__cycle" aria-hidden="true"><FdtCycle /></div>
        <p className="bf-fdt__label bf-fdt__label--top"><span className="bf-tag">{FDT_NODES[1].tag}</span>{FDT_NODES[1].t}</p>
        <p className="bf-fdt__label bf-fdt__label--left">{FDT_NODES[0].t}</p>
        <p className="bf-fdt__label bf-fdt__label--right">{FDT_NODES[2].t}</p>
        <p className="bf-fdt__label bf-fdt__label--bottom"><span className="bf-tag">{FDT_NODES[3].tag}</span>{FDT_NODES[3].t}</p>
      </div>
    </div>
  );
}

export function BrickflowRoles() {
  const [role, setRole] = useState<"fde" | "fdt">("fde");
  const [moreOpen, setMoreOpen] = useState(false);
  const { ref: diagramRef, width } = useFitScale<HTMLDivElement>();
  const copy = ROLE_COPY[role];

  const selectRole = (next: "fde" | "fdt") => {
    setRole(next);
    setMoreOpen(false);
  };

  return (
    <section id="roles" className="lp-section bf bf-continue bf-roles" data-screen-label={`${copy.index} ${copy.eyebrow}`} aria-label="Equipos FDE y FDT">
      <div className="lp-container">
        <div className="bf-segment" role="group" aria-label="Rol" data-reveal>
          <button type="button" aria-pressed={role === "fde"} onClick={() => selectRole("fde")}>FDE · Ingeniero Desplegado</button>
          <button type="button" aria-pressed={role === "fdt"} onClick={() => selectRole("fdt")}>FDT · Director de Transformación</button>
        </div>

        <article className="bf-role-card" data-reveal>
          <div key={role} className="bf-role-card__copy bf-in">
            <p className="lp-eyebrow">
              <span className="lp-eyebrow__index">{copy.index}</span>
              <span className="lp-eyebrow__rule" aria-hidden="true" />
              {copy.eyebrow}
            </p>
            <h2 className="bf-role-card__title">{copy.title}</h2>
            <button className="bf-more" type="button" aria-expanded={moreOpen} aria-controls="role-more" onClick={() => setMoreOpen((open) => !open)}>
              <PlusMinus open={moreOpen} />
              {moreOpen ? "Leer menos" : "Leer más"}
            </button>
            {moreOpen && <p id="role-more" className="bf-role-card__body bf-in">{copy.body}</p>}
          </div>
          <div ref={diagramRef} className="bf-role-card__diagram">
            <div key={role} className="bf-in">
              {role === "fde" ? <FdeDiagram width={width} /> : <FdtDiagram width={width} />}
            </div>
          </div>
        </article>

        <div className="bf-principles" data-reveal>
          <h3>Cómo trabaja</h3>
          <ul>
            {FDE_PRINCIPLES.map((principle, index) => (
              <li key={principle}><span>{pad(index + 1)}</span>{principle}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function BrickflowCapabilities() {
  const [active, setActive] = useState(0);

  return (
    <section id="capacidades" className="lp-section bf bf-continue bf-caps-section" data-screen-label="06 Capacidades" aria-labelledby="bf-cap-title">
      <div className="lp-container">
        <SectionHeading index="06" eyebrow="Capacidades integradas" titleId="bf-cap-title" title={["Tecnología al servicio", "de la operación."]} accent={[1]} />
        <div className="bf-caps" role="tablist" aria-label="Capacidades" onKeyDown={(event) => handleTabKeys(event, active, BF_CAPABILITIES.length, setActive, "cap-tab")}>
          {BF_CAPABILITIES.map((cap, index) => (
            <button
              key={cap.t}
              id={`cap-tab-${index}`}
              className="bf-cap"
              type="button"
              role="tab"
              aria-selected={active === index}
              aria-controls="cap-panel"
              tabIndex={active === index ? 0 : -1}
              onClick={() => setActive(index)}
              data-reveal
              style={{ "--d": index } as CSSProperties}
            >
              <StageIcon index={index} filled className="bf-cap__piece bf-bob" />
              <span className="bf-cap__shadow" aria-hidden="true" />
              <span className="bf-tag">CAP-{pad(index + 1)}</span>
              <strong>{cap.t}</strong>
            </button>
          ))}
        </div>
        <div id="cap-panel" className="bf-cap-panel" role="tabpanel" aria-labelledby={`cap-tab-${active}`}>
          <ul key={active} className="bf-in">
            {BF_CAPABILITIES[active].items.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}

function FrameworkDome({ active, onSelect, showPills }: { active: number; onSelect: (index: number) => void; showPills: boolean }) {
  // Rings from inner (0) to outer (3); pills sit on the crown of each ring.
  const rings = [
    { size: 180, duration: 40, reverse: true },
    { size: 300, duration: 55, reverse: false },
    { size: 420, duration: 70, reverse: true },
    { size: 540, duration: 90, reverse: false }
  ];
  const pillTops = [193, 133, 73, 13];
  return (
    <div className="bf-dome">
      <div className="bf-dome__sky" aria-hidden="true">
        {rings.map((ring, index) => (
          <span
            key={ring.size}
            className={cn("bf-dome__ring bf-spin", active === index && "is-active")}
            style={{ width: ring.size, height: ring.size, left: 300 - ring.size / 2, top: 300 - ring.size / 2, animationDuration: `${ring.duration}s`, animationDirection: ring.reverse ? "reverse" : "normal", "--fill": 0.06 - index * 0.008 } as CSSProperties}
          />
        ))}
        <span className="bf-dome__orbit bf-spin"><span /></span>
      </div>
      <span className="bf-dome__ground" aria-hidden="true" />
      <span className="bf-dome__entity"><DisHubSymbol />Tu entidad</span>
      {showPills && BF_FRAMEWORKS.map((framework, index) => (
        <button key={framework.t} className="bf-dome__pill" type="button" style={{ top: pillTops[index] }} aria-pressed={active === index} onClick={() => onSelect(index)}>
          {framework.short}
        </button>
      ))}
    </div>
  );
}

export function BrickflowDetails() {
  const [criterion, setCriterion] = useState(0);
  const [framework, setFramework] = useState(0);
  const { ref: domeRef, width } = useFitScale<HTMLDivElement>();
  const domeScale = fitScale(width, 600);
  const compactDome = domeScale < 0.8;
  const pair = BF_COMPARE[criterion];
  const selectedFramework = BF_FRAMEWORKS[framework];

  return (
    <>
      <section id="comparativo" className="lp-section lp-tone-ink bf bf-compare-section" data-screen-label="08 Comparativo" aria-labelledby="bf-compare-title">
        <div className="lp-container">
          <SectionHeading index="08" eyebrow="Comparativo" titleId="bf-compare-title" title={["La misma potencia de vanguardia.", "Bajo tus propias reglas de control."]} accent={[1]} />
          <div className="bf-compare" aria-label="Comparación de perímetros de datos" role="group" data-reveal>
            <div className="bf-compare__card">
              <h3>IA genérica, sin diseño</h3>
              <div className="bf-compare__row">
                <div className="bf-perimeter bf-perimeter--loose">
                  <span className="bf-tag">Tu perímetro</span>
                  <strong className="bf-token">Dato</strong>
                </div>
                <svg className="bf-compare__arrow" width="64" height="12" viewBox="0 0 64 12" fill="none" aria-hidden="true"><path className="bf-flow" d="M0 6 H56" /><path d="M55 1.5 L63 6 L55 10.5 Z" /></svg>
                <span className="bf-compare__external">Servidores de terceros</span>
              </div>
            </div>
            <div className="bf-compare__card bf-compare__card--brickflow">
              <h3>BrickFlow: arquitectura a la medida</h3>
              <div className="bf-perimeter">
                <span className="bf-tag">Tu perímetro</span>
                <strong className="bf-token">Dato</strong>
                <svg className="bf-compare__arrow" width="40" height="12" viewBox="0 0 40 12" fill="none" aria-hidden="true"><path className="bf-flow" d="M0 6 H32" /><path d="M31 1.5 L39 6 L31 10.5 Z" /></svg>
                <strong className="bf-token">Modelo</strong>
                <svg className="bf-compare__arrow" width="40" height="12" viewBox="0 0 40 12" fill="none" aria-hidden="true"><path className="bf-flow" d="M0 6 H32" /><path d="M31 1.5 L39 6 L31 10.5 Z" /></svg>
                <strong className="bf-token bf-token--log bf-pulse">Bitácora</strong>
              </div>
            </div>
          </div>
          <div className="bf-chips" role="tablist" aria-label="Criterios" onKeyDown={(event) => handleTabKeys(event, criterion, BF_COMPARE.length, setCriterion, "crit-tab")} data-reveal>
            {BF_COMPARE.map((row, index) => (
              <button key={row.k} id={`crit-tab-${index}`} type="button" role="tab" aria-selected={criterion === index} aria-controls="crit-panel" tabIndex={criterion === index ? 0 : -1} onClick={() => setCriterion(index)}>
                {row.k}
              </button>
            ))}
          </div>
          <div id="crit-panel" key={criterion} className="bf-pair bf-in" role="tabpanel" aria-labelledby={`crit-tab-${criterion}`}>
            <p className="bf-pair__generic">
              <svg width="20" height="20" viewBox="0 0 18 18" fill="none" aria-hidden="true"><circle cx="9" cy="9" r="8" stroke="currentColor" strokeWidth="1.4" /><path d="M6 9 H12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
              <span><span className="sr-only">IA genérica: </span>{pair.generic}</span>
            </p>
            <p className="bf-pair__brickflow">
              <svg width="20" height="20" viewBox="0 0 18 18" fill="none" aria-hidden="true"><circle cx="9" cy="9" r="8" stroke="currentColor" strokeWidth="1.4" /><path d="M5.5 9.2 L8 11.5 L12.5 6.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
              <span><span className="sr-only">BrickFlow: </span>{pair.us}</span>
            </p>
          </div>
        </div>
      </section>

      <section id="marcos" className="lp-section lp-tone-navy bf" data-screen-label="09 Contexto regulatorio" aria-labelledby="bf-context-title">
        <div className="lp-container">
          <SectionHeading
            index="09"
            eyebrow="Contexto regulatorio"
            titleId="bf-context-title"
            title={["Pensado para los marcos", "que tu comité revisa."]}
            accent={[1]}
            lead="Los acuerdos de confidencialidad nos impiden mostrar logos de clientes. Mostramos lo que sí podemos: el rigor regulatorio, técnico y de auditoría bajo el cual diseñamos para industrias que no pueden permitirse fallar."
          />
          <div className="bf-frameworks" data-reveal>
            <div ref={domeRef} className="bf-frameworks__visual">
              <div className="bf-canvas" style={{ height: 340 * domeScale }}>
                <div className="bf-canvas__inner" style={{ width: 600, height: 340, "--s": domeScale } as CSSProperties}>
                  <FrameworkDome active={framework} onSelect={setFramework} showPills={!compactDome} />
                </div>
              </div>
            </div>
            {compactDome && (
              <div className="bf-frameworks__tabs" role="group" aria-label="Marcos regulatorios">
                {BF_FRAMEWORKS.map((item, index) => ({ item, index })).reverse().map(({ item, index }) => (
                  <button key={item.t} type="button" aria-pressed={framework === index} onClick={() => setFramework(index)}>
                    <span className="bf-tag">{item.tag}</span>{item.t}
                  </button>
                ))}
              </div>
            )}
            <div key={framework} className="bf-frameworks__detail bf-in" aria-live="polite">
              <span className="bf-tag">{selectedFramework.tag}</span>
              <h3>{selectedFramework.t}</h3>
              <p>{selectedFramework.d}</p>
            </div>
          </div>
          <div className="bf-marquee" data-reveal>
            <span className="bf-marquee__label">Para quién diseñamos</span>
            <div className="bf-marquee__viewport" aria-hidden="true">
              <div className="bf-marquee__track">
                {[...BF_PROFILES, ...BF_PROFILES].map((profile, index) => (
                  <span key={`${profile}-${index}`} className="bf-marquee__item">{profile}</span>
                ))}
              </div>
            </div>
            <ul className="sr-only" aria-label="Sectores para quienes diseñamos">
              {BF_PROFILES.map((profile) => <li key={profile}>{profile}</li>)}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
