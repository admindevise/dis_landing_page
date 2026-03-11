import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Container, Grid, Typography } from '@mui/material';
const MarketPlaceInvestor = () => {
    return (_jsx(Box, { sx: { py: { xs: 8, md: 12 } }, children: _jsx(Container, { children: _jsxs(Grid, { container: true, spacing: 6, alignItems: "center", children: [_jsx(Grid, { size: { xs: 12, md: 6 }, children: _jsx(Box, { component: "img", src: "/images/platform/invertir.png", alt: "Vista del proyecto", sx: {
                                width: "100%",
                                borderRadius: "20px",
                                boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
                            } }) }), _jsxs(Grid, { size: { xs: 12, md: 6 }, children: [_jsxs(Typography, { variant: "h3", fontWeight: 800, sx: { lineHeight: 1.2 }, children: ["Invertir en ", _jsx("br", {}), "inmuebles"] }), _jsx(Typography, { variant: "h3", fontWeight: 800, sx: {
                                    color: "#8CC63F",
                                    mt: -1,
                                    mb: 2,
                                }, children: "a un solo clic" }), _jsx(Typography, { sx: { maxWidth: 420, color: "#555", lineHeight: 1.6 }, children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus." })] })] }) }) }));
};
export default MarketPlaceInvestor;
