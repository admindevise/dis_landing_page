import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Box, Stack, Button } from "@mui/material";
import PlatformModule from "../../organisms/PlatformModules";
import SectionTitle from "../../atoms/SectionTitle";
import SolutionSectionBackground from "./SolutionSectionBackground";
const solutions = [
    { key: "adminDevise", icon: "images/logos/DeviseBusiness.png" },
    { key: "inversionistaDevise", icon: "images/logos/DeviseMarketplace.png" },
    { key: "valuo", icon: "images/logos/valuo.png" },
    { key: "consultoria", icon: "images/logos/consultoría.png" },
];
const SolutionsSection = () => {
    const [active, setActive] = useState("adminDevise");
    return (_jsxs(Box, { sx: {
            position: "relative",
            py: 10,
            px: { xs: 3, md: 8 },
            overflow: "hidden",
            backgroundColor: "background.default",
        }, children: [_jsx(SolutionSectionBackground, {}), _jsxs(Box, { sx: { position: "relative", zIndex: 1 }, children: [_jsx(SectionTitle, { title: "Soluciones DIS", subtitle: "Soluciones tecnol\u00F3gicas nacidas del an\u00E1lisis y la investigaci\u00F3n, dise\u00F1adas para hacer m\u00E1s eficiente la gesti\u00F3n inmobiliaria y financiera." }), _jsx(Stack, { direction: "row", spacing: 2, mb: 1, justifyContent: "center", children: solutions.map((s) => (_jsx(Button, { onClick: () => setActive(s.key), variant: active === s.key ? "contained" : "outlined", color: "primary", sx: {
                                borderRadius: 3,
                                width: 150,
                                height: 60,
                                p: 1,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }, children: _jsx("img", { src: s.icon, alt: s.key, style: {
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "contain",
                                } }) }, s.key))) }), active === "adminDevise" && _jsx(PlatformModule, { role: "admin" }), active === "inversionistaDevise" && (_jsx(PlatformModule, { role: "inversionista" })), active === "valuo" && (_jsx(PlatformModule, { role: "valuo" })), active === "consultoria" && (_jsx(PlatformModule, { role: "consultoria" }))] })] }));
};
export default SolutionsSection;
