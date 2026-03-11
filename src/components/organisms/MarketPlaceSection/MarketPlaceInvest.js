import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Container, Grid, Typography } from '@mui/material';
const MarketPlaceInvest = () => {
    return (_jsx(Box, { sx: { py: { xs: 8, md: 12, background: "#ffff" } }, children: _jsx(Container, { children: _jsxs(Grid, { container: true, spacing: 6, alignItems: "center", children: [_jsxs(Grid, { size: { xs: 12, md: 6 }, sx: {
                            position: "relative",
                        }, children: [_jsx(Box, { component: "img", src: "/images/platform/invertir.png", alt: "Vista del proyecto", sx: {
                                    position: "absolute",
                                    left: 0,
                                    top: "50%",
                                    transform: "translate(-50%, -50%)",
                                    height: "420px",
                                    borderRadius: "20px",
                                    boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
                                    objectFit: "cover",
                                } }), _jsx(Box, { sx: { height: 420 } })] }), _jsxs(Grid, { size: { xs: 12, md: 6 }, children: [_jsxs(Typography, { variant: "h3", fontWeight: 800, sx: { lineHeight: 1.2, color: "#261E60" }, children: ["Democratiza ", _jsx("br", {}), "la inversi\u00F3n"] }), _jsx(Typography, { variant: "h3", fontWeight: 800, sx: {
                                    color: "#8CC63F",
                                    mt: -1,
                                    mb: 2,
                                }, children: "inmobiliaria" }), _jsx(Typography, { sx: { maxWidth: 480, color: "#575D6B", lineHeight: 1.6 }, children: "Permite que tus inversionistas participen en proyectos inmobiliarios de forma simple y digital. Devise Marketplace brinda a tu fiduciaria una plataforma white-label para que ofrezcas oportunidades de inversi\u00F3n con procesos automatizados, transparencia total y una experiencia de usuario excepcional." })] })] }) }) }));
};
export default MarketPlaceInvest;
