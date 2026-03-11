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
  return (
    <Router>
      <ScrollToTop />
      <HeaderSwitcher />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/soluciones" element={<Soluciones />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/devise/devise-business" element={<DeviseBusiness />} />
        <Route path="/devise/devise-marketplace" element={<DeviseMarketplace />} />
        <Route path="/valuo" element={<Valuo />} />
        <Route path="/consulting" element={<Consulting />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
