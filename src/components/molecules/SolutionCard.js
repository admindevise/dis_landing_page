import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent, Typography, Box } from "@mui/material";
const SolutionCard = ({ title, description, image }) => {
    return (_jsxs(Card, { sx: {
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            borderRadius: 3,
            boxShadow: 3,
            overflow: "hidden",
        }, children: [_jsx(Box, { component: "img", src: image, alt: title, sx: {
                    width: { xs: "100%", md: "40%" },
                    height: 300,
                    objectFit: "cover",
                } }), _jsxs(CardContent, { sx: { flex: 1, p: 4 }, children: [_jsx(Typography, { variant: "h5", sx: { mb: 2, fontWeight: 700 }, children: title }), _jsx(Typography, { variant: "body1", color: "text.secondary", children: description })] })] }));
};
export default SolutionCard;
