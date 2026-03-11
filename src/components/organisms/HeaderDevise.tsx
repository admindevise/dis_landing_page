import { AppBar, Toolbar, Box, Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

const HeaderDevise = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#ffff",
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
          }}
        >
          <Box
            component="img"
            src="/images/logos/DeviseLogo.png"
            alt="Devise"
            sx={{ height: 40, width: "auto" }}
          />
        </Box>

        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
          <Button
            onClick={() => navigate("/")}
            sx={{
              fontWeight: 600,
              textTransform: "none",
              color: "#312478",
              borderBottom: "none",
              "&:hover": {
                color: "#8CAA27",
              },
            }}
          >
            Inicio
          </Button>
          <Button
            onClick={() => navigate("/devise/devise-business")}
            sx={{
              fontWeight: 600,
              textTransform: "none",
              color: isActive("/devise/devise-business") ? "#8CAA27" : "#312478",
              borderBottom: isActive("/devise/devise-business")
                ? "2px solid #8CAA27"
                : "none",
              "&:hover": {
                color: "#8CAA27",
              },
            }}
          >
            Devise Business
          </Button>
          <Button
            onClick={() => navigate("/devise/devise-marketplace")}
            sx={{
              fontWeight: 600,
              textTransform: "none",
              color: isActive("/devise/devise-marketplace") ? "#8CAA27" : "#312478",
              borderBottom: isActive("/devise/devise-marketplace")
                ? "2px solid #8CAA27"
                : "none",
              "&:hover": {
                color: "#8CAA27",
              },
            }}
          >
            Devise MarketPlace
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderDevise;
