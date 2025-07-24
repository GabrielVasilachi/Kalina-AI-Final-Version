'use client'

import { useState } from 'react'
import Link from 'next/link'

export function CompetitiveAdvantageSection() {
  const [activeComparison, setActiveComparison] = useState('voiceflow')

  const competitors = [
    {
      id: 'voiceflow',
      name: 'Voiceflow',
      logo: '🌊',
      weaknesses: [
        'Complexitate tehnică ridicată',
        'Fără suport pentru română',
        'Implementare în săptămâni',
        'Costuri ascunse pentru funcții avansate'
      ]
    },
    {
      id: 'elevenlabs',
      name: 'ElevenLabs',
      logo: '♪',
      weaknesses: [
        'Doar sinteză vocală, nu conversații',
        'Fără integrări business',
        'Lipsă management conversații',
        'Nu e soluție completă'
      ]
    },
    {
      id: 'vapi',
      name: 'VAPI',
      logo: '◎',
      weaknesses: [
        'Interfață complicată pentru non-tehnici',
        'Documentație insuficientă',
        'Suport limitat pentru piața europeană',
        'Prețuri neprevizibile'
      ]
    }
  ]

  const kallinaAdvantages = [
    {
      title: 'Implementare în 3 Minute',
      description: 'De la zero la primul agent funcțional mai rapid decât să bei o cafea',
      icon: '⚡',
      details: ['Setup ghidat pas-cu-pas', 'Template-uri predefinite', 'Training automat', 'Deploy instant']
    },
    {
      title: 'Română Nativă Perfectă',
      description: 'Înțelege perfect accentul, slang-ul și contextul cultural românesc',
      icon: 'RO',
      details: ['Dialect și accent românesc', 'Expresii și idiomuri locale', 'Context cultural', 'Compliance local']
    },
    {
      title: 'Soluție Completă End-to-End',
      description: 'Tot ce ai nevoie într-o singură platformă, fără integrări complicate',
      icon: '●',
      details: ['Conversații + CRM', 'Analytics integrat', 'Billing automat', 'Support 24/7']
    },
    {
      title: 'Transparență Totală Prețuri',
      description: 'Fără costuri ascunse, fără surprize, fără upgrade-uri forțate',
      icon: '◆',
      details: ['Preț fix lunar', 'Toate funcțiile incluse', 'Fără limite artificiale', 'ROI garantat']
    }
  ]

  const comparisonMatrix = [
    {
      feature: 'Timp implementare',
      kallina: '3 minute',
      voiceflow: '2-4 săptămâni',
      elevenlabs: 'N/A',
      vapi: '1-2 săptămâni'
    },
    {
      feature: 'Suport română nativă',
      kallina: '✓ Perfect',
      voiceflow: '✗ Nu',
      elevenlabs: '△ Limitat',
      vapi: '✗ Nu'
    },
    {
      feature: 'Soluție completă',
      kallina: '✓ Da',
      voiceflow: '△ Parțial',
      elevenlabs: '✗ Nu',
      vapi: '△ Parțial'
    },
    {
      feature: 'Prețuri transparente',
      kallina: '✓ Da',
      voiceflow: '✗ Costuri ascunse',
      elevenlabs: '△ Per-usage',
      vapi: '✗ Variabile'
    },
    {
      feature: 'Suport 24/7',
      kallina: '✓ Inclus',
      voiceflow: '$ Extra',
      elevenlabs: '✗ Limitat',
      vapi: '$ Enterprise only'
    }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-6">
            De Ce Kallina.ai Bate Orice Competitor
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Analiza onestă despre ce face kallina.ai superioară față de toate alternativele.
            Spoiler: totul se rezumă la simplicitate și rezultate.
          </p>
        </div>

        {/* Competitor Selector */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 rounded-lg p-1 flex">
            {competitors.map((comp) => (
              <button
                key={comp.id}
                onClick={() => setActiveComparison(comp.id)}
                className={`px-6 py-3 rounded-md font-medium transition-all duration-200 flex items-center space-x-2 ${
                  activeComparison === comp.id
                    ? 'bg-black text-white'
                    : 'text-gray-600 hover:text-black'
                }`}
              >
                <span>{comp.logo}</span>
                <span>vs {comp.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Comparison Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Competitor Weaknesses */}
          <div className="bg-red-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-red-700 mb-6 flex items-center">
              <span className="mr-3">
                {competitors.find(c => c.id === activeComparison)?.logo}
              </span>
              {competitors.find(c => c.id === activeComparison)?.name} Limitări
            </h3>
            <div className="space-y-4">
              {competitors.find(c => c.id === activeComparison)?.weaknesses.map((weakness, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="text-red-500 mt-1">✗</div>
                  <div className="text-red-800">{weakness}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Kallina Advantages */}
          <div className="bg-green-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-green-700 mb-6 flex items-center">
              <span className="mr-3">→</span>
              Kallina.ai Avantaje
            </h3>
            <div className="space-y-4">
              {kallinaAdvantages.map((advantage, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="text-green-500 mt-1">✓</div>
                  <div>
                    <div className="font-semibold text-green-800">{advantage.title}</div>
                    <div className="text-green-700 text-sm">{advantage.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Detailed Advantages */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {kallinaAdvantages.map((advantage, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6">
              <div className="text-3xl mb-4">{advantage.icon}</div>
              <h4 className="text-lg font-bold text-black mb-3">{advantage.title}</h4>
              <p className="text-gray-600 text-sm mb-4">{advantage.description}</p>
              <ul className="space-y-2">
                {advantage.details.map((detail, i) => (
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
        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-black mb-8 text-center">
            Comparație Detaliată
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-4 font-semibold">Funcționalitate</th>
                  <th className="text-center py-4 px-4 font-semibold bg-black text-white rounded-t-lg">Kallina.ai</th>
                  <th className="text-center py-4 px-4 font-semibold">Voiceflow</th>
                  <th className="text-center py-4 px-4 font-semibold">ElevenLabs</th>
                  <th className="text-center py-4 px-4 font-semibold">VAPI</th>
                </tr>
              </thead>
              <tbody>
                {comparisonMatrix.map((row, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="py-4 px-4 font-medium text-gray-800">{row.feature}</td>
                    <td className="py-4 px-4 text-center bg-black text-white font-semibold">{row.kallina}</td>
                    <td className="py-4 px-4 text-center text-gray-600">{row.voiceflow}</td>
                    <td className="py-4 px-4 text-center text-gray-600">{row.elevenlabs}</td>
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
            Migrezi de la Alt Provider?
          </h3>
          <p className="text-xl text-gray-300 mb-8">
            Te ajutăm cu migrarea completă GRATUIT. Zero downtime, zero dureri de cap.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link
              href="/migration"
              className="bg-white text-black px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg"
            >
              Migrare Gratuită
            </Link>
            <Link
              href="/comparison"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-black transition-all duration-200 font-semibold text-lg"
            >
              Comparație Detaliată
            </Link>
          </div>
          <div className="text-sm text-gray-400">
            ★ 95% dintre cei care migrează nu se mai întorc la soluția veche
          </div>
        </div>
      </div>
    </section>
  )
}
