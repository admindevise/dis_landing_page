import { FC, useEffect, useState } from "react";
import { Box } from "@mui/material";
import SolutionsSection from "../sections/home/SolutionsSection/SolutionsSection";
import ScrollFloat from "../components/global/ScrollFloat";
import { useLocation } from "react-router-dom";
import SEO from "../components/global/SEO";
import Loading from "../components/global/Loading";

const Soluciones: FC = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (location.state?.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.state]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Loading open={loading} />
      {!loading && (
        <>
          <SEO
            title="Soluciones DIS | Innovación Tecnológica Inmobiliaria"
            description="Descubre nuestras soluciones tecnológicas diseñadas para hacer más eficiente la gestión inmobiliaria y financiera. Devise Business, Devise Marketplace, Valuo y Consultoría."
            keywords="soluciones tecnológicas, gestión inmobiliaria, tecnología financiera, Devise Business, Devise Marketplace, Valuo, consultoría inmobiliaria, DIS"
            url="https://www.dishub.co/soluciones"
            image="https://www.dishub.co/preview-soluciones.png"
          />
          <Box sx={{ pt: 10 }}>
            <ScrollFloat>
              <SolutionsSection />
            </ScrollFloat>
          </Box>
        </>
      )}
    </>
  );
};

export default Soluciones;
