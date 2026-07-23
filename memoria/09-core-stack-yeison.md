# 09 · Core Stack de Yeison + Stack más demandado (2026)

> Tu stack NO es teórico: sale de 4 proyectos reales (Glovar Prospector, OmniRetail, Última Milla
> Voice Agent, Botnets Edge). Aquí lo consolidamos, lo cruzamos con lo que más paga el mercado y
> marcamos los gaps a cubrir.

---

## 🎯 Tu CORE STACK (lo que puedes defender en una entrevista, con prueba)

> Regla: en el CV/LinkedIn solo va lo que esté respaldado por un proyecto. Todo lo de abajo lo está.

### Lenguajes
- **Python (avanzado)** — los 4 proyectos. Tu lenguaje insignia.
- **TypeScript / JavaScript** — frontend de Glovar (Next.js 16 / React 19).
- **SQL** — PostgreSQL/Supabase, SQLite.

### GenAI / Agentes (tu diferencial real)
- **Orquestación multi-agente:** LangGraph, LangChain, **Strands Agents SDK**.
- **RAG avanzado:** retrieval, pgvector/ChromaDB, jerarquía de fuentes (SQL > RAG), citaciones.
- **Guardrails y seguridad de LLM:** anti-alucinación, anti prompt-injection, filtros de salida,
  aislamiento de identidad/stateless por usuario (multi-tenant).
- **Fine-tuning / modelos pequeños:** LoRA/PEFT, QLoRA, Unsloth, SLMs (Llama-3.2-1B, Qwen2.5).
- **Prompt engineering** y diseño de "routing gates" / máquinas de decisión.
- **LLM providers:** Groq (Llama 4 Scout/Maverick, Qwen3-32B, Whisper), Hugging Face. AWS Bedrock (ver gaps).

### Voice AI (nicho caliente y escaso)
- **Pipeline de voz en tiempo real:** Twilio Media Streams (telefonía), **Deepgram** (STT nova-3
  streaming + TTS Aura), VAD, manejo de audio mulaw↔PCM, baja latencia.
- LLM en el loop de voz (Groq Llama-4-Maverick), orquestación con LangGraph.

### Backend
- **FastAPI + Uvicorn**, REST, WebSockets, async, BackgroundTasks, ThreadPoolExecutor (concurrencia),
  microservicios, diseño dirigido por eventos, idempotencia, JWT/auth.

### Datos / Vector
- **PostgreSQL (Supabase) + pgvector**, RLS (Row Level Security / multi-tenant), SQLite, ChromaDB.

### Cloud / Infra / MLOps
- **AWS** (Lambda, Bedrock — uso real confirmado), **Google Cloud** (certificado: Terraform, IAM,
  DevOps Workflows), **Modal** (serverless, autoescalado), **Docker**, CI/CD, rotación de secretos/keys.
- **Observabilidad LLM:** LangSmith (tracing/eval), optimización de costos de tokens.
- Edge AI: **NVIDIA Jetson Orin Nano**, PyTorch, inferencia optimizada (FP16, 93.8 ms).

> ✅ **Gap de cloud resuelto:** AWS (real) + GCP (certificado) → ya no es debilidad, es fortaleza dual.

### Frontend (capacidad full-stack)
- **Next.js 16, React 19, TailwindCSS, Radix UI, Recharts** (dashboards).

### ML / Research
- scikit-learn, SHAP, feature engineering, PyTorch, métricas (F1-Macro, MCC), datasets a escala (1.44M).

---

## 📊 Stack MÁS DEMANDADO en 2026 (research de mercado)

> Fuentes: roadmaps y guías de hiring 2026 (ver `03-investigacion-reclutamiento.md` y abajo).
> Contexto: ofertas de AI Engineer **+143% interanual**, premium salarial **~56%**.

