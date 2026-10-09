import { Link, useLocation } from "react-router-dom";

const JOURNEY = [
  { key: "nosotros", number: "01", label: "Nosotros", to: "/", description: "Conozca disHub y la manera en que abordamos los retos operativos." },
  { key: "desafio", number: "04", label: "Desafío", to: "/desafio", description: "Las operaciones complejas requieren soluciones que comprendan su contexto." },
  { key: "enfoque", number: "05", label: "Metodología", to: "/enfoque", description: "Un diagnóstico estructurado convierte los retos operativos en oportunidades de mejora." },
  { key: "soluciones", number: "08", label: "Soluciones", to: "/soluciones", description: "Tecnología pertinente para resolver cada reto de negocio." },
  { key: "historia", number: "11", label: "Trayectoria", to: "/historia", description: "Una experiencia construida junto a organizaciones del sector." },
  { key: "contacto", number: "13", label: "Contacto", to: "/contacto", description: "Conversemos sobre los retos de su organización." }
];

export default function ContinueJourney() {
  const { pathname } = useLocation();
  const currentKey = pathname.split("/")[1] || "nosotros";
  const foundIndex = JOURNEY.findIndex((item) => item.key === currentKey);
  const currentIndex = foundIndex === -1 ? 0 : foundIndex;
  const current = JOURNEY[currentIndex];
  const next = JOURNEY[(currentIndex + 1) % JOURNEY.length];
  const isLastStep = currentIndex === JOURNEY.length - 1;
  const shortcuts = JOURNEY.filter((item) => item.key !== current.key && item.key !== next.key);

  return (
    <section className="lp-continue" aria-labelledby="continue-title">
      <div className="lp-container">
        <div className="lp-continue__topline">
          <p className="lp-eyebrow">
            <span className="lp-eyebrow__index">{next.number}</span>
            <span className="lp-eyebrow__rule" aria-hidden="true" />
            Continúe el recorrido
          </p>
          <div className="lp-continue__progress" aria-label={`Página ${currentIndex + 1} de ${JOURNEY.length}`}>
            <span>{String(currentIndex + 1).padStart(2, "0")} / {String(JOURNEY.length).padStart(2, "0")}</span>
            <span className="lp-continue__segments" aria-hidden="true">
              {JOURNEY.map((item, index) => <i key={item.key} className={index <= currentIndex ? "is-active" : undefined} />)}
            </span>
          </div>
        </div>

        <div className="lp-continue__main">
          <div className="lp-continue__copy">
            <p className="lp-continue__label">{isLastStep ? "Volver al inicio" : "Siguiente"}</p>
            <h2 id="continue-title" className="lp-band__statement">{next.label}</h2>
            <p className="lp-continue__description">{next.description}</p>
          </div>
          <Link className="lp-continue__next" to={next.to} aria-label={`${isLastStep ? "Volver a" : "Continuar a"} ${next.label}`}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <nav className="lp-continue__shortcuts" aria-label="Vaya directamente a">
          <span className="lp-continue__shortcuts-label">O vaya directamente a</span>
          {shortcuts.map((shortcut) => (
            <Link key={shortcut.key} to={shortcut.to}>
              <span>{shortcut.number}</span>
              {shortcut.label}
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}