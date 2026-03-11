import { Box, Grid, Typography, Divider, Link as MuiLink, useTheme } from "@mui/material";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Footer = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollToSolutions = () => {
    if (location.pathname === "/") {
      const section = document.getElementById("soluciones");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/", { state: { scrollTo: "soluciones" } });
    }
  };

  return (
    <Box
      component="footer"
      sx={{
        background: "linear-gradient(180deg, #0F2027 0%, #203A43 50%, #2C5364 100%)",
        color: theme.palette.text.primary,
        pt: 8,
        pb: 4,
      }}
    >
      <Grid
        container
        spacing={4}
        sx={{
          maxWidth: "1200px",
          mx: "auto",
          px: { xs: 2, md: 6 },
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <Grid size={{ xs: 12, md: 6 }}>
          <Box component="img" src="/DIS.svg" alt="Logo Dishub" sx={{ height: 40, width: "auto" }} />

          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            Conectamos la gestión de activos, propiedades e inversión
            en una sola plataforma.
          </Typography>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
            Enlaces
          </Typography>

          <MuiLink
            component={Link}
            to="/"
            sx={{ display: "block", mb: 1, color: "inherit", "&:hover": { color: theme.palette.primary.main }, textDecoration: "none" }}
          >
            Inicio
          </MuiLink>

          <Typography
            onClick={handleScrollToSolutions}
            sx={{
              display: "block",
              mb: 1,
              cursor: "pointer",
              color: "inherit",
              "&:hover": { color: theme.palette.primary.main },
            }}
          >
            Soluciones
          </Typography>

          <MuiLink
            component={Link}
            to="/contacto"
            sx={{ display: "block", mb: 1, color: "inherit", "&:hover": { color: theme.palette.primary.main }, textDecoration: "none" }}
          >
            Contacto
          </MuiLink>
        </Grid>
      </Grid>

      <Divider
        sx={{
          my: 4,
          borderColor: "rgba(255,255,255,0.1)",
          maxWidth: "1200px",
          mx: "auto",
        }}
      />

      <Typography variant="body2" align="center" sx={{ opacity: 0.7, fontSize: "0.85rem" }}>
        © {new Date().getFullYear()} Dishub. Todos los derechos reservados.
      </Typography>
    </Box>
  );
};

export default Footer;
