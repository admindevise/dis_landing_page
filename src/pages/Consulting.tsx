import { Box } from "@mui/material"
import ConsultingHero from "../sections/consulting/ConsultingHero";
import ConsultingCTA from "../sections/consulting/ConsultingCTA";
import ConsultingModules from "../sections/consulting/ConsultingModules";
import ConsultingSteps from "../sections/consulting/ConsultingSteps";
import ConsultingBenefits from "../sections/consulting/ConsultingBenefits";
import DISHUBConnectionConsulting from "../sections/consulting/DISHUBConnectionConsulting";

const Consulting = () => {
  return (
    <Box>
      <ConsultingHero />
      <ConsultingBenefits />
      <ConsultingSteps />
      <ConsultingModules />
      <DISHUBConnectionConsulting />
      <ConsultingCTA />
    </Box>
  )
}

export default Consulting