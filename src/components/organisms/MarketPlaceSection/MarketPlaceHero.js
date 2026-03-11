import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Container, Typography } from '@mui/material';
import { useTheme, alpha } from '@mui/material/styles';
const MarketPlaceHero = () => {
    const theme = useTheme();
    return (_jsx(Box, { sx: { pt: { xs: 12, md: 14 }, pb: 6, background: '#fff', }, children: _jsx(Container, { sx: { height: "100%" }, children: _jsx(Box, { sx: {
                    borderRadius: '32px',
                    overflow: 'hidden',
                    boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
                }, children: _jsxs(Box, { sx: {
                        width: '100%',
                        minHeight: 450,
                        backgroundImage: `url('/images/backgrounds/DeviseMarketPlace.png')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        p: { xs: 4, md: 8 },
                        color: '#fff',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                    }, children: [_jsx(Box, { sx: {
                                display: "inline-block",
                                px: 2.5,
                                py: 1,
                                borderRadius: 6,
                                backgroundColor: alpha(theme.palette.primary.main, 0.15),
                                color: theme.palette.primary.main,
                                fontWeight: 600,
                                fontSize: "0.85rem",
                                border: `1px solid ${alpha(theme.palette.primary.main, 0.4)}`,
                                mb: 3,
                                width: 'fit-content',
                            }, children: "Desarrollado en DISHUB" }), _jsxs(Typography, { variant: "h3", fontWeight: 800, sx: { maxWidth: 550, color: "#1B1949" }, children: ["La plataforma de inversi\u00F3n ", _jsx("br", {}), " ", _jsx("span", { style: { color: '#1C4FC1' }, children: "para tu fiduciaria" })] }), _jsx(Typography, { mt: 2, sx: { maxWidth: 500, color: "#312478" }, children: "Ofrece a tus inversionistas una experiencia digital completa para invertir en proyectos inmobiliarios. Democratiza el acceso, automatiza procesos y escala tu operaci\u00F3n." })] }) }) }) }));
};
export default MarketPlaceHero;
