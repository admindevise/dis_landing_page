import { jsx as _jsx } from "react/jsx-runtime";
import { Box } from "@mui/material";
const Loading = ({ open }) => {
    if (!open)
        return null;
    return (_jsx(Box, { sx: {
            position: "fixed",
            inset: 0,
            zIndex: 2000,
            backgroundColor: "rgb(255, 255, 255)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        }, children: _jsx("video", { src: "/loading.mp4", autoPlay: true, muted: true, loop: true, playsInline: true, style: {
                width: 220,
                height: 220,
                objectFit: "contain",
            } }) }));
};
export default Loading;
