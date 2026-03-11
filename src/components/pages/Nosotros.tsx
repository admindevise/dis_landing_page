import { Box, Typography } from "@mui/material";
import SEO from "../atoms/SEO"
import HistoriaDIS from "../molecules/HistoriaDIS";

const Nosotros = () => {

  return (
    <>
      <SEO
        title="Sobre Nosotros | Dishub"
        description="Conoce la historia de Dishub, nuestra misión y cómo ayudamos a optimizar la gestión de inversiones inmobiliarias con soluciones innovadoras."
        keywords="sobre nosotros, historia Dishub, gestión de inversiones, plataforma inmobiliaria"
        url="https://www.dishub.co/nosotros"
        image="https://www.dishub.co/preview-nosotros.png"
      />
      <Box sx={{ py: 10, px: { xs: 3, md: 10 } }}>
        <Typography variant="h3" sx={{ fontWeight: 700, mb: 3, textAlign: "center" }}>
          Sobre Nosotros
        </Typography>
        <HistoriaDIS />
      </Box>
    </>
  );
};

export default Nosotros;
