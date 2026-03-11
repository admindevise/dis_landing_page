import { useState } from "react";
import { Box, Stack, Button } from "@mui/material";
import PlatformModule from "../../organisms/PlatformModules";
import SectionTitle from "../../atoms/SectionTitle";
import SolutionSectionBackground from "./SolutionSectionBackground";

const solutions = [
  { key: "adminDevise", icon: "images/logos/DeviseBusiness.png" },
  { key: "inversionistaDevise", icon: "images/logos/DeviseMarketplace.png" },
  { key: "valuo", icon: "images/logos/valuo.png" },
  { key: "consultoria", icon: "images/logos/consultoría.png" },
];

interface SolutionsSectionProps {
  id?: string;
}

const SolutionsSection: React.FC<SolutionsSectionProps> = () => {
  const [active, setActive] = useState("adminDevise");

  return (
    <Box
      sx={{
        position: "relative",
        py: 10,
        px: { xs: 3, md: 8 },
        overflow: "hidden",
        backgroundColor: "background.default",
      }}
    >
      <SolutionSectionBackground />

      <Box sx={{ position: "relative", zIndex: 1 }}>
        <SectionTitle 
          title="Soluciones DIS" 
          subtitle="Soluciones tecnológicas nacidas del análisis y la investigación, diseñadas para hacer más eficiente la gestión inmobiliaria y financiera."
        />
        <Stack direction="row" spacing={2} mb={1} justifyContent="center">
          {solutions.map((s) => (
            <Button
              key={s.key}
              onClick={() => setActive(s.key)}
              variant={active === s.key ? "contained" : "outlined"}
              color="primary"
              sx={{
                borderRadius: 3,
                width: 150,
                height: 60,
                p: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={s.icon}
                alt={s.key}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </Button>
          ))}
        </Stack>

        {active === "adminDevise" && <PlatformModule role="admin" />}
        {active === "inversionistaDevise" && (
          <PlatformModule role="inversionista" />
        )}
        {active === "valuo" && (
          <PlatformModule role="valuo" />
        )}
        {active === "consultoria" && (
          <PlatformModule role="consultoria" />
        )}
      </Box>
    </Box>
  );
};

export default SolutionsSection;
