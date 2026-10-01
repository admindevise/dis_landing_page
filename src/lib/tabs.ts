import type { KeyboardEvent } from "react";

export const pad = (value: number) => String(value).padStart(2, "0");

/** Roving-tabindex keyboard support for WAI-ARIA tablists. */
export function handleTabKeys(event: KeyboardEvent, current: number, count: number, select: (index: number) => void, idPrefix: string) {
  let next: number;
  if (event.key === "ArrowRight" || event.key === "ArrowDown") next = (current + 1) % count;
  else if (event.key === "ArrowLeft" || event.key === "ArrowUp") next = (current + count - 1) % count;
  else if (event.key === "Home") next = 0;
  else if (event.key === "End") next = count - 1;
  else return;
  event.preventDefault();
  select(next);
  document.getElementById(`${idPrefix}-${next}`)?.focus();
}
