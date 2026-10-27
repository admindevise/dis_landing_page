import { cn } from "../../lib/utils";

const LAYER_JOINTS = "M0 93 L150 168 L300 93 M50 100 V118 M100 125 V143 M25 105.5 V123.5 M75 130.5 V148.5 M125 155.5 V173.5 M200 125 V143 M250 100 V118 M175 155.5 V173.5 M225 130.5 V148.5 M275 105.5 V123.5";

/** One isometric course of the Brickflow tower (300 × 186). Colors come from CSS by state. */
export function TowerLayer({ active, className }: { active: boolean; className?: string }) {
  return (
    <svg className={cn("bf-layer", active ? "is-active" : "is-built", className)} viewBox="0 0 300 186" aria-hidden="true">
      <polygon className="bf-layer__left" points="0,75 150,150 150,186 0,111" />
      <polygon className="bf-layer__right" points="150,150 300,75 300,111 150,186" />
      <polygon className="bf-layer__top" points="150,0 300,75 150,150 0,75" />
      <path className="bf-layer__joint" d={LAYER_JOINTS} />
      <polygon className="bf-layer__joint" points="150,22 256,75 150,128 44,75" />
    </svg>
  );
}

/** Dotted outline of the full four-course tower: future layers only exist as scaffolding. */
export function TowerScaffold({ className }: { className?: string }) {
  return (
    <svg className={cn("bf-scaffold", className)} viewBox="0 0 300 294" aria-hidden="true">
      <path d="M150 0 L300 75 L300 219 L150 294 L0 219 L0 75 Z" />
      <path d="M0 75 L150 150 L300 75 M150 150 V294" />
      <path d="M0 111 L150 186 L300 111 M0 147 L150 222 L300 147 M0 183 L150 258 L300 183" />
    </svg>
  );
}

// Per stage: the stroked outline and the face that gets a soft fill when `filled`.
const STAGE_ICONS = [
  { lines: ["M7 22.5 L24 31 L41 22.5", "M7 29.5 L24 38 L41 29.5"], face: "M24 7 L41 15.5 L24 24 L7 15.5 Z" },
  { lines: ["M14 10 V22 L24 27 L34 22 V10 M24 15 V27"], face: "M24 5 L34 10 L24 15 L14 10 Z", dashed: "M24 26 L44 36 L24 46 L4 36 Z" },
  { lines: ["M12 24 L19 27.5 L12 31 L5 27.5 Z M5 27.5 V35.5 L12 39 L19 35.5 V27.5 M12 31 V39", "M29 11.5 V19.5 L36 23 L43 19.5 V11.5 M36 15 V23"], face: "M36 8 L43 11.5 L36 15 L29 11.5 Z", link: true },
  { lines: ["M10 26 L17 29.5 L10 33 L3 29.5 Z M3 29.5 V37.5 L10 41 L17 37.5 V29.5 M10 33 V41", "M24 18 L31 21.5 L24 25 L17 21.5 Z M17 21.5 V29.5 L24 33 L31 29.5 V21.5 M24 25 V33", "M31 13.5 V21.5 L38 25 L45 21.5 V13.5 M38 17 V25"], face: "M38 10 L45 13.5 L38 17 L31 13.5 Z" }
];

/** Line icon for each of the four stages (and the matching capability piece when `filled`). */
export function StageIcon({ index, filled = false, className }: { index: number; filled?: boolean; className?: string }) {
  const icon = STAGE_ICONS[index];
  return (
    <svg className={cn("bf-icon", filled && "bf-icon--filled", className)} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round" aria-hidden="true">
      <path className="bf-icon__face" d={icon.face} />
      {icon.lines.map((d) => <path key={d} d={d} />)}
      {icon.dashed && <path d={icon.dashed} strokeDasharray="1.5 3" />}
      {icon.link && (
        <>
          <path d="M19.5 30 L28.5 20" strokeDasharray="2 3" />
          {filled && <circle cx="24" cy="25" r="2" fill="currentColor" stroke="none" />}
        </>
      )}
    </svg>
  );
}

/** disHub cube-in-hexagon symbol, drawn with the landing palette. */
export function DisHubSymbol({ className }: { className?: string }) {
  return (
    <svg className={cn("bf-symbol", className)} viewBox="0 0 26 28" aria-hidden="true">
      <path className="bf-symbol__hex" d="M13 1 L25 7.5 V20.5 L13 27 L1 20.5 V7.5 Z" />
      <path className="bf-symbol__top" d="M13 7 L19 10.5 L13 14 L7 10.5 Z" />
      <path className="bf-symbol__left" d="M7 10.5 V17.5 L13 21 V14 Z" />
      <path className="bf-symbol__right" d="M19 10.5 V17.5 L13 21 V14 Z" />
    </svg>
  );
}
