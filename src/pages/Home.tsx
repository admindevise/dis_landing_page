import { FC, useEffect, useState } from "react";
import Hero from "../sections/home/Hero";
import BenefitsSection from "../sections/home/BenefitsSection/BenefitsSection";
import ProblemSection from "../sections/home/ProblemSection";
import CTASection from "../sections/home/CTASection";
import ScrollFloat from "../components/global/ScrollFloat";
import { useLocation } from "react-router-dom";
import SEO from "../components/global/SEO";
import TargetSection from "../sections/home/TargetSection";
import ProductsSection from "../sections/home/PriceSection";
import Loading from "../components/global/Loading";


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
