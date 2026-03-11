import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Container, Typography, Button } from "@mui/material";
import { useTheme, alpha } from "@mui/material/styles";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import { useNavigate } from "react-router-dom";
const DISHUBConnection = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    return (_jsxs(Box, { sx: {
            py: 10,
            background: `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, ${theme.palette.secondary.dark} 100%)`,
            color: "#fff",
            position: "relative",
            overflow: "hidden",
        }, children: [_jsx(Box, { sx: {
                    position: "absolute",
                    top: "-5%",
                    right: "-5%",
                    width: 300,
                    height: 300,
                    borderRadius: "50%",
                    background: `radial-gradient(circle, ${alpha(theme.palette.primary.main, 0.15)} 0%, transparent 70%)`,
                    filter: "blur(60px)",
                } }), _jsx(Box, { sx: {
                    position: "absolute",
                    bottom: "-5%",
                    left: "-5%",
                    width: 300,
                    height: 300,
                    borderRadius: "50%",
                    background: `radial-gradient(circle, ${alpha(theme.palette.primary.light, 0.1)} 0%, transparent 70%)`,
                    filter: "blur(60px)",
                } }), _jsx(Container, { maxWidth: "lg", sx: { position: "relative" }, children: _jsxs(Box, { sx: {
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        alignItems: "center",
                        gap: 6,
                    }, children: [_jsxs(Box, { sx: {
                                flex: 1,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: { xs: "center", md: "flex-start" },
                                textAlign: { xs: "center", md: "left" },
                            }, children: [_jsxs(Box, { sx: {
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 2,
                                        mb: 3,
                                        p: 2.5,
                                        borderRadius: 3,
                                        backgroundColor: alpha(theme.palette.primary.main, 0.1),
                                        border: `1px solid ${alpha(theme.palette.primary.main, 0.3)}`,
                                    }, children: [_jsx(Box, { component: "img", src: "/DIS.svg", alt: "DIS Logo", sx: {
                                                height: 45,
                                                width: "auto",
                                            } }), _jsx(Typography, { variant: "body2", sx: {
                                                fontWeight: 700,
                                                color: theme.palette.primary.main,
                                                letterSpacing: "1.5px",
                                                fontSize: "0.75rem",
                                            }, children: "INNOVATION LAB" })] }), _jsx(Typography, { variant: "h4", sx: {
                                        fontWeight: 700,
                                        mb: 2,
                                        lineHeight: 1.3,
                                    }, children: "La tecnolog\u00EDa detr\u00E1s de la gesti\u00F3n de veh\u00EDculos de inversi\u00F3n" }), _jsxs(Typography, { variant: "body1", sx: {
                                        opacity: 0.85,
                                        lineHeight: 1.8,
                                        mb: 3,
                                        maxWidth: 500,
                                    }, children: ["Devise Business es desarrollado en ", _jsx("strong", { children: "DISHUB" }), ", donde combinamos nuestra experiencia en operaci\u00F3n de fondos con tecnolog\u00EDa de vanguardia. Entendemos los desaf\u00EDos de gestionar activos, cumplimiento regulatorio y relaciones con inversionistas porque hemos estado ah\u00ED."] }), _jsxs(Box, { sx: {
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 2,
                                        p: 3,
                                        borderRadius: 2,
                                        backgroundColor: alpha(theme.palette.primary.main, 0.08),
                                        border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                                    }, children: [_jsx(RocketLaunchIcon, { sx: { fontSize: 40, color: theme.palette.primary.light } }), _jsxs(Box, { children: [_jsx(Typography, { variant: "body2", sx: { opacity: 0.7, mb: 0.5 }, children: "Desde 2023" }), _jsx(Typography, { variant: "h6", sx: { fontWeight: 600 }, children: "Innovando en FinTech" })] })] })] }), _jsxs(Box, { sx: {
                                flex: 1,
                                display: "flex",
                                flexDirection: "column",
                                gap: 3,
                            }, children: [_jsxs(Box, { sx: {
                                        p: 4,
                                        borderRadius: 3,
                                        backgroundColor: "rgba(255,255,255,0.08)",
                                        backdropFilter: "blur(10px)",
                                        border: "1px solid rgba(255,255,255,0.15)",
                                    }, children: [_jsx(Typography, { variant: "h6", sx: { fontWeight: 600, mb: 2 }, children: "Construido por operadores de fondos" }), _jsx(Typography, { variant: "body2", sx: { opacity: 0.85, lineHeight: 1.7 }, children: "En DISHUB no solo desarrollamos software, operamos fondos de inversi\u00F3n. Devise Business nace de nuestra propia necesidad de automatizar la estructuraci\u00F3n de activos, el onboarding de inversionistas, la gesti\u00F3n documental y el reporting. Por eso sabemos exactamente qu\u00E9 necesitas." })] }), _jsxs(Box, { sx: {
                                        p: 4,
                                        borderRadius: 3,
                                        background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.15)} 0%, ${alpha(theme.palette.primary.light, 0.1)} 100%)`,
                                        border: `1px solid ${alpha(theme.palette.primary.main, 0.3)}`,
                                    }, children: [_jsx(Typography, { variant: "body1", sx: {
                                                fontWeight: 600,
                                                mb: 2,
                                                color: theme.palette.primary.light,
                                            }, children: "Parte del ecosistema DISHUB" }), _jsx(Typography, { variant: "body2", sx: { opacity: 0.9, mb: 3, lineHeight: 1.7 }, children: "Devise Business es una de las soluciones FinTech que desarrollamos en nuestro laboratorio de innovaci\u00F3n. Cada producto nace de necesidades reales del sector financiero colombiano y se construye con los m\u00E1s altos est\u00E1ndares tecnol\u00F3gicos y regulatorios." }), _jsx(Button, { variant: "outlined", onClick: () => navigate("/"), sx: {
                                                borderColor: theme.palette.primary.main,
                                                color: theme.palette.primary.main,
                                                textTransform: "none",
                                                fontWeight: 600,
                                                px: 3,
                                                py: 1,
                                                borderRadius: 2,
                                                "&:hover": {
                                                    borderColor: theme.palette.primary.light,
                                                    backgroundColor: alpha(theme.palette.primary.main, 0.1),
                                                },
                                            }, children: "Explorar DISHUB" })] })] })] }) })] }));
};
export default DISHUBConnection;
