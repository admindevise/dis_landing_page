import { Card, CardContent, Typography, Box } from "@mui/material";

interface SolutionCardProps {
  title: string;
  description: string;
  image: string;
}

const SolutionCard = ({ title, description, image }: SolutionCardProps) => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        borderRadius: 3,
        boxShadow: 3,
        overflow: "hidden",
      }}
    >
      <Box
        component="img"
        src={image}
        alt={title}
        sx={{
          width: { xs: "100%", md: "40%" },
          height: 300,
          objectFit: "cover",
        }}
      />
      <CardContent sx={{ flex: 1, p: 4 }}>
        <Typography variant="h5" sx={{ mb: 2, fontWeight: 700 }}>
          {title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SolutionCard;
