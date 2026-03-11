import { Box } from "@mui/material";
import { useEffect, useState } from "react";

interface ProgressBarProps {
  duration: number;
  onComplete?: () => void;
  isActive?: boolean;
}

const ProgressBar = ({ duration, onComplete, isActive = true }: ProgressBarProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isActive) return;
    const start = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      const pct = Math.min((elapsed / duration) * 100, 100);
      setProgress(pct);
      if (pct === 100) {
        clearInterval(interval);
        onComplete?.();
      }
    }, 100);

    return () => clearInterval(interval);
  }, [duration, onComplete, isActive]);

  return (
    <Box sx={{ width: "100%", height: 4, backgroundColor: "#E0E0E0", borderRadius: 3, mt: 2 }}>
      <Box
        sx={{
          width: `${progress}%`,
          height: "100%",
          backgroundColor: "#69A6A0",
          transition: "width 0.1s linear",
          borderRadius: 3,
        }}
      />
    </Box>
  );
};

export default ProgressBar;
