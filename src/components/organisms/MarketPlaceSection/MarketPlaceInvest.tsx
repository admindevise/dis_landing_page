import { Box, Container, Grid, Typography } from '@mui/material';

const MarketPlaceInvest = () => {
  return (
    <Box sx={{ py: { xs: 8, md: 12, background: "#ffff" } }}>
      <Container>
        <Grid
          container
          spacing={6}
          alignItems="center"
        >
          <Grid size={{ xs: 12, md: 6 }}
            sx={{
              position: "relative",
            }}
          >
            {/* Imagen que rompe el container */}
            <Box
              component="img"
              src="/images/platform/invertir.png"
              alt="Vista del proyecto"
              sx={{
                position: "absolute",
                left: 0,
                top: "50%",
                transform: "translate(-50%, -50%)",
                height: "420px",
                borderRadius: "20px",
                boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
                objectFit: "cover",
              }}
            />
            <Box sx={{ height: 420 }} />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              variant="h3"
              fontWeight={800}
              sx={{ lineHeight: 1.2, color: "#261E60" }}
            >
              Democratiza <br />
              la inversión
            </Typography>

            <Typography
              variant="h3"
              fontWeight={800}
              sx={{
                color: "#8CC63F",
                mt: -1,
                mb: 2,
              }}
            >
              inmobiliaria
            </Typography>

            <Typography sx={{ maxWidth: 480, color: "#575D6B", lineHeight: 1.6 }}>
              Permite que tus inversionistas participen en proyectos inmobiliarios de forma simple y digital. Devise Marketplace brinda a tu fiduciaria una plataforma white-label para que ofrezcas oportunidades de inversión con procesos automatizados, transparencia total y una experiencia de usuario excepcional.
            </Typography>
          </Grid>

        </Grid>

      </Container>

    </Box>
  );
};

export default MarketPlaceInvest;
