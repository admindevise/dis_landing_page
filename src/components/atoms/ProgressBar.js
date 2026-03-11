import { jsx as _jsx } from "react/jsx-runtime";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
const ProgressBar = ({ duration, onComplete, isActive = true }) => {
    const [progress, setProgress] = useState(0);
    useEffect(() => {
        if (!isActive)
            return;
        let start = Date.now();
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
    return (_jsx(Box, { sx: { width: "100%", height: 4, backgroundColor: "#E0E0E0", borderRadius: 3, mt: 2 }, children: _jsx(Box, { sx: {
                width: `${progress}%`,
                height: "100%",
                backgroundColor: "#69A6A0",
                transition: "width 0.1s linear",
                borderRadius: 3,
            } }) }));
};
export default ProgressBar;
