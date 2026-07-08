# Descripciones (About) por repo + TL;DR del flagship — `YeisonDelgado`

> La descripción "About" (el campo corto del repo) es lo primero que se lee tras el nombre. Regla senior:
> **una línea, minúscula, sin marketing, di QUÉ hace**. Copia/pega estas.

## Descripciones "About" (campo corto de cada repo)
- **OmniRetail-Agent** (ex OmniBot_Agente_Autonomo):
  `Autonomous retail support agent (Strands): hybrid SQL+vector retrieval, memory, and a truth hierarchy that removes hallucinations.`
- **LangGraph_Bootnet_Detection**:
  `Agentic IoT botnet detection on edge hardware — LangGraph orchestration + a fine-tuned Small Language Model (F1-macro 0.998).`
- **Restaurant_System_V2**:
  `Full-stack restaurant management system — NestJS + Next.js + PostgreSQL + Redis, containerized with Docker.`
- **Server_Rutaya**:
  `Backend + admin dashboard for a public-transport app in Popayán — routing, fares and real-time bus tracking over a REST API.`
- **Ryu_Controller_v1**:
  `SDN routing over the NSFNET topology in Mininet — Ryu controller with Dijkstra routing and a web panel.`
- **Email-Services-with-Docker**:
  `Self-hosted email stack with Docker Compose — Postfix (MTA), Dovecot (MDA) and SpamAssassin.`
- **VitaMind_App2**:
  `Android app (Kotlin) for stress monitoring — part of the VitaminD IoT + AI wellbeing prototype.`
- **NSFNET-Topology** (renombrar el `C-Users-estiv-...`):
  `NSFNET network topology in Mininet — companion to the Ryu SDN controller project.`

## Renombres
- `OmniBot_Agente_Autonomo` → **`OmniRetail-Agent`** (claridad + marca del proyecto).
- `C-Users-estiv-PycharmProjects-NSFNET_Topology12` → **`NSFNET-Topology`** (o borrar y unir a Ryu).

## Archivar (Settings → Archive) — restan señal para roles de IA
`BootcampTalentoTech` (si es solo material de curso), `SecuritySystem_12`, `Secuencias_lEDS`.
`flexile` (fork ajeno) → quitar de pines; borrar si no aportaste commits.

## Pines (Customize your pins → elige 6)
1. OmniRetail-Agent  2. LangGraph_Bootnet_Detection  3. Restaurant_System_V2
4. Server_Rutaya  5. Ryu_Controller_v1  6. Email-Services-with-Docker

---

# TL;DR recruiter-friendly para el flagship (OmniRetail-Agent)
> Tu README de OmniRetail ya es EXCELENTE, pero arranca directo en detalle. Pega este bloque JUSTO
> DEBAJO del título para que un reclutador (o un no-técnico) capte valor en 10 segundos, antes del
> índice. Mantiene lo demás igual.

```markdown
> **TL;DR** — An AI customer-support agent for e-commerce that answers product, policy and order
> questions **without making things up**. The hard problem is trust: I combined lexical + semantic
> retrieval with a strict rule — *a hard fact from the database beats a fuzzy document match* — plus
> memory compaction to control context cost. Result: hallucinations driven to ~zero on tracked metrics.
> **Stack:** Strands Agents · Groq (Qwen/Llama) · SQLite · ChromaDB · SentenceTransformers.
> **My role:** end-to-end design and build (retrieval engine, memory, anti-hallucination rules, telemetry).
```

# Sugerencia: repos "case study" para lo PRIVADO (crear en `YeisonDelgado`, README-only, SIN código)
- **`glovar-prospector-casestudy`** — plataforma multi-agente de prospección B2B (privada por NDA):
  problema, tu rol, arquitectura (diagrama), decisiones/trade-offs, resultados con métricas. Sin código.
- **`voice-agent-casestudy`** — agente de voz en tiempo real (Twilio + Deepgram) para logística:
  reto de latencia, cómo lo resolviste, impacto. Sin código propietario.
> Así muestras el PENSAMIENTO y el RESULTADO de lo que no puedes publicar, de forma honesta y segura.
