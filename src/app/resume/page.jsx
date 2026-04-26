"use client"

import Link from "next/link"
import {
  ArrowLeft,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react"

import { Badge } from "../../components/ui/badge"
import { Button } from "../../components/ui/button"

const highlights = [
  { value: "40%", label: "Promotional wastage reduced with profit-aware promo tracking" },
  { value: "70%", label: "Manual CRM data entry cut with voice-to-CRM logging" },
  { value: "End-to-end", label: "Evaluation ownership from environment setup to oracle verification" },
  { value: "Live context", label: "MCP runtime integrations over downstream commerce and compliance systems" },
]

const pillars = [
  {
    title: "State-driven orchestration",
    detail: "Explicit state machines, durable sessions, and traceable workflow execution.",
  },
  {
    title: "Evaluation infrastructure",
    detail: "Oracle verification, NLI-backed grounding, and adversarial model testing.",
  },
  {
    title: "Grounded runtime systems",
    detail: "Retrieval, ranking, validation, and live business context through MCP services.",
  },
]

const experience = [
  {
    role: "AI Evaluation Engineer (Contractor)",
    company: "Bespoke Labs",
    timeframe: "03/2026",
    bullets: [
      "Contributed task authorship to OpenThoughts, Bespoke Labs' open reasoning dataset initiative that produced state-of-the-art small reasoning models trained on curated chain-of-thought data in collaboration with Stanford, Berkeley, and UT Austin.",
      "Designed and authored Terminal Bench style agentic coding tasks in the Harbor format, covering concurrency bugs, semaphore leaks, and write-ordering failures across real-world TypeScript and healthcare system scenarios, with full pipeline ownership from environment setup to oracle verification.",
      "Applied Bespoke-MiniCheck for claim-level factual grounding in evaluation pipelines, using NLI-based verification over LLM-as-judge alone to improve signal reliability in automated test suites.",
    ],
  },
  {
    role: "Builder & AI Systems Engineer, Founder",
    company: "Promco",
    timeframe: "03/2026",
    bullets: [
      "Building Promco, an order-to-approval system for liquor distributors that turns WhatsApp orders into commercially reviewable drafts before stock, margin, promo, and compliance decisions are committed.",
      "Designed the orchestration layer with explicit state machines and durable session handling, replacing free-form agent loops with traceable, recoverable workflow execution for compliance-sensitive order flows.",
      "Built guardrails around AI-assisted order processing using typed tool interfaces, schema validation, prompt/version control, and failure tracing so the system is debuggable and safe to run in production.",
      "Developed the product-resolution layer for noisy real-world order language (Kenyan slang), combining retrieval, ranking, and structured validation to improve SKU matching on colloquial WhatsApp orders.",
      "Built MCP-based integrations and runtime services over downstream commerce/compliance systems so models operate against live business context rather than ungrounded text generation.",
    ],
  },
  {
    role: "AI Training & Model Evaluation Engineer",
    company: "AfterQuery",
    timeframe: "08/2025",
    bullets: [
      "Frontier Model Benchmarking: Conducted systematic evaluations of frontier LLMs for logic correctness and security; engineered automated test suites to identify vulnerabilities across domains.",
      "SWE-Bench Style Engineering (Project Anvil): Built end-to-end evaluation environments using base snapshots and gold-patch verification; automated oracle verification pipelines for complex domains including HL7 health-tech integrations and secure build systems.",
      "Terminal Bench v2: Built real-world agentic coding tasks targeting concurrency bugs, security vulnerabilities, and infra debugging with full pipeline ownership from gold patches to oracle verification and pytest suites in containerized environments.",
      "Adversarial Engineering: Designed stress tests for LLM-driven API design, moving beyond naive prompting to automated red-teaming of model-generated system architectures.",
    ],
  },
  {
    role: "Backend Engineer",
    company: "Alcora",
    timeframe: "02/2025 - 09/2025",
    bullets: [
      "Architected Headless ERP as a multi-tenant backend with real-time stock and demand intelligence across distributed FMCG actors.",
      "Built core payment rails with automated debt reconciliation across brands, distributors, and retailers.",
      "Embedded geospatial intelligence for delivery tracking, route batching, and dispatch automation.",
      "Enabled promo cost vs incremental gross profit tracking (North Star Metric <= 0.6), reducing promotional wastage by 40%.",
    ],
  },
  {
    role: "Founding Engineer",
    company: "AfyaTelemed",
    timeframe: "05/2024 - 07/2025",
    bullets: [
      "Architected a HIPAA-compliant telemedicine platform from scratch, covering triage, consultations, pharmacy, and lab integration.",
      "Built secure video consultation with E2E encryption (WebRTC) and payment processing across local and international gateways.",
      "Stack: Python/FastAPI, Next.js, WebRTC, AWS",
    ],
  },
  {
    role: "Software Engineer",
    company: "McSystems & Medical Inc.",
    timeframe: "04/2024 - 10/2024",
    bullets: [
      "Architected a CRM with voice-to-CRM logging, reducing manual data entry by 70%.",
      "Rebuilt a legacy PHP medical sales marketplace into an offline-first Next.js platform.",
      "Designed a unified API layer integrating CRM and marketplace systems.",
    ],
  },
  {
    role: "Fullstack Developer",
    company: "JHUB Innovation Africa",
    timeframe: "10/2023 - 05/2024",
    bullets: [
      "Built digital trade and climate-smart agriculture platforms within a Microsoft-partnered innovation ecosystem.",
      "Delivered enterprise-grade authentication and workflow integrations across multi-stakeholder systems.",
    ],
  },
]

const skills = [
  {
    title: "Cognitive Architecture & Agentic Systems",
    items: [
      "State-Driven Logic: XState (Finite State Machines), Apache Burr, Model Context Protocol",
      "Orchestration Patterns: Agentic RAG, Multi-Agent Coordination, Tool-use, 12-Factor Agents",
      "Reliability Layer: Effect-TS (Errors-as-Data), Circuit Breakers, Event-Driven Architectures",
    ],
  },
  {
    title: "Evals & System Governance",
    items: [
      "Diagnostic Frameworks: DeepEval, RAGAS, NLI (Natural Language Inference)",
      "Safety & Alignment: LLM-as-a-Judge, Automated Hallucination Detection, Evals-as-Code",
      "Synthetic Data & Robustness: Curator for edge-case discovery, adversarial stress testing, and dataset augmentation",
    ],
  },
  {
    title: "Retrieval Diagnostics & Information Retrieval",
    items: [
      "Hybrid Search: Vector + BM25, Rerankers, Atomic Fact Extraction",
      "Data Stores: Qdrant, Pinecone, pgvector (PostgreSQL), DuckDB",
      "Search Optimization: Causal reasoning for retrieval drift, query expansion, and semantic caching",
    ],
  },
  {
    title: "Inference Infrastructure & Performance",
    items: [
      "Vitals & Optimization: PagedAttention, Quantization (GGUF, AWQ, EXL2)",
      "Resilient Compute: Docker, Kubernetes (K8s), IaC, Cloudflare Workers (Edge Inference), Ollama",
    ],
  },
  {
    title: "Browser Automation & Web Agents",
    items: [
      "Chrome DevTools Protocol (CDP), Playwright, Stagehand",
      "Agent action recording, session replay, DOM change detection",
      "Fault-tolerant navigation in auth flows and dynamic interfaces",
    ],
  },
  {
    title: "Product & Frontend",
    items: [
      "React & Tanstack Ecosystem",
      "PWAs, offline-first architecture",
      "Agent UI, HITL dashboard design",
    ],
  },
]

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-sand text-slate-900">
      <div className="mx-auto max-w-5xl px-6 pb-16 pt-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Button asChild variant="outline" className="rounded-full border-slate-900/20">
            <Link href="/">
              <ArrowLeft className="h-4 w-4" />
              Back to Portfolio
            </Link>
          </Button>
          <Button asChild className="rounded-full bg-slate-900 px-5 text-slate-100 hover:bg-slate-800">
            <a
              href="https://drive.google.com/file/d/1yfSCTRjh8LtYWSc9qILUYiIu_76y619-/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
            >
              <Download className="h-4 w-4" />
              Resume PDF
            </a>
          </Button>
        </div>

        <section className="relative mt-10 overflow-hidden rounded-3xl border border-slate-900/10 bg-hero p-8 shadow-soft">
          <div className="absolute -top-24 left-10 h-40 w-40 rounded-full bg-emerald-300/30 blur-3xl animate-float" aria-hidden="true" />
          <div className="absolute bottom-0 right-6 h-48 w-48 rounded-full bg-sky-300/30 blur-3xl animate-float-slow" aria-hidden="true" />

          <div className="relative grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Resume</p>
              <h1 className="mt-4 font-display text-4xl text-slate-900">Wilson Gichuhi</h1>
              <p className="mt-2 text-lg text-slate-700">AI Systems & Reliability Engineer</p>
              <p className="mt-4 text-sm text-slate-700">
                I architect the control layer between model outputs and real business workflows, replacing nondeterministic agent loops with explicit
                orchestration, auditable state, and evaluation infrastructure that catches failures before they reach users.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-xs">State-driven orchestration</Badge>
                <Badge variant="secondary" className="text-xs">NLI-backed evals</Badge>
                <Badge variant="secondary" className="text-xs">Retrieval diagnostics</Badge>
                <Badge variant="secondary" className="text-xs">Production reliability</Badge>
              </div>
            </div>

            <div className="rounded-2xl border border-white/70 bg-white/85 p-6 shadow-soft">
              <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Contact</p>
              <div className="mt-4 space-y-3 text-sm text-slate-700">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Nairobi, Kenya. Open to remote roles.
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  winchygichu@gmail.com
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  +254700652437
                </div>
              </div>
              <div className="mt-5 flex flex-wrap gap-3 text-sm">
                <a
                  href="https://github.com/Qodestackr"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white px-3 py-1"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/wilson-gichuhi"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white px-3 py-1"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-2xl text-slate-900">Selected Impact</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {highlights.map((item) => (
              <div key={item.label} className="rounded-2xl border border-slate-900/10 bg-white/85 p-4 shadow-soft">
                <p className="font-display text-2xl text-slate-900">{item.value}</p>
                <p className="mt-2 text-sm text-slate-700">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-2xl text-slate-900">Focus Pillars</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="rounded-2xl border border-slate-900/10 bg-white/85 p-5 shadow-soft">
                <p className="text-sm font-semibold text-slate-900">{pillar.title}</p>
                <p className="mt-2 text-sm text-slate-700">{pillar.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-2xl text-slate-900">Professional Experience</h2>
          <div className="mt-6 space-y-6">
            {experience.map((role) => (
              <div key={`${role.company}-${role.timeframe}`} className="rounded-2xl border border-slate-900/10 bg-white/85 p-6 shadow-soft">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-base font-semibold text-slate-900">{role.role}</p>
                    <p className="text-sm text-slate-600">{role.company}</p>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {role.timeframe}
                  </Badge>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  {role.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-900" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-2xl text-slate-900">Technical Skills</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {skills.map((group) => (
              <div key={group.title} className="rounded-2xl border border-slate-900/10 bg-white/85 p-5 shadow-soft">
                <p className="text-sm font-semibold text-slate-900">{group.title}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Badge key={item} variant="secondary" className="text-xs">
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-2xl text-slate-900">Education</h2>
          <div className="mt-4 rounded-2xl border border-slate-900/10 bg-white/85 p-6 shadow-soft">
            <p className="text-base font-semibold text-slate-900">BSc. Computer Technology</p>
            <p className="text-sm text-slate-600">JKUAT University</p>
            <p className="mt-2 text-sm text-slate-700">2018 - 2023</p>
          </div>
        </section>
      </div>
    </div>
  )
}
