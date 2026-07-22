---
author: Wilson Gichuhi
title: "Context Graphs: The Missing Layer for Enterprise AI (Part 1)"
description: >
  Enterprise systems record operational facts, but AI agents increasingly
  need the reasoning behind those facts. A look at context graphs,
  decision traces, and why capturing judgment at write time may become a
  foundational layer for enterprise AI.
pubDatetime: 2026-07-21T13:20:00Z
slug: "context-graphs-part-1"
draft: false
featured: true
tags:
  - ai
  - software-engineering
  - decision-engines
  - architecture
---

For the past two years, enterprise AI has largely been a story of capability. Models became better at reasoning, context windows grew larger, and agents learned to search documentation, query databases, call APIs, and execute increasingly complex workflows. Every new release promised more autonomy, better planning, and stronger reasoning.

Yet despite that progress, enterprise AI continues to fail in remarkably familiar ways.

The problem is rarely that a model cannot answer a question. It is that it cannot arrive at the answer the same way the organization would have. An agent can retrieve every relevant document and still recommend the wrong action. It can follow policy while missing the exception everyone on the team already understands. It can automate a workflow without understanding why that workflow exists in the first place.

These are often described as reasoning failures. I think they are context failures.

Enterprise software has spent decades becoming exceptionally good at recording operational state. CRMs record customer interactions, ERPs record financial events, ticketing systems record incidents, identity providers record authentication, and source control records code. These systems are excellent at answering questions about what happened. They are much less capable of explaining why it happened.

That distinction becomes increasingly important as AI systems move beyond retrieval and into decision support. Organizations do not simply need systems that produce answers. They need systems whose decisions can be explained, challenged, audited, and improved over time. More importantly, they need those decisions to reflect the judgment of the organization, not just the reasoning ability of a model.

The problem is that organizational judgment rarely lives inside systems of record.

It lives in approval chains, Slack conversations, emails, meeting notes, phone calls, tribal knowledge, historical precedent, and the experience of people who have spent years understanding how the business actually operates. Every organization accumulates thousands of small decisions that never become structured data. A finance lead remembers why a customer was granted an exception. An engineer remembers why a service was intentionally designed a certain way. A compliance officer understands why one regulation took precedence over another during a particular audit. Those decisions shape how the business operates long after the original conversation has disappeared.

This is what I think is the contextual gap in enterprise AI.

Knowledge graphs have become an important abstraction because they describe relationships between entities. Customers own accounts. Accounts generate invoices. Services depend on other services. Employees belong to departments. They help systems understand how the world is connected.

Enterprise decisions, however, are rarely relationship problems. They are judgment problems.

Judgment is not simply knowing that two entities are related. It is understanding why a decision was made, who authorized it, which policy was evaluated, what evidence was available at the time, what assumptions were accepted, and which alternatives were rejected. Those details are not attributes of the business. They are traces of how the business reasons.

That difference matters because AI is no longer being asked only to retrieve information. Increasingly, it is expected to participate in decisions. An assistant that summarizes documentation only needs access to knowledge. An agent that approves refunds, recommends financial actions, escalates incidents, or applies policy requires something more. It requires organizational judgment.

Consider an AI-native finance product. Reconciling transactions, validating invoices, or matching contracts are no longer the interesting problems. Modern models are already capable of much of that work. The difficult questions appear where organizations stop following happy paths.

Why was revenue recognized differently for this contract? Why did finance override procurement's recommendation? Why was a policy exception granted for one customer but denied for another? Why did an auditor accept this evidence last quarter but reject similar evidence today?

The contracts exist. The policies exist. The transaction history exists. The operational data is rarely missing.

What is missing is the reasoning that connected those pieces into a decision.

Even that reasoning cannot be captured cleanly if the underlying data remains fragmented. Most organizations store the same customer, contract, or transaction across multiple disconnected systems that were never designed to agree with one another. Before an organization can preserve why a decision was made, it first has to establish what the decision was actually about. That reconciliation work is unglamorous, and it rarely appears in conversations about AI reasoning. Yet it is inseparable from it. The company that reconciles enterprise reality is often the company best positioned to capture the organizational judgment layered on top.

