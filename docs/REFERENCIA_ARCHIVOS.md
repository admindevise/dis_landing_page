# REFERENCIA DE ARCHIVOS

## Raiz
- `package.json`: dependencias y scripts del proyecto.
- `vite.config.ts`: configuracion de Vite.
- `tailwind.config.js`: configuracion de Tailwind.
- `eslint.config.js`: reglas de lint.
- `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`: configuraciones TypeScript.
- `index.html`: plantilla HTML principal.
- `README.md`: guia general y notas de mantenimiento.

## Carpeta `public/`
- `robots.txt`: reglas para crawlers.
- `sitemap.xml`: mapa del sitio.
- `images/`: imagenes usadas por la web (backgrounds, logos, iconos, etc.).
- `videos/`: recursos de video estaticos.

## Carpeta `src/`
- `main.tsx` / `main.js`: entrypoint de la app.
- `App.tsx` / `App.js`: raiz de la aplicacion y ruteo principal.
- `index.css`: estilos globales.
- `global.d.ts`: declaraciones de tipos globales.

## `src/components/global`
Componentes compartidos entre paginas.
- `Header.tsx`, `HeaderDevise.tsx`, `HeaderValuo.tsx`: variantes de header.
- `Footer.tsx`, `SEO.tsx`, `Loading.tsx`: estructura y estados comunes.
- `PlatformModules.tsx`, `SolutionTabs.tsx`: controles reutilizables.

## `src/pages`
Paginas asociadas a rutas.
- `Home.tsx`, `Nosotros.tsx`, `Soluciones.tsx`, `Contact.tsx`.
- `DeviseBusiness.tsx`, `DeviseMarketplace.tsx`.
- `Valuo.tsx`, `Consulting.tsx`.
- `NotFound.tsx`.

## `src/sections`
Secciones organizadas por pagina o producto.
- `home/`: `Hero`, `Challenge`, `Solutions`, `CTA`, `BenefitsSection` y demas secciones del inicio.
- `devise-business/`, `devise-marketplace/`, `valuo/`, `consulting/`: bloques propios de cada pagina.

## `src/hooks`, `src/constants` y `src/lib`
Capas aisladas para hooks de React, constantes/contenido y utilidades generales.

## Soporte
- `src/constants/content.ts`: contenido y constantes de la aplicacion.
- `src/lib/utils.ts`: utilidades varias.
- `src/theme/theme.ts`: configuracion de tema visual.

## Nota de mantenimiento
En varios modulos existen pares `.js` y `.tsx`.
Si se elimina un archivo `.js`, verificar imports y rutas para no romper el build.
Priorizar mantener una sola version por modulo en TypeScript.
