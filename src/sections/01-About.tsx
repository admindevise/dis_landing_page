import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import SectionHeading from "../components/landing/SectionHeading";
import ThreeStage from "../components/landing/ThreeStage";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { pad } from "../lib/tabs";
import { dataFlow } from "../three/objects/dataFlow";

const ABOUT_LAYERS = [
  {
    id: 1,
    title: "Negocio",
    subtitle: "Producción, no pruebas de concepto.",
    body: "Diseñamos sistemas duraderos que escalan con tu negocio, evolucionan con los nuevos modelos y mueven indicadores financieros reales, protegiendo tu inversión de capital."
  },
  {
    id: 2,
    title: "Metodología",
    subtitle: "Transformación de punta a punta con BrickFlow.",
    body: "Nuestros ingenieros trabajan junto a tus líderes y operadores para conectar modelos con tus datos, controles y procesos centrales en el trabajo diario."
  },
  {
    id: 3,
    title: "Tecnología",
    subtitle: "Ingeniería de élite y línea directa a la frontera.",
    body: "Desplegamos arquitecturas seguras, auditables y listas para producción sobre tus sistemas centrales desde el primer día."
  }
];

export default function About() {
  const [activeLayer, setActiveLayer] = useState(1);
  const [autoRotate, setAutoRotate] = useState(true);
  const prefersReducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const activeContent = ABOUT_LAYERS[activeLayer - 1];

  useEffect(() => {
    if (!autoRotate || prefersReducedMotion) return;
    const timer = window.setInterval(() => {
      setActiveLayer((current) => current % ABOUT_LAYERS.length + 1);
    }, 6500);
    return () => window.clearInterval(timer);
  }, [autoRotate, prefersReducedMotion]);

  function selectLayer(layer: number) {
    setAutoRotate(false);
    setActiveLayer(layer);
  }

  function handleTabKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let nextIndex: number | null = null;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") nextIndex = (index + 1) % ABOUT_LAYERS.length;
    if (event.key === "ArrowLeft" || event.key === "ArrowUp") nextIndex = (index - 1 + ABOUT_LAYERS.length) % ABOUT_LAYERS.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = ABOUT_LAYERS.length - 1;
    if (nextIndex === null) return;

    event.preventDefault();
    selectLayer(ABOUT_LAYERS[nextIndex].id);
    tabRefs.current[nextIndex]?.focus();
  }

  return (
    <section id="nosotros" className="lp-section lp-tone-navy lp-about" data-screen-label="01 Quiénes somos" aria-labelledby="nosotros-title">
      <div className="lp-container lp-about__grid">
        <div className="lp-about__visual" data-reveal="scale">
          <ThreeStage
            factory={dataFlow}
            className="lp-about__stage"
            label="Partículas de datos que atraviesan tres planos —negocio, metodología y tecnología— y pasan de un estado disperso a un flujo ordenado."
            state={{ activeLayer }}
            onLayerSelect={selectLayer}
          >
            <div className="lp-about__fallback" aria-label="Planos de negocio, metodología y tecnología">
              {ABOUT_LAYERS.map((layer, index) => (
                <button
                  key={layer.id}
                  className="lp-about__fallback-plane"
                  type="button"
                  aria-label={`Seleccionar plano ${pad(layer.id)} ${layer.title}`}
                  aria-pressed={activeLayer === layer.id}
                  style={{ "--plane-index": index } as React.CSSProperties}
                  onClick={() => selectLayer(layer.id)}
                >
                  <span>{pad(layer.id)} {layer.title.toUpperCase()}</span>
                </button>
              ))}
            </div>
          </ThreeStage>
          <ol className="lp-about__legend" aria-label="Seleccionar plano">
            {ABOUT_LAYERS.map((layer) => (
              <li key={layer.id}>
                <button type="button" aria-pressed={activeLayer === layer.id} onClick={() => selectLayer(layer.id)}>
                  <span>{pad(layer.id)}</span>{layer.title}
                </button>
              </li>
            ))}
          </ol>
        </div>

        <div className="lp-about__copy">
          <SectionHeading
            index="01"
            eyebrow="Quiénes somos"
            titleId="nosotros-title"
            title={["Un equipo para comprender,", "construir y escalar", "operaciones."]}
            accent={[3]}
          />
          <p className="lp-lead lp-about__lead" data-reveal>
            Partimos de la necesidad operativa, no de la tecnología. <strong>Nacimos con ADN de banca de inversión e inmobiliario</strong>: somos fundadores e ingenieros que entienden cómo se estructuran activos, cómo se mide el riesgo y dónde se genera valor en industrias reguladas.
          </p>
          <p className="lp-about__body" data-reveal>
            Cerramos la brecha entre la capacidad de los nuevos modelos y su ejecución real. No entregamos código y desaparecemos; acompañamos a tu equipo desde la hoja de ruta hasta la transformación de punta a punta.
          </p>
          <div className="lp-about__tabs" role="tablist" aria-label="Capas de disHub">
            {ABOUT_LAYERS.map((layer, index) => (
              <button
                key={layer.id}
                ref={(element) => { tabRefs.current[index] = element; }}
                id={`about-tab-${layer.id}`}
                className="lp-about__tab"
                type="button"
                role="tab"
                aria-selected={activeLayer === layer.id}
                aria-controls="about-layer-panel"
                tabIndex={activeLayer === layer.id ? 0 : -1}
                onClick={() => selectLayer(layer.id)}
                onKeyDown={(event) => handleTabKeyDown(event, index)}
              >
                <span>{pad(layer.id)}</span>{layer.title}
              </button>
            ))}
          </div>
          <div id="about-layer-panel" className="lp-about__panel" role="tabpanel" aria-labelledby={`about-tab-${activeLayer}`} tabIndex={0}>
            <h3>{activeContent.subtitle}</h3>
            <p>{activeContent.body}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
