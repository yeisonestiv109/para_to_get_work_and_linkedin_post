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

## 🎬 GUION DEL VIDEO LOOM (EN) — EL FILTRO DECISIVO  ·  v2 (storytelling, con fuentes)
> Sin video (o grabado), en Colombia NO consideran la aplicación. Objetivo: **~2:45**, en inglés,
> mirando a cámara. Reescrito con storytelling real (no lista de features).
> Principios (fuentes): arco Situación→Complicación→Resolución (MIT CommLab, Highbridge); hook en 8-12s
> (LoungeLizard, Quora); anclar cada dato técnico al "por qué" (Stanford talk-recipe); dominio = explicar
> simple con analogías / Feynman (get-alfred, alibaba lifetips); context engineering ≠ prompt trial-error
> (Tobi Lütke / Towards Data Science / Augment Code); objeción de precio = reencuadre a ROI con sus
> números (Ciela.ai, ConsultingSuccess); demo fallida = calma + honestidad + plan con fecha (Juno, Reprise).
> Los [corchetes] = datos reales de Yeison.

**[0:00–0:15 · HOOK con tensión, a cámara]**
> "The moment that taught me the most about production AI wasn't a technical win. It was a demo that
> broke — live — in front of a paying client. I'm Yeison, an AI engineer from Colombia, and I want to
> walk you through that project, because it's exactly the kind of work this role is about."

**[0:15–0:40 · QUÉ HACÍA, en lenguaje simple]**
> "The client ran a B2B sales team. Every single day, people burned hours on the same manual grind:
> digging through thousands of companies to find the few worth contacting, researching each one, and
> writing that first message. We built an AI system that does that end to end. Think of it as a tireless
> junior researcher that reads messy, scattered company data, decides who's actually worth pursuing, and
> drafts the first conversation — around the clock."

**[0:40–1:20 · RETO TÉCNICO con analogía = señal de dominio]**
> "Here's the hard part: that company data is a mess — different formats, half of it unstructured. The
> naive move is to dump everything into the model and hope. But a language model is like someone with a
> small desk: pile on too much paper and it starts missing what matters. So the real skill isn't writing
> a clever prompt — it's context engineering: deciding exactly what lands on that desk for each decision.
> I used structure-aware chunking, re-ranking, and a strict rule: trust a hard fact from the database
> over a fuzzy match from a document — the way a journalist checks a primary source before repeating a
> rumor. That took our answers from 'mostly right' to trustworthy, with hallucinations down to
> effectively zero on the metrics we tracked."

**[1:20–1:45 · ENTORNO AI-NATIVE]**
> "Early on I watched how easily a team can lose two weeks just typing prompts and praying. I refused to
> work that way. I set up an AI-native workflow: living specs and rules the coding assistant reads every
> time, its context curated so it doesn't drift, and small automated evals so we judged quality with
> data, not vibes. That turned guesswork into a repeatable engine — and when a piece worked, I abstracted
> it into a reusable tool so the next build was faster."

**[1:45–2:30 · LO HUMANO — 3 micro-historias]**
> "But the biggest lessons were human. My team lead wasn't deeply technical, so to defend a key
> architecture choice I dropped the jargon and drew a picture: 'RAG is just giving the AI an open-book
> exam with the right pages already flagged.' Once he could see it, he could sell it to the client.
> Then that demo failed. A real edge case broke it, live. I didn't hide it or make excuses — I paused,
> owned it, and said: 'This is a genuine edge case; here's exactly why it happened, and here's my plan
> and the date I'll have it fixed.' That honesty is what bought us two more weeks instead of losing the
> account.
> And the objection I'll never forget: 'Why pay for this, when someone here on minimum wage does that and
> more?' I didn't defend the technology. I used his own numbers: one person handles maybe [X] a day; the
> system clears that before 9am, every day, with no turnover and nothing to re-train. Framed as return
> instead of cost, the price stopped being the argument."

**[2:30–2:45 · CIERRE conectando con Cadre]**
> "We shipped it to production, it ran reliably, and the client stayed. That's the work I love: messy
> data, real clients, real stakes. It's exactly what Cadre does — ship systems that move the business,
> not decks. I'd love to build that with you. Thanks for watching."

> ⚠️ Honestidad: rellena los [X] con cifras reales y ajusta a como pasó. Si la demo/objeción fue en
> OmniRetail (asistente retail), cambia el propósito por "answers customers' product questions over messy
> catalog data"; el resto funciona igual.
> ⏱️ Versión <2 min: deja solo la historia de la OBJECIÓN (la más potente) y recorta líder + demo.

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


---

## 🎥 SHOT-LIST del Loom — qué mostrar en pantalla (SOLO assets seguros)

