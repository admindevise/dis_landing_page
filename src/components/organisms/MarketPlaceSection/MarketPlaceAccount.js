import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Grid, Typography } from '@mui/material';
const MarketPlaceAccount = () => {
    return (_jsx(Box, { sx: {
            bgcolor: '#F8FAFF',
            py: { xs: 6, md: 10 },
            px: { xs: 2, md: 10 },
        }, children: _jsxs(Grid, { container: true, spacing: 6, alignItems: "center", justifyContent: "center", children: [_jsx(Grid, { size: { xs: 12, md: 4 }, children: _jsx(Box, { component: "img", src: "/images/backgrounds/AccountImage.png", alt: "mockup", sx: {
                            width: { xs: "260px", md: "360px" },
                            mt: { xs: 5, md: 0 },
                            filter: "drop-shadow(0 10px 25px rgba(0,0,0,0.4))",
                        } }) }), _jsx(Grid, { size: { xs: 12, md: 6 }, children: _jsxs(Box, { sx: { maxWidth: 480 }, children: [_jsxs(Typography, { component: "h2", sx: {
                                    fontSize: { xs: '2rem', md: '2.6rem' },
                                    lineHeight: 1.2,
                                    fontWeight: 800,
                                    mb: 3,
                                }, children: [_jsx(Box, { component: "span", sx: { color: '#8CAA27' }, children: "Wallet digital" }), ' ', _jsx(Box, { component: "span", sx: { color: '#261E60' }, children: "para cada" }), ' ', _jsx(Box, { component: "span", sx: { color: '#8CAA27' }, children: "inversionista" })] }), _jsx(Typography, { variant: "body2", color: "text.secondary", children: "Cada inversionista cuenta con una wallet digital segura que centraliza retiros, aportes y movimientos. Ofrece a tus clientes transparencia total, control completo de su cuenta, consulta de hist\u00F3ricos y administraci\u00F3n de participaciones desde un solo lugar, elevando el est\u00E1ndar de servicio de tu fiduciaria." })] }) })] }) }));
};
export default MarketPlaceAccount;
