import { Box } from "@mui/material"
import ConsultingHero from "../organisms/ConsultingSection/ConsultingHero";
import ConsultingCTA from "../organisms/ConsultingSection/ConsultingCTA";
import ConsultingModules from "../organisms/ConsultingSection/ConsultingModules";
import ConsultingSteps from "../organisms/ConsultingSection/ConsultingSteps";
import ConsultingBenefits from "../organisms/ConsultingSection/ConsultingBenefits";
import DISHUBConnectionConsulting from "../organisms/ConsultingSection/DISHUBConnectionConsulting";

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