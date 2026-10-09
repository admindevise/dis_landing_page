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
import FAQ from "./sections/landing/FAQ";
import Contact from "./sections/landing/Contact";
import ContinueJourney from "./sections/landing/ContinueJourney";
import { useLandingMotion } from "./hooks/useLandingMotion";
import { usePreload } from "./hooks/usePreload";
import { Navigate, Outlet, Route, Routes, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function LandingLayout() {
  const rootRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [headerPad, setHeaderPad] = useState("20px 16px");
  const [wide, setWide] = useState(() => window.innerWidth >= 1080);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const activeSection = pathname.split("/")[1] || "nosotros";
  const { progress: loadProgress, done: loaded } = usePreload();
  const [showLoader, setShowLoader] = useState(true);
  const hideLoader = useCallback(() => setShowLoader(false), []);

  useLandingMotion(rootRef, progressRef, loaded, pathname);

  useEffect(() => {
    const handleScroll = () => {
      setHeaderPad(window.scrollY > 24 ? "10px 16px" : "20px 16px");
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

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
    <Helmet>
      <title>disHub | Soluciones tecnológicas para el sector financiero e inmobiliario</title>
      <meta name="description" content="disHub es el laboratorio de innovación de Digital Investment Systems S.A.S. Mediante una metodología propia, diagnosticamos los retos operativos de entidades del sector financiero e inmobiliario y los resolvemos con la tecnología pertinente para cada caso." />
    </Helmet>
    <div ref={rootRef} className="lp dis-page relative min-h-screen overflow-x-clip bg-disPage bg-disGrid">
      <a href="#contenido" className="lp-skip">Saltar al contenido</a>

      {showLoader && <Preloader progress={loadProgress} done={loaded} onExited={hideLoader} />}

      {/* Background grid and orbs */}
      <div className="lp-ambient" aria-hidden="true">
        <div className="lp-ambient__stain" />
        <div className="dis-orb--a absolute right-[-12vw] top-[-12vh] h-[64vw] w-[64vw] rounded-full blur-[110px] motion-safe:animate-[orbA_28s_ease-in-out_infinite]" />
        <div className="dis-orb--b absolute bottom-[-24vh] left-[-18vw] h-[72vw] w-[72vw] rounded-full blur-[120px] motion-safe:animate-[orbB_34s_ease-in-out_infinite]" />
        <div className="dis-orb--c absolute left-[38vw] top-[34vh] h-[28vw] w-[28vw] rounded-full blur-[100px] motion-safe:animate-[orbA_40s_ease-in-out_infinite_reverse]" />
        <div className="dis-grid-lines absolute inset-0 z-2" />
      </div>

      <div ref={progressRef} className="lp-progress" aria-hidden="true" />

      <Header headerPad={headerPad} wide={wide} menuOpen={menuOpen} activeSection={activeSection} setMenuOpen={setMenuOpen} />

      <main id="contenido" className="lp-main" aria-busy={!loaded}>
        <Outlet />
        <ContinueJourney />
      </main>

      <Footer />
    </div>
    </>
  );
}

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <StatementBand
        id="lectura"
        index="03"
        tone="teal"
        eyebrow="Nuestro propósito"
        statement="Toda solución efectiva comienza con un diagnóstico riguroso."
        detail="Intervenimos en los puntos donde el negocio, la operación y la tecnología aún no están alineados. Analizamos el contexto, identificamos las causas de las ineficiencias y las transformamos en soluciones medibles, con la tecnología que cada caso requiere."
        metric="01"
        metricLabel="metodología integral, del diagnóstico a los resultados"
      />
    </>
  );
}

function ApproachPage() {
  return (
    <>
      <Approach />
      <Lab />
      <StatementBand
        id="control"
        index="07"
        tone="ink"
        eyebrow="Valor sostenible"
        statement="Generamos capacidades permanentes, no entregables aislados."
        detail="Cada diagnóstico, proceso rediseñado o solución implementada constituye una base reutilizable: decisiones mejor fundamentadas, equipos con mayor autonomía y una organización preparada para sus próximos retos."
        metric="360°"
        metricLabel="de acompañamiento, del diagnóstico a la operación"
      />
    </>
  );
}

export default function App() {
  return (
    <>
      <CursorEffect />
      <Routes>
        <Route element={<LandingLayout />}>
          <Route index element={<HomePage />} />
          <Route path="nosotros" element={<HomePage />} />
          <Route path="desafio" element={<Challenge />} />
          <Route path="enfoque" element={<ApproachPage />} />
          <Route path="soluciones" element={<><Solutions /><Sectors /><Security /></>} />
          <Route path="seguridad" element={<Navigate to="/soluciones" replace />} />
          <Route path="historia" element={<><History /><Values /></>} />
          <Route path="contacto" element={<><FAQ /><Contact /></>} />
        </Route>
        <Route path="/politica-privacidad" element={<PrivacyPolicy />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}
