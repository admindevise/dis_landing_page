# DISHUB Web

Aplicación web corporativa desarrollada con React + TypeScript + Vite para presentar soluciones digitales de DISHUB.

## Stack
- React 19
- TypeScript 5
- Vite 8
- React Router DOM 7
- Material UI 7
- Tailwind CSS 4

## Scripts
- `pnpm dev`: entorno local.
- `pnpm build`: build de producción.
- `pnpm preview`: previsualización del build.
- `pnpm lint`: validación ESLint.

## Inicio rápido
1. `pnpm install`
2. `pnpm dev`

## Documentación
- Guía completa del proyecto: [docs/GUIA_PROYECTO.md](docs/GUIA_PROYECTO.md)
- Referencia archivo por archivo: [docs/REFERENCIA_ARCHIVOS.md](docs/REFERENCIA_ARCHIVOS.md)

## Estructura general
- `src/`: código de la app.
- `public/`: assets estáticos.
- `docs/`: documentación técnica y funcional.

## Rutas principales
- /
- /nosotros
- /soluciones
- /contacto
- /devise/devise-business
- /devise/devise-marketplace
- /valuo
- /consulting

## Nota de mantenimiento
Actualmente coexisten archivos `.tsx` y `.js` paralelos en el entrypoint/ruteo. Se recomienda consolidar en TypeScript para reducir deuda técnica.
