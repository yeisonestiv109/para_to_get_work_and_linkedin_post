# 10 · CV Corregido (versión ATS + senior)

> Esta es la versión reescrita de tu CV. Corrige las incoherencias, suma métricas reales de tus
> proyectos y alinea el stack con lo que puedes defender. **Todo lo marcado `[CONFIRMAR]` necesita
> tu visto bueno** (no invento fechas ni datos).
>
> Formato pensado para ATS: una columna, sin tablas/imágenes, encabezados estándar, contacto en el
> cuerpo. Cópialo a Google Docs/Word para exportar el PDF de texto.

---

## ⚠️ Decisiones de corrección aplicadas (léelas antes)

1. **Fechas solapadas → reestructurado como "Freelance / Contract AI Engineer".**
   Tu CV mostraba Glovar, OmniRetail y Mediscribe **al mismo tiempo** (ej. Ene–Abr 2026 en los 3) +
   la universidad. Un reclutador lee eso como 3-4 empleos full-time simultáneos = **bandera roja**
   (o exageración o moonlighting). La solución senior y honesta: agruparlos como **proyectos de
   cliente bajo un paraguas freelance/contractor**, que SÍ permite trabajos concurrentes sin sospecha.
   → Si en realidad fueron empleos formales secuenciales, dame las fechas reales y lo ajusto.

2. **"+3 años" → lo expresamos de forma defendible.** El timeline solo muestra roles desde 2025.
   Propongo: *"3+ años construyendo software, con 2+ años especializado en IA generativa en producción"*.
   → Si tienes experiencia/proyectos anteriores a 2024 (universidad, freelance, personales), pásalos
   y los sumamos para sostener el "+3" con evidencia.

3. **AWS alineado a la realidad.** Tus proyectos corren en **Modal + Supabase + Groq**, no AWS.
   Dejé AWS como "familiaridad/en aprendizaje" y lideré con lo que dominas. Si construyes 1 demo real
   en AWS Bedrock/Lambda, lo subimos a "experiencia". (Ver gaps en `09-core-stack-yeison.md`.)

4. **Métricas reales añadidas** (F1-Macro 0.998, inferencia 93.8 ms, latencia de voz, etc.).

5. **Contacto con URLs completas** (ATS no lee "LinkedIn | GitHub" como texto).

6. **Se visibiliza el perfil full-stack** (Next.js/React + cert IBM Full Stack), sin perder el foco en IA.

---

## 📄 CV (texto listo para copiar)

