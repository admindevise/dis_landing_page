import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Container, Typography, Grid, Card, } from "@mui/material";
const modules = [
    { title: "Activos", description: "Control del activo, valorización y trazabilidad operativa." },
    { title: "Propiedades", description: "Información, reportes y relación con el operador inmobiliario." },
    { title: "Inversionistas", description: "Gestión de portafolio, cesiones, retiros, onboarding y documentación." },
    { title: "Analítica", description: "KPIs, reportes, contabilidad espejo y auditoría regulatoria." },
    { title: "Soporte", description: "Historial, trazabilidad y comunicación con cada inversionista." }
];
const BusinessModules = () => {
    return (_jsx(Box, { sx: { py: 10 }, children: _jsxs(Container, { maxWidth: "lg", children: [_jsx(Typography, { variant: "h4", fontWeight: 700, textAlign: "center", gutterBottom: true, color: "#312478", children: "M\u00F3dulos disponibles" }), _jsxs(Typography, { variant: "body1", textAlign: "center", sx: { mb: 6, opacity: 0.8, color: "#312478" }, children: ["Cada m\u00F3dulo se licencia de manera independiente. ", _jsx("br", {}), " Solo pagas por lo que usas."] }), _jsx(Grid, { container: true, spacing: 4, justifyContent: "center", children: modules.map((m, i) => (_jsx(Grid, { size: { xs: 12, sm: 6, md: 4 }, children: _jsx(Card, { sx: {
                                height: "280px",
                                position: "relative",
                                color: "#fff",
                                borderRadius: "16px",
                                overflow: "hidden",
                                cursor: "pointer",
                                display: "flex",
                                alignItems: "flex-end",
                                p: 3,
                                transition: "all .3s ease",
                                backgroundImage: `url(/images/platform/${m.title.toLowerCase()}.png)`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                                "&::before": {
                                    content: '""',
                                    position: "absolute",
                                    inset: 0,
                                    background: "rgba(101, 91, 154,0.55)",
                                    transition: "all .3s ease"
                                },
                                "&:hover::before": {
                                    background: "rgba(101, 91, 154,0.15)",
                                },
                                "&:hover": {
                                    transform: "scale(1.03)"
                                }
                            }, children: _jsxs(Box, { sx: { position: "relative", zIndex: 2 }, children: [_jsx(Typography, { variant: "h6", fontWeight: 700, sx: { color: "#B9DE2C", mb: 1 }, children: m.title }), _jsx(Typography, { variant: "body2", sx: { opacity: 0.9 }, children: m.description })] }) }) }, i))) })] }) }));
};
export default BusinessModules;
