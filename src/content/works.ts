// Trabajos reales de NUVRO para mostrar en la web.
// Videos: marcas ficticias; personas y voces de las creadoras hechas con IA.
// Webs y menús: propuestas de diseño (no se presentan como clientes).

export type WorkVideo = {
  id: string;
  title: string;
  sector: string;
  /** Tipo de video para la página de videos con IA */
  kind: "ugc" | "foto" | "inmobiliario";
  video: string;
  preview: string;
  poster: string;
  posterSmall: string;
};

const media = (id: string) => ({
  video: `/trabajos/videos/${id}.mp4`,
  preview: `/trabajos/previews/${id}.mp4`,
  poster: `/trabajos/posters/${id}-540.webp`,
  posterSmall: `/trabajos/posters/${id}-300.webp`,
});

export const workVideos: WorkVideo[] = [
  {
    id: "sabor-tico",
    title: "Una creadora presenta tu restaurante",
    sector: "Restaurantes",
    kind: "ugc",
    ...media("sabor-tico"),
  },
  {
    id: "nela-belleza",
    title: "Tu producto, recomendado como en TikTok",
    sector: "Belleza",
    kind: "ugc",
    ...media("nela-belleza"),
  },
  {
    id: "esta-chica-no-existe",
    title: "Persona, voz y tienda hechas con IA",
    sector: "Ropa y tiendas",
    kind: "ugc",
    ...media("esta-chica-no-existe"),
  },
  {
    id: "comercial-una-foto",
    title: "De una foto a un comercial",
    sector: "Productos",
    kind: "foto",
    ...media("comercial-una-foto"),
  },
  {
    id: "inmobiliario-casa-palma",
    title: "La propiedad, espacio por espacio",
    sector: "Bienes raíces",
    kind: "inmobiliario",
    ...media("inmobiliario-casa-palma"),
  },
];

export const findVideo = (id: string) =>
  workVideos.find((item) => item.id === id)!;

export type WorkSite = {
  id: string;
  name: string;
  sector: string;
  url: string;
  /** Capturas de celular (780 × 1688 y versión de 480 px) */
  top?: string;
  section: string;
  /** Ejemplo con marca inventada, sin sitio en vivo */
  fictional?: boolean;
};

const shot = (id: string, part: "arriba" | "seccion") =>
  `/trabajos/webs/${id}_${part}`;

export const workSites: WorkSite[] = [
  {
    id: "amana-restaurant",
    name: "Amana",
    sector: "Restaurante",
    url: "https://amana-restaurant.vercel.app",
    top: shot("amana-restaurant", "arriba"),
    section: shot("amana-restaurant", "seccion"),
  },
  {
    id: "soda-la-abuela",
    name: "Soda La Abuela",
    sector: "Soda",
    url: "https://soda-la-abuela.vercel.app",
    top: shot("soda-la-abuela", "arriba"),
    section: shot("soda-la-abuela", "seccion"),
  },
  {
    id: "kingkong-barber-shop",
    name: "King Kong Barber Shop",
    sector: "Barbería",
    url: "https://kingkong-barber-shop.vercel.app",
    top: shot("kingkong-barber-shop", "arriba"),
    section: shot("kingkong-barber-shop", "seccion"),
  },
  {
    id: "smile-center-palmares",
    name: "Smile Center",
    sector: "Clínica dental",
    url: "https://smile-center-palmares.vercel.app",
    top: shot("smile-center-palmares", "arriba"),
    section: shot("smile-center-palmares", "seccion"),
  },
  {
    id: "matrix-gym-grecia",
    name: "Matrix Gym",
    sector: "Gimnasio",
    url: "https://matrix-gym-grecia.vercel.app",
    top: shot("matrix-gym-grecia", "arriba"),
    section: shot("matrix-gym-grecia", "seccion"),
  },
  {
    id: "dds-fumigacion",
    name: "DDS Fumigación",
    sector: "Control de plagas",
    url: "https://dds-fumigacion.vercel.app",
    top: shot("dds-fumigacion", "arriba"),
    section: shot("dds-fumigacion", "seccion"),
  },
];

export const workMenus: WorkSite[] = [
  {
    id: "clandestino",
    name: "Clandestino",
    sector: "Cocina peruana",
    url: "https://clandestino-beta.vercel.app",
    section: shot("clandestino", "seccion"),
  },
  {
    id: "cantaritos",
    name: "Cantaritos",
    sector: "Restaurante y pub",
    url: "https://cantaritos-xi.vercel.app",
    section: shot("cantaritos", "seccion"),
  },
  {
    id: "lacatrina-azul-website",
    name: "La Catrina Azul",
    sector: "Cocina mexicana",
    url: "https://lacatrina-azul-website.vercel.app",
    section: shot("lacatrina-azul-website", "seccion"),
  },
];