```
YEISON ESTIVEN DELGADO ORDOÑEZ
AI Software Engineer | Conversational AI, Voice Agents & Agentic Systems

Popayán, Colombia (remoto / reubicación negociable) | +57 316 082 2755
yeisonestivendelgado109@gmail.com
LinkedIn: https://www.linkedin.com/in/estiven-delgado/
GitHub: https://github.com/YeisonDelgado
Certificaciones: https://www.credly.com/users/yeison-estiven-delgado-ordonez

PROFESSIONAL SUMMARY
AI Software Engineer con 3+ años construyendo software y 2+ años [CONFIRMAR] especializado en
aplicaciones de IA generativa en producción: chatbots, agentes de voz en tiempo real y sistemas
multi-agente. Experiencia comprobada diseñando arquitecturas RAG, orquestación de agentes
(LangGraph, LangChain, Strands) y guardrails anti-alucinación, con foco en resultados de negocio:
reducción de costos de tokens, baja latencia y confiabilidad en producción. Inglés B2+.

CORE TECHNICAL SKILLS
- Generative AI: LLMs, Agentic Workflows (LangGraph, LangChain, Strands Agents SDK), Advanced RAG,
  Prompt Engineering, Guardrails, LLM Evaluation, LoRA/PEFT Fine-Tuning (Unsloth, QLoRA), SLMs.
- Voice AI: Real-time voice agents, Twilio Media Streams, Deepgram (STT/TTS), VAD, low-latency audio.
- Backend: Advanced Python, FastAPI, REST APIs, WebSockets, Async, Microservices, Event-Driven, SOLID.
- Data & Vector: PostgreSQL, Supabase (pgvector, RLS), SQLite, ChromaDB.
- Cloud & MLOps: Modal (serverless), Docker, CI/CD, LLM Observability (LangSmith), Token Cost
  Optimization, Edge AI (NVIDIA Jetson, PyTorch). AWS (Lambda, Bedrock) — en desarrollo. [CONFIRMAR]
- Frontend: Next.js, React, TypeScript, TailwindCSS.
- LLM Providers: Groq (Llama 4, Qwen, Whisper), Hugging Face.

PROFESSIONAL EXPERIENCE

Freelance / Contract AI Engineer (Agentic & Voice AI)   [CONFIRMAR título y modalidad]
Remoto | 2024 – Actual   [CONFIRMAR fecha de inicio]

  Glovar Services — Lead AI Engineer (Glovar Prospector & Voice Agent)
  - Diseñé y desplegué a producción "Glovar Prospector", una plataforma B2B de prospección autónoma
    multi-agente (descubrimiento, enriquecimiento y redacción de outreach hiper-personalizado),
    sobre FastAPI + Modal serverless (autoescalado a 10 contenedores) + Supabase/PostgreSQL con RLS.
  - Construí un motor agéntico con LangGraph y tool-calling estricto + capas de evaluación de prompts
    para prevenir alucinaciones, con un pool rotativo de claves (Groq Llama 4 Scout) para alta
    concurrencia y cero arranque en frío.
  - Desarrollé un agente de voz en tiempo real (Twilio Media Streams + Deepgram STT/TTS streaming +
    Groq Llama 4), optimizando latencia y fallbacks de ejecución para llamadas en producción.
  - Implementé observabilidad de APIs LLM (LangSmith) reduciendo el gasto de tokens y mejorando la
    velocidad de respuesta del backend.

  OmniRetail — Cloud AI Developer (Agente de Ventas Retail)
  - Desarrollé un agente conversacional de retail con RAG sobre datos transaccionales (SQLite) y
    políticas no estructuradas, usando Strands Agents SDK + Groq (Qwen3-32B).
  - Diseñé una arquitectura 100% stateless con aislamiento de identidad por usuario (bóvedas
    dinámicas) y guardrails de salida que bloquean fugas de PII y resisten prompt-injection.
  - Implementé una jerarquía de la verdad (SQL > RAG > pre-entrenamiento) para eliminar respuestas
    inventadas en datos financieros sensibles.

  Mediscribe — Backend Software Engineer (NLP & Data Pipelines)   [CONFIRMAR si fue freelance o empleo]
  - Construí pipelines de datos en Python para extraer, estructurar y clasificar registros de texto
    no estructurado altamente sensibles con modelos NLP.
  - Aseguré alta disponibilidad, gobernanza de datos estricta e integraciones REST seguras alineadas
    a estándares institucionales.

Deep Learning & Edge AI Researcher
Universidad del Cauca | Popayán, Colombia | 2025 – Actual   [CONFIRMAR]
- Diseñé un sistema multi-agente de mitigación autónoma de botnets en el edge (NVIDIA Jetson Orin
  Nano) con Small Language Models y adaptadores LoRA conmutables, evitando reentrenamientos.
- Alcancé F1-Macro de 0.998 en clasificación de tráfico (dataset N-BaIoT balanceado, ~1.44M
  registros) con inferencia en ~93.8 ms por flujo, viable en hardware de 7–15 W.
- Implementé aprendizaje continuo con base vectorial en memoria (ChromaDB) para detectar ataques
  zero-day sin reentrenar el modelo; tracing y evaluación con LangSmith.

EDUCATION
- B.S. Electronics & Telecommunications Engineering (10º semestre) | Universidad del Cauca | 2026
- AI & Data Science Bootcamp | Talento Tech (MinTIC Colombia) | 2026

CERTIFICATIONS
- IBM Full Stack Software Developer | Coursera   [CONFIRMAR año]
- (Ver más en Credly: https://www.credly.com/users/yeison-estiven-delgado-ordonez)

LANGUAGES
- Español (nativo) | Inglés (B2+)
```

---

## 🔧 Cómo adaptarlo a cada vacante (recordatorio)
- Cambia el **titular** y reordena bullets según la oferta (técnica del word cloud, ver `04`).
- Si la oferta es 100% chatbots → sube esos bullets. Si es voz → lidera con el agente de voz.
- Guarda cada versión: `Yeison_Delgado_AI_Engineer_[Empresa].pdf`.

## ❓ Lo que necesito que confirmes para finalizar
1. ¿Glovar/OmniRetail/Mediscribe fueron **empleos formales** o **proyectos freelance/cliente**?
   ¿Fechas reales de cada uno (mes/año inicio–fin)?
2. ¿Tienes experiencia o proyectos **anteriores a 2024** para sostener el "+3 años"?
3. ¿Quieres mantener **AWS** en el CV? ¿Has trabajado Bedrock/Lambda de verdad o lo dejamos como "en desarrollo"?
4. Año de la certificación **IBM Full Stack**.
