import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { NAV, SITE } from "../../constants/content";

interface HeaderProps {
  headerPad: string;
  wide: boolean;
  menuOpen: boolean;
  activeSection: string;
  setMenuOpen: (open: boolean) => void;
}

export default function Header({ headerPad, wide, menuOpen, activeSection, setMenuOpen }: HeaderProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menuOpen || !menuRef.current) return;
    const focusable = menuRef.current.querySelectorAll<HTMLElement>("a, button");
    focusable[0]?.focus();

    const trapFocus = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        return;
      }
      if (event.key !== "Tab" || focusable.length === 0) return;
      if (event.shiftKey && document.activeElement === focusable[0]) {
        event.preventDefault();
        focusable[focusable.length - 1].focus();
      } else if (!event.shiftKey && document.activeElement === focusable[focusable.length - 1]) {
        event.preventDefault();
        focusable[0].focus();
      }
    };

    document.addEventListener("keydown", trapFocus);
    return () => document.removeEventListener("keydown", trapFocus);
  }, [menuOpen, setMenuOpen]);

  return (
    <>
      <header
        className="dis-large-header"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          padding: headerPad,
          transition: "padding 300ms cubic-bezier(0.16,1,0.3,1)"
        }}
      >
        <div
          data-glass=""
          className="dis-large-header-inner"
          style={{
            maxWidth: "1240px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "24px",
            padding: "10px 12px 10px 20px",
            borderRadius: "18px",
            background: "rgb(15 28 39 / 0.55)",
            backdropFilter: "blur(20px) saturate(140%)",
            WebkitBackdropFilter: "blur(20px) saturate(140%)",
            border: "1px solid rgb(255 255 255 / 0.1)",
            boxShadow: "inset 0 1px 0 rgb(255 255 255 / 0.08), 0 16px 40px -20px rgb(0 0 0 / 0.7)"
          }}
        >
          <Link
            to="/"
            aria-label="disHub, ir al inicio"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              color: "#fff",
              minHeight: "44px",
              textDecoration: "none",
              fontWeight: 700,
              fontSize: "20px",
              fontFamily: "'Space Grotesk', sans-serif"
            }}
          >
            <img src="/DIS.svg" alt="" width="110" height="37" style={{ display: "block", objectFit: "contain" }} />
          </Link>

          {wide && (
            <nav
              style={{
                display: "flex",
                gap: "8px",
                alignItems: "center"
              }}
            >
              {NAV.map(([id, label]) => (
                <Link
                  key={id}
                  to={`/${id}`}
                  aria-current={activeSection === id ? "location" : undefined}
                  style={{
                    position: "relative",
                    color: activeSection === id ? "#fff" : "#B0C4D4",
                    padding: "12px 14px",
                    fontSize: "15px",
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 500,
                    transition: "color 200ms",
                    textDecoration: "none"
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#B0C4D4";
                  }}
                >
                  {label}
                  <span style={{ position: "absolute", left: "14px", right: "14px", bottom: "6px", height: "2px", borderRadius: "2px", background: "#02B2B2", opacity: activeSection === id ? 1 : 0, transition: "opacity 200ms" }} />
                </Link>
              ))}
            </nav>
          )}

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px"
            }}
          >
            <a
              href={SITE.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                gap: "8px",
                padding: "0 18px",
                borderRadius: "12px",
                background: "#02B2B2",
                color: "#0F1C27",
                fontSize: "15px",
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 600,
                textDecoration: "none",
                minHeight: "44px",
                display: "flex",
                alignItems: "center",
                transition: "background 200ms",
                boxShadow: "inset 0 1px 0 rgb(255 255 255 / 0.3)"
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#4FD8D8";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#02B2B2";
              }}
            >
              Agendar una reunión
            </a>

            {!wide && (
              <button
                type="button"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Abrir menú"
                aria-expanded={menuOpen}
                aria-controls="menu-movil"
                style={{
                  background: "rgb(255 255 255 / 0.06)",
                  border: "1px solid rgb(255 255 255 / 0.16)",
                  borderRadius: "12px",
                  color: "#fff",
                  cursor: "pointer",
                  width: "44px",
                  height: "44px",
                  display: "grid",
                  placeItems: "center"
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <line x1="3" y1="6" x2="21" y2="6" strokeWidth="2" />
                  <line x1="3" y1="12" x2="21" y2="12" strokeWidth="2" />
                  <line x1="3" y1="18" x2="21" y2="18" strokeWidth="2" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          ref={menuRef}
          id="menu-movil"
          role="dialog"
          aria-modal="true"
          aria-label="Menú"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 90,
            background: "rgb(15 28 39 / 0.92)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            padding: "24px",
            display: "flex",
            flexDirection: "column",
            gap: "8px"
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginBottom: "24px"
            }}
          >
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Cerrar menú"
              style={{
                background: "rgb(255 255 255 / 0.06)",
                border: "1px solid rgb(255 255 255 / 0.16)",
                borderRadius: "12px",
                color: "#fff",
                cursor: "pointer",
                width: "44px",
                height: "44px",
                display: "grid",
                placeItems: "center"
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <line x1="18" y1="6" x2="6" y2="18" strokeWidth="2" />
                <line x1="6" y1="6" x2="18" y2="18" strokeWidth="2" />
              </svg>
            </button>
          </div>

          {NAV.map(([id, label]) => (
            <Link
              key={id}
              to={`/${id}`}
              onClick={() => setMenuOpen(false)}
              style={{
                color: "#fff",
                padding: "16px 8px",
                fontSize: "28px",
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 500,
                borderBottom: "1px solid rgb(255 255 255 / 0.08)"
              }}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
