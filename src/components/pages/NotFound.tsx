import { Box, Typography, Button, Stack, keyframes } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AnimatedBackground from "../organisms/AnimatedBackground";
import SEO from "../atoms/SEO";

const glitch = keyframes`
  0% { transform: translate(0px, 0px) skew(0deg); }
  10% { transform: translate(-5px, 3px) skew(-1deg); }
  20% { transform: translate(4px, -4px) skew(1deg); }
  30% { transform: translate(-3px, 2px) skew(-1deg); }
  40% { transform: translate(2px, -2px) skew(0.5deg); }
  50% { transform: translate(-4px, 4px) skew(-0.5deg); }
  60% { transform: translate(3px, -3px) skew(1deg); }
  70% { transform: translate(-2px, 2px) skew(-0.5deg); }
  80% { transform: translate(5px, -5px) skew(1deg); }
  90% { transform: translate(-3px, 3px) skew(-1deg); }
  100% { transform: translate(0px, 0px) skew(0deg); }
`;

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <>
      <SEO
        title="404 | Página no encontrada - Dishub"
        description="La página que buscas no existe. Regresa al inicio y descubre cómo Dishub puede ayudarte a gestionar tus inversiones inmobiliarias."
        keywords="página no encontrada, error 404, Dishub"
        url="https://www.dishub.co/404"
        image="https://www.dishub.co/preview-404.png"
      />
      <Box
        sx={{
          position: "relative",
          height: "100vh",
          overflow: "hidden",
          px: { xs: 3, md: 10 },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <AnimatedBackground />

        <Stack
          spacing={3}
          sx={{
            position: "relative",
            zIndex: 1,
            textAlign: "center",
            color: "text.primary",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontWeight: 700,
              fontSize: { xs: 80, md: 150 },
              position: "relative",
              "&::before, &::after": {
                content: '"404"',
                position: "absolute",
                left: 0,
                top: 0,
                width: "100%",
                height: "100%",
                color: "primary.main",
                mixBlendMode: "screen",
                animation: `${glitch} 6s infinite`,
              },
              "&::after": {
                color: "secondary.main",
                animationDelay: "0.2s",
              },
            }}
          >
            404
          </Typography>

          <Typography variant="h5" sx={{ maxWidth: 600, mx: "auto" }}>
            La página que estás buscando no existe.
          </Typography>

          <Button
            variant="contained"
            size="large"
            onClick={() => navigate("/")}
            sx={{
              mt: 2,
              backgroundColor: "primary.main",
              color: "background.default",
              fontWeight: 700,
              borderRadius: 3,
              textTransform: "none",
              py: 1.5,
              "&:hover": { backgroundColor: "primary.light" },
            }}
          >
            Volver al inicio
          </Button>
        </Stack>
      </Box>
    </>
  );
};

export default NotFound;
