# 13 · Calendario de Contenido + Posts redactados (voz de Yeison)

> Posts listos para publicar, escritos en tu voz (humana, no IA), basados en tus proyectos reales.
> Estilo tomado de cómo escriben los referentes técnicos que funcionan en LinkedIn 2026.
> Complementa al plan general de pilares en `06-plan-contenido-posts.md`.

---

## 🎙️ Cómo escriben los referentes (y por qué funciona en 2026)

> Algoritmo (update mayo 2026): **premia comentarios > likes** y **penaliza posts que se leen en <10s**.
> El texto con olor a IA pierde en ambos. Por eso los grandes escriben así:

1. **Gancho corto y concreto en la línea 1.** Una afirmación que reta o un número raro. Nada de intro.
2. **Una idea por post.** No enseñan todo; dejan tela para los comentarios.
3. **Frases cortas, ritmo variado.** Párrafos de 1-2 líneas. Aire en blanco.
4. **Historia real con fricción.** El error, la madrugada, el bug que costó plata. La fricción engancha.
5. **Especificidad brutal.** "18 errores", "TPM nos frenaba", "latencia de 4s a 800ms". Lo vago aburre.
6. **Cierran con UNA pregunta abierta** que invita a opinar (no "¿qué opinas?" genérico; algo con filo).
7. **Sin clichés de IA:** nada de "en el mundo actual", "desbloquear el potencial", guiones largos por todos lados, ni listas perfectas de tres.
8. **Lo leen en voz alta antes de publicar.** Si no lo dirían hablando, lo reescriben.

> Tu post de Edge AI/QLoRA (275 impresiones) ya tiene este ADN. Vamos a repetir esa fórmula.

### ⚙️ Flujo de trabajo recomendado (para que NO suene a IA)
- Usa estos borradores como **base**, pero **edítalos con tu voz**: cambia una palabra, mete un detalle
  que solo tú sabes, ajusta el final. Tú eres el autor; el borrador es solo el andamio.
- Publica, y en la **primera hora responde TODOS los comentarios** (el algoritmo premia eso).
- Comenta con valor en 3-5 posts de otros el mismo día.

---

## 🗓️ Calendario (4 semanas · 3 posts/semana · Lun-Mié-Vie)

| Sem | Lunes | Miércoles | Viernes |
|-----|-------|-----------|---------|
| 1 | Post 1 (historia: por qué voz) | Post 2 (caso: latencia) | Post 3 (negocio: cero alucinaciones) |
| 2 | Post 4 (challenge → freelance) | Post 5 (opinión: RAG vs fine-tuning) | Post 6 (Edge AI / costos nube) |
| 3 | Post 7 (TPM/TTFT, ingeniería real) | Post 8 (carrusel: stack de voz) | Repost/!comenta + idea propia |
| 4 | Post 9 (error y aprendizaje) | Post 10 (cómo calcular ROI de un bot) | Recap + CTA "estoy disponible" |

> Horario sugerido: mar-jue por la mañana (hora CO). Mide y ajusta con tus analytics.

---

## ✍️ POSTS REDACTADOS (borradores en tu voz)

### Post 1 — Por qué me metí en agentes de voz (historia)
```
La primera vez que un agente de voz que construí contestó una llamada real, se me aceleró el pulso.

No por la IA. Por la latencia.

Había un silencio de casi 2 segundos antes de que respondiera. Y 2 segundos en una llamada se sienten
como una eternidad. La persona al otro lado ya estaba diciendo "¿aló? ¿sigues ahí?".

Ahí entendí algo: en un chatbot de texto nadie nota 800ms. En voz, lo notas todo.

Pasé los días siguientes peleando cada milisegundo. Streaming de STT y TTS. Reordenar el pipeline.
Cachear lo que se podía. Bajé el silencio a menos de un segundo y la conversación por fin se sintió
humana.

La IA fue la parte fácil. La experiencia fue la difícil.

Si estás construyendo agentes de voz: ¿dónde se te está yendo la latencia, en el modelo o en la red?
```

### Post 2 — El error arquitectónico de mandar todo a la nube (tu tema fuerte, reciclado)
```
Meter GPT-4 o Claude en todo se volvió el reflejo de moda. Para detección de amenazas en tiempo real,
es un error.

Cada vez que mandas telemetría a un servidor externo, le sumas el round-trip de red al tiempo de
inferencia. Y si el ataque te tumba el ancho de banda, tu defensa en la nube se queda ciega.

En mi investigación llevé esto al borde, literal: SLMs corriendo en hardware de bajo consumo, con
QLoRA para que el modelo cupiera en memoria sin perder precisión.

Resultado: F1-Macro de 0.998 e inferencia en ~93.8 ms. Sin depender de la nube. Sin exfiltrar datos.

A veces el modelo más grande no es la respuesta. Es el que corre donde tiene que correr.

¿Comprimir un modelo gigante o entrenar uno ligero desde cero para entornos restringidos?
```

### Post 3 — "Cero alucinaciones" no es un eslogan (negocio + técnico)
```
"Que el bot nunca invente nada."

Suena simple. En datos clínicos o financieros, es la diferencia entre una herramienta útil y una
demanda.

En un agente de retail con el que trabajé, el problema no era que el modelo fuera tonto. Era que era
demasiado servicial: si no sabía algo, se lo inventaba con total seguridad.

La solución no fue un prompt más bonito. Fue arquitectura:
una jerarquía de la verdad. Primero la base de datos. Después los documentos. El modelo nunca habla
sin evidencia auditable detrás.

Si no hay dato, el agente dice "no lo sé" en vez de inventar. Aburrido, sí. Confiable, también.

En tus proyectos de IA, ¿cómo evitas que el modelo "rellene huecos" con seguridad falsa?
```

