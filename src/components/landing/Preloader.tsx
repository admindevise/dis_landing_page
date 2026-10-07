import { useEffect, useRef, useState } from "react";
import { cn } from "../../lib/utils";

interface PreloaderProps {
  progress: number;
  done: boolean;
  onExited: () => void;
}

const MESSAGES = ["Conectando activos", "Sincronizando datos", "Verificando trazabilidad", "Cargando contenido"];

export default function Preloader({ progress, done, onExited }: PreloaderProps) {
  const [shown, setShown] = useState(0);
  const counterRef = useRef(0);

  // Ease the visible percentage toward the real progress.
  useEffect(() => {
    let frame = 0;
    const tick = () => {
      const target = progress * 100;
      counterRef.current += (target - counterRef.current) * 0.08;
      if (Math.abs(target - counterRef.current) < 0.5) counterRef.current = target;
      setShown(Math.round(counterRef.current));
      if (counterRef.current !== target) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [progress]);

  useEffect(() => {
    if (!done || shown < 100) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timer = setTimeout(onExited, reduced ? 0 : 1000);
    return () => clearTimeout(timer);
  }, [done, shown, onExited]);

  useEffect(() => {
    const root = document.documentElement;
    root.style.overflow = "hidden";
    return () => {
      root.style.overflow = "";
    };
  }, []);

  const message = MESSAGES[Math.min(MESSAGES.length - 1, Math.floor((shown / 100) * MESSAGES.length))];
  const leaving = done && shown >= 100;

  return (
    <div className={cn("lp-loader", leaving && "is-leaving")} role="status" aria-live="polite" aria-label={`Cargando disHub, ${shown} %`}>
      <div className="lp-loader__inner">
        <img className="lp-loader__logo" src="/DIS.svg" alt="" width="132" height="44" />

        <div className="lp-loader__object" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
        </div>

        <div className="lp-loader__meta" aria-hidden="true">
          <p className="lp-loader__message">{message}</p>
          <p className="lp-loader__count">{String(shown).padStart(3, "0")}<span>%</span></p>
        </div>
        <div className="lp-loader__bar" aria-hidden="true">
          <span style={{ transform: `scaleX(${shown / 100})` }} />
        </div>
      </div>
      <p className="lp-loader__foot" aria-hidden="true">Laboratorio de innovación · Bogotá</p>
    </div>
  );
}
