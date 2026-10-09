import { useState, type CSSProperties } from "react";
import SectionHeading from "../../components/landing/SectionHeading";
import { BF_FAQS, CONTACT_DETAILS } from "../../constants/content";
import { pad } from "../../lib/tabs";
import { cn } from "../../lib/utils";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="preguntas" className="lp-section lp-tone-ink lp-faq" data-screen-label="15 FAQ" aria-labelledby="preguntas-title">
      <div className="lp-container lp-faq__grid">
        <div className="lp-faq__aside">
          <div className="lp-faq__sticky">
            <SectionHeading
              index="15"
              eyebrow="Preguntas frecuentes"
              titleId="preguntas-title"
              title={["Información relevante", "antes de iniciar."]}
              lead={<>Para consultas adicionales, escríbanos a <a href={`mailto:${CONTACT_DETAILS.email}`}>{CONTACT_DETAILS.email}</a>.</>}
            />
            <p className="lp-faq__count" data-reveal>{pad(BF_FAQS.length)} <span>preguntas</span></p>
          </div>
        </div>

        <div className="lp-faq__list">
          {BF_FAQS.map((faq, index) => {
            const open = openIndex === index;
            return (
              <div key={faq.q} className={cn("lp-faq__item", open && "is-open")} data-reveal style={{ "--d": index } as CSSProperties}>
                <h3 className="lp-faq__question">
                  <button
                    type="button"
                    id={`faq-b-${index}`}
                    aria-expanded={open}
                    aria-controls={`faq-p-${index}`}
                    onClick={() => setOpenIndex(open ? null : index)}
                  >
                    <span className="lp-faq__num" aria-hidden="true">{pad(index + 1)}</span>
                    <span className="lp-faq__text">{faq.q}</span>
                    <span className="lp-faq__icon" aria-hidden="true" />
                  </button>
                </h3>
                <div id={`faq-p-${index}`} role="region" aria-labelledby={`faq-b-${index}`} className="lp-faq__panel">
                  <div>
                    <p>{faq.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
