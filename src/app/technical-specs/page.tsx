'use client'

import { BasicPageLayout } from '@/components/BasicPageLayout'
import { useScrollAnimationReveal } from '@/hooks/useScrollAnimationReveal'
import { useState } from 'react'

export default function TechnicalSpecsPage() {
  const { ref, classes } = useScrollAnimationReveal('up')
  const [activeTab, setActiveTab] = useState('architecture')

  const tabs = {
    architecture: {
      title: "System Architecture",
      content: {
        overview: "Kalina AI is built on a cloud-native, microservices architecture designed for maximum scalability, reliability, and performance.",
        specs: [
          { label: "Infrastructure", value: "Multi-cloud with AWS, Azure, GCP" },
          { label: "Architecture", value: "Microservices with Kubernetes orchestration" },
          { label: "Auto-scaling", value: "Horizontal and vertical scaling" },
          { label: "Load Balancing", value: "Global load balancers with intelligent routing" },
          { label: "CDN", value: "Global content delivery network" },
          { label: "Disaster Recovery", value: "Multi-region failover with RPO < 1 hour" }
        ]
      }
    },
    performance: {
      title: "Performance Metrics",
      content: {
        overview: "Industry-leading performance metrics ensure optimal user experience and operational efficiency.",
        specs: [
          { label: "Response Latency", value: "< 150ms average globally" },
          { label: "Speech Recognition", value: "99.2% accuracy rate" },
          { label: "Voice Synthesis", value: "Natural, human-like quality" },
          { label: "Concurrent Calls", value: "Unlimited scalability" },
          { label: "Uptime SLA", value: "99.99% guaranteed" },
          { label: "Processing Speed", value: "Real-time with zero delays" }
        ]
      }
    },
    security: {
      title: "Security & Compliance",
      content: {
        overview: "Enterprise-grade security with comprehensive compliance certifications for regulated industries.",
        specs: [
          { label: "Encryption", value: "AES-256 in transit and at rest" },
          { label: "Authentication", value: "Multi-factor authentication (MFA)" },
          { label: "HIPAA", value: "Fully compliant and certified" },
          { label: "SOC 2 Type II", value: "Audited and certified" },
          { label: "GDPR", value: "Compliant with data protection" },
          { label: "PCI DSS", value: "Level 1 compliance for payments" }
        ]
      }
    },
    apis: {
      title: "API & Integrations",
      content: {
        overview: "Comprehensive APIs and pre-built integrations for seamless connectivity with existing systems.",
        specs: [
          { label: "REST API", value: "RESTful API with OpenAPI 3.0 spec" },
          { label: "WebSocket", value: "Real-time bidirectional communication" },
          { label: "Webhooks", value: "Event-driven notifications" },
          { label: "SDKs", value: "JavaScript, Python, Java, .NET, PHP" },
          { label: "Rate Limits", value: "Configurable with burst handling" },
          { label: "API Versioning", value: "Backward compatible versioning" }
        ]
      }
    }
  }

  const integrations = [
    { category: "CRM Systems", items: ["Salesforce", "HubSpot", "Pipedrive", "Zoho CRM"] },
    { category: "Communication", items: ["Slack", "Microsoft Teams", "Discord", "Telegram"] },
    { category: "Phone Systems", items: ["Twilio", "RingCentral", "8x8", "Asterisk"] },
    { category: "E-commerce", items: ["Shopify", "WooCommerce", "Magento", "BigCommerce"] },
    { category: "Help Desk", items: ["Zendesk", "Freshdesk", "ServiceNow", "Intercom"] },
    { category: "Analytics", items: ["Google Analytics", "Mixpanel", "Amplitude", "Segment"] }
  ]

  const benchmarks = [
    { metric: "Response Time", kalina: "150ms", industry: "300ms", improvement: "50% faster" },
    { metric: "Accuracy Rate", kalina: "99.2%", industry: "94.1%", improvement: "5.1% better" },
    { metric: "Uptime", kalina: "99.99%", industry: "99.5%", improvement: "5x more reliable" },
    { metric: "Setup Time", kalina: "< 24 hours", industry: "3-7 days", improvement: "10x faster" }
  ]

  return (
    
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-white via-blue-50/30 to-brand-100/10">
          <div className="container-width">
            <div className={`max-w-4xl mx-auto text-center transition-all duration-700 ${classes}`} ref={ref}>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-950 mb-6">
                Technical Specifications
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Comprehensive technical documentation for developers, architects, and IT professionals. 
                Deep dive into our enterprise-grade platform architecture and capabilities.
              </p>
            </div>
          </div>
        </section>

        {/* Technical Tabs */}
        <section className="section-padding bg-white">
          <div className="container-width">
            <div className="max-w-6xl mx-auto">
              {/* Tab Navigation */}
              <div className="flex flex-wrap justify-center gap-2 mb-12 border-b border-gray-200">
                {Object.entries(tabs).map(([key, tab]) => (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`px-6 py-3 font-medium transition-all ${
                      activeTab === key
                        ? 'text-brand-500 border-b-2 border-brand-500 bg-brand-50'
                        : 'text-gray-600 hover:text-brand-400'
                    }`}
                  >
                    {tab.title}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-brand-300 mb-4">
                  {tabs[activeTab as keyof typeof tabs].title}
                </h3>
                <p className="text-gray-600 mb-8">
                  {tabs[activeTab as keyof typeof tabs].content.overview}
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {tabs[activeTab as keyof typeof tabs].content.specs.map((spec, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg border border-gray-200">
                      <div className="flex justify-between items-start">
                        <span className="font-medium text-gray-800">{spec.label}</span>
                        <span className="text-brand-500 font-semibold text-right ml-4">{spec.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Performance Benchmarks */}
        <section className="section-padding bg-gray-50">
          <div className="container-width">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-brand-300 text-center mb-12">
                Performance Benchmarks
              </h2>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-4 px-6 font-semibold text-gray-800">Metric</th>
                        <th className="text-center py-4 px-6 font-semibold text-brand-500">Kalina AI</th>
                        <th className="text-center py-4 px-6 font-semibold text-gray-600">Industry Average</th>
                        <th className="text-center py-4 px-6 font-semibold text-green-600">Improvement</th>
                      </tr>
                    </thead>
                    <tbody>
                      {benchmarks.map((benchmark, index) => (
                        <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-4 px-6 font-medium text-gray-800">{benchmark.metric}</td>
                          <td className="py-4 px-6 text-center font-bold text-brand-500">{benchmark.kalina}</td>
                          <td className="py-4 px-6 text-center text-gray-600">{benchmark.industry}</td>
                          <td className="py-4 px-6 text-center font-bold text-green-600">{benchmark.improvement}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Matrix */}
        <section className="section-padding bg-white">
          <div className="container-width">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-brand-300 text-center mb-12">
                Integration Ecosystem
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                {integrations.map((category, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-brand-300 mb-4">{category.category}</h3>
                    <div className="space-y-2">
                      {category.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-8">
                <p className="text-gray-600 mb-4">
                  Over 200+ pre-built integrations available
                </p>
                <a href="/integrations" className="btn-primary btn-magnetic">
                  View All Integrations
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Requirements */}
        <section className="section-padding bg-gray-50">
          <div className="container-width">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-brand-300 text-center mb-12">
                System Requirements
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <h3 className="text-xl font-bold text-brand-300 mb-6">Minimum Requirements</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Internet Connection</span>
                      <span className="font-medium">Broadband (1 Mbps)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Browser Support</span>
                      <span className="font-medium">Modern browsers</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Mobile Support</span>
                      <span className="font-medium">iOS 12+, Android 8+</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">API Calls</span>
                      <span className="font-medium">No limits</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <h3 className="text-xl font-bold text-brand-300 mb-6">Recommended Setup</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Internet Connection</span>
                      <span className="font-medium">High-speed (10+ Mbps)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Backup Connection</span>
                      <span className="font-medium">Redundant internet</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monitoring</span>
                      <span className="font-medium">Real-time alerts</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Support Level</span>
                      <span className="font-medium">Enterprise support</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* API Documentation */}
        <section className="section-padding bg-white">
          <div className="container-width">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-brand-300 text-center mb-12">
                Developer Resources
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <div className="w-16 h-16 bg-brand-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-brand-500 text-2xl">📚</span>
                  </div>
                  <h3 className="text-lg font-bold text-brand-300 mb-3">API Documentation</h3>
                  <p className="text-gray-600 mb-4">Comprehensive API docs with examples</p>
                  <a href="/api-documentation" className="btn-primary btn-sm">
                    View Docs
                  </a>
                </div>
                
                <div className="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <div className="w-16 h-16 bg-brand-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-brand-500 text-2xl">◉</span>
                  </div>
                  <h3 className="text-lg font-bold text-brand-300 mb-3">SDK Downloads</h3>
                  <p className="text-gray-600 mb-4">Official SDKs for all major languages</p>
                  <a href="/developers" className="btn-primary btn-sm">
                    Download SDKs
                  </a>
                </div>
                
                <div className="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <div className="w-16 h-16 bg-brand-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-brand-500 text-2xl">→</span>
                  </div>
                  <h3 className="text-lg font-bold text-brand-300 mb-3">Quick Start</h3>
                  <p className="text-gray-600 mb-4">Get up and running in minutes</p>
                  <a href="/getting-started" className="btn-primary btn-sm">
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-brand-500 text-black">
          <div className="container-width">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Build with Kalina?
              </h2>
              <p className="text-xl opacity-90 mb-8">
                Access our comprehensive APIs, SDKs, and technical documentation. 
                Start building your voice automation solution today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/developers" className="btn-secondary bg-white text-brand-500 hover:bg-gray-100">
                  Developer Portal
                </a>
                <a href="/getting-started" className="btn-secondary bg-white text-brand-500 hover:bg-gray-100">
                  Start Building
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
  )
}
