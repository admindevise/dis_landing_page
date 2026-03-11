import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Typography, Paper, Stack, useTheme, alpha, Avatar } from "@mui/material";
import { Cpu, Rocket, Lightbulb, Network } from "lucide-react";
import { cloneElement, useEffect, useRef, useState } from "react";
const timeline = [
    {
        year: "2020–2022",
        title: "Origen y conceptualización",
        icon: _jsx(Lightbulb, { size: 28 }),
        items: [
            (_jsxs(_Fragment, { children: [_jsx("b", { children: "Problema:" }), " Se identifica un potencial en digitalizaci\u00F3n de procesos de la cadena de valor inmobiliaria para bancas tradicionales."] })),
            (_jsxs(_Fragment, { children: [_jsx("b", { children: "Exploraci\u00F3n:" }), " B\u00FAsqueda en el mercado de soluciones existentes para implementar."] })),
            (_jsxs(_Fragment, { children: [_jsx("b", { children: "Revelaci\u00F3n:" }), " No hay una soluci\u00F3n a la medida que cubra las necesidades de la industria y la regi\u00F3n."] })),
        ],
    },
    {
        year: "2023",
        title: "Desarrollo propio",
        icon: _jsx(Rocket, { size: 28 }),
        items: [
            (_jsxs(_Fragment, { children: [_jsx("b", { children: "Construcci\u00F3n:" }), " Desarrollo de un marketplace de inversiones inicial con un tech stack especializado."] })),
            (_jsxs(_Fragment, { children: [_jsx("b", { children: "Colaboraci\u00F3n:" }), " Charlas y alineamiento con actores del negocio tradicional."] })),
            (_jsxs(_Fragment, { children: [_jsx("b", { children: "Validaci\u00F3n:" }), " Usuarios finales est\u00E1n de acuerdo en el problema global y la necesidad de soluciones."] })),
        ],
    },
    {
        year: "2024",
        title: "Nacimiento de DIS",
        icon: _jsx(Network, { size: 28 }),
        items: [
            (_jsxs(_Fragment, { children: [_jsx("b", { children: "Independencia:" }), " Se decide crear una empresa nueva especializada en desarrollo de soluciones tecnol\u00F3gicas."] })),
            (_jsxs(_Fragment, { children: [_jsx("b", { children: "Pivot:" }), " Se identifican soluciones adicionales a implementar en el mercado."] })),
            (_jsxs(_Fragment, { children: [_jsx("b", { children: "Revoluci\u00F3n:" }), " Madurez de tecnolog\u00EDas fintech, AI y SaaS nos dan una arquitectura para soluciones robustas y especializadas."] })),
        ],
    },
    {
        year: "2025+",
        title: "Producción",
        icon: _jsx(Cpu, { size: 28 }),
        items: [
            (_jsxs(_Fragment, { children: [_jsx("b", { children: "Rollout:" }), " Implementaci\u00F3n de soluciones en operaciones con impactos positivos."] })),
            (_jsxs(_Fragment, { children: [_jsx("b", { children: "Incubadora:" }), " Se crea una cultura de innovaci\u00F3n interna y con los actores del mercado."] })),
            (_jsxs(_Fragment, { children: [_jsx("b", { children: "Monetizaci\u00F3n:" }), " Eficiencias directas en operaciones que usan las soluciones."] })),
        ],
    },
];
const HistoriaDIS = () => {
    const theme = useTheme();
    const [angle, setAngle] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const startX = useRef(0);
    const currentAngle = useRef(0);
    useEffect(() => {
        if (isPaused || isDragging)
            return;
        const interval = setInterval(() => {
            setAngle((prev) => prev - 0.3); // velocidad
            currentAngle.current -= 0.3;
        }, 50);
        return () => clearInterval(interval);
    }, [isPaused, isDragging]);
    const handleMouseDown = (e) => {
        setIsDragging(true);
        setIsPaused(true);
        startX.current = e.clientX;
    };
    const handleMouseMove = (e) => {
        if (!isDragging)
            return;
        const delta = e.clientX - startX.current;
        setAngle(currentAngle.current + delta * 0.3);
    };
    const handleMouseUp = () => {
        setIsDragging(false);
        currentAngle.current = angle;
        setTimeout(() => setIsPaused(false), 1000);
    };
    const handleTouchStart = (e) => {
        setIsDragging(true);
        setIsPaused(true);
        startX.current = e.touches[0].clientX;
    };
    const handleTouchMove = (e) => {
        if (!isDragging)
            return;
        const delta = e.touches[0].clientX - startX.current;
        setAngle(currentAngle.current + delta * 0.3);
    };
    const handleTouchEnd = () => {
        setIsDragging(false);
        currentAngle.current = angle;
        setTimeout(() => setIsPaused(false), 3000);
    };
    return (_jsx(Box, { sx: {
            position: "relative",
            height: 450,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            perspective: "2000px",
            overflow: "hidden",
            cursor: isDragging ? "grabbing" : "grab",
            userSelect: "none",
        }, onMouseDown: handleMouseDown, onMouseMove: handleMouseMove, onMouseUp: handleMouseUp, onMouseLeave: handleMouseUp, onTouchStart: handleTouchStart, onTouchMove: handleTouchMove, onTouchEnd: handleTouchEnd, children: _jsx(Box, { sx: {
                position: "relative",
                width: 700,
                height: 200,
                transformStyle: "preserve-3d",
                transform: `rotateY(${angle}deg)`,
                transition: isDragging ? "none" : "transform 0.3s ease-out",
            }, children: timeline.map((item, i) => (_jsxs(Box, { className: "timeline-card", sx: {
                    position: "absolute",
                    top: "-40px",
                    left: "15%",
                    width: 420,
                    p: "16px 22px",
                    background: `linear-gradient(350deg, ${alpha(theme.palette.secondary.main, 0.7)}, ${alpha(theme.palette.primary.main, 0.7)})`,
                    borderRadius: 3,
                    backdropFilter: "blur(6px)",
                    color: theme.palette.text.primary,
                    transform: `rotateY(${i * (360 / timeline.length)}deg) translateZ(350px)`,
                    boxShadow: "0 0 20px rgba(0,255,200,0.2)",
                    transition: "all 0.4s ease",
                    display: "flex",
                    flexDirection: "column",
                    "&:hover": {
                        transform: `rotateY(${i * (360 / timeline.length)}deg) translateZ(370px) scale(1.05)`,
                        boxShadow: "0 0 40px rgba(0,255,200,0.4)",
                    },
                }, children: [_jsxs(Stack, { direction: "row", alignItems: "center", justifyContent: "space-between", sx: { mb: 2 }, children: [_jsxs(Box, { children: [_jsx(Typography, { variant: "h6", sx: { fontWeight: 700, lineHeight: 1, mb: 0.3 }, children: item.year }), _jsx(Typography, { variant: "subtitle2", sx: { opacity: 0.9 }, children: item.title })] }), _jsx(Avatar, { sx: {
                                    background: "radial-gradient(circle, #00ffc8 0%, rgba(0,255,200,0.15) 70%)",
                                    width: 50,
                                    height: 50,
                                }, children: cloneElement(item.icon, { color: theme.palette.text.primary }) })] }), _jsx(Stack, { spacing: 0.8, children: item.items.map((text, idx) => (_jsx(Paper, { elevation: 0, sx: {
                                p: "6px 10px",
                                borderRadius: 3,
                                backgroundColor: alpha(theme.palette.background.paper, 0.15),
                                border: `1px solid ${alpha(theme.palette.text.primary, 0.1)}`,
                            }, children: _jsx(Typography, { variant: "body2", sx: { opacity: 0.85 }, children: text }) }, idx))) })] }, i))) }) }));
};
export default HistoriaDIS;
