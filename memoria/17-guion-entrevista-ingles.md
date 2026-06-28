# 17 · Guion de Entrevista en Inglés (STAR + técnico)

> Para entrevistas de trabajo (AI Engineer) y para la entrevista del proyecto SUCCESS. Inglés claro y
> hablable (nivel B2/C1), no rebuscado. **No lo memorices palabra por palabra**: entiende la idea y
> dilo con tus palabras. Practica en voz alta 3-4 veces cada respuesta.

---

## 🎤 Cómo son las entrevistas de IA en 2026 (para que no te sorprendan)
Etapas típicas:
1. **Recruiter screen** (RH): encaje, motivación, inglés, expectativas. Preguntas blandas.
2. **Technical screen**: explicar conceptos (RAG, agentes, evals) y a veces código.
3. **System design de IA**: diseñar algo end-to-end (ej. un agente con RAG controlando costo de tokens).
4. **Behavioral**: preguntas de comportamiento → aquí se usa **STAR**.
5. A veces **take-home** o live coding.

Lo que más preguntan (según guías 2026): explicar **RAG**; **RAG vs fine-tuning**; cómo **reducir
alucinaciones**; cómo **bajar latencia y costo de tokens**; cómo **evaluar** una app LLM; qué es un
**agente / tool-calling**; **embeddings** y vector DBs; diseño **end-to-end** de un sistema con RAG.

---

## 🗣️ Tips para que tu inglés se entienda (oral)
- **Frases cortas.** Una idea por frase. Respira entre frases.
- Habla **un poco más lento** de lo normal. Claridad > velocidad.
- Usa conectores simples: *first, then, after that, because, so, for example, in the end*.
- Si te trabas: gana tiempo con *"That's a good question, let me think for a second..."*.
- Si no entendiste: *"Could you repeat that, please?"* o *"Just to make sure I understand, you mean...?"*.
- No traduzcas literal del español. Di la idea simple.
- Practica la pronunciación de tus términos: *latency, deployment, hallucination, retrieval, embeddings,
  throughput, agent, pipeline, scalable*.

---

## ⭐ Método STAR (para preguntas de comportamiento y proyectos)
**S**ituation (contexto) · **T**ask (tu objetivo/responsabilidad) · **A**ction (qué hiciste TÚ) ·
**R**esult (resultado, con número si puedes). Apunta a 1.5–2 minutos por historia.

> Truco: el 60% del tiempo va en **Action** (lo que TÚ hiciste). Usa "I", no solo "we".

---

## 📖 Tus 4 historias STAR listas (inglés claro + idea en español)

### Historia 1 — Voice agent latency (Glovar) · *para "a hard technical challenge"*
**EN:**
> **S:** At Glovar, I built a real-time voice agent that answered phone calls.
> **T:** My goal was to make it feel natural. The first version had almost two seconds of silence before
> it replied, and that felt broken on a real call.
> **A:** I broke the pipeline into steps and measured each one. I moved speech-to-text and text-to-speech
> to streaming with Deepgram, so the agent could start talking before the full response was ready. I
> handled the audio format directly, and I added fallbacks for when a step failed.
> **R:** I brought the end-to-end latency to under one second. The conversation finally felt human, and
> the agent could handle real calls in production.

*ES (idea):* Agente de voz; problema = 2s de silencio; acción = medir cada paso, streaming STT/TTS,
fallbacks; resultado = latencia < 1s, natural, en producción.

### Historia 2 — Zero hallucinations (OmniRetail) · *para "ensuring reliability / quality"*
**EN:**
> **S:** In a challenge with 50 teams, I built a retail AI agent that handled customer and order data.
> **T:** The risk was clear: the model sometimes invented answers with full confidence, which is
> dangerous with real transactions.
> **A:** Instead of just writing a nicer prompt, I changed the architecture. I built a "truth hierarchy":
> the agent reads from the SQL database first, then from documents, and it never answers without
> auditable evidence. I also added guardrails against prompt injection and a 5-branch routing gate to
> save tokens.
> **R:** The agent stopped hallucinating on transactions, and our team finished in the top 5 of 50.

*ES (idea):* Agente retail; riesgo = inventar respuestas; acción = jerarquía de la verdad SQL>RAG,
trazabilidad, guardrails, routing gate; resultado = cero alucinaciones, Top 5/50.

### Historia 3 — WilsonAI hackathon (teamwork under pressure) · *para "teamwork / deadline"*
**EN:**
> **S:** In an 18-hour in-person hackathon, my team had to solve a real problem: helping rescue street
> animals in my city and reducing health risks for the community.
> **T:** We had very little time, so we needed to pick the right scope and split the work fast.
> **A:** We designed WilsonAI, an AI platform to report animals by voice, text or image, even offline.
> I focused on the AI and data side, and we agreed early on a small, working scope instead of trying to
> build everything. We kept communicating so no one got blocked.
> **R:** We delivered a working prototype and finished 7th out of all teams. It taught me how to make
> fast decisions and work tightly with a team under pressure.

