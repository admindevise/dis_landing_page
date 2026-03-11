import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AppBar, Toolbar, Box, Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
const HeaderValuo = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const isActive = (path) => location.pathname === path;
    return (_jsx(AppBar, { position: "fixed", sx: {
            backgroundColor: "hsl(210, 27%, 12%, 0.8)",
            boxShadow: "0 0 15px rgba(59,110,168,0.25)",
            backdropFilter: "blur(4px)",
        }, children: _jsxs(Toolbar, { sx: { justifyContent: "space-between", px: { xs: 2, md: 8 } }, children: [_jsx(Box, { onClick: () => navigate("/"), sx: {
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        cursor: "pointer",
                    }, children: _jsx(Box, { component: "img", src: "/images/logos/ValuoLogo.png", alt: "Valuo", sx: {
                            height: 40,
                            width: "auto",
                            filter: "brightness(0) invert(1)"
                        } }) }), _jsxs(Box, { sx: { display: { xs: "none", md: "flex" }, gap: 3 }, children: [_jsx(Button, { onClick: () => navigate("/"), sx: {
                                fontWeight: 600,
                                textTransform: "none",
                                color: "#ffffffcc",
                                letterSpacing: "0.5px",
                                borderBottom: "none",
                                transition: "0.3s",
                                "&:hover": {
                                    color: "#3B6EA8",
                                },
                            }, children: "Inicio" }), _jsx(Button, { onClick: () => window.open("https://id-preview--287657e5-2bea-4556-bb47-1384309cba10.lovable.app/", "_blank"), sx: {
                                fontWeight: 600,
                                textTransform: "none",
                                letterSpacing: "0.5px",
                                color: isActive("/valuo")
                                    ? "#3B6EA8"
                                    : "#ffffffcc",
                                borderBottom: isActive("/valuo")
                                    ? "2px solid #3B6EA8"
                                    : "none",
                                transition: "0.3s",
                                "&:hover": {
                                    color: "#3B6EA8",
                                },
                            }, children: "Valuo" })] })] }) }));
};
export default HeaderValuo;
