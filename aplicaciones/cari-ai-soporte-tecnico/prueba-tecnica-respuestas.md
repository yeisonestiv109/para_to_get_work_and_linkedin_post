# Prueba de Conocimientos Soporte — Cari AI
## Respuestas completas (listas para copiar/pegar en el formulario)

> Correo a usar en el formulario: **yeisondelgado@unicauca.edu.co**
> Nombre: **Yeison Estiven Delgado Ordoñez**

---

## 1. Base de Datos

### 1.1 Query: número total de productos que han sido ordenados

```sql
SELECT SUM(Quantity) AS TotalProductosOrdenados
FROM Orders;
```

**Resultado (verificado):** `28`

> Nota: interpreto "número total de productos ordenados" como la suma de las cantidades
> (`Quantity`) de todas las órdenes — es decir, cuántas unidades de producto se han vendido en
> total, no solo el número de filas de `Orders`. Si lo que buscan es "cuántas órdenes distintas
> existen", la query sería `SELECT COUNT(*) FROM Orders;` (= 5). Dejo ambas interpretaciones por
> claridad, pero la primera es la más útil para un reporte de negocio.

---

### 1.2 Query: reporte de compras de televisores

```sql
SELECT
    p.Name     AS Producto,
    c.Name     AS Cliente,
    o.Quantity AS Cantidad,
    o.Total    AS Total
FROM Orders o
JOIN Client  c ON c.ClientId  = o.ClientId
JOIN Product p ON p.ProductId = o.ProductId
WHERE p.Name = 'Televisor';
```

**Resultado (verificado, coincide exacto con el reporte de ejemplo):**

| Producto  | Cliente | Cantidad | Total      |
|-----------|---------|----------|------------|
| Televisor | Pedro   | 10       | 15.000.000 |
| Televisor | Juan    | 2        | 3.000.000  |
| Televisor | María   | 6        | 9.000.000  |

---

### 1.3 Query: reporte del total de ventas por producto

```sql
SELECT
    p.Name      AS Producto,
    p.Reference AS Referencia,
    SUM(o.Quantity) AS Cantidad,
    SUM(o.Total)    AS Total
FROM Orders o
JOIN Product p ON p.ProductId = o.ProductId
GROUP BY p.ProductId, p.Name, p.Reference
ORDER BY p.ProductId;
```

**Resultado (verificado, coincide exacto con el reporte de ejemplo):**

| Producto   | Referencia | Cantidad | Total      |
|------------|------------|----------|------------|
| Televisor  | 100-342    | 18       | 27.000.000 |
| Nevera     | 100-343    | 5        | 15.000.000 |
| Microondas | 100-344    | 5        | 2.500.000  |

---

### 1.4 Query: clientes con compras superiores a 10 millones

```sql
SELECT
    c.Name     AS Nombre,
    c.LastName AS Apellido,
    SUM(o.Total) AS Total
FROM Orders o
JOIN Client c ON c.ClientId = o.ClientId
GROUP BY c.ClientId, c.Name, c.LastName
HAVING SUM(o.Total) > 10000000
ORDER BY Total DESC;
```

**Resultado obtenido al ejecutar la query contra los datos exactos de la tabla `Orders` del
ejercicio:**

| Nombre | Apellido | Total      |
|--------|----------|------------|
| María  | Torres   | 24.000.000 |
| Pedro  | Pérez    | 15.000.000 |

