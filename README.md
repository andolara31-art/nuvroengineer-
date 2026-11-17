# NUVRO ENGINEER

Web comercial de NUVRO ENGINEER: tecnología simple para negocios reales.
Identidad de marca con papel #ECECE8 con grano, azul eléctrico #2046F0, tinta #121212, blanco y papel rasgado #F7F7F4. Colores de apoyo solo en detalles (máximo dos por sección): amarillo #FFC83D, coral #FF5A4E y menta #5EDBB0. Títulos en Big Shoulders Display (mayúsculas, condensada), interfaz en Inter 600/700 y notas a mano en Caveat azul; las fuentes se cargan desde `@fontsource`, sin CDN. Estilo cómic: bordes gruesos de tinta, sombras duras, semitono, rótulos amarillos y bordes de papel rasgado generados con SVG (`TornEdge.tsx`). Cabecera con búsqueda real y portada azul con una muestra interactiva de diseño web.

## Desarrollo

Usar Node.js 22 LTS.

```sh
npm ci
npm run dev
```

## Verificación y compilación

```sh
npm run lint
npm run build
npm run check:site
npm run preview
```

Vite genera el sitio en `dist/`. `scripts/build.mjs` prepara HTML completo con React para inicio, siete servicios, políticas de servicio, una guía, sobre NUVRO, privacidad y error 404. Cada URL tiene título, descripción, canonical y metadatos propios. Sitemap y JSON-LD se generan con la misma fuente de contenido.
Vercel usa `cleanUrls` para servir las páginas sin extensión y una respuesta 404 real para rutas inexistentes. La ruta independiente `/propuesta` conserva sus parámetros y se excluye de indexación con meta y cabecera `noindex`.
La portada no necesita una API de IA ni variables privadas.

## Edición

- `src/components/site/`: contenido, navegación y contacto de la nueva web.
- `CorporateHero.tsx`, `CorporateSections.tsx` y `src/corporate.css`: portada y secciones editoriales alineadas con la identidad original de NUVRO. La muestra permite abrir una carta y seleccionar productos sin enviar pedidos; el buscador filtra páginas existentes.
- `src/brand.css`: capa final de identidad (colores, tipografía, estilo cómic, menú, botones, botón fijo de WhatsApp y movimiento reducido). Las animaciones usan solo `transform` y `opacity`.
- `src/components/site/TornEdge.tsx`: borde de papel rasgado con semilla fija, usado entre secciones y en el pie.
- `src/components/site/HowWeWork.tsx` y `AISection.tsx`: "Cómo trabajamos" con ilustraciones propias e "IA para tu negocio" con un chat ficticio en un teléfono dibujado. No se usan logotipos de marcas ajenas: solo nombres en pastillas con íconos genéricos y la nota de no afiliación.
- `src/home.css`: estilos base heredados y adaptación a móvil.
- `src/components/site/Illustrations.tsx`: ilustraciones cómic dibujadas en SVG con animaciones suaves (cafetería del ejemplo MESA y los tres sectores). La portada ya no usa fotografías.
- `public/assets/brand/`: imagen social de la web y versiones anteriores conservadas (incluida la fotografía editorial que usaba el ejemplo).
- `src/components/site/LearningSection.tsx`: ejemplos educativos de IA y automatización; instrucciones copiables y guías desplegables. No presenta cursos, precios ni integraciones activas ficticias.
- `src/components/ProposalPage.tsx`: ruta de propuestas existente.

El contacto se centraliza en `src/lib/site.ts`: WhatsApp +506 7175 7171 para todas las rutas activas. El formulario permite correo y nombre de negocio opcionales, servicio contextual y un mensaje. Prepara el texto y muestra un enlace para revisarlo y enviarlo desde WhatsApp. No registra solicitudes en un servidor.

## Información comercial pública y privada

- La web no muestra tarifas comerciales. Los ejemplos de menú conservan precios ficticios identificados como demostración.
- `src/content/packages.ts` contiene los cuatro paquetes públicos, sin importes: Presencia Rápida, Campaña que Vende, Web Premium y Sistema a Medida. La combinación y el alcance se acuerdan en una propuesta, no se presume que todas las opciones estén incluidas.
- La consulta de un paquete conserva su nombre con parámetros validados contra los paquetes existentes. No añade el mensaje del cliente a los eventos de medición.
- Las páginas de reseñas QR/NFC, e-commerce/Shopify y videos explican entregables, proceso y límites. La creación de piezas no incluye por defecto gestión de anuncios ni inversión publicitaria.
- `/politicas-de-servicio` detalla alcance, anticipo, medios de pago, costos externos, revisiones, entrega y soporte postentrega. No establece penalizaciones ni una regla de anticipo no reembolsable no proporcionada por el propietario.
- El catálogo de precios del propietario se entrega como archivo local fuera de este repositorio. No se debe copiar a `public/`, `dist/`, el código fuente, los metadatos ni la configuración. `check:site` rechaza hojas de cálculo, catálogos privados y los nuevos importes comerciales en el artefacto publicado.

## Medición y Google

- Google Analytics queda preparado, sin activar ni crear cuenta, por indicación del propietario. Cuando se disponga de un ID real, configurar `VITE_GA_MEASUREMENT_ID` en Vercel y volver a desplegar. No se incluye un ID ficticio.
- La medición solo se carga tras consentimiento explícito. Se registran `page_view`, `contact_section_click`, `contact_message_prepared` y `whatsapp_click`; los mensajes y correos no se envían a Analytics. Un clic no equivale a una consulta recibida ni a una venta. La política `/privacidad` permite cambiar la preferencia.
- Para Search Console, verificar la propiedad `https://nuvroenginer.site/`. `GOOGLE_SITE_VERIFICATION` permite incluir el token de verificación en el HTML durante la compilación. A continuación enviar `https://nuvroenginer.site/sitemap.xml`. La verificación y el envío no se simulan desde la web.
- La atención comercial abarca todo Costa Rica, según el propietario. Un Perfil de Empresa de servicios a domicilio requiere confirmar una base real, zonas locales y verificación de Google. No se creó un perfil con una dirección o reseñas inventadas.

## Nuevas páginas

- `/diseno-web-costa-rica`, `/automatizaciones-negocios`, `/menu-qr-restaurantes`, `/ia-para-negocios`.
- `/resenas-google-qr-nfc`, `/tiendas-online-shopify`, `/videos-publicidad-negocios`, `/politicas-de-servicio`.
- `/guias/ia-y-automatizacion-para-pymes`: guía editorial con instrucción copiable y criterios para probar una primera automatización.
- `/#demostraciones`: menú con resumen, página comercial interactiva y simulación de seguimiento. Todos los datos son ficticios; no se hacen pedidos ni se envían avisos reales.
- `/sobre-nuvro` y `/privacidad`.

Las imágenes editoriales se identifican como referencias, no como clientes.
Los componentes de la portada anterior permanecen en el historial y como
fuentes heredadas, pero ya no se renderizan en la página principal.
