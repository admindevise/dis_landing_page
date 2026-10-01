import { Button, Box, useTheme, useMediaQuery } from "@mui/material";
import ProgressBar from "./ProgressBar";

interface Module {
  name: string;
  icon: React.ReactNode;
}

interface SolutionTabsProps {
  modules: Module[];
  activeIndex: number;
  onSelect: (index: number) => void;
  autoDuration: number;
}

const SolutionTabs = ({ modules, activeIndex, onSelect, autoDuration }: SolutionTabsProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        overflowX: isMobile ? "auto" : "visible",
        overflowY: "hidden",
        display: "flex",
        flexDirection: isMobile ? "row" : "column",
        gap: 2,
        pb: isMobile ? 1 : 0,
        "&::-webkit-scrollbar": {
          display: "none",
        },
        scrollbarWidth: "none",
      }}
    >
      {modules.map((module, index) => (
        <Box key={module.name} sx={{ flex: isMobile ? "0 0 auto" : "1", width: isMobile ? "auto" : "100%" }}>
          <Button
            onClick={() => onSelect(index)}
            variant={activeIndex === index ? "contained" : "outlined"}
            color="primary"
            sx={{
              justifyContent: "flex-start",
              gap: 1.5,
              width: "100%",
              borderRadius: 3,
              textTransform: "none",
              fontWeight: activeIndex === index ? 600 : 400,
              transition: "all 0.3s ease",
              display: "flex",
              alignItems: "flex-start",
              position: "relative",
              "& svg": {
                opacity: activeIndex === index ? 1 : 0.6,
                transform: activeIndex === index ? "scale(1.1)" : "scale(1)",
                transition: "all 0.3s ease",
              },
            }}
          >
            {module.icon}
            {module.name}
          </Button>

          {activeIndex === index && !isMobile && (
            <Box sx={{ mt: 1 }}>
              <ProgressBar duration={autoDuration} isActive={true} />
            </Box>
          )}
        </Box>
      ))}
    </Box>
  );
};

export default SolutionTabs;
