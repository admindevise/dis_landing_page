import React from "react";
import SectionVisualObject from "./SectionVisualObject";

type SectionVisualProps = {
  eyebrow: string;
  title: string;
  detail: string;
  metric: string;
  metricLabel: string;
  variant: "ledger" | "network";
};

export default function SectionVisual({
  eyebrow,
  title,
  detail,
  metric,
  metricLabel,
  variant
}: SectionVisualProps) {
  return (
    <section className={`dis-section-visual dis-section-visual--${variant}`} aria-label={title}>
      <div className="dis-section-visual__copy">
        <span>{eyebrow}</span>
        <h2>{title}</h2>
        <p>{detail}</p>
        <div className="dis-section-visual__metric">
          <strong>{metric}</strong>
          <span>{metricLabel}</span>
        </div>
      </div>

      <SectionVisualObject variant={variant} />
    </section>
  );
}
