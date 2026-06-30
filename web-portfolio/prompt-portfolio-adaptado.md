# Prompt adaptado — Portfolio de Yeison (skill: adrian-saenz-hostinger-premium-website)

> Adaptación del prompt original (era para un bar) → **portfolio personal de un AI Software Engineer**.
> Construido para seguirse al pie de la letra con la SKILL. Inspiración estética: gazijarin.com
> (dark, personal, tipográfico, animado) — como referencia, NO como base técnica.

---

<rol>
Eres diseñador y desarrollador web front-end senior, especializado en **portfolios de ingenieros de
software / IA** que necesitan destacar ante reclutadores y empresas tech. Sabes traducir un perfil
técnico en una web con personalidad, que transmite criterio y empuja a contactar. Dominas el diseño
editorial premium, las animaciones modernas, el scroll-driven storytelling y el motion tipográfico.
Construyes webs estáticas robustas en HTML/CSS/JS plano, sin build ni dependencias, arrastrables a
Hostinger.
</rol>

<contexto>
Construyes el portfolio personal de **Yeison Estiven Delgado Ordoñez**, AI Software Engineer (Voice AI,
agentes, RAG, fine-tuning). La web debe:
(a) en 5 segundos dejar claro que es un ingeniero de IA senior que **lleva IA a producción**, con
identidad propia (que NO parezca template ni "web hecha por IA");
(b) empujar a **contactar / agendar / descargar CV**;
(c) mostrar proyectos reales con stack y resultados medibles;
(d) subirse a Hostinger arrastrando una carpeta, sin tocar nada técnico;
(e) ser editable por él mismo (textos, links, proyectos) abriendo `lib/manifest.js` con el Bloc de notas.
Estática, sin build, sin npm, sin servidor. Bilingüe ES/EN con un toggle simple.
</contexto>

<marca>
- Nombre: **Yeison Delgado** (display: "Yeison Delgado" / mega-type).
- Rol: **AI Software Engineer — Voice AI · Agentes · RAG**.
- Tagline (elegir/ajustar): **"Construyo IA que las empresas usan de verdad. En producción, no en una demo."**
  / EN: **"I build AI that ships — in production, not in a demo."**
- Ubicación: Popayán, Colombia · Remoto (LATAM/global).
- Contacto: yeisonestivendelgado109@gmail.com · WhatsApp +57 316 082 2755 ·
  LinkedIn linkedin.com/in/estiven-delgado · GitHub github.com/YeisonDelgado.
- Tono: técnico con criterio, directo, humano, seguro sin arrogancia. "No persigo el modelo de moda;
  persigo el resultado: ahorrar costos, ahorrar tiempo, vender más."
- **Arquetipo objetivo: 05 Mouse-Reactive Gradient** (de la skill). Alternativa: 03 Cinematic 3D.
- Paleta (Mouse-Reactive Gradient, dark): fondo near-black cálido `#0a0a0a`/`#0a0a14`, texto `#fafafa`,
  acento neón a elegir (cian `#3DE2FF` o verde `#00ff88`), con gradientes `#ff006e`/`#8338ec`/`#3a86ff`
  reactivos al cursor.
- Tipografías: **display serif/sans grande** (ej. Space Grotesk o GT-style geométrica) + **body** Inter/Manrope
  + **mono** (JetBrains/IBM Plex Mono) para kickers, fechas, métricas y stack.
</marca>

<alcance>
Web estática de una sola página (single-page con anclas), recorrido editorial tech. Secciones en orden:

1. **Splash de entrada** breve: "YEISON DELGADO" apareciendo + barra de carga fina. Doble red de
   seguridad (CSS 4.5s + hide en JS).
2. **Hero a pantalla completa** con **gradiente reactivo al cursor**: kicker mono "AI Software Engineer ·
   Voice AI · Colombia (Remoto)", mega-titular (nombre o frase potente), tagline editorial, y CTAs
   (Ver proyectos → · Contacto · Descargar CV). Toggle ES/EN arriba.
3. **Marquee tipográfico infinito** con el stack: "Python · LangGraph · RAG · Voice AI · Twilio ·
   Deepgram · FastAPI · AWS · Fine-tuning (LoRA/QLoRA) · LLMs · ..." (mono).
