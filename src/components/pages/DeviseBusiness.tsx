import { Box } from "@mui/material";
import BusinessCTA from "../organisms/BusinessSection/BusinessCTA";
import BusinessFeatures from "../organisms/BusinessSection/BusinessFeatures";
import BusinessHero from "../organisms/BusinessSection/BusinessHero";
import BusinessModules from "../organisms/BusinessSection/BusinessModules";
import DISHUBConnection from "../organisms/BusinessSection/DISHUBConnection";

const DeviseBusiness = () => {
  return (
    <Box sx={{ background: "#ffff" }}>
      <BusinessHero />
      <BusinessFeatures />
      <BusinessModules />
      <DISHUBConnection />
      <BusinessCTA />
    </Box>
  );
};

export default DeviseBusiness;