> **Nota de verificación (transparencia técnica):** al ejecutar esta consulta contra los datos de
> la tabla `Orders` proporcionados en el ejercicio, el total de Pedro Pérez me da **15.000.000**
> (única orden suya: 10 televisores = 15.000.000), mientras que el reporte de ejemplo muestra
> 18.000.000 para Pedro. El total de María Torres sí coincide exactamente (24.000.000 = 9.000.000 +
> 15.000.000). Esto sugiere que en los datos de ejemplo falta una orden adicional de Pedro (o hay
> un ajuste manual en el reporte esperado) que no está reflejada en la tabla `Orders` que se
> proporcionó. La lógica de la consulta (agrupar por cliente, sumar el total, filtrar con `HAVING
> > 10.000.000`) es la correcta para resolver el requerimiento — lo señalo porque, antes de asumir
> que mi query está mal, prefiero verificar el dato de origen: es el mismo hábito que aplicaría
> como soporte técnico ante cualquier reporte que "no cierra".

---

### 1.5 Diferencia entre DROP TABLE, TRUNCATE TABLE y DELETE FROM table

| Instrucción | Qué borra | Estructura de la tabla | Se puede filtrar (`WHERE`) | Velocidad | Rollback (dentro de transacción) | Reinicia auto-increment |
|---|---|---|---|---|---|---|
| **DROP TABLE** | Los datos **y** la estructura (columnas, índices, la tabla misma deja de existir) | ❌ Se elimina | No aplica | Muy rápida | Depende del motor (en MySQL/InnoDB es DDL, normalmente no reversible) | N/A (la tabla ya no existe) |
| **TRUNCATE TABLE** | Todos los datos, pero conserva la tabla vacía | ✅ Se conserva | ❌ No — borra todo, no admite condición | Muy rápida (no registra fila por fila) | Generalmente no (es DDL en la mayoría de motores) | ✅ Sí, normalmente lo reinicia |
| **DELETE FROM table** | Los datos que cumplan la condición (o todos si no hay `WHERE`) | ✅ Se conserva | ✅ Sí — admite `WHERE` | Más lenta (borra y registra fila por fila, dispara triggers) | ✅ Sí, es DML | ❌ No, mantiene el contador |

**En resumen:**
- `DROP TABLE` = eliminar la tabla completa, como si nunca hubiera existido.
- `TRUNCATE TABLE` = vaciar la tabla por completo, dejándola lista para usarse de nuevo (más
  rápido que DELETE porque no revisa fila por fila ni dispara triggers).
- `DELETE FROM table` = borrar registros específicos (o todos), de forma más controlada, más
  lenta, pero reversible dentro de una transacción y compatible con `WHERE`.

> Nota: la sintaxis exacta del formulario dice *"delete * from table"* — aclaro que en SQL
> estándar no se usa `*` en un `DELETE` (eso es sintaxis de `SELECT`); la forma correcta es
> `DELETE FROM tabla WHERE condición;`. Lo señalo porque prefiero ser preciso con la sintaxis antes
> que asumir que la pregunta tenía una errata sin decirlo.

---

## 2. Análisis de Logs

**Pregunta:** ¿El mensaje llega o no al usuario final? Si sí, ¿con qué línea lo corrobora? Si no,
¿cuál es la causa?

**Respuesta: El mensaje NO llega al usuario final.**

**Línea que lo corrobora:**
```
2021-09-20 14:02:21.420|ERRO|5730xxxxxxx| id 1 got error, code is 400 and response is
{"meta":{"api_status":"stable","version":"2.35.4"},"errors":[{"code":1013,"title":"User is not valid","details":"not a WhatsApp user"}]}!
```

**Causa:** El proveedor de WhatsApp (BSP) devolvió un **HTTP 400** con el **código de error
1013 — "User is not valid" / "not a WhatsApp user"**. Esto significa que el número de destino
**no está registrado como usuario de WhatsApp** (o no tiene WhatsApp instalado/activo con ese
número). No es una falla de nuestro sistema: nuestra plataforma sí construyó y envió
correctamente la plantilla (`bienvenida`) al BSP — de hecho hay una línea previa que confirma el
mismo diagnóstico:

```
2021-09-20 14:02:20.958|...| Succesfully got contact info {"contacts":[{"input":"+57304xxxxxxx","status":"invalid"}], ...}
```

