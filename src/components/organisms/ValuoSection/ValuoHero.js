import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { BoltIcon } from "lucide-react";
const ValuoHero = () => {
    return (_jsxs(Box, { sx: {
            background: "hsl(210, 27%, 12%)",
            minHeight: "100vh",
            pt: 14,
            position: "relative",
            overflow: "hidden",
        }, children: [_jsx(Box, { sx: {
                    position: "absolute",
                    top: 0,
                    right: "-5%",
                    width: "55%",
                    height: "100%",
                    backgroundImage: 'url("/images/backgrounds/ValuoBulding.png")',
                    backgroundSize: "cover",
                    backgroundPosition: "center right",
                    backgroundRepeat: "no-repeat",
                    opacity: 0.35,
                    filter: "blur(4px)",
                    transform: "scale(1.1)",
                    zIndex: 1,
                } }), _jsx(Box, { sx: {
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to left, hsla(210, 27%, 12%, 0.95), hsla(210, 27%, 12%, 0.5), transparent)",
                    zIndex: 1,
                } }), _jsxs(Container, { maxWidth: "lg", sx: {
                    position: "relative",
                    zIndex: 2,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    py: 10,
                    gap: 3,
                }, children: [_jsxs(Box, { sx: {
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 1,
                            px: 2,
                            py: 1,
                            borderRadius: "20px",
                            bgcolor: "rgba(255,255,255,0.06)",
                            border: "1px solid hsla(212, 48%, 55%, 0.25)",
                            boxShadow: "0 0 10px hsla(212, 48%, 55%, 0.15)",
                            fontSize: "14px",
                            color: "hsl(212, 48%, 55%)",
                        }, children: [_jsx(BoltIcon, { size: 18 }), " Esp\u00E9ralo, pr\u00F3ximamente"] }), _jsxs(Typography, { variant: "h2", fontWeight: 700, sx: {
                            fontSize: { xs: "2.4rem", md: "3.6rem" },
                            lineHeight: 1.2,
                            mb: 2,
                            maxWidth: "800px",
                        }, children: [_jsxs(Box, { component: "span", sx: { color: "hsl(216, 33%, 97%)" }, children: ["Aval\u00FAos precisos en", " "] }), _jsx(Box, { component: "span", sx: {
                                    background: "linear-gradient(90deg, hsl(212, 48%, 55%), hsl(212, 48%, 45%), hsl(212, 48%, 60%))",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }, children: "segundos, no" }), _jsxs(Box, { component: "span", sx: { color: "hsl(216, 33%, 97%)" }, children: [" ", "semanas."] })] }), _jsx(Typography, { variant: "h6", sx: {
                            color: "rgba(255,255,255,0.75)",
                            maxWidth: "600px",
                        }, children: "Nuestro modelo analiza millones de puntos de datos, normativa urbana y tendencias del mercado inmobiliario para entregarte el valor real de cualquier propiedad en Colombia." }), _jsxs(Box, { sx: {
                            display: "flex",
                            alignItems: "center",
                            bgcolor: "rgba(255,255,255,0.07)",
                            borderRadius: "40px",
                            px: 2,
                            py: 1.3,
                            border: "1px solid hsla(212, 48%, 55%, 0.2)",
                            maxWidth: "600px",
                            width: "100%",
                            boxShadow: "0 0 12px hsla(212, 48%, 55%, 0.2)",
                        }, children: [_jsx(TextField, { fullWidth: true, variant: "standard", placeholder: "Ingresa una direcci\u00F3n (ej. Calle 93 # 11-20, Bogot\u00E1)", InputProps: {
                                    disableUnderline: true,
                                    sx: { color: "#fff", px: 1, fontSize: "0.95rem" },
                                } }), _jsx(Button, { variant: "contained", sx: {
                                    bgcolor: "hsl(212, 48%, 45%)",
                                    px: 4,
                                    py: 1.5,
                                    borderRadius: "30px",
                                    textTransform: "none",
                                    fontWeight: 600,
                                    letterSpacing: "0.5px",
                                    color: "hsl(216, 33%, 97%)",
                                    "&:hover": {
                                        bgcolor: "hsl(212, 48%, 55%)",
                                        boxShadow: "0 0 12px hsla(212, 48%, 55%, 0.5)",
                                    },
                                }, children: "Avaluar" })] })] })] }));
};
export default ValuoHero;
