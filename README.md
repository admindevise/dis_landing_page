# DISHUB Web

Sitio corporativo de disHub construido con Astro + TypeScript. Se genera como sitio estático (una página HTML por ruta) y solo envía al navegador el JavaScript de las secciones interactivas, sin framework de UI. Solo la primera visita carga la página completa; la navegación interna usa el `ClientRouter` de Astro y no recarga.

## Stack
- Astro 7 (salida estática)
- TypeScript 5 (modo estricto de Astro)
- Tailwind CSS 4 (plugin de Vite)
- Three.js (escenas 3D cargadas bajo demanda)

## Scripts
- `pnpm dev`: entorno local en `http://localhost:5174`.
- `pnpm build`: revisión de tipos (`astro check`) y build de producción en `dist/`.
- `pnpm preview`: previsualización del build.
- `pnpm lint`: validación ESLint de los archivos `.ts`.

## Despliegue en Railway

El proyecto incluye `Dockerfile`, `nginx.conf` y `railway.toml`. Railway detectará el `Dockerfile`, ejecutará `pnpm build` y servirá `dist` en el puerto `8080`. Nginx resuelve cada ruta con su archivo HTML (`/metodologia` → `metodologia.html`) y responde `404.html` (que redirige al inicio) para rutas desconocidas.

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
- `src/`: código del sitio.
- `public/`: assets estáticos.
- `docs/`: documentación técnica y funcional.

## Rutas principales
- `/` y `/nosotros`
- `/metodologia` (redirección desde `/enfoque`)
- `/soluciones` (redirección desde `/seguridad`)
- `/historia`
- `/contacto`
- `/desafio`
- `/politica-privacidad`
