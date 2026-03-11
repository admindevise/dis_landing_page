import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Box, Button, Container, Typography, Modal, IconButton } from '@mui/material';
import { X } from 'lucide-react';
import { useState } from 'react';
const ValuoCTA = () => {
    const [openModal, setOpenModal] = useState(false);
    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);
    return (_jsxs(_Fragment, { children: [_jsx(Box, { sx: {
                    py: 12,
                    textAlign: "center",
                    background: "hsl(210, 27%, 12%)",
                    backgroundImage: `
          linear-gradient(hsla(212, 48%, 55%, 0.15) 1px, transparent 1px),
          linear-gradient(90deg, hsla(212, 48%, 55%, 0.15) 1px, transparent 1px),
          radial-gradient(circle at center, hsla(212, 48%, 55%, 0.20), transparent 65%)
        `,
                    backgroundSize: "60px 60px, 60px 60px, 100%",
                    position: "relative",
                }, children: _jsxs(Container, { maxWidth: "md", children: [_jsx(Typography, { variant: "h4", fontWeight: 700, sx: {
                                color: "hsl(216, 33%, 97%)",
                                mb: 1,
                                textShadow: "0 0 12px hsla(212, 48%, 55%, 0.35)"
                            }, children: "Empieza a valorar con inteligencia" }), _jsx(Typography, { sx: {
                                color: "rgba(255,255,255,0.75)",
                                mb: 4,
                                fontSize: "1.05rem",
                                maxWidth: 540,
                                mx: "auto",
                            }, children: "\u00DAnete a un nuevo grupo de agentes y bancos que conf\u00EDan en la tecnolog\u00EDa." }), _jsx(Button, { variant: "contained", onClick: handleOpenModal, sx: {
                                px: 5,
                                py: 1.8,
                                borderRadius: "30px",
                                fontWeight: 600,
                                textTransform: "none",
                                fontSize: "1rem",
                                bgcolor: "hsl(212, 48%, 45%)",
                                color: "hsl(216, 33%, 97%)",
                                boxShadow: "0 0 20px hsla(212, 48%, 55%, 0.45)",
                                "&:hover": {
                                    bgcolor: "hsl(212, 48%, 55%)",
                                    boxShadow: "0 0 25px hsla(212, 48%, 55%, 0.65)",
                                },
                            }, children: "Agendar demostraci\u00F3n" })] }) }), _jsx(Modal, { open: openModal, onClose: handleCloseModal, "aria-labelledby": "modal-booking", sx: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }, children: _jsxs(Box, { sx: {
                        position: "relative",
                        width: "90%",
                        maxWidth: 800,
                        height: "80vh",
                        bgcolor: "background.paper",
                        borderRadius: 2,
                        boxShadow: 24,
                        overflow: "hidden",
                    }, children: [_jsx(IconButton, { onClick: handleCloseModal, sx: {
                                position: "absolute",
                                right: 8,
                                top: 8,
                                zIndex: 1,
                                bgcolor: "rgba(0, 0, 0, 0.5)",
                                color: "white",
                                "&:hover": {
                                    bgcolor: "rgba(0, 0, 0, 0.7)",
                                },
                            }, children: _jsx(X, { size: 24 }) }), _jsx("iframe", { src: "https://outlook.office.com/book/DIS1@gruposantarosa.co/s/CCSA-kC0qkuhE9NAjbl62A2", style: {
                                width: "100%",
                                height: "100%",
                                border: "none",
                            }, title: "Agendar demostraci\u00F3n de Valuo" })] }) })] }));
};
export default ValuoCTA;
