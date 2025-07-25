'use client'

import { BasicPageLayout } from '@/components/BasicPageLayout'
import { useScrollAnimationReveal } from '@/hooks/useScrollAnimationReveal'
import { useState } from 'react'

export default function ROICalculatorPage() {
  const { ref, classes } = useScrollAnimationReveal('up')
  const [industry, setIndustry] = useState('restaurant')
  const [callVolume, setCallVolume] = useState(500)
  const [avgCallTime, setAvgCallTime] = useState(5)
  const [hourlyWage, setHourlyWage] = useState(15)

  // ROI Calculations
  const currentMonthlyCost = (callVolume * avgCallTime * hourlyWage) / 60
  const kallinaMonthlyCost = callVolume * 0.12 // $0.12 per call
  const monthlySavings = currentMonthlyCost - kallinaMonthlyCost
  const yearlySavings = monthlySavings * 12
  const roiPercentage = ((monthlySavings * 12) / (kallinaMonthlyCost * 12)) * 100

  const scenarios = {
    restaurant: {
      title: "Restaurant & Food Service",
      description: "Reduce phone order processing time and staff costs",
      metrics: {
        efficiency: "85% faster order processing",
        accuracy: "99.2% order accuracy rate",
        uptime: "24/7 availability"
      }
    },
    healthcare: {
      title: "Healthcare Practice",
      description: "Streamline appointment scheduling and patient inquiries",
      metrics: {
        efficiency: "70% reduction in admin time",
        satisfaction: "94% patient satisfaction",
        uptime: "Round-the-clock availability"
      }
    },
    ecommerce: {
      title: "E-commerce Business",
      description: "Handle customer support and order inquiries",
      metrics: {
        efficiency: "60% faster response times",
        resolution: "89% first-call resolution",
        uptime: "Zero downtime support"
      }
    }
  }

  return (
    // <BasicPageLayout 
    //   title="ROI Calculator"
    //   description="Calculate your potential savings and ROI with Kalina AI voice automation"
    // >
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-white via-blue-50/30 to-brand-100/10">
          <div className="container-width">
            <div className={`max-w-4xl mx-auto text-center transition-all duration-700 ${classes}`} ref={ref}>
              <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
                ROI Calculator
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Calculate your potential savings and return on investment with Kalina AI.
                See how much you could save on operational costs while improving customer experience.
              </p>
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="section-padding bg-white">
          <div className="container-width">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Input Controls */}
                <div className="space-y-8">
                  <h2 className="text-2xl font-bold text-brand-300 mb-6">Enter Your Details</h2>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Industry Type</label>
                    <select 
                      value={industry}
                      onChange={(e) => setIndustry(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-400 focus:border-transparent"
                    >
                      <option value="restaurant">Restaurant & Food Service</option>
                      <option value="healthcare">Healthcare Practice</option>
                      <option value="ecommerce">E-commerce Business</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Monthly Call Volume: {callVolume.toLocaleString()} calls
                    </label>
                    <input
                      type="range"
                      min="100"
                      max="5000"
                      step="100"
                      value={callVolume}
                      onChange={(e) => setCallVolume(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>100</span>
                      <span>5,000</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Average Call Duration: {avgCallTime} minutes
                    </label>
                    <input
                      type="range"
                      min="1"
                      max="15"
                      step="1"
                      value={avgCallTime}
                      onChange={(e) => setAvgCallTime(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>1 min</span>
                      <span>15 min</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Staff Hourly Wage: ${hourlyWage}
                    </label>
                    <input
                      type="range"
                      min="10"
                      max="50"
                      step="1"
                      value={hourlyWage}
                      onChange={(e) => setHourlyWage(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>$10</span>
                      <span>$50</span>
                    </div>
                  </div>
                </div>

                {/* Results */}
                <div className="bg-gray-50 p-8 rounded-2xl">
                  <h3 className="text-2xl font-bold text-brand-300 mb-6">Your ROI Analysis</h3>
                  
                  <div className="space-y-6">
                    <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                      <span className="text-gray-600">Current Monthly Cost</span>
                      <span className="text-xl font-bold text-red-600">${currentMonthlyCost.toFixed(0)}</span>
                    </div>
                    
                    <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                      <span className="text-gray-600">Kalina Monthly Cost</span>
                      <span className="text-xl font-bold text-blue-600">${kallinaMonthlyCost.toFixed(0)}</span>
                    </div>
                    
                    <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg border-2 border-green-200">
                      <span className="text-gray-700 font-medium">Monthly Savings</span>
                      <span className="text-2xl font-bold text-green-600">${monthlySavings.toFixed(0)}</span>
                    </div>
                    
                    <div className="flex justify-between items-center p-4 bg-brand-50 rounded-lg border-2 border-brand-200">
                      <span className="text-gray-700 font-medium">Annual Savings</span>
                      <span className="text-3xl font-bold text-brand-500">${yearlySavings.toFixed(0)}</span>
                    </div>
                    
                    <div className="text-center p-4 bg-gradient-to-r from-brand-500 to-blue-600 text-black rounded-lg">
                      <div className="text-sm opacity-90">ROI Percentage</div>
                      <div className="text-4xl font-bold">{roiPercentage.toFixed(0)}%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Scenarios */}
        <section className="section-padding bg-gray-50">
          <div className="container-width">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-brand-300 text-center mb-12">
                Industry-Specific Benefits
              </h2>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  {Object.entries(scenarios).map(([key, scenario]) => (
                    <button
                      key={key}
                      onClick={() => setIndustry(key)}
                      className={`p-4 rounded-lg text-left transition-all ${
                        industry === key
                          ? 'bg-gray-500 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <h4 className="font-semibold">{scenario.title}</h4>
                    </button>
                  ))}
                </div>
                
                <div className="border-t pt-8">
                  <h3 className="text-xl font-bold text-brand-300 mb-4">
                    {scenarios[industry as keyof typeof scenarios].title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {scenarios[industry as keyof typeof scenarios].description}
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    {Object.entries(scenarios[industry as keyof typeof scenarios].metrics).map(([key, value]) => (
                      <div key={key} className="text-center p-4 bg-gray-50 rounded-lg">
                        <div className="text-2xl font-bold text-brand-500 mb-2">{value}</div>
                        <div className="text-sm text-gray-600 capitalize">{key}</div>
                      </div>
                    ))}
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
                Ready to Start Saving?
              </h2>
              <p className="text-xl opacity-90 mb-8">
                Based on your calculations, you could save ${yearlySavings.toFixed(0)} annually. 
                Get started with Kalina AI today and start seeing results immediately.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/getting-started" className="btn-secondary bg-white text-gray-500 hover:bg-gray-100">
                  Start Free Trial
                </a>
                <a href="/demo" className="btn-secondary bg-white text-gray-500 hover:bg-gray-100">
                  Book Demo
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    // </BasicPageLayout>
  )
}
