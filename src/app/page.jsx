"use client"

import { Badge } from "../components/ui/badge"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  Code2,
  Database,
  Globe,
  Heart,
  Truck,
  Leaf,
  FileText,
  Zap,
  Brain,
} from "lucide-react"

export default function Portfolio() {
  const projects = [
    {
      title: "Alcora",
      subtitle: "AI-Native B2B Logistics Platform",
      description: "Kenya's first AI-powered liquor supply chain platform serving 500+ retailers",
      icon: <Truck className="w-6 h-6" />,
      tech: ["Python", "Go", "React", "Next.js", "M-Pesa API", "WebSocket"],
      highlights: [
        "Real-time stock intelligence across multi-tenant system",
        "Baridi AI agent for WhatsApp-based ordering automation",
        "Payment orchestration between retailers, wholesalers, brand owners",
        "Geospatial delivery tracking and route optimization",
      ],
      domain: "FMCG Revenue Ops",
      year: "2025",
    },
    {
      title: "AfyaTelemed",
      subtitle: "HIPAA-Compliant Telemedicine Platform",
      description: "Full-stack healthcare platform with secure video consultations",
      icon: <Heart className="w-6 h-6" />,
      tech: ["Python", "FastAPI", "React", "Next.js", "WebRTC", "AWS"],
      highlights: [
        "End-to-end encrypted video consultation system",
        "Modular healthcare workflows (triage, consultations, pharmacy)",
        "Payment processing with local and international gateways",
        "HIPAA-compliant architecture from ground up",
      ],
      domain: "HealthTech",
      year: "2024",
    },
    {
      title: "McSystems Medical",
      subtitle: "AI-Powered CRM & Medical Marketplace",
      description: "Voice-to-CRM system and medical equipment marketplace",
      icon: <Code2 className="w-6 h-6" />,
      tech: ["React", "Next.js", "TypeScript", "Voice API", "PWA"],
      highlights: [
        "70% reduction in manual data entry via voice-to-CRM",
        "Legacy PHP to modern React migration (85% performance boost)",
        "Offline-first PWA for field sales teams",
        "Advanced filtering and search workflows",
      ],
      domain: "MedTech & CRM",
      year: "2024",
    },
    {
      title: "SISI Markets",
      subtitle: "East African Digital Marketplace",
      description: "Common portal connecting 1000+ stores and agents across East Africa",
      icon: <Globe className="w-6 h-6" />,
      tech: ["React", "Next.js", "GIS", "PostgreSQL", "Location APIs"],
      highlights: [
        "GIS-powered location intelligence for store networks",
        "SEO optimization reducing bounce rate by 40%",
        "Real-time inventory and sales tracking dashboards",
        "Responsive vendor management interfaces",
      ],
      domain: "E-commerce & GIS",
      year: "2023",
    },
    {
      title: "JHUB AgriTech",
      subtitle: "Climate-Smart Agricultural Solutions",
      description: "Digital trade platforms for agricultural analytics",
      icon: <Leaf className="w-6 h-6" />,
      tech: ["React", "Next.js", "Data Visualization", "Analytics"],
      highlights: [
        "Interactive data visualization for agricultural reporting",
        "Microsoft-led team collaboration (25% dev velocity increase)",
        "Enterprise-grade authentication systems",
        "Mobile-first responsive design patterns",
      ],
      domain: "AgriTech",
      year: "2023-2024",
    },
  ]

  const handleResumeClick = () => {
    window.location.href = "/resume"
  }

  const handleGithubClick = () => {
    window.open("https://github.com/Qodestackr", "_blank")
  }

  const handleEmailClick = () => {
    window.location.href = "mailto:winchygichu@gmail.com"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-2">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">Wilson Gichuhi</h1>
          <h2 className="text-2xl md:text-3xl text-blue-600 mb-6">Full-Stack Engineer & System Architect</h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-8">
            I build scalable systems that move goods, money, and intelligence across Africa. From AI-powered logistics
            to HIPAA-compliant healthcare platforms—I architect solutions that solve real problems at scale.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 mb-8">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>winchygichu@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+254700652437</span>
            </div>
            <div className="flex items-center gap-2 cursor-pointer hover:text-blue-600" onClick={handleGithubClick}>
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </div>
            <div className="flex items-center gap-2">
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700" onClick={handleEmailClick}>
              <Mail className="w-4 h-4 mr-2" />
              Get In Touch
            </Button>
            <Button size="lg" variant="outline" onClick={handleResumeClick}>
              <FileText className="w-4 h-4 mr-2" />
              View Resume
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-12 px-2">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Featured Projects</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-100 rounded-lg text-blue-600">{project.icon}</div>
                      <div>
                        <CardTitle className="text-xl">{project.title}</CardTitle>
                        <p className="text-sm text-gray-600">{project.subtitle}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary" className="text-xs">
                        {project.domain}
                      </Badge>
                      <p className="text-xs text-gray-500 mt-1">{project.year}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mt-3">{project.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="flex items-start gap-2 text-sm text-gray-700">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Stack - REDESIGNED */}
      <section className="py-12 px-2 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-4">Technical Stack</h3>
          <p className="text-center text-gray-600 mb-12">
            Core technologies I use to build scalable, production-ready systems
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Frontend & TypeScript */}
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code2 className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-lg">Frontend & TypeScript</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Badge className="bg-blue-600 hover:bg-blue-700">React</Badge>
                    <Badge className="bg-gray-800 hover:bg-gray-900">Next.js</Badge>
                    <Badge className="bg-blue-500 hover:bg-blue-600">TypeScript</Badge>
                  </div>
                  <p className="text-sm text-gray-600">
                    Deep React expertise with modern TypeScript patterns for scalable, type-safe applications
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Python & AI */}
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-lg">Python & AI</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Badge className="bg-green-600 hover:bg-green-700">Python</Badge>
                    <Badge className="bg-teal-600 hover:bg-teal-700">FastAPI</Badge>
                    <Badge className="bg-purple-600 hover:bg-purple-700">LangChain</Badge>
                  </div>
                  <p className="text-sm text-gray-600">
                    High-performance APIs and AI-powered systems with FastAPI and LangChain integration
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Go & Performance */}
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-cyan-600" />
                </div>
                <CardTitle className="text-lg">Go & Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Badge className="bg-cyan-600 hover:bg-cyan-700">Go</Badge>
                    <Badge className="bg-gray-600 hover:bg-gray-700">Microservices</Badge>
                    <Badge className="bg-orange-600 hover:bg-orange-700">Concurrency</Badge>
                  </div>
                  <p className="text-sm text-gray-600">
                    High-performance backend services and concurrent systems for mission-critical applications
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Skills */}
          <div className="mt-12 text-center">
            <h4 className="text-lg font-semibold text-gray-800 mb-6">Additional Expertise</h4>
            <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
              <Badge variant="outline" className="text-sm">
                Kubernetes
              </Badge>
              <Badge variant="outline" className="text-sm">
                Event Driven Systems
              </Badge>
              <Badge variant="outline" className="text-sm">
                DevOps
              </Badge>
              <Badge variant="outline" className="text-sm">
                API Security
              </Badge>
              <Badge variant="outline" className="text-sm">
                WebRTC
              </Badge>
              <Badge variant="outline" className="text-sm">
                GIS
              </Badge>
              <Badge variant="outline" className="text-sm">
                WASM (For AI Inference)
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Domain Expertise */}
      <section className="py-12 px-2 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Domain Expertise</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Database className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">FinTech & Payments</h4>
              <p className="text-sm text-gray-600">
                Enterprise Itegrations, payment orchestration, B2B BNPL, and financial workflows
              </p>
            </div>
            <div>
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">HealthTech</h4>
              <p className="text-sm text-gray-600">
                HIPAA-compliant systems, telemedicine platforms, and healthcare workflow automation
              </p>
            </div>
            <div>
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Logistics & Commerce</h4>
              <p className="text-sm text-gray-600">
                FMCG and spatial intelligence, POS, Supply chain optimization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 px-2">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">{"Let's Build Something Great"}</h3>
          <p className="text-lg text-gray-700 mb-8">
            Ready to architect scalable systems that solve real problems? {"Let's"} discuss your next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700" onClick={handleEmailClick}>
              <Mail className="w-4 h-4 mr-2" />
              Start a Conversation
            </Button>
            <Button size="lg" variant="outline" onClick={handleGithubClick}>
              <Github className="w-4 h-4 mr-2" />
              View Code
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-2 px-3 bg-gray-600 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Wilson Gichuhi. Building systems that move goods, money, and intelligence across Africa.
          </p>
        </div>
      </footer>
    </div>
  )
}
