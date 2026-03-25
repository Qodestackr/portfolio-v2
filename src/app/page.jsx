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
    value: "100%",
    label: "Execution traceability for tax compliant workflows",
  },
  {
    value: "99%",
    label: "Malformed outputs removed with schema guards",
  },
  {
    value: "40%",
    label: "SKU matching precision gain on noisy text",
  },
  {
    value: "Sub second",
    label: "Inference gateway latency with semantic caching",
  },
]

const focusAreas = [
  {
    title: "Deterministic Agentic Orchestration",
    description:
      "Finite state machines and strict state transitions that turn model output into audit ready workflows.",
    bullets: [
      "XState and Apache Burr orchestration",
      "State immutability and full execution traces",
      "Tool use grounded by explicit schemas",
    ],
    icon: Workflow,
  },
  {
    title: "Evaluation and Governance",
    description:
      "Evals as code with adversarial testing, reliability scoring, and production safeguards.",
    bullets: [
      "Bespoke MiniCheck and NLI based reliability",
      "DeepEval and Curator for automated testing",
      "LLM as a judge with oracle verification",
    ],
    icon: ShieldCheck,
  },
  {
    title: "Retrieval and Search",
    description:
      "Hybrid retrieval pipelines that stay precise under noisy, real world inputs.",
    bullets: [
      "Vector plus BM25 hybrid search",
      "Rerankers tuned for domain precision",
      "Atomic fact extraction for grounding",
    ],
    icon: Search,
  },
  {
    title: "Inference Infrastructure",
    description:
      "Production grade model serving with cost controls and deterministic latency.",
    bullets: [
      "vLLM, Ollama, Nvidia Triton",
      "Quantization with GGUF, EXL2, AWQ",
      "Modal gateways with cold start tuning",
    ],
    icon: Cpu,
  },
]

const caseStudies = [
  {
    title: "Promco",
    role: "Builder and AI Systems Engineer, Founder",
    timeframe: "2026 to Present",
    summary:
      "WhatsApp to eTIMS order processing engine built for deterministic execution and audit safe traces.",
    highlights: [
      "Replaced nondeterministic loops with finite state machines using XState and Apache Burr",
      "Sub second inference gateway on Modal with semantic caching for Bespoke MiniCheck",
      "Effect TS middleware with schema validation and circuit breakers to remove 99 percent malformed outputs",
      "Hybrid search with Voyage rerankers improving SKU matching precision by 40 percent",
    ],
    tags: ["Agentic Orchestration", "Inference", "RAG", "MCP"],
  },
  {
    title: "AfterQuery",
    role: "AI Training and Model Evaluation Engineer",
    timeframe: "Aug 2025 to Mar 25, 2026",
    summary:
      "Benchmarking frontier models with realistic eval harnesses and red team pipelines.",
    highlights: [
      "Evaluated frontier models for logic correctness and security",
      "Built Project Anvil style environments with gold patch verification",
      "Terminal Bench v2 tasks covering concurrency, security, and infra debugging",
      "Automated red teaming for model generated system architectures",
    ],
    tags: ["Evals", "Benchmarking", "Security"],
  },
  {
    title: "Alcora",
    role: "Backend Engineer",
    timeframe: "Feb 2025 to Aug 2025",
    summary:
      "Headless ERP and FMCG operations platform for multi tenant revenue ops.",
    highlights: [
      "Real time stock and demand intelligence across distributed actors",
      "Payment rails with automated debt reconciliation",
      "Geospatial delivery tracking and dispatch automation",
      "Promo cost versus incremental gross profit tracking cutting wastage by 40 percent",
    ],
    tags: ["Fintech", "ERP", "Geospatial"],
  },
  {
    title: "AfyaTelemed",
    role: "Founding Engineer",
    timeframe: "May 2024 to Jul 2025",
    summary:
      "HIPAA compliant telemedicine platform spanning triage, consults, pharmacy, and labs.",
    highlights: [
      "Secure video consultations with end to end encryption",
      "Local and international payment processing",
      "Stack built with Python, FastAPI, Next.js, WebRTC, AWS",
    ],
    tags: ["HealthTech", "WebRTC", "Platform"],
  },
]

