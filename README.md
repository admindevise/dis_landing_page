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

## Despliegue en Railway

El proyecto incluye `Dockerfile`, `nginx.conf` y `railway.toml`. Railway detectará el `Dockerfile`, ejecutará `pnpm build` y servirá `dist` en el puerto `8080`. Nginx también redirige las rutas de React Router a `index.html`.

1. Sube el repositorio a GitHub.
2. En Railway, selecciona **New Project** > **Deploy from GitHub repo** y elige este repositorio.
3. En **Settings** > **Networking**, genera un dominio público.
4. Cada push a la rama conectada desplegará una nueva versión automáticamente.

Para probar la imagen localmente, inicia Docker Desktop y ejecuta `docker build -t dishub-web . && docker run --rm -p 8080:8080 dishub-web`; después abre `http://localhost:8080`.

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
