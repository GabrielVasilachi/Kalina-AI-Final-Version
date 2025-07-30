'use client'

import Link from 'next/link'
import { useLanguage } from '@/lib/i18n'

export function ROICalculatorSection() {
  const { t, translations } = useLanguage()
  
  // Prevent rendering if translations are not loaded
  if (!translations?.roi) {
    return null
  }

  const metricsData = translations.roi.metricsData || []
  const calculationsData = translations.roi.calculationsData || []

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-6">
            {translations.roi.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {translations.roi.subtitle}
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {metricsData.map((metric: any, index: number) => (
            <div key={index} className="bg-gray-100 rounded-xl p-6 text-center shadow-sm border border-gray-200">
              <div className="text-3xl mb-4">{metric.icon}</div>
              <div className="text-3xl font-bold text-black mb-2">{metric.value}</div>
              <div className="text-sm font-medium text-black mb-2">{metric.label}</div>
              <div className="text-xs text-gray-600">{metric.description}</div>
            </div>
          ))}
        </div>

        {/* ROI Calculations */}
        <div className="space-y-12">
          {calculationsData.map((calc: any, index: number) => (
            <div key={index} className="bg-gray-100 rounded-2xl p-8 shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold text-black mb-8 text-center">
                {calc.scenario}
              </h3>
              
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Before */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-red-600 mb-4">
                    {calc.before.title}
                  </h4>
                  <div className="space-y-3">
                    {calc.before.costs.map((cost: any, i: number) => (
                      <div key={i} className="flex justify-between text-sm">
                        <span className="text-gray-600">{cost.item}</span>
                        <span className="font-medium text-black">{cost.amount}</span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-gray-200 pt-3">
                    <div className="flex justify-between font-bold">
                      <span>{translations.roi.labels?.total}</span>
                      <span className="text-red-600">{calc.before.total}</span>
                    </div>
                  </div>
                </div>

                {/* After */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-green-600 mb-4">
                    {calc.after.title}
                  </h4>
                  <div className="space-y-3">
                    {calc.after.costs.map((cost: any, i: number) => (
                      <div key={i} className="flex justify-between text-sm">
                        <span className="text-gray-600">{cost.item}</span>
                        <span className="font-medium text-black">{cost.amount}</span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-gray-200 pt-3">
                    <div className="flex justify-between font-bold">
                      <span>{translations.roi.labels?.total}</span>
                      <span className="text-green-600">{calc.after.total}</span>
                    </div>
                  </div>
                </div>

                {/* Savings */}
                <div className="bg-black text-white rounded-xl p-6 text-center">
                  <div className="text-sm text-gray-300 mb-2">{translations.roi.labels?.monthlyEconomy}</div>
                  <div className="text-3xl font-bold mb-4">{calc.savings}</div>
                  <div className="text-sm text-gray-300 mb-2">{translations.roi.labels?.roi}</div>
                  <div className="text-2xl font-bold text-green-400">{calc.roi}</div>
                  <div className="text-xs text-gray-400 mt-4">
                    {translations.roi.labels?.paybackNote}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Calculator CTA */}
        <div className="bg-black text-white rounded-2xl p-12 text-center mt-16">
          <h3 className="text-3xl font-bold mb-4">
            {translations.roi.calculatorCta?.title}
          </h3>
          <p className="text-xl text-gray-300 mb-8">
            {translations.roi.calculatorCta?.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/roi-calculator"
              className="bg-white text-black px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg"
            >
              {translations.roi.calculatorCta?.interactiveCalculator}
            </Link>
            <Link
              href="/demo"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-black transition-all duration-200 font-semibold text-lg"
            >
              {translations.roi.calculatorCta?.talkToExpert}
            </Link>
          </div>
          <div className="text-sm text-gray-400 mt-6">
            {translations.roi.calculatorCta?.savingsNote}
          </div>
        </div>
      </div>
    </section>
  )
}
