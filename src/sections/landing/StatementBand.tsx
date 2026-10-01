import type { CSSProperties } from "react";
import Ticker from "../../components/landing/Ticker";
import { KEYWORDS } from "../../constants/content";
import { cn } from "../../lib/utils";

interface StatementBandProps {
  id: string;
  index: string;
  tone: "teal" | "ink";
  eyebrow: string;
  statement: string;
  detail: string;
  metric: string;
  metricLabel: string;
}

/** Full-bleed, high-contrast interlude whose words light up as the reader scrolls. */
export default function StatementBand({ id, index, tone, eyebrow, statement, detail, metric, metricLabel }: StatementBandProps) {
  const words = statement.split(" ");

  return (
    <section id={id} className={cn("lp-section lp-panel lp-band", `lp-tone-${tone}`)} aria-labelledby={`${id}-title`}>
      <div className="lp-container lp-band__inner">
        <p className="lp-eyebrow" data-reveal>
          <span className="lp-eyebrow__index">{index}</span>
          <span className="lp-eyebrow__rule" aria-hidden="true" />
          {eyebrow}
        </p>
        <h2 id={`${id}-title`} className="lp-band__statement" style={{ "--n": words.length } as CSSProperties}>
          {words.map((word, wordIndex) => (
            <span key={`${word}-${wordIndex}`} className="lp-band__word" style={{ "--i": wordIndex } as CSSProperties}>
              {word}{" "}
            </span>
          ))}
        </h2>
        <div className="lp-band__foot">
          <p className="lp-band__detail" data-reveal>{detail}</p>
          <p className="lp-band__metric" data-reveal style={{ "--d": 2 } as CSSProperties}>
            <strong>{metric}</strong>
            <span>{metricLabel}</span>
          </p>
        </div>
      </div>
      <Ticker items={KEYWORDS} />
    </section>
  );
}
