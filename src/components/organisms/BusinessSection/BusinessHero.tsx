import {
  Box,
  Container,
  Typography,
  Button,
  Modal,
  IconButton,
} from "@mui/material";
import { useTheme, alpha } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

const videoModalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "#1A163C",
  color: "white",
  boxShadow: 24,
  borderRadius: 3,
  p: 0,
  maxWidth: 900,
  width: "90%",
};

const BusinessHero = () => {
  const theme = useTheme();
  const [openDemo, setOpenDemo] = useState(false);
  const [openCita, setOpenCita] = useState(false);

  return (
    <>
      <Box
        sx={{
          position: "relative",
          py: { xs: 12, md: 18 },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          overflow: "hidden",
          color: "#fff",
          backgroundImage: `
            url('/images/backgrounds/DeviseBusiness.png'),
            linear-gradient(135deg, #1A163C 0%, #0C0923 100%)
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at center, transparent 40%, rgba(0,0,0,0.4) 100%)",
            pointerEvents: "none",
          }}
        />

        <Container maxWidth="lg" sx={{ position: "relative", textAlign: "left" }}>
          <Box sx={{ display: "flex", gap: 2, mb: 3, flexWrap: "wrap" }}>
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
              }}
            >
              Desarrollado en DISHUB
            </Box>
            <Box
              sx={{
                display: "inline-block",
                px: 2.5,
                py: 1,
                borderRadius: 6,
                backgroundColor: "rgba(185,222,44,0.1)",
                color: "#B9DE2C",
                fontWeight: 600,
                fontSize: "0.85rem",
              }}
            >
              En Implementación Inicial
            </Box>
          </Box>

          <Typography
            variant="h2"
            sx={{
              maxWidth: 630,
              mt: 3,
              opacity: 0.92,
              letterSpacing: "0.3px",
              textAlign: "left",
            }}
          >
            Gestión integral de vehículos de inversión
          </Typography>

          <Typography
            variant="h6"
            sx={{
              maxWidth: 630,
              mt: 3,
              opacity: 0.92,
              fontWeight: 400,
              letterSpacing: "0.3px",
              textAlign: "left",
            }}
          >
            Desde la estructuración del activo hasta la relación con el inversionista. Centralice, automatice y escale sus operaciones financieras con seguridad institucional.
          </Typography>

          <Box
            sx={{
              mt: 7,
              display: "flex",
              gap: 2,
              justifyContent: "flex-start",
              flexWrap: "wrap",
            }}
          >
            <Button
              variant="contained"
              size="large"
              onClick={() => setOpenCita(true)}
              sx={{
                borderRadius: 3,
                fontWeight: 600,
                px: 5,
                py: 1.7,
                backgroundColor: "#B9DE2C",
                color: "#312478",
                textTransform: "none",
                boxShadow: "0 0 25px rgba(185,222,44,0.4)",
                "&:hover": {
                  backgroundColor: "#CDFE54",
                  boxShadow: "0 0 35px rgba(185,222,44,0.6)",
                },
              }}
            >
              Agendar una cita
            </Button>

            <Button
              variant="outlined"
              size="large"
              onClick={() => setOpenDemo(true)}
              sx={{
                borderRadius: 3,
                fontWeight: 600,
                px: 5,
                py: 1.7,
                color: "#fff",
                borderColor: "rgba(185,222,44,0.6)",
                textTransform: "none",
                "&:hover": {
                  borderColor: "#CDFE54",
                  backgroundColor: "rgba(185,222,44,0.06)",
                },
              }}
            >
              Ver Demo
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Modal para Agendar Cita */}
      <Modal open={openCita} onClose={() => setOpenCita(false)}>
        <Box sx={videoModalStyle}>
          <Box display="flex" justifyContent="space-between" alignItems="center" p={2}>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Agenda una cita
            </Typography>
            <IconButton onClick={() => setOpenCita(false)} sx={{ color: "#fff" }}>
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
                src="https://outlook.office.com/book/DEVISE2@gruposantarosa.co/?ismsaljsauthenabled"
                title="Agendar Cita"
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

      {/* Modal para Ver Demo */}
      <Modal open={openDemo} onClose={() => setOpenDemo(false)}>
        <Box sx={videoModalStyle}>
          <Box display="flex" justifyContent="flex-end" p={2}>
            <IconButton onClick={() => setOpenDemo(false)} sx={{ color: "#fff" }}>
              <CloseIcon />
            </IconButton>
          </Box>

          <Box sx={{ p: 3 }}>
            <Box
              sx={{
                position: "relative",
                paddingTop: "56.25%",
                borderRadius: 3,
                overflow: "hidden",
              }}
            >
              <iframe
                src="/videos/DeviseBusiness.mp4"
                title="Demo Devise"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  border: "none",
                }}
                allowFullScreen
              ></iframe>
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default BusinessHero;
