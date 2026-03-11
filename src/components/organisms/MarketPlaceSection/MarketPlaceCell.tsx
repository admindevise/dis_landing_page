import { Box, Typography } from "@mui/material";

const MarketPlaceCell = () => {
  return (
    <Box
      sx={{
        background: "#261E60",
        backgroundImage: "url('/images/backgrounds/CubosFondo.png')",
        backgroundSize: "contain",
        backgroundPosition: "center right",
        backgroundRepeat: "no-repeat",

        width: "100%",
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: { xs: 3, md: 10 },
        py: { xs: 6, md: 0 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-evenly",
          width: "100%",
          maxWidth: "1400px",
        }}
      >
        {/* Texto */}
        <Box sx={{ maxWidth: "550px", color: "white" }}>
          <Typography
            sx={{
              fontSize: { xs: "32px", md: "48px" },
              fontWeight: 700,
              lineHeight: 1.1,
            }}
          >
            Experiencia móvil <br />
            para <span style={{ color: "#B9DE2C" }}>tus inversionistas</span>
          </Typography>

          <Typography
            sx={{
              mt: 3,
              fontSize: { xs: "14px", md: "16px" },
              lineHeight: 1.6,
              opacity: 0.9,
            }}
          >
            Ofrece a tus inversionistas una app móvil completa donde pueden consultar rendimientos, recibir notificaciones, revisar documentos y realizar operaciones desde su teléfono. Una experiencia digital intuitiva y segura que aumenta la satisfacción y retención de tus clientes.
          </Typography>
        </Box>

        <Box
          component="img"
          src="/images/backgrounds/MarketPlaceCell.png"
          alt="mockup"
          sx={{
            width: { xs: "260px", md: "360px" },
            mt: { xs: 5, md: 0 },
            filter: "drop-shadow(0 10px 25px rgba(0,0,0,0.4))",
          }}
        />
      </Box>
    </Box>
  );
};

export default MarketPlaceCell;
