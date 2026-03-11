import { Box, Typography, Paper, Stack, useTheme, alpha, Avatar } from "@mui/material";
import { Cpu, Rocket, Lightbulb, Network } from "lucide-react";
import { cloneElement, useEffect, useRef, useState } from "react";

const timeline = [
  {
    year: "2020–2022",
    title: "Origen y conceptualización",
    icon: <Lightbulb size={28} />,
    items: [
      (
        <>
          <b>Problema:</b> Se identifica un potencial en digitalización de procesos de la cadena de valor inmobiliaria para bancas tradicionales.
        </>
      ),
      (
        <>
          <b>Exploración:</b> Búsqueda en el mercado de soluciones existentes para implementar.
        </>
      ),
      (
        <>
          <b>Revelación:</b> No hay una solución a la medida que cubra las necesidades de la industria y la región.
        </>
      ),
    ],
  },
  {
    year: "2023",
    title: "Desarrollo propio",
    icon: <Rocket size={28} />,
    items: [
      (
        <>
          <b>Construcción:</b> Desarrollo de un marketplace de inversiones inicial con un tech stack especializado.
        </>
      ),
      (
        <>
          <b>Colaboración:</b> Charlas y alineamiento con actores del negocio tradicional.
        </>
      ),
      (
        <>
          <b>Validación:</b> Usuarios finales están de acuerdo en el problema global y la necesidad de soluciones.
        </>
      ),
    ],
  },
  {
    year: "2024",
    title: "Nacimiento de DIS",
    icon: <Network size={28} />,
    items: [
      (
        <>
          <b>Independencia:</b> Se decide crear una empresa nueva especializada en desarrollo de soluciones tecnológicas.
        </>
      ),
      (
        <>
          <b>Pivot:</b> Se identifican soluciones adicionales a implementar en el mercado.
        </>
      ),
      (
        <>
          <b>Revolución:</b> Madurez de tecnologías fintech, AI y SaaS nos dan una arquitectura para soluciones robustas y especializadas.
        </>
      ),
    ],
  },
  {
    year: "2025+",
    title: "Producción",
    icon: <Cpu size={28} />,
    items: [
      (
        <>
          <b>Rollout:</b> Implementación de soluciones en operaciones con impactos positivos.
        </>
      ),
      (
        <>
          <b>Incubadora:</b> Se crea una cultura de innovación interna y con los actores del mercado.
        </>
      ),
      (
        <>
          <b>Monetización:</b> Eficiencias directas en operaciones que usan las soluciones.
        </>
      ),
    ],
  },
];

const HistoriaDIS = () => {
  const theme = useTheme();
  const [angle, setAngle] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const currentAngle = useRef(0);

  useEffect(() => {
    if (isPaused || isDragging) return;
    const interval = setInterval(() => {
      setAngle((prev) => prev - 0.3); // velocidad
      currentAngle.current -= 0.3;
    }, 50);
    return () => clearInterval(interval);
  }, [isPaused, isDragging]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setIsPaused(true);
    startX.current = e.clientX;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const delta = e.clientX - startX.current;
    setAngle(currentAngle.current + delta * 0.3);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    currentAngle.current = angle;
    setTimeout(() => setIsPaused(false), 1000);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setIsPaused(true);
    startX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const delta = e.touches[0].clientX - startX.current;
    setAngle(currentAngle.current + delta * 0.3);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    currentAngle.current = angle;
    setTimeout(() => setIsPaused(false), 3000);
  };

  return (
    <Box
      sx={{
        position: "relative",
        height: 450,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        perspective: "2000px",
        overflow: "hidden",
        cursor: isDragging ? "grabbing" : "grab",
        userSelect: "none",
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <Box
        sx={{
          position: "relative",
          width: 700,
          height: 200,
          transformStyle: "preserve-3d",
          transform: `rotateY(${angle}deg)`,
          transition: isDragging ? "none" : "transform 0.3s ease-out",
        }}
      >
        {timeline.map((item, i) => (
          <Box
            key={i}
            className="timeline-card"
            sx={{
              position: "absolute",
              top: "-40px",
              left: "15%",
              width: 420,
              p: "16px 22px",
              background: `linear-gradient(350deg, ${alpha(
                theme.palette.secondary.main,
                0.7
              )}, ${alpha(theme.palette.primary.main, 0.7)})`,
              borderRadius: 3,
              backdropFilter: "blur(6px)",
              color: theme.palette.text.primary,
              transform: `rotateY(${i * (360 / timeline.length)
                }deg) translateZ(350px)`,
              boxShadow: "0 0 20px rgba(0,255,200,0.2)",
              transition: "all 0.4s ease",
              display: "flex",
              flexDirection: "column",
              "&:hover": {
                transform: `rotateY(${i * (360 / timeline.length)
                  }deg) translateZ(370px) scale(1.05)`,
                boxShadow: "0 0 40px rgba(0,255,200,0.4)",
              },
            }}
          >
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{ mb: 2 }}
            >
              <Box>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 700, lineHeight: 1, mb: 0.3 }}
                >
                  {item.year}
                </Typography>
                <Typography variant="subtitle2" sx={{ opacity: 0.9 }}>
                  {item.title}
                </Typography>
              </Box>
              <Avatar
                sx={{
                  background:
                    "radial-gradient(circle, #00ffc8 0%, rgba(0,255,200,0.15) 70%)",
                  width: 50,
                  height: 50,
                }}
              >
                {cloneElement(item.icon, { color: theme.palette.text.primary })}
              </Avatar>
            </Stack>

            <Stack spacing={0.8}>
              {item.items.map((text, idx) => (
                <Paper
                  key={idx}
                  elevation={0}
                  sx={{
                    p: "6px 10px",
                    borderRadius: 3,
                    backgroundColor: alpha(theme.palette.background.paper, 0.15),
                    border: `1px solid ${alpha(
                      theme.palette.text.primary,
                      0.1
                    )}`,
                  }}
                >
                  <Typography variant="body2" sx={{ opacity: 0.85 }}>
                    {text}
                  </Typography>
                </Paper>
              ))}
            </Stack>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default HistoriaDIS;