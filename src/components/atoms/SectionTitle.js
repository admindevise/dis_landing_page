import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Typography, Box } from "@mui/material";
const SectionTitle = ({ title, subtitle }) => (_jsxs(Box, { sx: { textAlign: "center", mb: 6 }, children: [_jsx(Typography, { variant: "h3", sx: { fontWeight: 700, mb: 1 }, children: title }), subtitle && (_jsx(Typography, { variant: "h6", sx: { color: "text.secondary", fontWeight: 400 }, children: subtitle }))] }));
export default SectionTitle;
