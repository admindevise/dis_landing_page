import type { CSSProperties } from "react";

interface SplitLinesProps {
  lines: string[];
  accent?: number[];
}

/** Title lines with controlled breaks, revealed with a staggered mask by `[data-reveal="lines"]`. */
export default function SplitLines({ lines, accent = [] }: SplitLinesProps) {
  return (
    <>
      {lines.map((line, index) => (
        <span key={line} className="lp-line">
          <span className={accent.includes(index) ? "lp-line__text lp-accent" : "lp-line__text"} style={{ "--d": index } as CSSProperties}>
            {line}{" "}
          </span>
        </span>
      ))}
    </>
  );
}
