import { Box } from "@mui/material";
import SectionTitle from "../atoms/SectionTitle";
import ProblemList from "../molecules/ProblemList";

const ProblemSection = () => (
  <Box sx={{ 
    py: 10, 
    px: 4,
    bgcolor: '#27445A',
    minHeight: '100vh'
  }}>
    <SectionTitle
      title="El desafío del sector inmobiliario digital"
      subtitle="Identificamos y desarrollamos soluciones para la desconexión entre la gestión de activos, propiedades e inversión que limita el crecimiento y la eficiencia."
    />

    <Box sx={{ maxWidth: '1400px', margin: '0 auto', mt: 8 }}>
      <ProblemList />
    </Box>
  </Box>
);

export default ProblemSection;
