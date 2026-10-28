// Geometry of the Brickflow tower and flow map (03-Approach), shared by its markup and its script.

export const STEP_MS = 3400;
export const CANVAS_WIDTH = 1216;
export const MOBILE_CANVAS_WIDTH = 358;
// Below this scale the side callouts drop under 12 px, so the mobile composition takes over.
export const MIN_DESKTOP_SCALE = 0.75;

// Tower canvas (1216 × 450): top of each course and, per stage, where the callouts sit.
// m = side callouts (vertical centre), l = lead lines, d = lead dots, f = deliverable, fl = deliverable stem.
export const LAYER_TOPS = [224, 188, 152, 116];
export const CALLOUTS = [
  { m: 354, l: 353, d: 349, f: 124, fl: 202 },
  { m: 318, l: 317, d: 313, f: 88, fl: 166 },
  { m: 282, l: 281, d: 277, f: 52, fl: 130 },
  { m: 246, l: 245, d: 241, f: 16, fl: 94 }
];
export const MOBILE_LAYER_TOPS = [150, 126, 102, 78];
export const MOBILE_CALLOUTS = [
  { f: 74, fl: 138 },
  { f: 50, fl: 114 },
  { f: 26, fl: 90 },
  { f: 2, fl: 66 }
];

// Map canvas (1216 × 680): left edge of each stage column.
export const MAP_COLUMNS = [186, 446, 706, 966];
export const DIRECTION_LEADS = [true, false, false, true];
export const DELIVERABLE_PULSES = [0.68, 2.74, 4.8, 6.86];
/** Stage where the client team takes ownership. */
export const OWNER = 3;
