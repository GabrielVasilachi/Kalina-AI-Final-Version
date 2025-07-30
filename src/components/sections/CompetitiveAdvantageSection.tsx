'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/lib/i18n'

export function CompetitiveAdvantageSection() {
  const { t, translations } = useLanguage()
  const [activeComparison, setActiveComparison] = useState('voiceflow')

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-6">
            {t('competitive.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('competitive.subtitle')}
          </p>
        </div>

        {/* Competitor Selector */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 rounded-lg p-1 flex">
            {translations.competitive?.competitors?.map((competitor: any) => (
              <button
                key={competitor.id}
                onClick={() => setActiveComparison(competitor.id)}
                className={`px-6 py-3 rounded-md font-medium transition-all duration-300 flex items-center space-x-2 hover:scale-105 hover:shadow-lg ${
                  activeComparison === competitor.id
                    ? 'bg-black text-white shadow-xl'
                    : 'text-gray-600 hover:text-brand-500 hover:bg-brand-50'
                }`}
              >
                <span>{competitor.logo}</span>
                <span>vs {competitor.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Comparison Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Competitor Weaknesses */}
          <div className="bg-red-100 rounded-2xl p-8 border border-red-300 hover:shadow-xl hover:shadow-red-200/50 hover:scale-[1.02] transition-all duration-500 group">
            <h3 className="text-2xl font-bold text-red-700 mb-6 flex items-center group-hover:text-red-800 transition-colors duration-300">
              <span className="mr-3 group-hover:scale-110 transition-transform duration-300">
                {translations.competitive?.competitors?.find((c: any) => c.id === activeComparison)?.logo}
              </span>
              {translations.competitive?.competitors?.find((c: any) => c.id === activeComparison)?.weaknessesTitle}
            </h3>
            <div className="space-y-4">
              {translations.competitive?.competitors?.find((c: any) => c.id === activeComparison)?.weaknesses?.map((weakness: string, index: number) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="text-red-500 mt-1">✗</div>
                  <div className="text-red-800">{weakness}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Kallina Advantages */}
          <div className="bg-green-100 rounded-2xl p-8 border border-green-300 hover:shadow-2xl hover:shadow-green-200/50 hover:scale-[1.02] transition-all duration-500 group">
            <h3 className="text-2xl font-bold text-green-700 mb-6 flex items-center group-hover:text-green-800 transition-colors duration-300">
              <span className="mr-3 group-hover:scale-110 transition-transform duration-300">→</span>
              {translations.competitive?.kallinaAdvantagesTitle}
            </h3>
            <div className="space-y-4">
              {translations.competitive?.advantages?.map((advantage: any, index: number) => (
                <div key={index} className="flex items-start space-x-3 hover:bg-green-50 hover:rounded-lg hover:p-2 transition-all duration-300">
                  <div className="text-green-500 mt-1 hover:scale-110 transition-transform duration-300">✓</div>
                  <div>
                    <div className="font-semibold text-green-800 group-hover:text-green-900 transition-colors duration-300">{advantage.title}</div>
                    <div className="text-green-700 text-sm group-hover:text-green-800 transition-colors duration-300">{advantage.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Detailed Advantages */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {translations.competitive?.advantages?.map((advantage: any, index: number) => (
            <div key={index} className="bg-gray-100 rounded-xl p-6 border border-gray-200">
              <div className="text-3xl mb-4">{advantage.icon}</div>
              <h4 className="text-lg font-bold text-black mb-3">{advantage.title}</h4>
              <p className="text-gray-600 text-sm mb-4">{advantage.description}</p>
              <ul className="space-y-2">
                {advantage.details.map((detail: string, i: number) => (
                  <li key={i} className="text-xs text-gray-500 flex items-center">
                    <span className="w-1 h-1 bg-black rounded-full mr-2"></span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Comparison Matrix */}
        <div className="bg-gray-100 rounded-2xl p-8 mb-16 border border-gray-300">
          <h3 className="text-2xl font-bold text-black mb-8 text-center">
            {translations.competitive?.comparisonTitle}
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-4 font-semibold">Funcționalitate</th>
                  <th className="text-center py-4 px-4 font-semibold bg-black text-white rounded-t-lg">Kallina.ai</th>
                  <th className="text-center py-4 px-4 font-semibold">Voiceflow</th>
                  <th className="text-center py-4 px-4 font-semibold">MistralAI</th>
                  <th className="text-center py-4 px-4 font-semibold">VAPI</th>
                </tr>
              </thead>
              <tbody>
                {translations.competitive?.comparisonMatrix?.map((row: any, index: number) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="py-4 px-4 font-medium text-gray-800">{row.feature}</td>
                    <td className="py-4 px-4 text-center bg-black text-white font-semibold">{row.kallina}</td>
                    <td className="py-4 px-4 text-center text-gray-600">{row.voiceflow}</td>
                    <td className="py-4 px-4 text-center text-gray-600">{row.MistralAI}</td>
                    <td className="py-4 px-4 text-center text-gray-600">{row.vapi}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Migration CTA */}
        <div className="bg-black text-white rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold mb-4">
            {translations.competitive?.migrationCta?.title}
          </h3>
          <p className="text-xl text-gray-300 mb-8">
            {translations.competitive?.migrationCta?.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link
              href="/migration"
              className="bg-white text-black px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg"
            >
              {translations.competitive?.migrationCta?.freeMigration}
            </Link>
            <Link
              href="/comparison"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-black transition-all duration-200 font-semibold text-lg"
            >
              {translations.competitive?.migrationCta?.detailedComparison}
            </Link>
          </div>
          <div className="text-sm text-gray-400">
            {translations.competitive?.migrationCta?.migrationNote}
          </div>
        </div>
      </div>
    </section>
  )
}
