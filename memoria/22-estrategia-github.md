# 22 · Estrategia de GitHub (qué ve un reclutador) + Brief para otra sesión de Kiro

> Objetivo: que el GitHub de Yeison **sume, no reste**, cuando lo abra un reclutador o alguien técnico —
> sin exponer código privado/comercial (Glovar Prospector, proyectos propios). Incluye la investigación
> y un **brief listo para pegar en otra sesión de Kiro** que ejecute la limpieza/mejora.

---

## 🚨 ALERTA DE PRIVACIDAD (resolver primero)
- **Este repo (`para_to_get_work_and_linkedin_post`) DEBE ser PRIVADO.** Contiene tu estrategia de
  búsqueda, CVs, historial de aplicaciones, salario y datos personales. Si tu GitHub es público y este
  repo también, te resta muchísimo. → Verificar en Settings → Danger Zone → Change visibility = Private.
- **Nunca subir secretos ni datos de cliente** (API keys, .env, PII, código de empleador). Caso 2026:
  filtración de código de Claude por un source-map → recordatorio de que lo privado se queda privado.
  Si alguna vez se filtró una key, se revoca, no basta con borrar el commit.

---

## 🔎 Qué mira realmente un reclutador / técnico en tu GitHub (investigación 2026)
Orden en que escanean (segundos, luego profundizan si les interesas):
1. **Profile README** → juicio, presentación y prioridades. Es tu "portada".
2. **Repos fijados (pinned, top 6)** → el trabajo que quieres asociar a tu nombre.
3. **Calidad del README de cada repo** → ¿se entiende QUÉ hace en 10 segundos? ¿hay demo/diagrama?
4. **Historial de commits / grafo de actividad** → constancia (verde) vs. abandono (huecos).
5. **El código en sí** (solo perfiles serios/roles técnicos) → ¿el juicio aguanta de cerca?
- **Insight clave:** *el README importa más que el proyecto.* Buscan **arquitectura explicada,
  decisiones justificadas, trade-offs, fallos reconocidos y evidencia de uso real** — no el "happy path"
  de un tutorial. Framework ganador de README/case-study: **Problema → Solución → Resultado (métricas).**
- Reclutador no-técnico: skim de README + pins + actividad. Ingeniero entrevistador: abre el código.

## 🧠 Cómo lo hacen los seniors (patrones)
- **UNA cuenta pública canónica** (la "puerta de entrada"), curada. No dispersar entre cuentas viejas.
- **Pins = tus 6 mejores**, no forks ni tutoriales. Lo débil se archiva o se hace privado.
- Perfil que sirve a técnicos **y** no-técnicos, con **un solo camino de conversión** (portfolio/contacto).
- Menos-pero-mejor: 4-6 repos excelentes ganan a 40 abandonados.

## 🔐 Cómo mostrar VALOR sin exponer lo privado/comercial (Glovar, proyectos propios)
Tienes 4 jugadas legítimas (los seniors las usan):
1. **Repos "case study" (README-only):** repo público SIN código propietario. Solo `README` con:
   problema, tu rol, arquitectura (diagrama), decisiones/trade-offs, resultados con métricas, stack.
   Cuenta la historia sin filtrar el código del empleado/cliente. (Ej: `glovar-prospector-casestudy`).
2. **Demo sanitizada / reimplementación propia:** reconstruye el *patrón* (no el código real) con datos
   ficticios y sin lógica de negocio sensible. Tuyo, público, defendible.
3. **Write-ups / diagramas / posts:** enlaza artículos o el portfolio (`web-portfolio/`) donde explicas
   el sistema con la metodología de `21` (analogías, problema-solución-resultado).
4. **Repos privados "on request":** los mencionas en el README ("código disponible bajo NDA / a petición")
   y das acceso puntual a un evaluador si lo piden.
> Regla: se muestra el **pensamiento y el resultado**, no el activo confidencial.

## 🗂️ Qué hacer con los 2 GitHub (viejo vs nuevo)
- Elegir **uno como profesional/público** (el del CV: `github.com/YeisonDelgado`). Consolidar ahí.
- El **viejo con proyectos "con valor pero mal presentados"**: no borrar el valor; **repotenciar**
  los buenos con READMEs decentes y **archivar/privatizar** los que resten (código muy temprano, cosas
  sin contexto). "Mal presentado" se arregla con README + limpieza, no escondiendo todo.
