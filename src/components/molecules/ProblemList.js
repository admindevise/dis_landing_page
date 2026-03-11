import { jsx as _jsx } from "react/jsx-runtime";
import { Grid } from "@mui/material";
import ProblemCard from "./ProblemCard";
import { BarChart3, FileText, HandCoins, Settings, MessageCircle, Eye } from "lucide-react";
const problems = [
    {
        icon: _jsx(FileText, {}),
        title: "Procesos manuales y lentos",
        description: "Gran parte de la gestión administrativa sigue siendo manual, generando demoras y errores operativos.",
    },
    {
        icon: _jsx(BarChart3, {}),
        title: "Falta de trazabilidad y control",
        description: "La información está dispersa entre actores, dificultando auditorías y reduciendo la confianza.",
    },
    {
        icon: _jsx(HandCoins, {}),
        title: "Mercado sin liquidez",
        description: "Los inversionistas no pueden vender fácilmente sus participaciones, limitando la rotación de capital.",
    },
    {
        icon: _jsx(Settings, {}),
        title: "Contabilidad y Back Office ineficiente",
        description: "Operaciones contables, reportes y comunicaciones funcionan por separado, aumentando reprocesos.",
    },
    {
        icon: _jsx(MessageCircle, {}),
        title: "Atención al cliente ineficiente",
        description: "La experiencia del cliente es dispersa, poco agil y sin opciones de autogestion, resultando en una comunicación fragmentada.",
    },
    {
        icon: _jsx(Eye, {}),
        title: "Toma de desiciones improductiva",
        description: "La falta de reportes y analítica en tiempo real limita la toma de decisiones estratégicas.",
    },
];
const ProblemList = () => (_jsx(Grid, { container: true, spacing: 3, justifyContent: "center", children: problems.map((p, index) => (_jsx(Grid, { children: _jsx(ProblemCard, { icon: p.icon, title: p.title, description: p.description }) }, index))) }));
export default ProblemList;
