import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Wilson Gichuhi | Full-Stack Engineer & System Architect",
  description:
    "Full-stack engineer building scalable systems across FinTech, HealthTech, and Logistics in Africa. Expert in React, Python, Go, and AI-powered platforms.",
  keywords:
    "Wilson Gichuhi, Full-Stack Engineer, React Developer, Python, Go, FinTech, HealthTech, Kenya, Africa, System Architect",
  author: "Wilson Gichuhi",
  viewport: "width=device-width, initial-scale=1",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
