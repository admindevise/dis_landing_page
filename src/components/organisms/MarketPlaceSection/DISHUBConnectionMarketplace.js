import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Container, Typography, Button } from "@mui/material";
import { useTheme, alpha } from "@mui/material/styles";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import { useNavigate } from "react-router-dom";
const DISHUBConnectionMarketplace = () => {
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
                                    }, children: "Democratizando la inversi\u00F3n inmobiliaria desde DISHUB" }), _jsxs(Typography, { variant: "body1", sx: {
                                        opacity: 0.85,
                                        lineHeight: 1.8,
                                        mb: 3,
                                        maxWidth: 500,
                                    }, children: ["Devise Marketplace es desarrollado en ", _jsx("strong", { children: "DISHUB" }), " con una misi\u00F3n clara: hacer que la inversi\u00F3n inmobiliaria sea accesible para todos. Creamos la tecnolog\u00EDa que permite a las fiduciarias ofrecer oportunidades de inversi\u00F3n digitales, transparentes y sin barreras de entrada."] }), _jsxs(Box, { sx: {
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
                                    }, children: [_jsx(Typography, { variant: "h6", sx: { fontWeight: 600, mb: 2 }, children: "Tecnolog\u00EDa regulada para fiduciarias" }), _jsx(Typography, { variant: "body2", sx: { opacity: 0.85, lineHeight: 1.7 }, children: "En DISHUB entendemos el marco regulatorio colombiano. Devise Marketplace est\u00E1 dise\u00F1ado para que tu fiduciaria pueda ofrecer inversi\u00F3n digital cumpliendo con todas las normativas, facilitando KYC, trazabilidad, reporting y custodia de documentos con los m\u00E1s altos est\u00E1ndares." })] }), _jsxs(Box, { sx: {
                                        p: 4,
                                        borderRadius: 3,
                                        background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.15)} 0%, ${alpha(theme.palette.primary.light, 0.1)} 100%)`,
                                        border: `1px solid ${alpha(theme.palette.primary.main, 0.3)}`,
                                    }, children: [_jsx(Typography, { variant: "body1", sx: {
                                                fontWeight: 600,
                                                mb: 2,
                                                color: theme.palette.primary.light,
                                            }, children: "Parte del ecosistema DISHUB" }), _jsx(Typography, { variant: "body2", sx: { opacity: 0.9, mb: 3, lineHeight: 1.7 }, children: "Devise Marketplace es una de las soluciones FinTech que desarrollamos en nuestro laboratorio de innovaci\u00F3n para transformar la industria financiera colombiana con tecnolog\u00EDa de vanguardia y cumplimiento regulatorio total." }), _jsx(Button, { variant: "outlined", onClick: () => navigate("/"), sx: {
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
export default DISHUBConnectionMarketplace;
