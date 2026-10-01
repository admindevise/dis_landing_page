import { Box, Grid } from "@mui/material";
import { TrendingUp, AccountBalance, Domain, BusinessCenter, People } from "@mui/icons-material";
import { motion } from "framer-motion";
import { useState } from "react";
import SectionTitle from "../../components/global/SectionTitle";
import ProblemCard from "../../components/global/ProblemCard";

const personas = [
  {
    title: "Operadores Inmobiliarios",
    desc: "Digitalizan la gestión de fideicomisos, automatizan procesos y fortalecen la trazabilidad operativa.",
    icon: <AccountBalance />,
  },
  {
    title: "Gestores de activos",
    desc: "Gestionan portafolios con herramientas analíticas, reportes financieros y liquidez en el mercado.",
    icon: <BusinessCenter />,
  },
  {
    title: "Gestores y operadores inmobiliarios",
    desc: "Centralizan activos, contratos y rentas en plataformas digitales que optimizan la rentabilidad.",
    icon: <Domain />,
  },
  {
    title: "Empresas y grupos corporativos",
    desc: "Modernizan su operación inmobiliaria y garantizan cumplimiento normativo con trazabilidad digital.",
    icon: <People />,
  },
  {
    title: "Inversionistas",
    desc: "Acceden a un ecosistema más transparente, con información en tiempo real y operaciones seguras.",
    icon: <TrendingUp />,
  },
];

const AnimatedCube = ({ delay }: { delay: number }) => {
  const [{ size, left, duration }] = useState(() => ({
    size: Math.random() * 50 + 40,
    left: Math.random() * 100,
    duration: 20 + Math.random() * 15,
  }));

  return (
    <motion.div
      style={{
        position: "absolute",
        width: size,
        height: size,
        border: "1px solid rgba(0,255,200,0.1)",
        background:
          "linear-gradient(135deg, rgba(0,255,200,0.05), rgba(255,255,255,0.02))",
        borderRadius: 6,
        transformStyle: "preserve-3d",
        left: `${left}%`,
        bottom: -60,
        zIndex: 0,
      }}
      initial={{ y: 0, opacity: 0 }}
      animate={{
        y: [-20, -600],
        rotateX: [0, 360],
        rotateY: [0, 360],
        opacity: [0, 0.6, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
};

const TargetSection = () => {
  return (
    <Box
      sx={{
        py: 12,
        px: 4,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Cubos animados en el fondo */}
      {[...Array(8)].map((_, i) => (
        <AnimatedCube key={i} delay={i * 2} />
      ))}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <SectionTitle title="Desarrollamos productos para quienes hacen posible la inversión" subtitle="Desde nuestro laboratorio creamos tecnología que une a todos los actores del ecosistema financiero e inmobiliario, optimizando la gestión, la inversión y la rentabilidad." />
      </motion.div>
      <Grid container spacing={3} justifyContent="center">
        {personas.map((p, i) => (
          <Grid key={i}>
            <ProblemCard icon={p.icon} title={p.title} description={p.desc} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
export default TargetSection