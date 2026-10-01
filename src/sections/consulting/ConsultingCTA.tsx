import { Box, Button, Container, Typography, Modal, IconButton } from '@mui/material'
import { alpha } from '@mui/material/styles'
import CloseIcon from '@mui/icons-material/Close'
import { useState } from 'react'

const ConsultingCTA = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleContactar = () => {
    setOpenModal(true);
  };
  return (
    <Box
      data-consulting-cta
      sx={{
        py: 12,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={(theme) => ({
            borderRadius: 5,
            border: `1px solid ${theme.palette.primary.light}`,
            boxShadow: `0 0 40px ${alpha(theme.palette.primary.light, 0.4)}`,
            px: { xs: 3, md: 10 },
            py: { xs: 6, md: 8 },
            position: 'relative',
            overflow: 'hidden',
            background: theme.palette.background.paper,
          })}
        >
          {/* Título */}
          <Typography
            align="center"
            sx={(theme) => ({
              fontSize: { xs: '1.8rem', md: '2.3rem' },
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              mb: 2,
              background: `linear-gradient(
                90deg,
                ${theme.palette.primary.light},
                ${theme.palette.info.light},
                ${theme.palette.info.dark}
              )`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            })}
          >
            ¿LISTO PARA MEJORAR TU SISTEMA?
          </Typography>

          <Typography
            align="center"
            sx={(theme) => ({
              maxWidth: 680,
              mx: 'auto',
              color: theme.palette.text.secondary,
              mb: 5,
              fontSize: '1rem',
              lineHeight: 1.7,
            })}
          >
            Mientras tus competidores siguen dependiendo de procesos manuales y sistemas legacy, tú puedes liderar con inteligencia artificial estratégica. Agenda una sesión de diagnóstico y descubre cómo transformar tu operación con IA de impacto real.
          </Typography>

          {/* Botón */}
          <Box sx={{ textAlign: 'center' }}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleContactar}
              sx={(theme) => ({
                borderRadius: 0,
                px: 6,
                py: 1.8,
                textTransform: 'uppercase',
                letterSpacing: '0.16em',
                fontSize: 12,
                fontWeight: 700,
                backgroundColor: theme.palette.primary.main,
                '&:hover': {
                  backgroundColor: theme.palette.primary.light,
                  boxShadow: `0 0 22px ${alpha(
                    theme.palette.primary.main,
                    0.5
                  )}`,
                },
              })}
            >
              Ejecutar contacto
            </Button>
          </Box>
        </Box>
      </Container>

      {/* Modal para Agendar Cita */}
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <Box
          sx={(theme) => ({
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: theme.palette.secondary.main,
            color: "white",
            boxShadow: 24,
            borderRadius: 3,
            p: 0,
            maxWidth: 900,
            width: "90%",
          })}
        >
          <Box display="flex" justifyContent="space-between" alignItems="center" p={2}>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Agenda una cita
            </Typography>
            <IconButton onClick={() => setOpenModal(false)} sx={{ color: "#fff" }}>
              <CloseIcon />
            </IconButton>
          </Box>

          <Box sx={{ p: 3, pt: 0 }}>
            <Box
              sx={{
                position: "relative",
                height: "600px",
                borderRadius: 3,
                overflow: "hidden",
              }}
            >
              <iframe
                src="https://outlook.office.com/book/BRICKFLOW@gruposantarosa.co/?ismsaljsauthenabled"
                title="Agendar Cita Consultoría"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  border: "none",
                }}
              ></iframe>
            </Box>
          </Box>
        </Box>
      </Modal>
    </Box>
  )
}

export default ConsultingCTA
