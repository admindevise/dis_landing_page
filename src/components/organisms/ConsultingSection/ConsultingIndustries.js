import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Container, Typography } from '@mui/material';
import { alpha } from '@mui/material/styles';
import { Building2, Landmark, ShoppingBag, Factory, Heart, GraduationCap } from 'lucide-react';
const ConsultingIndustries = () => {
    const industries = [
        {
            icon: _jsx(Building2, { size: 28 }),
            name: 'Inmobiliario',
            description: 'Valuación automatizada, análisis de mercado, gestión de activos',
        },
        {
            icon: _jsx(Landmark, { size: 28 }),
            name: 'Financiero',
            description: 'Scoring crediticio, detección de fraude, gestión de riesgos',
        },
        {
            icon: _jsx(ShoppingBag, { size: 28 }),
            name: 'Retail & E-commerce',
            description: 'Predicción de demanda, personalización, optimización de inventario',
        },
        {
            icon: _jsx(Factory, { size: 28 }),
            name: 'Manufactura',
            description: 'Mantenimiento predictivo, control de calidad, optimización de producción',
        },
        {
            icon: _jsx(Heart, { size: 28 }),
            name: 'Salud',
            description: 'Diagnóstico asistido, análisis de imagen médica, gestión hospitalaria',
        },
        {
            icon: _jsx(GraduationCap, { size: 28 }),
            name: 'Educación',
            description: 'Personalización de aprendizaje, análisis de rendimiento, automatización administrativa',
        },
    ];
    return (_jsx(Box, { sx: (theme) => ({
            py: 12,
            background: `linear-gradient(180deg, ${theme.palette.background.paper} 0%, ${theme.palette.background.default} 100%)`,
        }), children: _jsxs(Container, { maxWidth: "lg", children: [_jsxs(Box, { sx: { textAlign: 'center', mb: 8 }, children: [_jsx(Typography, { sx: (theme) => ({
                                color: theme.palette.primary.light,
                                letterSpacing: '0.18em',
                                textTransform: 'uppercase',
                                fontSize: 12,
                                mb: 2,
                            }), children: "// EXPERTISE MULTISECTORIAL" }), _jsx(Typography, { variant: "h3", sx: (theme) => ({
                                fontWeight: 800,
                                mb: 2,
                                color: theme.palette.text.primary,
                            }), children: "Industrias que transformamos" }), _jsx(Typography, { variant: "body1", sx: (theme) => ({
                                color: theme.palette.text.secondary,
                                maxWidth: 700,
                                mx: 'auto',
                                fontSize: '1.05rem',
                                lineHeight: 1.7,
                            }), children: "Experiencia comprobada implementando soluciones de IA en diversos sectores, adaptando metodolog\u00EDas y tecnolog\u00EDas a las necesidades espec\u00EDficas de cada industria." })] }), _jsx(Box, { sx: {
                        display: 'grid',
                        gridTemplateColumns: {
                            xs: '1fr',
                            sm: 'repeat(2, 1fr)',
                            md: 'repeat(3, 1fr)',
                        },
                        gap: 3,
                    }, children: industries.map((industry, index) => (_jsxs(Box, { sx: (theme) => ({
                            p: 4,
                            borderRadius: 3,
                            background: theme.palette.background.paper,
                            border: `1px solid ${alpha(theme.palette.text.secondary, 0.15)}`,
                            transition: 'all 0.3s ease',
                            position: 'relative',
                            overflow: 'hidden',
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.05)} 0%, transparent 50%)`,
                                opacity: 0,
                                transition: 'opacity 0.3s ease',
                            },
                            '&:hover': {
                                transform: 'translateY(-4px)',
                                boxShadow: `0 12px 24px ${alpha(theme.palette.primary.main, 0.15)}`,
                                border: `1px solid ${alpha(theme.palette.primary.main, 0.3)}`,
                                '&::before': {
                                    opacity: 1,
                                },
                                '& .industry-icon': {
                                    transform: 'scale(1.1)',
                                    background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
                                    color: '#fff',
                                },
                            },
                        }), children: [_jsx(Box, { className: "industry-icon", sx: (theme) => ({
                                    width: 56,
                                    height: 56,
                                    borderRadius: 2,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    mb: 2.5,
                                    background: alpha(theme.palette.primary.main, 0.1),
                                    color: theme.palette.primary.main,
                                    transition: 'all 0.3s ease',
                                    position: 'relative',
                                    zIndex: 1,
                                }), children: industry.icon }), _jsx(Typography, { variant: "h6", sx: (theme) => ({
                                    fontWeight: 700,
                                    mb: 1.5,
                                    color: theme.palette.text.primary,
                                    position: 'relative',
                                    zIndex: 1,
                                    fontSize: '1.05rem',
                                }), children: industry.name }), _jsx(Typography, { variant: "body2", sx: (theme) => ({
                                    color: theme.palette.text.secondary,
                                    lineHeight: 1.7,
                                    position: 'relative',
                                    zIndex: 1,
                                    fontSize: '0.9rem',
                                }), children: industry.description })] }, index))) })] }) }));
};
export default ConsultingIndustries;
