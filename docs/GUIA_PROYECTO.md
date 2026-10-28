# GUIA DEL PROYECTO DISHUB

## Objetivo
Este proyecto es la web corporativa de disHub construida con Astro + TypeScript.
Presenta la metodología Brickflow, las soluciones, la trayectoria y los canales de contacto de la marca.

## Stack principal
- Astro 7 (salida estática, sin framework de UI)
- TypeScript 5
- Tailwind CSS 4
- Three.js

## Scripts de trabajo
- `pnpm dev`: inicia entorno local.
- `pnpm build`: revisa tipos con `astro check` y genera el build de produccion.
- `pnpm preview`: previsualiza el build.
- `pnpm lint`: ejecuta validaciones de ESLint.

## Flujo recomendado de desarrollo
1. Instalar dependencias con `pnpm install`.
2. Levantar local con `pnpm dev`.
3. Implementar cambios en componentes, secciones o paginas.
4. Validar con `pnpm lint`.
5. Generar build con `pnpm build` antes de publicar.

## Estructura del proyecto
- `src/`: codigo principal del sitio.
- `public/`: assets estaticos y archivos publicos.
- `docs/`: documentacion tecnica y funcional.

## Organizacion interna de `src/`
- `pages/`: una pagina `.astro` por ruta. Es la carpeta de rutas de Astro (obligatoria): cada archivo genera una URL.
- `layouts/`: plantillas de pagina de Astro. `BaseLayout` (documento HTML, metadatos, estilos globales y router) y `LandingLayout` (header, preloader, fondo, footer).
- `sections/`: solo secciones de la landing, en orden editorial (ver `sections/README.md`).
- `components/global`: header, footer y cursor.
- `components/landing`: piezas compartidas de la landing (titulos, preloader, contenedor 3D, formulario de contacto, navegacion entre paginas).
- `components/landing/brickflow`: ilustraciones SVG de la metodologia.
- `scripts/`: comportamiento global del cliente (preloader y animaciones de scroll).
- `lib/`: utilidades genericas (DOM, pestañas accesibles, ciclo de vida de los scripts).
- `three/`: escenas Three.js y montaje diferido.
- `constants/`: `content.ts` (contenido del sitio) y `brickflow.ts` (geometria de la torre Brickflow).
- `styles/`: `global.css` (Tailwind, fuentes y fondo), hojas de la landing y `reset.css`, que se carga al final.

## Como funciona la interactividad
Cada seccion renderiza en el build todo su marcado (incluidas las variantes de cada pestaña) y un `<script>` en TypeScript agrega el comportamiento: muestra u oculta paneles con `hidden`, actualiza atributos ARIA y textos. Mostrar un panel oculto reinicia sus animaciones CSS de entrada.

La navegacion interna usa el `ClientRouter` de Astro: solo la primera visita (o una recarga) descarga la pagina completa y muestra el preloader; los enlaces internos reemplazan el contenido sin recargar. Por eso cada script se inicializa con `onPageLoad` (`src/lib/lifecycle.ts`), sale si su seccion no esta en la pagina actual y usa la señal que recibe para quitar listeners de `window`/`document`, detener temporizadores y observers y liberar las escenas 3D al cambiar de pagina.

## Rutas principales
- `/` y `/nosotros`
- `/metodologia`
- `/soluciones`
- `/historia`
- `/contacto`
- `/desafio`
- `/politica-privacidad`

## Convenciones sugeridas
- Mantener el contenido en `src/constants/content.ts`.
- Mantener componentes pequenos y reutilizables.
- Usar los tokens de espaciado de `src/styles/landing-base.css` (ver `CLAUDE.md`).
- Centralizar helpers compartidos en `src/lib/`.

## Checklist antes de merge/deploy
- `pnpm lint` sin errores.
- `pnpm build` exitoso.
- Verificacion de rutas clave en local.
- Revision visual de responsive basico (desktop y mobile).