> Regla de oro: **Glovar Prospector y Última Milla son privados/NDA → NUNCA mostrar su código, logs,
> datos de cliente, .env, claves, ni LangSmith con nombres de proyecto reales.** Para "mostrar
> construyendo" usamos lo que YA es público y real: el repo **OmniRetail-Agent** (código tuyo) + los
> **diagramas Mermaid** de los case studies (arquitectura sin código) + el grafo LangGraph del botnet.

### Héroe visual = OmniRetail-Agent (público, código real y defendible)
URLs a tener abiertas en pestañas antes de grabar:
- Repo + diagrama: https://github.com/YeisonDelgado/OmniRetail-Agent
- Case study Prospector (solo diagrama, para hablar de escala): https://github.com/YeisonDelgado/glovar-prospector-casestudy
- Grafo LangGraph real: https://github.com/YeisonDelgado/LangGraph_Bootnet_Detection/blob/main/src/graph/workflow.py

### Segundo a segundo (alineado al guion v2)
| Tiempo | Pantalla | Qué mostrar exactamente |
|---|---|---|
| 0:00–0:15 · Gancho | 🎥 Cara completa | La frase de "la demo que falló en vivo". Sin pantalla. Contacto visual. |
| 0:15–0:40 · Problema | 🖥️ Compartir | Abre en OmniRetail-Agent los datos **mock** `data/csv/` (p. ej. `orders.csv`, `tracking.csv`) o las políticas en `data/policies/*.md`. Es data sintética en repo público = seguro. "Este es el desorden de datos del que hablo." |
| 0:40–1:20 · Reto técnico | 🖥️ Código real | 1) Muestra el **diagrama Mermaid** del README (motor híbrido + tools). 2) Abre `core/agent.py` → baja al **System Prompt, Regla #15** y pon el cursor en `Ficha Técnica (SQLite) > Política General (RAG)`: ESE es el momento estrella (SQL manda sobre RAG). 3) Abre `core/tool_rag_policies.py` → muestra el bloque de instrucción anti-alucinación + la fuente/cita. 4) (Opcional, para probar LangGraph) abre `workflow.py` del botnet: nodos/edges reales. |
| 1:20–1:45 · AI-native | 🖥️ Config | Muestra un archivo de reglas/spec de tu entorno (`.cursorrules` / `CLAUDE.md` / `AGENTS.md`) y el **routing gate de 5 ramas** (README §5.1) + `session_context.py` (telemetría de costo/latencia). Mensaje: "contexto ingenierizado + medición con datos, no adivinar prompts". **NO** abras LangSmith con datos de cliente. |
| 1:45–2:30 · Humano + ROI | 🖥️ Diagrama de escala | Muestra el **diagrama Mermaid del case study de Glovar Prospector** (arquitectura de la plataforma en producción) mientras cuentas la objeción de costos + la demo que falló. Opcional: una terminal corriendo `python main.py` de OmniRetail localmente mostrando la telemetría por turno. |
| 2:30–2:45 · Cierre | 🎥 Cara completa | Cierre de seguridad conectando con Cadre. |

### ❌ Prohibido mostrar
Código/flujos/logs de Glovar o Última Milla · datos o nombres reales de clientes · `.env`/claves ·
LangSmith con proyectos reales · cualquier captura del backend privado.

### 📊 Números (honestidad = credibilidad ante Private Equity)
Usa cifras **reales y defendibles**. Dos framings según qué proyecto lideres visualmente:
- Si lideras con **OmniRetail** (soporte): "un agente maneja consultas de catálogo/pedidos 24/7 sin
  inventar precios, con jerarquía de verdad auditable" (número de consultas/día que puedas sostener).
- Si citas **Glovar** (prospección, vía diagrama): la objeción encaja perfecto — "una persona califica
  ~[N reales] leads/día; el sistema procesa [N] antes de las 9:00 AM". **No inventes 500 si no lo puedes
  probar**; usa tu dato real. La cifra debe aguantar una repregunta.

### Cómo grabar (setup)
- Loom con burbuja de cámara (o OBS): pantalla + tu cara en esquina.
- Pestañas/archivos **pre-abiertos** para no buscar en vivo; usa el cursor para señalar líneas.
- Ensaya 2-3 veces cronometrando (~2:45). Auriculares + buena luz. Re-graba si te trabas (Loom recorta).

### Booster opcional (si quieres 1 artefacto "de laboratorio")
Repo público mínimo `rag-truth-hierarchy-demo`: reproduce el patrón (chunking estructural + reranking +
regla SQL>RAG) con datos ficticios, en 1 archivo que corre. Da código limpio 100% tuyo para señalar sin
NDA. No es necesario (OmniRetail ya alcanza), pero suma si tienes 1-2 horas. Dímelo y lo armo.
