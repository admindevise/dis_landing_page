import { Box, Container, Typography } from '@mui/material'
import { useTheme, alpha } from '@mui/material/styles';

const MarketPlaceHero = () => {
  const theme = useTheme();
  
  return (
    <Box sx={{ pt: { xs: 12, md: 14 }, pb: 6, background: '#fff', }}>
      <Container sx={{ height: "100%" }}>
        <Box
          sx={{
            borderRadius: '32px',
            overflow: 'hidden',
            boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
          }}
        >

          <Box
            sx={{
              width: '100%',
              minHeight: 450,
              backgroundImage: `url('/images/backgrounds/DeviseMarketPlace.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              p: { xs: 4, md: 8 },
              color: '#fff',

              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Box
              sx={{
                display: "inline-block",
                px: 2.5,
                py: 1,
                borderRadius: 6,
                backgroundColor: alpha(theme.palette.primary.main, 0.15),
                color: theme.palette.primary.main,
                fontWeight: 600,
                fontSize: "0.85rem",
                border: `1px solid ${alpha(theme.palette.primary.main, 0.4)}`,
                mb: 3,
                width: 'fit-content',
              }}
            >
              Desarrollado en DISHUB
            </Box>
            
            <Typography variant="h3" fontWeight={800} sx={{ maxWidth: 550, color: "#1B1949" }}>
              La plataforma de inversión <br/> <span style={{ color: '#1C4FC1' }}>para tu fiduciaria</span>
            </Typography>

            <Typography mt={2} sx={{ maxWidth: 500, color: "#312478" }}>
              Ofrece a tus inversionistas una experiencia digital completa para invertir en proyectos inmobiliarios. Democratiza el acceso, automatiza procesos y escala tu operación.
            </Typography>
          </Box>

        </Box>
      </Container>
    </Box>
  )
}

export default MarketPlaceHero
