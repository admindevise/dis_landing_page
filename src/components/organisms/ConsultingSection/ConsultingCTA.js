import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Button, Container, Typography, Modal, IconButton } from '@mui/material';
import { alpha } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
const ConsultingCTA = () => {
    const [openModal, setOpenModal] = useState(false);
    const handleContactar = () => {
        setOpenModal(true);
    };
    return (_jsxs(Box, { "data-consulting-cta": true, sx: (theme) => ({
            py: 12,
        }), children: [_jsx(Container, { maxWidth: "lg", children: _jsxs(Box, { sx: (theme) => ({
                        borderRadius: 5,
                        border: `1px solid ${theme.palette.primary.light}`,
                        boxShadow: `0 0 40px ${alpha(theme.palette.primary.light, 0.4)}`,
                        px: { xs: 3, md: 10 },
                        py: { xs: 6, md: 8 },
                        position: 'relative',
                        overflow: 'hidden',
                        background: theme.palette.background.paper,
                    }), children: [_jsx(Typography, { align: "center", sx: (theme) => ({
                                fontSize: { xs: '1.8rem', md: '2.3rem' },
                                fontWeight: 800,
                                textTransform: 'uppercase',
                                letterSpacing: '0.08em',
                                mb: 2,
                                background: `linear-gradient(
                90deg,
                ${theme.palette.primary.light},
                ${theme.palette.info.light},
                ${theme.palette.info.dark}
              )`,
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }), children: "\u00BFLISTO PARA MEJORAR TU SISTEMA?" }), _jsx(Typography, { align: "center", sx: (theme) => ({
                                maxWidth: 680,
                                mx: 'auto',
                                color: theme.palette.text.secondary,
                                mb: 5,
                                fontSize: '1rem',
                                lineHeight: 1.7,
                            }), children: "Mientras tus competidores siguen dependiendo de procesos manuales y sistemas legacy, t\u00FA puedes liderar con inteligencia artificial estrat\u00E9gica. Agenda una sesi\u00F3n de diagn\u00F3stico y descubre c\u00F3mo transformar tu operaci\u00F3n con IA de impacto real." }), _jsx(Box, { sx: { textAlign: 'center' }, children: _jsx(Button, { variant: "contained", color: "primary", onClick: handleContactar, sx: (theme) => ({
                                    borderRadius: 0,
                                    px: 6,
                                    py: 1.8,
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.16em',
                                    fontSize: 12,
                                    fontWeight: 700,
                                    backgroundColor: theme.palette.primary.main,
                                    '&:hover': {
                                        backgroundColor: theme.palette.primary.light,
                                        boxShadow: `0 0 22px ${alpha(theme.palette.primary.main, 0.5)}`,
                                    },
                                }), children: "Ejecutar contacto" }) })] }) }), _jsx(Modal, { open: openModal, onClose: () => setOpenModal(false), children: _jsxs(Box, { sx: (theme) => ({
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        bgcolor: theme.palette.secondary.main,
                        color: "white",
                        boxShadow: 24,
                        borderRadius: 3,
                        p: 0,
                        maxWidth: 900,
                        width: "90%",
                    }), children: [_jsxs(Box, { display: "flex", justifyContent: "space-between", alignItems: "center", p: 2, children: [_jsx(Typography, { variant: "h6", sx: { fontWeight: 600 }, children: "Agenda una cita" }), _jsx(IconButton, { onClick: () => setOpenModal(false), sx: { color: "#fff" }, children: _jsx(CloseIcon, {}) })] }), _jsx(Box, { sx: { p: 3, pt: 0 }, children: _jsx(Box, { sx: {
                                    position: "relative",
                                    height: "600px",
                                    borderRadius: 3,
                                    overflow: "hidden",
                                }, children: _jsx("iframe", { src: "https://outlook.office.com/book/BRICKFLOW@gruposantarosa.co/?ismsaljsauthenabled", title: "Agendar Cita Consultor\u00EDa", style: {
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        width: "100%",
                                        height: "100%",
                                        border: "none",
                                    } }) }) })] }) })] }));
};
export default ConsultingCTA;
