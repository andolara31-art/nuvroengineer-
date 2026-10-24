import { renderToString } from "react-dom/server";
import App from "./App";
import { servicePages } from "./content/services";
import { SITE_URL, BUSINESS_WHATSAPP } from "./lib/site";

export const pages = [
  {
    path: "/",
    title: "Diseño web y automatización en Costa Rica | NUVRO Engineer",
    description:
      "Webs, tiendas Shopify, menús QR, bases QR/NFC para reseñas y videos para negocios de Costa Rica. Explorá servicios, paquetes y condiciones claras.",
  },
  ...servicePages,
  {
    path: "/politicas-de-servicio",
    title: "Políticas de servicio, pagos y soporte | NUVRO Engineer",
    description:
      "Cómo trabajamos en NUVRO: alcance por escrito, anticipo, revisiones, costos de plataformas, entrega y 30 días de soporte postentrega. Atención directa con Anderson.",
  },
  {
    path: "/guias/ia-y-automatizacion-para-pymes",
    title: "IA y automatización para pymes: guía para empezar | NUVRO",
    description:
      "Una guía práctica para elegir tu primera tarea, redactar instrucciones de IA y organizar el seguimiento de consultas. Ejemplos para negocios de Costa Rica.",
  },
  {
    path: "/sobre-nuvro",
    title: "Sobre NUVRO Engineer | Tecnología para negocios en Costa Rica",
    description:
      "Conocé el enfoque de NUVRO ENGINEER: diseño web, presencia digital, IA aplicada y automatización con alcance y entregables claros.",
  },
  {
    path: "/privacidad",
    title: "Privacidad y contacto | NUVRO Engineer",
    description:
      "Cómo funciona el contacto por WhatsApp, la medición opcional y las preferencias de privacidad en la web de NUVRO ENGINEER.",
  },
  {
    path: "/404",
    title: "Página no encontrada | NUVRO Engineer",
    description:
      "Volvé al inicio para explorar los servicios de NUVRO ENGINEER.",
    noindex: true,
  },
  {
    path: "/propuesta",
    title: "Propuesta comercial | NUVRO Engineer",
    description:
      "Propuesta orientativa de servicios digitales para tu negocio.",
    noindex: true,
  },
];

export function render(path: string) {
  return renderToString(<App path={path} />);
}

export function structuredData(
  path: string,
  title: string,
  description: string,
) {
  const organization = {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "NUVRO ENGINEER",
    url: `${SITE_URL}/`,
    telephone: `+${BUSINESS_WHATSAPP}`,
    sameAs: ["https://www.instagram.com/nuvroengineer/"],
    description:
      "Diseño web, tiendas online, QR/NFC para reseñas, contenido comercial y automatización para negocios de Costa Rica.",
  };
  const graph: Record<string, unknown>[] = [
    organization,
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: "NUVRO ENGINEER",
      inLanguage: "es-CR",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}${path}#webpage`,
      url: `${SITE_URL}${path}`,
      name: title,
      description,
      inLanguage: "es-CR",
      isPartOf: { "@id": `${SITE_URL}/#website` },
    },
  ];
  const service = servicePages.find((item) => item.path === path);
  if (service)
    graph.push({
      "@type": "Service",
      name: service.name,
      description: service.description,
      url: `${SITE_URL}${path}`,
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: { "@type": "Country", name: "Costa Rica" },
    });
  if (path !== "/")
    graph.push({
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Inicio",
          item: `${SITE_URL}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: service?.name || title.split("|")[0].trim(),
          item: `${SITE_URL}${path}`,
        },
      ],
    });
  return { "@context": "https://schema.org", "@graph": graph };
}