### Post 4 — De challenge a cliente (iniciativa)
```
Entré a un challenge de IA sin esperar mucho. Quedé Top 5 de 50.

Pero lo que más me sirvió no fue el puesto.

El reto era construir un agente autónomo de retail. Stateless, con RAG híbrido, con seguridad de datos
de verdad. Cuando terminó el challenge, el proyecto no terminó: ese conocimiento lo transferí a un
trabajo freelance real.

Moraleja para quien está empezando en IA: los challenges y los proyectos "de práctica" no son tiempo
perdido. Son tu portafolio antes de tener portafolio. Son la prueba de que sabes hacer, no solo hablar.

Construye cosas. Aunque nadie te pague todavía. El pago llega después, casi siempre por la puerta que
no esperabas.

¿Cuál fue el proyecto "sin pagar" que terminó abriéndote una puerta?
```

### Post 5 — RAG vs fine-tuning (opinión con filo)
```
Opinión impopular: la mayoría de empresas que quieren "fine-tunear un modelo" no necesitan fine-tuning.

Necesitan un buen RAG.

Fine-tuning suena sofisticado. Pero es caro, lento de iterar, y si tus datos cambian la semana que
viene, te toca volver a empezar.

RAG bien hecho resuelve el 80% de los casos de negocio: el modelo consulta tu información actualizada
y responde con eso. Cambias un documento y listo, ya lo sabe.

¿Cuándo SÍ fine-tuning? Cuando necesitas un estilo, un formato o un comportamiento que el prompting
no te da. No para "que sepa de mi empresa". Eso es RAG.

Me ha tocado defender esto en más de una reunión. ¿Estás de acuerdo o me vas a discutir en los
comentarios?
```

### Post 6 — Carrusel: anatomía de un agente de voz (educativo)
> Formato carrusel (5-7 láminas). Texto por lámina:
```
Lámina 1 (portada): Cómo funciona un agente de voz por dentro (sin humo)
Lámina 2: 1) La voz entra → STT en streaming (Deepgram). No esperes a que termine de hablar.
Lámina 3: 2) El texto va al LLM. Aquí se decide qué responder y qué herramienta usar.
Lámina 4: 3) La respuesta sale por TTS, también en streaming. El usuario oye antes de que termine de generarse.
Lámina 5: 4) El enemigo invisible: la latencia. Red + modelo + audio. Cada capa suma.
Lámina 6: 5) Lo que separa una demo de producción: manejar interrupciones y los fallbacks cuando algo falla.
Lámina 7 (cierre): ¿Construyendo uno? Te leo en comentarios. Sígueme para más de IA en producción.
```

### Post 7 — Ingeniería real: cuando el TPM te frena (técnico honesto)
```
3 de la mañana. El agente funcionaba perfecto... hasta que llegaban varios usuarios a la vez.

El cuello de botella no era mi código. Era el límite de tokens por minuto (TPM) del proveedor.

Podía optimizar prompts toda la noche, pero si el proveedor me cortaba el flujo, el TTFT (el tiempo
hasta la primera palabra) se iba a las nubes y la experiencia se caía.

La solución fue menos glamorosa de lo que pensé: migrar a Groq, gestionar los límites de TPM a mano
y rotar claves para sostener la concurrencia.

La IA en producción es 20% modelos y 80% plomería. Nadie pone eso en el portafolio, pero es lo que
hace que algo aguante usuarios reales.

¿Cuál ha sido tu cuello de botella más tonto (y más caro) en un proyecto de IA?
```

### Post 8 — La IA no es un gasto de IT (traducción a negocio)
```
"La IA es muy cara."

Lo escucho seguido. Y casi siempre el problema no es la IA. Es que nadie midió.

Un chatbot o un agente de voz no se mide en "qué bonito quedó". Se mide así:
¿cuántas consultas resuelve sin un humano? ¿cuánto cuesta cada conversación? ¿cuánto tiempo le
devuelve al equipo?

Cuando pones esos tres números sobre la mesa, la conversación cambia. Deja de ser un gasto de
tecnología y pasa a ser una palanca de margen.

La pregunta correcta no es "¿cuánto cuesta la IA?". Es "¿cuánto me cuesta NO automatizar esto?".

¿Cómo le presentarías el ROI de un bot a un CEO que solo ve costos?
```

---

## 🇬🇧 ¿Versión en inglés?
Si publicas para audiencia remota/USD, traduce estos posts manteniendo el tono directo y las frases
cortas (no los traduzcas literal; reescríbelos como los dirías en inglés). Puedo entregarte el lote
completo en inglés cuando me lo pidas.

## ✅ Checklist antes de publicar cada post
- [ ] ¿La línea 1 engancha sin intro?
- [ ] ¿Lo leí en voz alta y suena a mí?
- [ ] ¿Tiene un número o detalle real y concreto?
- [ ] ¿Cierra con una pregunta con filo?
- [ ] ¿Quité clichés de IA y guiones largos de sobra?
- [ ] ¿Voy a responder comentarios en la primera hora?
