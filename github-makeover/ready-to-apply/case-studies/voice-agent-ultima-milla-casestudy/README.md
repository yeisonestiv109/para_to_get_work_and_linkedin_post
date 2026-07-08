# Real-Time Voice Agent (Última Milla) — Case Study

> **Code is private (client/startup work).** This documents the architecture, the latency problem, and
> the outcome. Role: **AI Engineer** · Domain: last-mile logistics · Status: production calls.

---

## TL;DR
Startups in last-mile logistics lose time and money on repetitive phone coordination (confirming
deliveries, updating status, answering customer questions). I built a **real-time voice agent** that
holds a natural phone conversation to manage parts of the customer/delivery lifecycle — the hard part
wasn't "talking to an LLM," it was making it feel **immediate**: sub-perceptible latency on a live call.

## The problem
- Phone coordination is manual, repetitive, and doesn't scale with delivery volume.
- A voice bot that pauses awkwardly feels broken; **latency is the product**. Every hop (speech-to-text
  → reasoning → text-to-speech) adds delay the caller feels.

## What I built
A streaming voice pipeline that overlaps steps instead of doing them one-by-one:

```
Caller audio ─▶ Twilio Media Streams ─▶ Deepgram STT (streaming)
      ▲                                        │
      │                                        ▼
 Deepgram TTS (streaming) ◀── response ◀── LLM reasoning (streaming) + tool calls
```

- **Telephony:** Twilio Media Streams for real-time, bidirectional audio.
- **STT/TTS:** Deepgram streaming (start processing before the caller finishes; start speaking before
  the full answer is generated).
- **Latency engineering:** streaming end-to-end, partial results, and **execution fallbacks** so a slow
  tool call never leaves dead air.
- **Dialog control:** intent handling + guardrails to keep the conversation on-task and safe.

## The hardest technical challenge
**Perceived latency on a live call.** I treated it as a systems problem, not a model problem: stream at
every stage, act on partial transcripts, pre-warm responses, and add graceful fallbacks. The goal was a
turn-around fast enough that the caller doesn't notice the machine in the loop.
> Replace with real number: reduced end-to-end response latency to ~[X] ms / under [Y] second.

## Decisions & trade-offs
| Decision | Why | Trade-off |
|---|---|---|
| Streaming STT/TTS over batch | Cut perceived latency dramatically | More complex state handling |
| Fallbacks on slow tool calls | Never leave silence on the line | Extra orchestration logic |
| Guardrails on dialog | Keep calls on-task and safe | Some flexibility traded for reliability |

## Results
- **Production phone calls** handled autonomously for delivery-lifecycle tasks.
- Natural, low-latency conversation that saved manual coordination time and logistics cost.

## Stack
Python · Twilio Media Streams · Deepgram (STT/TTS) · async WebSockets · LLM (streaming) · FastAPI.

## What I'd do next
Add call-level evaluation (transcript quality, task-completion rate) and a barge-in model so callers can
interrupt naturally mid-sentence.
