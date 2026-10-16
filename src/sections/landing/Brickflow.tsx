import { useEffect, useRef, useState, type CSSProperties } from "react";
import { BrickIcon, BrickWall } from "../../components/landing/BrickflowArt";
import SectionHeading from "../../components/landing/SectionHeading";
import SplitLines from "../../components/landing/SplitLines";
import { BF_CAPABILITIES, BF_COMPARE, BF_FRAMEWORKS, BF_PIPELINE, BF_PROFILES, SITE } from "../../constants/content";
import { pad } from "../../lib/tabs";
import { cn } from "../../lib/utils";

const FDE_TASKS = [
  "Mapea procesos, sistemas y datos con quienes usan cada solución.",
  "Elige dónde corre cada caso: on-premise, nube privada o proveedor.",
  "Integra agentes con sus sistemas core, con reglas explícitas y auditables.",
  "Documenta cada decisión para revisoría fiscal y auditoría."
];

const FDT_TASKS = [
  "Diagnostica con negocio, riesgo y TI, y prioriza los casos por valor, factibilidad y exposición regulatoria.",
  "Instala el gobierno de IA: comité, políticas y responsables.",
  "Diseña la adopción: formación por rol y métricas de uso que la dirección puede seguir.",
  "Sigue con usted después del primer proyecto: revisa resultados con la dirección y abre los siguientes casos."
];

const FDE_DELIVERABLES = [
  "Plataforma operando en su infraestructura",
  "Casos de uso en producción",
  "Bitácora de decisiones exportable"
];

const FDT_DELIVERABLES = [
  "Mapa de oportunidades priorizado",
  "Hoja de ruta con responsables",
  "Comité y políticas de IA",
  "Medición de adopción"
];

const FDE_PRINCIPLES = [
  { t: "Producción, no pruebas de concepto", d: "Un caso termina cuando su equipo lo usa a diario." },
  { t: "Al lado del experto del negocio", d: "Diseñamos con quien opera, no para quien opera." },
  { t: "Valor temprano, luego escala", d: "Un primer caso en producción antes de ampliar el alcance." },
  { t: "Lo que se repite se vuelve producto", d: "Cada caso resuelto fortalece la metodología." }
];

export function BrickflowIntro() {
  return (
    <section id="enfoque" className="lp-section lp-tone-ink lp-bf-intro" data-screen-label="05 Brickflow" aria-labelledby="bf-intro-title">
      <BrickWall />
      <div className="lp-container lp-bf-intro__body">
        <p className="lp-eyebrow" data-reveal>
          <span className="lp-eyebrow__index">05</span>
          <span className="lp-eyebrow__rule" aria-hidden="true" />
          Metodología Brickflow
        </p>
        <h2 id="bf-intro-title" className="lp-title lp-bf-intro__title" data-reveal="lines">
          <SplitLines lines={["La IA en producción,", "dentro de su operación."]} accent={[0]} />
        </h2>
        <p className="lp-lead" data-reveal style={{ "--d": 2 } as CSSProperties}>
          Brickflow es nuestra metodología para llevar la IA del diagnóstico a la operación diaria. No entregamos informes ni pruebas de concepto: desplegamos ingenieros y líderes de transformación dentro de su organización, que trabajan con quienes operan, con riesgo y con TI hasta que la solución funciona y su equipo la opera.
        </p>
        <p className="lp-bf-intro__statement" data-reveal style={{ "--d": 3 } as CSSProperties}>
          Sistemas que funcionan en la operación, no solo en la demo.
        </p>
        <div className="lp-bf-intro__actions" data-reveal style={{ "--d": 3 } as CSSProperties}>
          <a className="lp-btn lp-btn--primary" href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer">Agendar un diagnóstico</a>
          <a className="lp-btn lp-btn--ghost" href="#proceso">Ver cómo trabajamos</a>
        </div>
      </div>
    </section>
  );
}

