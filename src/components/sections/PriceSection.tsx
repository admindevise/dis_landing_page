import { Box, Typography, Button, useTheme } from "@mui/material";
import SectionTitle from "../atoms/SectionTitle";

const products = [
  {
    name: "Devise Business",
    logo: "images/logos/DeviseBusiness.png",
    description:
      "Optimiza la gestión empresarial y automatiza procesos clave en el ecosistema inmobiliario.",
    features: [
      "Control financiero total",
      "Digitalización completa de operaciones",
      "Para administradores y entidades financieras",
      "Del activo al inversionista en un solo sistema",
      "Más negocios, más clientes"
    ],
    link: "/devise/devise-business",
  },
  {
    name: "Devise Marketplace",
    logo: "images/logos/DeviseMarketplace.png",
    description:
      "Conecta inversionistas y proyectos con trazabilidad, transparencia y liquidez.",
    features: [
      "Centro de control de inversionistas",
      "Liquidez inmediata",
      "Visibilidad de mercado",
      "Gestión de portafolio",
      "Soporte inteligente 24/7",
    ],
    link: "/devise/devise-marketplace",
  },
  {
    name: "Valuo",
    logo: "images/logos/valuo.png",
    description:
      "Valuación inmobiliaria ágil y precisa con tecnología y datos en tiempo real.",
    features: [
      "Toda la información de tu inmueble",
      "Reportes comerciales a una fracción del costo y tiempo",
      "IA alimentada con mercados reales",
      "Regulación simplificada",
      "Democratización de avalúos profesionales", //No democratizacion ??
    ],
    link: "https://id-preview--287657e5-2bea-4556-bb47-1384309cba10.lovable.app/",
  },
  {
    name: "Transformación con AI",
    logo: "images/logos/consultoría.png",
    description:
      "Estrategias y automatización inteligente para impulsar la transformación digital.",
    features: [
      "Transformación con AI",
      "Implementación de AI organizacional",
      "Identificación de oportunidades y automatización",
      "Siembra de cultura digital e innovación",
      "Estrategias de transformación e implementación",
    ],
    link: "/consulting",
  },
];

const ProductsSection = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: 10,
        px: { xs: 3, md: 10 },
        textAlign: "center",
        backgroundColor: theme.palette.background.default,
      }}
    >
      <SectionTitle title="Nuestras Soluciones" />

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 4,
          flexWrap: { xs: "wrap", md: "nowrap" },
          mt: 6,
        }}
      >
        {products.map((product) => (
          <Box
            key={product.name}
            sx={{
              flex: "1 1 0",
              minWidth: { xs: "100%", sm: "45%", md: "22%" },
              borderRadius: 4,
              p: 4,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              border: `2px solid ${theme.palette.primary.main}`,
              boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "translateY(-6px)",
                boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                borderColor: theme.palette.primary.light,
              },
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: 80,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mb: 2,
              }}
            >
              <img
                src={product.logo}
                alt={product.name}
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
              />
            </Box>

            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ mb: 3, textAlign: "center", minHeight: 60 }}
            >
              {product.description}
            </Typography>

            <Box sx={{ textAlign: "left", mb: 3, width: "100%" }}>
              {product.features.map((feature, i) => (
                <Typography key={i} variant="body2" sx={{ mb: 1 }}>
                  • {feature}
                </Typography>
              ))}
            </Box>

            <Button
              variant="contained"
              color="primary"
              href={product.link}
              sx={{
                borderRadius: 3,
                textTransform: "none",
                px: 4,
                py: 1.5,
                fontWeight: 600,
                backgroundColor: theme.palette.primary.main,
                "&:hover": {
                  backgroundColor: theme.palette.primary.dark,
                },
              }}
            >
              Ver servicio
            </Button>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ProductsSection;
