import "./globals.css"

export const metadata = {
  title: "Wilson Gichuhi | Systems & Reliability Engineer",
  description:
    "Systems and Reliability Engineer building deterministic control layers, evaluation infrastructure, and grounded runtime systems for AI-driven workflows.",
  keywords:
    "Wilson Gichuhi, Systems Engineer, Reliability Engineer, AI Evaluation, Infrastructure, Kenya, Remote",
  authors: [{ name: "Wilson Gichuhi" }],
  viewport: "width=device-width, initial-scale=1",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
