"use client"
import { useRouter } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { Button } from '../../components/ui/button'

export default function ResumePage() {
  const router = useRouter()

  const handleBack = () => {
    router.back()
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto p-5 bg-white text-gray-900">
        <div className="mb-3">
          <Button
            variant="outline"
            size="sm"
            onClick={handleBack}
            className="flex h-8 font-light text-xs items-center gap-2 hover:bg-gray-50"
          >
            <ArrowLeft className="h-4 w-4 stroke-1" />
            Back
          </Button>
        </div>

        {/* Header */}
        <header className="mb-5">
          <h1 className="text-3xl font-normal text-gray-900 mb-2">Wilson Gichuhi</h1>
          <h2 className="text-xl text-gray-700 mb-4">Engineer | AI UX Specialist</h2>
          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            <span>📍 Nairobi, Kenya (Remote)</span>
            <span>📧 winchygichu@gmail.com</span>
            <span>📱 +254700652437</span>
          </div>
        </header>

        {/* Professional Summary */}
        <section className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-3 border-b border-gray-300 pb-1">
            Professional Summary
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Full-Stack Engineer with 5+ years architecting production systems that power Africa's B2B fintech verticals, healthcare, logistics infra.
            Built rails and enterprise API integrations, designed supply chain platforms coordinating entire distribution networks,
            and shipped AI-powered interfaces that power customer experiences. Expert in React, TypeScript, and performance-critical web
            technologies—with Go/Python backend experience enabling full-stack system design. Specialized in scalable frontend systems
            with intuitive AI user experiences that operations teams actually use. Led engineering for platforms like Alcora, moving real
            money and goods across Kenya's markets daily.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-3 border-b border-gray-300 pb-1">Core Engineering Competencies</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-gray-800 mb-2">Performance-Critical Systems</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• WASM - Client-side AI inference, medical imaging processing</li>
                <li>• Real-time - WebRTC, WebSockets, live data streams</li>
                <li>• Memory optimization - Large datasets (DICOM, financial, logistics)</li>
                <li>• Concurrent processing - Web Workers, background computations</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-800 mb-2">Production Architecture</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Distributed state - Event sourcing, offline-first systems</li>
                <li>• System integration - Payment rails, ERP modernization(Headless Approaches)</li>
                <li>• Edge computing - CDN optimization, service workers</li>
                <li>• Observability - Performance, Otel, analytics pipelines</li>
              </ul>
            </div>
          </div>
        </section>
        {/* Professional Experience */}
        <section className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 border-b border-gray-300 pb-1">
            Professional Experience
          </h3>

          {/* Alcora */}
          <div className="mb-6">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="font-semibold text-gray-900">Frontend Engineer</h4>
                <p className="text-gray-700">Alcora - RevenueOps Platform</p>
              </div>
              <span className="text-sm text-gray-600">2025/02 – Present</span>
            </div>
            <ul className="text-sm text-gray-700 space-y-1 ml-4">
              <li>• Built React-based admin dashboards for B2B liquor logistics platform serving 500+ retailers</li>
              <li>
                • Developed real-time inventory tracking interfaces with live data updates using WebSocket connections
              </li>
              <li>• Created modular payment reconciliation UI components handling M-Pesa and bank API integrations</li>
              <li>• Implemented responsive data visualization dashboards for sales analytics and route optimization</li>
              <li>• Architected reusable component library reducing development time by 60% across product features</li>
            </ul>
          </div>

          {/* AfyaTelemed */}
          <div className="mb-6">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="font-semibold text-gray-900">Frontend Developer</h4>
                <p className="text-gray-700">AfyaTelemed - Healthcare Platform</p>
              </div>
              <span className="text-sm text-gray-600">2024/05 – 2025/01</span>
            </div>
            <ul className="text-sm text-gray-700 space-y-1 ml-4">
              <li>
                • Built HIPAA-compliant React interfaces for telemedicine workflows (patient triage, consultations,
                pharmacy)
              </li>
              <li>• Developed secure video consultation UI with WebRTC integration and real-time chat functionality</li>
              <li>
                • Created responsive patient dashboard with appointment scheduling, medical records, and payment
                processing
              </li>
              <li>• Implemented role-based access control interfaces for doctors, nurses, and administrative staff</li>
              <li>• Tech Stack: React, Next.js, Tailwind CSS, WebRTC, REST APIs</li>
            </ul>
          </div>

          {/* McSystems */}
          <div className="mb-6">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="font-semibold text-gray-900">React Developer</h4>
                <p className="text-gray-700">McSystems & Medical Inc.</p>
              </div>
              <span className="text-sm text-gray-600">2024/04 – 2024/10</span>
            </div>
            <ul className="text-sm text-gray-700 space-y-1 ml-4">
              <li>
                • Developed AI-powered CRM interface with voice-to-text integration, reducing manual data entry by 70%
              </li>
              <li>
                • Built medical equipment marketplace frontend with advanced filtering, search, and checkout workflows
              </li>
              <li>
                • Migrated legacy PHP application to modern React/Next.js architecture, improving performance by 85%
              </li>
              <li>• Created offline-first PWA functionality for field sales teams with data synchronization</li>
            </ul>
          </div>

          {/* JHUB */}
          <div className="mb-6">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="font-semibold text-gray-900">Frontend Developer</h4>
                <p className="text-gray-700">JHUB Innovation Africa</p>
              </div>
              <span className="text-sm text-gray-600">2023/10 – 2024/05</span>
            </div>
            <ul className="text-sm text-gray-700 space-y-1 ml-4">
              <li>• Built React interfaces for climate-smart agricultural platforms and digital trade marketplaces</li>
              <li>• Developed interactive data visualization components for agricultural analytics and reporting</li>
              <li>• Implemented responsive design patterns ensuring mobile-first experience across all platforms</li>
              <li>
                • Collaborated with Microsoft-led team to optimize component architecture, increasing dev velocity by
                25%
              </li>
            </ul>
          </div>

          {/* SISI Markets */}
          <div className="mb-6">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="font-semibold text-gray-900">Frontend Developer</h4>
                <p className="text-gray-700">SISI Markets - E-commerce Platform</p>
              </div>
              <span className="text-sm text-gray-600">2023/01 – 2023/08</span>
            </div>
            <ul className="text-sm text-gray-700 space-y-1 ml-4">
              <li>• Built React-based marketplace interface connecting 1000+ stores and agents across East Africa</li>
              <li>
                • Implemented GIS-powered location features with interactive maps and geospatial data visualization
              </li>
              <li>• Optimized SEO and performance using Next.js, reducing bounce rate by 40%</li>
              <li>• Created responsive vendor management dashboards with real-time inventory and sales tracking</li>
            </ul>
          </div>

          {/* Tendapa */}
          <div className="mb-6">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="font-semibold text-gray-900">React Developer</h4>
                <p className="text-gray-700">Tendapa Marketplace</p>
              </div>
              <span className="text-sm text-gray-600">2022/06 – 2023/02</span>
            </div>
            <ul className="text-sm text-gray-700 space-y-1 ml-4">
              <li>• Modernized legacy marketplace frontend using React, improving website performance by 60%</li>
              <li>
                • Implemented responsive design with Tailwind CSS, enhancing mobile accessibility and user experience
              </li>
              <li>• Optimized component architecture and state management, reducing bundle size by 35%</li>
            </ul>
          </div>
        </section>

        {/* Technical Skills */}
        <section className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-3 border-b border-gray-300 pb-1">Technical Skills</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-medium text-gray-800 mb-2">Languages & Frameworks</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• JavaScript (ES6+)</li>
                <li>• TypeScript</li>
                <li>• React.js</li>
                <li>• Next.js</li>
                <li>• HTML5/CSS3</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-800 mb-2">Styling & UI</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Tailwind CSS</li>
                <li>• CSS Modules</li>
                <li>• Styled Components</li>
                <li>• Responsive Design</li>
                <li>• Component Libraries</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-800 mb-2">Tools & Workflow</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Vite, Webpack</li>
                <li>• Redux, Zustand</li>
                <li>• Git/GitHub</li>
                <li>• REST APIs</li>
                <li>• Testing (Jest, RTL)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Key Projects */}
        <section className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-3 border-b border-gray-300 pb-1">
            Relevant Project Experience
          </h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-gray-800">Admin Dashboard Interfaces</h4>
              <p className="text-sm text-gray-700">
                Built 15+ production admin panels and dashboards for logistics, healthcare, and e-commerce platforms.
                Expert in data tables, charts, forms, and real-time updates.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-gray-800">Business Workflow Simulation</h4>
              <p className="text-sm text-gray-700">
                Specialized in translating complex business processes into intuitive React interfaces that mirror
                real-world professional workflows and decision-making patterns.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-gray-800">Rapid Prototyping</h4>
              <p className="text-sm text-gray-700">
                Proven ability to convert wireframes, sketches, and product requirements into functional React
                components within tight deadlines and iterative feedback cycles.
              </p>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3 border-b border-gray-300 pb-1">Education</h3>
          <div>
            <h4 className="font-medium text-gray-800">BSc. Computer Technology</h4>
            <p className="text-sm text-gray-700">Jomo Kenyatta University of Agriculture and Technology</p>
            <p className="text-xs text-gray-600">Focus: Software Engineering, Distributed Systems, Web Technologies</p>
          </div>
        </section>

        <section className="mb-3">
          <h3 className="text-lg font-semibold text-gray-900 mb-3 border-b border-gray-300 pb-1">
            Why I'm Excited About AfterQuery
          </h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            I'm a fullstack engineer who loves building products end-to-end—from backend systems and APIs to polished, user-friendly interfaces. 
            I’m especially drawn to teams solving real-world problems with clean architecture, fast iteration, and thoughtful UX. I thrive in async, 
            impact-driven environments and bring a pragmatic approach to shipping features that are reliable, scalable, and easy to maintain.
          </p>
        </section>

        {/* Print Styles */}
        <style jsx>{`
          @media print {
            body { font-size: 12px; }
            .no-print { display: none; }
          }
        `}</style>
      </div>
    </div>
  )
}

