import { Box } from "@mui/material";
import BusinessCTA from "../sections/devise-business/BusinessCTA";
import BusinessFeatures from "../sections/devise-business/BusinessFeatures";
import BusinessHero from "../sections/devise-business/BusinessHero";
import BusinessModules from "../sections/devise-business/BusinessModules";
import DISHUBConnection from "../sections/devise-business/DISHUBConnection";

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