Aquí el propio proveedor ya marcaba el contacto como `"status":"invalid"` **antes** de intentar el
envío del template — es decir, el sistema detectó de forma temprana que ese número no es válido en
WhatsApp, y aun así continuó el intento de envío (que luego fue rechazado con el error 1013).

**Cómo se lo explicaría a la tienda (traducción técnico-funcional):**
> "Revisamos los registros del sistema y confirmamos que el mensaje no llegó porque el número al
> que se intentó contactar no está registrado en WhatsApp en este momento (puede que el cliente
> no tenga WhatsApp instalado con ese número, o lo haya cambiado). No es una falla de nuestra
> plataforma: el mensaje fue procesado y enviado correctamente, pero WhatsApp lo rechazó del lado
> del destinatario. Les recomendamos verificar el número directamente con el cliente."

---

## 3. Incidente vs. Requerimiento

Un **incidente** es una interrupción no planificada o una **reducción de la calidad** de un
servicio que ya está funcionando — algo que estaba bien y se dañó o dejó de funcionar como se
esperaba (ej.: "el sistema de ventas está caído", "no me llegan los mensajes de WhatsApp"). El
objetivo al atenderlo es **restaurar el servicio lo más rápido posible**.

Un **requerimiento** (o solicitud de servicio) es una **petición de algo nuevo** que el usuario
necesita para poder trabajar, pero que no implica que algo esté roto (ej.: "necesito acceso a un
sistema", "quiero que me instalen un programa", "necesito un usuario nuevo"). El objetivo es
**entregar** algo, no repararlo.

**Diferencia clave en una frase:** el incidente se soluciona porque algo **se rompió**; el
requerimiento se atiende porque alguien **necesita algo que nunca ha tenido o que es adicional** a
lo que ya funciona.

---

## 4. Reporte en PHP

Ver archivo adjunto: **`prueba-tecnica-php-YeisonDelgado.zip`**

Implementé el reporte de **"Total de ventas por producto"** usando **Slim Framework 4 + Twig 3**
(PHP), con una base de datos SQLite autocontenida (misma lógica SQL que usaría contra MySQL,
solo cambia el driver de conexión). El proyecto incluye:

- `database/schema.sql` y `seed.php` — datos idénticos a las tablas del ejercicio.
- `public/index.php` — la ruta que genera el reporte (HTML) y una ruta adicional en JSON.
- `templates/reporte_ventas.twig` — la vista del reporte.
- `README.md` — instrucciones exactas para ejecutarlo en 3 comandos.

**Instrucciones rápidas para visualizarlo:**
```bash
cd prueba-tecnica-php
composer install       # (opcional, el zip ya incluye vendor/)
php database/seed.php
php -S 127.0.0.1:8099 -t public
```
Luego abrir `http://127.0.0.1:8099/` en el navegador. El resultado ya fue verificado y coincide
exactamente con el reporte de ejemplo de la prueba (Televisor $27.000.000, Nevera $15.000.000,
Microondas $2.500.000).

---

## 5. Priorización de 3 tickets simultáneos (9:00 AM)

**Orden de atención: 2 → 3 → 1**

### 1º — El sistema de ventas está lento para todos los cajeros (filas de clientes esperando)
**Por qué primero:** es el único de los tres con **alto impacto Y alta urgencia** a la vez.
Afecta a **múltiples usuarios simultáneamente** (todos los cajeros de la tienda principal) y tiene
un efecto de negocio **inmediato y visible**: clientes en fila = ventas que se están perdiendo o
retrasando en tiempo real, y una mala experiencia de cliente que la empresa no puede recuperar
después. Cada minuto que pasa, el costo (en dinero y en reputación) sigue subiendo. Es la
definición clásica de "alto impacto, alta urgencia" en cualquier matriz de priorización de
soporte (tipo ITIL).

### 2º — Usuario nuevo sin accesos en su primer día
**Por qué segundo:** afecta a **una sola persona**, y aunque es incómodo para ella, **no está
generando pérdida de dinero activa ni afectando a otros usuarios** mientras se resuelve el ticket
#1. Sí tiene algo de urgencia (es su primer día, da mala impresión que esté "sentado sin hacer
nada"), así que lo atiendo justo después de contener el problema masivo — no lo deja esperando
todo el día.

### 3º — El Director General no puede imprimir un documento urgente
**Por qué tercero, y no primero:** aquí es donde aplico el mismo criterio que uso al diseñar
sistemas: **no dejarme llevar por la jerarquía de quien reporta, sino por el impacto real medido
en negocio.** Es un problema de **una sola persona** y, casi siempre, tiene una **alternativa
inmediata** que no depende de mí arreglando la impresora en ese momento: exportar el documento a
PDF y enviarlo por correo/USB a otra impresora, o imprimirlo desde el computador de un
compañero. Le comunicaría eso de inmediato ("mientras resuelvo el ticket #2, imprímalo desde
[alternativa] para no perder la reunión") y quedaría agendado justo después del ticket #2 — así
nadie se queda "abandonado", pero tampoco dejo que una fila de clientes crezca por atender una
impresora que tiene una salida alterna en minutos.

**Principio general que aplico:** priorizo por **impacto (a cuántos afecta / cuánto dinero-tiempo
cuesta) × urgencia real (no percibida)**, no por el cargo de quien pregunta. Además, siempre
comunico el orden y el porqué a todas las partes — eso evita que alguien se sienta ignorado
mientras espera.

---

## 6. Ticket vago: "El sistema no sirve, me sale error cuando guardo. ¡Urge arreglarlo!"

### Qué reviso por mi cuenta antes de contactar al usuario (para no llegar en blanco)

1. **Identificar quién es el usuario y qué módulo/pantalla usa habitualmente** — reviso su
   perfil/rol en el sistema para acotar en qué parte de la aplicación probablemente ocurrió el
   error ("guardar" puede ser un formulario, una orden, un registro, etc.).
2. **Logs de aplicación** (timestamp cercano al reporte del ticket) — busco errores recientes
   asociados a su usuario o sesión: excepciones, *stack traces*, códigos HTTP 4xx/5xx en el
   endpoint de "guardar".
3. **Base de datos** — reviso si hay bloqueos (*locks*), restricciones violadas (llave duplicada,
   *foreign key*, campo obligatorio nulo) o si la última escritura relacionada con su usuario
   falló o quedó incompleta.
4. **Estado general del servicio** — confirmo si el error es puntual de este usuario o si hay más
   tickets similares entrando al mismo tiempo (¿es un problema aislado o una caída general?).
5. **Cambios recientes** — reviso si hubo un despliegue, migración o cambio de configuración justo
   antes de que empezara a reportarse el error (causa raíz probable si coincide en el tiempo).
6. **Reproducir el error yo mismo** si es posible, con un usuario de prueba, para no depender
   únicamente de lo que él pueda describir después.

### Qué le respondería al usuario (sin hacerlo enojar más)

> "Hola [nombre], gracias por avisarnos. Ya estoy revisando los registros del sistema para
> identificar qué está causando el error al guardar — en un momento te confirmo si encuentro la
> causa o si necesito un dato adicional de tu parte (por ejemplo, una captura del mensaje exacto
> de error o la hora aproximada en que ocurrió, para ubicarlo más rápido en los registros). Te
> mantengo informado en los próximos minutos."

**Por qué está redactado así:** reconoce el problema de inmediato (no lo ignoro), muestra que ya
estoy actuando (no lo hago esperar sin hacer nada), y le pido *información específica* en vez de
un genérico "cuéntame más" — eso reduce la frustración porque siente que ya avancé antes de
pedirle algo, y le doy una salida concreta (captura + hora) que es fácil de dar incluso para un
usuario no técnico y molesto.
