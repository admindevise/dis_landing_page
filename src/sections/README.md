# Secciones

- `00-Hero.astro` y `01-About.astro` a `15-Contact.astro` son las secciones principales, ordenadas según la secuencia editorial.
- Las secciones de metodología se presentan juntas en `/metodologia`: `04-05-BrickflowRoles.astro` (FDE y FDT), `06-BrickflowCapabilities.astro` y `08-09-BrickflowDetails.astro` (comparativo y contexto regulatorio).
- `Challenge.astro` es una ruta independiente y no forma parte de la secuencia principal.
- Las piezas de apoyo reutilizables (formulario, navegación entre páginas, títulos) viven en `src/components/landing/`.
- Cada sección interactiva renderiza su marcado completo en el servidor y agrega el comportamiento con un `<script>` en TypeScript, sin framework de UI. El script se registra con `onPageLoad` (`src/lib/lifecycle.ts`) para funcionar también tras la navegación interna del `ClientRouter`.
