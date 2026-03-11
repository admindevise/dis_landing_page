import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import SolutionsSection from "../sections/SolutionsSection/SolutionsSection";
import ScrollFloat from "../ScrollFloat";
import { useLocation } from "react-router-dom";
import SEO from "../atoms/SEO";
import Loading from "../atoms/Loading";
const Soluciones = () => {
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
    return (_jsxs(_Fragment, { children: [_jsx(Loading, { open: loading }), !loading && (_jsxs(_Fragment, { children: [_jsx(SEO, { title: "Soluciones DIS | Innovaci\u00F3n Tecnol\u00F3gica Inmobiliaria", description: "Descubre nuestras soluciones tecnol\u00F3gicas dise\u00F1adas para hacer m\u00E1s eficiente la gesti\u00F3n inmobiliaria y financiera. Devise Business, Devise Marketplace, Valuo y Consultor\u00EDa.", keywords: "soluciones tecnol\u00F3gicas, gesti\u00F3n inmobiliaria, tecnolog\u00EDa financiera, Devise Business, Devise Marketplace, Valuo, consultor\u00EDa inmobiliaria, DIS", url: "https://www.dishub.co/soluciones", image: "https://www.dishub.co/preview-soluciones.png" }), _jsx(Box, { sx: { pt: 10 }, children: _jsx(ScrollFloat, { children: _jsx(SolutionsSection, {}) }) })] }))] }));
};
export default Soluciones;