- Proyectos **comerciales propios**: privados. Si aportan narrativa, crear su *case-study* público.

---

## 📋 BRIEF PARA LA OTRA SESIÓN DE KIRO (copiar/pegar)
> Pégale esto a la nueva sesión (idealmente con acceso a tus repos de GitHub). Reemplaza [handles].

```
CONTEXTO
Soy Yeison Delgado, AI/Software Engineer (Colombia). Estoy buscando empleo remoto en IA (RAG, agentes,
producción). Quiero que mi GitHub sume ante reclutadores y técnicos, sin exponer código privado.
Tengo: (1) una cuenta pública principal [github.com/YeisonDelgado]; (2) una cuenta antigua [handle] con
proyectos valiosos pero mal presentados; (3) proyectos comerciales propios y trabajo de empresa
(Glovar Prospector) que son PRIVADOS y no puedo publicar.

OBJETIVO
Dejar mi GitHub público como un portafolio senior, curado y honesto, siguiendo lo que un reclutador
realmente evalúa (profile README, 6 repos fijados, calidad de READMEs, actividad, código).

TAREAS
1. Crear/mejorar mi PROFILE README (repo especial con mi username): quién soy, en qué aporto valor
   (RAG avanzado, sistemas agénticos en producción), stack, enlaces a portfolio y contacto, con una
   analogía/hook (estilo problema→solución→valor). Servir a técnicos y no-técnicos. Un solo CTA.
2. Auditar todos mis repos: listar cuáles PIN (top 6 reales), cuáles mejorar con README, y cuáles
   archivar/privatizar por restar. Justificar cada decisión.
3. Para cada repo que se queda: escribir un README con estructura Problema → Solución → Resultado
   (métricas), arquitectura/diagrama, decisiones y trade-offs, cómo correrlo, y demo/enlace si hay.
4. Crear repos "case study" (README-only, SIN código propietario) para Glovar Prospector y 1-2
   proyectos comerciales: contar el problema, mi rol, arquitectura y resultados con métricas, dejando
   claro que el código es privado/bajo NDA.
5. Revisar que NINGÚN repo público tenga secretos/keys/.env/PII/datos de cliente. Señalar riesgos.
6. Sugerir un plan de actividad sostenible (commits de valor, no "green farming").

RESTRICCIONES
- Honestidad total: nada inflado; solo lo defendible en entrevista.
- No publicar código de empleador/cliente ni datos sensibles.
- Tono profesional, con analogías claras (metodología: valor primero, explicar simple).

ENTREGABLES
- Texto final del Profile README.
- Tabla de decisiones por repo (pin / mejorar / archivar / privatizar + motivo).
- READMEs redactados para los repos que se quedan.
- Lista de repos "case study" a crear con su contenido.
- Checklist de seguridad/privacidad ejecutado.
```

---

## 📚 Fuentes (parafraseado por licencia)
- [Underdog.io – What hiring managers look for on GitHub](https://landing.underdog.io/blog/what-hiring-managers-look-for-on-github)
- [KindaTechnical – GitHub portfolio: what recruiters look for](https://www.kindatechnical.com/technical-interview-preparation/github-portfolio-what-recruiters-actually-look-for.html)
- [Medium – Your README is what gets you hired](https://medium.com/@garvanand03/your-ai-project-isnt-what-gets-you-hired-your-readme-is-3e5b3909bb8f)
- [Hyperskill – Developer portfolio 2026](https://hyperskill.org/blog/post/building-a-developer-portfolio-in-2026-what-actually-gets-attention)
- [daily.dev – Developer profile that gets noticed](http://daily.dev/blog/how-to-build-developer-profile-get-noticed/)
- [GitHub Gist – Structure a profile like a senior engineer](https://gist.github.com/NathanNorman/2911f33fbf13af4d9d56f19353d3fa92)
- [GitHub Docs – Setting repository visibility](https://docs.github.com/articles/setting-repository-visibility)
