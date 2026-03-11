import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Button, Typography, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import AnimatedBackground from "../organisms/AnimatedBackground";
import { useNavigate } from "react-router-dom";
const Hero = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    return (_jsxs(Box, { sx: {
            position: "relative",
            height: "100vh",
            overflow: "hidden",
            color: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            px: { xs: 3, md: 12 },
        }, children: [_jsx(AnimatedBackground, {}), _jsxs(Box, { sx: { position: "relative", zIndex: 2 }, children: [_jsxs(Typography, { variant: "h2", sx: {
                            fontWeight: 700,
                            fontSize: { xs: "2.5rem", md: "4rem" },
                            lineHeight: 1.2,
                            maxWidth: "945px",
                        }, children: ["Laboratorio de Innovaci\u00F3n: ", _jsx("br", {}), _jsx(Box, { component: "span", sx: { color: theme.palette.primary.main }, children: "Desarrollamos Tecnolog\u00EDa con ADN Inmobiliario." })] }), _jsx(Typography, { variant: "h6", sx: {
                            mt: 3,
                            color: theme.palette.primary.light,
                            opacity: 0.9,
                            fontWeight: 500,
                        }, children: "Creamos y desarrollamos productos tecnol\u00F3gicos que transforman el Caos Operativo en Eficiencia Digital." }), _jsx(Typography, { variant: "body1", sx: {
                            mt: 2,
                            mb: 5,
                            color: "rgba(255, 255, 255, 0.85)",
                            maxWidth: "650px",
                            fontSize: "1.1rem",
                            fontWeight: 500,
                        }, children: "Desde nuestro laboratorio, dise\u00F1amos, desarrollamos e implementamos productos que automatizan procesos, centralizan la informaci\u00F3n y garantizan eficiencia, trazabilidad y transparencia, impulsando la innovaci\u00F3n en el sector financiero e inmobiliario." }), _jsxs(Stack, { direction: "row", spacing: 2, children: [_jsx(Button, { variant: "contained", sx: {
                                    backgroundColor: theme.palette.primary.main,
                                    color: theme.palette.background.default,
                                    fontWeight: 700,
                                    px: 4,
                                    py: 1.5,
                                    borderRadius: 3,
                                    textTransform: "none",
                                    fontFamily: "'Baloo 2', sans-serif",
                                    "&:hover": {
                                        backgroundColor: theme.palette.primary.light,
                                    },
                                }, onClick: () => navigate("/soluciones"), children: "Explorar soluciones" }), _jsx(Button, { variant: "outlined", sx: {
                                    color: theme.palette.primary.main,
                                    borderColor: theme.palette.primary.main,
                                    fontWeight: 700,
                                    px: 4,
                                    py: 1.5,
                                    borderRadius: 3,
                                    textTransform: "none",
                                    fontFamily: "'Baloo 2', sans-serif",
                                    "&:hover": {
                                        backgroundColor: theme.palette.primary.main + "10",
                                    },
                                }, onClick: () => navigate("/nosotros"), children: "Con\u00F3cenos" })] })] })] }));
};
export default Hero;