| Categoría | Lo que el mercado pide | ¿Lo tienes? |
|-----------|------------------------|-------------|
| Lenguaje base | **Python 3.10+** (en ~71% de ofertas IA) | ✅ Sí |
| LLM APIs | OpenAI, Anthropic Claude, (Groq, Gemini) | 🟡 Groq sí; OpenAI/Anthropic conviene demostrar |
| RAG | retrieval, chunking, re-ranking, evals | ✅ Sí (muy fuerte) |
| Agentes | agentic workflows, tool-calling, multi-agente | ✅ Sí (diferencial) |
| Vector DBs | Pinecone, Weaviate, pgvector, Chroma, Qdrant | ✅ pgvector/Chroma; Pinecone/Qdrant fácil de sumar |
| Voice AI | STT/TTS/telefonía, baja latencia | ✅ Sí (nicho escaso) |
| LLMOps/Evals | observabilidad, evals automatizadas, costos | ✅ Sí (LangSmith) |
| Backend prod | FastAPI, APIs, async, microservicios | ✅ Sí |
| Cloud | **AWS** (líder), GCP, Azure + Docker/K8s | 🟡 Modal/Docker sí; **AWS/K8s a reforzar** |
| MLOps | Docker, CI/CD, (Kubernetes), monitoring | 🟡 Docker/CI sí; K8s a sumar |
| Structured outputs | Pydantic, function calling, JSON schema | ✅ Sí (tool-calling) |
| System design IA | diseñar pipelines escalables y medibles | ✅ Sí (demostrable) |

**Lectura:** estás **por encima del promedio** justo en lo más escaso y mejor pagado (agentes, RAG,
voz, guardrails). Tu ventaja es que ya lo llevaste a **producción** y lo **mediste**, no solo tutoriales.

## 🧩 GAPS a cerrar (priorizados — y se cierran rápido con tu base + IA)

1. **OpenAI / Anthropic (media):** dominas Groq, pero la mayoría de ofertas nombran OpenAI/Claude.
   → Acción: porta uno de tus proyectos a OpenAI o Claude (1 día) para poder decir "experiencia con ambos".
2. **Kubernetes (media-baja):** aparece en ofertas enterprise/MLOps.
   → Acción: dockerizas (ya sabes) + un despliegue básico en K8s para tener el término defendible.
3. **Evals formales (media):** tienes LangSmith; formaliza un harness de evaluación con métricas
   (accuracy/alucinación) en un repo público → es oro en entrevistas de IA.
4. **Pinecone/Qdrant (baja):** ya dominas pgvector/Chroma; tocar Pinecone una vez cubre la keyword.

> ✅ **AWS YA NO es gap:** confirmaste uso real de Lambda + Bedrock, y tienes certificaciones de GCP.
> Tu cloud es ahora una fortaleza dual (AWS + GCP), no una debilidad.

> Filosofía acordada: con fundamentos sólidos + IA, cerrar un gap es cuestión de días, no meses.
> Pero NO escribas en el CV nada que no hayas tocado de verdad: primero construyes, luego lo declaras.

## 🏷️ Titular de stack (para CV/LinkedIn, una línea)

> **Python · LangGraph · LangChain · Strands · RAG · Voice AI (Twilio/Deepgram) · FastAPI ·
> Supabase/pgvector · Groq/HF · Modal · Docker · LangSmith**

## 📚 Fuentes de demanda de stack (2026-06-26)
- [2026 AI/GenAI Engineer Roadmap – hashnode.dev](https://muddukrishna.hashnode.dev/one-million-jobs-the-2026-ai-engineer-gen-ai-developer-roadmap)
- [How to Become an AI Engineer 2026 – dataquest.io](http://www.dataquest.io/blog/ai-engineer-roadmap/)
- [AI Engineering Career Path 2026 – dataexpert.io](https://dataexpert.io/blog/ai-engineering-career-path-complete-guide-2026)
- [AI Engineer Skills Checklist – scaler.com](https://www.scaler.com/topics/ai-engineer-skills-2026-checklist-hiring-teams-want/)
- [AI Engineer roadmap skills/tools – letsdatascience.com](https://letsdatascience.com/blog/ai-engineer-roadmap-2026-skills-tools-and-career-path)

> Contenido parafraseado/resumido de las fuentes para cumplir restricciones de licencia.
