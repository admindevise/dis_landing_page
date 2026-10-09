import { useEffect, useRef, useState, type CSSProperties } from "react";
import { BrickIcon, BrickWall } from "../../components/landing/BrickflowArt";
import SectionHeading from "../../components/landing/SectionHeading";
import SplitLines from "../../components/landing/SplitLines";
import { BF_CAPABILITIES, BF_COMMITMENTS, BF_COMPARE, BF_FRAMEWORKS, BF_PIPELINE, BF_PROFILES, SITE } from "../../constants/content";
import { pad } from "../../lib/tabs";
import { cn } from "../../lib/utils";

export function BrickflowIntro() {
  return (
    <section id="enfoque" className="lp-section lp-tone-ink lp-bf-intro" data-screen-label="05 Metodología" aria-labelledby="bf-intro-title">
      <BrickWall />
      <div className="lp-container lp-bf-intro__body">
        <p className="lp-eyebrow" data-reveal>
          <span className="lp-eyebrow__index">05</span>
          <span className="lp-eyebrow__rule" aria-hidden="true" />
          Metodología · BrickFlow
        </p>
        <h2 id="bf-intro-title" className="lp-title lp-bf-intro__title" data-reveal="lines">
          <SplitLines lines={["IA que se queda", "en su organización."]} accent={[1]} />
        </h2>
        <p className="lp-lead" data-reveal style={{ "--d": 2 } as CSSProperties}>
          BrickFlow diseña, despliega y adopta inteligencia artificial dentro de instituciones reguladas: on-premise, en nube o con proveedor, según lo que exija cada proceso. La capacidad queda instalada en su equipo.
        </p>
        <div className="lp-bf-intro__actions" data-reveal style={{ "--d": 3 } as CSSProperties}>
          <a className="lp-btn lp-btn--primary" href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer">Agendar un diagnóstico</a>
          <a className="lp-btn lp-btn--ghost" href="#proceso">Ver cómo trabajamos</a>
        </div>
      </div>
      <div className="lp-container">
        <ul className="lp-bf-commits">
          {BF_COMMITMENTS.map((item, index) => (
            <li key={item.t} className="lp-bf-commit" data-reveal style={{ "--d": index } as CSSProperties}>
              <span className="lp-bf-commit__id">C-{pad(index + 1)}</span>
              <strong>{item.t}</strong>
              <span>{item.d}</span>
            </li>
          ))}
        </ul>
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

export function BrickflowDetails() {
  const pipeRef = useRef<HTMLDivElement>(null);
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const el = pipeRef.current;
    if (!el) return;
    let visible = false;
    let hold = 0;
    const io = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; }, { threshold: 0.25 });
    io.observe(el);
    const timer = window.setInterval(() => {
      if (!visible) return;
      setStage((s) => {
        if (s === 3 && hold < 1) { hold++; return s; }
        hold = 0;
        return (s + 1) % 4;
      });
    }, 1200);
    return () => { io.disconnect(); window.clearInterval(timer); };
  }, []);

  return (
    <>
      <section id="devise-prueba" className="lp-section lp-tone-navy" data-screen-label="07 Prueba" aria-labelledby="bf-devise-title">
        <div className="lp-container lp-bf-devise">
          <div>
            <SectionHeading
              index="07"
              eyebrow="Prueba"
              titleId="bf-devise-title"
              title={["Devise: el método,", "ya en operación."]}
              accent={[1]}
              lead="Devise es nuestra plataforma de gestión fiduciaria. Sigue el mismo recorrido que implantamos en su organización: conectar las fuentes, conciliar con reglas explícitas y reportar hallazgos que un revisor puede seguir."
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
                      {panel.rows.map(([k, v]) => <li key={k}><span>{k}</span><span>{v}</span></li>)}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

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
