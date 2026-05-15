import Link from "next/link"

const work = [
  {
    company: "Promco",
    role: "Builder and AI Systems Engineer",
    period: "2026",
    detail:
      "Building an order-to-approval system for liquor distributors. WhatsApp orders become reviewable drafts before stock, margin, promo, tax, and compliance decisions are committed.",
  },
  {
    company: "Bespoke Labs",
    role: "AI Evaluation Engineer",
    period: "2026",
    detail:
      "Authored Harbor and Terminal Bench style evaluation tasks for agentic coding systems, with oracle verification and claim-level grounding using NLI-based checks.",
  },
  {
    company: "AfterQuery",
    role: "AI Training and Model Evaluation Engineer",
    period: "2025",
    detail:
      "Built evaluation environments for frontier models across infrastructure, security, and healthcare workflows.",
  },
  {
    company: "Alcora",
    role: "Backend Engineer",
    period: "2025",
    detail:
      "Worked on a multi-tenant FMCG operations backend covering stock intelligence, payments, dispatch, and promo tracking.",
  },
]

const writing = [
  {
    title: "What I am learning in public",
    href: "https://github.com/Qodestackr",
    note: "Repos, experiments, evaluation tasks, and infrastructure notes.",
  },
  {
    title: "Resume",
    href: "/wilson-gichuhi-resume.pdf",
    note: "The fuller version with roles, dates, and technical detail.",
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f7f2] text-[#171717]">
      <div className="mx-auto max-w-3xl px-5 py-10 sm:py-16">
        <header className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-300 pb-5 text-sm">
          <Link href="/" className="font-medium">
            Wilson Gichuhi
          </Link>
          <nav className="flex flex-wrap gap-4 text-neutral-600">
            <a href="mailto:winchygichu@gmail.com">Email</a>
            <a href="https://github.com/Qodestackr" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="https://linkedin.com/in/wilson-gichuhi" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="/resume">Resume</a>
          </nav>
        </header>

        <section className="py-12">
          <p className="text-sm font-medium text-neutral-600">Wilson Gichuhi, Systems Engineer</p>
          <h1 className="mt-2 max-w-2xl text-4xl font-sm leading-tight tracking-tight">
            I build AI infrastructure for workflows that weren't designed with AI in mind.
          </h1>
          <p className="mt-3 text-lg leading-8 text-neutral-700">
            I work on the infrastructure that sits between a capable model and a trustworthy product: orchestration layers, retrieval edges, eval pipelines, and the review steps that catch what the model gets wrong.
          </p>
          <p className="mt-3 text-neutral-700">
            The model gets the credit. The infrastructure does the work.
          </p>
        </section>

        <section className="border-t border-neutral-300 py-10">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-neutral-500">Work</h2>
          <div className="mt-6 space-y-6">
            {work.map((item) => (
              <article key={`${item.company}-${item.role}`} className="grid gap-2 sm:grid-cols-[9rem_1fr]">
                <p className="text-sm text-neutral-500">{item.period}</p>
                <div>
                  <h3 className="font-medium">
                    {item.role}, {item.company}
                  </h3>
                  <p className="mt-2 leading-7 text-neutral-700">{item.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-t border-neutral-300 py-10">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-neutral-500">Read More</h2>
          <div className="mt-6 space-y-5">
            {writing.map((item) => (
              <a key={item.title} href={item.href} className="block group">
                <h3 className="font-medium underline decoration-neutral-400 underline-offset-4 group-hover:decoration-neutral-900">
                  {item.title}
                </h3>
                <p className="mt-1 leading-7 text-neutral-700">{item.note}</p>
              </a>
            ))}
          </div>
        </section>

        <footer className="border-t border-neutral-300 py-8 text-sm leading-6 text-neutral-600">
          <p>Nairobi, Kenya. Open to remote systems, backend, AI evaluation, and infrastructure roles.</p>
          <p className="mt-2">
            <a className="underline underline-offset-4" href="mailto:winchygichu@gmail.com">
              winchygichu@gmail.com
            </a>
          </p>
        </footer>
      </div>
    </main>
  )
}