const timeline = [
  {
    year: "2026",
    title: "Builder and AI Systems Engineer",
    company: "Promco",
    detail: "Deterministic orchestration and inference systems for tax compliant workflows.",
  },
  {
    year: "Aug 2025 to Mar 25, 2026",
    title: "AI Training and Model Evaluation Engineer",
    company: "AfterQuery",
    detail: "Frontier model benchmarks, eval harnesses, and adversarial testing.",
  },
  {
    year: "Feb 2025 to Aug 2025",
    title: "Backend Engineer",
    company: "Alcora",
    detail: "Headless ERP, payment rails, and FMCG intelligence.",
  },
  {
    year: "May 2024 to Jul 2025",
    title: "Founding Engineer",
    company: "AfyaTelemed",
    detail: "HIPAA compliant telemedicine and secure video workflows.",
  },
  {
    year: "2024",
    title: "Software Engineer",
    company: "McSystems and Medical Inc.",
    detail: "Voice to CRM logging and offline first marketplace rebuild.",
  },
  {
    year: "2023 to 2024",
    title: "Fullstack Developer",
    company: "JHUB Innovation Africa",
    detail: "Digital trade platforms and enterprise workflow integrations.",
  },
]

const skillBands = [
  {
    title: "AI Orchestration and Agents",
    items: [
      "XState",
      "Apache Burr",
      "Model Context Protocol",
      "Agentic RAG",
      "Tool use and function calling",
      "AI primitives",
    ],
  },
  {
    title: "Evals and Governance",
    items: [
      "Bespoke MiniCheck",
      "RAGAS",
      "DeepEval",
      "Curator",
      "Evals as code",
      "LLM as a judge",
    ],
  },
  {
    title: "Retrieval and Search",
    items: [
      "Hybrid search",
      "Rerankers",
      "Atomic fact extraction",
      "Pinecone",
      "Qdrant",
      "pgvector",
    ],
  },
  {
    title: "Inference and Reliability",
    items: [
      "vLLM",
      "Ollama",
      "Nvidia Triton",
      "Quantization",
      "Docker and Kubernetes",
      "Event driven systems",
    ],
  },
]

const marqueeItems = [
  "Deterministic agents",
  "Evaluation harnesses",
  "Grounded retrieval",
  "Schema validation",
  "Hybrid search",
  "Inference gateways",
  "Finite state machines",
  "Audit ready traces",
  "Quantization",
  "Circuit breakers",
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
                AI Systems Engineer
              </div>
              <h1 className="mt-6 text-balance font-display text-4xl font-semibold text-slate-900 sm:text-5xl md:text-6xl">
                Wilson Gichuhi
              </h1>
              <p className="mt-6 text-balance text-lg text-slate-700 md:text-xl">
                I build deterministic agentic systems and evaluation infrastructure that turn model output into reliable business workflows.
                Finite state machines, grounded retrieval, and rigorous eval harnesses keep production behavior predictable.
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
                  Deterministic AI systems with audit ready traces
                </h2>
                <p className="mt-3 text-sm text-slate-700">
                  I work at the boundary between probabilistic models and strict business requirements, building the guardrails that make AI dependable.
                </p>
                <div className="mt-5 space-y-3 text-sm text-slate-700">
                  <div className="flex gap-3">
                    <div className="mt-2 h-2 w-2 rounded-full bg-emerald-500" />
                    WhatsApp to eTIMS order processing with immutable state transitions
                  </div>
                  <div className="flex gap-3">
                    <div className="mt-2 h-2 w-2 rounded-full bg-sky-500" />
                    Inference gateways with semantic caching and cold start tuning
                  </div>
                  <div className="flex gap-3">
                    <div className="mt-2 h-2 w-2 rounded-full bg-amber-500" />
                    Evaluation harnesses and adversarial testing for frontier models
                  </div>
                </div>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl bg-white/70 p-3 text-xs">
                    <p className="text-slate-500">Core Stack</p>
                    <p className="mt-1 font-semibold text-slate-900">TypeScript, Python, Go</p>
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
          <span>© 2026 Wilson Gichuhi. AI systems with deterministic execution.</span>
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
