import { Card, CardContent, Typography, Box } from "@mui/material";
import { AlertTriangle } from "lucide-react";

interface ProblemCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  image?: string; // opcional si quieres mostrar imagen arriba
}

const ProblemCard = ({ icon = <AlertTriangle />, title, description, image }: ProblemCardProps) => (
  <Card
    sx={{
      borderRadius: 3,
      boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
      transition: "all 0.3s ease",
      "&:hover": { transform: "translateY(-4px)", boxShadow: "0 6px 16px rgba(0,0,0,0.12)" },
      width: "100%",
      maxWidth: 400,
      mx: "auto",
      display: "flex",
      flexDirection: "column",
      height: 150, 
    }}
  >
    {image && (
      <Box sx={{ flex: "0 0 200px", overflow: "hidden" }}>
        <img
          src={image}
          alt={title}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Box>
    )}

    <CardContent sx={{ flex: 1 }}>
      <Box sx={{ display: "flex", alignItems: "center", mb: 1, color: "primary.main" }}>
        {icon}
        <Typography variant="h6" sx={{ ml: 1, fontWeight: 600 }}>
          {title}
        </Typography>
      </Box>
      <Typography variant="body1" color="text.secondary">
        {description}
      </Typography>
    </CardContent>
  </Card>
);

export default ProblemCard;
