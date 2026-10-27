import { useRef, useState, type FormEvent } from "react";
import { CONTACT_DETAILS, EMPTY_FORM, FIELDS, SITE, type FormData } from "../../constants/content";

type Errors = Partial<Record<keyof FormData, string>>;

const INTERESTS = [
  ["brickflow", "Diagnóstico y Arquitectura a la Medida (BrickFlow)"],
  ["devise-trust", "Devise Trust — Control y auditoría con IA para vehículos de inversión"],
  ["devise-marketplace", "Devise Marketplace — Distribución B2B2C y canales de liquidez"],
  ["devise-pulse", "Devise Pulse — Agente CFO y ejecución operativa vía WhatsApp"],
  ["devise-tokenize", "Devise Tokenize — Tokenización de activos y fondos"],
  ["valuo", "Valuo — Valoración e inteligencia inmobiliaria"],
  ["otro", "Otro reto operativo"]
];

function validate(form: FormData) {
  const errors: Errors = {};
  if (form.nombre.trim().length < 3) errors.nombre = "Escribe tu nombre completo.";
  if (form.empresa.trim().length < 2) errors.empresa = "Escribe el nombre de tu empresa.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim())) errors.email = "Escribe un correo electrónico válido.";
  if (form.telefono && !/^[+\d\s()-]{7,20}$/.test(form.telefono)) errors.telefono = "Escribe un número telefónico válido.";
  if (!form.interes) errors.interes = "Selecciona una opción.";
  if (form.mensaje.trim().length < 20) errors.mensaje = "Cuéntanos un poco más: el mensaje debe tener al menos 20 caracteres.";
  if (!form.consent) errors.consent = "Para continuar, autoriza el tratamiento de tus datos personales.";
  return errors;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(EMPTY_FORM);
  const [errors, setErrors] = useState<Errors>({});
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");
  const [sent, setSent] = useState(false);
  const lastSend = useRef(0);

  const update = <K extends keyof FormData>(key: K, value: FormData[K]) => {
    setForm({ ...form, [key]: value });
    setErrors({ ...errors, [key]: undefined });
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (sending) return;

    if (form.web) {
      setSent(true);
      return;
    }

    const nextErrors = validate(form);
    const count = Object.keys(nextErrors).length;
    if (count) {
      setErrors(nextErrors);
      setStatus(`Hay ${count} ${count === 1 ? "campo por revisar" : "campos por revisar"}.`);
      return;
    }

    if (lastSend.current && Date.now() - lastSend.current < 30000) {
      setStatus("Espera unos segundos antes de enviar de nuevo.");
      return;
    }
    lastSend.current = Date.now();
    setSending(true);
    setStatus("Enviando…");

    const clean = (value: string) => value.trim().replace(/[<>]/g, "").slice(0, 1000);
    const payload = Object.fromEntries(
      Object.entries(form)
        .filter(([key]) => key !== "web")
        .map(([key, value]) => [key, typeof value === "string" ? clean(value) : value])
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
      setStatus(`No pudimos enviar tu mensaje. Intenta de nuevo o escríbenos a ${CONTACT_DETAILS.email}.`);
    }
  };

  if (sent) {
    return (
      <div role="status" className="lp-form__done">
        <span className="lp-form__check" aria-hidden="true">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m20 6-11 11-5-5" /></svg>
        </span>
        <h3>Recibimos tu mensaje.</h3>
        <p>Gracias por contactarnos. Nuestro equipo te responderá al correo indicado en menos de 24 horas.</p>
        <button
          type="button"
          className="lp-btn lp-btn--ghost"
          onClick={() => {
            setSent(false);
            setForm(EMPTY_FORM);
            setErrors({});
            setStatus("");
          }}
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={handleSubmit} aria-describedby="form-status" className="lp-form">
      {FIELDS.map((field) => {
        const name = field.name as keyof FormData;
        const error = errors[name];
        return (
          <div key={field.name} className="lp-field">
            <label htmlFor={field.name}>{field.label}</label>
            <input
              id={field.name}
              type={field.type}
              name={field.name}
              autoComplete={field.ac}
              maxLength={field.max}
              aria-invalid={Boolean(error)}
              aria-describedby={error ? `err-${field.name}` : undefined}
              value={form[name] as string}
              onChange={(event) => update(name, event.target.value)}
            />
            {error && <p id={`err-${field.name}`} className="lp-field__error">{error}</p>}
          </div>
        );
      })}

      <div className="lp-field lp-field--full">
        <label htmlFor="interes">Área de interés</label>
        <select
          id="interes"
          value={form.interes}
          aria-invalid={Boolean(errors.interes)}
          aria-describedby={errors.interes ? "err-interes" : undefined}
          onChange={(event) => update("interes", event.target.value)}
        >
          <option value="">Selecciona una opción</option>
          {INTERESTS.map(([value, label]) => <option key={value} value={value}>{label}</option>)}
        </select>
        {errors.interes && <p id="err-interes" className="lp-field__error">{errors.interes}</p>}
      </div>

      <div className="lp-field lp-field--full">
        <label htmlFor="mensaje">Mensaje</label>
        <textarea
          id="mensaje"
          name="mensaje"
          maxLength={1000}
          value={form.mensaje}
          aria-invalid={Boolean(errors.mensaje)}
          aria-describedby={errors.mensaje ? "err-mensaje" : undefined}
          onChange={(event) => update("mensaje", event.target.value)}
          placeholder="Describe brevemente el proceso, cuello de botella o reto que quieres resolver."
        />
        {errors.mensaje && <p id="err-mensaje" className="lp-field__error">{errors.mensaje}</p>}
      </div>

      <label className="lp-check">
        <input
          type="checkbox"
          aria-invalid={Boolean(errors.consent)}
          aria-describedby={errors.consent ? "err-consent" : undefined}
          checked={form.consent}
          onChange={(event) => update("consent", event.target.checked)}
        />
        <span>
          Autorizo el tratamiento de mis datos personales conforme a la <a href="/politica-privacidad">Política de privacidad y tratamiento de datos personales</a> y a la Ley 1581 de 2012.
        </span>
      </label>
      {errors.consent && <p id="err-consent" className="lp-field__error lp-field--full">{errors.consent}</p>}

      {status && (
        <p id="form-status" role="status" className={status.startsWith("Hay") ? "lp-form__status is-error" : "lp-form__status"}>
          {status}
        </p>
      )}

      <button type="submit" disabled={sending} className="lp-btn lp-btn--primary lp-form__submit">
        {sending ? "Enviando…" : "Enviar mensaje"}
      </button>

      <input
        type="text"
        name="web"
        value={form.web}
        onChange={(event) => setForm({ ...form, web: event.target.value })}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="lp-form__honeypot"
      />
    </form>
  );
}
