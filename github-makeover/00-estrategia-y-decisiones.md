# GitHub Makeover — Estrategia y decisiones (basado en fuentes + auditoría real)

> Fecha: jul 2026. Preparado analizando tus repos REALES (clonados) + patrones de 10 perfiles senior de
> alto nivel (creadores de ripgrep, Redis, Express.js, Ruff, vim-go…). Decisiones por evidencia, no
> suposiciones. Ejecuta con `github-makeover/profile-readme-YeisonDelgado.md` y
> `github-makeover/repo-descriptions-y-pins.md`.

---

## 0) Decisión de marca: ¿qué cuenta es la pública? → **`YeisonDelgado`**
Tienes 2 cuentas: `YeisonDelgado` (13 repos públicos, tus proyectos reales) y `yeisonestiv109`
(9 repos, casi todos privados: búsqueda de empleo, comerciales, tesis).

**Recomendación (fuerte, con razón):** la cara pública profesional es **`YeisonDelgado`** porque:
- Es tu **nombre real** → mejor marca. Los perfiles top "dicen qué haces", no usan handles con números.
  Un handle tipo `...109` lee a cuenta secundaria/junior.
- Ahí **ya viven tus proyectos reales** (mover 6+ repos al otro handle es trabajo inútil).
- Ya es coherente con tu **CV y LinkedIn** (ambos apuntan a `github.com/YeisonDelgado`).

**`yeisonestiv109` = tu workspace PRIVADO** (búsqueda de empleo, comerciales en progreso, tesis, agentes
de voz). Todo privado. Acción pendiente que pediste: **hacer privado `estudio_skills_ia_claude`**
(hoy es el único público ahí; al privatizarlo, esa cuenta queda 100% privada y consistente).
> ✅ Nota: `para_to_get_work_and_linkedin_post` ya está **Private** (bien). No lo hagas público nunca.

---

