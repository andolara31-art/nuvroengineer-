export const SITE_URL = "https://nuvroenginer.site";
export const BUSINESS_WHATSAPP = "50671757171";
export const BUSINESS_WHATSAPP_DISPLAY = "+506 7175 7171";

export const SERVICE_OPTIONS = [
  { value: "diseno-web", label: "Diseño web" },
  { value: "automatizaciones", label: "Automatizaciones" },
  { value: "menu-qr", label: "Menú QR" },
  { value: "resenas-google", label: "Reseñas Google · QR/NFC" },
  { value: "tienda-online", label: "Tienda online / Shopify" },
  { value: "contenido-publicitario", label: "Videos con IA" },
  { value: "presencia-digital", label: "Presencia digital" },
  { value: "paquetes", label: "Un paquete para mi negocio" },
  { value: "ia", label: "IA para mi negocio" },
  { value: "otro", label: "Quiero orientación" },
] as const;

export type ServiceId = (typeof SERVICE_OPTIONS)[number]["value"];

export function whatsappUrl(message = ""): string {
  const base = `https://wa.me/${BUSINESS_WHATSAPP}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const siteConfig = {
  name: "NUVRO ENGINEER",
  url: SITE_URL,
  whatsapp: BUSINESS_WHATSAPP,
  whatsappDisplay: BUSINESS_WHATSAPP_DISPLAY,
  country: "Costa Rica",
} as const;

/*
  Foto real del propietario para la sección "Atención directa".
  Mientras sea null se muestra la mascota Nuvi. Para activarla, guardar la foto en
  public/assets/brand/ (webp, unos 800 × 1000 px) y completar los datos, por ejemplo:
  { src: "/assets/brand/anderson-foto.webp", width: 800, height: 1000,
    alt: "Anderson, de NUVRO ENGINEER, en Palmares", caption: "Anderson · NUVRO ENGINEER" }
*/
export const OWNER_PHOTO: {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
} | null = null;
