import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "../components/landing/SectionHeading";
import { SITE, SOLUTIONS, SOLUTION_FLOWS } from "../constants/content";
import { handleTabKeys } from "../lib/tabs";
import { hasWebGL } from "../three/stage";
import type { SolutionScene } from "../three/solutions/engine";

const SOLUTION_KEYS = ["business", "marketplace", "hospitality", "tokenize", "valuo"] as const;
type SolutionKey = (typeof SOLUTION_KEYS)[number];
type DeviseSolutionKey = Exclude<SolutionKey, "valuo">;

const DEVISE_LOGOS: Record<DeviseSolutionKey, { src: string; alt: string }> = {
  business: { src: "/images/logos/devise-trust-blanco.svg", alt: "Devise Trust" },
  hospitality: { src: "/images/logos/devise-pulse-blanco.svg", alt: "Devise Pulse" },
  tokenize: { src: "/images/logos/devise-tokenize-blanco.svg", alt: "Devise Tokenize" },
  marketplace: { src: "/images/logos/devise-marketplace-blanco.svg", alt: "Devise Marketplace" }
};

const displayedSolutions = SOLUTION_KEYS.map((key) => ({ ...SOLUTIONS.find((item) => item.key === key)!, key }));

function Wordmark({ solutionKey }: { solutionKey: SolutionKey }) {
  if (solutionKey === "valuo") return <span className="lp-solutions__wordmark" aria-label="Valuo">valuo</span>;
  const logo = DEVISE_LOGOS[solutionKey as DeviseSolutionKey];
  return <img className="lp-solutions__devise-logo" src={logo.src} alt={logo.alt} />;
}

