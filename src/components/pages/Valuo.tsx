import { Box } from "@mui/material";
import ValuoHero from "../organisms/ValuoSection/ValuoHero";
import ValuoSteps from "../organisms/ValuoSection/ValuoSteps";
import ValuoHeatmapSection from "../organisms/ValuoSection/ValuoHeatmapSection";
import ValuoCTA from "../organisms/ValuoSection/ValuoCTA";
import ValuoPricing from "../organisms/ValuoSection/ValuoPricing";
import DISHUBConnectionValuo from "../organisms/ValuoSection/DISHUBConnectionValuo";

const Valuo = () => {
  return (
    <Box>
      <ValuoHero />
      <ValuoSteps />
      <ValuoHeatmapSection />
      <ValuoPricing/>
      <DISHUBConnectionValuo />
      <ValuoCTA />
    </Box>
  );
}

export default Valuo