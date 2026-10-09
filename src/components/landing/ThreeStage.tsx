import { useEffect, type ReactNode } from "react";
import { cn } from "../../lib/utils";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import type { SceneFactory } from "../../three/types";
import { useThreeStage } from "../../three/useThreeStage";

interface ThreeStageProps {
  factory: SceneFactory;
  label: string;
  className?: string;
  state?: Record<string, number>;
  children?: ReactNode;
}

export default function ThreeStage({ factory, label, className, state, children }: ThreeStageProps) {
  const lightweight = useMediaQuery("(max-width: 1099px)");
  const { ref, status, setState } = useThreeStage(factory, !lightweight);

  useEffect(() => {
    if (state) Object.entries(state).forEach(([key, value]) => setState(key, value));
  }, [state, setState]);

  return (
    <div ref={ref} className={cn("lp-stage", className)} data-status={status} role="img" aria-label={label}>
      {(status === "unsupported" || status === "disabled") && <div className="lp-stage__fallback" aria-hidden="true" />}
      {children}
    </div>
  );
}
