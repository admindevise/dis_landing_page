import React from "react";
import { Link } from "react-router-dom";
import { CONTACT_DETAILS, SITE, SOLUTIONS } from "../../constants/content";

export default function Footer() {
  return (
    <footer
      style={{
        position: "relative",
        zIndex: 1,
        background: "rgb(15 28 39 / 0.7)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderTop: "1px solid rgb(255 255 255 / 0.08)",
        padding: "64px 24px 32px",
        color: "#B0C4D4"
      }}
    >
      <div
        style={{
          maxWidth: "1240px",
          margin: "0 auto"
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "48px",
            marginBottom: "48px"
          }}
        >
          {/* Branding */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <Link to="/" aria-label="disHub, volver al inicio" style={{ display: "inline-flex", alignItems: "center", minHeight: "44px" }}>
              <img src="/DIS.svg" alt="disHub" width="110" height="37" style={{ display: "block", objectFit: "contain" }} />
            </Link>
            <p
              style={{
                margin: 0,
                fontSize: "13px",
                lineHeight: 1.6,
                color: "#B0C4D4"
              }}
            >
              Digital Investment Systems S.A.S.<br />
              NIT 901.783.251-1<br />
              {CONTACT_DETAILS.address}
            </p>
            <p style={{ margin: 0, fontSize: "13px", lineHeight: 1.6 }}>
              <a href={`mailto:${CONTACT_DETAILS.email}`} style={{ color: "inherit" }}>{CONTACT_DETAILS.email}</a><br />
              <a href={`tel:${CONTACT_DETAILS.phone.replace(/\s/g, "")}`} style={{ color: "inherit" }}>{CONTACT_DETAILS.phone}</a>
            </p>
          </div>

          {/* Products */}
          <div>
            <h4
              style={{
                margin: "0 0 16px",
                fontSize: "13px",
                fontWeight: 600,
                color: "#fff",
                fontFamily: "'Outfit', sans-serif",
                letterSpacing: "0.05em",
                textTransform: "uppercase"
              }}
            >
              Soluciones
            </h4>
            <ul
              style={{
                margin: 0,
                padding: 0,
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "8px"
              }}
            >
              {SOLUTIONS.map((solution) => (
                <li key={solution.key}>
                  <a
                    href={SITE.links[solution.key as keyof typeof SITE.links]}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: "13px",
                      color: "#B0C4D4",
                      textDecoration: "none",
                      transition: "color 200ms"
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "#4FD8D8";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "#B0C4D4";
                    }}
                  >
                    {solution.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="footer-company-links">
            <h4
              style={{
                margin: "0 0 16px",
                fontSize: "13px",
                fontWeight: 600,
                color: "#fff",
                fontFamily: "'Outfit', sans-serif",
                letterSpacing: "0.05em",
                textTransform: "uppercase"
              }}
            >
              Empresa
            </h4>
            <ul
              style={{
                margin: 0,
                padding: 0,
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "8px"
              }}
            >
              {[
                { label: "Nosotros", href: "/nosotros" },
                { label: "Metodología", href: "/enfoque" },
                { label: "Trayectoria", href: "/historia" },
                { label: "Contacto", href: "/contacto" }
              ].map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.href}
                    style={{
                      fontSize: "13px",
                      color: "#B0C4D4",
                      textDecoration: "none",
                      transition: "color 200ms"
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "#4FD8D8";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "#B0C4D4";
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4
              style={{
                margin: "0 0 16px",
                fontSize: "13px",
                fontWeight: 600,
                color: "#fff",
                fontFamily: "'Outfit', sans-serif",
                letterSpacing: "0.05em",
                textTransform: "uppercase"
              }}
            >
              Legal
            </h4>
            <ul
              style={{
                margin: 0,
                padding: 0,
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "8px"
              }}
            >
              {[
                { label: "Privacidad y datos personales", href: "/politica-privacidad" },
                { label: "LinkedIn", href: "[[URL_LINKEDIN]]", external: true }
              ].map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    style={{
                      fontSize: "13px",
                      color: "#B0C4D4",
                      textDecoration: "none",
                      transition: "color 200ms"
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "#4FD8D8";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "#B0C4D4";
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div
          style={{
            borderTop: "1px solid rgb(255 255 255 / 0.05)",
            paddingTop: "32px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            alignItems: "center",
            textAlign: "center"
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: "12px",
              color: "rgb(176 196 212 / 0.6)"
            }}
          >
            © 2026 Digital Investment Systems S.A.S. Todos los derechos reservados.
          </p>

        </div>
      </div>
    </footer>
  );
}
