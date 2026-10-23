# NUVRO ENGINEER

Web comercial de NUVRO ENGINEER: tecnología simple para negocios reales.
Portada monocromática, acento azul #0066FF, Archivo Black e Inter.

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
npm run preview
```

Vite genera el sitio en `dist/`. Se conserva la configuración de Vercel
y la ruta independiente `/propuesta` con sus parámetros existentes.
La portada no necesita una API de IA ni variables privadas.

## Edición

- `src/components/site/`: contenido, navegación y contacto de la nueva web.
- `src/home.css`: identidad visual y adaptación a móvil.
- `public/assets/brand/`: imagen editorial mejorada con IA, versiones WebP responsivas y atribución de la fuente original.
- `src/components/site/LearningSection.tsx`: ejemplos educativos de IA y automatización; instrucciones copiables y guías desplegables. No presenta cursos, precios ni integraciones activas ficticias.
- `src/components/ProposalPage.tsx`: ruta de propuestas existente.

El contacto principal conserva el WhatsApp +506 7175 7171 de la portada
anterior. El formulario prepara el texto y muestra un enlace para revisarlo
y enviarlo desde WhatsApp; no simula un envío a un servidor.

Las imágenes editoriales se identifican como referencias, no como clientes.
Los componentes de la portada anterior permanecen en el historial y como
fuentes heredadas, pero ya no se renderizan en la página principal.
