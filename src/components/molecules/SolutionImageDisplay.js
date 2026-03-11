import { jsx as _jsx } from "react/jsx-runtime";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
const SolutionImageDisplay = ({ images, activeIndex }) => {
    return (_jsx(Box, { sx: {
            position: "relative",
            width: "100%",
            height: { xs: 230, md: "70vh" },
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            perspective: "1600px",
        }, children: images.map((src, index) => {
            const offset = index - activeIndex;
            const isActive = offset === 0;
            return (_jsx(motion.img, { src: src, alt: `image-${index}`, initial: {
                    opacity: 0,
                    scale: 0.8,
                    rotateY: offset > 0 ? 45 : -45,
                    x: offset > 0 ? 200 : -200,
                }, animate: {
                    x: offset * 250,
                    scale: isActive ? 1 : 0.7,
                    rotateY: offset * -60,
                    opacity: isActive ? 1 : 0.3,
                    zIndex: 10 - Math.abs(offset),
                    filter: isActive
                        ? "drop-shadow(0 0 25px rgba(0,255,255,0.6))"
                        : "drop-shadow(0 0 10px rgba(0,255,255,0.15))",
                }, transition: {
                    duration: 1,
                    ease: [0.45, 0, 0.55, 1],
                }, style: {
                    position: "absolute",
                    width: src.endsWith(".svg") ? "45%" : "80%",
                    borderRadius: 3,
                    height: "auto",
                    objectFit: "contain",
                    display: "block",
                    mixBlendMode: "screen",
                    transformStyle: "preserve-3d",
                } }, index));
        }) }));
};
export default SolutionImageDisplay;
