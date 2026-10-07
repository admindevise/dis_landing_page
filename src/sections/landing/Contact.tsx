import type { CSSProperties } from "react";
import SplitLines from "../../components/landing/SplitLines";
import ThreeStage from "../../components/landing/ThreeStage";
import { CONTACT_DETAILS, SITE } from "../../constants/content";
import { financialInfrastructure } from "../../three/objects/financialInfrastructure";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contacto" className="lp-section lp-panel lp-tone-final lp-contact" data-screen-label="14 Contacto" aria-labelledby="contacto-title">
      <ThreeStage
        factory={financialInfrastructure}
        className="lp-contact__stage"
        label="Infraestructura financiera en tres capas —liquidación, registro y aplicaciones— unidas por pilares por los que circulan paquetes de datos."
      />
      <div className="lp-container lp-contact__grid">
        <div className="lp-contact__copy">
          <p className="lp-eyebrow" data-reveal>
            <span className="lp-eyebrow__index">14</span>
            <span className="lp-eyebrow__rule" aria-hidden="true" />
            Contacto
          </p>
          <h2 id="contacto-title" className="lp-title lp-contact__title" data-reveal="lines">
            <SplitLines lines={["Permítanos conocer", "el reto que", "desea resolver."]} accent={[2]} />
          </h2>
          <p className="lp-lead" data-reveal style={{ "--d": 3 } as CSSProperties}>
            En una reunión de 30 minutos analizamos su contexto e identificamos la alternativa de mayor valor: un diagnóstico, una de nuestras soluciones o un proyecto específico. Si lo prefiere, puede escribirnos y le responderemos en un plazo de {CONTACT_DETAILS.responseTime} días hábiles.
          </p>
          <div className="lp-contact__actions" data-reveal style={{ "--d": 4 } as CSSProperties}>
            <a className="lp-btn lp-btn--primary lp-btn--xl" href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer">
              Agendar una reunión
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
          </div>
          <ul className="lp-contact__details" data-reveal style={{ "--d": 5 } as CSSProperties}>
            <li>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 5h18v14H3zM3 6l9 7 9-7" /></svg>
              <a href={`mailto:${CONTACT_DETAILS.email}`}>{CONTACT_DETAILS.email}</a>
            </li>
            <li>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 22s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12zM12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" /></svg>
              <span>{CONTACT_DETAILS.address}</span>
            </li>
          </ul>
        </div>

        <div className="lp-contact__card" data-reveal="scale">
          <p className="lp-contact__card-title">Formulario de contacto</p>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
