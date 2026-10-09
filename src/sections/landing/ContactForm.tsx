import { useRef, useState, type FormEvent } from "react";
import { CONTACT_DETAILS, EMPTY_FORM, FIELDS, SITE, type FormData } from "../../constants/content";

type Errors = Partial<Record<keyof FormData, string>>;

const INTERESTS = [
  ["diagnostico", "Diagnóstico de un reto operativo"],
  ["devise-business", "Devise Business"],
  ["devise-marketplace", "Devise Marketplace"],
  ["valuo", "Valuo"],
  ["ai", "Transformación tecnológica"],
  ["otro", "Otro / por definir"]
];

function validate(form: FormData) {
  const errors: Errors = {};
  if (form.nombre.trim().length < 3) errors.nombre = "Indique su nombre completo.";
  if (form.empresa.trim().length < 2) errors.empresa = "Indique el nombre de su empresa.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim())) errors.email = "Ingrese un correo electrónico válido.";
  if (form.telefono && !/^[+\d\s()-]{7,20}$/.test(form.telefono)) errors.telefono = "Ingrese un número telefónico válido.";
  if (!form.interes) errors.interes = "Seleccione una opción.";
  if (form.mensaje.trim().length < 20) errors.mensaje = "El mensaje debe tener al menos 20 caracteres.";
  if (!form.consent) errors.consent = "Para continuar, debe autorizar el tratamiento de sus datos personales.";
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
      setStatus("Espere unos segundos antes de enviar de nuevo.");
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
      setStatus(`No pudimos enviar su mensaje. Intente de nuevo o escriba a ${CONTACT_DETAILS.email}.`);
    }
  };

  if (sent) {
    return (
      <div role="status" className="lp-form__done">
        <span className="lp-form__check" aria-hidden="true">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m20 6-11 11-5-5" /></svg>
        </span>
        <h3>Su mensaje ha sido recibido.</h3>
        <p>Gracias por contactarnos. Un integrante de nuestro equipo le responderá al correo indicado.</p>
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
          <option value="">Seleccione una opción</option>
          {INTERESTS.map(([value, label]) => <option key={value} value={value}>{label}</option>)}
        </select>
        {errors.interes && <p id="err-interes" className="lp-field__error">{errors.interes}</p>}
      </div>

      <div className="lp-field lp-field--full">
        <label htmlFor="mensaje">Mensaje (mínimo 20 caracteres)</label>
        <textarea
          id="mensaje"
          name="mensaje"
          maxLength={1000}
          value={form.mensaje}
          aria-invalid={Boolean(errors.mensaje)}
          aria-describedby={errors.mensaje ? "err-mensaje" : undefined}
          onChange={(event) => update("mensaje", event.target.value)}
          placeholder="Describa brevemente el reto que desea resolver."
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
