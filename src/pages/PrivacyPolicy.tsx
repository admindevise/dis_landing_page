import React from "react";
import { Helmet } from "react-helmet-async";

const sections = [
  {
    title: "1. Responsable del tratamiento",
    body: <>Digital Investment Systems S.A.S., NIT 901.783.251-1, con domicilio en Calle 76 Nº 8-28, piso 3, Bogotá, Colombia. Correo: <a href="mailto:contacto@dishub.co">contacto@dishub.co</a>.</>
  },
  {
    title: "2. Marco legal",
    body: "Esta política se rige por la Ley Estatutaria 1581 de 2012, el Decreto 1377 de 2013 (compilado en el Decreto 1074 de 2015) y demás normas que las modifiquen o complementen."
  },
  {
    title: "3. Finalidades",
    body: "Los datos recolectados a través de este sitio se usan para atender solicitudes de contacto, agendar reuniones, enviar información comercial solicitada por el titular y cumplir obligaciones legales. [[FINALIDADES_ADICIONALES]]"
  },
  {
    title: "4. Derechos del titular",
    body: "Usted puede conocer, actualizar, rectificar y suprimir sus datos, solicitar prueba de la autorización, ser informado sobre el uso de sus datos, revocar la autorización y presentar quejas ante la Superintendencia de Industria y Comercio."
  },
  {
    title: "5. Procedimiento para consultas y reclamos",
    body: <>Las solicitudes se reciben en <a href="mailto:contacto@dishub.co">contacto@dishub.co</a>. Las consultas se atienden en un máximo de diez (10) días hábiles y los reclamos en quince (15) días hábiles, en los términos de la ley. [[CANAL_HABEAS_DATA]]</>
  },
  {
    title: "6. Seguridad de la información",
    body: "Aplicamos medidas técnicas, humanas y administrativas para proteger los datos contra adulteración, pérdida, consulta o acceso no autorizado. [[DETALLE_MEDIDAS_SEGURIDAD]]"
  },
  {
    title: "7. Vigencia",
    body: "Esta política rige a partir de su publicación. Las bases de datos se conservarán mientras sea necesario para las finalidades descritas. [[PERIODO_CONSERVACION]]"
  }
];

export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Política de privacidad | disHub</title>
        <meta name="description" content="Política de tratamiento de datos personales de Digital Investment Systems S.A.S." />
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
          Texto preliminar pendiente de revisión por el área legal: [[REVISION_LEGAL]]
        </p>
        <h1 style={{ margin: "0 0 12px", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: "clamp(36px, 5vw, 56px)", letterSpacing: "-0.03em", lineHeight: 1.08, color: "#fff" }}>
          Política de tratamiento de datos personales
        </h1>
        <p style={{ margin: "0 0 48px", color: "#B0C4D4" }}>Última actualización: [[FECHA_VIGENCIA]]</p>
        <div style={{ display: "flex", flexDirection: "column", gap: "36px", fontSize: "16px", lineHeight: 1.75, color: "#B0C4D4" }}>
          {sections.map((section) => (
            <section key={section.title}>
              <h2 style={{ margin: "0 0 10px", fontFamily: "'Outfit', sans-serif", fontSize: "22px", color: "#fff" }}>{section.title}</h2>
              <p style={{ margin: 0 }}>{section.body}</p>
            </section>
          ))}
        </div>
      </main>
    </div>
    </>
  );
}
