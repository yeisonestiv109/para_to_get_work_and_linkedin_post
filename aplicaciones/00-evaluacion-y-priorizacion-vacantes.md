# Evaluación y priorización — 3 vacantes (Julio 2026)

> Lente: reclutador senior. Objetivo: maximizar probabilidad de conseguir empleo real,
> priorizando por **fit técnico + fit de carrera + evidencia verificable en tu propio repo**.

## Ranking final

| # | Vacante | Empresa | Contacto | Fit | Por qué |
|---|---|---|---|---|---|
| 1 | **Prompt Engineer** | Zemsania (cliente vía staffing) | Dana Paragulla · dparagulla@zemsania.com | 🟢 Muy alto | Calca casi literal tu trabajo diario en LLMs |
| 2 | **Integration Engineer (IA/ML)** | Zemsania (cliente vía staffing) | Alexandra Buitrón · abuitron@zemsania.com | 🟡 Alto (con 1 gap honesto) | Fuerte en integración e IA, gap en ML clásico |
| 3 | **Ingeniero de Soporte Técnico L2** | Cari AI | Formulario Google | 🟠 Medio-bajo | Buen "plan B", pero requiere PHP/ticketing que no tienes y retrocede tu carrera hacia IA |

**Recomendación de secuencia:** aplica hoy mismo a **#1 y #2** (mismo día, son la misma agencia de
staffing — Zemsania — así que probablemente comparten ATS/base de datos: aplicar a ambas con
buena calidad no es redundante, es cobertura). Aplica a **#3 (Cari AI)** también, como red de
seguridad, pero sé honesto en el formulario sobre las herramientas que no dominas (mejor que te
descarten por falta de fit que por falta de honestidad en una prueba técnica).

---

## 1. Prompt Engineer — Zemsania · 🟢 Prioridad #1

### Empresa (investigación web)
**Zemsania Global Group**, fundada en 2003, opera en consultoría de software/TI y provee **talento
IT especializado** a otras empresas. [Fuente: zoominfo.com/c/zemsania-sl] — es decir, Dana es
reclutadora de una **staffing agency**: publica vacantes de distintos clientes finales. El filtro es
por CV + keywords técnicas exactas; el cliente final evalúa en entrevista técnica.

### Requisitos vs. tu evidencia
| Pide | Tu evidencia real |
|---|---|
| Prompt Engineering Techniques & Best Practices | Optimización de prompts + *function calling* + salidas estructuradas (todos tus proyectos) |
| LLM Fundamentals & Hallucination Risk Management | OmniRetail: "Jerarquía de la Verdad" (SQL > RAG > pre-entrenamiento) → alucinaciones reducidas a ~0 |
| LangChain: Prompt Chaining & Output Parsing | LangGraph (ecosistema LangChain) en el agente de voz; cascada de prompts encadenados en Glovar Prospector (intent parser → discovery → validator) |
| GenAI Evaluation & Prompt Testing | `temperature=0.1` para reproducibilidad, scoring 0-100 determinista, trazas de LangSmith (costo/latencia) |

**Veredicto:** este es tu perfil **exacto**, casi sin necesidad de "vender" nada — solo traducir tu
trabajo real al vocabulario de la vacante.

### Gap a mencionar con honestidad (si preguntan en entrevista)
No has usado **LangChain puro** (sí LangGraph, que es de los mismos creadores y comparte filosofía).
Dilo así si te preguntan: *"He trabajado con LangGraph para orquestación de estados conversacionales;
la lógica de chaining y parsing es la misma familia, me adapto rápido a LangChain clásico."*

---

## 2. Integration Engineer (IA/ML/Data Science) — Zemsania · 🟡 Prioridad #2

### Requisitos vs. tu evidencia
| Pide | Tu evidencia real |
|---|---|
| ML y Data Science sólido | Investigación UdeC: sistemas multi-agente con SLMs, latencia <94ms |
| Data Analytics avanzado | Certificación **Google Advanced Data Analytics** (match literal) |
| Desarrollar e implementar modelos de IA/ML | Integraste LLMs/RAG en sistemas productivos (OmniRetail, Glovar) — integración > entrenamiento de modelos desde cero |
| Analizar grandes volúmenes de datos → soluciones de negocio | SIRPSI (matrices de riesgo psicométrico), OmniRetail (datos transaccionales) |
| Colaborar con equipos multidisciplinarios | Freelance con levantamiento de requerimientos directo con clientes |
| Interés en Generative AI | Todo tu portafolio es GenAI |

### Gap honesto (el único real de las 3 vacantes)
La vacante suena a **ML clásico** (entrenar/evaluar modelos predictivos, no solo integrar LLMs). Tu
fuerte es **ingeniería de sistemas de IA aplicada** (integración, RAG, arquitectura, producción), no
entrenamiento de modelos desde cero con scikit-learn/TensorFlow. **No lo oculto en el CV** — lo
reformulo como "integración e IA aplicada a negocio" y dejo que la entrevista aclare el nivel exacto
que buscan. Es mejor que te llamen sabiendo tu fuerte real, que prometer algo que no sostienes en
una prueba técnica.

---

## 3. Ingeniero de Soporte Técnico L2 — Cari AI · 🟠 Prioridad #3

### Empresa (investigación web)
**Cari AI**: plataforma de chatbots con IA que automatiza la atención al cliente (autogestión de
bots, reducción de carga operativa). [Fuente: aws.amazon.com/marketplace, zoominfo.com/c/cariai]

### Requisitos vs. tu evidencia — aquí sí hay gaps reales
| Pide | Tu evidencia |
|---|---|
| SQL intermedio (JOIN) | ✅ PostgreSQL, consultas y estructuración de datos |
| PHP (leer/depurar) | ❌ No hay evidencia de PHP en tu perfil (tu stack es Python/Node/TS) |
| Sistemas de tickets (Zoho/Jira/Zendesk) + SLAs | ❌ No mencionado en tu CV |
| Línea de comandos Linux (grep/tail/awk) | ✅ Parcial — Docker, Git, fundamentos Cloud |
| APIs REST/SOAP + Postman | ✅ Fuerte — consumo e integración de APIs REST |
| Soporte L2 1-2 años | ❌ Tu experiencia es en desarrollo/automatización, no soporte |
| Turnos rotativos 24/7 | ⚠️ Depende de tu disponibilidad real — **debes confirmarlo tú**, no lo asumo por ti |

**Veredicto:** es la vacante más floja en fit técnico y, en términos de carrera, es un **paso lateral
o hacia atrás** respecto a tu objetivo (Analista/Ingeniero de Automatización e IA). La incluyo porque
pediste postular a las 3, y puede servir como red de seguridad de ingresos mientras cierras #1 o #2.
En el formulario seré honesto sobre PHP y ticketing (mejor transparencia que un descarte en la prueba
técnica del proceso).

---

## Siguiente paso
Carpetas creadas con CV + mensaje por vacante:
- `zemsania-prompt-engineer/`
- `zemsania-integration-engineer/`
- `cari-ai-soporte-tecnico/`
