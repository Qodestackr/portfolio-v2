import Link from "next/link"

const experience = [
  {
    role: "AI Evaluation Engineer",
    company: "Bespoke Labs",
    period: "03/2026",
    bullets: [
      "Contributed task authorship to OpenThoughts, Bespoke Labs' open reasoning dataset initiative.",
      "Designed Harbor-format Terminal Bench style tasks covering concurrency bugs, semaphore leaks, and write-ordering failures.",
      "Applied Bespoke-MiniCheck for claim-level factual grounding using NLI-based verification.",
    ],
  },
  {
    role: "Builder and AI Systems Engineer",
    company: "Promco",
    period: "03/2026",
    bullets: [
      "Building an order-to-approval system for liquor distributors that turns WhatsApp orders into commercially reviewable drafts.",
      "Designed explicit state machines and durable session handling for compliance-sensitive order flows.",
      "Built typed tool interfaces, versioned prompts, validation, and failure tracing around irreversible business actions.",
    ],
  },
  {
    role: "AI Training and Model Evaluation Engineer",
    company: "AfterQuery",
    period: "08/2025",
    bullets: [
      "Conducted frontier model evaluations for logic correctness, security, and infrastructure workflows.",
      "Built Project Anvil evaluation environments using base snapshots, gold patches, and automated oracles.",
      "Created Terminal Bench v2 tasks for concurrency bugs, security vulnerabilities, and infra debugging.",
    ],
  },
  {
    role: "Backend Engineer",
    company: "Alcora",
    period: "02/2025 - 09/2025",
    bullets: [
      "Architected a multi-tenant headless ERP with real-time stock and demand intelligence.",
      "Built payment rails with automated debt reconciliation across brands, distributors, and retailers.",
      "Reduced promotional wastage by 40% with promo cost versus incremental gross profit tracking.",
    ],
  },
  {
    role: "Founding Engineer",
    company: "AfyaTelemed",
    period: "05/2024 - 07/2025",
    bullets: [
      "Architected a telemedicine platform across triage, consultations, pharmacy, and lab integration.",
      "Built secure video consultation with WebRTC and payment processing across local and international gateways.",
    ],
  },
  {
    role: "Software Engineer",
    company: "McSystems & Medical Inc.",
    period: "04/2024 - 10/2024",
    bullets: [
      "Architected a CRM with voice-to-CRM logging, reducing manual data entry by 70%.",
      "Rebuilt a legacy PHP medical sales marketplace into an offline-first Next.js platform.",
    ],
  },
]

const skills = [
  "State machines",
  "Event-driven systems",
  "AI evals",
  "Retrieval diagnostics",
  "MCP",
  "TypeScript",
  "Python",
  "FastAPI",
  "React",
  "Postgres",
  "Docker",
  "Kubernetes",
  "Playwright",
  "Cloudflare Workers",
]

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-[#f8f7f2] text-[#171717]">
      <div className="mx-auto max-w-3xl px-5 py-10 sm:py-16">
        <header className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-300 pb-5 text-sm">
          <Link href="/" className="text-neutral-600 underline underline-offset-4">
            Back home
          </Link>
          <a href="/wilson-gichuhi-resume.pdf" className="font-medium underline underline-offset-4">
            View PDF
          </a>
        </header>

        <section className="py-12">
          <p className="text-sm font-medium text-neutral-600">Wilson Gichuhi</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight">Systems and Reliability Engineer</h1>
          <p className="mt-6 text-lg leading-8 text-neutral-700">
            I architect deterministic control layers for AI-driven workflows: state machines, event logs, and
            evaluation invariants that make probabilistic systems auditable and recoverable.
          </p>
          <div className="mt-8 space-y-1 text-sm text-neutral-700">
            <p>Nairobi, Kenya</p>
            <p>
              <a className="underline underline-offset-4" href="mailto:winchygichu@gmail.com">
                winchygichu@gmail.com
              </a>
            </p>
            <p>
              <a className="underline underline-offset-4" href="https://github.com/Qodestackr">
                GitHub
              </a>{" "}
              /{" "}
              <a className="underline underline-offset-4" href="https://linkedin.com/in/wilson-gichuhi">
                LinkedIn
              </a>
            </p>
          </div>
        </section>

        <section className="border-t border-neutral-300 py-10">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-neutral-500">Experience</h2>
          <div className="mt-6 space-y-8">
            {experience.map((item) => (
              <article key={`${item.company}-${item.period}`} className="grid gap-2 sm:grid-cols-[9rem_1fr]">
                <p className="text-sm text-neutral-500">{item.period}</p>
                <div>
                  <h3 className="font-medium">
                    {item.role}, {item.company}
                  </h3>
                  <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-neutral-700">
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-t border-neutral-300 py-10">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-neutral-500">Skills</h2>
          <p className="mt-6 leading-8 text-neutral-700">{skills.join(", ")}</p>
        </section>

        <section className="border-t border-neutral-300 py-10">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-neutral-500">Education</h2>
          <p className="mt-6 leading-7 text-neutral-700">BSc. Computer Technology, JKUAT University. 2018 - 2023.</p>
        </section>
      </div>
    </main>
  )
}
