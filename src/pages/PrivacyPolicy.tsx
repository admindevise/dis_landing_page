import React from "react";
import { Helmet } from "react-helmet-async";
import { CONTACT_DETAILS } from "../constants/content";

const paragraphStyle = { margin: 0 };

const sections = [
  {
    title: "1. Responsable y alcance",
    body: <>
      <p style={paragraphStyle}>El responsable del tratamiento es Digital Investment Systems S.A.S. (NIT 901.783.251-1), con domicilio en {CONTACT_DETAILS.address}. Para asuntos relacionados con sus datos personales puede escribir a <a href={`mailto:${CONTACT_DETAILS.email}`}>{CONTACT_DETAILS.email}</a>.</p>
      <p style={paragraphStyle}>Esta política aplica a los datos personales tratados por la compañía a través de este sitio web y sus canales digitales de contacto. No regula los sitios o servicios de terceros a los que se accede mediante enlaces externos.</p>
    </>
  },
  {
    title: "2. Datos que podemos tratar",
    body: <>
      <p style={paragraphStyle}>Si diligencia el formulario de contacto, este solicita nombre, empresa, correo electrónico, teléfono opcional, área de interés y el mensaje que usted escriba. No incluya contraseñas, datos financieros, información sensible ni datos personales de terceros que no sean necesarios para su consulta.</p>
      <p style={paragraphStyle}>Si utiliza el enlace para agendar una reunión, los datos que ingrese en la plataforma externa de reservas serán tratados por el proveedor de ese servicio conforme a sus propias condiciones. Al cargar este sitio, el navegador también solicita archivos de fuentes tipográficas a Google Fonts; esa solicitud puede comunicar datos técnicos como la dirección IP, el navegador y la fecha de acceso.</p>
    </>
  },
  {
    title: "3. Finalidades",
    body: <ul>
      <li>Atender y responder solicitudes, preguntas y mensajes enviados por el titular.</li>
      <li>Coordinar reuniones y dar seguimiento a la consulta o a la relación comercial solicitada.</li>
      <li>Enviar la información sobre servicios que el titular haya pedido y, cuando exista autorización para ello, comunicaciones comerciales relacionadas con disHub.</li>
      <li>Proteger el sitio, prevenir envíos automatizados o abusivos, mantener su funcionamiento y atender requerimientos legales.</li>
    </ul>
  },
  {
    title: "4. Autorización y marco legal",
    body: <>
      <p style={paragraphStyle}>El tratamiento se rige por el artículo 15 de la Constitución Política, la Ley 1581 de 2012, el Decreto 1377 de 2013 compilado en el Decreto 1074 de 2015 y las demás normas colombianas aplicables. Cuando la ley lo exige, solicitamos autorización previa, expresa e informada; el envío del formulario requiere aceptar el aviso de autorización que acompaña dicho formulario.</p>
      <p style={paragraphStyle}>La autorización para atender una solicitud no implica autorización para enviar publicidad ajena a esa solicitud. Usted puede retirar su autorización o pedir la supresión de sus datos, salvo que exista un deber legal o contractual de conservarlos o una razón legal que impida su eliminación.</p>
    </>
  },
  {
    title: "5. Datos sensibles y de menores de edad",
    body: "Este sitio no solicita datos sensibles ni está dirigido a menores de edad. No los incluya en el formulario. Si los envía por iniciativa propia, puede solicitar su supresión escribiendo al canal indicado en esta política, sin perjuicio de los casos en que la ley permita o exija conservarlos."
  },
  {
    title: "6. Encargados, enlaces y transferencias",
    body: <>
      <p style={paragraphStyle}>El acceso a los datos se limita al personal autorizado que los necesita para las finalidades descritas. La compañía puede apoyarse en proveedores que presten servicios de alojamiento, comunicaciones, agenda, seguridad o soporte, bajo las instrucciones y salvaguardas que correspondan.</p>
      <p style={paragraphStyle}>El enlace de agenda dirige a Microsoft Bookings, un servicio de Microsoft; los datos que usted registre allí quedan sujetos también a la <a href="https://privacy.microsoft.com/es-co/privacystatement" target="_blank" rel="noopener noreferrer">declaración de privacidad de Microsoft</a>. Las fuentes tipográficas se solicitan a Google Fonts y su tratamiento técnico se rige por las <a href="https://policies.google.com/privacy?hl=es" target="_blank" rel="noopener noreferrer">políticas de privacidad de Google</a>. Estos proveedores pueden tratar información fuera de Colombia conforme a sus condiciones y a la normativa aplicable.</p>
      <p style={paragraphStyle}>disHub no vende datos personales. Solo los comunica cuando es necesario para prestar el servicio solicitado, existe autorización o hay un deber legal.</p>
    </>
  },
  {
    title: "7. Cookies y tecnologías similares",
    body: "El código de este sitio no incorpora herramientas propias de analítica o publicidad ni instala cookies propias con esos fines. Los servicios externos enlazados o solicitados por el navegador pueden aplicar sus propias tecnologías cuando usted los utiliza; consulte sus avisos antes de continuar."
  },
  {
    title: "8. Conservación y seguridad",
    body: <>
      <p style={paragraphStyle}>Los datos se conservan durante el tiempo necesario para responder la solicitud, mantener la relación correspondiente y cumplir obligaciones legales. Una vez cumplidas esas finalidades, se suprimen o se someten a las medidas de bloqueo o conservación que exija la ley, por ejemplo, para atender responsabilidades o reclamaciones.</p>
      <p style={paragraphStyle}>disHub adopta medidas administrativas, técnicas y humanas razonables para reducir los riesgos de pérdida, alteración, consulta o acceso no autorizado, de acuerdo con la naturaleza de la información y las obligaciones aplicables. Ninguna transmisión o almacenamiento electrónico puede garantizar seguridad absoluta.</p>
    </>
  },
  {
    title: "9. Derechos del titular",
    body: <>
      <p style={paragraphStyle}>De acuerdo con la ley, usted puede conocer, acceder, actualizar y rectificar sus datos; solicitar prueba de la autorización; conocer el uso dado a su información; presentar consultas o reclamos; pedir la revocatoria de la autorización o la supresión de los datos cuando proceda; y acudir ante la Superintendencia de Industria y Comercio una vez agotado el trámite ante el responsable.</p>
      <p style={paragraphStyle}>Para ejercer estos derechos, escriba a <a href={`mailto:${CONTACT_DETAILS.email}?subject=Consulta%20sobre%20datos%20personales`}>{CONTACT_DETAILS.email}</a>. Indique su nombre, un medio para recibir respuesta y la solicitud concreta; para proteger la información, podremos pedir datos razonables para verificar su identidad.</p>
    </>
  },
  {
    title: "10. Consultas y reclamos",
    body: <>
      <p style={paragraphStyle}>Las consultas se responderán dentro de los diez (10) días hábiles siguientes a su recepción. Si no es posible atenderlas en ese plazo, se informará el motivo y la nueva fecha, que no podrá superar cinco (5) días hábiles adicionales.</p>
      <p style={paragraphStyle}>Los reclamos se atenderán dentro de los quince (15) días hábiles siguientes a su recepción. Si no es posible resolverlos en ese término, se informará el motivo y la nueva fecha, que no podrá superar ocho (8) días hábiles adicionales. Estos términos se aplican conforme a la Ley 1581 de 2012 y sus normas reglamentarias.</p>
    </>
  },
  {
    title: "11. Vigencia y cambios",
    body: "Esta política rige desde su publicación. Puede actualizarse para reflejar cambios legales o en las prácticas de tratamiento; la versión vigente estará disponible en esta página junto con su fecha de actualización."
  }
];

