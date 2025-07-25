'use client'

import { BasicPageLayout } from '@/components/BasicPageLayout'
import { useScrollAnimationReveal } from '@/hooks/useScrollAnimationReveal'
import { useState } from 'react'

export default function CaseStudiesPage() {
  const { ref, classes } = useScrollAnimationReveal('up')
  const [selectedIndustry, setSelectedIndustry] = useState('all')

  const caseStudies = [
    {
      id: 1,
      industry: 'restaurant',
      company: "Mario's Pizza Chain",
      size: "50+ locations",
      challenge: "Managing high call volumes during peak hours, reducing wait times, and improving order accuracy",
      solution: "Implemented Kalina AI for automated order taking across all locations with custom menu integration",
      results: [
        { metric: "Order Processing Time", improvement: "85% faster", from: "8 minutes", to: "72 seconds" },
        { metric: "Order Accuracy", improvement: "99.2%", from: "92%", to: "99.2%" },
        { metric: "Staff Productivity", improvement: "60% increase", from: "200 orders/day", to: "320 orders/day" },
        { metric: "Customer Satisfaction", improvement: "+23%", from: "3.2/5", to: "4.1/5" }
      ],
      quote: "Kalina AI transformed our business. We went from losing customers due to busy phone lines to taking orders 24/7 with perfect accuracy.",
      author: "Maria Rodriguez, Operations Manager",
      timeline: "2 weeks implementation",
      roi: "340% ROI in 6 months"
    },
    {
      id: 2,
      industry: 'healthcare',
      company: "Central Medical Group",
      size: "12 clinics, 450+ patients/day",
      challenge: "Overwhelming appointment scheduling calls, patient inquiries, and after-hours emergency triage",
      solution: "Deployed HIPAA-compliant Kalina AI for appointment scheduling, patient screening, and medical triage",
      results: [
        { metric: "Appointment Scheduling", improvement: "90% automated", from: "Manual", to: "AI-handled" },
        { metric: "Patient Wait Time", improvement: "70% reduction", from: "15 minutes", to: "4.5 minutes" },
        { metric: "Staff Workload", improvement: "50% reduction", from: "120 calls/day", to: "60 calls/day" },
        { metric: "Patient Satisfaction", improvement: "+35%", from: "3.8/5", to: "4.6/5" }
      ],
      quote: "The HIPAA compliance and accuracy gave us confidence. Our patients love the 24/7 availability for scheduling.",
      author: "Dr. James Mitchell, Chief Medical Officer",
      timeline: "3 weeks implementation",
      roi: "280% ROI in 8 months"
    },
    {
      id: 3,
      industry: 'ecommerce',
      company: "TechGear Online",
      size: "$10M annual revenue",
      challenge: "High volume of customer support calls, product inquiries, and order status requests",
      solution: "Integrated Kalina AI with Shopify for automated customer support and order management",
      results: [
        { metric: "Support Response Time", improvement: "24/7 instant", from: "4-6 hours", to: "Immediate" },
        { metric: "Query Resolution", improvement: "89% first-call", from: "45%", to: "89%" },
        { metric: "Support Costs", improvement: "65% reduction", from: "$8,500/month", to: "$3,000/month" },
        { metric: "Customer Retention", improvement: "+28%", from: "72%", to: "92%" }
      ],
      quote: "Our customers get instant, accurate answers anytime they call. It's like having a super-powered support team that never sleeps.",
      author: "Sarah Chen, Customer Success Director",
      timeline: "10 days implementation",
      roi: "450% ROI in 4 months"
    },
    {
      id: 4,
      industry: 'realestate',
      company: "Premier Properties Group",
      size: "200+ agents, 5 offices",
      challenge: "Lead qualification, property inquiries, and showing coordination across multiple markets",
      solution: "Kalina AI for lead qualification, property matching, and automated showing scheduling",
      results: [
        { metric: "Lead Response Time", improvement: "Instant", from: "2-4 hours", to: "Under 30 seconds" },
        { metric: "Qualified Leads", improvement: "180% increase", from: "150/month", to: "420/month" },
        { metric: "Agent Productivity", improvement: "75% increase", from: "12 showings/week", to: "21 showings/week" },
        { metric: "Conversion Rate", improvement: "+42%", from: "2.3%", to: "3.8%" }
      ],
      quote: "We never miss a lead anymore. Kalina captures every inquiry and pre-qualifies them perfectly, so our agents focus on closing deals.",
      author: "Michael Torres, Sales Director",
      timeline: "1 week implementation",
      roi: "520% ROI in 3 months"
    },
    {
      id: 5,
      industry: 'automotive',
      company: "Elite Auto Service",
      size: "8 locations, 200+ vehicles/day",
      challenge: "Service appointment scheduling, parts availability checks, and customer follow-ups",
      solution: "Kalina AI integrated with service management system for complete automation",
      results: [
        { metric: "Appointment Booking", improvement: "95% automated", from: "Manual", to: "AI-scheduled" },
        { metric: "No-show Rate", improvement: "80% reduction", from: "25%", to: "5%" },
        { metric: "Customer Follow-up", improvement: "100% coverage", from: "30%", to: "100%" },
        { metric: "Revenue Growth", improvement: "+32%", from: "$2.1M", to: "$2.8M" }
      ],
      quote: "The automated reminders and seamless scheduling transformed our business. We're booked solid and customers love the convenience.",
      author: "Roberto Martinez, General Manager",
      timeline: "2 weeks implementation",
      roi: "390% ROI in 5 months"
    }
  ]

  const industries = [
    { key: 'all', label: 'All Industries' },
    { key: 'restaurant', label: 'Restaurant & Food' },
    { key: 'healthcare', label: 'Healthcare' },
    { key: 'ecommerce', label: 'E-commerce' },
    { key: 'realestate', label: 'Real Estate' },
    { key: 'automotive', label: 'Automotive' }
  ]

  const filteredCaseStudies = selectedIndustry === 'all' 
    ? caseStudies 
    : caseStudies.filter(study => study.industry === selectedIndustry)

  return (
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="section-padding bg-white">
          <div className="container-width">
            <div className={`max-w-4xl mx-auto text-center transition-all duration-700 ${classes}`} ref={ref}>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-950 mb-6">
                Customer Success Stories
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Discover how businesses across industries are achieving remarkable results 
                with Kalina AI voice automation. Real stories, real numbers, real impact.
              </p>
            </div>
          </div>
        </section>

        {/* Industry Filter */}
        <section className="section-padding bg-white">
          <div className="container-width">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-wrap justify-center gap-3 mb-12">
                {industries.map((industry) => (
                  <button
                    key={industry.key}
                    onClick={() => setSelectedIndustry(industry.key)}
                    className={`px-6 py-3 rounded-lg font-medium transition-all ${
                      selectedIndustry === industry.key
                        ? 'bg-gray-500 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {industry.label}
                  </button>
                ))}
              </div>

              {/* Results Summary */}
              <div className="grid md:grid-cols-4 gap-6 mb-12">
                <div className="text-center p-6 bg-green-50 rounded-xl">
                  <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
                  <div className="text-green-700 font-medium">Businesses Served</div>
                </div>
                <div className="text-center p-6 bg-blue-50 rounded-xl">
                  <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
                  <div className="text-blue-700 font-medium">Customer Satisfaction</div>
                </div>
                <div className="text-center p-6 bg-purple-50 rounded-xl">
                  <div className="text-3xl font-bold text-purple-600 mb-2">340%</div>
                  <div className="text-purple-700 font-medium">Average ROI</div>
                </div>
                <div className="text-center p-6 bg-orange-50 rounded-xl">
                  <div className="text-3xl font-bold text-orange-600 mb-2">&lt; 2 weeks</div>
                  <div className="text-orange-700 font-medium">Avg Implementation</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="section-padding bg-gray-50">
          <div className="container-width">
            <div className="max-w-6xl mx-auto space-y-12">
              {filteredCaseStudies.map((study, index) => (
                <div key={study.id} className="bg-white rounded-2xl p-8 shadow-lg">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row justify-between items-start mb-8">
                    <div>
                      <h2 className="text-2xl font-bold text-brand-300 mb-2">{study.company}</h2>
                      <p className="text-gray-600">{study.size}</p>
                    </div>
                    <div className="mt-4 md:mt-0 flex gap-4">
                      <div className="text-right">
                        <div className="text-sm text-gray-500">Implementation</div>
                        <div className="font-bold text-brand-500">{study.timeline}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-500">ROI</div>
                        <div className="font-bold text-green-600">{study.roi}</div>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Challenge & Solution */}
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-3">The Challenge</h3>
                      <p className="text-gray-600 mb-6">{study.challenge}</p>
                      
                      <h3 className="text-lg font-bold text-gray-800 mb-3">The Solution</h3>
                      <p className="text-gray-600">{study.solution}</p>
                    </div>

                    {/* Results */}
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-4">Results Achieved</h3>
                      <div className="space-y-4">
                        {study.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="bg-gray-50 p-4 rounded-lg">
                            <div className="flex justify-between items-center mb-2">
                              <span className="font-medium text-gray-800">{result.metric}</span>
                              <span className="font-bold text-green-600">{result.improvement}</span>
                            </div>
                            <div className="flex justify-between text-sm text-gray-600">
                              <span>Before: {result.from}</span>
                              <span>After: {result.to}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="mt-8 p-6 bg-brand-50 rounded-xl border-l-4 border-brand-500">
                    <blockquote className="text-gray-700 italic mb-4">
                      "{study.quote}"
                    </blockquote>
                    <cite className="text-brand-600 font-medium">— {study.author}</cite>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Impact */}
        <section className="section-padding bg-white">
          <div className="container-width">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-brand-300 text-center mb-12">
                Industry-Wide Impact
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="text-center p-6 bg-gray-50 rounded-xl">
                  <h3 className="text-xl font-bold text-brand-300 mb-4">Restaurant Industry</h3>
                  <div className="space-y-3">
                    <div className="text-2xl font-bold text-green-600">85%</div>
                    <div className="text-gray-600">Faster order processing</div>
                  </div>
                </div>
                
                <div className="text-center p-6 bg-gray-50 rounded-xl">
                  <h3 className="text-xl font-bold text-brand-300 mb-4">Healthcare</h3>
                  <div className="space-y-3">
                    <div className="text-2xl font-bold text-blue-600">70%</div>
                    <div className="text-gray-600">Reduction in wait times</div>
                  </div>
                </div>
                
                <div className="text-center p-6 bg-gray-50 rounded-xl">
                  <h3 className="text-xl font-bold text-brand-300 mb-4">E-commerce</h3>
                  <div className="space-y-3">
                    <div className="text-2xl font-bold text-purple-600">24/7</div>
                    <div className="text-gray-600">Customer support coverage</div>
                  </div>
                </div>
                
                <div className="text-center p-6 bg-gray-50 rounded-xl">
                  <h3 className="text-xl font-bold text-brand-300 mb-4">Real Estate</h3>
                  <div className="space-y-3">
                    <div className="text-2xl font-bold text-orange-600">180%</div>
                    <div className="text-gray-600">Increase in qualified leads</div>
                  </div>
                </div>
                
                <div className="text-center p-6 bg-gray-50 rounded-xl">
                  <h3 className="text-xl font-bold text-brand-300 mb-4">Automotive</h3>
                  <div className="space-y-3">
                    <div className="text-2xl font-bold text-red-600">95%</div>
                    <div className="text-gray-600">Automated appointment booking</div>
                  </div>
                </div>
                
                <div className="text-center p-6 bg-gray-50 rounded-xl">
                  <h3 className="text-xl font-bold text-brand-300 mb-4">Overall Average</h3>
                  <div className="space-y-3">
                    <div className="text-2xl font-bold text-brand-500">340%</div>
                    <div className="text-gray-600">Return on investment</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Download Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-width">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-950 mb-6">
                Get Detailed Case Studies
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Download our comprehensive case study collection with detailed ROI calculations, 
                implementation timelines, and technical specifications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/getting-started" className="btn-primary btn-magnetic">
                  Download Case Studies
                </a>
                <a href="/demo" className="btn-secondary bg-white text-brand-500 hover:bg-gray-100">
                  Schedule Consultation
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-brand-500 text-black">
          <div className="container-width">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Write Your Success Story?
              </h2>
              <p className="text-xl opacity-90 mb-8">
                Join hundreds of successful businesses that have transformed their operations 
                with Kalina AI. Start your journey today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/getting-started" className="btn-secondary bg-white text-brand-500 hover:bg-gray-100">
                  Start Free Trial
                </a>
                <a href="/demo" className="btn-secondary bg-white text-brand-500 hover:bg-gray-100">
                  Book Demo
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
  )
}
