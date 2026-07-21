---
author: Wilson Gichuhi
title: "Context Graphs: Context is the bottleneck"
description: >
  Enterprise systems record operational facts, but AI agents increasingly
  need the reasoning behind those facts. A look at context graphs,
  decision traces, and why capturing judgment at write time may become a
  foundational layer for enterprise AI.
pubDatetime: 2026-07-21T13:20:00Z
slug: "decisions-are-data-too"
draft: false
featured: true
tags:
  - ai
  - software-engineering
  - decision-engines
  - architecture
---

# Context graphs: Context is the bottleneck

Agents can read data and take actions. What they struggle with is understanding *why* a decision exists.

Why was an incident escalated instead of auto-resolved? Why was a customer given a policy exception? Why did someone override the recommendation? Systems of record capture the resulting state, but almost never the reasoning that produced it. That reasoning lives in Slack threads, emails, meetings, and ultimately in people's heads.

This creates what I think is the contextual gap in enterprise AI.

Knowledge graphs help answer questions about relationships between entities. They tell us what is connected to what. Context graphs are a different abstraction. They record why data changed, who authorized it, what policy was evaluated, what assumptions existed at the time, and how a decision evolved. They preserve temporal context and provenance alongside operational state.

This distinction matters because enterprise agents are increasingly expected to do more than retrieve information—they are expected to make or recommend decisions. Those decisions require organizational judgment, not just organizational knowledge.

The obvious counterargument is that enterprises have tried similar ideas before. Semantic layers promised a shared business vocabulary but often became governance exercises where teams never fully agreed on definitions. Truth is dynamic, and organizations rarely converge on a single interpretation for long.

The difference is architectural.

If a context graph is treated as another read-side system that reconstructs reasoning from tickets, logs, and conversations after the fact, it inherits the same problems. By the time someone rebuilds *why*, the most valuable information has already been lost: the reasoning that existed when the decision was made.

A more durable approach is to capture context on the write path instead of reconstructing it on the read path. Every meaningful decision can record its authorization, applicable policies, supporting context, and resulting outcome before the operational state changes. The context graph then emerges from actual work rather than documentation exercises.

This is also why I believe the opportunity is vertical rather than horizontal.

Legacy enterprise systems were built around functional ownership—CRM, ticketing, ERP, identity—while decisions routinely cross those boundaries. Infrastructure vendors are excellent at storing data, but historically weaker at participating in the workflows where judgment actually happens. The companies that embed directly into those workflows, help humans make decisions, and capture decision traces as part of the interaction will accumulate proprietary context that cannot be recreated later.

Storage and retrieval will continue to commoditize. Organizational judgment will not.

The long-term opportunity isn't building another database. It's building systems that preserve why decisions were made, not just what changed. That context may become one of the most valuable enterprise assets as AI agents become part of everyday operations.
