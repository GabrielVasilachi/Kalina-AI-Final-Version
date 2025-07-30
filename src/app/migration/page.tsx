'use client'

import { BasicPageLayout } from '@/components/BasicPageLayout'
import { useScrollAnimationReveal } from '@/hooks/useScrollAnimationReveal'
import { useState } from 'react'

export default function MigrationPage() {
  const { ref, classes } = useScrollAnimationReveal('up')
  const [currentPlatform, setCurrentPlatform] = useState('voiceflow')

  const migrationPlans = {
    voiceflow: {
      name: "Voiceflow",
      steps: [
        { title: "Export Conversations", description: "Download your existing conversation flows and training data", duration: "1 day" },
        { title: "Data Mapping", description: "Our team maps your flows to Kalina's advanced architecture", duration: "2-3 days" },
        { title: "Testing & Validation", description: "Comprehensive testing to ensure accuracy and performance", duration: "3-5 days" },
        { title: "Go Live", description: "Seamless transition with zero downtime", duration: "1 day" }
      ],
      timeline: "7-10 days",
      effort: "Minimal - Our team handles 95% of the work"
    },
    MistralAI: {
      name: "MistralAI",
      steps: [
        { title: "Voice Profile Migration", description: "Transfer and enhance your custom voice profiles", duration: "1-2 days" },
        { title: "Integration Setup", description: "Configure Kalina's multi-channel capabilities", duration: "2-3 days" },
        { title: "Performance Optimization", description: "Fine-tune for better latency and quality", duration: "2-3 days" },
        { title: "Launch", description: "Deploy with improved performance metrics", duration: "1 day" }
      ],
      timeline: "6-9 days", 
      effort: "Low - Automated migration tools available"
    },
    vapi: {
      name: "VAPI",
      steps: [
        { title: "API Integration Analysis", description: "Analyze current API usage patterns", duration: "1 day" },
        { title: "Endpoint Migration", description: "Migrate to Kalina's more robust API infrastructure", duration: "2-4 days" },
        { title: "Enhanced Features Setup", description: "Configure advanced features not available in VAPI", duration: "3-4 days" },
        { title: "Production Deployment", description: "Switch to production with improved reliability", duration: "1 day" }
      ],
      timeline: "7-10 days",
      effort: "Medium - Some API endpoint updates required"
    }
  }

  const benefits = [
    {
      title: "Zero Downtime Migration",
      description: "Seamless transition without interrupting your business operations",
      icon: "↻"
    },
    {
      title: "Data Preservation", 
      description: "All your existing data, conversations, and configurations are preserved",
      icon: "▫"
    },
    {
      title: "Enhanced Performance",
      description: "Immediate improvements in response time, accuracy, and reliability",
      icon: "⚡"
    },
    {
      title: "Cost Reduction",
      description: "Lower operational costs with our efficient infrastructure",
      icon: "$"
    },
    {
      title: "Advanced Features",
      description: "Access to enterprise features not available in other platforms",
      icon: "→"
    },
    {
      title: "Dedicated Support",
      description: "Personal migration specialist assigned to your project",
      icon: "◉"
    }
  ]

  return (
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-white via-blue-50/30 to-brand-100/10">
          <div className="container-width">
            <div className={`max-w-4xl mx-auto text-center transition-all duration-700 ${classes}`} ref={ref}>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-950 mb-6">
                Seamless Platform Migration
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Switch to Kalina AI from any platform with zero downtime, preserved data, 
                and immediate performance improvements. Our expert team handles everything.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/getting-started" className="btn-primary btn-magnetic">
                  Start Migration
                </a>
                <a href="/demo" className="btn-outline">
                  See Migration Demo
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Platform Selector */}
        <section className="section-padding bg-white">
          <div className="container-width">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-300 text-center mb-12">
                Choose Your Current Platform
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {Object.entries(migrationPlans).map(([key, plan]) => (
                  <button
                    key={key}
                    onClick={() => setCurrentPlatform(key)}
                    className={`p-6 rounded-2xl border-2 transition-all ${
                      currentPlatform === key
                        ? 'border-brand-500 bg-brand-50'
                        : 'border-gray-200 bg-white hover:border-brand-300'
                    }`}
                  >
                    <h3 className="text-xl font-bold text-brand-300 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 text-sm">{plan.timeline}</p>
                  </button>
                ))}
              </div>

              {/* Migration Process */}
              <div className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-brand-300 mb-6">
                  Migration from {migrationPlans[currentPlatform as keyof typeof migrationPlans].name}
                </h3>
                
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">Timeline</h4>
                    <p className="text-2xl font-bold text-brand-500">
                      {migrationPlans[currentPlatform as keyof typeof migrationPlans].timeline}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">Your Effort</h4>
                    <p className="text-lg text-gray-600">
                      {migrationPlans[currentPlatform as keyof typeof migrationPlans].effort}
                    </p>
                  </div>
                </div>

                <h4 className="text-lg font-semibold text-gray-800 mb-6">Migration Steps</h4>
                <div className="space-y-4">
                  {migrationPlans[currentPlatform as keyof typeof migrationPlans].steps.map((step, index) => (
                    <div key={index} className="flex gap-4 p-4 bg-white rounded-lg">
                      <div className="flex-shrink-0 w-8 h-8 bg-brand-500 text-white rounded-full flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                      <div className="flex-grow">
                        <h5 className="font-semibold text-gray-800">{step.title}</h5>
                        <p className="text-gray-600 text-sm mb-1">{step.description}</p>
                        <span className="text-xs text-brand-500 font-medium">{step.duration}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Migration Benefits */}
        <section className="section-padding bg-white">
          <div className="container-width">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-300 text-center mb-12">
                Why Migrate to Kalina?
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                    <div className="text-4xl mb-4">{benefit.icon}</div>
                    <h3 className="text-xl font-semibold text-brand-300 mb-3">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="section-padding bg-gray-50">
          <div className="container-width">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-300 text-center mb-12">
                Migration Success Stories
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <h3 className="text-xl font-bold text-brand-300 mb-4">TechCorp Migration</h3>
                  <p className="text-gray-600 mb-4">
                    "Migrated from Voiceflow to Kalina in just 8 days. Zero downtime and 
                    immediate 40% improvement in response accuracy."
                  </p>
                  <div className="text-sm text-brand-500 font-medium">
                    ✓ Completed in 8 days<br/>
                    ✓ 40% accuracy improvement<br/>
                    ✓ 60% cost reduction
                  </div>
                </div>
                
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <h3 className="text-xl font-bold text-brand-300 mb-4">MedHealth Systems</h3>
                  <p className="text-gray-600 mb-4">
                    "Seamless transition from MistralAI. Patient satisfaction scores 
                    increased by 25% within the first month."
                  </p>
                  <div className="text-sm text-brand-500 font-medium">
                    ✓ Zero patient disruption<br/>
                    ✓ 25% satisfaction increase<br/>
                    ✓ HIPAA compliance maintained
                  </div>
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
                Ready to Make the Switch?
              </h2>
              <p className="text-xl opacity-90 mb-8">
                Join hundreds of businesses that have successfully migrated to Kalina AI. 
                Get started with our free migration assessment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/getting-started" className="btn-secondary bg-white text-brand-500 hover:bg-gray-100">
                  Get Migration Quote
                </a>
                <a href="/support" className="btn-secondary bg-white text-brand-500 hover:bg-gray-100">
                  Talk to Expert
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
  )
}
