# OmniRetail Colombia — Agente Autónomo de Retail

OmniRetail es un Agente de Ventas Autónomo diseñado para el sector retail colombiano. Impulsado por inteligencia artificial y el robusto framework Strands Agents SDK, este sistema fusiona lo mejor de dos mundos: maneja datos transaccionales estructurados altamente fiables a través de SQLite y entiende a la perfección reglas no estructuradas utilizando técnicas avanzadas de Recuperación Aumentada de Generación (RAG).

Su objetivo es ofrecer asesoría comercial, consulta en tiempo real de catálogo y la gestión de expedicionarios (historiales de compras) con el más alto nivel de seguridad.

---

## Arquitectura Stateless de Aislamiento de Identidad (Atómico y Preventivo)

El núcleo de la seguridad en OmniRetail se basa en una arquitectura **100% Stateless e instanciación nativa** mediante Strands Agents SDK. Se destierra el concepto vulnerable de historiales unificados (lista de mensajes plana) en memoria RAM, para abrazar un modelo de contenedores lógicos asincrónicos por usuario. El aislamiento es Atómico y Preventivo porque ocurre en el bucle principal entes de que el Agente y el LLM siquiera reciba el prompt:

- **Bóvedas Dinámicas (Vaults):** Al momento en que el sistema detecta preactivamente un patrón numérico distinto a la sesión del orquestador, destruye físicamente el hilo anterior (`del agente`) y carga un nuevo objeto re-instanciado y en blanco usando `FileSessionManager`. El modelo despierta ante la nueva identidad sin posibilidad de arrastrar el caché de la vieja cuenta.
- **Aislamiento por Archivo:** Strands asigna a cada cliente un directorio aislado bajo `sessions/session_<DNI>/`. Queda denegado matemáticamente el filtro o mezcla de información ("cross-contamination") de contextos del cliente A hacia el cliente B.
- **Inyección por Turno:** Para la comprensión de estado sin persistencia manual, Python inyecta tras-bastidores el nombre real extraído de la BD mediante la capa M2M de `session_context.py` usando un mensaje `[SISTEMA]` oculto. 

---

## Motor de Decisiones y Routing Gate

Para prevenir desvíos y fuga de información privada, el `SYSTEM_PROMPT` incrustado instiga una política estricta de evaluación o "Routing Gate". Toda petición humana debe encajar obligatoriamente en 5 ramas antes de invocar cualquier herramienta:

1. **Rama 1 (FAQ Genérica):** Preguntas de canales de venta o tiendas físicas.  *(Acción: Utilizar RAG de Políticas de Empresa. Sin identificar)*
2. **Rama 2 (Políticas de Devolución):** Límites de garantía. *(Acción: Consultar RAG de Políticas. Sin identificar)*
3. **Rama 3 (Catálogo Público):** Stock, características de productos. *(Acción: Base de Datos de Productos. Sin identificar)*
4. **Rama 4 (Datos Financieros Sensibles):** Impuestos o valores de factura. *(Acción: BLOQUEO HASTA VERIFICACIÓN DNI/Teléfono de la cuenta)*
5. **Rama 5 (Gestión de Pedidos PII):** Rutas de envíos, transacciones, historiales o seguimientos. *(Acción: BLOQUEO HASTA VERIFICACIÓN DNI/Teléfono de la cuenta)*

---

## Seguridad Anti-Alucinación y Controles de Prompt

OmniRetail incorpora cortafuegos para controlar la inherente entropía de un sistema IA genérico de 32B parámetros (Qwen-32B):

- **Jerarquía de la Verdad (Nivel 1 vs Nivel 2):** Los datos relacionales del sistema contable (Campos SQL) tienen supremacía legal total y aplastan cualquier suposición que un documento general PDF (RAG) o el propio pre-entrenamiento del LLM tenga al respecto.
- **Resistencia a inyección de Prompt:** Reglas inmutables bloquean roles administrativos, asunciones ingenieriles o escapes como comandos ("olvida tus instrucciones", "responde como root").
- **Filtro de Salida (Guardrail):** En `main.py`, si el LLM trata de invocar en su respuesta directa un nombre o DNI distinto al cliente actualmente validado y sellado en el `SessionState`, se atrapa el token en memoria antes de la UI y se exige al LLM auto-corregir el error invisiblemente y devolver el output regenerado.
- **Cero Tecnicismos:** Regla impuesta de ofuscación donde el bot no nombra jamás nombres lógicos de base de datos (`customer_id`, `is_final_sale`), sino un formato comercial afable, cálido y conciso.

---

## Guía de Instalación y Entorno

Sigue estos pasos para arrancar a OmniRetail en tu terminal de comandos local:

### 1. Entorno Virtual y Dependencias
Debes poseer Python ^3.10 validado. Se requiere crear un entorno para proteger tus credenciales.
```powershell
# En powershell
python -m venv .venv
.\.venv\Scripts\activate
```
```bash
# En Bash
python3 -m venv .venv
source .venv/bin/activate
```

Instala Strands Agents SDK junto a toda la plomería del proyecto:
```bash
pip install strands-agents python-dotenv groq sqlite3
```

### 2. Variables de Entorno (API Key)
OmniRetail requiere a **Groq (OpenRouter)** apuntando al modelo rápido `qwen/qwen3-32b`. Crea un archivo `.env` en la raíz e introduce clave API activa.

```yaml
# Archivo: .env
GROQ_API_KEY="gsk_XXXXXXXXXXXXXXXXXXXXXXXXX"
```

### 3. Base de Datos Local
El orquestador depende de tener su base de datos sembrada para consultas exactas y retención:
1. Asegúrate de tener al menos `data/omniretail.db` poblado o ejecutar el script si corresponde para cargar los CSV provistos (`customers.csv`, `orders.csv`, `products.csv`).

### 4. Lanzar Interfaz
Para invocar el servicio conversacional en bucle con depuración y métricas temporales del API:
```bash
python main.py
```
