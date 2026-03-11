import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useRef } from "react";
import { useTheme } from "@mui/material";
const AnimatedBackground = ({ nodesCount = 70, gradientColors, }) => {
    const theme = useTheme();
    const canvasRef = useRef(null);
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas)
            return;
        const ctx = canvas.getContext("2d");
        if (!ctx)
            return;
        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);
        const nodes = Array.from({ length: nodesCount }, () => ({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.6,
            vy: (Math.random() - 0.5) * 0.6,
        }));
        const mouse = { x: null, y: null, radius: 150 };
        const handleMouseMove = (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };
        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("resize", handleResize);
        const draw = () => {
            // Fondo
            const [startColor, endColor] = gradientColors || [theme.palette.background.default, theme.palette.background.paper];
            const gradient = ctx.createLinearGradient(0, 0, width, height);
            gradient.addColorStop(0, startColor);
            gradient.addColorStop(1, endColor);
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, width, height);
            // Líneas entre nodos
            for (let i = 0; i < nodes.length; i++) {
                const a = nodes[i];
                for (let j = i + 1; j < nodes.length; j++) {
                    const b = nodes[j];
                    const dx = a.x - b.x;
                    const dy = a.y - b.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 150) {
                        const opacity = 1 - dist / 150;
                        const color = theme.palette.primary.main;
                        const hexColor = color + Math.floor(opacity * 255).toString(16).padStart(2, "0");
                        ctx.strokeStyle = hexColor;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(a.x, a.y);
                        ctx.lineTo(b.x, b.y);
                        ctx.stroke();
                    }
                }
            }
            // Nodos
            for (let node of nodes) {
                if (mouse.x !== null && mouse.y !== null) {
                    const dx = mouse.x - node.x;
                    const dy = mouse.y - node.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < mouse.radius) {
                        node.x -= dx / 20;
                        node.y -= dy / 20;
                    }
                }
                node.x += node.vx;
                node.y += node.vy;
                if (node.x < 0 || node.x > width)
                    node.vx *= -1;
                if (node.y < 0 || node.y > height)
                    node.vy *= -1;
                ctx.beginPath();
                ctx.arc(node.x, node.y, 2.5, 0, Math.PI * 2);
                ctx.fillStyle = theme.palette.primary.main;
                ctx.fill();
            }
            requestAnimationFrame(draw);
        };
        draw();
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("resize", handleResize);
        };
    }, [theme, nodesCount, gradientColors]);
    return (_jsx("canvas", { ref: canvasRef, style: {
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
        } }));
};
export default AnimatedBackground;