export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Política de privacidad y datos personales | disHub</title>
        <meta name="description" content="Política de privacidad y tratamiento de datos personales de Digital Investment Systems S.A.S." />
      </Helmet>
    <div style={{ minHeight: "100vh", background: "linear-gradient(180deg, #0F1C27, #192B3B)" }}>
      <header style={{ maxWidth: "880px", margin: "0 auto", padding: "24px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px" }}>
        <a href="/" aria-label="disHub, volver al inicio" style={{ display: "flex", alignItems: "center", minHeight: "44px" }}>
          <img src="/DIS.svg" alt="disHub" width="110" height="37" style={{ display: "block", objectFit: "contain" }} />
        </a>
        <a href="/" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: "15px" }}>Volver al inicio</a>
      </header>
      <main style={{ maxWidth: "880px", margin: "0 auto", padding: "32px 24px 96px" }}>
        <p style={{ margin: "0 0 24px", padding: "14px 16px", borderRadius: "12px", border: "1px dashed rgb(176 196 212 / 0.4)", fontSize: "14px", color: "#B0C4D4" }}>
          Esta política informa cómo disHub trata los datos personales que recibe a través de sus canales digitales.
        </p>
        <h1 style={{ margin: "0 0 12px", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: "clamp(36px, 5vw, 56px)", letterSpacing: "-0.03em", lineHeight: 1.08, color: "#fff" }}>
          Política de privacidad y tratamiento de datos personales
        </h1>
        <p style={{ margin: "0 0 48px", color: "#B0C4D4" }}>Última actualización: 8 de octubre de 2026</p>
        <div style={{ display: "flex", flexDirection: "column", gap: "36px", fontSize: "16px", lineHeight: 1.75, color: "#B0C4D4" }}>
          {sections.map((section, index) => (
            <section key={section.title} id={`politica-seccion-${index + 1}`}>
              <h2 style={{ margin: "0 0 10px", fontFamily: "'Outfit', sans-serif", fontSize: "22px", color: "#fff" }}>{section.title}</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>{section.body}</div>
            </section>
          ))}
        </div>
      </main>
    </div>
    </>
  );
}
