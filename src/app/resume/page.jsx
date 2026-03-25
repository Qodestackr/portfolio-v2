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
  { value: "100%", label: "Execution traceability for tax compliant flows" },
  { value: "99%", label: "Malformed outputs removed with schema guards" },
  { value: "40%", label: "SKU matching precision gain on noisy text" },
  { value: "Sub second", label: "Inference gateway latency with semantic caching" },
]

const pillars = [
  {
    title: "Deterministic orchestration",
    detail: "Finite state machines, immutable transitions, and audit ready traces.",
  },
  {
    title: "Evaluation infrastructure",
    detail: "Evals as code, adversarial testing, and reliability scoring.",
  },
  {
    title: "Grounded retrieval",
    detail: "Hybrid search, rerankers, and atomic fact extraction.",
  },
]

const experience = [
  {
    role: "Builder and AI Systems Engineer, Founder",
    company: "Promco",
    timeframe: "03/2026 to Present",
    bullets: [
      "Architected WhatsApp to eTIMS order processing with finite state machines using XState and Apache Burr",
      "Built a Modal inference gateway with semantic caching for Bespoke MiniCheck and sub second latency",
      "Effect TS middleware with schema validation and circuit breakers removed 99 percent malformed outputs",
      "Hybrid search with Voyage rerankers increased SKU matching precision by 40 percent",
      "Built a Model Context Protocol server bridging frontier models with Saleor GraphQL for grounded queries",
    ],
  },
  {
    role: "AI Training and Model Evaluation Engineer",
    company: "AfterQuery",
    timeframe: "Aug 2025 to Mar 25, 2026",
    bullets: [
      "Benchmarked frontier models for logic correctness and security vulnerabilities",
      "Built Project Anvil style environments with gold patch verification and automated oracles",
      "Terminal Bench v2 tasks covering concurrency bugs, security flaws, and infra debugging",
      "Automated red teaming for model generated system architectures",
    ],
  },
  {
    role: "Backend Engineer",
    company: "Alcora",
    timeframe: "Feb 2025 to Aug 2025",
    bullets: [
      "Architected a headless ERP for multi tenant FMCG operations with real time intelligence",
      "Built payment rails with automated debt reconciliation across brands, distributors, and retailers",
      "Embedded geospatial intelligence for delivery tracking, route batching, and dispatch",
      "Promo cost versus incremental gross profit tracking reduced promotional wastage by 40 percent",
    ],
  },
  {
    role: "Founding Engineer",
    company: "AfyaTelemed",
    timeframe: "May 2024 to Jul 2025",
    bullets: [
      "Architected a HIPAA compliant telemedicine platform covering triage, consultations, pharmacy, and labs",
      "Built secure WebRTC video consultations with end to end encryption and payment processing",
      "Stack: Python, FastAPI, Next.js, WebRTC, AWS",
    ],
  },
  {
    role: "Software Engineer",
    company: "McSystems and Medical Inc.",
    timeframe: "Apr 2024 to Oct 2024",
    bullets: [
      "Built voice to CRM logging that reduced manual data entry by 70 percent",
      "Rebuilt a legacy PHP marketplace into an offline first Next.js platform",
      "Designed a unified API layer integrating CRM and marketplace systems",
    ],
  },
  {
    role: "Fullstack Developer",
    company: "JHUB Innovation Africa",
    timeframe: "Oct 2023 to May 2024",
    bullets: [
      "Built digital trade and climate smart agriculture platforms in a Microsoft partnered ecosystem",
      "Delivered enterprise grade authentication and workflow integrations across multi stakeholder systems",
    ],
  },
]

const skills = [
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
      "Event driven architectures",
    ],
  },
  {
    title: "Languages",
    items: ["TypeScript", "Python", "Go", "PostgreSQL"],
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
              href="https://drive.google.com/file/d/1nYu_mnlKgl5f_sTChryePYoc6i-FItsf/view?usp=sharing"
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
              <p className="mt-2 text-lg text-slate-700">AI Systems Engineer</p>
              <p className="mt-4 text-sm text-slate-700">
                I build deterministic agentic orchestration and evaluation infrastructure. My work turns model output into reliable workflows using finite
                state machines, grounded retrieval, and rigorous eval harnesses.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-xs">Deterministic orchestration</Badge>
                <Badge variant="secondary" className="text-xs">Evaluation systems</Badge>
                <Badge variant="secondary" className="text-xs">Hybrid retrieval</Badge>
                <Badge variant="secondary" className="text-xs">Inference reliability</Badge>
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
            <p className="text-base font-semibold text-slate-900">BSc Computer Technology</p>
            <p className="text-sm text-slate-600">Jomo Kenyatta University of Agriculture and Technology</p>
            <p className="mt-2 text-sm text-slate-700">2018 to 2023</p>
          </div>
        </section>
      </div>
    </div>
  )
}
