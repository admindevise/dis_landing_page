import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Container, Typography, Button } from "@mui/material";
import { useState } from "react";
const generateSquares = () => Array.from({ length: 12 }).map(() => ({
    top: Math.random() * 100,
    left: Math.random() * 100,
    duration: 4 + Math.random() * 4,
    delay: Math.random() * 2,
}));
const BusinessCTA = () => {
    const [squares] = useState(generateSquares);
    const handleContactar = () => {
        window.open('https://outlook.office.com/book/DEVISE2@gruposantarosa.co/?ismsaljsauthenabled', '_blank');
    };
    return (_jsxs(Box, { sx: {
            position: "relative",
            py: 14,
            overflow: "hidden",
        }, children: [squares.map((sq, i) => (_jsx(Box, { sx: {
                    position: "absolute",
                    width: 50,
                    height: 50,
                    borderRadius: 2,
                    background: "#DCEF95",
                    opacity: 0.2,
                    animation: `float ${sq.duration}s ease-in-out ${sq.delay}s infinite alternate`,
                    top: `${sq.top}%`,
                    left: `${sq.left}%`,
                } }, i))), _jsx("style", { children: `
          @keyframes float {
            from { transform: translateY(0px) rotate(0deg); }
            to { transform: translateY(-40px) rotate(20deg); }
          }
        ` }), _jsx(Container, { maxWidth: "sm", children: _jsxs(Box, { sx: {
                        backdropFilter: "blur(14px)",
                        background: "rgba(255,255,255,0.12)",
                        border: "1px solid rgba(255,255,255,0.25)",
                        borderRadius: 4,
                        p: 6,
                        textAlign: "center",
                        color: "#312478",
                        boxShadow: "0 8px 25px rgba(0,0,0,0.35)",
                    }, children: [_jsx(Typography, { variant: "h4", fontWeight: 700, sx: { mb: 2 }, children: "\u00BFQuieres evaluar si Devise se adapta a tu operaci\u00F3n?" }), _jsx(Typography, { variant: "body1", sx: { mb: 4, opacity: 0.9 }, children: "Conversemos sobre tus procesos, tus fondos y lo que quieres automatizar. Nuestro equipo de DISHUB te mostrar\u00E1 c\u00F3mo Devise puede ajustarse a tu modelo operativo." }), _jsx(Button, { variant: "contained", size: "large", onClick: handleContactar, sx: {
                                px: 4,
                                py: 1.5,
                                fontWeight: 700,
                                fontSize: 18,
                                borderRadius: 3,
                                textTransform: "none",
                                backgroundColor: "#312478",
                                color: "#CBE661",
                                boxShadow: "0 0 12px rgba(49, 36, 120, 0.6)",
                                "&:hover": {
                                    backgroundColor: "#312478",
                                    boxShadow: "0 0 16px rgba(49, 36, 120, 0.8)",
                                }
                            }, children: "Hablar con un especialista" })] }) })] }));
};
export default BusinessCTA;
