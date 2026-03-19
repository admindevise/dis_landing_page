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

## `src/components/atoms`
Componentes basicos reutilizables.
- `Loading.tsx`: estados de carga.
- `ProgressBar.tsx`: barra de progreso.
- `ScrollToTop.tsx`: manejo de scroll al cambiar ruta.
- `SectionTitle.tsx`: titulos de seccion.
- `SEO.tsx`: metadatos SEO por pagina.
- `IconTextProps.tsx`: elemento icono + texto.

## `src/components/molecules`
Componentes compuestos con logica ligera.
- `ProblemCard.tsx`, `ProblemList.tsx`: bloques de problemas.
- `SolutionCard.tsx`, `SolutionTabs.tsx`, `SolutionImageDisplay.tsx`: bloques de soluciones.
- `HistoriaDIS.tsx`: seccion narrativa/institucional.

## `src/components/organisms`
Bloques grandes para construir paginas.
- `Header.tsx`, `HeaderDevise.tsx`, `HeaderValuo.tsx`: variantes de header.
- `AnimatedBackground.tsx`: fondo animado.
- `PlatformModules.tsx`: modulos de plataforma.
- Subcarpetas por dominio (`BusinessSection/`, `ConsultingSection/`, `MarketPlaceSection/`, `ValuoSection/`).

## `src/components/pages`
Paginas asociadas a rutas.
- `Home.tsx`, `Nosotros.tsx`, `Soluciones.tsx`, `Contact.tsx`.
- `DeviseBusiness.tsx`, `DeviseMarketplace.tsx`.
- `Valuo.tsx`, `Consulting.tsx`.
- `NotFound.tsx`.

## `src/components/sections`
Secciones reutilizables para armado de paginas.
- `Hero.tsx`, `CTASection.tsx`, `ProblemSection.tsx`, `TargetSection.tsx`, `PriceSection.tsx`.
- Subcarpetas especializadas: `BenefitsSection/`, `SolutionsSection/`.

## `src/components/templates`
Layouts o plantillas comunes.
- `HeaderSwitcher.tsx`: selecciona encabezado segun contexto/ruta.
- `Footer.tsx`: pie de pagina compartido.

## Soporte
- `src/lib/utils.ts`: utilidades varias.
- `src/theme/theme.ts`: configuracion de tema visual.

## Nota de mantenimiento
En varios modulos existen pares `.js` y `.tsx`.
Si se elimina un archivo `.js`, verificar imports y rutas para no romper el build.
Priorizar mantener una sola version por modulo en TypeScript.
