import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box } from "@mui/material";
import BusinessCTA from "../organisms/BusinessSection/BusinessCTA";
import BusinessFeatures from "../organisms/BusinessSection/BusinessFeatures";
import BusinessHero from "../organisms/BusinessSection/BusinessHero";
import BusinessModules from "../organisms/BusinessSection/BusinessModules";
import DISHUBConnection from "../organisms/BusinessSection/DISHUBConnection";
const DeviseBusiness = () => {
    return (_jsxs(Box, { sx: { background: "#ffff" }, children: [_jsx(BusinessHero, {}), _jsx(BusinessFeatures, {}), _jsx(BusinessModules, {}), _jsx(DISHUBConnection, {}), _jsx(BusinessCTA, {})] }));
};
export default DeviseBusiness;
