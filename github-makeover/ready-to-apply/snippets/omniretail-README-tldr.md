<!-- Pega este bloque JUSTO DEBAJO del título del README de OmniRetail-Agent (antes del índice). -->

> **TL;DR** — An AI customer-support agent for e-commerce that answers product, policy and order
> questions **without making things up**. The hard problem is trust: I combined lexical + semantic
> retrieval with a strict rule — *a hard fact from the database beats a fuzzy document match* — plus
> memory compaction to keep context cost under control. Result: hallucinations driven to ~zero on
> tracked metrics.
>
> **Stack:** Strands Agents SDK · Groq (Qwen/Llama) · SQLite · ChromaDB · SentenceTransformers.
> **My role:** end-to-end design & build — retrieval engine, memory, anti-hallucination rules, telemetry.
