import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { AppBar, Toolbar, Box, Button, IconButton, Drawer, List, ListItem, Menu, MenuItem, } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
const Header = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const location = useLocation();
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [mobileSubMenuOpen, setMobileSubMenuOpen] = useState(false);
    const openDropdown = Boolean(anchorEl);
    const handleDropdownOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleDropdownClose = () => {
        setAnchorEl(null);
    };
    const handleSolutionClick = () => {
        navigate("/soluciones");
        handleDropdownClose();
    };
    const handleSolutionNavigate = (path, external) => {
        if (external) {
            window.open(path, '_blank');
        }
        else {
            navigate(path);
        }
        handleDropdownClose();
        setOpen(false);
        setMobileSubMenuOpen(false);
    };
    const handleNavigate = (path) => {
        navigate(path);
        setOpen(false);
    };
    const isActive = (path) => location.pathname === path;
    const isSolutionActive = () => {
        return location.pathname === "/soluciones" ||
            location.pathname === "/devise/devise-business" ||
            location.pathname === "/devise/devise-marketplace" ||
            location.pathname === "/consulting";
    };
    const isConsultingRoute = location.pathname.startsWith("/consulting");
    const logoSrc = isConsultingRoute
        ? "/images/logos/BrickFlowLogo.png"
        : "/DIS.svg";
    return (_jsx(AppBar, { position: "fixed", sx: {
            backgroundColor: theme.palette.secondary.main,
            boxShadow: "none",
        }, children: _jsxs(Toolbar, { sx: { justifyContent: "space-between", px: { xs: 2, md: 8 } }, children: [_jsx(Box, { onClick: () => navigate("/"), sx: {
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        cursor: "pointer",
                        "& img": { transition: "transform 0.3s ease" },
                        "&:hover img": { transform: "scale(1.05)" },
                    }, children: _jsx(Box, { component: "img", src: logoSrc, alt: "Logo Dishub", sx: { height: 40, width: "auto" } }) }), _jsxs(Box, { sx: { display: { xs: "none", md: "flex" }, gap: 3 }, children: [_jsx(Button, { onClick: () => navigate("/"), sx: {
                                color: isActive("/") ? theme.palette.primary.main : "white",
                                textTransform: "none",
                                fontWeight: isActive("/") ? 700 : 600,
                                borderBottom: isActive("/") ? "2px solid white" : "none",
                            }, children: "Inicio" }), _jsxs(Box, { sx: { position: "relative" }, onMouseEnter: handleDropdownOpen, onMouseLeave: handleDropdownClose, children: [_jsx(Button, { onClick: handleSolutionClick, endIcon: _jsx(KeyboardArrowDownIcon, {}), sx: {
                                        color: isSolutionActive()
                                            ? theme.palette.primary.main
                                            : "white",
                                        textTransform: "none",
                                        fontWeight: isSolutionActive() ? 700 : 600,
                                        borderBottom: isSolutionActive() ? "2px solid white" : "none",
                                    }, children: "Soluciones" }), _jsxs(Menu, { anchorEl: anchorEl, open: openDropdown, onClose: handleDropdownClose, sx: {
                                        mt: 1,
                                    }, MenuListProps: {
                                        sx: {
                                            pointerEvents: "auto",
                                        }
                                    }, children: [_jsx(MenuItem, { onClick: () => handleSolutionNavigate("/soluciones", true), children: "Ver todas" }), _jsx(MenuItem, { onClick: () => handleSolutionNavigate("/devise/devise-business", true), children: "Devise Business" }), _jsx(MenuItem, { onClick: () => handleSolutionNavigate("/devise/devise-marketplace", true), children: "Devise Marketplace" }), _jsx(MenuItem, { onClick: () => handleSolutionNavigate("https://id-preview--287657e5-2bea-4556-bb47-1384309cba10.lovable.app/", true), children: "Valuo" }), _jsx(MenuItem, { onClick: () => handleSolutionNavigate("/consulting", true), children: "Brickflow" })] })] }), _jsx(Button, { onClick: () => navigate("/nosotros"), sx: {
                                color: isActive("/nosotros")
                                    ? theme.palette.primary.main
                                    : "white",
                                textTransform: "none",
                                fontWeight: isActive("/nosotros") ? 700 : 600,
                                borderBottom: isActive("/nosotros")
                                    ? "2px solid white"
                                    : "none",
                            }, children: "Nosotros" }), _jsx(Button, { onClick: () => handleNavigate("/contacto"), sx: {
                                color: isActive("/contacto")
                                    ? theme.palette.primary.main
                                    : "white",
                                textTransform: "none",
                                fontWeight: isActive("/contacto") ? 700 : 600,
                                border: "1px solid white",
                                borderRadius: 3,
                                px: 2,
                                backgroundColor: isActive("/contacto")
                                    ? "rgba(255,255,255,0.1)"
                                    : "transparent",
                            }, children: "Cont\u00E1ctanos" })] }), _jsx(IconButton, { sx: { display: { xs: "block", md: "none" }, color: "white" }, onClick: () => setOpen(true), children: _jsx(MenuIcon, {}) }), _jsx(Drawer, { anchor: "right", open: open, onClose: () => setOpen(false), children: _jsxs(List, { sx: { width: 220 }, children: [_jsx(ListItem, { onClick: () => handleNavigate("/"), sx: {
                                    fontWeight: isActive("/") ? 700 : 500,
                                    color: isActive("/") ? theme.palette.primary.main : "inherit",
                                    cursor: "pointer",
                                }, children: "Inicio" }), _jsxs(ListItem, { onClick: () => {
                                    setMobileSubMenuOpen(!mobileSubMenuOpen);
                                }, sx: {
                                    fontWeight: isSolutionActive() ? 700 : 500,
                                    color: isSolutionActive() ? theme.palette.primary.main : "inherit",
                                    display: "flex",
                                    justifyContent: "space-between",
                                    cursor: "pointer",
                                }, children: ["Soluciones", _jsx(KeyboardArrowDownIcon, { sx: {
                                            transform: mobileSubMenuOpen ? "rotate(180deg)" : "rotate(0deg)",
                                            transition: "transform 0.3s"
                                        } })] }), mobileSubMenuOpen && (_jsxs(_Fragment, { children: [_jsx(ListItem, { onClick: () => handleSolutionNavigate("/soluciones"), sx: { pl: 4, fontSize: "0.9rem", cursor: "pointer" }, children: "Ver todas" }), _jsx(ListItem, { onClick: () => handleSolutionNavigate("/devise/devise-business"), sx: { pl: 4, fontSize: "0.9rem", cursor: "pointer" }, children: "Devise Business" }), _jsx(ListItem, { onClick: () => handleSolutionNavigate("/devise/devise-marketplace"), sx: { pl: 4, fontSize: "0.9rem", cursor: "pointer" }, children: "Devise Marketplace" }), _jsx(ListItem, { onClick: () => handleSolutionNavigate("https://valuo.com.co", true), sx: { pl: 4, fontSize: "0.9rem", cursor: "pointer" }, children: "Valuo" }), _jsx(ListItem, { onClick: () => handleSolutionNavigate("/consulting"), sx: { pl: 4, fontSize: "0.9rem", cursor: "pointer" }, children: "Brickflow" })] })), _jsx(ListItem, { onClick: () => {
                                    navigate("/nosotros");
                                    setOpen(false);
                                }, sx: {
                                    fontWeight: isActive("/nosotros") ? 700 : 500,
                                    color: isActive("/nosotros")
                                        ? theme.palette.primary.main
                                        : "inherit",
                                    cursor: "pointer",
                                }, children: "Nosotros" }), _jsx(ListItem, { onClick: () => handleNavigate("/contacto"), sx: {
                                    fontWeight: isActive("/contacto") ? 700 : 500,
                                    color: isActive("/contacto")
                                        ? theme.palette.primary.main
                                        : "inherit",
                                    cursor: "pointer",
                                }, children: "Cont\u00E1ctanos" })] }) })] }) }));
};
export default Header;
