# 16 · Historial de Aplicaciones (tracker para gráfica)

> Registro único de todas las vacantes a las que aplicamos. Mantén actualizada la columna **Estado**
> para poder graficar el embudo después. Los CVs adaptados se entregan en el chat (no se guardan aquí,
> por acuerdo).

## 🔢 Pipeline de estados (usa exactamente estos para poder contar/graficar)
`Por aplicar` → `Aplicado` → `Screening (RH)` → `Entrevista técnica` → `Entrevista final` →
`Negociación` → `Oferta` → `Contrato`
Estados de salida: `Rechazado` · `Descartado por mí` · `Sin respuesta` · `En pausa`

---

## 📋 Tabla de aplicaciones

| # | Empresa | Rol | Modalidad / Lugar | Fuente | Fecha aplicación | Encaje | Estado | Notas |
|---|---------|-----|-------------------|--------|------------------|--------|--------|-------|
| 1 | Softtek | Ingeniero de IA (Agentic RAG) | Remoto Colombia / Híbrido Bogotá | LinkedIn | _por definir_ | Medio | Por aplicar | Pide 5+ años e inglés 96–100% (near-native). Stretch. |
| 2 | Dropi | AI Architect | Híbrido · Cali | LinkedIn | _por definir_ | **Alto** | Por aplicar | Fit casi 1:1 (anti-alucinación, latencia, RAG, LLMOps). Ojo: híbrido Cali. |
| 3 | Vozy | Technical Agent Developer (rol intern) | Remoto · Medellín | Web (BambooHR) | _por definir_ | Empresa **Alta** / rol **Bajo** | Por aplicar | Empresa = tu nicho de voz. El puesto publicado es de prácticas; apuntar a rol mid/senior o networking. |
| 4 | 5411 Hub (cliente confidencial) | Generative AI Engineer | Remoto · LATAM | Web (5411 Hub) | _por definir_ | Alto | Por aplicar | Inglés bilingüe EXCLUYENTE. Corregir form: inglés "B2+" (no "Average"), experiencia "3+" (no 2). |
| 5 | VASS LATAM | Claude Backend Developer (Senior) | Remoto · US-facing | LinkedIn | _por definir_ | **Bajo/Stretch** | Evaluar | 🚩 Pide **5+ años Python backend** y **tarjeta profesional** (eres estudiante) → 2 gates duros. Fuerte en seguridad LLM (sus certs) y Claude vía Bedrock. Mejor por mensaje directo a la reclutadora. |
| 6 | Siigo S.A.S | AI Engineer Sr | Remoto · Colombia | Portal Siigo | _por definir_ | **Medio-Alto** | Por aplicar | Fit fuerte en LLM/RAG/agentes/fine-tuning (LoRA/QLoRA/HF). Gaps: **Golang** (valorado) y **Azure** (tiene AWS/GCP). Pide 3-4 años → cumple. Selene aporta ágil/equipo/datos. |

> Actualiza "Fecha aplicación" y "Estado" cada vez que avances. Añade filas nuevas debajo.

---

## 📊 Resumen para la gráfica (actualiza los conteos)

| Estado | Cantidad |
|--------|----------|
| Por aplicar | 5 |
| Evaluar (gates duros) | 1 |
| Aplicado | 0 |
| Screening (RH) | 0 |
| Entrevista técnica | 0 |
| Entrevista final | 0 |
| Negociación | 0 |
| Oferta | 0 |
| Contrato | 0 |
| Rechazado | 0 |
| Sin respuesta | 0 |

**Métricas del embudo (se calculan luego):**
- Tasa de respuesta = (Screening o más) / Aplicados
- Tasa de entrevista = Entrevistas / Aplicados
- Tasa de oferta = Ofertas / Aplicados

> Cuando tengamos datos, te genero la gráfica del embudo (ej. barras o funnel) a partir de esta tabla.

## 🏢 Por qué cada empresa necesita tu perfil (contexto de investigación, 2026-06-26)
- **Softtek:** consultora nearshore global (desde 1982, 15k+ personas). Empuja IA agéntica/GenAI para
  clientes Global 2000 (acelerador "FRIDA"), certificada ISO/IEC 42001 (IA responsable). El rol es
  para entregar proyectos a clientes → valoran RAG productivo, escalabilidad, IA responsable/guardrails
  y comunicación con cliente (de ahí el inglés near-native).
- **Dropi:** habilitador de e-commerce/dropshipping en LATAM (unicornio 🦄), alto volumen de pedidos,
  logística y soporte. Quieren un AI Architect que defina la estrategia de IA agéntica + LLMOps,
  arquitectura de vector DBs y flujos RAG corporativos, con foco en **mitigar alucinaciones y latencia
  en el core**. Tus fortalezas calzan casi exactas.
- **Vozy:** líder LATAM en Voice AI (asistente "Lili": resolución en primer contacto, cobranza,
  speech analytics, biometría de voz; ~$8M levantados, respaldo de Globant Ventures y fundador de
  Dropbox). Tu experiencia de agente de voz es justo su core. El puesto publicado es junior/intern,
  por eso conviene apuntar más alto o entrar por networking.
- **5411 Hub:** headhunting LATAM/US. Su cliente construye productos de GenAI (asistentes virtuales,
  agentes, automatización). Buscan GenAI Engineer con LLMs, RAG, OpenAI/Anthropic/Gemini y APIs;
  inglés bilingüe excluyente.
