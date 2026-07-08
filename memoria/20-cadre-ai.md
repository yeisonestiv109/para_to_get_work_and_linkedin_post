# 20 · Cadre AI — AI Engineer (aplicación + guion Loom)

> 🌟 **Oportunidad INBOUND (jul 2026):** la recruiter **Katherin Trujillo Cortes (Senior AI Recruiter
> @ Cadre AI)** contactó a Yeison por LinkedIn. Yeison respondió con un buen mensaje de valor (RAG +
> agentes → automatización que reduce costos y latencia). Katherin pidió que aplique por el link de Gem
> (con CV + video Loom). El match es casi 1:1 con el nicho de Yeison. Rango salarial: **$3,500–4,500 USD**.

---

## 🏢 Sobre Cadre AI (para el video y la entrevista)
- Firma de **estrategia e integración de IA** (San Diego, USA). **Uno de los primeros OpenAI Service
  Partners oficiales**; alianzas con **Anthropic, OpenAI y YC**.
- Construyen **sistemas de IA en producción** para empresas B2B ($30M–$500M) en private equity,
  wholesale lending, real estate y SaaS. Lema: "no hacemos slides de lo que la IA podría hacer; enviamos
  sistemas que mueven ingresos, comprimen costos y automatizan el trabajo de equipos enteros."
- Cultura: pods pequeños, ownership real, AI-native (usan asistentes de código a diario), sin burocracia,
  "the best idea wins". Bootstrapped, rentable, creciendo.
- **Traducción para vender valor:** valoran ingenieros que llevan RAG/agentes a **producción real** con
  impacto de negocio medible y que **abstraen** lo repetido en herramientas internas reutilizables
  (force-multiplier).

## 📌 El rol (lo que evalúan)
- Backbone técnico: backend AI complejo, workflows agénticos, retrieval sobre datos no estructurados
  "sucios", e infraestructura que lo mantiene a escala. Co-desarrolla requisitos con el estratega.
- **Requisitos duros y cómo encaja Yeison:**
  - 3+ años backend, 1+ año enviando **agentes de IA en producción** client-facing → framear con Glovar
    (empleo) + freelance (OmniRetail/Mediscribe) + research. Es un ligero stretch en "3+ backend".
  - **Vector DBs + optimización de RAG avanzado + orquestación agéntica** con ejemplos concretos de mejora
    de retrieval accuracy o reducción de latencia → SÍ (OmniRetail: jerarquía SQL>RAG + guardrails =
    cero alucinaciones; Glovar: latencia + concurrencia).
  - **Python y Node.js** → Python fuerte; Node vía NestJS (defendible).
  - **IaC (Terraform/Pulumi) + Docker + Kubernetes** → Terraform (cert GCP) + Docker sí; **K8s = gap**
    (honesto: fundamentos, dispuesto a profundizar). No inventar.
  - **Certified Claude Architect** o capacidad de obtenerla en 60 días → comprometerse honestamente;
    usa Claude vía AWS Bedrock; la cert cubre Agent SDK/API/MCP (su terreno).
  - AI-native (asistentes de código como multiplicador), tolerancia a la complejidad, ownership → sí.

## 💰 Salario (campo del form, prellenado 4000)
- Rango de ellos: **$3,500–4,500 USD/mes**. Recomendación: **$4,000** (mitad de banda, seguro, no filtra
  siendo un perfil ligeramente junior en "3+ backend"). Si quiere señalar confianza: **$4,200**.
  No poner 4,500 en este primer filtro (invita a escrutinio de los gaps de K8s/IaC/años). Se negocia
  al alza en la oferta si el fit se demuestra en el Loom + entrevista.

---

## 🎬 GUION DEL VIDEO LOOM (EN) — EL FILTRO DECISIVO
> Sin video (o grabado), en Colombia NO consideran la aplicación. Objetivo: **~2–2.5 min**, en inglés,
> mirando a la cámara. Proyecto = el MÁS COMPLEJO. Recomendado: **Glovar Prospector** (producción,
> multi-agente, client-facing) con el reto técnico centrado en retrieval/agentic + latencia. Alternativa:
> **OmniRetail** si prefiere liderar con la historia pura de RAG/retrieval accuracy.

