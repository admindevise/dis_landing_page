import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Container, Grid, Typography } from '@mui/material';
import { alpha } from '@mui/material/styles';
const ConsultingModules = () => {
    const modules = [
        {
            title: "Arquitectura de Datos e IA",
            badge: "Escalabilidad: Enterprise-Grade",
            copy: "Diseñamos e implementamos infraestructuras de datos modernas y escalables. Integramos múltiples fuentes, establecemos pipelines robustos, garantizamos calidad, trazabilidad y gobernanza. Preparamos tu ecosistema tecnológico para soportar casos de uso avanzados de IA y analytics en tiempo real.",
        },
        {
            title: "Desarrollo de Modelos Predictivos",
            badge: "Optimización: +90% precisión promedio",
            copy: "Construimos modelos de machine learning y deep learning personalizados para tu industria: sistemas de predicción, clasificación inteligente, análisis de riesgo, detección de anomalías, recomendación personalizada y más. Soluciones ajustadas a tus datos, procesos y objetivos estratégicos.",
        },
        {
            title: "Automatización Inteligente de Procesos",
            badge: "Eficiencia Operativa: 40–70%",
            copy: "Reemplazamos operaciones manuales y repetitivas con automatización cognitiva avanzada. Implementamos RPA inteligente, asistentes virtuales, procesamiento de lenguaje natural y orquestación de flujos complejos. Liberamos capacidad humana para actividades de mayor valor estratégico.",
        },
    ];
    return (_jsx(Box, { sx: (theme) => ({
            py: 12,
            background: theme.palette.background.paper
        }), children: _jsxs(Container, { maxWidth: "lg", children: [_jsxs(Box, { sx: {
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "baseline",
                        mb: 6,
                        gap: 2,
                    }, children: [_jsx(Typography, { sx: (theme) => ({
                                fontSize: 14,
                                letterSpacing: "0.18em",
                                textTransform: "uppercase",
                                color: theme.palette.info.light, // azul frío brillante
                            }), children: "M\u00D3DULOS CENTRALES" }), _jsx(Typography, { sx: (theme) => ({
                                fontSize: 10,
                                letterSpacing: "0.22em",
                                textTransform: "uppercase",
                                color: theme.palette.primary.light,
                            }), children: "DISPONIBILIDAD DEL SISTEMA: 100%" })] }), _jsx(Grid, { container: true, spacing: 4, children: modules.map((mod, i) => (_jsx(Grid, { size: { xs: 12, md: 4 }, children: _jsxs(Box, { sx: (theme) => ({
                                borderRadius: 2,
                                px: 3,
                                py: 4,
                                bgcolor: theme.palette.background.paper,
                                border: `1px solid ${alpha(theme.palette.text.secondary, 0.35)}`,
                                boxShadow: "0 18px 35px rgba(0,0,0,0.55)",
                                height: "100%",
                                position: "relative",
                                overflow: "hidden",
                                "&::before": {
                                    content: '""',
                                    position: "absolute",
                                    inset: 0,
                                    background: "linear-gradient(140deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 40%)",
                                    opacity: 0.55,
                                    pointerEvents: "none",
                                },
                                transition: "all 0.35s ease",
                                "&:hover": {
                                    transform: "translateY(-6px)",
                                    boxShadow: "0 26px 55px rgba(0,0,0,0.75)",
                                    borderColor: alpha(theme.palette.primary.light, 0.7),
                                },
                            }), children: [_jsx(Box, { sx: (theme) => ({
                                        width: 28,
                                        height: 28,
                                        borderRadius: "50%",
                                        mb: 2,
                                        backgroundImage: i === 0
                                            ? `linear-gradient(135deg, ${theme.palette.primary.light}, ${theme.palette.info.light})`
                                            : i === 1
                                                ? `linear-gradient(135deg, ${theme.palette.info.light}, ${theme.palette.primary.main})`
                                                : `linear-gradient(135deg, ${theme.palette.info.dark}, ${theme.palette.primary.light})`,
                                        boxShadow: `0 0 14px ${alpha(theme.palette.info.light, 0.9)}`,
                                    }) }), _jsx(Typography, { sx: (theme) => ({
                                        fontSize: 13,
                                        letterSpacing: "0.16em",
                                        textTransform: "uppercase",
                                        color: theme.palette.text.primary,
                                        mb: 1,
                                        fontWeight: 600,
                                    }), children: mod.title }), _jsx(Typography, { sx: (theme) => ({
                                        fontSize: 11,
                                        letterSpacing: "0.16em",
                                        textTransform: "uppercase",
                                        color: theme.palette.primary.light,
                                        mb: 2,
                                        fontWeight: 500,
                                    }), children: mod.badge }), _jsx(Typography, { sx: (theme) => ({
                                        fontSize: 13,
                                        color: theme.palette.text.secondary,
                                        lineHeight: 1.6,
                                    }), children: mod.copy })] }) }, mod.title))) })] }) }));
};
export default ConsultingModules;
