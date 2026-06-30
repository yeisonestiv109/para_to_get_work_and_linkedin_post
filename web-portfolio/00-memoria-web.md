# 🌐 Memoria · Web/Portfolio de Yeison

> Carpeta para construir el **portfolio personal** de Yeison (lo pide el campo "Website/Portfolio" de
> Vozy y demás). Objetivo: una web propia, premium, **hecha a mano** (no la típica web de IA), que sea
> prueba viva de que sabe construir. Aquí vive el resumen de la SKILL, el análisis de la referencia y el
> plan. El prompt listo para ejecutar está en `prompt-portfolio-adaptado.md`.

---

## 🧰 Resumen de la SKILL (adrian-saenz-hostinger-premium-website)
Framework para generar webs estáticas premium **arrastrables a Hostinger**, sin build, sin npm, sin
frameworks. Calidad de estudio award-winning con HTML + CSS + JS plano + libs locales (GSAP,
ScrollTrigger; Lenis/Three solo si hace falta).

### Reglas duras (no se rompen)
- **Nada de `<script type="module">`** ni import/export → usar `<script defer>` + patrón **IIFE** + `window.__BRAND__`.
- **`?v=YYYYMMDD`** (cache-buster) en cada `<link>` y `<script>`; **`.htaccess`** en la raíz (cache Hostinger).
- **Scroll nativo** por defecto (`scroll-behavior: smooth`); Lenis solo si el arquetipo lo pide.
- **CSS defensivo** para `.reveal[data-split] { opacity:1; transform:none; }` (que ningún reveal deje texto invisible).
- **No gatear microinteracciones con `prefers-reduced-motion`** (Windows lo trae activado → web plana).
- Imágenes **WebP** (sin mezclar extensiones); contenido crítico **hardcodeado** en HTML (JS solo enriquece).
- Cada init en **`safe(fn,name)`** try/catch; mounts **idempotentes**; splash con **doble red de seguridad**.
- IntersectionObserver threshold ≤ 0.05 + **timeout 6s** que revela lo que siga oculto.
- Datos editables centralizados en `lib/manifest.js`. README al cliente en castellano.

### Flujo de la skill (8 pasos)
intake → preguntas mínimas → **elegir 1 arquetipo** (nunca combinar) → setup scripts (libs/imágenes/WebP)
→ generar `index.html`/`styles.css`/`main.js`/`lib/manifest.js` → `verify_project.py` → server local de
preview → entrega + cómo subir a Hostinger.

### 10 arquetipos (elegir UNO)
01 Editorial Cream · 02 Editorial Dark Warm · 03 **Cinematic 3D (Three.js)** · 04 Glassmorphism ·
05 **Mouse-Reactive Gradient** · 06 Magazine · 07 Brutalist Grid · 08 Liquid Wave · 09 Newspaper · 10 Spline.
> Tabla de la skill: **"Personal brand creator → 05"**, **"Portfolio/studio → 07/03/05"**, **"AI product → 05"**.

---

## 🔎 Análisis de viabilidad: basarnos en gazijarin.com
- **Qué es:** portfolio de Gazi Jarin (ingeniera de software + artista). Estética **dark, personal,
  creativa, con personalidad fuerte**, tipografía grande, animaciones suaves y microinteracciones lúdicas.
- **Limitación técnica:** su sitio es una **SPA en React/Next** (renderiza con JS; el fetch no devuelve HTML).
  → **No podemos basarnos en su código** (la skill es HTML/CSS/JS plano, sin build/framework). Tampoco se
  debe copiar 1:1 (la skill prohíbe clonar una referencia — "diversity guardrails").
- **Veredicto:** ✅ **Viable como referencia ESTÉTICA/UX, no técnica.** Replicamos el *feel* (fondo oscuro,
  acento neón, tipografía enorme, lista de proyectos que se expande, voz personal, reveals suaves) con la
  skill, mapeándolo al **Arquetipo 05 (Mouse-Reactive Gradient)** — el que la propia skill recomienda para
  "AI product / bold portfolio of a single creator". Opcional: un toque de canvas/3D en el hero para "wow",
  sin salirnos del arquetipo.

## 🎯 Decisión de diseño (propuesta)
- **Arquetipo:** **05 Mouse-Reactive Gradient** (dark, near-black cálido + 1 acento neón, tipografía
  masiva, gradiente que sigue el cursor, lista de proyectos en filas que se expanden, count-up de stats).
  - Alternativa si quiere más espectáculo: **03 Cinematic 3D** con un centro 3D (ej. malla/partículas
    tipo red neuronal u onda de audio, guiño a Voice AI). Más "wow" pero más pesado/frágil.
- **Marca:** Yeison Estiven Delgado — AI Software Engineer (Voice AI · Agentes · RAG).
- **Idioma:** ES + opción EN (toggle simple) — útil para reclutadores remotos/USD.
- **CTAs:** Ver proyectos · Contacto (email/WhatsApp) · Descargar CV · GitHub/LinkedIn.
- **Hosting:** carpeta arrastrable a Hostinger (o Netlify/GitHub Pages). Dominio sugerido: yeisondelgado.dev / .com.

## ✅ Estado
- [x] SKILL leída y resumida.
- [x] Referencia analizada (gazijarin = inspiración estética, no base técnica).
- [x] Prompt adaptado creado (`prompt-portfolio-adaptado.md`).
- [x] Decisiones confirmadas: arquetipo 05, acento cian #3DE2FF, bilingüe ES/EN, CV descargable, deploy Vercel.
- [x] **Web construida** en `web-portfolio/site/` (index.html, styles.css, main.js, lib/manifest.js,
  lib/gsap+ScrollTrigger, .htaccess, README, assets/cv). Verificada con `verify_project.py`: 0 errores.
- [ ] Yeison: subir su CV en `assets/cv/Yeison_Delgado_CV.pdf` y desplegar en Vercel.
- [ ] (Opcional) añadir favicon/og-image y fotos reales.