export default function Solutions() {
  const [selected, setSelected] = useState(0);
  const [step, setStep] = useState(0);
  const [pinned, setPinned] = useState(-1);
  const [sceneStatus, setSceneStatus] = useState<"idle" | "ready" | "unsupported">("idle");
  const sceneRef = useRef<HTMLDivElement | null>(null);
  const anchorRef = useRef<HTMLDivElement | null>(null);
  const pickerRef = useRef<HTMLDivElement | null>(null);
  const engineRef = useRef<SolutionScene | null>(null);
  const solution = displayedSolutions[selected];
  const flow = SOLUTION_FLOWS[solution.key];
  const currentKey = useRef<SolutionKey>(solution.key);

  const solutionUrl = SITE.links[solution.key];
  const hasSolutionUrl = /^https?:\/\//.test(solutionUrl) && !solutionUrl.includes("[[");

  // Mount the shared WebGL stage lazily, once, when the section approaches the viewport.
  useEffect(() => {
    const element = sceneRef.current;
    if (!element) return;
    let cancelled = false;
    let engine: SolutionScene | null = null;
    const observer = new IntersectionObserver((entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) return;
      observer.disconnect();
      if (!hasWebGL()) {
        setSceneStatus("unsupported");
        return;
      }
      import("../three/solutions/engine")
        .then(({ createSolutionScene }) => {
          if (cancelled) return;
          engine = createSolutionScene(element, { anchor: anchorRef.current, onStage: setStep });
          engine.setModel(currentKey.current, SOLUTION_FLOWS[currentKey.current]);
          engineRef.current = engine;
          setSceneStatus("ready");
        })
        .catch(() => {
          if (!cancelled) setSceneStatus("unsupported");
        });
    }, { rootMargin: "60% 0px" });
    observer.observe(element);
    return () => {
      cancelled = true;
      observer.disconnect();
      engine?.dispose();
      engineRef.current = null;
    };
  }, []);

  useEffect(() => {
    currentKey.current = solution.key;
    engineRef.current?.setModel(solution.key, SOLUTION_FLOWS[solution.key]);
  }, [solution.key]);

  // On narrow screens the picker scrolls sideways: keep the selected product in view.
  useEffect(() => {
    const picker = pickerRef.current;
    const tab = picker?.children[selected] as HTMLElement | undefined;
    if (!picker || !tab || picker.scrollWidth <= picker.clientWidth) return;
    picker.scrollTo({ left: tab.offsetLeft - picker.offsetLeft - parseFloat(getComputedStyle(picker).paddingLeft), behavior: "smooth" });
  }, [selected]);

  const select = (index: number) => {
    setSelected(index);
    setStep(0);
    setPinned(-1);
    engineRef.current?.focus(-1);
  };
  const preview = (index: number) => engineRef.current?.focus(index);
  const release = () => engineRef.current?.focus(pinned);
  const togglePin = (index: number) => {
    const next = pinned === index ? -1 : index;
    setPinned(next);
    engineRef.current?.focus(next);
  };

  return (
    <section id="soluciones" className="lp-section lp-tone-glass lp-solutions" data-solution={solution.key} data-screen-label="10 Casos con impacto" aria-labelledby="soluciones-title">
      <div className="lp-container">
        <div className="lp-solutions__head">
          <SectionHeading index="10" eyebrow="Casos con impacto" titleId="soluciones-title" title={["Soluciones probadas", "para retos", "recurrentes del sector."]} accent={[2]} />
          <p className="lp-lead" data-reveal>
            Cuando un mismo reto se repite en varias organizaciones, lo convertimos en producto aplicando nuestra metodología BrickFlow. Con esa misma metodología construimos soluciones propias y a la medida para los desafíos únicos de tu operación.
          </p>
        </div>

        <div
          ref={pickerRef}
          role="tablist"
          aria-label="Soluciones"
          className="lp-solutions__picker"
          data-reveal
          onKeyDown={(event) => handleTabKeys(event, selected, displayedSolutions.length, select, "solution-tab")}
        >
          {displayedSolutions.map((item, index) => (
            <button
              key={item.key}
              id={`solution-tab-${index}`}
              role="tab"
              type="button"
              aria-selected={selected === index}
              aria-controls="solution-panel"
              tabIndex={selected === index ? 0 : -1}
              onClick={() => select(index)}
              className="lp-solutions__tab"
              data-solution={item.key}
            >
              <Wordmark solutionKey={item.key} />
              <span className="lp-solutions__tab-kind">{item.kind}</span>
            </button>
          ))}
        </div>

        <div
          id="solution-panel"
          role="tabpanel"
          aria-labelledby={`solution-tab-${selected}`}
          className="lp-solutions__stage"
          data-solution={solution.key}
          data-scene={sceneStatus}
          data-reveal
        >
          <div ref={sceneRef} className="lp-solutions__scene" role="img" aria-label={solution.alt} />

          <div className="lp-solutions__body">
            <div key={solution.key} className="lp-solutions__copy">
              <h3 className="lp-solutions__name">{solution.name}</h3>
              <p className="lp-solutions__tagline">{solution.tagline}</p>
              <p className="lp-solutions__desc">{solution.desc}</p>
              {solution.points.length > 0 && (
                <ul className="lp-solutions__points">
                  {solution.points.map((point) => <li key={point}>{point}</li>)}
                </ul>
              )}
              {solution.demo.length > 0 && (
                <div className="lp-solutions__figures">
                  <dl>
                    {solution.demo.map((item) => (
                      <div key={item.label}>
                        <dt>{item.label}</dt>
                        <dd>{item.value}</dd>
                      </div>
                    ))}
                  </dl>
                  <p className="lp-solutions__note">Cifras de ejemplo, con fines ilustrativos.</p>
                </div>
              )}
              <a
                className="lp-btn lp-solutions__cta"
                href={hasSolutionUrl ? solutionUrl : undefined}
                target="_blank"
                rel="noopener noreferrer"
                aria-disabled={!hasSolutionUrl}
                title={hasSolutionUrl ? `Abrir la landing de ${solution.name}` : "Enlace pendiente de configurar"}
              >
                Explorar {solution.name}
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            </div>
            <div ref={anchorRef} className="lp-solutions__anchor" aria-hidden="true" />
          </div>

          <div className="lp-solutions__flow">
            <div className="lp-solutions__flow-head">
              <h4 className="lp-solutions__flow-title">{solution.name} en seis pasos</h4>
              <p className="lp-solutions__flow-hint">{solution.hint}</p>
            </div>
            <ol key={solution.key} className="lp-solutions__steps" onMouseLeave={release}>
              {flow.map((item, index) => (
                <li key={item.name}>
                  <button
                    type="button"
                    className="lp-solutions__step"
                    aria-pressed={pinned === index}
                    data-current={step === index || undefined}
                    onMouseEnter={() => preview(index)}
                    onFocus={() => preview(index)}
                    onBlur={release}
                    onClick={() => togglePin(index)}
                  >
                    <span className="lp-solutions__step-name">{item.name}</span>
                    <span className="lp-solutions__step-summary">{item.summary}</span>
                  </button>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
