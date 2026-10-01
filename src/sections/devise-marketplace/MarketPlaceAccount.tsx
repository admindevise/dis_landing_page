import { Box, Grid, Typography } from '@mui/material';

const MarketPlaceAccount = () => {
  return (
    <Box
      sx={{
        bgcolor: '#F8FAFF',
        py: { xs: 6, md: 10 },
        px: { xs: 2, md: 10 },
      }}
    >
      <Grid
        container
        spacing={6}
        alignItems="center"
        justifyContent="center"
      >
        <Grid size={{ xs: 12, md: 4 }}>
          <Box
            component="img"
            src="/images/backgrounds/AccountImage.png"
            alt="mockup"
            sx={{
              width: { xs: "260px", md: "360px" },
              mt: { xs: 5, md: 0 },
              filter: "drop-shadow(0 10px 25px rgba(0,0,0,0.4))",
            }}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Box sx={{ maxWidth: 480 }}>
            <Typography
              component="h2"
              sx={{
                fontSize: { xs: '2rem', md: '2.6rem' },
                lineHeight: 1.2,
                fontWeight: 800,
                mb: 3,
              }}
            >
              <Box component="span" sx={{ color: '#8CAA27' }}>
                Wallet digital
              </Box>{' '}
              <Box component="span" sx={{ color: '#261E60' }}>
                para cada
              </Box>{' '}
              <Box component="span" sx={{ color: '#8CAA27' }}>
                inversionista
              </Box>
            </Typography>

            <Typography variant="body2" color="text.secondary">
              Cada inversionista cuenta con una wallet digital segura que centraliza retiros, aportes y movimientos. Ofrece a tus clientes transparencia total, control completo de su cuenta, consulta de históricos y administración de participaciones desde un solo lugar, elevando el estándar de servicio de tu fiduciaria.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MarketPlaceAccount;
