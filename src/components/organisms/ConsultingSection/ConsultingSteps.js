import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Container, Typography } from '@mui/material';
import { alpha } from '@mui/material/styles';
const ConsultingSteps = () => {
    const methodologySteps = [
        {
            id: '01',
            title: 'DIAGNÓSTICO ESTRATÉGICO',
            body: 'Realizamos un análisis profundo de tus operaciones, procesos críticos y ecosistema de datos. Mapeamos flujos de trabajo, identificamos cuellos de botella y detectamos oportunidades de alto impacto donde la IA puede generar valor inmediato y diferenciación competitiva.',
            side: 'right',
        },
        {
            id: '02',
            title: 'DISEÑO E IMPLEMENTACIÓN',
            body: 'Desarrollamos e integramos soluciones de IA personalizadas: modelos predictivos, automatización de procesos, sistemas de recomendación y análisis avanzado. Nos conectamos con tu infraestructura tecnológica existente para minimizar fricción, asegurar adopción efectiva y maximizar ROI.',
            side: 'left',
        },
        {
            id: '03',
            title: 'OPTIMIZACIÓN CONTINUA',
            body: 'Establecemos ciclos de monitoreo, evaluación y mejora permanente. Implementamos mecanismos de aprendizaje automático que permiten a tus sistemas evolucionar, adaptarse a nuevos patrones y optimizar resultados de forma autónoma, generando valor creciente en el tiempo.',
            side: 'right',
        },
    ];
    return (_jsx(Box, { sx: { py: { xs: 8, md: 12 } }, children: _jsxs(Container, { maxWidth: "lg", children: [_jsxs(Box, { sx: {
                        maxWidth: 900,
                        mx: 'auto',
                        mb: { xs: 6, md: 8 },
                        textAlign: 'center',
                    }, children: [_jsx(Typography, { sx: (theme) => ({
                                color: theme.palette.info.light,
                                letterSpacing: '0.18em',
                                textTransform: 'uppercase',
                                fontSize: 12,
                                mb: 1.5,
                            }), children: "// SECUENCIA DE IMPLEMENTACI\u00D3N" }), _jsx(Typography, { variant: "h4", sx: (theme) => ({
                                fontWeight: 700,
                                color: theme.palette.text.primary,
                                mb: 1.5,
                            }), children: "Metodolog\u00EDa de consultor\u00EDa en IA" }), _jsx(Typography, { variant: "body1", sx: (theme) => ({
                                color: theme.palette.text.secondary,
                                maxWidth: 700,
                                mx: 'auto',
                                fontSize: '1rem',
                                lineHeight: 1.7,
                            }), children: "Transformamos la complejidad de la adopci\u00F3n de IA en un proceso estructurado, medible y escalable. Nuestra metodolog\u00EDa probada reduce riesgos, acelera implementaci\u00F3n y asegura retorno de inversi\u00F3n tangible desde las primeras fases." })] }), _jsxs(Box, { sx: {
                        position: 'relative',
                        maxWidth: 1100,
                        mx: 'auto',
                        pt: { xs: 4, md: 2 },
                        pb: { xs: 6, md: 8 },
                    }, children: [_jsx(Box, { sx: (theme) => ({
                                position: 'absolute',
                                top: 0,
                                bottom: 0,
                                left: '50%',
                                transform: 'translateX(-50%)',
                                width: 2,
                                bgcolor: alpha(theme.palette.primary.main, 0.7),
                                borderRadius: 999,
                                '&::after': {
                                    content: '""',
                                    position: 'absolute',
                                    inset: '-10%',
                                    boxShadow: `0 0 28px ${alpha(theme.palette.primary.main, 0.9)}`,
                                },
                                display: { xs: 'none', md: 'block' },
                            }) }), _jsx(Box, { sx: {
                                display: 'flex',
                                flexDirection: 'column',
                                gap: { xs: 6, md: 10 },
                            }, children: methodologySteps.map((step) => {
                                const isLeft = step.side === 'left';
                                return (_jsxs(Box, { sx: {
                                        position: 'relative',
                                        display: 'grid',
                                        gridTemplateColumns: {
                                            xs: '1fr',
                                            md: '1fr 1fr',
                                        },
                                        alignItems: 'center',
                                    }, children: [_jsx(Box, { sx: (theme) => ({
                                                display: { xs: 'none', md: 'block' },
                                                position: 'absolute',
                                                left: '50%',
                                                top: '50%',
                                                transform: 'translate(-50%, -50%)',
                                                width: 14,
                                                height: 14,
                                                borderRadius: '50%',
                                                bgcolor: theme.palette.primary.light,
                                                boxShadow: `0 0 22px ${alpha(theme.palette.primary.light, 0.95)}`,
                                            }) }), _jsx(Box, { sx: {
                                                gridColumn: {
                                                    xs: '1 / -1',
                                                    md: isLeft ? 1 : 2,
                                                },
                                                justifySelf: {
                                                    xs: 'center',
                                                    md: isLeft ? 'flex-end' : 'flex-start',
                                                },
                                                maxWidth: { xs: 520, md: 420 },
                                                width: '100%',
                                            }, children: _jsxs(Box, { sx: (theme) => ({
                                                    position: 'relative',
                                                    borderRadius: 3,
                                                    px: { xs: 3.5, md: 4 },
                                                    py: { xs: 3.5, md: 4 },
                                                    bgcolor: theme.palette.background.paper,
                                                    border: `1px solid ${alpha(theme.palette.text.secondary, 0.35)}`,
                                                    boxShadow: '0 30px 60px rgba(0,0,0,0.75)',
                                                    transition: 'all 0.35s ease',
                                                    '&:hover': {
                                                        transform: 'translateY(-6px)',
                                                        boxShadow: '0 40px 80px rgba(0,0,0,0.85)',
                                                        border: `1px solid ${alpha(theme.palette.primary.light, 0.75)}`,
                                                    },
                                                    '&::after': {
                                                        content: '""',
                                                        position: 'absolute',
                                                        inset: 0,
                                                        borderRadius: 3,
                                                        background: 'linear-gradient(130deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 40%)',
                                                        opacity: 0,
                                                        transition: 'opacity 0.35s ease',
                                                        pointerEvents: 'none',
                                                    },
                                                    '&:hover::after': {
                                                        opacity: 1,
                                                    },
                                                }), children: [_jsx(Typography, { sx: (theme) => ({
                                                            fontSize: 13,
                                                            letterSpacing: '0.16em',
                                                            textTransform: 'uppercase',
                                                            color: theme.palette.primary.light,
                                                            mb: 1,
                                                        }), children: step.id }), _jsx(Typography, { sx: (theme) => ({
                                                            fontSize: 14,
                                                            fontWeight: 700,
                                                            letterSpacing: '0.14em',
                                                            textTransform: 'uppercase',
                                                            mb: 1.5,
                                                            color: theme.palette.text.primary,
                                                        }), children: step.title }), _jsx(Typography, { sx: (theme) => ({
                                                            fontSize: 13,
                                                            lineHeight: 1.7,
                                                            color: theme.palette.text.secondary,
                                                        }), children: step.body })] }) })] }, step.id));
                            }) })] })] }) }));
};
export default ConsultingSteps;
