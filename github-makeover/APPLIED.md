# GitHub Makeover — APLICADO ✅ (registro final)

> Ejecutado sobre `github.com/YeisonDelgado` con PAT fine-grained (Contents + Administration + All repos).
> Verificado con la API (HTTP 200/201). Fecha: jul 2026.

## Cambios publicados (LIVE)
- **Profile README** creado en el repo especial `YeisonDelgado` (sin badge walls; estilo senior).
- **Case studies creados y publicados** (README-only, sin código privado):
  - `glovar-prospector-casestudy` — plataforma multi-agente B2B.
  - `voice-agent-ultima-milla-casestudy` — agente de voz en tiempo real.
- **OmniRetail-Agent**: renombrado desde `OmniBot_Agente_Autonomo` + **TL;DR** recruiter-friendly en el README.
- **NSFNET-Topology**: renombrado desde `C-Users-estiv-PycharmProjects-NSFNET_Topology12` + descripción.
- **Descripciones ("About")** en: OmniRetail-Agent, LangGraph_Bootnet_Detection, Restaurant_System_V2,
  Server_Rutaya, Ryu_Controller_v1, Email-Services-with-Docker, VitaMind_App2, y ambos case studies.
- **Higiene** (PR/commit a main): `.gitignore` en `Email-Services-with-Docker` y `Ryu_Controller_v1`;
  se dejó de trackear `maildata/`, `__pycache__/` y el cert `dovecot.pem`.
- **Archivados** (baja señal): `Secuencias_lEDS`, `SecuritySystem_12`, `BootcampTalentoTech`.

## Pendiente MANUAL (no hay API pública)
1. **Fijar los 6 pines** en el perfil → *Customize your pins*:
   `OmniRetail-Agent`, `LangGraph_Bootnet_Detection`, `Restaurant_System_V2`, `Server_Rutaya`,
   `Ryu_Controller_v1`, `Email-Services-with-Docker`.
2. **`flexile`** (fork ajeno): opcional, quítalo/bórralo (no aporta señal). El PAT no borra repos por seguridad.
3. **Añadir descripción** (opcional) a `Aplicacion-para-Cursos-en-Linea` o archivarlo.

## 🔐 SEGURIDAD — hazlo ya
El PAT quedó **expuesto en el chat**. Revócalo/rótalo:
GitHub → Settings → Developer settings → Personal access tokens → Fine-grained → (tu token) → **Revoke**.


---

## Actualización 2 — READMEs reescritos + higiene de código (jul 2026)
Todos los READMEs quedaron **en inglés, consistentes, con diagramas Mermaid** fieles al código real
(revisado clonando cada repo). Se eliminó todo texto "de IA"/placeholder.

**READMEs reescritos (9 repos):**
- Fijados: `OmniRetail-Agent`, `LangGraph_Bootnet_Detection`, `Ryu_Controller_v1`, `Restaurant_System_V2`,
  `Server_Rutaya`, `Email-Services-with-Docker`.
- Otros: `VitaMind_App2` (tenía el README del template ajeno Punch Through → ahora describe VitaminD),
  `Aplicacion-para-Cursos-en-Linea` (tenía las instrucciones del ejercicio → ahora describe la app Django),
  `NSFNET-Topology` (no tenía README → creado).

**Higiene de código aplicada (seguridad/limpieza):**
- `Restaurant_System_V2`: eliminado `.git_backup_v2/` (repo git anidado commiteado); **contraseña de
  Postgres movida a variable de entorno** (`${POSTGRES_PASSWORD}`) + `.env.example`.
- `Email-Services-with-Docker`: se dejó de trackear `dovecot/ssl/dovecot.key` (**llave privada**) y
  `dovecot/passwd`; `.gitignore` actualizado.
- `Server_Rutaya`: eliminado `GUIA_GITHUB.md` (sobrante).
- `Ryu_Controller_v1`: eliminado el texto redactado por IA ("si quieres que yo implemente…").
- `NSFNET-Topology`: se dejó de trackear `__pycache__/`.

Los borradores fuente de los READMEs quedaron versionados en `github-makeover/new-readmes/`.


---

## Actualización 3 — Alineación con READMEs canónicos + portfolio + LICENSE (jul 2026)
Contrastado con los READMEs fuente del repo (`README_prospector.md`, `README_agent_botnets.md`,
`README_ultima_milla.md`, `README_omniretail.md`) y el portfolio web.

- **Profile README:** añadido enlace al portfolio (https://yeisondelgadowebportfolio.vercel.app/) y
  **inglés C1 (EF SET)** (coherente con el portfolio y el certificado).
- **Tesis vs Prospector (diferenciados):** el repo público `LangGraph_Bootnet_Detection` se documentó
  como la versión simplificada (grafo lineal, Qwen2.5/Ollama, 14 features); las métricas **F1 0.998 /
  ~93.8 ms** se atribuyen correctamente a la **tesis** (multi-agente, 46 features, Llama-3.2-1B FP16 en
  Jetson) en una sección "Research context". Ya NO se mezcla con el Prospector.
- **`glovar-prospector-casestudy`:** reescrito con la arquitectura real (pipeline de 4 scripts
  main/news_scraper/lead_scraper/validator, Tavily + Apify + Apollo + Hunter, RAG validator + copywriter,
  scoring ICP fit+intent, Modal serverless, Supabase RLS multi-tenant, rotación de 9 claves Groq).
- **`voice-agent-ultima-milla-casestudy`:** reescrito con el stack real (Twilio Media Streams, Deepgram
  nova-3 STT + Aura TTS, Groq Llama-4-Maverick, LangGraph, Supabase pgvector, audioop, VAD, <1s latencia).
- **OmniRetail:** añadido el **routing gate de 5 ramas** y el **aislamiento stateless por usuario**
  (FileSessionManager + guardrail de salida).
- **Buenas prácticas de código:** `LICENSE` MIT añadida a OmniRetail-Agent, LangGraph_Bootnet_Detection,
  Ryu_Controller_v1, Email-Services-with-Docker, Restaurant_System_V2; `.env.example` en OmniRetail y Email.
