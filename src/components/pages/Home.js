import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
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
const Home = () => {
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
    return (_jsxs(_Fragment, { children: [_jsx(Loading, { open: loading }), !loading && (_jsxs(_Fragment, { children: [_jsx(SEO, { title: "DIS | Laboratorio de Innovaci\u00F3n en Tecnolog\u00EDa Inmobiliaria", description: "Laboratorio donde desarrollamos productos tecnol\u00F3gicos para el sector inmobiliario y financiero, transformando la gesti\u00F3n de inversiones y operaciones con soluciones innovadoras.", keywords: "laboratorio tecnol\u00F3gico, desarrollo de productos, innovaci\u00F3n inmobiliaria, tecnolog\u00EDa financiera, proptech, fintech, DIS", url: "https://www.dishub.co/", image: "https://www.dishub.co/preview-home.png" }), _jsx(Hero, {}), _jsx(ScrollFloat, { children: _jsx(ProblemSection, {}) }), _jsx(ScrollFloat, { children: _jsx(BenefitsSection, {}) }), _jsx(ScrollFloat, { children: _jsx(TargetSection, {}) }), _jsx(ScrollFloat, { children: _jsx(ProductsSection, {}) }), _jsx(ScrollFloat, { children: _jsx(CTASection, {}) })] }))] }));
};
export default Home;
