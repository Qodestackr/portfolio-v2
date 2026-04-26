"use client"

import Link from "next/link"
import {
  Activity,
  ArrowUpRight,
  Brain,
  CheckCircle2,
  Cpu,
  Database,
  FileText,
  Github,
  Globe,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Search,
  ShieldCheck,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react"

import { Badge } from "../components/ui/badge"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"

const metrics = [
  {
    value: "40%",
    label: "Promotional wastage reduced with profit-aware promo tracking",
  },
  {
    value: "70%",
    label: "Manual CRM data entry cut with voice-to-CRM logging",
  },
  {
    value: "End-to-end",
    label: "Evaluation ownership from environment setup to oracle verification",
  },
  {
    value: "Live context",
    label: "MCP runtime integrations over downstream commerce and compliance systems",
  },
]

const focusAreas = [
  {
    title: "State-Driven Orchestration",
    description:
      "Explicit state machines and durable execution that turn AI behavior into traceable business workflows.",
    bullets: [
      "XState, Apache Burr, and Model Context Protocol",
      "Agentic RAG, multi-agent coordination, and tool use",
      "Effect-TS, circuit breakers, and event-driven recovery",
    ],
    icon: Workflow,
  },
  {
    title: "Evals and System Governance",
    description:
      "Reliability infrastructure that catches failures before model output reaches users.",
    bullets: [
      "DeepEval, RAGAS, and NLI-based verification",
      "LLM-as-a-Judge with hallucination detection",
      "Curator for synthetic edge cases and adversarial stress tests",
    ],
    icon: ShieldCheck,
  },
  {
    title: "Retrieval Diagnostics",
    description:
      "Hybrid retrieval pipelines that stay useful under noisy, real-world inputs.",
    bullets: [
      "Vector + BM25 hybrid search and rerankers",
      "Qdrant, Pinecone, pgvector, and DuckDB",
      "Query expansion, semantic caching, and retrieval drift analysis",
    ],
    icon: Search,
  },
  {
    title: "Inference and Web Agents",
    description:
      "Runtime systems that balance performance, resilience, and real browser interaction.",
    bullets: [
      "PagedAttention and quantization with GGUF, AWQ, EXL2",
      "Docker, Kubernetes, Cloudflare Workers, and Ollama",
      "Playwright, CDP, and Stagehand for resilient browser automation",
    ],
    icon: Cpu,
  },
]

const caseStudies = [
  {
    title: "Bespoke Labs",
    role: "AI Evaluation Engineer (Contractor)",
    timeframe: "03/2026",
    summary:
      "Evaluation task authorship and claim-level grounding for open reasoning and agentic coding benchmarks.",
    highlights: [
      "Contributed task authorship to OpenThoughts, Bespoke Labs' open reasoning dataset initiative",
      "Designed Harbor-format Terminal Bench style tasks covering concurrency bugs, semaphore leaks, and write-ordering failures",
      "Owned the pipeline from environment setup to oracle verification across TypeScript and healthcare scenarios",
      "Applied Bespoke-MiniCheck with NLI-based verification to improve automated eval signal reliability",
    ],
    tags: ["OpenThoughts", "Harbor", "Bespoke-MiniCheck", "NLI"],
  },
  {
    title: "Promco",
    role: "Builder & AI Systems Engineer, Founder",
    timeframe: "03/2026",
    summary:
      "Order-to-approval system for liquor distributors that turns WhatsApp orders into commercially reviewable drafts.",
    highlights: [
      "Designed the orchestration layer with explicit state machines and durable session handling",
      "Built AI order-processing guardrails with typed tools, schema validation, prompt versioning, and failure tracing",
      "Developed product resolution for noisy colloquial orders using retrieval, ranking, and structured validation",
      "Built MCP-based integrations so models operate against live commerce and compliance context",
    ],
    tags: ["State Machines", "Compliance", "Retrieval", "MCP"],
  },
  {
    title: "AfterQuery",
    role: "AI Training & Model Evaluation Engineer",
    timeframe: "08/2025",
    summary:
      "Frontier model benchmarking and evaluation environments for security, infra, and healthcare workflows.",
    highlights: [
      "Conducted systematic frontier LLM evaluations for logic correctness and security",
      "Built Project Anvil evaluation environments using base snapshots, gold patches, and automated oracles",
      "Created Terminal Bench v2 tasks for concurrency bugs, security vulnerabilities, and infra debugging",
      "Designed stress tests for LLM-driven API design through automated red teaming",
    ],
    tags: ["Benchmarking", "Project Anvil", "Terminal Bench", "Security"],
  },
  {
    title: "Alcora",
    role: "Backend Engineer",
    timeframe: "02/2025 - 09/2025",
    summary:
      "Multi-tenant FMCG backend covering stock, payments, dispatch, and promo intelligence.",
    highlights: [
      "Architected Headless ERP with real-time stock and demand intelligence across distributed actors",
      "Built core payment rails with automated debt reconciliation across brands, distributors, and retailers",
      "Embedded geospatial intelligence for delivery tracking, route batching, and dispatch automation",
      "Enabled promo cost versus incremental gross profit tracking, reducing promotional wastage by 40%",
    ],
    tags: ["Fintech", "ERP", "Geospatial"],
  },
  {
    title: "AfyaTelemed",
    role: "Founding Engineer",
    timeframe: "05/2024 - 07/2025",
    summary:
      "HIPAA-compliant telemedicine platform spanning triage, consultations, pharmacy, and labs.",
    highlights: [
      "Architected the platform from scratch across triage, consultations, pharmacy, and lab integration",
      "Built secure video consultation with E2E encryption and payment processing across local and international gateways",
      "Stack: Python/FastAPI, Next.js, WebRTC, AWS",
    ],
    tags: ["HealthTech", "WebRTC", "Platform"],
  },
]

const timeline = [
  {
    year: "03/2026",
    title: "AI Evaluation Engineer (Contractor)",
    company: "Bespoke Labs",
    detail: "OpenThoughts task authorship, Harbor benchmarks, and NLI-backed grounding.",
  },
  {
    year: "03/2026",
    title: "Builder & AI Systems Engineer",
    company: "Promco",
    detail: "State-driven order approval workflows with live commerce and compliance context.",
  },
  {
    year: "08/2025",
    title: "AI Training & Model Evaluation Engineer",
    company: "AfterQuery",
    detail: "Frontier LLM benchmarking, agentic coding tasks, and automated oracle pipelines.",
  },
  {
    year: "02/2025 - 09/2025",
    title: "Backend Engineer",
    company: "Alcora",
    detail: "Headless ERP, payment rails, and FMCG intelligence.",
  },
  {
    year: "05/2024 - 07/2025",
    title: "Founding Engineer",
    company: "AfyaTelemed",
    detail: "HIPAA compliant telemedicine and secure video workflows.",
  },
  {
    year: "04/2024 - 10/2024",
    title: "Software Engineer",
    company: "McSystems & Medical Inc.",
    detail: "Voice to CRM logging and offline first marketplace rebuild.",
  },
  {
    year: "10/2023 - 05/2024",
    title: "Fullstack Developer",
    company: "JHUB Innovation Africa",
    detail: "Digital trade platforms and enterprise workflow integrations.",
  },
]

const skillBands = [
  {
    title: "Cognitive Architecture",
    items: [
      "XState",
      "Apache Burr",
      "Model Context Protocol",
      "Agentic RAG",
      "Multi-agent coordination",
      "12-Factor Agents",
    ],
  },
  {
    title: "Evals & Governance",
    items: [
      "DeepEval",
      "RAGAS",
      "NLI",
      "Bespoke-MiniCheck",
      "LLM-as-a-Judge",
      "Curator",
    ],
  },
  {
    title: "Retrieval Diagnostics",
    items: [
      "Vector + BM25",
      "Rerankers",
      "Atomic fact extraction",
      "Qdrant",
      "Pinecone",
      "pgvector",
      "DuckDB",
    ],
  },
  {
    title: "Inference & Runtime",
    items: [
      "PagedAttention",
      "GGUF/AWQ/EXL2",
      "Docker",
      "Kubernetes",
      "Cloudflare Workers",
      "Ollama",
    ],
  },
  {
    title: "Browser Automation",
    items: [
      "CDP",
      "Playwright",
      "Stagehand",
      "Session replay",
      "DOM change detection",
      "Fault-tolerant auth flows",
    ],
  },
  {
    title: "Product & Frontend",
    items: [
      "React",
      "TanStack",
      "PWAs",
      "Offline-first UX",
      "Agent UI",
      "HITL dashboards",
    ],
  },
]

const marqueeItems = [
  "OpenThoughts",
  "Harbor tasks",
  "State machines",
  "NLI verification",
  "Hybrid search",
  "MCP runtime services",
  "DuckDB",
  "Cloudflare Workers",
  "Stagehand",
  "HITL dashboards",
  "Quantization",
]

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-sand text-slate-900">
      <section className="relative overflow-hidden bg-hero">
        <div className="absolute inset-0 bg-soft-grid opacity-40" aria-hidden="true" />
        <div className="absolute -top-24 left-10 h-48 w-48 rounded-full bg-emerald-300/30 blur-3xl animate-float" aria-hidden="true" />
        <div className="absolute top-24 right-0 h-64 w-64 rounded-full bg-sky-300/30 blur-3xl animate-float-slow" aria-hidden="true" />
        <div className="absolute bottom-0 left-1/3 h-40 w-40 rounded-full bg-amber-200/40 blur-3xl animate-float" aria-hidden="true" />

        <div className="relative mx-auto max-w-6xl px-6 pb-16 pt-20 sm:px-8">
          <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-start">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/70 px-3 py-1 text-[0.65rem] uppercase tracking-[0.28em] text-slate-500">
                <Sparkles className="h-3.5 w-3.5 text-emerald-600" />
                AI Systems & Reliability Engineer
              </div>
              <h1 className="mt-6 text-balance font-display text-4xl font-semibold text-slate-900 sm:text-5xl md:text-6xl">
                Wilson Gichuhi
              </h1>
              <p className="mt-6 text-balance text-lg text-slate-700 md:text-xl">
                I architect the control layer between model outputs and real business workflows, turning AI-driven products into reliable production systems.
                Explicit orchestration, auditable state, and evaluation infrastructure keep failures from reaching users.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild className="rounded-full bg-slate-900 px-6 text-slate-100 hover:bg-slate-800">
                  <a href="mailto:winchygichu@gmail.com">
                    <Mail className="h-4 w-4" />
                    Start a Conversation
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full border-slate-900/20 bg-white/70 px-6 text-slate-900 hover:bg-white"
                >
                  <Link href="/resume">
                    <FileText className="h-4 w-4" />
                    View Resume
                  </Link>
                </Button>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-slate-600">
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Nairobi, Kenya
                </span>
                <span className="inline-flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  +254700652437
                </span>
                <a
                  className="inline-flex items-center gap-2 rounded-full border border-transparent px-2 py-1 transition hover:border-slate-900/10 hover:bg-white/70"
                  href="https://github.com/Qodestackr"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
                <a
                  className="inline-flex items-center gap-2 rounded-full border border-transparent px-2 py-1 transition hover:border-slate-900/10 hover:bg-white/70"
                  href="https://linkedin.com/in/wilson-gichuhi"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="glass-panel shadow-soft rounded-2xl border border-white/50 p-6">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-slate-500">
                  Current Focus
                  <span className="rounded-full bg-emerald-100 px-2 py-1 text-[0.6rem] font-medium text-emerald-700">
                    Open to remote roles
                  </span>
                </div>
                <h2 className="mt-4 text-balance font-display text-2xl text-slate-900">
                  Reliable AI for high-stakes workflows
                </h2>
                <p className="mt-3 text-sm text-slate-700">
                  I work best where "mostly works" is still failure, building the guardrails that keep automation auditable, debuggable, and safe to run.
                </p>
                <div className="mt-5 space-y-3 text-sm text-slate-700">
                  <div className="flex gap-3">
                    <div className="mt-2 h-2 w-2 rounded-full bg-emerald-500" />
                    Explicit state machines and durable session handling for order-to-approval workflows
                  </div>
                  <div className="flex gap-3">
                    <div className="mt-2 h-2 w-2 rounded-full bg-sky-500" />
                    NLI-backed eval pipelines with oracle verification for agentic coding tasks
                  </div>
                  <div className="flex gap-3">
                    <div className="mt-2 h-2 w-2 rounded-full bg-amber-500" />
                    MCP integrations, retrieval, and structured validation against live business context
                  </div>
                </div>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl bg-white/70 p-3 text-xs">
                    <p className="text-slate-500">Core Stack</p>
                    <p className="mt-1 font-semibold text-slate-900">TypeScript, Python, React</p>
                  </div>
                  <div className="rounded-xl bg-white/70 p-3 text-xs">
                    <p className="text-slate-500">Availability</p>
                    <p className="mt-1 font-semibold text-slate-900">Open to remote roles</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric) => (
              <div
                key={metric.value}
                className="rounded-2xl border border-white/60 bg-white/70 p-4 text-sm text-slate-700 shadow-soft"
              >
                <p className="font-display text-2xl text-slate-900">{metric.value}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-slate-500">Impact</p>
                <p className="mt-2 text-sm text-slate-700">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white/70">
        <div className="overflow-hidden border-y border-slate-900/10">
          <div className="flex w-[200%] items-center gap-6 py-4 text-sm text-slate-600 animate-marquee">
            {[...marqueeItems, ...marqueeItems].map((item, index) => (
              <span
                key={`${item}-${index}`}
                className="flex items-center gap-2 whitespace-nowrap rounded-full border border-slate-900/10 bg-white px-4 py-2"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand py-16">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">What I Build</p>
              <h2 className="mt-3 font-display text-3xl text-slate-900 md:text-4xl">Systems that stay reliable under pressure</h2>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
              <CheckCircle2 className="h-4 w-4" />
              Production focused
            </span>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {focusAreas.map((focus) => {
              const Icon = focus.icon
              return (
                <Card key={focus.title} className="border border-slate-900/10 bg-white/85 py-4 shadow-soft gap-4">
                  <CardHeader className="px-4 pb-2">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                        <Icon className="h-5 w-5" />
                      </div>
                      <CardTitle className="font-display text-lg text-slate-900">{focus.title}</CardTitle>
                    </div>
                    <p className="mt-2 text-sm text-slate-600">{focus.description}</p>
                  </CardHeader>
                  <CardContent className="px-4">
                    <ul className="space-y-2 text-sm text-slate-700">
                      {focus.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-900" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Selected Work</p>
              <h2 className="mt-3 font-display text-3xl text-slate-900 md:text-4xl">Case studies with measurable impact</h2>
            </div>
            <Button asChild variant="outline" className="rounded-full border-slate-900/20">
              <Link href="/resume">
                Full Resume
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {caseStudies.map((study) => (
              <Card key={study.title} className="border border-slate-900/10 bg-white shadow-soft">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="font-display text-2xl text-slate-900">{study.title}</CardTitle>
                      <p className="text-sm text-slate-500">{study.role}</p>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {study.timeframe}
                    </Badge>
                  </div>
                  <p className="mt-3 text-sm text-slate-700">{study.summary}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-slate-700">
                    {study.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-600" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {study.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand py-16">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Experience</p>
              <h2 className="mt-3 font-display text-3xl text-slate-900">A focused timeline</h2>
              <div className="mt-8 space-y-6">
                {timeline.map((item, index) => (
                  <div key={`${item.year}-${index}`} className="flex gap-4">
                    <div className="mt-1 flex flex-col items-center">
                      <span className="h-3 w-3 rounded-full bg-slate-900" />
                      {index !== timeline.length - 1 && <span className="mt-2 h-full w-px bg-slate-900/20" />}
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{item.year}</p>
                      <p className="mt-1 text-base font-semibold text-slate-900">
                        {item.title} · {item.company}
                      </p>
                      <p className="mt-1 text-sm text-slate-700">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-slate-900/10 bg-white/80 p-6 shadow-soft">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-white">
                  <Activity className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Operating Principles</p>
                  <h3 className="font-display text-2xl text-slate-900">Predictable by design</h3>
                </div>
              </div>
              <div className="mt-6 space-y-4 text-sm text-slate-700">
                <div className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-emerald-500" />
                  Determinism first. Systems are built with explicit states and traceable transitions.
                </div>
                <div className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-sky-500" />
                  Evaluation in the loop. Every agent is backed by tests, regression suites, and adversarial scenarios.
                </div>
                <div className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-amber-500" />
                  Grounding everywhere. Retrieval, schemas, and guardrails keep outputs aligned with reality.
                </div>
              </div>
              <div className="mt-6 rounded-xl bg-slate-900/5 p-4 text-xs text-slate-600">
                <p className="uppercase tracking-[0.2em] text-slate-500">Preferred Collaboration</p>
                <p className="mt-2 font-semibold text-slate-900">Async friendly teams shipping reliable AI systems</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Toolbox</p>
              <h2 className="mt-3 font-display text-3xl text-slate-900 md:text-4xl">Stack aligned to reliable AI</h2>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full bg-slate-900/5 px-3 py-1 text-xs text-slate-600">
              <Brain className="h-4 w-4" />
              Production ready
            </span>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {skillBands.map((band) => (
              <Card key={band.title} className="border border-slate-900/10 bg-white/90 py-4 shadow-soft gap-3">
                <CardHeader className="px-4 pb-2">
                  <CardTitle className="font-display text-lg text-slate-900">{band.title}</CardTitle>
                </CardHeader>
                <CardContent className="px-4">
                  <div className="flex flex-wrap gap-2">
                    {band.items.map((item) => (
                      <Badge key={item} variant="outline" className="text-xs">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand py-16">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div className="grid gap-8 rounded-3xl border border-slate-900/10 bg-white/80 p-8 shadow-soft md:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Let us build</p>
              <h2 className="mt-3 font-display text-3xl text-slate-900">Delivery focused for remote roles</h2>
              <p className="mt-4 text-sm text-slate-700">
                I work best with teams who value clarity, measurable outcomes, and systems that behave the same way every time.
                If you are scaling AI workflows or building evaluation infrastructure, I would love to help.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild className="rounded-full bg-slate-900 px-6 text-slate-100 hover:bg-slate-800">
                  <a href="mailto:winchygichu@gmail.com">
                    <Mail className="h-4 w-4" />
                    Contact Me
                  </a>
                </Button>
                <Button asChild variant="outline" className="rounded-full border-slate-900/20">
                  <a href="https://github.com/Qodestackr" target="_blank" rel="noreferrer">
                    <Github className="h-4 w-4" />
                    View Code
                  </a>
                </Button>
              </div>
            </div>
            <div className="grid gap-4 text-sm text-slate-700">
              <div className="flex items-start gap-3 rounded-2xl bg-emerald-50 p-4">
                <Database className="mt-1 h-5 w-5 text-emerald-600" />
                <div>
                  <p className="font-semibold text-slate-900">Grounded by data</p>
                  <p className="mt-1 text-sm">Hybrid retrieval and rerankers that keep responses anchored to source truth.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-2xl bg-sky-50 p-4">
                <Zap className="mt-1 h-5 w-5 text-sky-600" />
                <div>
                  <p className="font-semibold text-slate-900">Fast and reliable</p>
                  <p className="mt-1 text-sm">Inference gateways designed for low latency and predictable cost.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-2xl bg-amber-50 p-4">
                <Globe className="mt-1 h-5 w-5 text-amber-600" />
                <div>
                  <p className="font-semibold text-slate-900">Built for global teams</p>
                  <p className="mt-1 text-sm">Async execution, clear docs, and collaboration habits.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-900/10 bg-white/80 py-6">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 text-xs text-slate-500">
          <span>© 2026 Wilson Gichuhi. AI systems built for production reliability.</span>
          <div className="flex items-center gap-3">
            <a href="mailto:winchygichu@gmail.com" className="inline-flex items-center gap-2">
              <Mail className="h-4 w-4" />
              winchygichu@gmail.com
            </a>
            <span className="h-1 w-1 rounded-full bg-slate-400" />
            <a href="https://github.com/Qodestackr" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
