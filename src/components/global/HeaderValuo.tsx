import { AppBar, Toolbar, Box, Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

const HeaderValuo = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "hsl(210, 27%, 12%, 0.8)",
        boxShadow: "0 0 15px rgba(59,110,168,0.25)",
        backdropFilter: "blur(4px)",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", px: { xs: 2, md: 8 } }}>

        {/* LOGO */}
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
            src="/images/logos/ValuoLogo.png"
            alt="Valuo"
            sx={{
              height: 40,
              width: "auto",
              filter: "brightness(0) invert(1)"
            }}
          />
        </Box>

        {/* NAV */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
          <Button
            onClick={() => navigate("/")}
            sx={{
              fontWeight: 600,
              textTransform: "none",
              color: "#ffffffcc",
              letterSpacing: "0.5px",
              borderBottom: "none",
              transition: "0.3s",
              "&:hover": {
                color: "#3B6EA8",
              },
            }}
          >
            Inicio
          </Button>

          <Button
            onClick={() => window.open("https://id-preview--287657e5-2bea-4556-bb47-1384309cba10.lovable.app/", "_blank")}
            sx={{
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
            }}
          >
            Valuo
          </Button>
        </Box>

      </Toolbar>
    </AppBar>
  );
};

export default HeaderValuo;
