import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  site: "https://www.dishub.co",
  trailingSlash: "never",
  build: {
    // `/metodologia` is served from `metodologia.html` (see nginx.conf).
    format: "file"
  },
  redirects: {
    "/enfoque": "/metodologia",
    "/seguridad": "/soluciones"
  },
  server: {
    port: 5174
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      // Astro builds for `esnext`; keep the CSS prefixes (e.g. -webkit-backdrop-filter) of Vite's default browser baseline.
      cssTarget: ["chrome111", "edge111", "firefox114", "safari16.4"]
    },
    server: {
      strictPort: true
    }
  }
});
