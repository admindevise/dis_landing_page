import { Box, Container, Grid, Typography, Stack } from "@mui/material";

const ValuoHeatmapSection = () => {
  return (
    <Box sx={{ background: "hsl(210, 27%, 12%)" }}>
      <Container maxWidth="lg" sx={{ py: 12 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              variant="h3"
              fontWeight={700}
              sx={{ mb: 2, color: "hsl(216, 33%, 97%)" }}
            >
              Visualiza el potencial.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                mb: 5,
                maxWidth: 540,
                color: "rgba(255,255,255,0.7)",
              }}
            >
              Nuestros mapas de calor te muestran dónde está la valorización antes
              que nadie. Identifica zonas emergentes y oportunidades ocultas.
            </Typography>

            <Stack spacing={3}>
              <Stack direction="row" spacing={2} alignItems="center">
                <Box
                  sx={{
                    width: 52,
                    height: 52,
                    borderRadius: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background:
                      "linear-gradient(135deg, hsl(210, 27%, 12%), hsl(212, 48%, 45%), hsl(212, 48%, 55%))",
                    boxShadow: "0 12px 30px rgba(0,0,0,0.6)",
                    flexShrink: 0,
                  }}
                >
                  <Box
                    sx={{
                      width: 20,
                      height: 14,
                      borderRadius: 1,
                      border: "2px solid rgba(255,255,255,0.9)",
                      position: "relative",
                      "&::before, &::after": {
                        content: '""',
                        position: "absolute",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "90%",
                        height: "100%",
                        borderRadius: 1,
                        border: "2px solid rgba(255,255,255,0.5)",
                      },
                      "&::before": { top: -6 },
                      "&::after": { bottom: -6 },
                    }}
                  />
                </Box>

                <Box>
                  <Typography
                    variant="subtitle1"
                    sx={{ color: "hsl(216, 33%, 97%)", fontWeight: 700 }}
                  >
                    Capas de Información
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "rgba(255,255,255,0.7)" }}
                  >
                    Tráfico, seguridad, comercio y más.
                  </Typography>
                </Box>
              </Stack>

              <Stack direction="row" spacing={2} alignItems="center">
                <Box
                  sx={{
                    width: 52,
                    height: 52,
                    borderRadius: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background:
                      "linear-gradient(135deg, hsl(212, 48%, 45%), hsl(212, 48%, 55%), hsl(212, 48%, 65%))",
                    boxShadow: "0 12px 30px rgba(0,0,0,0.6)",
                    flexShrink: 0,
                  }}
                >
                  <Box
                    sx={{
                      width: 24,
                      height: 18,
                      borderRadius: 1,
                      border: "2px solid rgba(255,255,255,0.8)",
                      borderTop: "none",
                      position: "relative",
                      overflow: "hidden",
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        left: 4,
                        bottom: 4,
                        width: 18,
                        height: 12,
                        borderBottom: "2px solid rgba(255,255,255,0.9)",
                        borderLeft: "2px solid rgba(255,255,255,0.9)",
                        transform: "skewX(-20deg)",
                      },
                    }}
                  />
                </Box>

                <Box>
                  <Typography
                    variant="subtitle1"
                    sx={{ color: "hsl(216, 33%, 97%)", fontWeight: 700 }}
                  >
                    Proyección a 5 años
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "rgba(255,255,255,0.7)" }}
                  >
                    Modelos predictivos de valorización.
                  </Typography>
                </Box>
              </Stack>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                borderRadius: "32px",
                p: 3,
                height: { xs: 320, md: 380 },
                position: "relative",
                overflow: "hidden",
                boxShadow: "0 35px 80px rgba(0,0,0,0.8)",
                backgroundColor: "hsl(210, 76%, 17%)",
                border: "1px solid hsla(212, 48%, 55%, 0.3)",
                backgroundImage: `
                linear-gradient(hsla(212, 48%, 55%, 0.12) 1px, transparent 1px),
                linear-gradient(90deg, hsla(212, 48%, 55%, 0.12) 1px, transparent 1px)
              `,
                backgroundSize: "40px 40px",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  inset: 32,
                  borderRadius: "20px",
                  overflow: "hidden",
                }}
              >
                <Box
                  component="svg"
                  viewBox="0 0 100 60"
                  sx={{ width: "100%", height: "100%" }}
                >
                  {/* Línea del gráfico */}
                  <polyline
                    points="5,50 25,46 45,40 65,32 85,27"
                    fill="none"
                    stroke="hsl(212, 48%, 55%)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ filter: "drop-shadow(0 0 8px hsl(212, 48%, 55%))" }}
                  />

                  {/* Puntos */}
                  <circle cx="5" cy="50" r="3" fill="hsl(212, 48%, 45%)" />
                  <circle cx="25" cy="46" r="3" fill="hsl(212, 48%, 45%)" />
                  <circle cx="45" cy="40" r="3" fill="hsl(212, 48%, 55%)" />
                  <circle cx="65" cy="32" r="3" fill="hsl(212, 48%, 55%)" />
                  <circle cx="85" cy="27" r="3" fill="hsl(212, 48%, 65%)" />

                  {/* Etiquetas del eje X */}
                  <text x="5" y="58" fontSize="3" fill="rgba(255,255,255,0.5)" textAnchor="middle">2024</text>
                  <text x="25" y="58" fontSize="3" fill="rgba(255,255,255,0.5)" textAnchor="middle">2025</text>
                  <text x="45" y="58" fontSize="3" fill="rgba(255,255,255,0.5)" textAnchor="middle">2026</text>
                  <text x="65" y="58" fontSize="3" fill="rgba(255,255,255,0.5)" textAnchor="middle">2027</text>
                  <text x="85" y="58" fontSize="3" fill="rgba(255,255,255,0.5)" textAnchor="middle">2028</text>
                </Box>
              </Box>

              {/* Tarjeta flotante */}
              <Box
                sx={{
                  position: "absolute",
                  right: 28,
                  bottom: 28,
                  px: 3,
                  py: 2,
                  borderRadius: "18px",
                  bgcolor: "rgba(11,42,74,0.75)",
                  border: "1px solid rgba(59,110,168,0.5)",
                  backdropFilter: "blur(12px)",
                  minWidth: 170,
                }}
              >
                <Typography
                  variant="caption"
                  sx={{ color: "rgba(200,220,240,0.9)", mb: 0.5, display: "block" }}
                >
                  Valorización estimada 5 años
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ color: "#B084CC", fontWeight: 700 }}
                >
                  +12.5%
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ color: "rgba(200,220,240,0.75)" }}
                >
                  sobre índice actual de la zona
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ValuoHeatmapSection;
