import { FC, useEffect, useState } from "react";
import Hero from "../sections/Hero";
import BenefitsSection from "../sections/BenefitsSection/BenefitsSection";
import ProblemSection from "../sections/ProblemSection";
import CTASection from "../sections/CTASection";
import ScrollFloat from "../ScrollFloat";
import { useLocation } from "react-router-dom";
import SEO from "../atoms/SEO";
import TargetSection from "../sections/TargetSection";
import ProductsSection from "../sections/PriceSection";
import Loading from "../atoms/Loading";


const Home: FC = () => {
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
            title="DIS | Laboratorio de Innovación en Tecnología Inmobiliaria"
            description="Laboratorio donde desarrollamos productos tecnológicos para el sector inmobiliario y financiero, transformando la gestión de inversiones y operaciones con soluciones innovadoras."
            keywords="laboratorio tecnológico, desarrollo de productos, innovación inmobiliaria, tecnología financiera, proptech, fintech, DIS"
            url="https://www.dishub.co/"
            image="https://www.dishub.co/preview-home.png"
          />
          <Hero />
          <ScrollFloat>
            <ProblemSection />
          </ScrollFloat>
          <ScrollFloat>
            <BenefitsSection />
          </ScrollFloat>
          <ScrollFloat>
            <TargetSection />
          </ScrollFloat>
          <ScrollFloat>
            <ProductsSection />
          </ScrollFloat>
          <ScrollFloat>
            <CTASection />
          </ScrollFloat>
        </>
      )}
    </>
  );
};

export default Home;
