# ROLE

You are a senior product designer, creative front-end engineer, and Three.js specialist. You have built high-end corporate websites for financial, fintech, and real estate companies. Your job is to fully redesign and rebuild the attached project: the corporate landing page for **DIS / DISHUB**, a Colombian technology lab that builds products for the real estate and financial sectors (proptech / fintech).

I am attaching the complete current project. Read the whole codebase before you write any code.

---

# 1. PROJECT CONTEXT

## Current stack (keep it unless noted)
- React 19 + TypeScript 5.9 + Vite 8, managed with pnpm
- React Router DOM 7
- Tailwind CSS 4 (`@tailwindcss/postcss`)
- Material UI 7 + Emotion (currently mixed with Tailwind; see section 9)
- framer-motion, gsap, three (^0.186), lucide-react, react-helmet-async

## Current structure (Atomic Design)
- `src/components/atoms`, `molecules`, `organisms`, `sections`, `templates`, `pages`
- `src/theme/theme.ts`: MUI theme with the brand palette
- `public/images/logos`: raster PNG logos (`DeviseLogo.png`, `DeviseBusiness.png`, `DeviseMarketplace.png`, `ValuoLogo.png`, `valuo.png`, `BrickFlowLogo.png`, `consultoria.png`) plus `public/images/icons/DeviseIcon.png`
- `public/images/platform`, `backgrounds`: product screenshots and mockups (these will no longer be used for the solutions detail)
- `public/images/benefits`, `consultoria`: SVG icons
- Parallel `.js` files exist next to most `.tsx` files. These are compiled leftovers and technical debt.

## Current routes
`/`, `/nosotros`, `/soluciones`, `/contacto`, `/devise/devise-business`, `/devise/devise-marketplace`, `/valuo`, `/consulting`, `/404`

## Current solutions (the product ecosystem)
1. **Devise Business**: platform for managing real estate/financial assets, investors, portfolio, movements, reports, and analytics.
2. **Devise Marketplace**: real estate investment marketplace (fractional investment, investor accounts, investment opportunities).
3. **Valuo**: property valuation (appraisals, comparables, market trends, heatmaps). It has its own external site.
4. **Transformación con AI / BrickFlow**: strategic AI consulting (analysis, strategy, automation, culture).

Read the existing copy in `src/components/sections`, `molecules`, `organisms`, and `pages` to fully understand each product before you rewrite anything.

---

# 2. MAIN OBJECTIVE

Redesign the project from scratch as a **formal, secure, trustworthy, premium corporate landing page** in a **Glassmorphism** style. Keep the **exact same color palette**. It should feel like a serious financial technology company, the kind a bank, fiduciary, or institutional investor would trust. It must not feel playful, trendy, or startup-generic.

---

# 3. SCOPE CHANGES (MANDATORY)

## 3.1 Remove the separate product pages
Each product will have its own dedicated project/site later. **Delete** these routes, pages, and every component, organism, asset, video, header variant, and style used only by them:
- `/devise/devise-business` (`DeviseBusiness`, `organisms/BusinessSection/*`)
- `/devise/devise-marketplace` (`DeviseMarketplace`, `organisms/MarketPlaceSection/*`)
- `/valuo` (`Valuo`, `organisms/ValuoSection/*`, `HeaderValuo`)
- `/consulting` (`Consulting`, `organisms/ConsultingSection/*`)
- `/soluciones` as a standalone page. Its content moves into a section of the landing.
- `HeaderDevise`, `HeaderSwitcher`. There will be a single global header.
- Unused videos (`public/videos/*`) and screenshots used only by the removed pages

## 3.2 Final route map
- `/`: the main landing page, a single long page with anchored sections
- `/nosotros`: company story, mission, values, team (optional; merge into the landing if it adds nothing)
- `/contacto`: contact page with a secure form (or a landing section plus this route)
- `/politica-de-privacidad`: privacy policy / data protection (Colombian Law 1581 of 2012, Habeas Data), with placeholder legal text clearly marked for legal review
- `*`: redesigned 404 page

## 3.3 Solutions become an ecosystem overview
On the landing, each solution gets a short, compelling summary and an external link ("Conocer más" → a URL constant I will configure later, e.g. `SOLUTION_LINKS` in a config file). No internal detail pages.

---

# 4. VISUAL DESIGN SYSTEM

## 4.1 Color palette (keep exactly these values)

```text
primary.light   #4FD8D8
primary.main    #02B2B2   ← main brand teal
primary.dark    #007E82
secondary.light #27445A
secondary.main  #192B3B   ← main brand navy
secondary.dark  #0F1C27   ← deepest background
info.light      #42C9FF
info.main       #1FA2FF
info.dark       #0A6CB8
background      #192B3B / paper #1F3A4D
text.primary    #FFFFFF
text.secondary  #B0C4D4
```