Every recommendation therefore becomes an act of reconstruction. The model searches documentation, retrieves historical records, summarizes conversations, and attempts to infer reasoning that was never explicitly preserved. Sometimes it succeeds. More often, it reconstructs an explanation that sounds plausible without reflecting how the organization actually reached its decision.

This is where I think much of today's enterprise AI reaches an architectural ceiling.

One response has been to build increasingly sophisticated agent systems. Instead of one model, we create specialists. One searches documentation. Another evaluates policies. Another analyzes contracts. A coordinating agent combines their outputs before producing a recommendation.

This architecture is useful when work can be decomposed into largely independent tasks. Searching four systems in parallel is genuinely better than searching them sequentially.

Organizational judgment, however, is rarely independent. It emerges from the interaction between people, policy, historical precedent, business priorities, constraints, and accepted risk. Splitting those perspectives across multiple agents does not necessarily preserve the context that originally connected them. It often creates another coordination problem where each agent reasons over a partial view of reality before passing summaries to another system responsible for producing the final answer.

Larger context windows reduce some of this pressure by allowing more information to remain visible during reasoning. They do not solve a different problem altogether: preserving organizational memory that was never captured in the first place.

The missing primitive is not another agent.

It is durable context.

Enterprise software has attempted similar ideas before. Semantic layers promised a shared business vocabulary so that everyone could agree on the meaning of metrics, entities, and business concepts. The vision was compelling, but the implementation often became a governance exercise. Organizations evolve continuously. Products change, policies change, ownership changes, and the meaning of business data changes with them. Consensus is not a permanent artifact. It has to evolve alongside the organization.

Another approach is to reconstruct context after the fact. Mine Slack conversations. Analyze emails. Read tickets. Search meeting transcripts. Infer why a decision was made from the surrounding evidence.

That approach is valuable, but it is also fundamentally retrospective.

By the time someone attempts to reconstruct a decision weeks or months later, the most valuable information has already disappeared. Small assumptions that seemed obvious at the time are forgotten. Trade-offs never make it into documentation. Alternatives are discussed but never recorded. Context decays surprisingly quickly.

The common assumption behind both approaches is that context can be recovered later.

I think that assumption is wrong.

Context is not something to recover.

It is something to preserve.

The more durable direction is to capture organizational context as decisions are being made. Every meaningful action already has a natural point where work becomes durable: an approval, a deployment, a refund, a procurement decision, a policy exception, or a database commit. Instead of recording only the resulting state, that moment can also preserve the reasoning surrounding the decision. Applicable policies. Supporting evidence. Human approvals. Relevant constraints. Confidence. Expected outcomes.

The context graph is not assembled later through analysis.

It emerges naturally from work itself.

This is also why I believe the opportunity is increasingly vertical rather than horizontal. Infrastructure vendors have become exceptionally good at storing enterprise data. The harder problem is participating in the workflows where organizational judgment is actually created. Products embedded inside finance, healthcare, compliance, legal, manufacturing, or operations witness decisions before they become historical records. Over time, they accumulate something that cannot easily be recreated later.

They accumulate organizational judgment.

Storage will continue to commoditize. Models will continue to improve. Even agents will become increasingly interchangeable. Organizational context is different because it compounds through years of decisions, exceptions, trade-offs, and institutional learning. It reflects how a particular organization thinks, not simply what it knows.

If this direction proves correct, context graphs are not merely another database abstraction. They represent a shift in what enterprise software is expected to preserve. For decades we optimized systems to record facts. Enterprise AI increasingly requires us to record decisions.

In the next part, I'll move beyond the idea itself and into the architecture. What exactly is a context graph? How is it different from a knowledge graph, an event log, or a semantic layer? What are its primitives, and why does capturing context on the write path fundamentally change how enterprise systems support AI?

Most importantly, I'll argue that decisions are data too.