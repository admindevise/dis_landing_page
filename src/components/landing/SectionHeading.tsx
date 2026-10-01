import type { CSSProperties, ReactNode } from "react";
import { cn } from "../../lib/utils";
import SplitLines from "./SplitLines";

interface SectionHeadingProps {
  index: string;
  eyebrow: string;
  title: string[];
  titleId: string;
  accent?: number[];
  lead?: ReactNode;
  align?: "start" | "center";
  className?: string;
}

export default function SectionHeading({ index, eyebrow, title, titleId, accent, lead, align = "start", className }: SectionHeadingProps) {
  return (
    <header className={cn("lp-heading", align === "center" && "lp-heading--center", className)}>
      <p className="lp-eyebrow" data-reveal>
        <span className="lp-eyebrow__index">{index}</span>
        <span className="lp-eyebrow__rule" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2 id={titleId} className="lp-title" data-reveal="lines">
        <SplitLines lines={title} accent={accent} />
      </h2>
      {lead && (
        <p className="lp-lead" data-reveal style={{ "--d": 3 } as CSSProperties}>
          {lead}
        </p>
      )}
    </header>
  );
}
