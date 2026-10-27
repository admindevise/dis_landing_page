import { useEffect, type MouseEvent, type ReactNode } from "react";
import { cn } from "../../lib/utils";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import type { SceneFactory } from "../../three/types";
import { useThreeStage } from "../../three/useThreeStage";

interface ThreeStageProps {
  factory: SceneFactory;
  label: string;
  className?: string;
  state?: Record<string, number>;
  onLayerSelect?: (layer: number) => void;
  children?: ReactNode;
}

export default function ThreeStage({ factory, label, className, state, onLayerSelect, children }: ThreeStageProps) {
  const lightweight = useMediaQuery("(max-width: 1099px)");
  const { ref, status, setState, pick } = useThreeStage(factory, !lightweight);

  useEffect(() => {
    if (state) Object.entries(state).forEach(([key, value]) => setState(key, value));
  }, [state, setState]);

  function handleClick(event: MouseEvent<HTMLDivElement>) {
    if (!onLayerSelect || (event.target as HTMLElement).closest("button")) return;
    const layer = pick(event.clientX, event.clientY);
    if (layer !== null) onLayerSelect(layer);
  }

  return (
    <div ref={ref} className={cn("lp-stage", className)} data-status={status} role={onLayerSelect ? "group" : "img"} aria-label={label} onClick={onLayerSelect ? handleClick : undefined}>
      {(status === "unsupported" || status === "disabled") && <div className="lp-stage__fallback" aria-hidden="true" />}
      {children}
    </div>
  );
}