4. **Sobre mí (01)**: numerito "01" en marca de agua; lead potente ("Llevo 14+ meses construyendo IA en
   producción, 100% remoto..."), párrafo soporte, y data en mono (años de exp, inglés C1, ubicación).
   Cero relleno; voz personal.
5. **Proyectos (02) — lista vertical de filas que se expanden** (firma del arquetipo 05): cada fila es un
   proyecto con nombre + año + una línea; al hacer click se expande mostrando problema → solución →
   stack → resultado. Proyectos (de `manifest.js`):
   - **Glovar Prospector** (2026) — Plataforma B2B multi-agente en producción. Stack: LangGraph, FastAPI,
     Modal serverless, Supabase/pgvector, Groq. Resultado: tool-calling estricto anti-alucinación, control
     de costos de tokens (LangSmith), alta concurrencia.
   - **Agente de Voz en tiempo real** (2026, Glovar) — Twilio Media Streams + Deepgram (STT/TTS) + LLM.
     Resultado: latencia de extremo a extremo < 1s, fallbacks para llamadas en producción.
   - **OmniRetail** (2026) — Agente de retail, challenge **Top 5 de 50** → freelance. RAG híbrido
     (SQL + ChromaDB), routing gate de 5 ramas, política "cero alucinaciones".
   - **Edge AI / Botnets** (2025-2026, investigación U. del Cauca) — multi-agente SLM + QLoRA en Jetson.
     Resultado: **F1-Macro 0.998**, inferencia ~93.8 ms, 7-15 W.
   - **WilsonAI** (2026) — Hackathon Talento Tech, **7.º/Top 10**, equipo, 18h. IA + reporte multimodal
     offline-first para rescate animal.
   - **Selene** (2026) — Equipo de 10, Scrum; analítica con ClickHouse + Superset, dashboards y reportes;
     cumplimiento normativo (MEN).
6. **Stack & Skills (03)**: agrupado por bloques (GenAI/Agentes · Voice AI · Backend · Cloud/MLOps · Datos),
   en grid mono, legible.
7. **Impacto (stats) — count-up animado**: ej. "14+ meses en producción", "F1 0.998", "<1s latencia de voz",
   "Top 5/50", "15+ certificaciones".
8. **Certificaciones**: lista compacta (IBM Full Stack, Google Advanced Data Analytics, Google
   Cybersecurity, GCP, Cisco, EF SET C1).
9. **Contacto**: email como **h2 gigante con subrayado animado**, + WhatsApp, LinkedIn, GitHub; mensaje
   corto "¿Tienes un proceso que un agente de IA podría hacer mejor, más barato o más rápido? Hablemos."
10. **Footer**: nombre repetido como display, links, "↑ Volver arriba", año 2026.

**Transversales** (de la skill / arquetipo 05):
- **Gradiente mesh reactivo al cursor** en el hero (radiales en var(--mx)/var(--my)).
- **Tipografía masiva con invert en hover** en titulares de sección y en el email de contacto.
- **Filas de proyecto que se expanden** (acordeón) con reveal suave.
- **Count-up** en las stats.
- **Reveal animations** (GSAP + ScrollTrigger) con CSS defensivo `.reveal[data-split]{opacity:1;transform:none;}`.
- **Cursor personalizado** opcional (anillo) en desktop; oculto en touch.
- **Nav** con anclas 01..03 + CTA "Contacto" diferenciado + burger en móvil + toggle ES/EN.
- Datos editables en `lib/manifest.js` (`window.__BRAND__`: brand, about, projects, skills, stats, certs, contact, i18n).

**Requisitos técnicos no negociables** (de la skill): HTML/CSS/JS plano, sin npm/build/frameworks; solo
`gsap.min.js` + `ScrollTrigger.min.js` locales en `lib/`; IIFE (nada de `type="module"`); `.htaccess` en la
raíz; `?v=YYYYMMDD` en cada `<link>`/`<script>`; cada init en `safe()`; contenido crítico hardcodeado;
imágenes WebP; IntersectionObserver threshold ≤0.05 + timeout 6s; **NO** gatear microinteracciones con
`prefers-reduced-motion`; splash con doble red de seguridad; mounts idempotentes; **README al cliente en
castellano** (cómo abrir, subir a Hostinger, editar `manifest.js`, cambiar fotos/links, y Ctrl+F5/bump si
no actualiza).
</alcance>

<criterios-de-exito>
1. **Primer viewport mata**: en 1s se entiende que es un ingeniero de IA senior con identidad propia. No parece template ni "web de IA".
2. **Contacto a un clic**: CTA visible siempre (nav + hero + contacto + footer). Email y WhatsApp directos; CV descargable.
3. **Proyectos claros**: las filas se expanden mostrando problema→solución→stack→resultado, con métricas reales (F1 0.998, <1s, Top 5/50).
4. **Cero parpadeos**: sin FOUC, sin splash colgado, sin textos invisibles. Doble red de seguridad.
5. **Editable por humano**: cambia textos, proyectos y links desde `lib/manifest.js` con el Bloc de notas. README lo explica.
6. **Listo para arrastrar**: carpeta completa sube tal cual a Hostinger y funciona (cache-buster + .htaccess).
7. **Funciona en `file://`**: doble clic en `index.html` y se ve (sin ES modules, sin fetch obligatorios).
8. **Sin dependencias externas en runtime** (salvo Google Fonts): libs en `lib/`.
9. **Bilingüe**: toggle ES/EN cambia los textos clave sin recargar.
10. **Test final**: si un reclutador entra desde el móvil, ¿entiende en 5s quién es Yeison y cómo contactarlo? Si no, no es entregable.

Si hay que elegir entre rápido y espectacular, elige **espectacular** — pero nunca a costa de la robustez
ni de que el contenido se lea sin JS.
</criterios-de-exito>

> Construye el portfolio siguiendo la SKILL (`SKILL/`), arquetipo **05 Mouse-Reactive Gradient** (o 03 si
> se confirma), cumpliendo todos los criterios de éxito.
