import { useState } from "react";
import { TESTIMONIALS } from "../../constants/content";
import { pad } from "../../lib/tabs";
import { cn } from "../../lib/utils";

const initials = (name: string) => name.split(" ").map((part) => part[0]).slice(0, 2).join("");

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const testimonial = TESTIMONIALS[active];
  const go = (step: number) => setActive((active + step + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section id="testimonios" className="lp-section lp-panel lp-tone-tealdeep lp-testimonials" data-screen-label="13 Testimonios" aria-labelledby="testimonios-title">
      <span className="lp-testimonials__mark" aria-hidden="true">“</span>
      <div className="lp-container lp-testimonials__inner">
        <header className="lp-testimonials__head">
          <p className="lp-eyebrow" data-reveal>
            <span className="lp-eyebrow__index">13</span>
            <span className="lp-eyebrow__rule" aria-hidden="true" />
            Testimonios
          </p>
          <h2 id="testimonios-title" className="lp-testimonials__title" data-reveal>Lo que dicen quienes operan con nosotros.</h2>
        </header>

        <figure className="lp-quote" aria-live="polite" aria-roledescription="diapositiva" aria-label={`${active + 1} de ${TESTIMONIALS.length}`}>
          <blockquote key={`q-${active}`} className="lp-quote__text">“{testimonial.q}”</blockquote>
          <figcaption key={`c-${active}`} className="lp-quote__author">
            <span className="lp-quote__avatar" aria-hidden="true">{initials(testimonial.a)}</span>
            <span>
              <strong>{testimonial.a}</strong>
              <span>{testimonial.r}</span>
            </span>
          </figcaption>
        </figure>

        <div className="lp-testimonials__nav">
          <div className="lp-testimonials__dots" role="group" aria-label="Seleccionar testimonio">
            {TESTIMONIALS.map((item, index) => (
              <button
                key={item.a}
                type="button"
                className={cn("lp-testimonials__dot", index === active && "is-active")}
                aria-label={`Testimonio ${index + 1}: ${item.a}`}
                aria-pressed={index === active}
                onClick={() => setActive(index)}
              >
                <span className="lp-testimonials__dot-num" aria-hidden="true">{pad(index + 1)}</span>
                <span className="lp-testimonials__dot-bar" aria-hidden="true" />
              </button>
            ))}
          </div>
          <div className="lp-testimonials__arrows">
            <button type="button" className="lp-icon-btn" onClick={() => go(-1)} aria-label="Testimonio anterior">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg>
            </button>
            <button type="button" className="lp-icon-btn" onClick={() => go(1)} aria-label="Testimonio siguiente">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
