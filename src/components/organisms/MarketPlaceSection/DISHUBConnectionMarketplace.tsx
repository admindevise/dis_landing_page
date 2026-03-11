import { Box, Container, Typography, Button } from "@mui/material";
import { useTheme, alpha } from "@mui/material/styles";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import { useNavigate } from "react-router-dom";

const DISHUBConnectionMarketplace = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        py: 10,
        background: `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, ${theme.palette.secondary.dark} 100%)`,
        color: "#fff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Elementos decorativos sutiles */}
      <Box
        sx={{
          position: "absolute",
          top: "-5%",
          right: "-5%",
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${alpha(theme.palette.primary.main, 0.15)} 0%, transparent 70%)`,
          filter: "blur(60px)",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "-5%",
          left: "-5%",
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${alpha(theme.palette.primary.light, 0.1)} 0%, transparent 70%)`,
          filter: "blur(60px)",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: 6,
          }}
        >
          {/* Lado izquierdo: Logo y badge */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                mb: 3,
                p: 2.5,
                borderRadius: 3,
                backgroundColor: alpha(theme.palette.primary.main, 0.1),
                border: `1px solid ${alpha(theme.palette.primary.main, 0.3)}`,
              }}
            >
              <Box
                component="img"
                src="/DIS.svg"
                alt="DIS Logo"
                sx={{
                  height: 45,
                  width: "auto",
                }}
              />
              <Typography
                variant="body2"
                sx={{
                  fontWeight: 700,
                  color: theme.palette.primary.main,
                  letterSpacing: "1.5px",
                  fontSize: "0.75rem",
                }}
              >
                INNOVATION LAB
              </Typography>
            </Box>

            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                mb: 2,
                lineHeight: 1.3,
              }}
            >
              Democratizando la inversión inmobiliaria desde DISHUB
            </Typography>

            <Typography
              variant="body1"
              sx={{
                opacity: 0.85,
                lineHeight: 1.8,
                mb: 3,
                maxWidth: 500,
              }}
            >
              Devise Marketplace es desarrollado en <strong>DISHUB</strong> con una misión clara: hacer que la inversión inmobiliaria sea accesible para todos. Creamos la tecnología que permite a las fiduciarias ofrecer oportunidades de inversión digitales, transparentes y sin barreras de entrada.
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                p: 3,
                borderRadius: 2,
                backgroundColor: alpha(theme.palette.primary.main, 0.08),
                border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
              }}
            >
              <RocketLaunchIcon sx={{ fontSize: 40, color: theme.palette.primary.light }} />
              <Box>
                <Typography variant="body2" sx={{ opacity: 0.7, mb: 0.5 }}>
                  Desde 2023
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  Innovando en FinTech
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Lado derecho: Info y CTA */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            <Box
              sx={{
                p: 4,
                borderRadius: 3,
                backgroundColor: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.15)",
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                Tecnología regulada para fiduciarias
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.85, lineHeight: 1.7 }}>
                En DISHUB entendemos el marco regulatorio colombiano. Devise Marketplace está diseñado para que tu fiduciaria pueda ofrecer inversión digital cumpliendo con todas las normativas, facilitando KYC, trazabilidad, reporting y custodia de documentos con los más altos estándares.
              </Typography>
            </Box>

            <Box
              sx={{
                p: 4,
                borderRadius: 3,
                background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.15)} 0%, ${alpha(theme.palette.primary.light, 0.1)} 100%)`,
                border: `1px solid ${alpha(theme.palette.primary.main, 0.3)}`,
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontWeight: 600,
                  mb: 2,
                  color: theme.palette.primary.light,
                }}
              >
                Parte del ecosistema DISHUB
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.9, mb: 3, lineHeight: 1.7 }}>
                Devise Marketplace es una de las soluciones FinTech que desarrollamos en nuestro laboratorio de innovación para transformar la industria financiera colombiana con tecnología de vanguardia y cumplimiento regulatorio total.
              </Typography>
              <Button
                variant="outlined"
                onClick={() => navigate("/")}
                sx={{
                  borderColor: theme.palette.primary.main,
                  color: theme.palette.primary.main,
                  textTransform: "none",
                  fontWeight: 600,
                  px: 3,
                  py: 1,
                  borderRadius: 2,
                  "&:hover": {
                    borderColor: theme.palette.primary.light,
                    backgroundColor: alpha(theme.palette.primary.main, 0.1),
                  },
                }}
              >
                Explorar DISHUB
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default DISHUBConnectionMarketplace;
