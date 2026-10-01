import {
  Box,
  Typography,
} from "@mui/material";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import AssessmentIcon from "@mui/icons-material/Assessment";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import TimerIcon from "@mui/icons-material/Timer";
import VerifiedIcon from "@mui/icons-material/Verified";
import { useEffect, useState } from "react";

const slides = [
  {
    icon: <BusinessCenterIcon fontSize="large" />,
    title: "Operación centralizada",
    desc: "Control total de activos, flujos y documentos desde una sola plataforma."
  },
  {
    icon: <DocumentScannerIcon fontSize="large" />,
    title: "Digitalización real",
    desc: "Todo queda soportado, trazable y disponible para consulta."
  },
  {
    icon: <AssessmentIcon fontSize="large" />,
    title: "Trazabilidad completa",
    desc: "Auditable de extremo a extremo, con registros para cumplimiento."
  },
  {
    icon: <TimerIcon fontSize="large" />,
    title: "Procesos más rápidos",
    desc: "Lo que tomaba semanas se realiza en horas con menos fricción."
  },
  {
    icon: <VerifiedIcon fontSize="large" />,
    title: "Transparencia",
    desc: "Información confiable para inversionistas y auditorías."
  },
  {
    icon: <VerifiedIcon fontSize="large" />,
    title: "Experiencia para inversionistas",
    desc: "Brinda a tus inversionistas una experiencia digital ágil, clara, sin fricciones y automatizada"
  }
];

// 3 círculos × 2 slides cada uno
const slideGroups = [
  slides.slice(0, 2), // círculo 1
  slides.slice(2, 4), // círculo 2
  slides.slice(4, 6), // círculo 3
];

const generateSquares = () =>
  Array.from({ length: 12 }).map(() => ({
    top: Math.random() * 100,
    left: Math.random() * 100,
    duration: 4 + Math.random() * 4,
    delay: Math.random() * 2,
  }));

const BusinessFeaturesWheel = () => {
  // step controla qué slide de cada grupo se muestra (0 ó 1)
  const [step, setStep] = useState(0);
  const [squares] = useState(generateSquares);

  useEffect(() => {
    const i = setInterval(
      () => setStep((prev) => (prev + 1) % 2),
      5000
    );
    return () => clearInterval(i);
  }, []);

  return (
    <Box
      sx={{
        py: 12,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "#312478",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* CUADRADOS FLOTANTES */}
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

      <Typography variant="h4" fontWeight={700} sx={{ mb: 4, textAlign: "center" }}>
        ¿Por qué Devise Business?
      </Typography>

      {/* TRES CÍRCULOS */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: { xs: 4, md: 6 },
          zIndex: 1,
        }}
      >
        {slideGroups.map((group, index) => {
          const currentSlide = group[step];

          return (
            <Box
              key={index}
              sx={{
                width: { xs: 260, sm: 280, md: 300 },
                height: { xs: 260, sm: 280, md: 300 },
                borderRadius: "50%",
                background: "#8CAA27",
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "0 0 20px rgba(0,0,0,0.15)",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  width: "85%",
                  height: "85%",
                  borderRadius: "50%",
                  background: "#fff",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  overflow: "hidden",
                  px: 2,
                }}
              >
                <Box
                  sx={{
                    textAlign: "center",
                    px: 2,
                    transition: "opacity 0.4s ease",
                    width: "90%",
                  }}
                >
                  <Box sx={{ mb: 1 }}>{currentSlide.icon}</Box>

                  <Typography
                    variant="h6"
                    fontWeight={700}
                    sx={{ color: "#1A163C", mb: 1 }}
                  >
                    {currentSlide.title}
                  </Typography>

                  <Typography sx={{ fontSize: 16, opacity: 0.9 }}>
                    {currentSlide.desc}
                  </Typography>
                </Box>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default BusinessFeaturesWheel;
