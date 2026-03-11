import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Container, Typography, Grid } from '@mui/material';
import { alpha } from '@mui/material/styles';
import { TrendingUp, Shield, Zap, Target, Brain, Rocket } from 'lucide-react';
const ConsultingBenefits = () => {
    const benefits = [
        {
            icon: _jsx(Brain, { size: 32 }),
            title: 'Decisiones Basadas en Datos',
            description: 'Transforma datos históricos y en tiempo real en insights accionables. Modelos predictivos que anticipan tendencias, identifican riesgos y optimizan estrategias comerciales.',
            gradient: 'linear-gradient(135deg, #3B6EA8 0%, #2196F3 100%)',
        },
        {
            icon: _jsx(Zap, { size: 32 }),
            title: 'Velocidad Operativa 10x',
            description: 'Automatización de procesos críticos que reduce tiempos de ejecución de días a minutos. Libera recursos humanos para actividades estratégicas de alto valor.',
            gradient: 'linear-gradient(135deg, #2196F3 0%, #00BCD4 100%)',
        },
        {
            icon: _jsx(Target, { size: 32 }),
            title: 'Precisión y Consistencia',
            description: 'Elimina errores humanos en operaciones repetitivas. Sistemas que aprenden y mejoran continuamente, garantizando resultados predecibles y trazables.',
            gradient: 'linear-gradient(135deg, #00BCD4 0%, #3B6EA8 100%)',
        },
        {
            icon: _jsx(TrendingUp, { size: 32 }),
            title: 'ROI Medible y Sostenible',
            description: 'Métricas claras de impacto desde la primera fase. Seguimiento continuo de KPIs operativos, financieros y estratégicos para validar retorno de inversión.',
            gradient: 'linear-gradient(135deg, #3B6EA8 0%, #1976D2 100%)',
        },
        {
            icon: _jsx(Shield, { size: 32 }),
            title: 'Escalabilidad Garantizada',
            description: 'Arquitecturas diseñadas para crecer con tu negocio. Infraestructuras cloud-native que soportan aumentos exponenciales de volumen sin degradación de performance.',
            gradient: 'linear-gradient(135deg, #1976D2 0%, #2196F3 100%)',
        },
        {
            icon: _jsx(Rocket, { size: 32 }),
            title: 'Ventaja Competitiva',
            description: 'Diferenciación real en mercados saturados. Capacidades tecnológicas que tus competidores tardarán años en desarrollar internamente.',
            gradient: 'linear-gradient(135deg, #2196F3 0%, #3B6EA8 100%)',
        },
    ];
    return (_jsxs(Box, { sx: (theme) => ({
            py: 12,
            position: 'relative',
            background: theme.palette.background.default,
            overflow: 'hidden',
        }), children: [_jsx(Box, { sx: (theme) => ({
                    position: 'absolute',
                    top: '10%',
                    right: '-10%',
                    width: 500,
                    height: 500,
                    borderRadius: '50%',
                    background: `radial-gradient(circle, ${alpha(theme.palette.primary.main, 0.08)} 0%, transparent 70%)`,
                    filter: 'blur(80px)',
                }) }), _jsx(Box, { sx: (theme) => ({
                    position: 'absolute',
                    bottom: '10%',
                    left: '-10%',
                    width: 500,
                    height: 500,
                    borderRadius: '50%',
                    background: `radial-gradient(circle, ${alpha(theme.palette.info.light, 0.06)} 0%, transparent 70%)`,
                    filter: 'blur(80px)',
                }) }), _jsxs(Container, { maxWidth: "lg", sx: { position: 'relative' }, children: [_jsxs(Box, { sx: { textAlign: 'center', mb: 8 }, children: [_jsx(Typography, { sx: (theme) => ({
                                    color: theme.palette.info.light,
                                    letterSpacing: '0.18em',
                                    textTransform: 'uppercase',
                                    fontSize: 12,
                                    mb: 2,
                                }), children: "// RESULTADOS TANGIBLES" }), _jsx(Typography, { variant: "h3", sx: (theme) => ({
                                    fontWeight: 800,
                                    mb: 2,
                                    background: `linear-gradient(90deg, ${theme.palette.text.primary}, ${theme.palette.primary.main})`,
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                }), children: "\u00BFPor qu\u00E9 transformar con IA?" }), _jsx(Typography, { variant: "body1", sx: (theme) => ({
                                    color: theme.palette.text.secondary,
                                    maxWidth: 700,
                                    mx: 'auto',
                                    fontSize: '1.05rem',
                                    lineHeight: 1.7,
                                }), children: "La inteligencia artificial no es una tendencia tecnol\u00F3gica m\u00E1s: es una ventaja competitiva cr\u00EDtica que redefine c\u00F3mo operan los negocios l\u00EDderes." })] }), _jsx(Grid, { container: true, spacing: 4, children: benefits.map((benefit, index) => (_jsx(Grid, { size: { xs: 12, md: 6, lg: 4 }, children: _jsxs(Box, { sx: (theme) => ({
                                    height: '100%',
                                    p: 4,
                                    borderRadius: 3,
                                    background: theme.palette.background.paper,
                                    border: `1px solid ${alpha(theme.palette.text.secondary, 0.2)}`,
                                    position: 'relative',
                                    overflow: 'hidden',
                                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                    cursor: 'pointer',
                                    '&::before': {
                                        content: '""',
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        height: 3,
                                        background: benefit.gradient,
                                        transform: 'scaleX(0)',
                                        transformOrigin: 'left',
                                        transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                    },
                                    '&:hover': {
                                        transform: 'translateY(-8px)',
                                        boxShadow: `0 20px 40px ${alpha(theme.palette.primary.main, 0.2)}`,
                                        border: `1px solid ${alpha(theme.palette.primary.main, 0.4)}`,
                                        '&::before': {
                                            transform: 'scaleX(1)',
                                        },
                                        '& .benefit-icon': {
                                            transform: 'scale(1.1) rotate(5deg)',
                                            background: benefit.gradient,
                                            color: theme.palette.common.white,
                                        },
                                    },
                                }), children: [_jsx(Box, { className: "benefit-icon", sx: (theme) => ({
                                            width: 60,
                                            height: 60,
                                            borderRadius: 2,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            mb: 3,
                                            background: alpha(theme.palette.primary.main, 0.1),
                                            color: theme.palette.primary.main,
                                            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                        }), children: benefit.icon }), _jsx(Typography, { variant: "h6", sx: (theme) => ({
                                            fontWeight: 700,
                                            mb: 2,
                                            color: theme.palette.text.primary,
                                            fontSize: '1.1rem',
                                        }), children: benefit.title }), _jsx(Typography, { variant: "body2", sx: (theme) => ({
                                            color: theme.palette.text.secondary,
                                            lineHeight: 1.8,
                                            fontSize: '0.95rem',
                                        }), children: benefit.description })] }) }, index))) })] })] }));
};
export default ConsultingBenefits;
