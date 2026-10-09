import type { CSSProperties } from "react";
import SectionHeading from "../../components/landing/SectionHeading";
import ThreeStage from "../../components/landing/ThreeStage";
import { SECURITY_CONTROLS } from "../../constants/content";
import { pad } from "../../lib/tabs";
import { securityLayers } from "../../three/objects/securityLayers";

export default function Security() {
  return (
    <section id="seguridad" className="lp-section lp-tone-abyss lp-security" data-screen-label="12 Seguridad y cumplimiento" aria-labelledby="seguridad-title">
      <div className="lp-container lp-security__grid">
        <div className="lp-security__copy">
          <SectionHeading
            index="12"
            eyebrow="Seguridad y cumplimiento"
            titleId="seguridad-title"
            title={["La seguridad", "se incorpora", "desde el", "diagnóstico."]}
            accent={[3]}
            lead="La gestión de sistemas críticos exige considerar la seguridad, la trazabilidad y el cumplimiento normativo desde el diagnóstico. La seguridad no constituye una capa final, sino un criterio presente en cada decisión de la solución."
          />
          <ul className="lp-console" aria-label="Capas de control">
            {SECURITY_CONTROLS.map((control, index) => (
              <li key={control.title} className="lp-console__row" data-reveal style={{ "--d": index } as CSSProperties}>
                <span className="lp-console__code" aria-hidden="true">L{pad(index + 1)}</span>
                <span className="lp-console__icon" aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d={control.icon} /></svg>
                </span>
                <div>
                  <h3>{control.title}</h3>
                  <p>{control.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <ThreeStage
          factory={securityLayers}
          className="lp-security__stage"
          label="Núcleo de datos protegido por capas concéntricas: gobierno de accesos, cifrado, registro auditable y perímetro de protección de datos."
        >
          <ol className="lp-security__labels" aria-hidden="true">
            {SECURITY_CONTROLS.map((control, index) => (
              <li key={control.title}><span>L{pad(index + 1)}</span>{control.title}</li>
            ))}
          </ol>
        </ThreeStage>
      </div>
    </section>
  );
}