- Define them as design tokens: CSS variables plus Tailwind 4 `@theme`. Do not hardcode hex values in components.
- You may derive **transparencies** (e.g. `rgb(2 178 178 / 0.12)`) and **gradients** only from these colors. Do not introduce new hues.
- Accent usage should be restrained: teal for primary actions and highlights, blue (`info`) for data and technology accents, navy for surfaces. Use at most one strong accent per viewport.

## 4.2 Glassmorphism, done professionally

- Layered depth: deep navy background (`#0F1C27` → `#192B3B`) with soft, slowly moving blurred gradient orbs in teal/blue behind the glass layers. The glass needs something behind it to be visible.
- Glass surfaces: `backdrop-filter: blur(16–24px) saturate(140%)`, background `rgb(255 255 255 / 0.04–0.08)` or tinted navy, a 1px border `rgb(255 255 255 / 0.08–0.14)`, a subtle inner highlight on the top edge, and soft shadows.
- Build a reusable `GlassPanel` / `GlassCard` component with variants (`subtle`, `default`, `elevated`, `interactive`).
- **Legibility first**: every text on glass must meet WCAG 2.2 AA contrast. Add a solid fallback when `backdrop-filter` is unsupported (`@supports`).
- Keep it elegant and restrained: no neon overload, no rainbow gradients, no heavy glow on text.

## 4.3 Typography

The current font (`'Baloo 2', cursive`) is too informal for a financial company. Replace it with a professional pairing, for example **Manrope**, **Plus Jakarta Sans**, or **Inter** for UI/body, optionally with a refined display face for large headings. Self-host the fonts (`@fontsource` or local woff2 files) with `font-display: swap`. Set a clear type scale with fluid sizes (`clamp()`), tight tracking on large headings, and a comfortable line height for body text.

## 4.4 Layout and details

- 12-column grid, generous whitespace, consistent 8px spacing scale, max content width around 1200–1280px
- Consistent radius scale (e.g. 12 / 20 / 28px), icon style (lucide, same stroke width), and button hierarchy (primary / secondary-glass / ghost / link)
- Mobile-first and fully responsive (360px → 1920px+). Test tablet layouts explicitly.
- Subtle grain/noise texture and fine grid/line motifs are allowed to reinforce the "lab / precision" identity.

---

# 5. LOGOS: REDRAW AS HIGH-QUALITY SVG

The current logos are low-quality PNGs in `public/images/logos` and `public/images/icons`.

- Recreate every logo in use as a **clean, optimized, hand-built SVG**: the DIS/DISHUB brand mark, Devise, Valuo, and BrickFlow/Consulting. Stay **faithful to the original shapes, proportions, and letterforms**. This is a vector refinement, not a new brand identity.
- Provide variants for each: full color, white/monochrome (for glass/dark backgrounds), and an icon-only mark where applicable.
- Use a `viewBox` with no fixed width/height, `currentColor` where monochrome is useful, no embedded raster images, and no unnecessary groups or metadata (SVGO-clean).
- Expose them as React components (e.g. `src/components/brand/LogoDis.tsx`) with an accessible `title` / `aria-label`.
- Also generate the favicon set (SVG favicon plus PNG fallbacks and `apple-touch-icon`) from the brand mark.
- If a logo cannot be reproduced exactly from the PNG, say so explicitly and list what you approximated so I can review it.

---

# 6. COPYWRITING: IMPROVE ALL TEXTS

- **The website content stays in Spanish** (Colombian market). Only this prompt is in English.
- Rewrite every text: headlines, subheadlines, section intros, product descriptions, CTAs, microcopy, form labels, error messages, the 404 page, and SEO metadata.
- Tone: formal, confident, precise, trustworthy, and human. Avoid hype, buzzword soup, exclamation marks, and exaggerated claims. Use one consistent form of address throughout (choose "usted" or "tú" and justify your choice briefly).
- Structure the copy around value: problem → approach → outcome. Lead with benefits, back them with specifics.
- **Do not invent facts**: no fake clients, metrics, certifications, awards, testimonials, or team members. Where real data is needed, add clearly marked placeholders (e.g. `[[CIFRA_REAL]]`, `[[LOGO_CLIENTE]]`) and collect every item in one list at the end of your answer.
- Centralize all copy in content files (e.g. `src/content/es/*.ts`) so it is easy to edit and translate later.

---

