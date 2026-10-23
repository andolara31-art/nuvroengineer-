import { useState, type FormEvent } from "react";
import "./contact-links.css";

const businessWhatsApp = "50671757171";

export default function SiteContact() {
  const [messageUrl, setMessageUrl] = useState("");

  function prepareMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const fields = new FormData(event.currentTarget);
    const email = String(fields.get("email") ?? "").trim();
    const body = String(fields.get("message") ?? "").trim();
    if (!body) return;
    const message = [
      "Hola NUVRO ENGINEER, me gustaría conversar sobre mi negocio.",
      "",
      body,
      "",
      "Mi correo: " + email,
    ].join("\n");
    setMessageUrl(
      "https://wa.me/" +
        businessWhatsApp +
        "?text=" +
        encodeURIComponent(message),
    );
  }

  return (
    <section className="contact" id="contacto" aria-labelledby="contact-title">
      <div className="shell contact-inner">
        <div>
          <p className="eyebrow">
            <span aria-hidden="true" />
            07 / Hablemos de tu negocio
          </p>
          <h2 id="contact-title">
            ¿Qué parte de tu negocio podría funcionar mejor?
          </h2>
          <p className="contact-description">
            Contanos qué hacés y qué querés resolver. Empecemos por una
            conversación que tenga sentido.
          </p>
          <a
            className="underlink"
            href={"https://wa.me/" + businessWhatsApp}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp: +506 7175 7171 <span aria-hidden="true">↗</span>
          </a>
        </div>
        <form
          className="contactform"
          onSubmit={prepareMessage}
          onChange={() => setMessageUrl("")}
        >
          <label htmlFor="nuvro-email">Tu correo electrónico</label>
          <input
            id="nuvro-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={254}
            placeholder="tu@correo.com"
          />
          <label htmlFor="nuvro-message">
            Tu negocio y lo que querés mejorar
          </label>
          <textarea
            id="nuvro-message"
            name="message"
            required
            minLength={5}
            maxLength={1800}
            rows={4}
            placeholder="Tengo un restaurante y quiero ordenar el menú y las consultas…"
          />
          <p className="contact-form-note">
            Prepará tu consulta y revisala en WhatsApp antes de enviarla.
          </p>
          <button className="button" type="submit">
            Preparar mensaje <span aria-hidden="true">↗</span>
          </button>
          {messageUrl && (
            <div className="contact-ready" role="status">
              <p>
                Tu mensaje está listo. Abrí WhatsApp para revisarlo y enviarlo.
              </p>
              <a
                className="button white"
                href={messageUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Continuar en WhatsApp <span aria-hidden="true">↗</span>
              </a>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
