import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box } from "@mui/material";
import SectionTitle from "../atoms/SectionTitle";
import ProblemList from "../molecules/ProblemList";
const ProblemSection = () => (_jsxs(Box, { sx: {
        py: 10,
        px: 4,
        bgcolor: '#27445A',
        minHeight: '100vh'
    }, children: [_jsx(SectionTitle, { title: "El desaf\u00EDo del sector inmobiliario digital", subtitle: "Identificamos y desarrollamos soluciones para la desconexi\u00F3n entre la gesti\u00F3n de activos, propiedades e inversi\u00F3n que limita el crecimiento y la eficiencia." }), _jsx(Box, { sx: { maxWidth: '1400px', margin: '0 auto', mt: 8 }, children: _jsx(ProblemList, {}) })] }));
export default ProblemSection;
