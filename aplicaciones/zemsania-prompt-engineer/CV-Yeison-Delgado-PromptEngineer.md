# YEISON ESTIVEN DELGADO ORDOÑEZ
### Prompt Engineer | AI Solutions Engineer (LLMs / GenAI)

Popayán, Colombia (Remoto 100%) · +57 316 082 2755 · yeisonestivendelgado109@gmail.com
LinkedIn: linkedin.com/in/estiven-delgado · GitHub: github.com/YeisonDelgado

---

Ingeniero de IA especializado en **diseñar, encadenar y evaluar prompts** para sistemas LLM en
producción. Trabajo a diario con **prompt engineering, gestión de riesgo de alucinaciones y
arquitecturas de orquestación tipo LangChain/LangGraph**, llevando modelos de lenguaje (Groq
Llama-4, Claude, ChatGPT, Gemini) desde el prototipo hasta sistemas de negocio reales, medibles y
reproducibles.

---

## HABILIDADES CLAVE PARA EL ROL

- **Prompt Engineering Techniques & Best Practices:** *function calling*, salidas estructuradas
  (JSON schemas), *system prompts* con reglas inmutables, *prompt chaining* multi-fase.
- **LLM Fundamentals & Hallucination Risk Management:** diseño de "jerarquía de la verdad" (datos
  estructurados > RAG > conocimiento del modelo) para blindar respuestas; *guardrails* de salida
  que interceptan y corrigen alucinaciones antes de llegar al usuario.
- **Prompt Chaining & Output Parsing (familia LangChain):** experiencia con **LangGraph** (misma
  familia/creadores de LangChain) orquestando grafos de estado conversacional; pipelines
  multi-etapa donde la salida de un prompt (parseada y validada) alimenta al siguiente.
  *Adaptación inmediata a LangChain clásico.*
- **GenAI Evaluation & Prompt Testing:** `temperature=0.1` para reproducibilidad, scoring
  determinista 0–100, trazabilidad de costo/latencia con LangSmith, comparación de rendimiento
  antes/después de cada iteración de prompt.
- **Modelos y proveedores:** Groq (Llama-4 Scout/Maverick, Whisper), AWS Bedrock (Claude), ChatGPT,
  Gemini, Copilot.

---

## EXPERIENCIA RELEVANTE

### Ingeniero de Automatización e IA — Glovar Services S.A.S · Remoto · Abr 2025 – Jun 2026
- Diseñé el **manifiesto cognitivo de intención**: un prompt pre-flight que convierte una
  descripción libre de "cliente ideal" en un JSON estructurado (tokens de búsqueda, industria
  normalizada, *trigger* de compra) que alimenta todo el pipeline downstream — *prompt chaining*
  real en producción.
- Implementé una **cascada de prompts especializados** (parser de intención → generador de
  consultas de búsqueda → auditor RAG de 3 pilares → copywriter de email) con *output parsing*
  estricto entre cada etapa.
- Configuré `temperature=0.1` y **rotación determinista de 9 API keys de Groq** para garantizar
  resultados reproducibles bajo alta concurrencia, midiendo costo y latencia en cada iteración.

### Ingeniero y Analista de IA (Freelance) · Remoto · 2025 – 2026
- **OmniRetail:** diseñé el *system prompt* con **"Routing Gate"** (5 ramas de decisión
  obligatorias antes de invocar cualquier herramienta) y una jerarquía de verdad SQL > RAG > LLM
  que **redujo las alucinaciones a ~cero**. Implementé un *guardrail* de salida que intercepta y
  corrige respuestas antes de exponerlas al usuario.
- **Mediscribe:** pipelines de NLP en Python con prompts estructurados para extraer y validar
  datos sensibles de forma segura.

### Investigador en IA y Edge Computing — Universidad del Cauca · 2025 – 2026
- Prompts optimizados para modelos de lenguaje pequeños (SLMs) en tiempo real, logrando
  **latencia < 94 ms** sin sacrificar precisión — evaluación continua de calidad de respuesta.

---

## PROYECTO DESTACADO: Agente de Voz en Tiempo Real (Última Milla)
Orquestación conversacional con **LangGraph** (grafo de estados) sobre Groq Llama-4-Maverick
(128k contexto). Prompts diseñados para razonar sobre transcripciones parciales (streaming) y
responder con **latencia end-to-end sub-segundo** en llamadas telefónicas reales.

---

## EDUCACIÓN Y CERTIFICACIONES
- Ingeniería en Electrónica y Telecomunicaciones — Universidad del Cauca · 2026
- Bootcamp IA y Ciencia de Datos — Talento Tech (MinTIC Colombia) · 2026
- IBM Full Stack Software Developer · 2025 · Google Advanced Data Analytics · 2025
- Google Cloud Cybersecurity + Skill Badges (Terraform, IAM, DevOps) · 2025
