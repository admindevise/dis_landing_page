import { Box, Container, Grid, Typography } from "@mui/material"

const ValuoSteps = () => {
  const steps = [
    {
      number: "01",
      title: "Input del Usuario",
      description:
        "Ingresa las características básicas del inmueble: área, antigüedad, estrato y remodelaciones.",
    },
    {
      number: "02",
      title: "Análisis de Mercado",
      description:
        "Cruzamos datos de ofertas actuales, transacciones reales en notariado y dinámica del sector.",
    },
    {
      number: "03",
      title: "Normativa & Entorno",
      description:
        "Consideramos el POT vigente, futuros desarrollos urbanos y accesibilidad de la zona.",
    },
    {
      number: "04",
      title: "Reporte Certificado",
      description:
        "Recibe un informe detallado con rangos de confianza, ideal para bancos o venta directa.",
    },
  ];

  return (
    <Box
      sx={{
        background: `
          radial-gradient(circle at 20% 30%, hsla(212, 48%, 55%, 0.22), transparent 60%),
          radial-gradient(circle at 80% 70%, hsla(212, 48%, 55%, 0.18), transparent 60%),
          hsl(210, 27%, 12%)
        `,
        py: 12,
      }}
    >
      <Container maxWidth="lg" sx={{ textAlign: "center" }}>
        <Typography
          variant="h3"
          fontWeight={700}
          sx={{
            mb: 6,
            color: "hsl(216, 33%, 97%)",
            fontSize: { xs: "2rem", md: "2.6rem" },
          }}
        >
          Cómo funciona Valuo
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {steps.map((step) => (
            <Grid
              size={{ xs: 12, md: 6 }}
              key={step.number}
            >
              <Box
                sx={{
                  position: "relative",
                  height: "100%",
                  borderRadius: "24px",
                  px: 4,
                  py: 6,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  border: "1px solid hsla(210, 50%, 25%)",
                  transition: "all 0.3s ease",
                  overflow: "hidden",

                  // Barra lateral luminosa
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "4px",
                    height: "100%",
                    background: "linear-gradient(180deg, hsl(212, 48%, 45%), hsl(212, 48%, 55%))",
                    opacity: 0.7,
                    borderRadius: "4px",
                    transition: "opacity 0.3s ease",
                  },

                  // Glow dinámico
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    inset: 0,
                    borderRadius: "inherit",
                    opacity: 0,
                    boxShadow: "0 0 30px hsla(212, 48%, 55%, 0.5)",
                    transition: "opacity .3s",
                  },

                  "&:hover::before": {
                    opacity: 1,
                  },

                  "&:hover::after": {
                    opacity: 1,
                  },

                  "&:hover": {
                    transform: "translateY(-6px)",
                    border: "1px solid hsla(212, 48%, 55%, 0.6)",
                    boxShadow: "0 0 35px hsla(212, 48%, 55%, 0.4)",
                    cursor: "pointer",
                  },
                }}
              >
                {/* Número holográfico */}
                <Typography
                  variant="h1"
                  sx={{
                    position: "absolute",
                    top: -20,
                    left: 20,
                    fontSize: "5.5rem",
                    fontWeight: 800,
                    opacity: 0.06,
                    lineHeight: 1,
                    background: "linear-gradient(180deg, hsl(212, 48%, 45%), hsl(212, 48%, 55%))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    transition: "opacity 0.3s ease",
                    ".MuiBox-root:hover &": {
                      opacity: 0.15,
                    },
                  }}
                >
                  {step.number}
                </Typography>

                {/* Título */}
                <Typography
                  variant="h6"
                  sx={{
                    mb: 2,
                    color: "hsl(216, 33%, 97%)",
                    fontWeight: 700,
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  {step.title}
                </Typography>

                {/* Descripción */}
                <Typography
                  variant="body2"
                  sx={{
                    color: "rgba(255,255,255,0.7)",
                    maxWidth: 340,
                    mx: "auto",
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  {step.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ValuoSteps;
