const MESSAGES = ["Conectando activos", "Sincronizando datos", "Verificando trazabilidad", "Cargando contenido"];

const windowLoaded = () =>
  document.readyState === "complete"
    ? Promise.resolve()
    : new Promise<void>((resolve) => window.addEventListener("load", () => resolve(), { once: true }));

/**
 * Waits for fonts, page assets and the Three.js module before revealing the landing,
 * while `loader` shows the progress. Resolves when loading is done; the loader then
 * plays its exit and removes itself.
 * `minDuration` avoids a flash; `maxDuration` guarantees the page never stays blocked.
 */
export function runPreloader(loader: HTMLElement, minDuration = 1400, maxDuration = 6000) {
  const message = loader.querySelector<HTMLElement>(".lp-loader__message")!;
  const count = loader.querySelector<HTMLElement>(".lp-loader__count")!;
  const bar = loader.querySelector<HTMLElement>(".lp-loader__bar span")!;
  const root = document.documentElement;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const lightweight = window.matchMedia("(max-width: 1099px), (pointer: coarse)").matches;
  const duration = reduced || lightweight ? 350 : minDuration;

  let taskProgress = 0;
  let timeProgress = 0;
  let done = false;
  let counter = 0;
  let shown = 0;
  let frame = 0;

  root.style.overflow = "hidden";

  const render = () => {
    const percent = String(shown).padStart(3, "0");
    message.textContent = MESSAGES[Math.min(MESSAGES.length - 1, Math.floor((shown / 100) * MESSAGES.length))];
    count.firstChild!.textContent = percent;
    bar.style.transform = `scaleX(${shown / 100})`;
    loader.setAttribute("aria-label", `Cargando disHub, ${shown} %`);
    loader.classList.toggle("is-leaving", done && shown >= 100);
  };

  // Ease the visible percentage toward the real progress.
  // The counter never runs ahead of the minimum duration, so it doesn't jump to 100 instantly.
  const tick = () => {
    frame = 0;
    const target = (done ? 1 : Math.min(taskProgress, timeProgress)) * 100;
    counter += (target - counter) * 0.08;
    if (Math.abs(target - counter) < 0.5) counter = target;
    shown = Math.round(counter);
    render();
    if (counter !== target) frame = requestAnimationFrame(tick);
  };
  const schedule = () => {
    if (!frame) frame = requestAnimationFrame(tick);
  };

  const start = performance.now();
  const clock = setInterval(() => {
    timeProgress = Math.min(1, (performance.now() - start) / duration);
    schedule();
  }, 50);

  const requiredTasks: Promise<unknown>[] = lightweight
    ? []
    : [document.fonts?.ready ?? Promise.resolve(), windowLoaded(), import("three")];

  let completed = 0;
  const tasks = requiredTasks.map((task) => task.catch(() => undefined).then(() => {
    completed += 1;
    taskProgress = completed / tasks.length;
    schedule();
  }));

  const minimum = new Promise((resolve) => setTimeout(resolve, duration));
  const maximum = new Promise((resolve) => setTimeout(resolve, maxDuration));

  return Promise.race([Promise.all([Promise.all(tasks), minimum]), maximum]).then(() => {
    clearInterval(clock);
    done = true;
    schedule();
    setTimeout(() => {
      cancelAnimationFrame(frame);
      loader.remove();
      root.style.overflow = "";
    }, reduced || lightweight ? 0 : 1000);
  });
}
