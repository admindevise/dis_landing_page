import {
  Box, Container, Typography, Button
} from "@mui/material";
import { useState } from "react";

const generateSquares = () =>
  Array.from({ length: 12 }).map(() => ({
    top: Math.random() * 100,
    left: Math.random() * 100,
    duration: 4 + Math.random() * 4,
    delay: Math.random() * 2,
  }));

const BusinessCTA = () => {
  const [squares] = useState(generateSquares);

  const handleContactar = () => {
    window.open('https://outlook.office.com/book/DEVISE2@gruposantarosa.co/?ismsaljsauthenabled', '_blank');
  };

  return (
    <Box
      sx={{
        position: "relative",
        py: 14,
        overflow: "hidden",
      }}
    >
      {squares.map((sq, i) => (
        <Box
          key={i}
          sx={{
            position: "absolute",
            width: 50,
            height: 50,
            borderRadius: 2,
            background: "#DCEF95",
            opacity: 0.2,
            animation: `float ${sq.duration}s ease-in-out ${sq.delay}s infinite alternate`,
            top: `${sq.top}%`,
            left: `${sq.left}%`,
          }}
        />
      ))}

      <style>
        {`
          @keyframes float {
            from { transform: translateY(0px) rotate(0deg); }
            to { transform: translateY(-40px) rotate(20deg); }
          }
        `}
      </style>

      <Container maxWidth="sm">
        <Box
          sx={{
            backdropFilter: "blur(14px)",
            background: "rgba(255,255,255,0.12)",
            border: "1px solid rgba(255,255,255,0.25)",
            borderRadius: 4,
            p: 6,
            textAlign: "center",
            color: "#312478",
            boxShadow: "0 8px 25px rgba(0,0,0,0.35)",
          }}
        >
          <Typography variant="h4" fontWeight={700} sx={{ mb: 2 }}>
            ¿Quieres evaluar si Devise se adapta a tu operación?
          </Typography>

          <Typography variant="body1" sx={{ mb: 4, opacity: 0.9 }}>
            Conversemos sobre tus procesos, tus fondos y lo que quieres automatizar. Nuestro equipo de DISHUB te mostrará cómo Devise puede ajustarse a tu modelo operativo.
          </Typography>

          <Button
            variant="contained"
            size="large"
            onClick={handleContactar}
            sx={{
              px: 4,
              py: 1.5,
              fontWeight: 700,
              fontSize: 18,
              borderRadius: 3,
              textTransform: "none",
              backgroundColor: "#312478",
              color: "#CBE661",
              boxShadow: "0 0 12px rgba(49, 36, 120, 0.6)",
              "&:hover": {
                backgroundColor: "#312478",
                boxShadow: "0 0 16px rgba(49, 36, 120, 0.8)",
              }
            }}
          >
            Hablar con un especialista
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default BusinessCTA;
