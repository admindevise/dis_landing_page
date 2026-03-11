import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box } from "@mui/material";
import ValuoHero from "../organisms/ValuoSection/ValuoHero";
import ValuoSteps from "../organisms/ValuoSection/ValuoSteps";
import ValuoHeatmapSection from "../organisms/ValuoSection/ValuoHeatmapSection";
import ValuoCTA from "../organisms/ValuoSection/ValuoCTA";
import ValuoPricing from "../organisms/ValuoSection/ValuoPricing";
import DISHUBConnectionValuo from "../organisms/ValuoSection/DISHUBConnectionValuo";
const Valuo = () => {
    return (_jsxs(Box, { children: [_jsx(ValuoHero, {}), _jsx(ValuoSteps, {}), _jsx(ValuoHeatmapSection, {}), _jsx(ValuoPricing, {}), _jsx(DISHUBConnectionValuo, {}), _jsx(ValuoCTA, {})] }));
};
export default Valuo;
