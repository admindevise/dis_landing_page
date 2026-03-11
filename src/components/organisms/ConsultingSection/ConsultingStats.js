import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Container, Typography } from '@mui/material';
import { alpha } from '@mui/material/styles';
import { CheckCircle2 } from 'lucide-react';
const ConsultingStats = () => {
    const stats = [
        {
            number: '40-70%',
            label: 'Reducción de costos operativos',
            description: 'En automatización de procesos críticos',
        },
        {
            number: '10x',
            label: 'Velocidad en ejecución',
            description: 'De días a minutos en operaciones clave',
        },
        {
            number: '95%+',
            label: 'Precisión en predicciones',
            description: 'Modelos de ML ajustados a tu sector',
        },
        {
            number: '<6 meses',
            label: 'Time-to-value',
            description: 'ROI medible desde las primeras fases',
        },
    ];
    const achievements = [
        'Más de 50 proyectos de IA implementados exitosamente',
        'Clientes en 8 países de América Latina',
        'Equipo con certificaciones en AWS, Azure y Google Cloud',
        'Expertise en Python, TensorFlow, PyTorch y frameworks modernos de ML',
        'Metodologías ágiles adaptadas a proyectos de datos e IA',
        'Cumplimiento con regulaciones de privacidad y protección de datos',
    ];
    return (_jsxs(Box, { sx: (theme) => ({
            py: 12,
            background: theme.palette.background.paper,
            position: 'relative',
            overflow: 'hidden',
        }), children: [_jsx(Box, { sx: (theme) => ({
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 2,
                    background: `linear-gradient(90deg, transparent, ${theme.palette.primary.main}, transparent)`,
                }) }), _jsxs(Container, { maxWidth: "lg", children: [_jsx(Box, { sx: {
                            display: 'grid',
                            gridTemplateColumns: {
                                xs: '1fr',
                                sm: 'repeat(2, 1fr)',
                                md: 'repeat(4, 1fr)',
                            },
                            gap: 4,
                            mb: 10,
                        }, children: stats.map((stat, index) => (_jsxs(Box, { sx: (theme) => ({
                                textAlign: 'center',
                                p: 4,
                                borderRadius: 3,
                                background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.05)} 0%, transparent 100%)`,
                                border: `1px solid ${alpha(theme.palette.primary.main, 0.15)}`,
                                position: 'relative',
                                overflow: 'hidden',
                                transition: 'all 0.3s ease',
                                '&::before': {
                                    content: '""',
                                    position: 'absolute',
                                    top: -2,
                                    left: -2,
                                    right: -2,
                                    bottom: -2,
                                    background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.info.light})`,
                                    borderRadius: 3,
                                    opacity: 0,
                                    transition: 'opacity 0.3s ease',
                                    zIndex: 0,
                                },
                                '&:hover': {
                                    transform: 'translateY(-4px)',
                                    '&::before': {
                                        opacity: 0.1,
                                    },
                                },
                            }), children: [_jsx(Typography, { sx: (theme) => ({
                                        fontSize: { xs: '2.2rem', md: '2.8rem' },
                                        fontWeight: 800,
                                        background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        mb: 1,
                                        position: 'relative',
                                        zIndex: 1,
                                    }), children: stat.number }), _jsx(Typography, { sx: (theme) => ({
                                        fontSize: '1rem',
                                        fontWeight: 700,
                                        color: theme.palette.text.primary,
                                        mb: 0.5,
                                        position: 'relative',
                                        zIndex: 1,
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.05em',
                                    }), children: stat.label }), _jsx(Typography, { sx: (theme) => ({
                                        fontSize: '0.85rem',
                                        color: theme.palette.text.secondary,
                                        position: 'relative',
                                        zIndex: 1,
                                        lineHeight: 1.6,
                                    }), children: stat.description })] }, index))) }), _jsxs(Box, { sx: {
                            maxWidth: 900,
                            mx: 'auto',
                        }, children: [_jsxs(Box, { sx: { textAlign: 'center', mb: 6 }, children: [_jsx(Typography, { sx: (theme) => ({
                                            color: theme.palette.info.light,
                                            letterSpacing: '0.18em',
                                            textTransform: 'uppercase',
                                            fontSize: 12,
                                            mb: 2,
                                        }), children: "// CREDENCIALES VERIFICABLES" }), _jsx(Typography, { variant: "h4", sx: (theme) => ({
                                            fontWeight: 800,
                                            color: theme.palette.text.primary,
                                            mb: 2,
                                        }), children: "Track record comprobado" })] }), _jsx(Box, { sx: {
                                    display: 'grid',
                                    gridTemplateColumns: {
                                        xs: '1fr',
                                        md: 'repeat(2, 1fr)',
                                    },
                                    gap: 3,
                                }, children: achievements.map((achievement, index) => (_jsxs(Box, { sx: {
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        gap: 2,
                                    }, children: [_jsx(CheckCircle2, { size: 20, style: {
                                                flexShrink: 0,
                                                marginTop: 2,
                                            }, color: "#3B6EA8" }), _jsx(Typography, { variant: "body2", sx: (theme) => ({
                                                color: theme.palette.text.secondary,
                                                lineHeight: 1.7,
                                                fontSize: '0.95rem',
                                            }), children: achievement })] }, index))) })] })] })] }));
};
export default ConsultingStats;
