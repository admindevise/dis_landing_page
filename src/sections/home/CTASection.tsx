import { Box, Button, useTheme } from "@mui/material";
import SectionTitle from "../../components/global/SectionTitle";

const CTASection = () => {
  const theme = useTheme();

  const handleAgendarCita = () => {
    window.open('https://outlook.office.com/book/DISHUB@gruposantarosa.co/?ismsaljsauthenabled', '_blank');
  };

  return (
    <Box
      sx={{
        py: 6,
        px: { xs: 3, md: 10 },
        mb: 10,
        textAlign: "center",
        background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
        color: "#fff",
        borderRadius: 3,
      }}
    >
      <SectionTitle title="¿Listo para llevar tu empresa al siguiente nivel?" subtitle="Agenda una cita con nuestro equipo y descubre cómo podemos ayudarte." />

      <Button
        variant="contained"
        color="secondary"
        sx={{ px: 5, py: 1.5, borderRadius: 3, fontWeight: 600 }}
        onClick={handleAgendarCita}
      >
        Agendar cita
      </Button>
    </Box>
  );
};

export default CTASection;
