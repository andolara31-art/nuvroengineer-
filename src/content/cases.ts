// Casos reales de clientes. Solo datos confirmados por el cliente:
// no se agregan cifras, ventas, seguidores ni testimonios.

export type CaseImage = {
  /** Ruta sin el sufijo "-1200.webp" / "-600.webp" */
  base: string;
  width: number;
  height: number;
  alt: string;
};

const img = (
  name: string,
  width: number,
  height: number,
  alt: string,
): CaseImage => ({ base: `/trabajos/kiss-by-may/${name}`, width, height, alt });

export const kissByMay = {
  path: "/casos/kiss-by-may",
  name: "kiss by may",
  instagram: "kissbymaycr",
  title: "kiss by may · misma tienda, otra marca",
  service: "Identidad visual, contenido para redes y catálogo de productos",
  sector: "Perfumes, makeup y skincare en Costa Rica",
  challenge:
    "La tienda tenía buenos productos, pero su imagen se veía sencilla: logo borroso, muchas letras distintas, rosa en todo y cada pieza por su lado. La meta era que se viera al nivel de las marcas de belleza que admiran sus clientas.",
  done: [
    {
      title: "Logo nuevo",
      body: "Nítido en cualquier tamaño, con el monograma «kbm» para la foto de perfil.",
    },
    {
      title: "Sistema de marca",
      body: "Cuatro colores y dos letras, con una sola palabra en cursiva.",
    },
    {
      title: "Historias y posts",
      body: "Rediseñados: métodos de pago, formas de entrega, catálogo y colecciones.",
    },
    {
      title: "Catálogo de perfumes",
      body: "Fotos con el mismo fondo y un catálogo con precios en colones, listo para mandar por WhatsApp.",
    },
  ],
  facts: [
    { value: "656", label: "perfumes en el catálogo" },
    { value: "7 + 5", label: "historias y posts rediseñados" },
  ],
  colors: [
    { name: "Tinta", hex: "#2B1D22" },
    { name: "Rosa", hex: "#F3E4E1" },
    { name: "Crema", hex: "#FBF7F4" },
    { name: "Acento", hex: "#C9486F" },
  ],
  logo: {
    before: img(
      "logo-antes",
      1200,
      1200,
      "Logo anterior de kiss by may: letras rosadas con un moño y la frase Costa Rica Beauty, con poca nitidez",
    ),
    after: img(
      "logo-despues",
      1200,
      520,
      "Logo nuevo de kiss by may: letras oscuras nítidas con un pequeño moño rosado y la frase costa rica beauty",
    ),
    profile: img(
      "perfil-kbm",
      1080,
      1080,
      "Monograma kbm con un moño rosado, usado como foto de perfil",
    ),
  },
  stories: [
    {
      title: "Métodos de pago",
      before: img(
        "pago-antes",
        1200,
        2132,
        "Historia anterior de métodos de pago: fondo rosado con corazones, varias letras distintas y botones de SINPE, efectivo y transferencia",
      ),
      after: img(
        "pago-despues",
        1080,
        1920,
        "Historia nueva de métodos de pago: fondo claro, título con la palabra pago en cursiva y una lista ordenada de SINPE móvil, efectivo y transferencia",
      ),
    },
    {
      title: "Formas de entrega",
      before: img(
        "entrega-antes",
        1200,
        2132,
        "Historia anterior de formas de entrega: muchos colores, íconos y tipos de letra en una sola pieza",
      ),
      after: img(
        "entrega-despues",
        1080,
        1920,
        "Historia nueva de formas de entrega: diseño limpio con entrega gratis, entrega express y envíos a todo Costa Rica en una lista",
      ),
    },
  ],
  samples: [
    img(
      "post-para-ella",
      1080,
      1350,
      "Post Para ella con cuatro perfumes, sus marcas y precios en colones",
    ),
    img(
      "historia-catalogo",
      1080,
      1920,
      "Historia que anuncia el catálogo nuevo de perfumes, con botón para pedir por WhatsApp",
    ),
    img(
      "catalogo-pagina",
      1200,
      1696,
      "Página del catálogo con doce perfumes en fondo claro, cada uno con su nombre y precio en colones",
    ),
  ],
};