## 1) Verdad incómoda sobre el perfil que te gustó (Btelgeuse) — con fuente
El perfil de Joanne/Btelgeuse es **atractivo y muy superior a un perfil vacío**, y sirve como
inspiración de ESTRUCTURA (intro clara, "qué hago", proyectos fijados con descripción). **Pero** su
estilo decorado (grid de íconos de tech stack + tarjetas de stats + animaciones) **lee como "junior/
trying too hard"** para ingenieros senior que evalúan. El análisis de 10 perfiles de élite es explícito:
> "El código es el perfil. Mientras más decorado el README, menos hablan los repos por sí solos."
> Qué NO hacer: badge walls, stats cards, grids de 20 íconos, animaciones de tipeo, secciones
> "Let's connect!". — [Cómo estructurar un perfil como senior](https://gist.github.com/NathanNorman/2911f33fbf13af4d9d56f19353d3fa92)

**Nuestro estilo (punto medio, respaldado):** README profesional **conciso (~120-160 palabras)** — el
modelo "charliermarsh (~100 palabras)" que el análisis nombra como la MEJOR opción tradicional — con:
qué haces, 3 proyectos destacados en formato problema→resultado, contacto y **un solo CTA**. Sin muros
de badges ni stats cards. Ver `profile-readme-YeisonDelgado.md`.

## 2) Qué mira un reclutador/técnico (orden real) — fuentes
1. Profile README (juicio/presentación) → 2. 6 repos fijados → 3. calidad de cada README (¿se entiende
en 10s?) → 4. actividad/constancia → 5. el código (roles técnicos). **El README pesa más que el
proyecto**: buscan arquitectura explicada, decisiones/trade-offs, fallos reconocidos y evidencia de uso
real; framework ganador **Problema → Solución → Resultado (métricas)**.
— [Underdog.io](https://landing.underdog.io/blog/what-hiring-managers-look-for-on-github),
[KindaTechnical](https://www.kindatechnical.com/technical-interview-preparation/github-portfolio-what-recruiters-actually-look-for.html),
[Hyperskill](https://hyperskill.org/blog/post/building-a-developer-portfolio-in-2026-what-actually-gets-attention)

---

## 3) Auditoría repo-por-repo (`YeisonDelgado`) + acción
> Categorías: **PIN** (fijar, top 6) · **KEEP** (mantener, mejorar descripción) · **RENAME** ·
> **ARCHIVE** (archivar, resta señal) · **FORK** (fork ajeno, no cuenta).

| Repo | Estado README | Acción | Motivo |
|------|---------------|--------|--------|
| **OmniBot_Agente_Autonomo** (OmniRetail) | ⭐ Excelente (diagramas, retrieval híbrido, jerarquía de verdad) | **PIN** + renombrar a `OmniRetail-Agent` + añadir TL;DR arriba | Tu pieza estrella de IA; matchea RAG/agentes/anti-alucinación. |
| **LangGraph_Bootnet_Detection** | ⭐ Fuerte (F1 0.998, LangGraph+SLM edge) | **PIN** + descripción | Research aplicado con métrica potente; único y memorable. |
| **Restaurant_System_V2** | Bueno (full-stack estándar) | **PIN** + descripción | Prueba full-stack real (NestJS+Next+PG+Redis+Docker). |
| **Server_Rutaya** | Bueno (diagramas + LICENSE) | **PIN** + descripción + borrar `GUIA_GITHUB.md` | Backend/API + geodatos en tiempo real. |
| **Ryu_Controller_v1** | Bueno | **PIN** + descripción + quitar `__pycache__` del tracking | SDN/redes: diferenciador (tu base telecom). |
| **Email-Services-with-Docker** | Correcto | **PIN o KEEP** + descripción + añadir `.gitignore` + sacar `maildata/` | DevOps/Docker (Postfix/Dovecot); buen contrapeso de infra. |
| **VitaMind_App2** | (revisar) | **KEEP** + descripción | Muestra Kotlin/móvil + IoT (VitaminD). Alterno a fijar. |
| **BootcampTalentoTech** | Sin descripción | **ARCHIVE** (o KEEP con descripción si tiene contenido propio) | Parece material de curso → baja señal. |
| **Aplicacion-para-Cursos-en-Linea** | (revisar) | **KEEP con descripción** o ARCHIVE | Evaluar si es tuyo/coursework. |
| **C-Users-estiv-PycharmProjects-NSFNET_Topology12** | Nombre auto-generado | **RENAME** a `NSFNET-Topology` o **DELETE/merge** en Ryu | Nombre tipo ruta de PC = red flag de descuido. |
| **SecuritySystem_12** (2023, PIC16F887) | HTML/doc | **ARCHIVE** + descripción | Antiguo; muestra electrónica pero baja señal para IA. |
| **Secuencias_lEDS** (2023, ensamblador) | — | **ARCHIVE** | Académico temprano; poca señal. |
| **flexile** (fork de biniyam69) | fork | **UNPIN/DELETE** | Fork ajeno sin aporte visible = red flag. No fijar jamás. |

**Pines recomendados (6):** OmniRetail-Agent · LangGraph_Bootnet_Detection · Restaurant_System_V2 ·
Server_Rutaya · Ryu_Controller_v1 · Email-Services-with-Docker.
(Mezcla ganadora: agente IA + research IA/ML + full-stack + backend/API + redes/SDN + DevOps. Si
prefieres mostrar móvil, cambia Email por VitaMind_App2.)

---

## 4) Seguridad — auditoría ejecutada (resultado: LIMPIO, con 3 higienes menores)
✅ **Sin secretos:** no hay API keys/passwords hardcodeados. `OmniBot` usa `GROQ_API_KEY` por variable de
entorno (buena práctica). No hay `token.json`/`client_secret`/`credentials.json` commiteados. El modelo
pesado `.gguf` **no** está subido (solo `robust_scaler.pkl` de 1KB). `dovecot.pem` es un **certificado
público** (no llave privada).

Higienes menores a corregir (no urgentes, pero pulen la imagen):
- [ ] `Email-Services-with-Docker`: añadir `.gitignore`; dejar de trackear `maildata/` (buzones demo);
      verificar que en `dovecot/ssl/` no haya un `.key` privado (solo se vio `.pem` = cert público).
- [ ] `Ryu_Controller_v1`: quitar `__pycache__/` del tracking (ya tiene `.gitignore`, falta la regla).
- [ ] Revisión final por repo antes de tocar nada: `grep -rInE "(api[_-]?key|secret|password|token)"`
      excluyendo `os.environ/getenv/process.env`.

---

## 5) Acceso: ¿qué necesito para editar `YeisonDelgado` yo mismo?
- **Pude CLONAR** tus repos públicos sin token (red abierta) y por eso audité de verdad. ✅
- Para **hacer push** de las mejoras a `YeisonDelgado`, una sesión de Kiro necesita **acceso de escritura
  a esa cuenta**. Esta sesión está conectada a la cuenta de este repo (`yeisonestiv109`), así que lo más
  limpio es una de estas 2 vías:
  1. **Recomendado:** abre una **nueva sesión de Kiro** con los repos de `YeisonDelgado` conectados por
     la misma integración de GitHub que usaste aquí. Esa sesión ya podrá commitear/pushear.
  2. **Personal Access Token (fine-grained)** de la cuenta `YeisonDelgado`, con permiso *Contents:
     Read/Write* solo en los repos objetivo. ⚠️ **NUNCA pegues el token en el chat** (queda en el
     historial = secreto filtrado). Configúralo como credencial de git en el entorno de esa sesión.
- **Cambiar visibilidad** (`estudio_skills_ia_claude` → Private) **no** tiene API en el tooling; se hace
  en la UI: repo → **Settings → General → Danger Zone → Change visibility → Private**.

## 6) Plan de ejecución (orden)
1. (Tú, 1 min) Privatiza `estudio_skills_ia_claude` en `yeisonestiv109`.
2. (Tú o nueva sesión) En `YeisonDelgado`: crea el repo especial `YeisonDelgado` y pega el contenido de
   `profile-readme-YeisonDelgado.md` como `README.md` → aparece el Profile README.
3. Aplica descripciones y renombres (`repo-descriptions-y-pins.md`) y fija los 6 pines.
4. Archiva/borra los de baja señal (tabla §3). Quita el fork `flexile` de la vista.
5. Corrige las 3 higienes de seguridad (§4).
6. Revisa el perfil en incógnito: en 3 segundos, ¿se entiende **qué haces**, **qué construyes** y que
   **eres serio**? Si sí → listo.

## 📚 Fuentes
- [Estructurar perfil como senior (análisis 10 perfiles)](https://gist.github.com/NathanNorman/2911f33fbf13af4d9d56f19353d3fa92)
- [Underdog.io – hiring managers on GitHub](https://landing.underdog.io/blog/what-hiring-managers-look-for-on-github)
- [KindaTechnical – recruiters on GitHub](https://www.kindatechnical.com/technical-interview-preparation/github-portfolio-what-recruiters-actually-look-for.html)
- [Hyperskill – developer portfolio 2026](https://hyperskill.org/blog/post/building-a-developer-portfolio-in-2026-what-actually-gets-attention)
- [Medium – tu README es lo que te contrata](https://medium.com/@garvanand03/your-ai-project-isnt-what-gets-you-hired-your-readme-is-3e5b3909bb8f)
- [GitHub Docs – repository visibility](https://docs.github.com/articles/setting-repository-visibility)
