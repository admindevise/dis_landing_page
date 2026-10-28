# REFERENCIA DE ARCHIVOS

## Raiz
- `package.json`: dependencias y scripts del proyecto.
- `astro.config.mjs`: configuracion de Astro (salida, redirecciones, Tailwind y servidor local).
- `eslint.config.js`: reglas de lint.
- `tsconfig.json`: configuracion TypeScript (extiende `astro/tsconfigs/strict`).
- `Dockerfile`, `nginx.conf`, `railway.toml`: despliegue.
- `README.md`: guia general.

## Carpeta `public/`
- `robots.txt`: reglas para crawlers.
- `sitemap.xml`: mapa del sitio.
- `images/`: imagenes usadas por la web (backgrounds, logos, iconos, etc.).
- `videos/`: recursos de video estaticos.

## `src/pages`
- `index.astro`, `nosotros.astro`: inicio.
- `metodologia.astro`, `soluciones.astro`, `historia.astro`, `contacto.astro`, `desafio.astro`.
- `politica-privacidad.astro`: politica de datos personales.
- `404.astro`: redirige al inicio.

## `src/layouts`
- `BaseLayout.astro`: documento HTML, metadatos, estilos globales y cursor.
- `LandingLayout.astro`: estructura de la landing y arranque del preloader y las animaciones.

## `src/sections`
Secciones de la landing en orden editorial (ver `src/sections/README.md`).

## `src/components`
- `global/`: `Header.astro` (incluye menu movil), `Footer.astro`, `CursorEffect.astro`.
- `landing/`: `SectionHeading`, `SplitLines`, `Ticker`, `Preloader`, `ThreeStage`, `ContactForm` (validacion en el cliente) y `ContinueJourney` (navegacion al final de cada pagina).
- `landing/brickflow/`: ilustraciones SVG de la metodologia (torre, iconos de etapa, ciclo FDT).

## `src/scripts`
- `preloader.ts`: progreso de carga y salida del preloader.
- `landing-motion.ts`: revelado al hacer scroll, secciones activas y barra de progreso.

## `src/lib`
- `dom.ts`: escalado de lienzos, visibilidad de paneles y textos.
- `lifecycle.ts`: `onPageLoad`, inicializacion y limpieza de scripts en cada navegacion.
- `tabs.ts`: pestañas accesibles con teclado.

## `src/three`
- `stage.ts`: montaje de una escena Three.js.
- `lazyStage.ts`: monta la escena cuando se acerca al viewport y la desactiva en pantallas angostas.
- `objects/`, `solutions/`: escenas de cada seccion.

## Soporte
- `src/constants/content.ts`: contenido centralizado del sitio.
- `src/constants/brickflow.ts`: geometria compartida de la torre Brickflow.
- `src/styles/`: `global.css` (Tailwind, fuentes, fondo y header), `landing-*.css` (secciones) y `reset.css` (reset global, se carga al final).
