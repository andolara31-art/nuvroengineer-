import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  BUSINESS_WHATSAPP_DISPLAY,
  SERVICE_OPTIONS,
  whatsappUrl,
} from "../../lib/site";
import { trackEvent } from "../../lib/analytics";
import "./contact-links.css";

export default function SiteContact() {
  const [messageUrl, setMessageUrl] = useState("");
  const [service, setService] = useState("");
  const readyLink = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get(
      "servicio",
    );
    const aliases: Record<string, string> = {
      "diseno-web-costa-rica": "diseno-web",
      "automatizaciones-negocios": "automatizaciones",
      "menu-qr-restaurantes": "menu-qr",
      "ia-para-negocios": "ia",
    };
    const selection = requested ? aliases[requested] || requested : "";
    if (SERVICE_OPTIONS.some((option) => option.value === selection))
      setService(selection);
  }, []);

  useEffect(() => {
    if (messageUrl) readyLink.current?.focus();
  }, [messageUrl]);

  function prepareMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const fields = new FormData(event.currentTarget);
    const email = String(fields.get("email") ?? "").trim();
    const business = String(fields.get("business") ?? "").trim();
    const body = String(fields.get("message") ?? "").trim();
    const messageField = event.currentTarget.elements.namedItem(
      "message",
    ) as HTMLTextAreaElement;
    if (body.length < 5) {
      messageField.setCustomValidity(
        "Contanos tu consulta con al menos 5 caracteres.",
      );
      messageField.reportValidity();
      return;
    }
    messageField.setCustomValidity("");
    const selectedService = SERVICE_OPTIONS.find(
      (option) => option.value === service,
    );
    const message = [
      "Hola NUVRO ENGINEER, me gustaría conversar sobre mi negocio.",
      selectedService ? "Me interesa: " + selectedService.label : "",
      business ? "Mi negocio: " + business : "",
      "",
      body,
      "",
      email ? "Mi correo: " + email : "",
    ]
      .filter(Boolean)
      .join("\n\n");
    setMessageUrl(whatsappUrl(message));
    trackEvent("contact_message_prepared", {
      service: selectedService?.value || "unspecified",
      location: "contact",
    });
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
            conversación que tenga sentido. Podés escribirnos directamente por
            WhatsApp o preparar una consulta con el formulario.
          </p>
          <a
            className="button white contact-direct"
            href={whatsappUrl(
              "Hola NUVRO, quiero orientación para mejorar la presencia digital de mi negocio.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            data-analytics-location="contact-direct"
          >
            Escribir por WhatsApp <span aria-hidden="true">↗</span>
          </a>
          <a
            className="underlink contact-number"
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
          >
            {BUSINESS_WHATSAPP_DISPLAY} <span aria-hidden="true">↗</span>
          </a>
        </div>
        <form
          className="contactform"
          method="post"
          onSubmit={prepareMessage}
          onChange={() => setMessageUrl("")}
        >
          <label htmlFor="nuvro-service">¿En qué te podemos ayudar?</label>
          <select
            id="nuvro-service"
            name="service"
            value={service}
            onChange={(event) => setService(event.target.value)}
          >
            <option value="">Elegí un servicio (opcional)</option>
            {SERVICE_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <label htmlFor="nuvro-business">
            Nombre de tu negocio (opcional)
          </label>
          <input
            id="nuvro-business"
            name="business"
            autoComplete="organization"
            maxLength={120}
            placeholder="¿Cómo se llama tu negocio?"
          />
          <label htmlFor="nuvro-email">Tu correo electrónico (opcional)</label>
          <input
            id="nuvro-email"
            name="email"
            type="email"
            autoComplete="email"
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
            onInput={(event) => event.currentTarget.setCustomValidity("")}
            placeholder="Tengo un restaurante y quiero ordenar el menú y las consultas…"
          />
          <p className="contact-form-note">
            El formulario prepara el mensaje en este dispositivo. Revisalo y
            envialo desde WhatsApp; todavía no se envía ninguna solicitud.
          </p>
          <button className="button" type="submit">
            Preparar mensaje <span aria-hidden="true">↗</span>
          </button>
          {messageUrl && (
            <div className="contact-ready" role="status">
              <p>
                Tu mensaje está listo. Continuá a WhatsApp para revisarlo y
                enviarlo.
              </p>
              <a
                className="button white"
                ref={readyLink}
                data-analytics-location="contact-prepared"
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
