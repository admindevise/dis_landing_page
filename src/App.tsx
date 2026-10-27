import { useCallback, useEffect, useRef, useState } from "react";
import Header from "./components/global/Header";
import Footer from "./components/global/Footer";
import CursorEffect from "./components/global/CursorEffect";
import Preloader from "./components/landing/Preloader";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Hero from "./sections/00-Hero";
import About from "./sections/01-About";
import StatementBand from "./sections/02-StatementBand";
import Challenge from "./sections/Challenge";
import Approach from "./sections/03-Approach";
import { BrickflowCapabilities, BrickflowDetails, BrickflowRoles } from "./sections/04-08-Brickflow";
import Solutions from "./sections/09-Solutions";
import Sectors from "./sections/10-Sectors";
import Security from "./sections/11-Security";
import History from "./sections/12-History";
import Values from "./sections/13-Values";
import FAQ from "./sections/14-FAQ";
import Contact from "./sections/15-Contact";
import ContinueJourney from "./sections/components/ContinueJourney";
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
  const { pathname, hash } = useLocation();
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
    const handlePopState = () => setMenuOpen(false);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    window.addEventListener("popstate", handlePopState);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  useEffect(() => {
    const targetId = hash.slice(1);
    const target = targetId ? document.getElementById(decodeURIComponent(targetId)) : null;
    if (target) {
      target.scrollIntoView({ behavior: "instant", block: "start" });
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [pathname, hash]);

  return (
    <>
    <Helmet>
      <title>disHub | Metodología Brickflow para IA en producción</title>
      <meta name="description" content="disHub, de Digital Investment Systems, despliega ingenieros y líderes de transformación para llevar IA a producción con trazabilidad, cumplimiento y adopción en equipos regulados." />
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
        index="02"
        tone="teal"
        eyebrow="Nuestro propósito"
        statement="La ventaja no está en tener IA, sino en desplegarla en los flujos que mueven tu operación."
        detail="Partimos de un diagnóstico enfocado donde la IA mueve indicadores reales. Nos integramos con tus líderes y operadores para repensar flujos desde cero, conectando modelos avanzados con tus datos y controles para potenciar el trabajo diario."
        actionLead="Del diagnóstico enfocado a la capacidad instalada en 4 etapas."
        actionHref="/metodologia#proceso"
        actionLabel="Conocer la metodología BrickFlow"
      />
    </>
  );
}

function ApproachPage() {
  return (
    <>
      <Approach />
      <BrickflowRoles />
      <BrickflowCapabilities />
      <BrickflowDetails />
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
          <Route path="metodologia" element={<ApproachPage />} />
          <Route path="enfoque" element={<Navigate to="/metodologia" replace />} />
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
