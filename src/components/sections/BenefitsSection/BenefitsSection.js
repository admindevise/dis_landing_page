import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Box, Grid, Typography, useTheme, useMediaQuery } from "@mui/material";
import { Settings, MessageSquare, BarChart3, Lock, SearchCheck, } from "lucide-react";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import LanIcon from "@mui/icons-material/Lan";
import SectionTitle from "../../atoms/SectionTitle";
import BenefitsBackground from "./BenefitsSectionBackground";
const benefits = [
    {
        title: "Eficiencia Operativa",
        description: "Automatiza procesos clave y reduce tiempos de gestión hasta en un 50 %. ",
        icon: _jsx(Settings, { size: 26 }),
        image: "/images/benefits/eficiencia.svg",
    },
    {
        title: "Trazabilidad y Transparencia",
        description: "Registra y audita cada transacción, garantizando control total.",
        icon: _jsx(SearchCheck, { size: 26 }),
        image: "/images/benefits/trazabilidad.svg",
    },
    {
        title: "Liquidez para Inversionistas",
        description: "Facilita la compraventa digital de participaciones y capital.",
        icon: _jsx(AutoAwesomeIcon, { sx: { fontSize: 26 } }),
        image: "/images/benefits/liquidez.svg",
    },
    {
        title: "Centralización de la Información",
        description: "Unifica datos financieros, contables y contractuales en un solo entorno.",
        icon: _jsx(LanIcon, { sx: { fontSize: 26 } }),
        image: "/images/benefits/centralizacion.svg",
    },
    {
        title: "Experiencia del Cliente",
        description: "Ofrece soporte omnicanal e inteligente en tiempo real.",
        icon: _jsx(MessageSquare, { size: 26 }),
        image: "/images/benefits/experiencia.svg",
    },
    {
        title: "Decisiones Basadas en Datos",
        description: "Analiza y gestiona tu portafolio con reportes en tiempo real.",
        icon: _jsx(BarChart3, { size: 26 }),
        image: "/images/benefits/datos.svg",
    },
    {
        title: "Seguridad y Cumplimiento",
        description: "Cumplimiento normativo y protección de datos empresariales en una infraestructura robusta.",
        icon: _jsx(Lock, { size: 26 }),
        image: "/images/benefits/seguridad.svg",
    },
];
const BenefitsSection = () => {
    const theme = useTheme();
    const [activeIndex, setActiveIndex] = useState(0);
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    return (_jsxs(Box, { sx: {
            position: "relative",
            py: 10, px: { xs: 3, md: 10 },
            overflow: "hidden",
            backgroundColor: "background.default",
        }, children: [_jsx(BenefitsBackground, {}), _jsx(SectionTitle, { title: "Beneficios que transforman tu empresa" }), _jsxs(Grid, { container: true, spacing: 1, alignItems: "center", justifyContent: "center", children: [_jsx(Grid, { size: { xs: 12, md: 4 }, children: _jsx(Box, { sx: {
                                display: "flex",
                                flexDirection: isMobile ? "row" : "column",
                                gap: isMobile ? 2 : 1,
                                overflowX: isMobile ? "auto" : "visible",
                                pb: isMobile ? 1 : 0,
                                "&::-webkit-scrollbar": { display: "none" },
                                scrollbarWidth: "none",
                            }, children: benefits.map((benefit, index) => (_jsxs(Box, { onClick: () => setActiveIndex(index), sx: {
                                    display: "flex",
                                    alignItems: "flex-start",
                                    gap: 2,
                                    p: "0.5px 0px 0.5px 10px",
                                    cursor: "pointer",
                                    minWidth: isMobile ? 200 : "auto",
                                    flex: isMobile ? "0 0 auto" : "1",
                                    transition: "all 0.3s ease",
                                    position: "relative",
                                    "&::before": {
                                        content: '""',
                                        position: "absolute",
                                        left: 0,
                                        top: 0,
                                        bottom: 0,
                                        width: "4px",
                                        borderRadius: 3,
                                        background: activeIndex === index
                                            ? "linear-gradient(180deg, #02B2B2, transparent)"
                                            : "transparent",
                                        transition: "all 0.4s ease",
                                    },
                                }, children: [_jsx(Box, { sx: {
                                            color: activeIndex === index ? theme.palette.primary.main : theme.palette.text.secondary,
                                            transition: "color 0.3s ease, transform 0.3s ease",
                                            transform: activeIndex === index ? "scale(1.1)" : "scale(1)",
                                        }, children: benefit.icon }), _jsxs(Box, { children: [_jsx(Typography, { variant: "subtitle1", sx: {
                                                    fontWeight: 600,
                                                    color: activeIndex === index ? theme.palette.primary.main : theme.palette.text.primary,
                                                }, children: benefit.title }), !isMobile && (_jsx(Typography, { variant: "body2", sx: { color: theme.palette.text.secondary, lineHeight: 1.4 }, children: benefit.description }))] })] }, index))) }) }), _jsx(Grid, { size: { xs: 12, md: 4 }, children: _jsxs(Box, { sx: {
                                position: "relative",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                width: "100%",
                                mx: "auto",
                                py: { xs: 4, md: 6 },
                                overflow: "visible",
                            }, children: [_jsx(Box, { sx: {
                                        position: "absolute",
                                        width: 240,
                                        height: 240,
                                        borderRadius: 3,
                                        background: "radial-gradient(circle at center, rgba(0,229,255,0.25) 0%, rgba(0,229,255,0.05) 70%, transparent 100%)",
                                        filter: "blur(40px)",
                                        animation: "moveGlow 3s ease-in-out infinite",
                                        zIndex: 1,
                                        "@keyframes moveGlow": {
                                            "0%": {
                                                transform: "translate(-15px, -10px) scale(1)",
                                                opacity: 0.6,
                                            },
                                            "25%": {
                                                transform: "translate(10px, 15px) scale(1.1)",
                                                opacity: 0.9,
                                            },
                                            "50%": {
                                                transform: "translate(15px, -15px) scale(1.05)",
                                                opacity: 0.7,
                                            },
                                            "75%": {
                                                transform: "translate(-10px, 10px) scale(1.1)",
                                                opacity: 0.85,
                                            },
                                            "100%": {
                                                transform: "translate(-15px, -10px) scale(1)",
                                                opacity: 0.6,
                                            },
                                        },
                                    } }), _jsx(Box, { sx: {
                                        position: "absolute",
                                        width: 320,
                                        height: 320,
                                        borderRadius: 3,
                                        background: "radial-gradient(circle at center, rgba(0,229,255,0.15) 0%, transparent 80%)",
                                        filter: "blur(80px)",
                                        animation: "pulse 2s ease-in-out infinite",
                                        "@keyframes pulse": {
                                            "0%, 100%": { opacity: 0.4 },
                                            "50%": { opacity: 0.7 },
                                        },
                                        zIndex: 0,
                                    } }), _jsx(Box, { component: "img", src: benefits[activeIndex].image, alt: benefits[activeIndex].title, sx: {
                                        width: { xs: 220, md: 280 },
                                        height: "auto",
                                        position: "relative",
                                        zIndex: 2,
                                        filter: "drop-shadow(0 0 8px rgba(0,229,255,0.4)) drop-shadow(0 0 20px rgba(0,229,255,0.2))",
                                        transition: "transform 0.8s ease, filter 0.8s ease",
                                        "&:hover": {
                                            transform: "scale(1.08)",
                                            filter: "drop-shadow(0 0 20px rgba(0,229,255,0.6)) drop-shadow(0 0 40px rgba(0,229,255,0.3))",
                                        },
                                    } })] }) })] })] }));
};
export default BenefitsSection;
