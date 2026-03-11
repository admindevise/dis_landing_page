import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AppBar, Toolbar, Box, Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
const HeaderDevise = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const isActive = (path) => location.pathname === path;
    return (_jsx(AppBar, { position: "fixed", sx: {
            backgroundColor: "#ffff",
            boxShadow: "none",
        }, children: _jsxs(Toolbar, { sx: { justifyContent: "space-between", px: { xs: 2, md: 8 } }, children: [_jsx(Box, { onClick: () => navigate("/"), sx: {
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        cursor: "pointer",
                    }, children: _jsx(Box, { component: "img", src: "/images/logos/DeviseLogo.png", alt: "Devise", sx: { height: 40, width: "auto" } }) }), _jsxs(Box, { sx: { display: { xs: "none", md: "flex" }, gap: 3 }, children: [_jsx(Button, { onClick: () => navigate("/"), sx: {
                                fontWeight: 600,
                                textTransform: "none",
                                color: "#312478",
                                borderBottom: "none",
                                "&:hover": {
                                    color: "#8CAA27",
                                },
                            }, children: "Inicio" }), _jsx(Button, { onClick: () => navigate("/devise/devise-business"), sx: {
                                fontWeight: 600,
                                textTransform: "none",
                                color: isActive("/devise/devise-business") ? "#8CAA27" : "#312478",
                                borderBottom: isActive("/devise/devise-business")
                                    ? "2px solid #8CAA27"
                                    : "none",
                                "&:hover": {
                                    color: "#8CAA27",
                                },
                            }, children: "Devise Business" }), _jsx(Button, { onClick: () => navigate("/devise/devise-marketplace"), sx: {
                                fontWeight: 600,
                                textTransform: "none",
                                color: isActive("/devise/devise-marketplace") ? "#8CAA27" : "#312478",
                                borderBottom: isActive("/devise/devise-marketplace")
                                    ? "2px solid #8CAA27"
                                    : "none",
                                "&:hover": {
                                    color: "#8CAA27",
                                },
                            }, children: "Devise MarketPlace" })] })] }) }));
};
export default HeaderDevise;
