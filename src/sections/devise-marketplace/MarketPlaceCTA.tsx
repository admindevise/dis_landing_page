import {
  Box,
  Container,
  Typography,
  Button,
  Modal,
  Stack,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

const MarketPlaceCTA = () => {
  const [openVideo, setOpenVideo] = useState(false);
  const [openCita, setOpenCita] = useState(false);

  return (
    <Box
      sx={{
        position: "relative",
        py: 14,
        overflow: "hidden",
        background: "#261E60",
      }}
    >

      <Container maxWidth="sm">
        <Box
          sx={{
            backdropFilter: "blur(12px)",
            background: "rgba(255,255,255,0.12)",
            border: "1px solid rgba(255,255,255,0.18)",
            borderRadius: 4,
            p: 6,
            textAlign: "center",
            color: "#fff",
            boxShadow: "0 8px 25px rgba(0,0,0,0.35)",
          }}
        >
          <Typography variant="h4" fontWeight={700} sx={{ mb: 2 }}>
            ¿Listo para digitalizar tu fiduciaria?
          </Typography>

          <Typography variant="body1" sx={{ mb: 4, opacity: 0.9 }}>
            Ve cómo Devise Marketplace puede transformar la experiencia de inversión de tus clientes. Nuestro equipo de DISHUB te mostrará cómo implementarlo en tu operación.
          </Typography>

          <Stack spacing={2} direction="column">
            <Button
              variant="contained"
              size="large"
              onClick={() => setOpenVideo(true)}
              sx={{
                px: 4,
                py: 1.6,
                borderRadius: 3,
                fontWeight: 700,
                fontSize: 18,
                textTransform: "none",
                backgroundColor: "#CBE661",
                color: "#18122B",
                boxShadow: "0 0 14px rgba(203, 230, 97, 0.4)",
                "&:hover": {
                  backgroundColor: "#E3FF89",
                },
              }}
            >
              Ver demo rápida
            </Button>

            <Button
              variant="outlined"
              size="large"
              onClick={() => setOpenCita(true)}
              sx={{
                px: 4,
                py: 1.6,
                borderRadius: 3,
                fontWeight: 700,
                fontSize: 18,
                textTransform: "none",
                color: "#fff",
                borderColor: "rgba(203,230,97,0.7)",
                "&:hover": {
                  backgroundColor: "rgba(203,230,97,0.12)",
                  borderColor: "#CBE661",
                },
              }}
            >
              Contactar al equipo
            </Button>
          </Stack>
        </Box>
      </Container>

      <Modal open={openVideo} onClose={() => setOpenVideo(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "95%", sm: "80%", md: "60%" },
            bgcolor: "#000",
            borderRadius: 3,
            boxShadow: 24,
            p: 2,
          }}
        >
          <video
            src="/videos/DeviseMarketPlace.mp4"
            controls
            autoPlay
            style={{
              width: "100%",
              borderRadius: "12px",
            }}
          />
        </Box>
      </Modal>
      <Modal open={openCita} onClose={() => setOpenCita(false)}>
        <Box>
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
    </Box>
  );
};

export default MarketPlaceCTA;
