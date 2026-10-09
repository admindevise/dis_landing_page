import React, { useRef, useState } from "react";
import { CONTACT_DETAILS, FIELDS, EMPTY_FORM, FormData, SITE } from "../../constants/content";

export default function Contact() {
  const [form, setForm] = useState<FormData>(EMPTY_FORM);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");
  const [sent, setSent] = useState(false);
  const lastSend = useRef(0);

  const validate = (f: FormData) => {
    const e: Partial<Record<keyof FormData, string>> = {};
    if (f.nombre.trim().length < 3) e.nombre = "Indique su nombre completo.";
    if (f.empresa.trim().length < 2) e.empresa = "Indique el nombre de su empresa.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(f.email.trim())) e.email = "El correo no es válido.";
    if (f.telefono && !/^[+\d\s()-]{7,20}$/.test(f.telefono))
      e.telefono = "Use solo números, espacios o +.";
    if (!f.interes) e.interes = "Seleccione una opción.";
    if (f.mensaje.trim().length < 20) e.mensaje = "El mensaje debe tener al menos 20 caracteres.";
    if (!f.consent) e.consent = "Debe autorizar el tratamiento de datos.";
    return e;
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (sending) return;

    if (form.web) {
      setSent(true);
      return;
    }

    const newErrors = validate(form);
    const n = Object.keys(newErrors).length;

    if (n) {
      setErrors(newErrors);
      setStatus(`Hay ${n} ${n === 1 ? "campo por revisar" : "campos por revisar"}.`);
      return;
    }

    if (lastSend.current && Date.now() - lastSend.current < 30000) {
      setStatus("Espere unos segundos antes de enviar de nuevo.");
      return;
    }
    lastSend.current = Date.now();

    setSending(true);
    setStatus("Enviando…");

    const cleanValue = (value: string) => value.trim().replace(/[<>]/g, "").slice(0, 1000);
    const payload = Object.fromEntries(
      Object.entries(form)
        .filter(([key]) => key !== "web")
        .map(([key, value]) => [key, typeof value === "string" ? cleanValue(value) : value])
    );

    try {
      if (SITE.contactEndpoint.startsWith("http")) {
        const response = await fetch(SITE.contactEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        });
        if (!response.ok) throw new Error("Contact request failed");
      } else {
        await new Promise((resolve) => setTimeout(resolve, 700));
      }
      setSent(true);
      setSending(false);
      setStatus("");
    } catch {
      setSending(false);
      setStatus(`No pudimos enviar su mensaje. Intente de nuevo o escriba a ${CONTACT_DETAILS.email}.`);
    }
  };

  return (
    <section
      id="contacto"
      data-screen-label="16 Contacto"
      style={{
        maxWidth: "1240px",
        margin: "0 auto",
        padding: "96px 24px"
      }}
    >
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))", gap: "48px", alignItems: "start" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: "13px", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#4FD8D8" }}>Contacto</span>
          <h2 style={{ margin: 0, fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: "clamp(32px, 4vw, 48px)", lineHeight: 1.08, letterSpacing: "-0.025em", color: "#fff" }}>
            Cuéntenos sobre su proyecto.
          </h2>
          <p style={{ margin: 0, fontSize: "17px", lineHeight: 1.65, color: "#B0C4D4" }}>
            Un integrante del equipo le responderá en un plazo de {CONTACT_DETAILS.responseTime} días hábiles.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginTop: "8px" }}>
            <a href={`mailto:${CONTACT_DETAILS.email}`} style={{ display: "flex", alignItems: "center", gap: "14px", minHeight: "44px", color: "#fff" }}>
              <span style={{ width: "44px", height: "44px", borderRadius: "12px", display: "grid", placeItems: "center", background: "rgb(2 178 178 / 0.12)", border: "1px solid rgb(79 216 216 / 0.25)" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4FD8D8" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 5h18v14H3zM3 6l9 7 9-7" /></svg>
              </span>
              {CONTACT_DETAILS.email}
            </a>
            <div style={{ display: "flex", alignItems: "center", gap: "14px", color: "#fff" }}>
              <span style={{ width: "44px", height: "44px", flex: "none", borderRadius: "12px", display: "grid", placeItems: "center", background: "rgb(2 178 178 / 0.12)", border: "1px solid rgb(79 216 216 / 0.25)" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4FD8D8" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 22s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12zM12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" /></svg>
              </span>
              {CONTACT_DETAILS.address}
            </div>
          </div>
        </div>
        <div data-glass="" style={{ padding: "clamp(24px, 4vw, 40px)", borderRadius: "24px", background: "linear-gradient(180deg, rgb(255 255 255 / 0.07), rgb(255 255 255 / 0.03))", backdropFilter: "blur(24px) saturate(140%)", border: "1px solid rgb(255 255 255 / 0.12)", boxShadow: "inset 0 1px 0 rgb(255 255 255 / 0.1)" }}>
        {sent ? (
          <div role="status" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "16px", padding: "24px 0" }}>
            <span style={{ width: "56px", height: "56px", borderRadius: "50%", display: "grid", placeItems: "center", background: "rgb(2 178 178 / 0.18)", border: "1px solid rgb(79 216 216 / 0.4)" }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#4FD8D8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m20 6-11 11-5-5" /></svg>
            </span>
            <h3 style={{ margin: 0, fontFamily: "'Space Grotesk', sans-serif", fontSize: "26px", color: "#fff" }}>Recibimos su mensaje.</h3>
            <p style={{ margin: 0, fontSize: "16px", lineHeight: 1.6, color: "#B0C4D4" }}>Gracias por escribirnos. Le contactaremos al correo indicado.</p>
            <button type="button" onClick={() => { setSent(false); setForm(EMPTY_FORM); setErrors({}); setStatus(""); }} style={{ minHeight: "44px", padding: "0 18px", borderRadius: "12px", border: "1px solid rgb(255 255 255 / 0.16)", background: "rgb(255 255 255 / 0.06)", color: "#fff", cursor: "pointer", fontFamily: "'Outfit', sans-serif", fontWeight: 600 }}>Enviar otro mensaje</button>
          </div>
        ) : (
        <form noValidate onSubmit={handleSubmit} aria-describedby="form-status" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))", gap: "18px" }}>
          {FIELDS.map((field) => (
            <div key={field.name}>
              <label
                htmlFor={field.name}
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#fff",
                  fontFamily: "'Outfit', sans-serif"
                }}
              >
                {field.label}
              </label>
              <input
                id={field.name}
                type={field.type}
                name={field.name}
                autoComplete={field.ac}
                maxLength={field.max}
                aria-invalid={Boolean(errors[field.name as keyof FormData])}
                aria-describedby={errors[field.name as keyof FormData] ? `err-${field.name}` : undefined}
                value={form[field.name as keyof FormData] as string}
                onChange={(e) => {
                  setForm({ ...form, [field.name]: e.target.value });
                  setErrors({ ...errors, [field.name]: undefined });
                }}
                style={{
                  width: "100%",
                  minHeight: "48px",
                  padding: "0 14px",
                  borderRadius: "10px",
                  background: "rgb(15 28 39 / 0.6)",
                  border: errors[field.name as keyof FormData]
                    ? "1px solid #ff6b6b"
                    : "1px solid rgb(255 255 255 / 0.1)",
                  color: "#fff",
                  fontSize: "15px",
                  fontFamily: "'Manrope', sans-serif",
                  boxSizing: "border-box"
                }}
              />
              {errors[field.name as keyof FormData] && (
                <p id={`err-${field.name}`} style={{ minHeight: "16px", margin: "4px 0 0", fontSize: "13px", color: "#42C9FF" }}>
                  {errors[field.name as keyof FormData]}
                </p>
              )}
            </div>
          ))}

          <div style={{ gridColumn: "1 / -1", display: "flex", flexDirection: "column", gap: "8px", fontFamily: "'Outfit', sans-serif", fontWeight: 500, fontSize: "14px", color: "#fff" }}>
            <label
              htmlFor="interes"
              style={{
                display: "block",
                marginBottom: "8px",
                fontSize: "14px",
                fontWeight: 600,
                color: "#fff",
                fontFamily: "'Outfit', sans-serif"
              }}
            >
              ¿En cuál de nuestras soluciones está interesado?
            </label>
            <select
              id="interes"
              value={form.interes}
              aria-invalid={Boolean(errors.interes)}
              aria-describedby={errors.interes ? "err-interes" : undefined}
              onChange={(e) => {
                setForm({ ...form, interes: e.target.value });
                setErrors({ ...errors, interes: undefined });
              }}
              style={{
                width: "100%",
                minHeight: "48px",
                padding: "0 14px",
                borderRadius: "10px",
                background: "#192B3B",
                border: errors.interes ? "1px solid #ff6b6b" : "1px solid rgb(255 255 255 / 0.1)",
                color: "#fff",
                fontSize: "15px",
                fontFamily: "'Manrope', sans-serif",
                boxSizing: "border-box"
              }}
            >
              <option value="">Seleccionar...</option>
              <option value="devise-business">Devise Business</option>
              <option value="devise-marketplace">Devise Marketplace</option>
              <option value="valuo">Valuo</option>
              <option value="ai">Transformación con AI</option>
            </select>
            {errors.interes && (
              <p id="err-interes" style={{ minHeight: "16px", margin: "4px 0 0", fontSize: "13px", color: "#42C9FF" }}>{errors.interes}</p>
            )}
          </div>

          <div style={{ gridColumn: "1 / -1", display: "flex", flexDirection: "column", gap: "8px", fontFamily: "'Outfit', sans-serif", fontWeight: 500, fontSize: "14px", color: "#fff" }}>
            <label
              htmlFor="mensaje"
              style={{
                display: "block",
                marginBottom: "8px",
                fontSize: "14px",
                fontWeight: 600,
                color: "#fff",
                fontFamily: "'Outfit', sans-serif"
              }}
            >
              Cuéntanos más (al menos 20 caracteres)
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              maxLength={1000}
              value={form.mensaje}
              aria-invalid={Boolean(errors.mensaje)}
              aria-describedby={errors.mensaje ? "err-mensaje" : undefined}
              onChange={(e) => {
                setForm({ ...form, mensaje: e.target.value });
                setErrors({ ...errors, mensaje: undefined });
              }}
              style={{
                width: "100%",
                padding: "12px 14px",
                borderRadius: "10px",
                background: "rgb(15 28 39 / 0.6)",
                border: errors.mensaje ? "1px solid #ff6b6b" : "1px solid rgb(255 255 255 / 0.1)",
                color: "#fff",
                fontSize: "15px",
                fontFamily: "'Manrope', sans-serif",
                boxSizing: "border-box",
                minHeight: "120px",
                resize: "vertical"
              }}
              placeholder="Cuéntanos sobre tu operación..."
            />
            {errors.mensaje && (
              <p id="err-mensaje" style={{ minHeight: "16px", margin: "4px 0 0", fontSize: "13px", color: "#42C9FF" }}>{errors.mensaje}</p>
            )}
          </div>

          <label
            style={{
              gridColumn: "1 / -1",
              display: "flex",
              alignItems: "flex-start",
              gap: "12px",
              fontSize: "13px",
              lineHeight: 1.6,
              color: "#B0C4D4",
              cursor: "pointer"
            }}
          >
            <input
              type="checkbox"
              aria-invalid={Boolean(errors.consent)}
              aria-describedby={errors.consent ? "err-consent" : undefined}
              checked={form.consent}
              onChange={(e) => {
                setForm({ ...form, consent: e.target.checked });
                setErrors({ ...errors, consent: undefined });
              }}
              style={{
                marginTop: "3px",
                cursor: "pointer"
              }}
            />
            <span>
              Autorizo el tratamiento de mis datos personales conforme a la{" "}
              <a
                href="/politica-privacidad"
                style={{
                  color: "#4FD8D8"
                }}
              >
                Política de Privacidad
              </a>
              .
            </span>
          </label>
          {errors.consent && (
            <p id="err-consent" style={{ gridColumn: "1 / -1", margin: "0", fontSize: "13px", color: "#42C9FF" }}>{errors.consent}</p>
          )}

          {status && (
            <p
              id="form-status"
              role="status"
              style={{
                margin: "12px 0 0",
                fontSize: "13px",
                color: status.includes("Hay") ? "#ff6b6b" : "#4FD8D8"
              }}
            >
              {status}
            </p>
          )}

          <button
            type="submit"
            disabled={sending}
            style={{
              gridColumn: "1 / -1",
              minHeight: "48px",
              padding: "0 22px",
              borderRadius: "12px",
              background: sending ? "rgb(79 216 216 / 0.3)" : "#02B2B2",
              color: "#0F1C27",
              fontSize: "15px",
              fontWeight: 600,
              border: "none",
              cursor: sending ? "not-allowed" : "pointer",
              transition: "background 200ms",
              fontFamily: "'Outfit', sans-serif"
            }}
            onMouseEnter={(e) => {
              if (!sending) {
                (e.currentTarget as HTMLElement).style.background = "#4FD8D8";
              }
            }}
            onMouseLeave={(e) => {
              if (!sending) {
                (e.currentTarget as HTMLElement).style.background = "#02B2B2";
              }
            }}
          >
            {sending ? "Enviando…" : "Enviar mensaje"}
          </button>

          {/* Honeypot */}
          <input
            type="text"
            name="web"
            value={form.web}
            onChange={(e) => setForm({ ...form, web: e.target.value })}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px", opacity: 0 }}
          />
        </form>
        )}
        </div>
      </div>
    </section>
  );
}
