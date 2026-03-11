import { Box, useTheme } from "@mui/material";

const BenefitsBackground = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        background: `linear-gradient(135deg, ${theme.palette.primary.main}20 0%, ${theme.palette.background.default} 100%)`,
        clipPath: "polygon(0 100%, 100% 100%, 100% 0)", 
      }}
    />
  );
};

export default BenefitsBackground;
