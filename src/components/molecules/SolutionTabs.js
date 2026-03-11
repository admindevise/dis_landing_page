import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { Button, Box, useTheme, useMediaQuery } from "@mui/material";
import ProgressBar from "../atoms/ProgressBar";
const SolutionTabs = ({ modules, activeIndex, onSelect, autoDuration }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    return (_jsx(Box, { sx: {
            overflowX: isMobile ? "auto" : "visible",
            overflowY: "hidden",
            display: "flex",
            flexDirection: isMobile ? "row" : "column",
            gap: 2,
            pb: isMobile ? 1 : 0,
            "&::-webkit-scrollbar": {
                display: "none",
            },
            scrollbarWidth: "none",
        }, children: modules.map((module, index) => (_jsxs(Box, { sx: { flex: isMobile ? "0 0 auto" : "1", width: isMobile ? "auto" : "100%" }, children: [_jsxs(Button, { onClick: () => onSelect(index), variant: activeIndex === index ? "contained" : "outlined", color: "primary", sx: {
                        justifyContent: "flex-start",
                        gap: 1.5,
                        width: "100%",
                        borderRadius: 3,
                        textTransform: "none",
                        fontWeight: activeIndex === index ? 600 : 400,
                        transition: "all 0.3s ease",
                        display: "flex",
                        alignItems: "flex-start",
                        position: "relative",
                        "& svg": {
                            opacity: activeIndex === index ? 1 : 0.6,
                            transform: activeIndex === index ? "scale(1.1)" : "scale(1)",
                            transition: "all 0.3s ease",
                        },
                    }, children: [module.icon, module.name] }), activeIndex === index && !isMobile && (_jsx(Box, { sx: { mt: 1 }, children: _jsx(ProgressBar, { duration: autoDuration, isActive: true }) }))] }, module.name))) }));
};
export default SolutionTabs;
