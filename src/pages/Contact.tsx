import { Box, Typography, Stack, Grid, useTheme, Paper } from "@mui/material";
import { Mail, MapPin } from "lucide-react";
import AnimatedBackground from "../components/global/AnimatedBackground";
import SEO from "../components/global/SEO";

const Contact = () => {
  const theme = useTheme();

  return (
    <>
      <SEO
        title="Contáctanos | Dishub"
        description="Escríbenos y nuestro equipo te responderá rápidamente. Dishub está listo para ayudarte a gestionar tus inversiones inmobiliarias."
        keywords="contacto Dishub, soporte inversiones, consulta inmobiliaria, contacto inversión"
        url="https://www.dishub.co/contacto"
        image="https://www.dishub.co/preview-contacto.png"
      />
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          px: { xs: 3, md: 10 },
          pt: 10
        }}
      >
        <AnimatedBackground />

        <Box sx={{ position: "relative", zIndex: 1, marginBottom: 10 }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              mb: 2,
              textAlign: "center",
              color: theme.palette.text.primary,
            }}
          >
            Contáctanos
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 8,
              textAlign: "center",
              color: theme.palette.text.secondary,
              maxWidth: 600,
              mx: "auto",
            }}
          >
            Escríbenos y nuestro equipo te responderá lo más pronto posible.
            Queremos ayudarte a impulsar tus proyectos con soluciones innovadoras.
          </Typography>

          <Grid container spacing={6} justifyContent="center" alignItems="stretch">
            <Grid size={{ xs: 12, md: 8 }}>
              <Paper
                elevation={6}
                sx={{
                  p: 2,
                  borderRadius: 3,
                  backdropFilter: "blur(12px)",
                  backgroundColor: `${theme.palette.background.paper}E6`,
                  boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                  transition: "all 0.3s ease",
                  height: '100%',
                  minHeight: '600px',
                  display: 'flex',
                  flexDirection: 'column',
                  "&:hover": { boxShadow: "0 10px 28px rgba(0,0,0,0.12)" },
                }}
              >
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, textAlign: 'center' }}>
                  Agenda una cita con nosotros
                </Typography>
                <iframe
                  src="https://outlook.office.com/book/DISHUB@gruposantarosa.co/?ismsaljsauthenabled"
                  style={{ border: 'none', width: '100%', height: '100%' }}
                  title="Agendar Cita"
                  sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                  allow="autoplay; microphone; camera"
                />
              </Paper>
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <Stack spacing={3} sx={{ height: '100%' }}>
                <Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                    Información de contacto
                  </Typography>
                  <Typography variant="body1" sx={{ color: theme.palette.text.secondary }}>
                    Puedes escribirnos directamente o visitarnos en nuestras oficinas.
                  </Typography>
                </Box>

                <Stack spacing={3}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Mail size={22} color={theme.palette.primary.main} />
                    <Typography
                      component="a"
                      href="mailto:contacto@dishub.co"
                      sx={{
                        color: theme.palette.text.primary,
                        textDecoration: 'none',
                        '&:hover': {
                          color: theme.palette.primary.main,
                          textDecoration: 'underline'
                        }
                      }}
                    >
                      contacto@dishub.co
                    </Typography>
                  </Box>

                  {/* <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Phone size={22} color={theme.palette.primary.main} />
                    <Typography>+57 311 489 65 08</Typography>
                  </Box> */}

                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <MapPin size={22} color={theme.palette.primary.main} />
                    <Typography>Calle 76 Nº 8-28 - Piso 3, Bogotá, Colombia</Typography>
                  </Box>
                </Stack>

                {/* Mapa */}
                <Box
                  sx={{
                    flex: 1,
                    borderRadius: 2,
                    overflow: 'hidden',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    minHeight: '300px'
                  }}
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.6087097849867!2d-74.05938!3d4.661111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9a376a0e8c1b%3A0x1234567890abcdef!2sCalle%2076%20%238-28%2C%20Bogot%C3%A1%2C%20Colombia!5e0!3m2!1ses!2sco!4v1234567890123!5m2!1ses!2sco"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: '300px' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicación de Dishub"
                  />
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Contact;
