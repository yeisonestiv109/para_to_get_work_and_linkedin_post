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
