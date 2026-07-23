# 18 · Contexto — Proyecto Selene (Open edX · Universidad del Cauca)

> Proyecto de curso (ingeniería de software) que sirve como evidencia de **Scrum/ágil, trabajo en
> equipo grande, despliegue/DevOps y pipelines de analítica de datos**. Útil para vacantes que valoran
> metodologías ágiles, trabajo en equipo y madurez de ingeniería (ej. Siigo). Fuente: PDFs Sprints_SELENE
> y Presentacion_Roles&Requerimientos.

## Datos del proyecto
- **Nombre:** Proyecto Selene — despliegue y personalización de **Open edX** (plataforma LMS) para la
  Universidad del Cauca (FIET).
- **Equipo:** 10 integrantes organizados en **squads en paralelo** (Acceso, Cumplimiento, Funcionalidades,
  ORA, Analíticas, Diseño).
- **Duración:** 7 semanas · **entregas semanales (miércoles)** = cadencia ágil tipo Scrum.
- **Backlog:** 85 story points, 14 historias de usuario priorizadas, sprints S1–S7 (Por hacer / En
  proceso / Hecho / Desplegado).

## Objetivo
Dejar operativa Open edX cumpliendo los requisitos del **MEN (Ministerio de Educación)** para obtener
"Registro Calificado", con despliegue en servidor/VM del datacenter.

## Alcance técnico (lo que se construyó)
- **Acceso/Infra:** dominio único por rutas/puertos, **HTTPS**, SSO de sesión LMS↔Studio, manejo de
  CORS y cookies, login sin errores entre servicios.
- **Cumplimiento regulatorio:** análisis e implementación de requisitos del MEN + informe de cumplimiento.
- **Funcionalidades académicas:** creación de estudiantes por el profesor, subida de archivos,
  temporizador de examen, intento único.
- **ORA (evaluación por pares):** rúbricas, entrega y evaluación de trabajos, registro en base de datos.
- **Analíticas (Aspects):** instalación/configuración para **recolectar y procesar datos de uso**,
  métricas para docentes y exportación de reportes (pipeline de datos + visualización).
- **Fases:** Fase 1 despliegue local (req 1–4); Fase 2 integración en VM del datacenter + analíticas (req 5).

## Qué demuestra (skills para vender)
- **Ágil/Scrum:** backlog, story points, sprints, entregas semanales, estados de tablero.
- **Trabajo en equipo grande y distribuido:** 10 personas, squads en paralelo, coordinación y dependencias.
- **DevOps/Despliegue:** servidor, VM de datacenter, HTTPS, dominio único, integración de servicios.
- **Datos/Analítica:** pipeline de recolección y procesamiento de datos de uso (Aspects), métricas y reportes.
- **Requisitos y cumplimiento:** levantamiento de requerimientos y cumplimiento normativo (MEN).

## ✅ Rol y contribución real de Yeison (confirmado en el PDF)
Yeison trabajó en **Cumplimiento regulatorio** y luego en **Analíticas/Datos**:
- **Cumplimiento (HU-03):** investigó los requisitos del **MEN** (Ministerio de Educación) para
  plataformas híbridas y obtener "Registro Calificado"; **redactó el documento oficial de
  requerimientos** y cruzó cada requisito contra lo que Open edX ofrece de forma nativa (cumplido /
  parcial / no cumplido) citando decretos/resoluciones. Otros equipos desplegaron "según el documento
  redactado por Yeison".
- **Analíticas (HU-11, HU-12, HU-13) — stack de datos:** instaló y configuró **Aspects**
  (`tutor-contrib-aspects`, basado en Tutor/Docker) con **ClickHouse** (almacén analítico) y **Superset**
  (BI); construyó **dashboards de métricas para docentes** (estudiantes inscritos, progreso, tasa de
  finalización, actividad), habilitó la **exportación de reportes** y resolvió conflictos de rutas del
  proxy para el despliegue en el servidor final. Documentó el proceso e hizo inventario de XBlocks/plugins.

## 🎯 Por qué es oro para Siigo
- **Pipeline de datos / analítica (ClickHouse + Superset)** → encaja con "pipelines de datos" y BI.
- **Cumplimiento normativo (MEN)** → Siigo es software contable/tributario; la normativa es central.
- **Despliegue con Tutor/Docker** → suma a "DevOps (Docker)".
- **Trabajo en equipo grande (10 personas, squads) bajo Scrum** → madurez de ingeniería.

## Uso estratégico por vacante
- **Siigo / roles con equipo grande y ágil:** úsalo para demostrar Scrum, trabajo en equipo y, si tu rol
  fue Analíticas, el **pipeline de datos** (encaja con "pipelines de datos" del rol).
- **Roles backend/DevOps:** resalta despliegue, HTTPS, dominio único, integración en VM.
- No es un proyecto de IA: úsalo como complemento de habilidades de ingeniería y trabajo en equipo, no
  como evidencia de LLMs.
