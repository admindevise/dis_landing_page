import { useMemo, useState } from "react";
import SectionHeading from "../../components/landing/SectionHeading";
import ThreeStage from "../../components/landing/ThreeStage";
import { SITE, SOLUTIONS } from "../../constants/content";
import { handleTabKeys, pad } from "../../lib/tabs";
import { solutionsShowcase } from "../../three/objects/solutions/solutionsShowcase";

export default function Solutions() {
  const [selected, setSelected] = useState(0);
  const solution = SOLUTIONS[selected];
  const stageState = useMemo(() => ({ active: selected }), [selected]);

  return (
    <section id="soluciones" className="lp-section lp-tone-glass lp-solutions" data-screen-label="08 Qué construimos" aria-labelledby="soluciones-title">
      <div className="lp-container">
        <div className="lp-solutions__head">
          <SectionHeading index="08" eyebrow="Qué construimos" titleId="soluciones-title" title={["Productos propios,", "plataformas a la medida", "y nuevas posibilidades."]} accent={[2]} />
          <p className="lp-lead" data-reveal>
            Estos son algunos productos y capacidades nacidos de nuestro trabajo con industrias complejas. Son muestra de cómo exploramos, diseñamos y construimos el siguiente sistema que una operación necesita.
          </p>
        </div>

        <div className="lp-solutions__layout" data-reveal="scale">
          <div
            role="tablist"
            aria-label="Soluciones"
            className="lp-solutions__tabs"
            onKeyDown={(event) => handleTabKeys(event, selected, SOLUTIONS.length, setSelected, "solution-tab")}
          >
            {SOLUTIONS.map((item, index) => (
              <button
                key={item.key}
                id={`solution-tab-${index}`}
                role="tab"
                type="button"
                aria-selected={selected === index}
                aria-controls="solution-panel"
                tabIndex={selected === index ? 0 : -1}
                onClick={() => setSelected(index)}
                className="lp-solutions__tab"
              >
                <span className="lp-solutions__tab-num">{pad(index + 1)}</span>
                <svg width="28" height="28" viewBox="0 0 48 48" aria-hidden="true"><path d={item.mark} fill="currentColor" fillRule="evenodd" /></svg>
                <span className="lp-solutions__tab-text">
                  <span className="lp-solutions__tab-name">{item.name}</span>
                  <span className="lp-solutions__tab-kind">{item.kind}</span>
                </span>
              </button>
            ))}
          </div>

          <ThreeStage factory={solutionsShowcase} state={stageState} className="lp-solutions__stage" label={solution.alt}>
            <p className="lp-solutions__counter" aria-hidden="true">{pad(selected + 1)} <span>/ {pad(SOLUTIONS.length)}</span></p>
            <p className="lp-solutions__hint" aria-hidden="true">{solution.hint}</p>
          </ThreeStage>

          <div id="solution-panel" role="tabpanel" aria-labelledby={`solution-tab-${selected}`} className="lp-solutions__panel" tabIndex={0}>
            <div key={solution.key} className="lp-solutions__panel-inner">
              <p className="lp-solutions__kind">{solution.kind}</p>
              <h3 className="lp-solutions__name">{solution.name}</h3>
              <p className="lp-solutions__tagline">{solution.tagline}</p>
              <p className="lp-solutions__desc">{solution.desc}</p>
              <ul className="lp-solutions__points">
                {solution.points.map((point) => <li key={point}>{point}</li>)}
              </ul>
              <div className="lp-solutions__demo">
                <p className="lp-demo-badge">Vista ilustrativa · datos de ejemplo</p>
                <dl>
                  {solution.demo.map((item) => (
                    <div key={item.label}>
                      <dt>{item.label}</dt>
                      <dd>{item.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <a className="lp-link-arrow" href={SITE.links[solution.key as keyof typeof SITE.links]} target="_blank" rel="noopener noreferrer">
                Conocer más sobre {solution.name}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9" /></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
