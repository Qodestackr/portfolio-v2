import { Space_Grotesk, IBM_Plex_Sans } from "next/font/google"
import "./globals.css"

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
})

const body = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata = {
  title: "Wilson Gichuhi | AI Systems & Reliability Engineer",
  description:
    "AI Systems & Reliability Engineer specializing in explicit orchestration, evaluation infrastructure, and grounded runtime systems for production AI.",
  keywords:
    "Wilson Gichuhi, AI Systems & Reliability Engineer, Agentic Orchestration, Evaluation Infrastructure, Retrieval, Kenya, Remote",
  author: "Wilson Gichuhi",
  viewport: "width=device-width, initial-scale=1",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable} antialiased`}>{children}</body>
    </html>
  )
}
