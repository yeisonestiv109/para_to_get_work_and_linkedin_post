# 04 · Estrategia de CV (anti-ATS + pro-humano)

> El CV no consigue el trabajo: consigue **la entrevista**. Tiene que pasar la máquina (ATS)
> y, en 6-8 segundos, convencer al humano. Aquí está cómo.

---

## 🚫 Reglas de formato (para no morir en el ATS)

- **Una sola columna. Formato lineal.** Nada de 2 columnas, cajas de texto ni tablas.
- **Sin imágenes, sin foto, sin iconos, sin gráficos de barras** de "nivel de skill".
- **Fuente clara** (Calibri, Arial, Helvetica, Georgia), tamaño 10–12.
- **Encabezados estándar:** `Experiencia`, `Habilidades`, `Educación`, `Proyectos`. No inventes nombres creativos.
- **Fechas mes/año** de inicio y fin en cada experiencia (ej. `Ene 2023 – Actual`).
- **1–2 páginas máximo.**
- **Formato de archivo:** `.docx` o **PDF basado en texto** (que se pueda seleccionar el texto). Nunca PDF escaneado/imagen.
- **Nombre del archivo:** `Nombre_Apellido_AI_Engineer.pdf`.
- Datos de contacto en el **cuerpo** del documento, NO en el encabezado/pie de página (muchos ATS no leen headers/footers).

## 🧱 Estructura recomendada (orden) para perfil IA senior

```
1. NOMBRE + TÍTULO OBJETIVO (ej. "AI / Software Engineer — Conversational AI & Voice Agents")
2. Contacto: ciudad/país · email · teléfono · LinkedIn (URL) · GitHub (URL) · Portafolio
3. RESUMEN PROFESIONAL (3-4 líneas, con métricas y keywords)
4. HABILIDADES TÉCNICAS (skills arriba — pesan más en ATS 2026)
5. EXPERIENCIA PROFESIONAL (bullets con verbo + qué + número + impacto)
6. PROYECTOS DE IA (los 3 demos / open source con resultados)
7. EDUCACIÓN + CERTIFICACIONES
8. IDIOMAS
```

## 📝 Resumen profesional (plantilla)

> AI / Software Engineer con [X] años construyendo **chatbots, agentes de voz y agentes LLM en
> producción**. Especializado en RAG, orquestación de agentes y diseño de sistemas conversacionales
> de baja latencia. He [resultado con número: ej. reducido 45% el costo de soporte / automatizado
> N procesos]. Foco en llevar IA a producción de forma **medible, confiable y rentable**.

## 🔑 Keywords (técnica del word cloud)

1. Copia la descripción de la oferta y pégala en `wordclouds.com`.
2. Las palabras más grandes = las que más se repiten = las críticas.
3. Asegúrate de que aparezcan en tu CV **con la redacción exacta** de la oferta.

### Banco de keywords frecuentes para roles IA/chatbots/voz (usar las que apliquen y sean verdad)
- **Lenguajes:** Python, TypeScript, JavaScript, SQL, Go
- **LLM / GenAI:** LLM, RAG (Retrieval-Augmented Generation), prompt engineering, fine-tuning,
  embeddings, vector database, function calling / tool use, agents, multi-agent, LLMOps, evaluation/evals,
  guardrails, hallucination mitigation
- **Frameworks:** LangChain, LangGraph, LlamaIndex, OpenAI API, Anthropic Claude, Hugging Face, Pydantic AI
- **Voz:** Voice AI, speech-to-text (STT), text-to-speech (TTS), Deepgram, ElevenLabs, LiveKit, Vapi,
  Retell, Twilio, Pipecat, real-time / low-latency, telephony
- **Vector DBs:** Pinecone, Weaviate, pgvector, Qdrant, Chroma, FAISS
- **Backend / infra:** FastAPI, Node.js, REST, GraphQL, WebSockets, Docker, Kubernetes, AWS, GCP, Azure,
  CI/CD, microservices, serverless
- **Datos:** PostgreSQL, Redis, MongoDB, ETL
- **Prácticas:** Agile, Scrum, TDD, observability, monitoring, MLOps

> ⚠️ **Honestidad:** solo keywords que puedas defender en entrevista. El ATS te mete a la sala;
> mentir te saca en el screen técnico (recuerda: 92% falla ahí).

## ✍️ Verbos de acción (empezar cada bullet)

Diseñé · Construí · Lideré · Implementé · Reduje · Aumenté · Optimicé · Automaticé · Escalé ·
Integré · Migré · Lancé · Mentoré · Definí · Desplegué.

## 📐 Fórmula de bullet de impacto

> **[Verbo de acción] + [qué construiste/hiciste] + [resultado con número] + [impacto de negocio]**

### Ejemplos (adaptar a la realidad del candidato)
- "Diseñé un chatbot RAG sobre la base de conocimiento de la empresa que **resolvió el 78% de los
  tickets sin intervención humana**, reduciendo el costo de soporte ~$4k/mes."
- "Construí un agente de voz con LiveKit + Deepgram + GPT-4o con **latencia <800ms**, automatizando
  el agendamiento de 1,200 citas/mes."
- "Optimicé los prompts y el caching de un pipeline LLM, **bajando 60% el costo por conversación**
  sin perder calidad."
- "Implementé evals automatizados que **redujeron la tasa de alucinación de 12% a 3%** antes de cada release."

## 🔁 Adaptar el CV a cada vacante (no enviar el mismo a todas)

1. Tener una **plantilla base** en Google Docs / Word.
2. Por cada oferta: cambiar el **titular**, reordenar experiencias/proyectos según lo que pide,
   ajustar keywords a su redacción exacta.
3. Guardar cada versión: `Nombre_AI_Engineer_[Empresa].pdf`.

## ✅ Checklist final antes de enviar

- [ ] ¿Una columna, sin tablas/imágenes? (prueba: copia todo y pégalo en un .txt — ¿se lee ordenado?)
- [ ] ¿Keywords exactas de la oferta presentes?
- [ ] ¿Cada bullet tiene verbo + número + impacto?
- [ ] ¿Contacto en el cuerpo, LinkedIn y GitHub con URL completa?
- [ ] ¿1–2 páginas, fechas mes/año?
- [ ] ¿Nombre de archivo profesional?
- [ ] ¿Pasaste un test ATS gratuito (ej. Jobscan) y revisaste el match?
