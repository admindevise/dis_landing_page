import { useEffect, useRef, useState } from "react";
import { MARK } from "../../constants/content";
import { cn } from "../../lib/utils";

const WALL_ROWS = 9;
const WALL_FILLED = 6;

/** Muro isométrico de BrickFlow: se ensambla al entrar, se inclina con el cursor y enciende bloques al azar. */
export function BrickWall({ className }: { className?: string }) {
  const wallRef = useRef<HTMLDivElement>(null);
  const [lit, setLit] = useState<string | null>(null);

  useEffect(() => {
    const wall = wallRef.current;
    if (!wall || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let visible = true;
    const io = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; });
    io.observe(wall);

    const cur = { x: 0, y: 0 };
    const tgt = { x: 0, y: 0 };
    const onMove = (e: PointerEvent) => {
      tgt.x = (e.clientX / window.innerWidth) * 2 - 1;
      tgt.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", onMove, { passive: true });

    let raf = 0;
    const loop = () => {
      if (visible) {
        cur.x += (tgt.x - cur.x) * 0.07;
        cur.y += (tgt.y - cur.y) * 0.07;
        wall.style.transform = `rotateX(${16 - cur.y * 5.6}deg) rotateY(${-24 + cur.x * 8}deg)`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const timer = window.setInterval(() => {
      if (!visible) return;
      const r = WALL_ROWS - 1 - Math.floor(Math.random() * WALL_FILLED);
      const c = 3 + Math.floor(Math.random() * 5);
      setLit(`${r}-${c}`);
    }, 900);

    return () => {
      io.disconnect();
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
      window.clearInterval(timer);
    };
  }, []);

  return (
    <div className={cn("lp-bf-scene", className)} aria-hidden="true">
      <div ref={wallRef} className="lp-bf-wall">
        {Array.from({ length: WALL_ROWS }, (_, r) => {
          const fromBottom = WALL_ROWS - 1 - r;
          const state = fromBottom < WALL_FILLED ? "fill" : fromBottom < WALL_FILLED + 1.5 ? "line" : "ghost";
          const grow = r % 2 ? [0.5, 1, 1, 1, 1, 1, 1, 1, 0.5] : [1, 1, 1, 1, 1, 1, 1, 1];
          return (
            <div key={r} className="lp-bf-wall__row">
              {grow.map((g, c) => (
                <span
                  key={c}
                  className={cn("lp-bf-brick", `is-${lit === `${r}-${c}` ? "lit" : state}`)}
                  style={{ flex: g, animationDelay: `${fromBottom * 110 + c * 28}ms` }}
                />
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}

/** Pila de capas: cada etapa del proceso agrega una hilada; la cubierta aparece en la última. */
export function BrickLayers({ active, className }: { active: number; className?: string }) {
  return (
    <div className={cn("lp-bf-layers", className)} aria-hidden="true">
      <div className="lp-bf-layers__stack">
        <svg className={cn("lp-bf-layers__roof", active === 3 && "is-on")} viewBox="0 0 48 48" fill="currentColor">
          <path d={MARK.brick} />
        </svg>
        {[3, 2, 1, 0].map((k) => (
          <div key={k} className={cn("lp-bf-course", k < active && "is-done", k === active && "is-active")}>
            {(k % 2 ? [0.5, 1, 1, 1, 1, 1, 0.5] : [1, 1, 1, 1, 1, 1]).map((g, i) => (
              <span key={i} style={{ flex: g }} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

const ICON_PATHS = [
  // Pila de placas: diagnóstico por capas
  <>
    <path className="f" d="M8 34 L24 42 L40 34 L40 37 L24 45 L8 37 Z" /><path className="f" d="M24 26 L40 34 L24 42 L8 34 Z" />
    <path className="f" d="M8 24 L24 32 L40 24 L40 27 L24 35 L8 27 Z" /><path className="f" d="M24 16 L40 24 L24 32 L8 24 Z" />
    <path className="f" d="M8 14 L24 22 L40 14 L40 17 L24 25 L8 17 Z" /><path className="t" d="M24 6 L40 14 L24 22 L8 14 Z" />
  </>,
  // Bloque sobre base punteada: arquitectura
  <>
    <path d="M24 22 L46 34 L24 46 L2 34 Z" strokeDasharray="2 3" />
    <path className="f" d="M12 12.5 L24 19 L24 33 L12 26.5 Z" /><path className="f" d="M24 19 L36 12.5 L36 26.5 L24 33 Z" />
    <path className="t" d="M24 6 L36 12.5 L24 19 L12 12.5 Z" />
  </>,
  // Dos bloques enlazados: agentes
  <>
    <path d="M19 30 L29 20" strokeDasharray="2 2.5" /><circle className="dot" cx="24" cy="25" r="2.2" stroke="none" />
    <path className="f" d="M29 12 L36 16 L36 24 L29 20 Z" /><path className="f" d="M36 16 L43 12 L43 20 L36 24 Z" /><path className="t" d="M36 8 L43 12 L36 16 L29 12 Z" />
    <path className="f" d="M5 26 L12 30 L12 38 L5 34 Z" /><path className="f" d="M12 30 L19 26 L19 34 L12 38 Z" /><path className="f" d="M12 22 L19 26 L12 30 L5 26 Z" />
  </>,
  // Escalera de bloques: adopción
  <>
    <path className="f" d="M31 10 L38 14 L38 22 L31 18 Z" /><path className="f" d="M38 14 L45 10 L45 18 L38 22 Z" /><path className="t" d="M38 6 L45 10 L38 14 L31 10 Z" />
    <path className="f" d="M17 18 L24 22 L24 30 L17 26 Z" /><path className="f" d="M24 22 L31 18 L31 26 L24 30 Z" /><path className="f" d="M24 14 L31 18 L24 22 L17 18 Z" />
    <path className="f" d="M3 26 L10 30 L10 38 L3 34 Z" /><path className="f" d="M10 30 L17 26 L17 34 L10 38 Z" /><path className="f" d="M10 22 L17 26 L10 30 L3 26 Z" />
  </>
];

export function BrickIcon({ index }: { index: number }) {
  return (
    <svg className="lp-bf-icon" width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" aria-hidden="true">
      {ICON_PATHS[index]}
    </svg>
  );
}
