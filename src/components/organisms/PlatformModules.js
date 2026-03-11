import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SolutionTabs from "../molecules/SolutionTabs";
import SolutionImageDisplay from "../molecules/SolutionImageDisplay";
import { Database, Home, Users, BarChart3, Headphones, Gauge, Coins, Briefcase, ArrowLeftRight, Sparkles, Building2, Settings, Network, Cpu, LineChart } from "lucide-react";
const AdminModules = [
    { name: "Activos", icon: _jsx(Database, { size: 20 }), image: "/images/platform/activos.png" },
    { name: "Propiedades", icon: _jsx(Home, { size: 20 }), image: "/images/platform/propiedades.png" },
    { name: "Inversionistas", icon: _jsx(Users, { size: 20 }), image: "/images/platform/inversionistas.png" },
    { name: "Analítica e Insights", icon: _jsx(BarChart3, { size: 20 }), image: "/images/platform/analítica.png" },
    { name: "Soporte", icon: _jsx(Headphones, { size: 20 }), image: "/images/platform/soporte.png" },
];
const InversionistaModules = [
    { name: "Dashboard", icon: _jsx(Gauge, { size: 20 }), image: "/images/platform/dashboard.png" },
    { name: "Invertir", icon: _jsx(Coins, { size: 20 }), image: "/images/platform/invertir.png" },
    { name: "Portafolio", icon: _jsx(Briefcase, { size: 20 }), image: "/images/platform/portafolio.png" },
    { name: "Movimientos", icon: _jsx(ArrowLeftRight, { size: 20 }), image: "/images/platform/movimientos.png" },
];
const ValuoModules = [
    { name: "Avalúos con IA", icon: _jsx(Sparkles, { size: 20 }), image: "/images/platform/avaluos.png" },
    { name: "Comparables de Mercado", icon: _jsx(BarChart3, { size: 20 }), image: "/images/platform/comparables.png" },
    { name: "Mapas y Tendencias", icon: _jsx(Building2, { size: 20 }), image: "/images/platform/tendencias.png" },
    { name: "Reportes Inteligentes", icon: _jsx(Briefcase, { size: 20 }), image: "/images/platform/reportes.png" },
];
const ConsultoriaModules = [
    { name: "Análisis Predictivo del Cambio", icon: _jsx(LineChart, { size: 20 }), image: "/images/consultoria/analisis.svg", },
    { name: "Automatización Inteligente", icon: _jsx(Cpu, { size: 20 }), image: "/images/consultoria/automatizacion.svg", },
    { name: "Cultura y Liderazgo Digital", icon: _jsx(Network, { size: 20 }), image: "/images/consultoria/cultura.svg", },
    { name: "Estrategia de Transformación", icon: _jsx(Settings, { size: 20 }), image: "/images/consultoria/estrategia.svg", },
];
const autoDuration = 7000;
const PlatformModule = ({ role }) => {
    const modules = role === "admin"
        ? AdminModules
        : role === "inversionista"
            ? InversionistaModules : role == "valuo"
            ? ValuoModules : ConsultoriaModules;
    const [activeIndex, setActiveIndex] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % modules.length);
        }, autoDuration);
        return () => clearInterval(timer);
    }, [modules.length]);
    return (_jsx(Box, { sx: { py: 2 }, children: _jsxs(Grid, { container: true, spacing: 6, alignItems: "flex-start", justifyContent: "center", children: [_jsxs(Grid, { size: { xs: 12, md: 4 }, children: [role === "admin" && (_jsxs(_Fragment, { children: [_jsx(Typography, { variant: "h5", sx: { fontWeight: 600, color: "text.secondary" }, children: "Devise Business" }), _jsx(Typography, { variant: "body1", sx: { mb: 3, color: "text.secondary", lineHeight: 1.6 }, children: "Digitaliza y simplifica la gesti\u00F3n de inversiones en veh\u00EDculos de inversi\u00F3n, automatizando tareas clave y conectando a administradores, operadores e inversionistas para lograr eficiencia, trazabilidad y transparencia." })] })), role === "inversionista" && (_jsxs(_Fragment, { children: [_jsx(Typography, { variant: "h5", sx: { fontWeight: 600, color: "text.secondary" }, children: "Devise MarketPlace" }), _jsx(Typography, { variant: "body1", sx: { mb: 3, color: "text.secondary", lineHeight: 1.6 }, children: "Una experiencia digital completa para inversionistas: visualiza tu portafolio, conoce tus rendimientos, realiza cesiones y sigue tus inversiones en tiempo real, con total seguridad y transparencia." })] })), role === "valuo" && (_jsxs(_Fragment, { children: [_jsx(Typography, { variant: "h5", sx: { fontWeight: 600, color: "text.secondary" }, children: " Plataforma Valuo" }), _jsx(Typography, { variant: "body1", sx: { mb: 3, color: "text.secondary", lineHeight: 1.6 }, children: "Plataforma de aval\u00FAos inmobiliarios automatizados con IA que permite conocer el valor real de un inmueble en minutos. Precisa, confiable y accesible para todos." })] })), role === "consultoria" && (_jsxs(_Fragment, { children: [_jsx(Typography, { variant: "h5", sx: { fontWeight: 600, color: "text.secondary" }, children: " Transformaci\u00F3n con IA" }), _jsx(Typography, { variant: "body1", sx: { mb: 3, color: "text.secondary", lineHeight: 1.6 }, children: "Impulsamos la transformaci\u00F3n digital mediante estrategias de cambio respaldadas por inteligencia artificial, an\u00E1lisis predictivo y automatizaci\u00F3n inteligente." })] })), _jsx(SolutionTabs, { modules: modules, activeIndex: activeIndex, onSelect: setActiveIndex, autoDuration: autoDuration })] }), _jsx(Grid, { size: { xs: 12, md: 8 }, display: "flex", justifyContent: "center", children: _jsx(SolutionImageDisplay, { images: modules.map((m) => m.image), activeIndex: activeIndex }) })] }) }));
};
export default PlatformModule;
