import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/templates/Footer";
import Home from "./components/pages/Home";
import Nosotros from "./components/pages/Nosotros";
import Contact from "./components/pages/Contact";
import NotFound from "./components/pages/NotFound";
import DeviseBusiness from "./components/pages/DeviseBusiness";
import DeviseMarketplace from "./components/pages/DeviseMarketplace";
import Valuo from "./components/pages/Valuo";
import Consulting from "./components/pages/Consulting";
import Soluciones from "./components/pages/Soluciones";
import HeaderSwitcher from "./components/templates/HeaderSwitcher";
import ScrollToTop from "./components/atoms/ScrollToTop";
function App() {
    return (_jsxs(Router, { children: [_jsx(ScrollToTop, {}), _jsx(HeaderSwitcher, {}), _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/nosotros", element: _jsx(Nosotros, {}) }), _jsx(Route, { path: "/soluciones", element: _jsx(Soluciones, {}) }), _jsx(Route, { path: "/contacto", element: _jsx(Contact, {}) }), _jsx(Route, { path: "/devise/devise-business", element: _jsx(DeviseBusiness, {}) }), _jsx(Route, { path: "/devise/devise-marketplace", element: _jsx(DeviseMarketplace, {}) }), _jsx(Route, { path: "/valuo", element: _jsx(Valuo, {}) }), _jsx(Route, { path: "/consulting", element: _jsx(Consulting, {}) }), _jsx(Route, { path: "/404", element: _jsx(NotFound, {}) }), _jsx(Route, { path: "*", element: _jsx(NotFound, {}) })] }), _jsx(Footer, {})] }));
}
export default App;
