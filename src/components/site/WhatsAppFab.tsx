import { useEffect, useRef, useState } from "react";
import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "../../lib/site";

/*
  Botón fijo de WhatsApp, solo en pantallas chicas (ver brand.css).
  Se muestra al pasar la portada y se esconde cuando:
  - ya hay otro botón o enlace de WhatsApp a la vista,
  - se ven Contacto o el pie,
  - debajo del botón hay un botón, un enlace, una tarjeta o cualquier texto.
  El mensaje cambia según la sección de la portada o la página de servicio.
*/
const DEFAULT_MESSAGE = "Hola NUVRO, quiero conversar sobre mi negocio.";

const sectionMessages: Record<string, string> = {
  trabajos: "Hola NUVRO, vi sus trabajos y quiero algo así para mi negocio.",
  "que-necesito":
    "Hola NUVRO, quiero que me orienten sobre qué necesita mi negocio.",
  proceso: "Hola NUVRO, quiero saber cómo empezar un proyecto con ustedes.",
  paquetes: "Hola NUVRO, quiero información sobre los paquetes.",
  preguntas: "Hola NUVRO, tengo una pregunta sobre sus servicios.",
};

const pageMessages: Record<string, string> = {
  "/diseno-web-costa-rica":
    "Hola NUVRO, quiero una página web para mi negocio.",
  "/automatizaciones-negocios":
    "Hola NUVRO, quiero automatizar respuestas o tareas de mi negocio.",
  "/menu-qr-restaurantes": "Hola NUVRO, quiero un menú QR para mi negocio.",
  "/resenas-google-qr-nfc":
    "Hola NUVRO, quiero una base QR o NFC para reseñas de Google.",
  "/tiendas-online-shopify":
    "Hola NUVRO, quiero una tienda en línea para mi negocio.",
  "/videos-publicidad-negocios":
    "Hola NUVRO, quiero un video con IA para mi negocio.",
  "/ia-para-negocios": "Hola NUVRO, quiero saber cómo usar IA en mi negocio.",
};

/* Lo que el botón nunca debe tapar */
const BLOCKERS = [
  "a",
  "button",
  "summary",
  "input",
  "select",
  "textarea",
  "label",
  "[role='tab']",
  ".work-card",
  ".ai-use",
  ".commercial-package",
  ".brand-how-step",
  ".comic-panel",
  ".need-card",
  ".brand-example",
  ".nuvro-demo-card",
  ".corp-solution-row",
  ".learn-card",
  ".video-io-box",
  ".video-type",
  ".meet-bubble",
  ".corp-faq-list details",
  ".service-deliverables li",
  ".service-steps li",
].join(",");

const SIZE = 56;
const EDGE = 16;
const MARGIN = 8;

/* ¿El elemento muestra texto propio (no solo fondo de una sección)? */
function hasOwnText(element: Element): boolean {
  if (element instanceof SVGElement || element instanceof HTMLImageElement)
    return true;
  for (const node of element.childNodes)
    if (node.nodeType === Node.TEXT_NODE && node.textContent?.trim())
      return true;
  return false;
}

function covering(fab: HTMLElement): boolean {
  const right = window.innerWidth - EDGE + MARGIN;
  const bottom = window.innerHeight - EDGE + MARGIN;
  const left = right - SIZE - MARGIN * 2;
  const top = bottom - SIZE - MARGIN * 2;
  // Cada 9 px: ningún renglón de texto (12 px o más) queda entre dos puntos.
  const steps = [0, 0.125, 0.25, 0.375, 0.5, 0.625, 0.75, 0.875, 1];
  for (const fx of steps)
    for (const fy of steps) {
      const x = Math.min(left + (right - left) * fx, window.innerWidth - 1);
      const y = Math.min(top + (bottom - top) * fy, window.innerHeight - 1);
      for (const element of document.elementsFromPoint(x, y)) {
        if (fab.contains(element)) continue;
        if (element.closest(BLOCKERS) || hasOwnText(element)) return true;
        break; // solo importa lo primero que hay debajo del botón
      }
    }
  return false;
}

function otherWhatsAppVisible(fab: HTMLElement): boolean {
  const height = window.innerHeight;
  for (const link of document.querySelectorAll<HTMLAnchorElement>(
    'a[href*="wa.me/"]',
  )) {
    if (link === fab) continue;
    const rect = link.getBoundingClientRect();
    if (!rect.width || !rect.height) continue;
    if (rect.bottom > 0 && rect.top < height) return true;
  }
  return false;
}

export default function WhatsAppFab({ page = "/" }: { page?: string }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [visible, setVisible] = useState(false);
  const [section, setSection] = useState("");

  useEffect(() => {
    const fab = ref.current;
    if (!fab) return;
    const small = window.matchMedia("(max-width: 900px)");
    let frame = 0;

    const hero = document.querySelector<HTMLElement>(
      ".craft-hero, main > section",
    );
    const ends = [
      ...document.querySelectorAll<HTMLElement>("#contacto, .corp-footer"),
    ];
    const inView = (element: HTMLElement | null) => {
      if (!element) return false;
      const rect = element.getBoundingClientRect();
      return rect.bottom > 0 && rect.top < window.innerHeight;
    };

    const update = () => {
      frame = 0;
      if (!small.matches) return setVisible(false);
      const blocked =
        inView(hero) ||
        ends.some(inView) ||
        otherWhatsAppVisible(fab) ||
        covering(fab);
      setVisible(!blocked);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    // Sección "actual": la que cruza la mitad de la pantalla.
    const middle = new IntersectionObserver(
      (entries) => {
        for (const entry of entries)
          if (entry.isIntersecting) setSection(entry.target.id);
      },
      { rootMargin: "-50% 0px -50% 0px" },
    );
    Object.keys(sectionMessages)
      .map((id) => document.getElementById(id))
      .forEach((element) => element && middle.observe(element));

    // Nada de cálculos durante la carga: se empieza cuando la página terminó.
    const start = () => {
      window.addEventListener("scroll", schedule, { passive: true });
      window.addEventListener("resize", schedule);
      document.addEventListener("click", schedule);
      small.addEventListener?.("change", schedule);
      schedule();
    };
    if (document.readyState === "complete") start();
    else window.addEventListener("load", start, { once: true });
    return () => {
      window.removeEventListener("load", start);
      cancelAnimationFrame(frame);
      middle.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      document.removeEventListener("click", schedule);
      small.removeEventListener?.("change", schedule);
    };
  }, []);

  const message =
    pageMessages[page] || sectionMessages[section] || DEFAULT_MESSAGE;

  return (
    <aside className="wa-fab-region" aria-label="Contacto por WhatsApp">
      <a
        ref={ref}
        className={`wa-fab${visible ? " is-visible" : ""}`}
        href={whatsappUrl(message)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escribinos por WhatsApp"
        tabIndex={visible ? undefined : -1}
        aria-hidden={visible ? undefined : true}
        data-analytics-location={`boton-fijo${section ? `-${section}` : ""}`}
      >
        <MessageCircle size={24} strokeWidth={2.4} aria-hidden="true" />
        <span>WhatsApp</span>
      </a>
    </aside>
  );
}
