import { useCallback, useEffect, useRef, useState } from "react";
import Header from "./components/global/Header";
import Footer from "./components/global/Footer";
import CursorEffect from "./components/global/CursorEffect";
import Preloader from "./components/landing/Preloader";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Hero from "./sections/landing/Hero";
import About from "./sections/landing/About";
import StatementBand from "./sections/landing/StatementBand";
import Challenge from "./sections/landing/Challenge";
import Approach from "./sections/landing/Approach";
import Solutions from "./sections/landing/Solutions";
import Sectors from "./sections/landing/Sectors";
import Security from "./sections/landing/Security";
import Lab from "./sections/landing/Lab";
import History from "./sections/landing/History";
import Values from "./sections/landing/Values";
import Testimonials from "./sections/landing/Testimonials";
import FAQ from "./sections/landing/FAQ";
import Contact from "./sections/landing/Contact";
import { NAV } from "./constants/content";
import { useLandingMotion } from "./hooks/useLandingMotion";
import { usePreload } from "./hooks/usePreload";
import { Navigate, Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function Landing() {
  const rootRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [headerPad, setHeaderPad] = useState("20px 16px");
  const [wide, setWide] = useState(() => window.innerWidth >= 1080);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const { progress: loadProgress, done: loaded } = usePreload();
  const [showLoader, setShowLoader] = useState(true);
  const hideLoader = useCallback(() => setShowLoader(false), []);

  useLandingMotion(rootRef, progressRef, loaded);

  useEffect(() => {
    const handleScroll = () => {
      setHeaderPad(window.scrollY > 24 ? "10px 16px" : "20px 16px");
      let active = "inicio";
      NAV.forEach(([id]) => {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top < 140) active = id;
      });
      setActiveSection(active);
    };
    const handleResize = () => setWide(window.innerWidth >= 1080);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
    <Helmet>
      <title>disHub | Estudio de software y desarrollo a la medida</title>
      <meta name="description" content="disHub es un estudio de software en Bogotá. Diseñamos y desarrollamos software a la medida que une estrategia, producto e ingeniería para convertir operaciones complejas en tecnología útil y segura." />
    </Helmet>
    <div ref={rootRef} className="lp dis-page relative min-h-screen overflow-x-clip bg-disPage bg-disGrid">
      <a href="#contenido" className="lp-skip">Saltar al contenido</a>

      {showLoader && <Preloader progress={loadProgress} done={loaded} onExited={hideLoader} />}

      {/* Background grid and orbs */}
      <div 
        style={{
          pointerEvents: 'none',
          position: 'fixed',
          inset: 0,
          zIndex: 0,
          overflow: 'hidden',
          background: 'transparent'
        }}
        aria-hidden="true"
      >
        <div 
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 10,
            background: 'radial-gradient(circle at 78% 28%, rgb(0 178 178 / 0.28), transparent 28%), radial-gradient(circle at 8% 90%, rgb(31 126 190 / 0.34), transparent 34%)',
            animation: 'stainDrift 26s ease-in-out infinite'
          }}
        />
        <div className="dis-orb--a absolute right-[-12vw] top-[-12vh] h-[64vw] w-[64vw] rounded-full blur-[110px] motion-safe:animate-[orbA_28s_ease-in-out_infinite]" />
        <div className="dis-orb--b absolute bottom-[-24vh] left-[-18vw] h-[72vw] w-[72vw] rounded-full blur-[120px] motion-safe:animate-[orbB_34s_ease-in-out_infinite]" />
        <div className="dis-orb--c absolute left-[38vw] top-[34vh] h-[28vw] w-[28vw] rounded-full blur-[100px] motion-safe:animate-[orbA_40s_ease-in-out_infinite_reverse]" />
        <div className="dis-grid-lines absolute inset-0 z-2" />
      </div>

      <div ref={progressRef} className="lp-progress" aria-hidden="true" />

      <Header headerPad={headerPad} wide={wide} menuOpen={menuOpen} activeSection={activeSection} setMenuOpen={setMenuOpen} />

      <main id="contenido" className="lp-main" aria-busy={!loaded}>
        <Hero />
        <About />
        <StatementBand
          id="lectura"
          index="03"
          tone="teal"
          eyebrow="La razón de existir"
          statement="Los problemas complejos necesitan a alguien que sepa construir."
          detail="Entramos donde el negocio, la operación y la tecnología todavía no hablan el mismo idioma. Entendemos el contexto, encontramos la fricción y convertimos la oportunidad en software que puede crecer."
          metric="01"
          metricLabel="equipo para negocio, producto e ingeniería"
        />
        <Challenge />
        <Approach />
        <Lab />
        <StatementBand
          id="control"
          index="07"
          tone="ink"
          eyebrow="Lo que permanece"
          statement="Construimos capacidades, no entregas aisladas."
          detail="Cada producto, plataforma o automatización deja una base reutilizable: decisiones más claras, equipos más autónomos y tecnología preparada para la siguiente pregunta del negocio."
          metric="360°"
          metricLabel="de acompañamiento, de la idea a la operación"
        />
        <Solutions />
        <Sectors />
        <Security />
        <History />
        <Values />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </div>
    </>
  );
}

export default function App() {
  return (
    <>
      <CursorEffect />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/politica-privacidad" element={<PrivacyPolicy />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}
