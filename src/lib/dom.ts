/** Scale that fits a fixed-width canvas into `width`; never upscales. */
export const fitScale = (width: number, baseWidth: number) => Math.min(1, width / baseWidth);

/** Calls `onWidth` with the content width of `element` now and whenever it changes, until `signal` aborts. */
export function observeWidth(element: HTMLElement, onWidth: (width: number) => void, signal: AbortSignal) {
  const measure = () => onWidth(element.clientWidth);
  measure();
  const observer = new ResizeObserver(measure);
  observer.observe(element);
  signal.addEventListener("abort", () => observer.disconnect(), { once: true });
}

/** Shows only the item at `index` (the others get `hidden`). Showing an item replays its CSS entrance animations. */
export function showOnly(items: ArrayLike<HTMLElement>, index: number) {
  Array.from(items).forEach((item, itemIndex) => {
    item.hidden = itemIndex !== index;
  });
}

/** Restarts the CSS animations of `element` and its subtree, like remounting it. */
export function replay(element: HTMLElement | SVGElement) {
  element.style.display = "none";
  void element.getBoundingClientRect();
  element.style.display = "";
}

/** Sets `aria-pressed` on each button: only the one at `index` is pressed. */
export function pressOnly(buttons: ArrayLike<HTMLElement>, index: number) {
  Array.from(buttons).forEach((button, buttonIndex) => button.setAttribute("aria-pressed", String(buttonIndex === index)));
}

/** Replaces the element's own text node, keeping its child elements (e.g. `<p><span class="bf-tag">…</span>text</p>`). */
export function setOwnText(element: Element, text: string) {
  const node = Array.from(element.childNodes).find((child) => child.nodeType === Node.TEXT_NODE);
  if (node) node.textContent = text;
  else element.append(text);
}
