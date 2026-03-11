import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Grid } from "@mui/material";
import { TrendingUp, AccountBalance, Domain, BusinessCenter, People } from "@mui/icons-material";
import { motion } from "framer-motion";
import SectionTitle from "../atoms/SectionTitle";
import ProblemCard from "../molecules/ProblemCard";
const personas = [
    {
        title: "Operadores Inmobiliarios",
        desc: "Digitalizan la gestión de fideicomisos, automatizan procesos y fortalecen la trazabilidad operativa.",
        icon: _jsx(AccountBalance, {}),
    },
    {
        title: "Gestores de activos",
        desc: "Gestionan portafolios con herramientas analíticas, reportes financieros y liquidez en el mercado.",
        icon: _jsx(BusinessCenter, {}),
    },
    {
        title: "Gestores y operadores inmobiliarios",
        desc: "Centralizan activos, contratos y rentas en plataformas digitales que optimizan la rentabilidad.",
        icon: _jsx(Domain, {}),
    },
    {
        title: "Empresas y grupos corporativos",
        desc: "Modernizan su operación inmobiliaria y garantizan cumplimiento normativo con trazabilidad digital.",
        icon: _jsx(People, {}),
    },
    {
        title: "Inversionistas",
        desc: "Acceden a un ecosistema más transparente, con información en tiempo real y operaciones seguras.",
        icon: _jsx(TrendingUp, {}),
    },
];
const AnimatedCube = ({ delay }) => {
    const size = Math.random() * 50 + 40;
    const left = Math.random() * 100;
    const duration = 20 + Math.random() * 15;
    return (_jsx(motion.div, { style: {
            position: "absolute",
            width: size,
            height: size,
            border: "1px solid rgba(0,255,200,0.1)",
            background: "linear-gradient(135deg, rgba(0,255,200,0.05), rgba(255,255,255,0.02))",
            borderRadius: 6,
            transformStyle: "preserve-3d",
            left: `${left}%`,
            bottom: -60,
            zIndex: 0,
        }, initial: { y: 0, opacity: 0 }, animate: {
            y: [-20, -600],
            rotateX: [0, 360],
            rotateY: [0, 360],
            opacity: [0, 0.6, 0],
        }, transition: {
            duration,
            delay,
            repeat: Infinity,
            ease: "linear",
        } }));
};
const TargetSection = () => {
    return (_jsxs(Box, { sx: {
            py: 12,
            px: 4,
            position: "relative",
            overflow: "hidden",
        }, children: [[...Array(8)].map((_, i) => (_jsx(AnimatedCube, { delay: i * 2 }, i))), _jsx(motion.div, { initial: { opacity: 0, y: 40 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, viewport: { once: true }, children: _jsx(SectionTitle, { title: "Desarrollamos productos para quienes hacen posible la inversi\u00F3n", subtitle: "Desde nuestro laboratorio creamos tecnolog\u00EDa que une a todos los actores del ecosistema financiero e inmobiliario, optimizando la gesti\u00F3n, la inversi\u00F3n y la rentabilidad." }) }), _jsx(Grid, { container: true, spacing: 3, justifyContent: "center", children: personas.map((p, i) => (_jsx(Grid, { children: _jsx(ProblemCard, { icon: p.icon, title: p.title, description: p.desc }) }, i))) })] }));
};
export default TargetSection;