# 7. LANDING PAGE STRUCTURE (ADD SECTIONS THAT BUILD IDENTITY)

Propose and build a narrative that ends in conversion. Suggested order (adjust if you have a better rationale):

1. **Header**: sticky glass navbar that condenses on scroll, anchor navigation with an active-section indicator, primary CTA ("Agendar una reunión"), and an accessible mobile menu (focus trap, Esc to close).
2. **Hero**: strong value proposition, supporting line, two CTAs, and an interactive **Three.js hero scene** (e.g. an abstract glass structure of interconnected data nodes / architectural lattice that reacts subtly to the cursor and scroll). Include a scroll cue.
3. **Trust bar**: partner/client logos or institutional signals (placeholders), plus short proof points.
4. **Who we are / Manifesto**: DIS as an innovation lab where real estate, finance, and technology meet.
5. **The challenge**: the sector problems the company solves (rewritten from the current `ProblemSection`).
6. **Our approach / How we work**: an interactive step-by-step process (discovery → design → build → scale) with scroll-driven progress.
7. **Solutions ecosystem**: the four solutions, each with an interactive 3D object (see section 8). Show how they connect as one ecosystem.
8. **Impact / Numbers**: animated counters (placeholders for real data).
9. **Security, compliance & trust**: data protection, traceability, infrastructure, and governance. This is key for a serious financial company. Don't claim certifications that aren't confirmed.
10. **Sectors / Who we serve**: developers, fiduciaries, investors, funds, and real estate firms (based on the current `TargetSection`).
11. **Technology & innovation lab**: capabilities (AI, data, analytics, platforms) presented elegantly.
12. **History / Milestones**: an interactive timeline (reuse the ideas from `HistoriaDIS`).
13. **Values & team culture**
14. **Testimonials**: placeholder-ready carousel, accessible and pausable.
15. **FAQ**: accessible accordion, with FAQ structured data.
16. **Final CTA**: a strong closing with a meeting request.
17. **Contact**: secure form plus direct channels.
18. **Footer**: logo, sitemap, solutions (external links), legal links, social links, and contact.

---

# 8. SOLUTIONS WITH THREE.JS 3D OBJECTS (NO SCREENSHOTS)

The solutions section **must not use screenshots**. Each solution gets a representative, interactive, stylized 3D object built with Three.js, rendered in the brand palette with glass/transmission materials, fine wireframes, and emissive teal/blue accents.

Suggested concepts (refine them if you find better metaphors):

- **Devise Business**: a modular glass architecture of stacked blocks (assets, investors, reports) that assemble into one unified structure, with data pulses flowing between modules. Metaphor: centralization and control.
- **Devise Marketplace**: a translucent building that splits into fractional cells/units that separate on hover and reassemble, with particles flowing toward investor nodes. Metaphor: fractional investment and liquidity.
- **Valuo**: a miniature 3D city/terrain whose extruded blocks form a value heatmap, with a scanning ring/pin sweeping across and highlighting comparables. Metaphor: precise valuation from data.
- **Transformación con AI (BrickFlow)**: a neural lattice of nodes and connections that turns chaotic particles into an orderly flow of "bricks". Metaphor: AI turning complexity into structured processes.

Interaction requirements:

- Subtle idle animation; the object responds to cursor position (parallax/tilt) and hover (reveal/explode or highlight state).
- Selecting a solution (tabs or cards) transitions smoothly between objects (morph, camera move, or crossfade), synchronized with the copy panel.
- Scroll-linked progress where it helps the story.
- Keyboard accessible: the tabs work with the arrow keys, and every canvas has a text alternative (`role="img"` plus `aria-label`, or a visually hidden description).

Technical requirements:

- Use plain `three` (already installed) or `@react-three/fiber` v9 + `@react-three/drei` if fully compatible with React 19. Justify your choice.
- Build the objects procedurally with geometry and shaders. No heavy external models. If a model is really needed, use compressed glTF (Draco/Meshopt) and keep it small.
- Performance: lazy-load the 3D code (`React.lazy` + dynamic `import()`), render only when the canvas is in the viewport (IntersectionObserver), pause when the tab is hidden, cap `devicePixelRatio` at 2, share or reuse renderers where possible, and **dispose** geometries, materials, textures, and renderers on unmount.
- Include a device-capability fallback: on low-end devices, missing WebGL, or `prefers-reduced-motion`, show a static, high-quality SVG illustration of the same concept.
- Target 60fps on a mid-range laptop and a smooth experience on mobile.

---

# 9. ANIMATION & INTERACTION

