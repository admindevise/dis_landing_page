import { Box } from "@mui/material";
import ValuoHero from "../sections/valuo/ValuoHero";
import ValuoSteps from "../sections/valuo/ValuoSteps";
import ValuoHeatmapSection from "../sections/valuo/ValuoHeatmapSection";
import ValuoCTA from "../sections/valuo/ValuoCTA";
import ValuoPricing from "../sections/valuo/ValuoPricing";
import DISHUBConnectionValuo from "../sections/valuo/DISHUBConnectionValuo";

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