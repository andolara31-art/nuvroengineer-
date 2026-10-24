# NUVRO ENGINEER

Web comercial de NUVRO ENGINEER: tecnología simple para negocios reales.
Diseño editorial en negro #080808, blanco y papel #f2f2ef, con azul #0066FF limitado a detalles. Tipografías Archivo Black e Inter. Cabecera con búsqueda real y portada con una muestra interactiva de diseño web.

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

Vite genera el sitio en `dist/`. `scripts/build.mjs` prepara HTML completo con React para inicio, cuatro servicios, una guía, sobre NUVRO, privacidad y error 404. Cada URL tiene título, descripción, canonical y metadatos propios. Sitemap y JSON-LD se generan con la misma fuente de contenido.
Vercel usa `cleanUrls` para servir las páginas sin extensión y una respuesta 404 real para rutas inexistentes. La ruta independiente `/propuesta` conserva sus parámetros y se excluye de indexación con meta y cabecera `noindex`.
La portada no necesita una API de IA ni variables privadas.

## Edición

- `src/components/site/`: contenido, navegación y contacto de la nueva web.
- `CorporateHero.tsx`, `CorporateSections.tsx` y `src/corporate.css`: portada y secciones editoriales alineadas con la identidad original de NUVRO. La muestra permite abrir una carta y seleccionar productos sin enviar pedidos; el buscador filtra páginas existentes.
- `src/home.css`: identidad visual y adaptación a móvil.
- `public/assets/brand/`: fotografía editorial acreditada, imagen social de la web y versiones anteriores conservadas. Las imágenes generadas anteriores ya no se muestran en la portada.
- `src/components/site/LearningSection.tsx`: ejemplos educativos de IA y automatización; instrucciones copiables y guías desplegables. No presenta cursos, precios ni integraciones activas ficticias.
- `src/components/ProposalPage.tsx`: ruta de propuestas existente.

El contacto se centraliza en `src/lib/site.ts`: WhatsApp +506 7175 7171 para todas las rutas activas. El formulario permite correo y nombre de negocio opcionales, servicio contextual y un mensaje. Prepara el texto y muestra un enlace para revisarlo y enviarlo desde WhatsApp. No registra solicitudes en un servidor.

## Medición y Google

- Google Analytics queda preparado, sin activar ni crear cuenta, por indicación del propietario. Cuando se disponga de un ID real, configurar `VITE_GA_MEASUREMENT_ID` en Vercel y volver a desplegar. No se incluye un ID ficticio.
- La medición solo se carga tras consentimiento explícito. Se registran `page_view`, `contact_section_click`, `contact_message_prepared` y `whatsapp_click`; los mensajes y correos no se envían a Analytics. Un clic no equivale a una consulta recibida ni a una venta. La política `/privacidad` permite cambiar la preferencia.
- Para Search Console, verificar la propiedad `https://nuvroenginer.site/`. `GOOGLE_SITE_VERIFICATION` permite incluir el token de verificación en el HTML durante la compilación. A continuación enviar `https://nuvroenginer.site/sitemap.xml`. La verificación y el envío no se simulan desde la web.
- La atención comercial abarca todo Costa Rica, según el propietario. Un Perfil de Empresa de servicios a domicilio requiere confirmar una base real, zonas locales y verificación de Google. No se creó un perfil con una dirección o reseñas inventadas.

## Nuevas páginas

- `/diseno-web-costa-rica`, `/automatizaciones-negocios`, `/menu-qr-restaurantes`, `/ia-para-negocios`.
- `/guias/ia-y-automatizacion-para-pymes`: guía editorial con instrucción copiable y criterios para probar una primera automatización.
- `/#demostraciones`: menú con resumen, página comercial interactiva y simulación de seguimiento. Todos los datos son ficticios; no se hacen pedidos ni se envían avisos reales.
- `/sobre-nuvro` y `/privacidad`.

Las imágenes editoriales se identifican como referencias, no como clientes.
Los componentes de la portada anterior permanecen en el historial y como
fuentes heredadas, pero ya no se renderizan en la página principal.