export function BrickflowRoles() {
  return (
    <section className="lp-section lp-tone-navy lp-bf-roles" aria-label="Roles de Brickflow">
      <div className="lp-container">
        <div className="lp-bf-roles__grid">
          <article id="fde" className="lp-bf-role" data-screen-label="04 FDE" aria-labelledby="fde-title">
            <p className="lp-eyebrow" data-reveal>
              <span className="lp-eyebrow__index">04</span>
              <span className="lp-eyebrow__rule" aria-hidden="true" />
              Forward Deployed Engineer
            </p>
            <h2 id="fde-title" className="lp-title lp-bf-role__title" data-reveal>¿Qué es un FDE?</h2>
            <p className="lp-lead lp-bf-role__lead" data-reveal>
              Un <em>Forward Deployed Engineer</em> es un ingeniero de Brickflow que trabaja dentro de su operación, no desde afuera. Se sienta con quienes concilian, revisan y reportan, integra agentes con sus sistemas core y deja cada caso en producción junto a su equipo de TI.
            </p>
            <div className="lp-bf-role__detail" data-reveal>
              <div>
                <h3>Qué hace</h3>
                <ol>{FDE_TASKS.map((task) => <li key={task}>{task}</li>)}</ol>
              </div>
              <div>
                <h3>Qué entrega</h3>
                <ul className="lp-bf-role__deliverables">
                  {FDE_DELIVERABLES.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            </div>
          </article>

          <article id="fdt" className="lp-bf-role" data-screen-label="05 FDT" aria-labelledby="fdt-title">
            <p className="lp-eyebrow" data-reveal>
              <span className="lp-eyebrow__index">05</span>
              <span className="lp-eyebrow__rule" aria-hidden="true" />
              Forward Deployed Transformation
            </p>
            <h2 id="fdt-title" className="lp-title lp-bf-role__title" data-reveal>El FDT: su Chief AI Transformation Officer fraccional.</h2>
            <p className="lp-lead lp-bf-role__lead" data-reveal>
              Un <em>Forward Deployed Transformation lead</em> es la contraparte de Brickflow ante la presidencia y el comité directivo. Actúa como su Chief AI Transformation Officer, de forma fraccional: identifica dónde la IA mueve un indicador del negocio, define la hoja de ruta y se asegura de que la organización la adopte.
            </p>
            <div className="lp-bf-role__detail" data-reveal>
              <div>
                <h3>Qué hace</h3>
                <ol>{FDT_TASKS.map((task) => <li key={task}>{task}</li>)}</ol>
              </div>
              <div>
                <h3>Qué entrega</h3>
                <ul className="lp-bf-role__deliverables">
                  {FDT_DELIVERABLES.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            </div>
          </article>
        </div>

        <div className="lp-bf-principles" data-reveal>
          <h3>Cómo trabaja</h3>
          <ul>
            {FDE_PRINCIPLES.map((principle) => (
              <li key={principle.t}>
                <strong>{principle.t}</strong>
                <span>{principle.d}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="lp-bf-roles__close" data-reveal>
          Cada equipo Brickflow combina un FDT y los FDE que el caso requiera. El FDT responde ante la dirección; los FDE, ante la operación.
        </p>
      </div>
    </section>
  );
}

export function BrickflowCapabilities() {
  return (
    <section id="capacidades" className="lp-section lp-tone-deep lp-bf-capabilities" data-screen-label="06 Capacidades" aria-labelledby="bf-cap-title">
      <div className="lp-container">
        <SectionHeading
          index="06"
          eyebrow="Capacidades integradas"
          titleId="bf-cap-title"
          title={["Tecnología al servicio", "de la operación."]}
          accent={[1]}
          lead="En disHub integramos inteligencia artificial, datos y automatización dentro de la metodología, según el contexto y las necesidades de cada organización."
        />
        {/* <BrickWall className="lp-bf-capabilities__wall" /> */}
        <ul className="lp-bf-caps">
          {BF_CAPABILITIES.map((cap, index) => (
            <li key={cap.t} className="lp-bf-cap" data-reveal style={{ "--d": index } as CSSProperties}>
              <BrickIcon index={index} />
              <span className="lp-bf-cap__id">CAP-{pad(index + 1)}</span>
              <h3>{cap.t}</h3>
              <p>{cap.d}</p>
              <ul>
                {cap.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function BrickflowProof() {
  const pipeRef = useRef<HTMLDivElement>(null);
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const element = pipeRef.current;
    if (!element) return;
    let visible = false;
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    }, { threshold: 0.25 });
    observer.observe(element);
    const timer = window.setInterval(() => {
      if (visible) setStage((current) => (current + 1) % 4);
    }, 1200);
    return () => {
      observer.disconnect();
      window.clearInterval(timer);
    };
  }, []);

  return (
    <section id="devise-prueba" className="lp-section lp-tone-navy" data-screen-label="07 Prueba" aria-labelledby="bf-devise-title">
      <div className="lp-container">
        <ol className="lp-bf-cycle" aria-label="Ciclo de producto">
          <li><strong>Construir</strong><span>para un caso</span></li>
          <li><strong>Probar</strong><span>en producción</span></li>
          <li><strong>Generalizar</strong><span>para el sector</span></li>
        </ol>
        <div className="lp-bf-devise">
          <div>
            <SectionHeading
              index="07"
              eyebrow="Prueba"
              titleId="bf-devise-title"
              title={["Devise: Brickflow,", "convertido en producto."]}
              accent={[1]}
              lead="Devise nació de aplicar Brickflow dentro de una operación fiduciaria real. Primero lo construimos para un caso, lo probamos en producción y luego lo generalizamos para el sector. Hoy conecta las fuentes, concilia con reglas explícitas y reporta hallazgos que un revisor puede seguir."
            />
            <aside className="lp-bf-note" data-reveal>
              <span>Nota</span>
              <p>Devise opera hoy en el piloto de una sociedad fiduciaria colombiana. Las cifras del piloto se comparten bajo NDA en la reunión de diagnóstico.</p>
            </aside>
          </div>
          <div ref={pipeRef} className="lp-bf-pipe">
            {BF_PIPELINE.map((panel, index) => {
              const done = index < stage || stage === 3;
              const current = index === stage && stage < 3;
              return (
                <div key={panel.t} className={cn("lp-bf-panel", done && "is-done", current && "is-active")}>
                  <span className="lp-bf-panel__node" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="5 12.5 10 17 19 7.5" /></svg>
                  </span>
                  <div className="lp-bf-panel__card">
                    <p className="lp-bf-panel__head">
                      <span>{pad(index + 1)} · {panel.t}</span>
                      <span className="lp-bf-panel__status">{done ? "Completo" : current ? "En curso" : "En espera"}</span>
                    </p>
                    <ul>
                      {panel.rows.map(([key, value]) => <li key={key}><span>{key}</span><span>{value}</span></li>)}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export function BrickflowDetails() {
  return (
    <>
      <section id="comparativo" className="lp-section lp-tone-ink" data-screen-label="08 Comparativo" aria-labelledby="bf-compare-title">
        <div className="lp-container">
          <SectionHeading index="08" eyebrow="Comparativo" titleId="bf-compare-title" title={["La misma IA,", "otro lugar para su dato."]} accent={[1]} />
          <div className="lp-bf-table" data-reveal>
            <table>
              <thead>
                <tr>
                  <th scope="col">Criterio</th>
                  <th scope="col">IA genérica, sin diseño</th>
                  <th scope="col" className="is-us">BrickFlow, arquitectura a la medida</th>
                </tr>
              </thead>
              <tbody>
                {BF_COMPARE.map((row) => (
                  <tr key={row.k}>
                    <th scope="row">{row.k}</th>
                    <td>{row.generic}</td>
                    <td className="is-us">{row.us}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="marcos" className="lp-section lp-tone-deep" data-screen-label="09 Contexto" aria-labelledby="bf-context-title">
        <div className="lp-container">
          <SectionHeading
            index="09"
            eyebrow="Contexto regulatorio"
            titleId="bf-context-title"
            title={["Pensado para los marcos", "que su comité revisa."]}
            accent={[1]}
            lead="Los acuerdos de confidencialidad nos impiden mostrar logos de clientes. Mostramos lo que sí podemos: el terreno regulatorio y el tipo de institución para el que diseñamos."
          />
          <ul className="lp-bf-frames">
            {BF_FRAMEWORKS.map((fw, index) => (
              <li key={fw.t} data-reveal style={{ "--d": index } as CSSProperties}>
                <span className="lp-bf-frames__tag">{fw.tag}</span>
                <strong>{fw.t}</strong>
                <p>{fw.d}</p>
              </li>
            ))}
          </ul>
          <div className="lp-bf-profiles" data-reveal>
            <span>Para quién diseñamos</span>
            {BF_PROFILES.map((p) => <span key={p} className="lp-bf-profiles__item">{p}</span>)}
          </div>
        </div>
      </section>

      {/*
      <section id="preguntas-ia" className="lp-section lp-tone-navy" data-screen-label="05.6 Preguntas" aria-labelledby="bf-faq-title">
        <div className="lp-container lp-bf-faq">
          <SectionHeading index="05.6" eyebrow="Preguntas" titleId="bf-faq-title" title={["Lo que su comité", "va a preguntar."]} accent={[1]} />
          <div className="lp-bf-faq__list">
            {BF_FAQS.map((item, index) => (
              <details key={item.q} className="lp-bf-faq__item" open={index === 0}>
                <summary>{item.q}<span aria-hidden="true">+</span></summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      */}

      {/*
      <section className="lp-section lp-tone-teal lp-bf-cta" data-screen-label="05.7 Siguiente paso" aria-labelledby="bf-cta-title">
        <div className="lp-container">
          <p className="lp-eyebrow" data-reveal>
            <span className="lp-eyebrow__index">05.7</span>
            <span className="lp-eyebrow__rule" aria-hidden="true" />
            Siguiente paso
          </p>
          <h2 id="bf-cta-title" className="lp-title" data-reveal="lines">
            <SplitLines lines={["No necesita otro piloto.", "Necesita capacidad instalada."]} accent={[1]} />
          </h2>
          <div className="lp-bf-cta__row" data-reveal>
            <a className="lp-btn lp-btn--primary" href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer">Agendar un diagnóstico</a>
            <span>Una reunión con dirección, riesgo y TI. Sale con un caso priorizado.</span>
          </div>
        </div>
      </section>
      */}
    </>
  );
}
