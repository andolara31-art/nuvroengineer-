export const SITE_URL = "https://nuvroenginer.site";
export const BUSINESS_WHATSAPP = "50671757171";
export const BUSINESS_WHATSAPP_DISPLAY = "+506 7175 7171";

export const SERVICE_OPTIONS = [
  { value: "diseno-web", label: "Diseño web" },
  { value: "automatizaciones", label: "Automatizaciones" },
  { value: "menu-qr", label: "Menú QR" },
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
