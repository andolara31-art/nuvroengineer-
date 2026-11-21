import { useEffect, useRef, useState, type FormEvent } from "react";
import TornEdge from "./TornEdge";
import {
  ArrowUpRight,
  Bot,
  Check,
  Clapperboard,
  LayoutTemplate,
  Lightbulb,
  Link2,
  Package,
  QrCode,
  ShoppingBag,
  Star,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import {
  BUSINESS_WHATSAPP_DISPLAY,
  SERVICE_OPTIONS,
  whatsappUrl,
} from "../../lib/site";
import { trackEvent } from "../../lib/analytics";
import { commercialPackages } from "../../content/packages";
import "./contact-links.css";
import "./contact-form.css";

const SERVICE_ICONS: Record<string, LucideIcon> = {
  "diseno-web": LayoutTemplate,
  automatizaciones: Workflow,
  "menu-qr": QrCode,
  "resenas-google": Star,
  "tienda-online": ShoppingBag,
  "contenido-publicitario": Clapperboard,
  "presencia-digital": Link2,
  paquetes: Package,
  ia: Bot,
  otro: Lightbulb,
};

/* Ideas para empezar el mensaje (solo completan el campo; se pueden editar) */
const IDEAS = [
  "Quiero que me encuentren y entiendan qué ofrezco.",
  "Me escriben mucho por WhatsApp y quiero ordenarlo.",
  "Quiero vender mis productos en línea.",
  "Quiero mostrar mejor mi negocio en redes.",
];

export default function SiteContact() {
  const [messageUrl, setMessageUrl] = useState("");
  const [service, setService] = useState("");
  const [selectedPackage, setSelectedPackage] = useState("");
  const readyLink = useRef<HTMLAnchorElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const [length, setLength] = useState(0);

  function addIdea(idea: string) {
    const field = messageRef.current;
    if (!field) return;
    field.value = field.value.trim() ? `${field.value.trim()} ${idea}` : idea;
    field.setCustomValidity("");
    setLength(field.value.length);
    setMessageUrl("");
    field.focus();
  }

  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get(
      "servicio",
    );
    const aliases: Record<string, string> = {
      "diseno-web-costa-rica": "diseno-web",
      "automatizaciones-negocios": "automatizaciones",
      "menu-qr-restaurantes": "menu-qr",
      "resenas-google-qr-nfc": "resenas-google",
      "tiendas-online-shopify": "tienda-online",
      "videos-publicidad-negocios": "contenido-publicitario",
      paquete: "paquetes",
      "ia-para-negocios": "ia",
    };
    const selection = requested ? aliases[requested] || requested : "";
    if (SERVICE_OPTIONS.some((option) => option.value === selection))
      setService(selection);
    const packageId = new URLSearchParams(window.location.search).get(
      "paquete",
    );
    const matchedPackage = commercialPackages.find(
      (item) => item.id === packageId,
    );
    if (selection === "paquetes" && matchedPackage)
      setSelectedPackage(matchedPackage.name);
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
      selectedService?.value === "paquetes" && selectedPackage
        ? "Paquete: " + selectedPackage
        : "",
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
    <section
      className="contact corp-contact"
      id="contacto"
      aria-labelledby="contact-title"
    >
      <TornEdge fill="#ECECE8" seed={43} />
      <div className="shell">
        <div className="contact-inner corp-contact-grid">
          <div className="corp-contact-intro">
            <p className="eyebrow">
              <span aria-hidden="true" />
              El siguiente paso
            </p>
            <h2 id="contact-title">Contanos qué necesita tu negocio.</h2>
            <p className="contact-description">
              Qué ofrecés, cómo trabajás y qué te gustaría mejorar. Empezamos
              por entender eso.
            </p>
            <div className="corp-contact-process">
              <p>Antes de empezar</p>
              <p>
                Acordamos qué vamos a resolver, qué incluye el trabajo y cuánto
                cuesta.
              </p>
              <a className="underlink" href="/politicas-de-servicio">
                Conocé las políticas de servicio
              </a>
            </div>
            <div className="corp-contact-direct-block">
              <a
                className="button white contact-direct"
                href={whatsappUrl(
                  "Hola NUVRO, quiero orientación para mejorar la presencia digital de mi negocio.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                data-analytics-location="contact-direct"
              >
                Escribir por WhatsApp <ArrowUpRight aria-hidden="true" />
              </a>
              <a
                className="underlink contact-number"
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
              >
                {BUSINESS_WHATSAPP_DISPLAY}
              </a>
              <ul className="corp-contact-hours">
                <li>La primera conversación no tiene costo.</li>
                <li>Por WhatsApp te respondemos todo el día.</li>
                <li>Visitas y reuniones en persona: de jueves a sábado.</li>
              </ul>
              <p className="corp-contact-location">
                Desde Palmares, para todo Costa Rica
              </p>
            </div>
          </div>
          <form
            className="contactform corp-contact-form"
            method="post"
            onSubmit={prepareMessage}
            onChange={() => setMessageUrl("")}
          >
            <div className="corp-contact-form-heading">
              <h3>Prepará tu consulta.</h3>
              <p>Podés usar este formulario o escribirnos directamente.</p>
            </div>
            <fieldset className="nf-step nf-services">
              <legend>
                <span className="nf-step-number" aria-hidden="true">
                  1
                </span>
                ¿En qué te podemos ayudar?{" "}
                <span className="nf-optional">(opcional)</span>
              </legend>
              <div className="nf-service-grid">
                {SERVICE_OPTIONS.map((option) => {
                  const Icon = SERVICE_ICONS[option.value] || Lightbulb;
                  const checked = service === option.value;
                  return (
                    <label
                      key={option.value}
                      className={`nf-service${checked ? " is-checked" : ""}`}
                    >
                      <input
                        type="radio"
                        name="service"
                        value={option.value}
                        checked={checked}
                        onChange={() => setService(option.value)}
                        onClick={() => {
                          // Tocar de nuevo la opción elegida la deselecciona.
                          if (checked) setService("");
                        }}
                      />
                      <span className="nf-service-icon" aria-hidden="true">
                        <Icon size={20} strokeWidth={2.2} />
                      </span>
                      <span className="nf-service-name">{option.label}</span>
                      <span className="nf-service-check" aria-hidden="true">
                        <Check size={14} strokeWidth={3} />
                      </span>
                    </label>
                  );
                })}
              </div>
            </fieldset>
            {service === "paquetes" && selectedPackage && (
              <p className="contact-form-note">
                Paquete de interés: <strong>{selectedPackage}</strong>.{" "}
                <a href="#paquetes">Volver a ver los paquetes</a>.
              </p>
            )}
            <div className="nf-step nf-about">
              <p className="nf-step-title" aria-hidden="true">
                <span className="nf-step-number">2</span>
                Sobre vos <span className="nf-optional">(opcional)</span>
              </p>
              <div className="corp-contact-field-pair">
                <div>
                  <label htmlFor="nuvro-business">Tu negocio (opcional)</label>
                  <input
                    id="nuvro-business"
                    name="business"
                    autoComplete="organization"
                    maxLength={120}
                    placeholder="Nombre del negocio"
                  />
                </div>
                <div>
                  <label htmlFor="nuvro-email">Tu correo (opcional)</label>
                  <input
                    id="nuvro-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    maxLength={254}
                    placeholder="tu@correo.com"
                  />
                </div>
              </div>
            </div>
            <div className="nf-step nf-message">
              <label htmlFor="nuvro-message" className="nf-step-title">
                <span className="nf-step-number" aria-hidden="true">
                  3
                </span>
                ¿Qué querés mejorar?
              </label>
              <div
                className="nf-ideas"
                role="group"
                aria-label="Ideas para empezar tu mensaje"
              >
                {IDEAS.map((idea) => (
                  <button
                    key={idea}
                    type="button"
                    className="nf-idea"
                    onClick={() => addIdea(idea)}
                  >
                    + {idea}
                  </button>
                ))}
              </div>
              <textarea
                id="nuvro-message"
                name="message"
                required
                minLength={5}
                maxLength={1800}
                rows={5}
                ref={messageRef}
                aria-describedby="nuvro-message-count"
                onInput={(event) => {
                  event.currentTarget.setCustomValidity("");
                  setLength(event.currentTarget.value.length);
                }}
                placeholder="Tengo un restaurante y quiero ordenar el menú y las consultas…"
              />
              <p className="nf-count" id="nuvro-message-count">
                {length < 5
                  ? "Escribí al menos 5 caracteres."
                  : `${length} / 1800 caracteres`}
              </p>
            </div>
            <p className="contact-form-note">
              Este formulario prepara tu mensaje. Lo revisás y enviás desde
              WhatsApp; todavía no se envía ninguna solicitud.{" "}
              <a href="/politicas-de-servicio">
                Conocé las condiciones del servicio
              </a>
              .
            </p>
            <button className="button" type="submit">
              Preparar mi consulta <ArrowUpRight aria-hidden="true" />
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
                  Continuar en WhatsApp <ArrowUpRight aria-hidden="true" />
                </a>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
