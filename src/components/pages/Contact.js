import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Box, Typography, Stack, Grid, useTheme, Paper } from "@mui/material";
import { Mail, MapPin } from "lucide-react";
import AnimatedBackground from "../organisms/AnimatedBackground";
import SEO from "../atoms/SEO";
const Contact = () => {
    const theme = useTheme();
    const handleAgendarCita = () => {
        window.open('https://outlook.office.com/book/DIS1@gruposantarosa.co/', '_blank');
    };
    return (_jsxs(_Fragment, { children: [_jsx(SEO, { title: "Cont\u00E1ctanos | Dishub", description: "Escr\u00EDbenos y nuestro equipo te responder\u00E1 r\u00E1pidamente. Dishub est\u00E1 listo para ayudarte a gestionar tus inversiones inmobiliarias.", keywords: "contacto Dishub, soporte inversiones, consulta inmobiliaria, contacto inversi\u00F3n", url: "https://www.dishub.co/contacto", image: "https://www.dishub.co/preview-contacto.png" }), _jsxs(Box, { sx: {
                    position: "relative",
                    overflow: "hidden",
                    px: { xs: 3, md: 10 },
                    pt: 10
                }, children: [_jsx(AnimatedBackground, {}), _jsxs(Box, { sx: { position: "relative", zIndex: 1, marginBottom: 10 }, children: [_jsx(Typography, { variant: "h3", sx: {
                                    fontWeight: 700,
                                    mb: 2,
                                    textAlign: "center",
                                    color: theme.palette.text.primary,
                                }, children: "Cont\u00E1ctanos" }), _jsx(Typography, { variant: "body1", sx: {
                                    mb: 8,
                                    textAlign: "center",
                                    color: theme.palette.text.secondary,
                                    maxWidth: 600,
                                    mx: "auto",
                                }, children: "Escr\u00EDbenos y nuestro equipo te responder\u00E1 lo m\u00E1s pronto posible. Queremos ayudarte a impulsar tus proyectos con soluciones innovadoras." }), _jsxs(Grid, { container: true, spacing: 6, justifyContent: "center", alignItems: "stretch", children: [_jsx(Grid, { size: { xs: 12, md: 8 }, children: _jsxs(Paper, { elevation: 6, sx: {
                                                p: 2,
                                                borderRadius: 3,
                                                backdropFilter: "blur(12px)",
                                                backgroundColor: `${theme.palette.background.paper}E6`,
                                                boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                                                transition: "all 0.3s ease",
                                                height: '100%',
                                                minHeight: '600px',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                "&:hover": { boxShadow: "0 10px 28px rgba(0,0,0,0.12)" },
                                            }, children: [_jsx(Typography, { variant: "h5", sx: { fontWeight: 700, mb: 2, textAlign: 'center' }, children: "Agenda una cita con nosotros" }), _jsx("iframe", { src: "https://outlook.office.com/book/DISHUB@gruposantarosa.co/?ismsaljsauthenabled", style: { border: 'none', width: '100%', height: '100%' }, title: "Agendar Cita", sandbox: "allow-same-origin allow-scripts allow-popups allow-forms", allow: "autoplay; microphone; camera" })] }) }), _jsx(Grid, { size: { xs: 12, md: 4 }, children: _jsxs(Stack, { spacing: 3, sx: { height: '100%' }, children: [_jsxs(Box, { children: [_jsx(Typography, { variant: "h5", sx: { fontWeight: 700, mb: 2 }, children: "Informaci\u00F3n de contacto" }), _jsx(Typography, { variant: "body1", sx: { color: theme.palette.text.secondary }, children: "Puedes escribirnos directamente o visitarnos en nuestras oficinas." })] }), _jsxs(Stack, { spacing: 3, children: [_jsxs(Box, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [_jsx(Mail, { size: 22, color: theme.palette.primary.main }), _jsx(Typography, { component: "a", href: "mailto:contacto@dishub.co", sx: {
                                                                        color: theme.palette.text.primary,
                                                                        textDecoration: 'none',
                                                                        '&:hover': {
                                                                            color: theme.palette.primary.main,
                                                                            textDecoration: 'underline'
                                                                        }
                                                                    }, children: "contacto@dishub.co" })] }), _jsxs(Box, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [_jsx(MapPin, { size: 22, color: theme.palette.primary.main }), _jsx(Typography, { children: "Calle 76 N\u00BA 8-28 - Piso 3, Bogot\u00E1, Colombia" })] })] }), _jsx(Box, { sx: {
                                                        flex: 1,
                                                        borderRadius: 2,
                                                        overflow: 'hidden',
                                                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                                                        minHeight: '300px'
                                                    }, children: _jsx("iframe", { src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.6087097849867!2d-74.05938!3d4.661111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9a376a0e8c1b%3A0x1234567890abcdef!2sCalle%2076%20%238-28%2C%20Bogot%C3%A1%2C%20Colombia!5e0!3m2!1ses!2sco!4v1234567890123!5m2!1ses!2sco", width: "100%", height: "100%", style: { border: 0, minHeight: '300px' }, allowFullScreen: true, loading: "lazy", referrerPolicy: "no-referrer-when-downgrade", title: "Ubicaci\u00F3n de Dishub" }) })] }) })] })] })] })] }));
};
export default Contact;
