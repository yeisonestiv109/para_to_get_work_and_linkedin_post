# Agente de Voz — Última Milla 🎙️📦

> **PoC de automatización logística via voz** usando Twilio Media Streams, Deepgram (STT en streaming + TTS Aura), Groq (LLM) y Supabase.

> ℹ️ **Nota de auditoría (2026-06):** el proyecto migró el STT/TTS de ElevenLabs/Whisper-por-lotes a **Deepgram en streaming**. Algunas secciones históricas de este README se conservan como referencia; el stack vigente es el de la tabla siguiente.

## Stack Tecnológico

| Componente | Tecnología | Modelo / Versión |
|---|---|---|
| Framework Web | FastAPI + Uvicorn | 0.137 / 0.34 |
| Telefonía | Twilio Media Streams | SDK 9.6 |
| STT (Voz → Texto) | Deepgram (streaming) + Groq Whisper (respaldo) | `nova-3` / `whisper-large-v3-turbo` |
| LLM (Razonamiento) | Groq LLaMA 4 | `meta-llama/llama-4-maverick-17b-128e-instruct` |
| TTS (Texto → Voz) | Deepgram Aura | `aura-2-celeste-es` |
| Orquestación | LangGraph | grafo de estados conversacional |
| Datos / RAG | Supabase (PostgREST + pgvector) | — |
| Audio | audioop (stdlib hasta 3.12 / audioop-lts en 3.13+) | mulaw ↔ PCM 16-bit |
| Entorno | Python 3.12.x | venv |

## Estructura del Proyecto

```
Proyecto_Ultima_Milla_Workflow/
├── app/
│   ├── __init__.py
│   ├── main.py              # FastAPI + WebSocket + TwiML
│   ├── core/
│   │   ├── __init__.py
│   │   └── config.py        # Variables de entorno centralizadas
│   └── services/
│       ├── __init__.py
│       ├── twilio_service.py    # Llamadas salientes REST + validación de firma
│       ├── supabase_service.py  # Acceso centralizado a Supabase (pooling)
│       └── ai_service.py        # Groq STT (respaldo) + Deepgram TTS
├── dispatch_controller.py    # TUI para disparar llamadas (centro de control)
├── simular_gps.py            # Simulador de telemetría GPS
├── seed_manuales.py          # Carga vectorial de manuales (RAG)
├── .env.example              # Plantilla de variables de entorno
├── requirements.txt          # Dependencias Python
├── setup.sh                  # Script de configuración del entorno
└── README.md
```

## Instalación Rápida

### Opción A — Usando setup.sh (Linux/macOS/Git Bash)
```bash
chmod +x setup.sh
./setup.sh
```

### Opción B — Manual (Windows PowerShell)
```powershell
# Crear entorno virtual
python -m venv .venv

# Activar (PowerShell)
.venv\Scripts\Activate.ps1

# Instalar dependencias
pip install -r requirements.txt

# Copiar y editar variables de entorno
copy .env.example .env
notepad .env
```

## Configuración

Edita el archivo `.env` con tus credenciales:

```env
TWILIO_ACCOUNT_SID=ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
TWILIO_AUTH_TOKEN=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
TWILIO_PHONE_NUMBER=+1XXXXXXXXXX
GROQ_API_KEY=gsk_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
ELEVENLABS_API_KEY=sk_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
NGROK_URL=https://xxxx-xxx-xxx.ngrok-free.app
```

### Obtener credenciales

| Servicio | URL |
|---|---|
| Twilio | https://console.twilio.com/ |
| Groq | https://console.groq.com/keys |
| ElevenLabs | https://elevenlabs.io/app/settings/api-keys |
| ngrok | https://ngrok.com/ |

## Ejecutar el PoC

### Paso 1 — Exponer el servidor con ngrok
```bash
ngrok http 8000
# Copia la URL https://xxx.ngrok-free.app y ponla en .env como NGROK_URL
```

### Paso 2 — Iniciar el servidor FastAPI
```bash
# En la terminal principal:
uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload
```

Verifica que esté activo: http://localhost:8000/health

### Paso 3 — Disparar la llamada de prueba
```bash
# El endpoint /api/v1/events/dispatch está protegido con Bearer token.
# Configura DISPATCH_API_TOKEN en .env y úsalo desde el centro de control:
python dispatch_controller.py

# O directamente vía curl:
curl -X POST http://localhost:8000/api/v1/events/dispatch \
  -H "Authorization: Bearer $DISPATCH_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"tracking_number":"30453045","trigger_type":"manual"}'
```

## Flujo de la Conversación

```
simulate_call.py
      │
      ▼ REST (SDK Twilio)
 TWILIO CLOUD  ──────────►  POST /twiml
                              │
                              ▼  TwiML: <Connect><Stream>
                            WSS /media-stream
                              │
                ┌─────────────┼──────────────────┐
                ▼             ▼                   ▼
         ElevenLabs      Groq Whisper        Groq LLaMA 4
         (TTS Saludo)    (STT → texto)      (LLM → respuesta)
                              │
                         VAD Silencio
                         (1.5s timeout)
```

