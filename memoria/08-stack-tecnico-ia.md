# 08 · Stack Técnico de IA + Proyectos Demo

> Las palabras valen poco sin pruebas. Esta es la referencia de stack para hablar con propiedad
> en entrevistas y los **3 proyectos demo** que nos hacen creíbles (shipped work > promesas).

---

## 🧰 Mapa del stack (IA conversacional, agentes y voz) — 2026

### Capa LLM / razonamiento
- **Modelos:** OpenAI (GPT-4o / o-series), Anthropic Claude, Google Gemini, open source (Llama, Qwen, Mistral).
- **Criterio senior:** elegir por **costo / latencia / calidad** según el caso, no por moda.

### Orquestación de agentes
- **LangChain / LangGraph** (flujos y grafos de estado), **LlamaIndex** (RAG/datos), **Pydantic AI**,
  **OpenAI Agents SDK**. LangGraph brilla en flujos complejos y control de estado.

### RAG (Retrieval-Augmented Generation)
- **Embeddings** + **vector DB**: pgvector (Postgres), Pinecone, Qdrant, Weaviate, Chroma, FAISS.
- Piezas clave: chunking, re-ranking, evaluación de retrieval, citaciones, control de alucinación.

### Voz (Voice AI) — pipeline STT → LLM → TTS + telefonía
| Capa | Opciones |
|------|----------|
| **STT (voz→texto)** | Deepgram, Whisper, AssemblyAI |
| **TTS (texto→voz)** | ElevenLabs, Cartesia, Deepgram Aura |
| **Orquestación voz** | **LiveKit Agents** (custom/observabilidad/escala), **Pipecat** (open source) |
| **Plataformas todo-en-uno** | **Vapi** (velocidad de desarrollo), **Retell** (telephony-native), **Bland** (outbound a volumen) |
| **Tiempo real nativo** | OpenAI Realtime API, Gemini Live |
| **Telefonía** | Twilio, SIP |
- **Métrica reina en voz:** **latencia de extremo a extremo** (objetivo conversacional < ~800ms) +
  manejo de interrupciones (barge-in) + endpointing.

### Backend / infraestructura
- **Python (FastAPI)**, Node/TypeScript, WebSockets, REST, colas, Redis.
- **Despliegue:** Docker, AWS/GCP/Azure, serverless, CI/CD.

### LLMOps / calidad
- **Evals** (LangSmith, Langfuse, promptfoo), observabilidad, tracing, control de costos de tokens,
  guardrails, A/B de prompts, monitoreo de alucinaciones.

> **Guía rápida de elección (voz):** prototipo veloz → Vapi/Retell. Control total, escala y
> observabilidad (>10k min/mes) → LiveKit Agents/Pipecat. Calidad de voz premium → ElevenLabs/Cartesia.

## 🏗️ Los 3 proyectos demo (prueba de habilidad)

> Siguiendo la idea de "3 proyectos demo realistas". Suben a GitHub con README claro + video/Loom +
> métricas. Se enlazan en LinkedIn (Featured), CV (sección Proyectos) y posts.

### Demo 1 — Chatbot RAG de soporte (negocio: ahorro en atención)
- **Pitch:** asistente que responde sobre la base de conocimiento de una empresa con citaciones.
- **Stack:** FastAPI + LangChain/LlamaIndex + pgvector + OpenAI/Claude + frontend simple.
- **Mostrar:** tasa de contención (% resuelto sin humano), citaciones, control de alucinación (evals),
  costo por conversación.
- **Narrativa de negocio:** "resuelve N% de consultas sin humano → ahorro estimado $X/mes".

### Demo 2 — Agente de voz que agenda citas (negocio: ventas/operaciones 24/7)
- **Pitch:** agente telefónico que atiende, responde y agenda en un calendario.
- **Stack:** LiveKit Agents o Vapi + Deepgram (STT) + ElevenLabs (TTS) + GPT-4o + Twilio + Google Calendar API.
- **Mostrar:** latencia <800ms, manejo de interrupciones, transcripción, citas agendadas.
- **Narrativa:** "atiende 24/7, agenda sin intervención humana, no pierde llamadas".

### Demo 3 — Agente LLM de automatización (negocio: ahorro de horas)
- **Pitch:** agente que automatiza un proceso real (clasificar/responder emails, actualizar CRM,
  generar reportes) con function calling.
- **Stack:** LangGraph + OpenAI tools/function calling + integraciones (Gmail/Notion/Sheets/CRM).
- **Mostrar:** pasos del agente, herramientas usadas, guardrails, horas ahorradas estimadas.
- **Narrativa:** "automatiza X horas/semana de trabajo manual".

> 💡 Cada demo debe tener: README con problema→solución→resultado, diagrama de arquitectura,
> video corto, y un párrafo de "impacto de negocio". Eso es lo que convierte un repo en argumento de venta.

## 🎤 Preparación para el screen técnico (donde 92% falla)

Temas a dominar para no caer:
- Diseñar un sistema RAG de punta a punta (chunking, embeddings, retrieval, re-ranking, evals).
- Arquitectura de un agente de voz en tiempo real (latencia, interrupciones, barge-in).
- Cuándo usar RAG vs fine-tuning vs prompting.
- Function calling / tool use y orquestación multi-agente.
- Control de costos y latencia en producción.
- Evaluación de LLMs (cómo medir calidad/alucinación objetivamente).
- System design clásico (APIs, colas, caching, escalado) — sigue cayendo.

## 📚 Fuentes de stack de voz (2026-06-26)
- [Top APIs for Programmable Voice Agents – deepgram.com](https://deepgram.com/learn/top-apis-programmable-voice-agents)
- [Choosing a Voice Agent Platform 2026 – softcery.com](https://softcery.com/lab/choosing-the-right-voice-agent-platform-in-2026)
- [Voice Agent Infrastructure Stack 2026 – digitalapplied.com](https://www.digitalapplied.com/blog/voice-agent-infrastructure-stack-2026-reference)
- [Agentic Voice APIs Compared – rywalker.com](https://rywalker.com/research/agentic-voice-apis)
- [Top AI Voice Agent Platforms for Developers 2026 – videosdk.live](https://www.videosdk.live/blog/top-ai-voice-agent-platforms-developers)
