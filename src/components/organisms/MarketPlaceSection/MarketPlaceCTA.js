import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Container, Typography, Button, Modal, Stack, IconButton, } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
const MarketPlaceCTA = () => {
    const [openVideo, setOpenVideo] = useState(false);
    const [openCita, setOpenCita] = useState(false);
    return (_jsxs(Box, { sx: {
            position: "relative",
            py: 14,
            overflow: "hidden",
            background: "#261E60",
        }, children: [_jsx(Container, { maxWidth: "sm", children: _jsxs(Box, { sx: {
                        backdropFilter: "blur(12px)",
                        background: "rgba(255,255,255,0.12)",
                        border: "1px solid rgba(255,255,255,0.18)",
                        borderRadius: 4,
                        p: 6,
                        textAlign: "center",
                        color: "#fff",
                        boxShadow: "0 8px 25px rgba(0,0,0,0.35)",
                    }, children: [_jsx(Typography, { variant: "h4", fontWeight: 700, sx: { mb: 2 }, children: "\u00BFListo para digitalizar tu fiduciaria?" }), _jsx(Typography, { variant: "body1", sx: { mb: 4, opacity: 0.9 }, children: "Ve c\u00F3mo Devise Marketplace puede transformar la experiencia de inversi\u00F3n de tus clientes. Nuestro equipo de DISHUB te mostrar\u00E1 c\u00F3mo implementarlo en tu operaci\u00F3n." }), _jsxs(Stack, { spacing: 2, direction: "column", children: [_jsx(Button, { variant: "contained", size: "large", onClick: () => setOpenVideo(true), sx: {
                                        px: 4,
                                        py: 1.6,
                                        borderRadius: 3,
                                        fontWeight: 700,
                                        fontSize: 18,
                                        textTransform: "none",
                                        backgroundColor: "#CBE661",
                                        color: "#18122B",
                                        boxShadow: "0 0 14px rgba(203, 230, 97, 0.4)",
                                        "&:hover": {
                                            backgroundColor: "#E3FF89",
                                        },
                                    }, children: "Ver demo r\u00E1pida" }), _jsx(Button, { variant: "outlined", size: "large", onClick: () => setOpenCita(true), sx: {
                                        px: 4,
                                        py: 1.6,
                                        borderRadius: 3,
                                        fontWeight: 700,
                                        fontSize: 18,
                                        textTransform: "none",
                                        color: "#fff",
                                        borderColor: "rgba(203,230,97,0.7)",
                                        "&:hover": {
                                            backgroundColor: "rgba(203,230,97,0.12)",
                                            borderColor: "#CBE661",
                                        },
                                    }, children: "Contactar al equipo" })] })] }) }), _jsx(Modal, { open: openVideo, onClose: () => setOpenVideo(false), children: _jsx(Box, { sx: {
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: { xs: "95%", sm: "80%", md: "60%" },
                        bgcolor: "#000",
                        borderRadius: 3,
                        boxShadow: 24,
                        p: 2,
                    }, children: _jsx("video", { src: "/videos/DeviseMarketPlace.mp4", controls: true, autoPlay: true, style: {
                            width: "100%",
                            borderRadius: "12px",
                        } }) }) }), _jsx(Modal, { open: openCita, onClose: () => setOpenCita(false), children: _jsxs(Box, { children: [_jsxs(Box, { display: "flex", justifyContent: "space-between", alignItems: "center", p: 2, children: [_jsx(Typography, { variant: "h6", sx: { fontWeight: 600 }, children: "Agenda una cita" }), _jsx(IconButton, { onClick: () => setOpenCita(false), sx: { color: "#fff" }, children: _jsx(CloseIcon, {}) })] }), _jsx(Box, { sx: { p: 3, pt: 0 }, children: _jsx(Box, { sx: {
                                    position: "relative",
                                    height: "600px",
                                    borderRadius: 3,
                                    overflow: "hidden",
                                }, children: _jsx("iframe", { src: "https://outlook.office.com/book/DEVISE2@gruposantarosa.co/?ismsaljsauthenabled", title: "Agendar Cita", style: {
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        width: "100%",
                                        height: "100%",
                                        border: "none",
                                    } }) }) })] }) })] }));
};
export default MarketPlaceCTA;
