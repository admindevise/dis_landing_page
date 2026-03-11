import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Button, Container, Typography } from '@mui/material';
import { alpha } from '@mui/material/styles';
import { ArrowRight, Sparkles } from 'lucide-react';
import AnimatedBackground from '../AnimatedBackground';
const ConsultingHero = () => {
    const handleScrollToContact = () => {
        const ctaSection = document.querySelector('[data-consulting-cta]');
        if (ctaSection) {
            ctaSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };
    return (_jsxs(Box, { sx: {
            position: 'relative',
            overflow: 'hidden',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            py: { xs: 10, md: 14 },
        }, children: [_jsx(AnimatedBackground, {}), _jsx(Box, { sx: (theme) => ({
                    position: 'absolute',
                    top: '20%',
                    right: '10%',
                    width: 300,
                    height: 300,
                    borderRadius: '50%',
                    background: `radial-gradient(circle, ${alpha(theme.palette.primary.light, 0.15)} 0%, transparent 70%)`,
                    filter: 'blur(60px)',
                    animation: 'pulse 4s ease-in-out infinite',
                    '@keyframes pulse': {
                        '0%, 100%': { opacity: 0.5, transform: 'scale(1)' },
                        '50%': { opacity: 0.8, transform: 'scale(1.1)' },
                    },
                }) }), _jsxs(Container, { maxWidth: "md", sx: { position: 'relative' }, children: [_jsxs(Box, { sx: (theme) => ({
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 1,
                            px: 2.5,
                            py: 1,
                            borderRadius: 20,
                            backgroundColor: alpha(theme.palette.primary.main, 0.1),
                            border: `1px solid ${alpha(theme.palette.primary.main, 0.3)}`,
                            mb: 3,
                        }), children: [_jsx(Sparkles, { size: 16, color: "#3B6EA8" }), _jsx(Typography, { sx: (theme) => ({
                                    color: theme.palette.primary.main,
                                    letterSpacing: '0.1em',
                                    fontSize: 11,
                                    textTransform: 'uppercase',
                                    fontWeight: 700,
                                }), children: "Estado del Sistema: Optimizado" })] }), _jsxs(Typography, { variant: "h1", sx: {
                            fontWeight: 900,
                            mb: 3,
                            lineHeight: 1.1,
                            fontSize: { xs: '2.5rem', sm: '3.2rem', md: '4rem' },
                        }, children: ["IMPULSANDO LA", _jsx("br", {}), _jsx(Box, { component: "span", sx: (theme) => ({
                                    background: `linear-gradient(
                90deg,
                ${theme.palette.primary.light},
                ${theme.palette.primary.main},
                ${theme.palette.info.light}
              )`,
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    display: 'inline-block',
                                }), children: "TRANSFORMACI\u00D3N CON IA" })] }), _jsx(Typography, { variant: "body1", color: "text.secondary", sx: {
                            maxWidth: 620,
                            mb: 5,
                            fontSize: { xs: '1rem', md: '1.1rem' },
                            lineHeight: 1.7
                        }, children: "Redise\u00F1amos el ADN operativo de tu organizaci\u00F3n para integrar inteligencia artificial de forma estrat\u00E9gica. Implementamos automatizaci\u00F3n cognitiva, modelos predictivos y arquitecturas de datos escalables que transforman procesos, optimizan recursos y generan ventaja competitiva sostenible." }), _jsx(Box, { sx: { display: 'flex', gap: 2, flexWrap: 'wrap' }, children: _jsx(Button, { variant: "contained", size: "large", onClick: handleScrollToContact, endIcon: _jsx(ArrowRight, { size: 20 }), sx: (theme) => ({
                                px: 4,
                                py: 1.5,
                                borderRadius: 2,
                                textTransform: 'none',
                                fontWeight: 700,
                                fontSize: '1rem',
                                backgroundColor: theme.palette.primary.main,
                                boxShadow: `0 8px 24px ${alpha(theme.palette.primary.main, 0.4)}`,
                                '&:hover': {
                                    backgroundColor: theme.palette.primary.dark,
                                    transform: 'translateY(-2px)',
                                    boxShadow: `0 12px 32px ${alpha(theme.palette.primary.main, 0.5)}`,
                                },
                                transition: 'all 0.3s ease',
                            }), children: "Agenda diagn\u00F3stico gratuito" }) })] })] }));
};
export default ConsultingHero;
