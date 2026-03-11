import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SolutionTabs from "../molecules/SolutionTabs";
import SolutionImageDisplay from "../molecules/SolutionImageDisplay";
import { Database, Home, Users, BarChart3, Headphones, Gauge, Coins, Briefcase, ArrowLeftRight, Sparkles, Building2, Settings, Network, Cpu, LineChart } from "lucide-react";

interface PlatformModuleProps {
  role: "admin" | "inversionista" | "valuo" | "consultoria";
}
const AdminModules = [
  { name: "Activos", icon: <Database size={20} />, image: "/images/platform/activos.png" },
  { name: "Propiedades", icon: <Home size={20} />, image: "/images/platform/propiedades.png" },
  { name: "Inversionistas", icon: <Users size={20} />, image: "/images/platform/inversionistas.png" },
  { name: "Analítica e Insights", icon: <BarChart3 size={20} />, image: "/images/platform/analítica.png" },
  { name: "Soporte", icon: <Headphones size={20} />, image: "/images/platform/soporte.png" },
];

const InversionistaModules = [
  { name: "Dashboard", icon: <Gauge size={20} />, image: "/images/platform/dashboard.png" },
  { name: "Invertir", icon: <Coins size={20} />, image: "/images/platform/invertir.png" },
  { name: "Portafolio", icon: <Briefcase size={20} />, image: "/images/platform/portafolio.png" },
  { name: "Movimientos", icon: <ArrowLeftRight size={20} />, image: "/images/platform/movimientos.png" },
];

const ValuoModules = [
  { name: "Avalúos con IA", icon: <Sparkles size={20} />, image: "/images/platform/avaluos.png" },
  { name: "Comparables de Mercado", icon: <BarChart3 size={20} />, image: "/images/platform/comparables.png" },
  { name: "Mapas y Tendencias", icon: <Building2 size={20} />, image: "/images/platform/tendencias.png" },
  { name: "Reportes Inteligentes", icon: <Briefcase size={20} />, image: "/images/platform/reportes.png" },
];

const ConsultoriaModules = [
  { name: "Análisis Predictivo del Cambio", icon: <LineChart size={20} />, image: "/images/consultoria/analisis.svg", },
  { name: "Automatización Inteligente", icon: <Cpu size={20} />, image: "/images/consultoria/automatizacion.svg", },
  { name: "Cultura y Liderazgo Digital", icon: <Network size={20} />, image: "/images/consultoria/cultura.svg", },
  { name: "Estrategia de Transformación", icon: <Settings size={20} />, image: "/images/consultoria/estrategia.svg", },
];

const autoDuration = 7000;

const PlatformModule = ({ role }: PlatformModuleProps) => {
  const modules =
    role === "admin"
      ? AdminModules
      : role === "inversionista"
        ? InversionistaModules : role == "valuo"
          ? ValuoModules : ConsultoriaModules;
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % modules.length);
    }, autoDuration);
    return () => clearInterval(timer);
  }, [modules.length]);

  return (
    <Box sx={{ py: 2 }}>
      <Grid container spacing={6} alignItems="flex-start" justifyContent="center">
        <Grid size={{ xs: 12, md: 4 }} >
          {role === "admin" && (
            <>
              <Typography
                variant="h5"
                sx={{ fontWeight: 600, color: "text.secondary" }}
              >Devise Business
              </Typography>
              <Typography
                variant="body1"
                sx={{ mb: 3, color: "text.secondary", lineHeight: 1.6 }}
              >
                Digitaliza y simplifica la gestión de inversiones en vehículos de inversión, automatizando tareas clave y conectando a administradores, operadores e inversionistas para lograr eficiencia, trazabilidad y transparencia.
              </Typography>
            </>
          )}
          {role === "inversionista" && (
            <>
              <Typography
                variant="h5"
                sx={{ fontWeight: 600, color: "text.secondary" }}
              >
                Devise MarketPlace
              </Typography>
              <Typography
                variant="body1"
                sx={{ mb: 3, color: "text.secondary", lineHeight: 1.6 }}
              >
                Una experiencia digital completa para inversionistas: visualiza tu portafolio, conoce tus rendimientos, realiza cesiones y sigue tus inversiones en tiempo real, con total seguridad y transparencia.
              </Typography>
            </>
          )}

          {role === "valuo" && (
            <>
              <Typography
                variant="h5"
                sx={{ fontWeight: 600, color: "text.secondary" }}
              > Plataforma Valuo
              </Typography>
              <Typography
                variant="body1"
                sx={{ mb: 3, color: "text.secondary", lineHeight: 1.6 }}
              >
                Plataforma de avalúos inmobiliarios automatizados con IA que permite conocer el valor real de un inmueble en minutos. Precisa, confiable y accesible para todos.
              </Typography>
            </>
          )}

          {role === "consultoria" && (
            <>
              <Typography
                variant="h5"
                sx={{ fontWeight: 600, color: "text.secondary" }}
              > Transformación con IA
              </Typography>
              <Typography
                variant="body1"
                sx={{ mb: 3, color: "text.secondary", lineHeight: 1.6 }}
              >
                Impulsamos la transformación digital mediante estrategias de cambio
                respaldadas por inteligencia artificial, análisis predictivo y
                automatización inteligente.
              </Typography>
            </>
          )}

          <SolutionTabs
            modules={modules}
            activeIndex={activeIndex}
            onSelect={setActiveIndex}
            autoDuration={autoDuration}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 8 }} display="flex" justifyContent="center">
          <SolutionImageDisplay
            images={modules.map((m) => m.image)}
            activeIndex={activeIndex}
          />
        </Grid>
      </Grid>
    </Box >
  );
};

export default PlatformModule;
