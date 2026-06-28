# Hoja de Vida — Curso GDSD / Proyecto SUCCESS

> Versión para el contexto académico-internacional del curso, pero **dándote el crédito profesional que
> ya tienes**: lidera con tu rol de ingeniero que construye IA en producción, con métricas y evidencia
> concreta (nada inferido). Pásala a PDF y colócala en la posición #1 del PDF consolidado.

---

```
YEISON ESTIVEN DELGADO ORDOÑEZ
AI / Software Engineer — IA Conversacional, Agentes de Voz y Sistemas Multi-Agente
(Estudiante de Ingeniería Electrónica y Telecomunicaciones, Universidad del Cauca)

Popayán, Cauca, Colombia | +57 316 082 2755
yeisondelgado@unicauca.edu.co | yeisonestivendelgado109@gmail.com
LinkedIn: https://www.linkedin.com/in/estiven-delgado/ | GitHub: https://github.com/YeisonDelgado

PERFIL
Ingeniero de software de IA con más de 14 meses de experiencia profesional 100% remota llevando
sistemas a producción (no solo prototipos): agentes de voz en tiempo real, asistentes con RAG y flujos
multi-agente. Trabajo de forma autónoma y asíncrona con equipos y clientes distribuidos, con prácticas
de entrega iterativa, control de versiones (Git) y CI/CD. Inglés C1. Busco aplicar y ampliar esta
experiencia en un entorno de desarrollo global distribuido, con metodologías ágiles y clientes reales.

EXPERIENCIA PROFESIONAL
Lead AI Engineer — Glovar Services S.A.S | 100% remoto | abr. 2025 – jun. 2026 (14+ meses)
Evidencia de trabajo remoto sostenido y entrega en producción con un equipo distribuido.
- Diseñé y desplegué a producción "Glovar Prospector" (v3.14.0), una plataforma B2B de prospección
  autónoma multi-agente: descubrimiento, enriquecimiento e hiperpersonalización de outreach.
- Arquitectura: frontend Next.js 16 / React 19; backend FastAPI sobre infraestructura serverless
  (Modal) con autoescalado hasta 10 contenedores; datos en Supabase/PostgreSQL 17 con Row Level
  Security (multi-tenant); orquestación de agentes con LangGraph y tool-calling estricto.
- Construí un agente de voz en tiempo real con latencia de extremo a extremo por debajo de un segundo,
  usando Twilio Media Streams, Deepgram (STT nova-3 + TTS Aura) y LLM (Groq Llama 4), con manejo de
  audio mulaw/PCM, VAD y fallbacks de ejecución para llamadas reales.
- Sostuve alta concurrencia sin arranque en frío mediante un pool rotativo de 9 claves de API y
  ThreadPoolExecutor; implementé observabilidad de LLM (LangSmith) para reducir el gasto de tokens.
  [Soporte: constancia laboral de Glovar — adjunta]

AI Solutions Engineer — Challenge OmniRetail (Finalista: Top 5 de 50 equipos) → freelance | 2026
Evidencia de desempeño bajo competencia y plazos, frente a 50 equipos.
- Construí un agente conversacional de retail con RAG híbrido: SQLite (transaccional) + ChromaDB
  (políticas), un "routing gate" de 5 ramas para optimizar consultas y reducir consumo de tokens, sobre
  Strands Agents SDK + Groq (Qwen3-32B).
- Diseñé una arquitectura stateless con aislamiento atómico de sesiones (evita cross-contamination de
  datos sensibles) y una jerarquía de la verdad (SQL > RAG) con trazabilidad estricta para una política
  de "cero alucinaciones"; defensas anti prompt-injection.
- Bajo cuellos de botella de infraestructura, gestioné límites de TPM (Tokens Per Minute) y migración de
  proveedor de LLM para mantener un TTFT (Time To First Token) competitivo; pipeline con CI/CD y streaming.

Investigador en Edge AI & IoT — Universidad del Cauca (grupo/semillero de investigación) | 2025 – 2026
Evidencia de rigor técnico y resultados medibles.
- Diseñé un sistema multi-agente con Small Language Models (Llama-3.2-1B, Qwen2.5, Phi-1.5, SmolLM2) y
  adaptadores QLoRA conmutables (LoRA/PEFT, Unsloth) para detección autónoma de amenazas en redes IoT,
  sin necesidad de reentrenar el modelo base.
- Resultados: F1-Macro de 0.998 sobre el dataset N-BaIoT (~1.44M registros) e inferencia en ~93.8 ms por
  flujo en NVIDIA Jetson Orin Nano (hardware de 7–15 W), usando cuantización FP16/4-bit.
- Base vectorial en memoria (ChromaDB) para amenazas zero-day; análisis con scikit-learn y SHAP;
  evaluación y trazabilidad con LangSmith.
  [Soporte: constancia de semillero/grupo de investigación — adjunta]

PROYECTOS Y LOGROS DESTACADOS (trabajo en equipo y amplitud técnica)
- WilsonAI — Hackathon Talento Tech Región 3 (8.º lugar / Top 10, equipo, 18 horas, presencial; may. 2026).
  Plataforma móvil y web con IA para optimizar el rescate, triage y seguimiento de animales en condición
  de calle en Popayán (reto "Patas Conectadas: Bienestar Animal y Salud Pública"). Desarrollada junto a
  mi equipo en 18 horas: reporte multimodal (voz, texto, imagen) con enfoque offline-first y
  sincronización automática, análisis con IA para alertas tempranas y priorización de casos,
  geolocalización para conectar con la veterinaria/refugio más cercano y trazabilidad clínica.
  Diseño orientado a datos y a estándares de salud (HL7/FHIR) y seguridad de información (ISO 27001).
  [Soporte: constancia del hackathon — adjunta]
- VitaminD — Prototipo IoT + IA para monitoreo de estrés (proyecto en equipo, Universidad del Cauca):
  integración de hardware sensor, modelo de IA y plataforma de asistencia.
- RutaYA — Backend en Flask y dashboard para una app de transporte público en Popayán: estimación de
  rutas, cálculo de tarifas y seguimiento de buses en tiempo real vía API REST.
- Controlador SDN — Plano de control con Ryu sobre topología NSFNET (Mininet), enrutamiento con NetworkX
  (Dijkstra) y plano de gestión en FastAPI (afín a mi formación en Telecomunicaciones).
- Restaurant Management System — Aplicación full-stack: NestJS + Next.js + PostgreSQL + Redis + Docker.

FORMACIÓN ACADÉMICA
- Ingeniería Electrónica y Telecomunicaciones | Universidad del Cauca | 2021 – 2026 | Promedio: 4.1/5.0
- Bootcamp Inteligencia Artificial – Nivel Avanzado | Talento Tech (MinTIC) | 2026

IDIOMAS
- Español: nativo
- Inglés: C1 Advanced (EF SET, 64/100; speaking, listening, reading; mayo 2026)

HABILIDADES TÉCNICAS
- Lenguajes: Python (avanzado), TypeScript/JavaScript, SQL.
- IA/Agentes: LangGraph, LangChain, Strands Agents SDK, RAG, LLMs, Voice AI, guardrails, LoRA/QLoRA, SLMs.
- Backend/Infra: FastAPI, REST, WebSockets, microservicios async, AWS (Lambda, Bedrock), Google Cloud,
  Modal serverless, Docker, CI/CD, Git.
- Datos: PostgreSQL/Supabase (pgvector), SQLite, ChromaDB, Redis; PyTorch, scikit-learn.
- Telecomunicaciones/Redes: SDN (Ryu/Mininet), IoT, Edge Computing.

METODOLOGÍAS Y COMPETENCIAS
- Entrega iterativa y CI/CD, control de versiones (Git), trabajo remoto autónomo y asíncrono,
  comunicación técnica, resolución de problemas, compromiso y aprendizaje rápido. Familiaridad con Scrum.

CERTIFICACIONES (soportes adjuntos)
- IBM Full Stack Software Developer (Coursera, 2025)
- Google Advanced Data Analytics (Coursera, 2025)
- Google Cybersecurity Professional Certificate (Coursera, 2025)
- Google Cloud Skill Badges: Terraform, IAM/Service Accounts, DevOps Workflows, App Dev (2025)
- Cisco: Python Essentials 1 y 2, Introduction to IoT (2025)
- EF SET English Certificate — C1 Advanced (2026)
```

---

## Notas para Yeison
- Ajusta **semestre** y **promedio** a SIMCA (deben coincidir exactamente).
- Mantén `[Soporte: ... adjunta]` SOLO si efectivamente adjuntas esa constancia; si no la consigues,
  quita la etiqueta y no marques esa casilla en el formulario (todo es "sujeto a verificación").
- Si tu constancia del hackathon (pettech) acredita **top 10**, añádela como línea destacada en la
  experiencia; si fue solo participación, déjala fuera de los puntos de hackathon.
- Toda afirmación de la HV está respaldada por un proyecto real o un documento: nada inferido.
