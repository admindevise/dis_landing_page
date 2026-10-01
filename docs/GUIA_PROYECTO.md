# GUIA DEL PROYECTO DISHUB

## Objetivo
Este proyecto es una web corporativa de DISHUB construida con React + TypeScript + Vite.
Su objetivo es presentar las soluciones, rutas comerciales y secciones informativas de la marca.

## Stack principal
- React 19
- TypeScript 5
- Vite 8
- React Router DOM 7
- Material UI 7
- Tailwind CSS 4

## Scripts de trabajo
- `pnpm dev`: inicia entorno local.
- `pnpm build`: genera build de produccion.
- `pnpm preview`: previsualiza el build.
- `pnpm lint`: ejecuta validaciones de ESLint.

## Flujo recomendado de desarrollo
1. Instalar dependencias con `pnpm install`.
2. Levantar local con `pnpm dev`.
3. Implementar cambios en componentes/paginas.
4. Validar con `pnpm lint`.
5. Generar build con `pnpm build` antes de publicar.

## Estructura del proyecto
- `src/`: codigo principal de la aplicacion.
- `public/`: assets estaticos y archivos publicos.
- `docs/`: documentacion tecnica y funcional.

## Organizacion interna de `src/`
- `components/global`: componentes compartidos como headers, footer, SEO y controles reutilizables.
- `pages`: pantallas asociadas a rutas.
- `sections/home`: secciones de la pagina principal.
- `sections/devise-business`, `sections/devise-marketplace`, `sections/valuo`, `sections/consulting`: secciones aisladas por pagina de producto.
- `hooks`: hooks compartidos de React.
- `constants`: contenido y constantes de la aplicacion.
- `lib/`: utilidades generales.
- `theme/`: configuraciones de tema.

## Rutas principales
- `/`
- `/nosotros`
- `/soluciones`
- `/contacto`
- `/devise/devise-business`
- `/devise/devise-marketplace`
- `/valuo`
- `/consulting`

## Nota tecnica actual
Actualmente conviven archivos `.tsx` y `.js` paralelos en parte del proyecto.
Se recomienda consolidar gradualmente en TypeScript para reducir deuda tecnica y simplificar mantenimiento.

## Convenciones sugeridas
- Priorizar nuevos cambios en `.tsx`.
- Mantener componentes pequenos y reutilizables.
- Evitar logica de negocio compleja dentro de vistas.
- Centralizar helpers compartidos en `src/lib/`.

## Checklist antes de merge/deploy
- `pnpm lint` sin errores.
- `pnpm build` exitoso.
- Verificacion de rutas clave en local.
- Revision visual de responsive basico (desktop y mobile).
