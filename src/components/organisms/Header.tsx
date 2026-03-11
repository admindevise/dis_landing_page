import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [mobileSubMenuOpen, setMobileSubMenuOpen] = useState(false);
  const openDropdown = Boolean(anchorEl);

  const handleDropdownOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDropdownClose = () => {
    setAnchorEl(null);
  };

  const handleSolutionClick = () => {
    navigate("/soluciones");
    handleDropdownClose();
  };

  const handleSolutionNavigate = (path: string, external?: boolean) => {
    if (external) {
      window.open(path, '_blank');
    } else {
      navigate(path);
    }
    handleDropdownClose();
    setOpen(false);
    setMobileSubMenuOpen(false);
  };

  const handleNavigate = (path: string) => {
    navigate(path);
    setOpen(false);
  };

  const isActive = (path: string) => location.pathname === path;
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

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: theme.palette.secondary.main,
        boxShadow: "none",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", px: { xs: 2, md: 8 } }}>
        <Box
          onClick={() => navigate("/")}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            cursor: "pointer",
            "& img": { transition: "transform 0.3s ease" },
            "&:hover img": { transform: "scale(1.05)" },
          }}
        >
          <Box
            component="img"
            src={logoSrc}
            alt="Logo Dishub"
            sx={{ height: 40, width: "auto" }}
          />
        </Box>

        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
          <Button
            onClick={() => navigate("/")}
            sx={{
              color: isActive("/") ? theme.palette.primary.main : "white",
              textTransform: "none",
              fontWeight: isActive("/") ? 700 : 600,
              borderBottom: isActive("/") ? "2px solid white" : "none",
            }}
          >
            Inicio
          </Button>

          <Box
            sx={{ position: "relative" }}
            onMouseEnter={handleDropdownOpen}
            onMouseLeave={handleDropdownClose}
          >
            <Button
              onClick={handleSolutionClick}
              endIcon={<KeyboardArrowDownIcon />}
              sx={{
                color: isSolutionActive()
                  ? theme.palette.primary.main
                  : "white",
                textTransform: "none",
                fontWeight: isSolutionActive() ? 700 : 600,
                borderBottom: isSolutionActive() ? "2px solid white" : "none",
              }}
            >
              Soluciones
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={openDropdown}
              onClose={handleDropdownClose}
              sx={{
                mt: 1,
              }}
              MenuListProps={{
                sx: {
                  pointerEvents: "auto",
                }
              }}
            >
              <MenuItem onClick={() => handleSolutionNavigate("/soluciones", true)}>
                Ver todas
              </MenuItem>
              <MenuItem onClick={() => handleSolutionNavigate("/devise/devise-business", true)}>
                Devise Business
              </MenuItem>
              <MenuItem onClick={() => handleSolutionNavigate("/devise/devise-marketplace", true)}>
                Devise Marketplace
              </MenuItem>
              <MenuItem onClick={() => handleSolutionNavigate("https://id-preview--287657e5-2bea-4556-bb47-1384309cba10.lovable.app/", true)}>
                Valuo
              </MenuItem>
              <MenuItem onClick={() => handleSolutionNavigate("/consulting", true)}>
                Brickflow
              </MenuItem>
            </Menu>
          </Box>

          <Button
            onClick={() => navigate("/nosotros")}
            sx={{
              color: isActive("/nosotros")
                ? theme.palette.primary.main
                : "white",
              textTransform: "none",
              fontWeight: isActive("/nosotros") ? 700 : 600,
              borderBottom: isActive("/nosotros")
                ? "2px solid white"
                : "none",
            }}
          >
            Nosotros
          </Button>

          <Button
            onClick={() => handleNavigate("/contacto")}
            sx={{
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
            }}
          >
            Contáctanos
          </Button>
        </Box>

        {/* MENU MOBILE */}
        <IconButton
          sx={{ display: { xs: "block", md: "none" }, color: "white" }}
          onClick={() => setOpen(true)}
        >
          <MenuIcon />
        </IconButton>

        <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
          <List sx={{ width: 220 }}>
            <ListItem
              onClick={() => handleNavigate("/")}
              sx={{
                fontWeight: isActive("/") ? 700 : 500,
                color: isActive("/") ? theme.palette.primary.main : "inherit",
                cursor: "pointer",
              }}
            >
              Inicio
            </ListItem>
            <ListItem
              onClick={() => {
                setMobileSubMenuOpen(!mobileSubMenuOpen);
              }}
              sx={{
                fontWeight: isSolutionActive() ? 700 : 500,
                color: isSolutionActive() ? theme.palette.primary.main : "inherit",
                display: "flex",
                justifyContent: "space-between",
                cursor: "pointer",
              }}
            >
              Soluciones
              <KeyboardArrowDownIcon
                sx={{
                  transform: mobileSubMenuOpen ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.3s"
                }}
              />
            </ListItem>
            {mobileSubMenuOpen && (
              <>
                <ListItem
                  onClick={() => handleSolutionNavigate("/soluciones")}
                  sx={{ pl: 4, fontSize: "0.9rem", cursor: "pointer" }}
                >
                  Ver todas
                </ListItem>
                <ListItem
                  onClick={() => handleSolutionNavigate("/devise/devise-business")}
                  sx={{ pl: 4, fontSize: "0.9rem", cursor: "pointer" }}
                >
                  Devise Business
                </ListItem>
                <ListItem
                  onClick={() => handleSolutionNavigate("/devise/devise-marketplace")}
                  sx={{ pl: 4, fontSize: "0.9rem", cursor: "pointer" }}
                >
                  Devise Marketplace
                </ListItem>
                <ListItem
                  onClick={() => handleSolutionNavigate("https://valuo.com.co", true)}
                  sx={{ pl: 4, fontSize: "0.9rem", cursor: "pointer" }}
                >
                  Valuo
                </ListItem>
                <ListItem
                  onClick={() => handleSolutionNavigate("/consulting")}
                  sx={{ pl: 4, fontSize: "0.9rem", cursor: "pointer" }}
                >
                  Brickflow
                </ListItem>
              </>
            )}
            <ListItem
              onClick={() => {
                navigate("/nosotros");
                setOpen(false);
              }}
              sx={{
                fontWeight: isActive("/nosotros") ? 700 : 500,
                color: isActive("/nosotros")
                  ? theme.palette.primary.main
                  : "inherit",
                cursor: "pointer",
              }}
            >
              Nosotros
            </ListItem>
            <ListItem
              onClick={() => handleNavigate("/contacto")}
              sx={{
                fontWeight: isActive("/contacto") ? 700 : 500,
                color: isActive("/contacto")
                  ? theme.palette.primary.main
                  : "inherit",
                cursor: "pointer",
              }}
            >
              Contáctanos
            </ListItem>
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