- Use **framer-motion** for component/UI transitions and **GSAP + ScrollTrigger** for scroll-driven storytelling. Don't use both for the same element.
- Motion principles: purposeful, smooth, and calm. Use ease-out curves, 200–600ms UI durations, and staggered reveals. Nothing flashy or bouncy.
- Ideas: magnetic primary buttons, a glass card spotlight/tilt following the cursor, animated gradient borders on focus/hover, smooth anchor scrolling with header offset, scroll progress indicator, animated counters, section reveal on enter, and a subtle cursor-reactive background.
- Replace the current artificial 1.2s `Loading` delay on every page with a real, fast experience. Show a loader only for genuinely async content such as 3D chunks, using skeletons or elegant placeholders.
- **Respect `prefers-reduced-motion` globally**: disable parallax, auto-animations, and 3D motion, keeping only opacity fades.

---

# 10. UI/UX BEST PRACTICES (REQUIRED)

## Accessibility (WCAG 2.2 AA)

- Semantic HTML landmarks, one `h1` per page, logical heading order
- Visible, on-brand focus styles; full keyboard navigation; a "skip to content" link
- Touch targets ≥ 44px; don't rely on color alone for meaning
- Accessible form labels, inline validation, and errors announced with `aria-live`

## Performance (Core Web Vitals)

- LCP < 2.5s, CLS < 0.1, INP < 200ms on mobile
- Code-split by route and by heavy section; the current single bundle is ~900 kB, reduce it substantially
- Modern image formats (AVIF/WebP) with explicit dimensions, preloading of critical fonts, no layout shift from fonts or 3D canvases (reserve space)

## SEO

- Per-page title/description/canonical/Open Graph/Twitter tags (react-helmet-async)
- JSON-LD: `Organization`, `WebSite`, `FAQPage`
- Update `public/sitemap.xml` and `robots.txt` to the new routes; add an OG image template

## Trust and security (it's a serious financial company)

- The contact form uses client-side validation (e.g. zod), honeypot-based spam protection, rate-limit-ready submission via an abstracted service (endpoint in an env variable), a clear consent checkbox linked to the privacy policy (Law 1581/2012), and never exposes secrets in the frontend.
- Sanitize user input, use `rel="noopener noreferrer"` on external links, and avoid `dangerouslySetInnerHTML`.
- Recommend security headers (CSP, HSTS, X-Frame-Options, Referrer-Policy, Permissions-Policy) for the hosting config.
- Add a cookie/analytics consent banner only if analytics are used (make it configurable).

---

# 11. ENGINEERING REQUIREMENTS

- **Consolidate the styling system**: prefer Tailwind 4 + design tokens + small headless/accessible primitives, and remove MUI/Emotion unless you give a strong reason to keep them. Don't mix two styling systems.
- Delete all the compiled `.js` duplicates; keep TypeScript only (`strict` mode).
- Keep an Atomic Design folder structure; add `src/content`, `src/config` (site config, nav, solution links, contact info), `src/three` (scenes, materials, shaders, hooks), `src/hooks`, and `src/styles`.
- Reusable hooks: `usePrefersReducedMotion`, `useInViewport`, `useWebGLSupport`, `useMediaQuery`.
- ESLint must pass with zero errors, and `pnpm build` must succeed with no TypeScript errors.
- Remove dead code, unused dependencies, unused assets, and unused CSS files.
- Clean, readable code with meaningful names; comments only where they explain a non-obvious decision.

---

# 12. WORKFLOW & DELIVERABLES

Work in this order:

1. **Audit**: summarize what you found in the current project (content, assets, issues, tech debt) in a short list.
2. **Plan**: present the design direction (moodboard in words), design tokens, final sitemap, section-by-section wireframe description, the 3D concept for each solution, and the list of files to delete, create, and modify. **Wait for my approval before implementing** if you are unsure about any major decision; otherwise proceed.
3. **Implement**: deliver complete, production-ready code for every file. No `// ...rest of code` or truncated files.
4. **Deliver**:
   - Full final file tree
   - All code files
   - The new SVG logos
   - Updated `package.json` (added/removed dependencies, with the reason for each)
   - Commands to install, run, lint, and build
   - A list of all content placeholders I must fill in with real data (`[[...]]`)
   - A list of logo approximations, if any
   - A short QA checklist (responsive breakpoints, keyboard navigation, reduced motion, WebGL fallback, Lighthouse targets)

---

# 13. QUALITY BAR

The final result should look like a site built by a top-tier agency for a regulated financial company: calm, precise, elegant, and memorable. The glassmorphism and 3D serve clarity and trust, not decoration. When in doubt, choose **clarity, legibility, and performance** over visual effects.
