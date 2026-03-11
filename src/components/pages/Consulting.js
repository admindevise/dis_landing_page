import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box } from "@mui/material";
import ConsultingHero from "../organisms/ConsultingSection/ConsultingHero";
import ConsultingCTA from "../organisms/ConsultingSection/ConsultingCTA";
import ConsultingModules from "../organisms/ConsultingSection/ConsultingModules";
import ConsultingSteps from "../organisms/ConsultingSection/ConsultingSteps";
import ConsultingBenefits from "../organisms/ConsultingSection/ConsultingBenefits";
import DISHUBConnectionConsulting from "../organisms/ConsultingSection/DISHUBConnectionConsulting";
const Consulting = () => {
    return (_jsxs(Box, { children: [_jsx(ConsultingHero, {}), _jsx(ConsultingBenefits, {}), _jsx(ConsultingSteps, {}), _jsx(ConsultingModules, {}), _jsx(DISHUBConnectionConsulting, {}), _jsx(ConsultingCTA, {})] }));
};
export default Consulting;
