import { Box, Button, Typography, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import AnimatedBackground from "../organisms/AnimatedBackground";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        overflow: "hidden",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        px: { xs: 3, md: 12 },
      }}
    >
      <AnimatedBackground />
      <Box sx={{ position: "relative", zIndex: 2 }}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: 700,
            fontSize: { xs: "2.5rem", md: "4rem" },
            lineHeight: 1.2,
            maxWidth: "945px",
          }}
        >
          Laboratorio de Innovación: <br />
          <Box component="span" sx={{ color: theme.palette.primary.main }}>
            Desarrollamos Tecnología con ADN Inmobiliario.
          </Box>
        </Typography>

        <Typography
          variant="h6"
          sx={{
            mt: 3,
            color: theme.palette.primary.light,
            opacity: 0.9,
            fontWeight: 500,
          }}
        >
          Creamos y desarrollamos productos tecnológicos que transforman el Caos Operativo en Eficiencia Digital.
        </Typography>

        {/* TEXTO SECUNDARIO */}
        <Typography
          variant="body1"
          sx={{
            mt: 2,
            mb: 5,
            color: "rgba(255, 255, 255, 0.85)",
            maxWidth: "650px",
            fontSize: "1.1rem",
            fontWeight: 500,
          }}
        >
          Desde nuestro laboratorio, diseñamos, desarrollamos e implementamos productos que automatizan procesos,
          centralizan la información y garantizan eficiencia, trazabilidad y transparencia,
          impulsando la innovación en el sector financiero e inmobiliario.
        </Typography>

        <Stack direction="row" spacing={2}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.background.default,
              fontWeight: 700,
              px: 4,
              py: 1.5,
              borderRadius: 3,
              textTransform: "none",
              fontFamily: "'Baloo 2', sans-serif",
              "&:hover": {
                backgroundColor: theme.palette.primary.light,
              },
            }}
            onClick={() => navigate("/soluciones")}
          >
            Explorar soluciones
          </Button>

          <Button
            variant="outlined"
            sx={{
              color: theme.palette.primary.main,
              borderColor: theme.palette.primary.main,
              fontWeight: 700,
              px: 4,
              py: 1.5,
              borderRadius: 3,
              textTransform: "none",
              fontFamily: "'Baloo 2', sans-serif",
              "&:hover": {
                backgroundColor: theme.palette.primary.main + "10",
              },
            }}
            onClick={() => navigate("/nosotros")}
          >
            Conócenos
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default Hero;