## Protocolo Twilio Media Streams

### Eventos entrantes (Twilio → Servidor)
| Evento | Descripción |
|---|---|
| `connected` | Handshake inicial del WebSocket |
| `start` | Inicio del stream con `streamSid` y `callSid` |
| `media` | Chunk de audio base64 (mulaw 8kHz mono) |
| `mark` | Confirmación de reproducción de audio |
| `stop` | La llamada ha terminado |

### Mensajes salientes (Servidor → Twilio)
| Evento | Descripción |
|---|---|
| `media` | Audio base64 (mulaw 8kHz) para reproducir al usuario |
| `mark` | Marca de sincronización |
| `clear` | Limpiar buffer de audio pendiente en Twilio |

## Formato de Audio

```
Entrada (Twilio):   mulaw 8-bit  → 8000 Hz → mono → base64
Conversión STT:     mulaw → PCM 16-bit → WAV → Groq Whisper
Conversión TTS:     ElevenLabs PCM 16kHz → resampleo audioop → mulaw 8kHz
Salida (Twilio):    mulaw 8-bit → 8000 Hz → mono → base64
```

## Notas Técnicas

### Python 3.12 — `audioop` nativo
Python 3.12.x incluye `audioop` como librería estándar (sin dependencias extra).
La conversión mulaw ↔ PCM se realiza completamente en memoria, sin librerías externas.

> ⚠️ **Nota**: `audioop` fue deprecado en Python 3.11 y eliminado en Python 3.13.
> Para Python 3.13+, instala `audioop-lts`: `pip install audioop-lts`

### VAD (Voice Activity Detection)
El proyecto usa VAD por timeout de silencio (configurable vía `VAD_SILENCE_TIMEOUT`).
Por defecto: 1.5 segundos de silencio = fin de utterance del usuario.

### Modelo LLM — LLaMA 4 Maverick
- Arquitectura: Mixture-of-Experts (MoE)
- Contexto: 128k tokens
- Optimizado para razonamiento, conversación y tareas agénticas
- Respuestas en español configuradas via system prompt en inglés

## Troubleshooting

### Error: "No se pudo conectar al servidor"
```bash
# Verifica que uvicorn está corriendo:
uvicorn app.main:app --host 0.0.0.0 --port 8000
# Abre: http://localhost:8000/health
```

### Error: "Twilio no puede conectar al WebSocket"
```bash
# Verifica que ngrok está activo y la URL en .env es correcta:
curl https://xxxx.ngrok-free.app/health
```

### Error: "ELEVENLABS_API_KEY inválida"
- Verifica que el `ELEVENLABS_VOICE_ID` existe en tu cuenta
- Laura (`FGY2WhTYpPnrIDTdsKH5`) es un preset público de ElevenLabs

### Baja calidad de transcripción
- Asegúrate de que el audio de Twilio está correctamente configurado en mulaw
- Aumenta `MIN_AUDIO_BUFFER_BYTES` si el STT recibe audio muy corto
- Reduce `VAD_SILENCE_TIMEOUT` para capturar utterances más rápido

## Variables de Entorno — Referencia Completa

| Variable | Requerida | Default | Descripción |
|---|---|---|---|
| `TWILIO_ACCOUNT_SID` | ✅ | — | Account SID de Twilio |
| `TWILIO_AUTH_TOKEN` | ✅ | — | Auth Token de Twilio |
| `TWILIO_PHONE_NUMBER` | ✅ | — | Número Twilio en formato E.164 |
| `GROQ_API_KEY` | ✅ | — | API Key de Groq |
| `GROQ_LLM_MODEL` | ⬜ | `llama-4-maverick-17b-128e-instruct` | Modelo LLM de Groq |
| `GROQ_STT_MODEL` | ⬜ | `whisper-large-v3-turbo` | Modelo STT de Groq |
| `ELEVENLABS_API_KEY` | ✅ | — | API Key de ElevenLabs |
| `ELEVENLABS_VOICE_ID` | ⬜ | `FGY2WhTYpPnrIDTdsKH5` | ID de voz (Laura) |
| `ELEVENLABS_MODEL_ID` | ⬜ | `eleven_multilingual_v2` | Modelo TTS multilingüe |
| `NGROK_URL` | ✅ | — | URL pública HTTPS de ngrok |
| `SERVER_PORT` | ⬜ | `8000` | Puerto local del servidor |
| `VAD_SILENCE_TIMEOUT` | ⬜ | `1.5` | Segundos de silencio para VAD |
| `MIN_AUDIO_BUFFER_BYTES` | ⬜ | `3200` | Mínimo de bytes para transcribir |
