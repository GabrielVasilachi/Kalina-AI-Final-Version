'use client'

import { BasicPageLayout } from '@/components/BasicPageLayout'
import { useScrollAnimationReveal } from '@/hooks/useScrollAnimationReveal'
import { useState } from 'react'

export default function ComparisonPage() {
  const { ref, classes } = useScrollAnimationReveal('up')
  const [selectedPlatform, setSelectedPlatform] = useState('voiceflow')

  const platforms = {
    voiceflow: {
      name: "Voiceflow",
      logo: "VF",
      color: "blue"
    },
    MistralAI: {
      name: "MistralAI", 
      logo: "EL",
      color: "orange"
    },
    vapi: {
      name: "VAPI",
      logo: "VP", 
      color: "purple"
    }
  }

  const comparisonData = {
    voiceflow: {
      pricing: { kalina: "$0.12/call", competitor: "$0.25/call" },
      accuracy: { kalina: "99.2%", competitor: "94.1%" },
      latency: { kalina: "150ms", competitor: "300ms" },
      uptime: { kalina: "99.99%", competitor: "99.5%" },
      integrations: { kalina: "200+", competitor: "50+" },
      languages: { kalina: "100+", competitor: "25+" },
      support: { kalina: "24/7 Expert", competitor: "Business Hours" }
    },
    MistralAI: {
      pricing: { kalina: "$0.12/call", competitor: "$0.30/call" },
      accuracy: { kalina: "99.2%", competitor: "96.3%" },
      latency: { kalina: "150ms", competitor: "250ms" },
      uptime: { kalina: "99.99%", competitor: "99.2%" },
      integrations: { kalina: "200+", competitor: "30+" },
      languages: { kalina: "100+", competitor: "29+" },
      support: { kalina: "24/7 Expert", competitor: "Email Only" }
    },
    vapi: {
      pricing: { kalina: "$0.12/call", competitor: "$0.20/call" },
      accuracy: { kalina: "99.2%", competitor: "92.8%" },
      latency: { kalina: "150ms", competitor: "400ms" },
      uptime: { kalina: "99.99%", competitor: "98.9%" },
      integrations: { kalina: "200+", competitor: "40+" },
      languages: { kalina: "100+", competitor: "20+" },
      support: { kalina: "24/7 Expert", competitor: "Community" }
    }
  }

  const features = [
    {
      category: "Core Features",
      items: [
        { feature: "Voice Recognition Accuracy", kalina: "✓ 99.2%", competitors: "✗ 92-96%" },
        { feature: "Natural Language Processing", kalina: "✓ Advanced GPT-4", competitors: "✗ Basic Models" },
        { feature: "Multi-language Support", kalina: "✓ 100+ Languages", competitors: "✗ 20-29 Languages" },
        { feature: "Real-time Analytics", kalina: "✓ Advanced Dashboard", competitors: "✗ Basic Reports" }
      ]
    },
    {
      category: "Integration & Deployment",
      items: [
        { feature: "API Endpoints", kalina: "✓ 200+ Integrations", competitors: "✗ 30-50 Integrations" },
        { feature: "Deployment Time", kalina: "✓ < 24 hours", competitors: "✗ 3-7 days" },
        { feature: "Custom Workflows", kalina: "✓ Unlimited", competitors: "✗ Limited" },
        { feature: "White-label Options", kalina: "✓ Full Customization", competitors: "✗ Not Available" }
      ]
    },
    {
      category: "Enterprise Features",
      items: [
        { feature: "HIPAA Compliance", kalina: "✓ Certified", competitors: "✗ Not Certified" },
        { feature: "SOC 2 Type II", kalina: "✓ Compliant", competitors: "✗ Not Compliant" },
        { feature: "Dedicated Infrastructure", kalina: "✓ Available", competitors: "✗ Shared Only" },
        { feature: "SLA Guarantee", kalina: "✓ 99.99% Uptime", competitors: "✗ 98-99.5%" }
      ]
    }
  ]

  return (
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="section-padding bg-white">
          <div className="container-width">
            <div className={`max-w-4xl mx-auto text-center transition-all duration-700 ${classes}`} ref={ref}>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-950 mb-6">
                Platform Comparison
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                See how Kalina AI outperforms other voice automation platforms in accuracy, 
                speed, features, and cost-effectiveness.
              </p>
            </div>
          </div>
        </section>

        {/* Platform Selector */}
        <section className="section-padding bg-white">
          <div className="container-width">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-950 text-center mb-8">
                Compare Kalina AI vs
              </h2>
              
              <div className="flex justify-center gap-4 mb-12">
                {Object.entries(platforms).map(([key, platform]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedPlatform(key)}
                    className={`px-6 py-3 rounded-lg font-medium transition-all ${
                      selectedPlatform === key
                        ? 'bg-gray-500 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {platform.name}
                  </button>
                ))}
              </div>

              {/* Head-to-Head Metrics */}
              <div className="grid md:grid-cols-2 bg-gray-50 gap-8 mb-12 rounded-2xl">
                {/* Kalina Card */}
                <div className="bg-gradient-to-br from-brand-500 to-blue-600 text-black p-8 rounded-2xl">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gray-200 text-brand-500 rounded-full flex items-center justify-center font-bold">
                      K
                    </div>
                    <h3 className="text-2xl font-bold">Kalina AI</h3>
                  </div>
                  <div className="space-y-4">
                    {Object.entries(comparisonData[selectedPlatform as keyof typeof comparisonData]).map(([metric, values]) => (
                      <div key={metric} className="flex justify-between items-center">
                        <span className="capitalize opacity-90">{metric.replace(/([A-Z])/g, ' $1')}</span>
                        <span className="font-bold text-lg">{values.kalina}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Competitor Card */}
                <div className="bg-gray-100 text-gray-800 p-8 rounded-2xl">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center font-bold">
                      {platforms[selectedPlatform as keyof typeof platforms].logo}
                    </div>
                    <h3 className="text-2xl font-bold">{platforms[selectedPlatform as keyof typeof platforms].name}</h3>
                  </div>
                  <div className="space-y-4">
                    {Object.entries(comparisonData[selectedPlatform as keyof typeof comparisonData]).map(([metric, values]) => (
                      <div key={metric} className="flex justify-between items-center">
                        <span className="capitalize text-gray-600">{metric.replace(/([A-Z])/g, ' $1')}</span>
                        <span className="font-bold text-lg text-gray-700">{values.competitor}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Feature Comparison */}
        <section className="section-padding bg-gray-50">
          <div className="container-width">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-brand-300 text-center mb-12">
                Detailed Feature Comparison
              </h2>
              
              <div className="space-y-8">
                {features.map((category, index) => (
                  <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                    <h3 className="text-xl font-bold text-brand-300 mb-6">{category.category}</h3>
                    <div className="space-y-4">
                      {category.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="grid md:grid-cols-3 gap-4 py-4 border-b border-gray-100 last:border-b-0">
                          <div className="font-medium text-gray-800">{item.feature}</div>
                          <div className="text-green-600 font-medium">{item.kalina}</div>
                          <div className="text-red-500 font-medium">{item.competitors}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Cost Analysis */}
        <section className="section-padding bg-white">
          <div className="container-width">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-brand-300 text-center mb-12">
                Cost Analysis
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-8 bg-gray-50 rounded-2xl">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Monthly Calls</h3>
                  <div className="text-3xl font-bold text-brand-500 mb-2">10,000</div>
                  <p className="text-gray-600">Average business volume</p>
                </div>
                
                <div className="text-center p-8 bg-green-50 rounded-2xl border-2 border-green-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Kalina AI Cost</h3>
                  <div className="text-3xl font-bold text-green-600 mb-2">$1,200</div>
                  <p className="text-green-700 font-medium">Best value</p>
                </div>
                
                <div className="text-center p-8 bg-red-50 rounded-2xl border-2 border-red-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    {platforms[selectedPlatform as keyof typeof platforms].name} Cost
                  </h3>
                  <div className="text-3xl font-bold text-red-600 mb-2">
                    ${selectedPlatform === 'voiceflow' ? '2,500' : selectedPlatform === 'MistralAI' ? '3,000' : '2,000'}
                  </div>
                  <p className="text-red-700 font-medium">
                    {selectedPlatform === 'voiceflow' ? '108% more' : selectedPlatform === 'MistralAI' ? '150% more' : '67% more'}
                  </p>
                </div>
              </div>
              
              <div className="text-center mt-8 p-6 bg-brand-50 rounded-xl">
                <h4 className="text-lg font-bold text-brand-500 mb-2">Annual Savings with Kalina</h4>
                <div className="text-2xl font-bold text-brand-600">
                  ${selectedPlatform === 'voiceflow' ? '15,600' : selectedPlatform === 'MistralAI' ? '21,600' : '9,600'}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Kalina */}
        <section className="section-padding bg-gray-50">
          <div className="container-width">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-brand-300 text-center mb-12">
                Why Businesses Choose Kalina
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      ✓
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Superior Performance</h4>
                      <p className="text-gray-600">99.2% accuracy vs industry average of 94%</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      ✓
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Better Value</h4>
                      <p className="text-gray-600">Up to 60% cost savings compared to competitors</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      ✓
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Enterprise Ready</h4>
                      <p className="text-gray-600">HIPAA, SOC 2 compliance with 99.99% uptime</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      ✓
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Fastest Integration</h4>
                      <p className="text-gray-600">Deploy in under 24 hours vs days or weeks</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      ✓
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">24/7 Expert Support</h4>
                      <p className="text-gray-600">Dedicated support team vs community forums</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      ✓
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Future-Proof Technology</h4>
                      <p className="text-gray-600">Continuous AI model updates and improvements</p>
                    </div>
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
                Ready to Switch to the Best?
              </h2>
              <p className="text-xl opacity-90 mb-8">
                Join thousands of businesses that have made the smart choice. 
                Experience the Kalina difference with our free trial.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/getting-started" className="btn-secondary bg-white text-brand-500 hover:bg-gray-100">
                  Start Free Trial
                </a>
                <a href="/migration" className="btn-secondary bg-white text-brand-500 hover:bg-gray-100">
                  Plan Migration
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
  )
}
