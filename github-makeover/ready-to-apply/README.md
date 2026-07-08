# Ready-to-apply — GitHub Makeover para `YeisonDelgado`

Todo el makeover está construido aquí. Solo falta **ejecutarlo con acceso de escritura a
`YeisonDelgado`**. Contenido:

- `profile/README.md` — Profile README (repo especial `YeisonDelgado/YeisonDelgado`). Reemplaza `[PORTFOLIO_URL]`.
- `case-studies/glovar-prospector-casestudy/README.md` — case study de la plataforma multi-agente (código privado).
- `case-studies/voice-agent-ultima-milla-casestudy/README.md` — case study del agente de voz (código privado).
- `snippets/omniretail-README-tldr.md` — TL;DR para pegar en el README de OmniRetail.
- `snippets/email-services.gitignore`, `snippets/ryu-controller.gitignore` — higiene.
- `apply.sh` — aplica TODO con un comando usando `GITHUB_TOKEN`.

---

## ⚠️ Por qué no lo apliqué desde esta sesión (estado, no excusa)
El sandbox hace `git push` a través de un **gateway atado a la cuenta conectada (`yeisonestiv109`)**.
Al intentar pushear a `YeisonDelgado` devolvió **HTTP 403** (sin permiso). El `GITHUB_TOKEN` que subiste
a *secretos* va al servidor MCP del gateway, **no** a las variables de entorno de mi shell (lo verifiqué:
no está disponible). Como `github.com` sí es alcanzable directo desde el sandbox, con el token **en el
entorno** `apply.sh` funcionaría desde aquí saltando el gateway.

## ✅ Formas de ejecutarlo (elige una)

**Opción A — Yo lo corro desde el sandbox (ideal):**
Haz que `GITHUB_TOKEN` quede disponible como **variable de entorno del sandbox** (si tu mecanismo de
secretos lo inyecta al shell, quizá requiera reabrir la sesión). Cuando esté, avísame y ejecuto
`bash apply.sh` — queda todo hecho en minutos.

**Opción B — Nueva sesión de Kiro conectada a `YeisonDelgado`:**
Abre una sesión/checkout con los repos de `YeisonDelgado` conectados por la integración de GitHub; ahí
el gateway sí puede escribir. Pásale esta carpeta y que corra `apply.sh` (o los pasos).

**Opción C — Manual por la web (sin terminal):**
1. Crea el repo `YeisonDelgado` (mismo nombre que tu usuario) → pega `profile/README.md` como `README.md`.
2. Crea `glovar-prospector-casestudy` y `voice-agent-ultima-milla-casestudy` → pega sus README.
3. En cada repo existente: **Edit** el "About" con las descripciones de `../repo-descriptions-y-pins.md`.
4. Renombra `OmniBot_Agente_Autonomo`→`OmniRetail-Agent` y el `C-Users-...`→`NSFNET-Topology` (Settings).
5. Archiva `Secuencias_lEDS` y `SecuritySystem_12` (Settings → Archive).
6. Añade `.gitignore` (snippets) a Email y Ryu; pega el TL;DR en el README de OmniRetail.
7. **Customize pins** → elige los 6 (ver `../repo-descriptions-y-pins.md`).

## Token: permisos mínimos del PAT (fine-grained)
- **Contents:** Read/Write (subir READMEs, .gitignore).
- **Administration:** Read/Write (renombrar, archivar, cambiar visibilidad).
- Repos: los de `YeisonDelgado` (o "All repositories" de esa cuenta).
- ⚠️ Nunca pegues el token en el chat. Úsalo como variable de entorno o en el mecanismo de secretos.
