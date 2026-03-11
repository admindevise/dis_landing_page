import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { AlertTriangle } from "lucide-react";
const ProblemCard = ({ icon = _jsx(AlertTriangle, {}), title, description, image }) => (_jsxs(Card, { sx: {
        borderRadius: 3,
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        transition: "all 0.3s ease",
        "&:hover": { transform: "translateY(-4px)", boxShadow: "0 6px 16px rgba(0,0,0,0.12)" },
        width: "100%",
        maxWidth: 400,
        mx: "auto",
        display: "flex",
        flexDirection: "column",
        height: 150,
    }, children: [image && (_jsx(Box, { sx: { flex: "0 0 200px", overflow: "hidden" }, children: _jsx("img", { src: image, alt: title, style: { width: "100%", height: "100%", objectFit: "cover" } }) })), _jsxs(CardContent, { sx: { flex: 1 }, children: [_jsxs(Box, { sx: { display: "flex", alignItems: "center", mb: 1, color: "primary.main" }, children: [icon, _jsx(Typography, { variant: "h6", sx: { ml: 1, fontWeight: 600 }, children: title })] }), _jsx(Typography, { variant: "body1", color: "text.secondary", children: description })] })] }));
export default ProblemCard;
