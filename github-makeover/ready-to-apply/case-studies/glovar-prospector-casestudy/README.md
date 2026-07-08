# Glovar Prospector — Case Study (multi-agent B2B prospecting)

> **Code is private (built under employment / NDA).** This repository documents the architecture,
> decisions, and results so the engineering is visible without exposing proprietary code.
> Role: **AI Engineer / builder** · Timeline: 2025–2026 · Status: shipped to production.

---

## TL;DR
A B2B sales team was burning hours every day on the same manual grind: finding which companies were
worth contacting, researching each one across scattered sources, and writing the first outreach. I built
an **autonomous multi-agent system** that does that end to end — think of it as a tireless junior
researcher that reads messy company data, decides who's worth pursuing, and drafts the first
conversation, around the clock. It shipped to production and ran reliably under real cost and latency
constraints.

## The problem (in business terms)
- Manual prospecting doesn't scale: hours/rep/day, inconsistent quality, no coverage at night.
- Company data is **messy and unstructured** (different formats, partial records, free text).
- Naive "throw everything at the LLM" answers were unreliable and expensive.

## What I built
A pipeline of specialized agents coordinated with **LangGraph**, each responsible for one job and able
to call tools and APIs, read/write data, and keep context across long-running runs:

```
Sources (messy data) ─▶ Retrieval & enrichment ─▶ Qualification agent ─▶ Drafting agent ─▶ Human review
                              │                          │                     │
                          context engineering       scoring rules         guardrails + tone
```

- **Orchestration:** LangGraph with explicit **state, routing, control-flow and fallback** — the graph
  degrades gracefully instead of crashing on a bad step.
- **Tool-use:** strict **function calling / structured outputs** (Pydantic/JSON schema) so downstream
  steps get clean, typed data.
- **Reliability at scale:** a **rotating API-key pool** to sustain high concurrency without throttling.
- **Context engineering (not prompt trial-and-error):** curated exactly what each agent sees per
  decision — the model has a "small desk"; pile on too much and it misses what matters.

## The hardest technical challenge
**Trustworthy answers over messy data.** Naive chunking produced inconsistent results. I applied
structure-aware chunking, re-ranking, and a strict rule — *a hard fact from the database beats a fuzzy
match from a document* (like a journalist checking a primary source before repeating a rumor). Combined
with output **guardrails**, this drove hallucinations to **effectively zero on the metrics we tracked**.

## Engineering decisions & trade-offs
| Decision | Why | Trade-off |
|---|---|---|
| LangGraph over a single mega-prompt | Explicit state, routing, fallback, testability | More moving parts to design |
| Structured outputs everywhere | Predictable, typed hand-offs between agents | Stricter prompts, more validation |
| Source hierarchy (SQL > RAG) | Kill hallucinations on factual fields | Requires clean structured source |
| Serverless deploy + key rotation | Autoscaling + sustained concurrency | Cold-start & orchestration complexity |
| Observability from day 1 (LangSmith) | Measure latency/cost, catch regressions | Extra instrumentation upfront |

## Results (business + technical)
- Shipped to **production**; ran reliably in the client's real environment.
- **Hallucinations → ~0** on tracked metrics via retrieval discipline + guardrails.
- **Lower token cost and latency** after benchmarking each change with data (not intuition).
- Automated a task that previously consumed hours of manual work per day.
> Replace bracketed figures with real numbers where available: handled ~[X] companies/day; cut manual
> research time by ~[Y]%; p95 latency ~[Z]s.

## Stack
Python · LangGraph · LangChain · Groq (Llama/Qwen) · FastAPI · Supabase/PostgreSQL (Row Level Security)
· Modal (serverless) · LangSmith (observability) · Twilio + Deepgram (voice module).

## What I'd do next
Add automated **evaluation harnesses** for non-deterministic outputs as a CI gate, and abstract the
reusable retrieval/agent components into an internal library to speed up future builds.