*ES (idea):* Hackathon 18h, equipo; reto social; acción = scope pequeño y funcional, foco IA/datos,
comunicación constante; resultado = prototipo funcional, 7.º lugar; aprendizaje = decisiones rápidas + equipo.

### Historia 4 — Edge AI research (rigor / going deep) · *para "a project you're proud of"*
**EN:**
> **S:** For my research, I worked on detecting cyber threats in IoT networks, but running on small,
> low-power devices instead of the cloud.
> **T:** The challenge was to keep high accuracy while fitting the model into very limited memory.
> **A:** I used small language models with QLoRA adapters, so I could switch behavior without retraining.
> I quantized the model and measured memory and latency carefully on the device.
> **R:** I reached an F1-Macro of 0.998 with about 93.8 milliseconds of inference on a device using only
> 7 to 15 watts. It showed that you don't always need a giant cloud model.

*ES (idea):* Investigación edge; reto = precisión con poca memoria; acción = SLMs + QLoRA, cuantización,
medición; resultado = F1 0.998, ~93.8 ms, bajo consumo.

---

## 💬 Preguntas comunes + respuestas modelo (inglés claro)

### "Tell me about yourself" (tu pitch, ~45-60s)
> I'm an AI software engineer from Colombia. For the last year and a half I've worked fully remotely,
> building AI systems in production: voice agents, RAG assistants and multi-agent workflows. I care less
> about the trendy model and more about the result: does it save money, save time, or work reliably?
> Right now I'm looking for a role where I can build production AI with a strong team. *(para SUCCESS:
> ...and I want to grow by working in an international, distributed team.)*

### "Why do you want this role / why us?"
> I like that you're building real AI products, not just demos. I've already shipped voice and RAG
> systems to production, so I can contribute from day one. And I want to keep growing in [voice AI /
> agents / your domain], which is exactly what you do.

### "What's your experience with English?" / SUCCESS motivation
> I have a C1 level. I read technical content in English every day and I work with English documentation
> and tools. I'm comfortable in meetings, and I keep improving by practicing.

### Technical — "Explain RAG."
> RAG means Retrieval-Augmented Generation. Instead of trusting only what the model memorized, you first
> search a knowledge base for relevant pieces of text, and then you give those pieces to the model as
> context. So the answer is grounded in real, up-to-date data, which reduces hallucinations.

### Technical — "RAG or fine-tuning?"
> For most business cases, RAG. It's cheaper, faster to update, and you just change a document instead of
> retraining. I'd use fine-tuning when I need a specific style, format or behavior that prompting can't
> give me — not just to "teach it my company's data". That part is RAG.

### Technical — "How do you reduce hallucinations?"
> A few layers. Ground the model with RAG and citations. Use a truth hierarchy, so the database wins over
> the model's guess. Add guardrails and don't let it answer without evidence. And measure it with evals,
> so you catch regressions before release.

### Technical — "How do you reduce latency and token cost?"
> For latency, I stream responses and remove work from the critical path; in voice, I measure network,
> model and audio separately. For cost, I cache, I keep prompts tight, I pick the right-sized model, and
> I watch token usage with observability tools like LangSmith.

### Technical — "How do you evaluate an LLM app?"
> I build an evaluation set with real examples and expected behavior, then I score outputs automatically
> for accuracy and hallucination. I treat it like regression testing: every prompt or model change has to
> pass the evals before it ships.

### "Tell me about a weakness."
> I used to over-engineer early. Now I start with the smallest version that works, ship it, measure, and
> improve. The WilsonAI hackathon really pushed me to scope tightly under time pressure.

---

## ❓ Preguntas para hacerles TÚ (siempre ten 2-3)
- How do you measure the success of your AI features in production?
- What does the team use today for evals and observability?
- What would the first 90 days look like for this role?
- *(SUCCESS)* How are the international teams organized across time zones?

## ✅ Checklist antes de la entrevista
- [ ] Practiqué las 4 historias STAR en voz alta (1.5–2 min cada una).
- [ ] Practiqué "tell me about yourself" hasta que suene natural.
- [ ] Repasé RAG, RAG vs fine-tuning, alucinaciones, latencia/costo, evals, agentes.
- [ ] Tengo 2-3 preguntas para ellos.
- [ ] Probé cámara, micrófono, internet y un lugar silencioso.
- [ ] Respiro, hablo lento y claro. Si me trabo, pido repetir sin pena.

> Fuentes (2026): guías de preguntas para AI Engineer (UPenn Career Services, Towards AI, 365 Data
> Science, Dataford). Contenido parafraseado para cumplir restricciones de licencia.
