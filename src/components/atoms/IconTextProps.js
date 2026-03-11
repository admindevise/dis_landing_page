import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Stack, Typography } from '@mui/material';
const IconTextProps = ({ icon, text }) => {
    return (_jsxs(Stack, { direction: "row", alignItems: "center", spacing: 1, children: [icon, _jsx(Typography, { variant: "body1", children: text })] }));
};
export default IconTextProps;
