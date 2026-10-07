import { useState, type CSSProperties } from "react";
import SectionHeading from "../../components/landing/SectionHeading";
import { ERAS } from "../../constants/content";
import { handleTabKeys } from "../../lib/tabs";
import { cn } from "../../lib/utils";

export default function History() {
  const [selected, setSelected] = useState(ERAS.length - 1);
  const era = ERAS[selected];

  return (
    <section id="historia" className="lp-section lp-tone-ink lp-history" data-screen-label="11 Trayectoria" aria-labelledby="historia-title">
      <div className="lp-container">
        <SectionHeading index="11" eyebrow="Trayectoria" titleId="historia-title" title={["Cada caso resuelto", "fortalece nuestra metodología."]} accent={[1]} />

        <div
          className="lp-history__timeline"
          role="tablist"
          aria-label="Etapas de la trayectoria"
          data-reveal
          style={{ "--fill": selected / (ERAS.length - 1) } as CSSProperties}
          onKeyDown={(event) => handleTabKeys(event, selected, ERAS.length, setSelected, "era-tab")}
        >
          <span className="lp-history__track" aria-hidden="true" />
          {ERAS.map((item, index) => (
            <button
              key={item.year}
              id={`era-tab-${index}`}
              type="button"
              role="tab"
              aria-selected={selected === index}
              aria-controls="era-panel"
              tabIndex={selected === index ? 0 : -1}
              onClick={() => setSelected(index)}
              className={cn("lp-era-tab", index <= selected && "is-reached")}
            >
              <span className="lp-era-tab__dot" aria-hidden="true" />
              <span className="lp-era-tab__year">{item.year}</span>
              <span className="lp-era-tab__title">{item.title}</span>
            </button>
          ))}
        </div>

        <div id="era-panel" role="tabpanel" aria-labelledby={`era-tab-${selected}`} className="lp-history__panel">
          <div key={era.year} className="lp-history__panel-inner">
            <p className="lp-history__year" aria-hidden="true">{era.year.slice(0, 4)}</p>
            <h3 className="lp-history__title">{era.title}</h3>
            <dl className="lp-history__items">
              {era.items.map((item) => (
                <div key={item.k}>
                  <dt>{item.k}</dt>
                  <dd>{item.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
