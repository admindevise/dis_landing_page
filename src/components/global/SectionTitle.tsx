import { Typography, Box } from "@mui/material";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const SectionTitle = ({ title, subtitle }: SectionTitleProps) => (
  <Box sx={{ textAlign: "center", mb: 6 }}>
    <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>
      {title}
    </Typography>
    {subtitle && (
      <Typography variant="h6" sx={{ color: "text.secondary", fontWeight: 400 }}>
        {subtitle}
      </Typography>
    )}
  </Box>
);

export default SectionTitle;