### Estructura (STAR) + guion palabra por palabra (rellena las [métricas] con datos reales)

**(0:00–0:15) Hook + quién soy**
> "Hi Cadre AI team, I'm Yeison, an AI engineer from Colombia. Over the last year and a half I've
> shipped production AI systems — agentic workflows and RAG pipelines — not prototypes. Let me walk you
> through the most complex one."

**(0:15–0:40) El proyecto + por qué es complejo**
> "The system is 'Glovar Prospector', a production multi-agent B2B platform. The hard part wasn't a
> single model call — it was orchestrating multiple agents that call tools and APIs, read and write data,
> and stay reliable while pulling knowledge from messy, unstructured sources. It had to run at scale,
> under real latency and cost constraints, in the client's actual environment."

**(0:40–1:25) El reto técnico + cómo lo resolví (lo más importante)**
> "Two challenges stood out. First, retrieval quality over messy data: naive chunking gave inconsistent
> answers. I moved to structure-aware chunking, tuned the embeddings, and added a re-ranking step, plus
> a strict source hierarchy — structured SQL first, RAG second — with output guardrails. That took
> hallucinations down to effectively zero on the metrics we tracked. Second, agentic reliability under
> load: I built the orchestration in LangGraph with explicit state, routing, and fallback, deliberate
> context-window management so the system degrades gracefully instead of dropping critical information,
> and a rotating key pool to sustain high concurrency. I benchmarked latency and token cost before and
> after each change with data, not intuition."

**(1:25–1:50) Resultado / impacto de negocio**
> "The outcome: a system that ran reliably in production, cut token cost, kept latency low on real
> workloads, and — most importantly — gave answers the client could trust. In a related freelance RAG
> project, that same retrieval discipline took us to a top-5 finish out of 50 teams before it became a
> paid engagement."

**(1:50–2:15) Force-multiplier + cierre (encaja con la cultura de Cadre)**
> "What I care about beyond one delivery is patterns: when something works, I abstract it into a reusable
> component so the next build is faster. That's exactly the force-multiplier mindset your role describes,
> and it's why Cadre stands out to me — you ship real systems, not decks. I'd love to bring this to your
> team. Thanks for watching."

### Tips de grabación (Loom)
- Trátalo como una entrevista: lugar silencioso, buena luz de frente, cámara a la altura de los ojos.
- Mira a la CÁMARA, no a la pantalla. Sonríe al abrir y cerrar.
- Usa el guion como apoyo (bullets), no lo leas monótono. Practica 2–3 veces en voz alta antes.
- Puedes compartir pantalla y mostrar un diagrama simple del sistema o el repo de GitHub mientras hablas.
- Mantén 2–3 min. Si te trabas, re-graba; Loom permite recortar.
- Sube el video y pega el link en el campo del form (o el que pida Gem).

---

## 📝 Campos del formulario (Gem)
- First name: `Yeison Estiven`
- Last name: `Delgado Ordoñez`
- Email: `yeisonestivendelgado109@gmail.com`
- LinkedIn URL: `https://www.linkedin.com/in/estiven-delgado/`
- Phone number: `3160822755`
- Location: `Popayan, Cauca, Colombia`
- Resume: `Yeison_Delgado_AI_Engineer_CadreAI.pdf`
- Referred by: `Katherin Trujillo Cortes`  ← ¡IMPORTANTE, ella te refirió!
- Salary expectation monthly USD: `4000` (o `4200` si quiere señalar confianza)
- Github link: `https://github.com/YeisonDelgado`
- Loom video (EN): grabar con el guion de arriba y pegar el link.

## ✅ Próximos pasos
1. Grabar el Loom (prioridad #1) con el guion.
2. Exportar CV adaptado a Cadre como PDF de texto.
3. Enviar el form con Katherin como referencia.
4. Agradecer a Katherin por DM cuando esté enviado.
5. Prepararse para entrevista técnica: RAG optimization (chunking/embeddings/reranking/vector DB choice),
   agentic orchestration (tool selection, memory, failure recovery, context window), IaC/Docker/K8s,
   Claude/Anthropic, y ejemplos con métricas antes/después.
