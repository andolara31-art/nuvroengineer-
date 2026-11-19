import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "../../lib/site";

/*
  Botón fijo de WhatsApp, solo en pantallas chicas (ver brand.css).
  Aparece al pasar la portada y se oculta cuando ya se ve el contacto o el pie,
  para no tapar botones que hacen lo mismo. El mensaje cambia según la sección
  de la portada que se está viendo o según la página de servicio.
*/
const DEFAULT_MESSAGE = "Hola NUVRO, quiero conversar sobre mi negocio.";

const sectionMessages: Record<string, string> = {
  historia: DEFAULT_MESSAGE,
  "que-necesito":
    "Hola NUVRO, quiero que me orienten sobre qué necesita mi negocio.",
  soluciones:
    "Hola NUVRO, vi sus servicios y quiero orientación para mi negocio.",
  proceso: "Hola NUVRO, quiero saber cómo empezar un proyecto con ustedes.",
  trabajos: "Hola NUVRO, vi sus trabajos y quiero algo así para mi negocio.",
  demostraciones:
    "Hola NUVRO, probé los ejemplos de la web y quiero algo así para mi negocio.",
  paquetes: "Hola NUVRO, quiero información sobre los paquetes.",
  ia: "Hola NUVRO, quiero saber cómo usar IA en mi negocio.",
  atencion: DEFAULT_MESSAGE,
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

export default function WhatsAppFab({ page = "/" }: { page?: string }) {
  const [visible, setVisible] = useState(false);
  const [section, setSection] = useState("");

  useEffect(() => {
    const hero = document.querySelector(".craft-hero, main > section");
    const ends = document.querySelectorAll("#contacto, .corp-footer");
    const sections = Object.keys(sectionMessages)
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    if (!("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }
    const state = { hero: Boolean(hero), end: false };
    const seen = new Map<Element, boolean>();
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) seen.set(entry.target, entry.isIntersecting);
      state.hero = hero ? Boolean(seen.get(hero)) : false;
      state.end = Array.from(ends).some((element) => seen.get(element));
      setVisible(!state.hero && !state.end);
    });
    if (hero) observer.observe(hero);
    ends.forEach((element) => observer.observe(element));

    // Sección "actual": la que cruza la mitad de la pantalla.
    const middle = new IntersectionObserver(
      (entries) => {
        for (const entry of entries)
          if (entry.isIntersecting) setSection(entry.target.id);
      },
      { rootMargin: "-50% 0px -50% 0px" },
    );
    sections.forEach((element) => middle.observe(element));
    return () => {
      observer.disconnect();
      middle.disconnect();
    };
  }, []);

  const message =
    pageMessages[page] || sectionMessages[section] || DEFAULT_MESSAGE;

  return (
    <aside className="wa-fab-region" aria-label="Contacto por WhatsApp">
      <a
        className={`wa-fab${visible ? " is-visible" : ""}`}
        href={whatsappUrl(message)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escribinos por WhatsApp"
        tabIndex={visible ? undefined : -1}
        aria-hidden={visible ? undefined : true}
        data-analytics-location={`boton-fijo${section ? `-${section}` : ""}`}
      >
        <MessageCircle size={22} strokeWidth={2.3} aria-hidden="true" />
        <span>WhatsApp</span>
      </a>
    </aside>
  );
}
