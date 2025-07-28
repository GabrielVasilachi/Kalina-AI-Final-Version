'use client'

import { useState } from 'react'
import Link from 'next/link'

export function TechnologyShowcaseSection() {
  const [activeTab, setActiveTab] = useState('voice')

  const technologyTabs = [
    {
      id: 'voice',
      name: 'Voice Tech',
      icon: '♪',
      title: 'Tehnologia Vocală Sub-100ms',
      subtitle: 'Sinteză și recunoaștere vocală mai rapidă decât gândirea umană'
    },
    {
      id: 'ai',
      name: 'Conversational AI',
      icon: '◉',
      title: 'AI Conversațional Avansat',
      subtitle: 'Înțelege contextul și răspunde ca un expert uman'
    },
    {
      id: 'integration',
      name: 'Integrări',
      icon: '⚹',
      title: 'Ecosistem de Integrări',
      subtitle: 'Se conectează cu orice sistem folosești deja'
    },
    {
      id: 'analytics',
      name: 'Analytics',
      icon: '□',
      title: 'Intelligence Business',
      subtitle: 'Insights și predicții pentru optimizarea continuă'
    }
  ]

  const technologyDetails = {
    voice: {
      features: [
        {
          title: 'Latență Sub-100ms',
          description: 'De la vorbire la răspuns mai rapid decât orice competitor',
          stats: ['~80ms timp răspuns', '99.9% uptime', '40+ limbi native'],
          icon: 'ϟ'
        },
        {
          title: 'Voice Cloning Perfect',
          description: 'Clonează vocea ta cu doar 3 minute de înregistrare',
          stats: ['96% acuratețe', '3 min training', 'Identitate vocală unică'],
          icon: '♪'
        },
        {
          title: 'Anulare Zgomot AI',
          description: 'Conversații clare chiar și în medii zgomotoase',
          stats: ['-40dB reducere zgomot', 'Filtrare adaptivă', 'Claritate cristalină'],
          icon: '◌'
        }
      ],
      demo: {
        title: 'Ascultă Diferența',
        description: 'Compară calitatea vocală kallina.ai cu concurența',
        samples: [
          { name: 'Kallina.ai', quality: '100%', file: 'kallina-sample.mp3' },
          { name: 'Competitor A', quality: '72%', file: 'comp-a-sample.mp3' },
          { name: 'Competitor B', quality: '68%', file: 'comp-b-sample.mp3' }
        ]
      }
    },
    ai: {
      features: [
        {
          title: 'Memorie Contextuală',
          description: 'Își amintește totul din toate conversațiile pe toate canalele',
          stats: ['Memorie infinită', 'Context cross-channel', 'Personalizare adaptivă'],
          icon: '◉'
        },
        {
          title: 'Întreruperi Naturale',
          description: 'Gestionează întreruperile ca în conversațiile umane reale',
          stats: ['Detecție instant', 'Context preservat', 'Flow natural'],
          icon: '◑'
        },
        {
          title: 'Empatie AI',
          description: 'Detectează și răspunde la emoțiile clientului în timp real',
          stats: ['8 emoții detectate', 'Răspuns empatic', 'De-escalare automată'],
          icon: '♡'
        }
      ],
      demo: {
        title: 'Test de Inteligență',
        description: 'Pune întrebări complexe și vezi răspunsurile inteligente',
        samples: [
          { question: 'Cum gestionezi o reclamație?', complexity: 'Înaltă' },
          { question: 'Ce faci când clientul e supărat?', complexity: 'Foarte Înaltă' },
          { question: 'Explică-mi diferențele între planuri', complexity: 'Medie' }
        ]
      }
    },
    integration: {
      features: [
        {
          title: 'CRM Native',
          description: 'Sincronizare perfectă cu toate CRM-urile majore',
          stats: ['50+ CRM-uri', 'Sync timp real', 'Zero config'],
          icon: '◊'
        },
        {
          title: 'Calendar Magic',
          description: 'Programări inteligente cu evitarea conflictelor',
          stats: ['Calendar orchestration', 'Conflict detection', 'Auto-rescheduling'],
          icon: '◈'
        },
        {
          title: 'Webhooks Robuste',
          description: 'Evenimente în timp real pentru orice sistem extern',
          stats: ['Real-time events', 'Retry logic', '99.9% delivery'],
          icon: '◉'
        }
      ],
      demo: {
        title: 'Integrări Disponibile',
        description: 'Vezi toate sistemele cu care se conectează',
        integrations: [
          { name: 'HubSpot', category: 'CRM', status: 'Native' },
          { name: 'Salesforce', category: 'CRM', status: 'Native' },
          { name: 'Google Calendar', category: 'Calendar', status: 'Native' },
          { name: 'Zoom', category: 'Video', status: 'Native' },
          { name: 'WhatsApp', category: 'Messaging', status: 'Native' },
          { name: 'Facebook', category: 'Social', status: 'Native' }
        ]
      }
    },
    analytics: {
      features: [
        {
          title: 'Real-time Monitoring',
          description: 'Dashboard live cu toate metricile importante',
          stats: ['Live metrics', 'Custom KPIs', 'Alertă automată'],
          icon: '◎'
        },
        {
          title: 'Predictive Analytics',
          description: 'Predicții AI pentru optimizarea business-ului',
          stats: ['90% acuratețe', 'Trend forecasting', 'Opportunity alerts'],
          icon: '◐'
        },
        {
          title: 'ROI Tracking',
          description: 'Măsoară exact impactul și economiile generate',
          stats: ['ROI în timp real', 'Cost per lead', 'Efficiency gains'],
          icon: '$'
        }
      ],
      demo: {
        title: 'Dashboard Preview',
        description: 'Vezi cum arată analytics-ul în acțiune',
        metrics: [
          { name: 'Conversii Lunare', value: '342', change: '+23%', trend: 'up' },
          { name: 'Timp Răspuns', value: '87ms', change: '-12ms', trend: 'down' },
          { name: 'Satisfacție Clienți', value: '4.8/5', change: '+0.3', trend: 'up' },
          { name: 'Cost per Lead', value: '12 lei', change: '-8 lei', trend: 'down' }
        ]
      }
    }
  }

  return (
    <section className="py-24 bg-black text-white rounded-3xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Tehnologia Cea Mai Avansată Din Industrie
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Nu e doar un alt chatbot. E o revoluție tehnologică care redefinește 
            comunicarea business cu AI de ultimă generație.
          </p>
        </div>

        {/* Technology Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {technologyTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-4 rounded-xl font-medium transition-all duration-200 flex items-center space-x-3 border border-white/20 backdrop-blur-lg ${
                activeTab === tab.id
                  ? 'bg-white/60 text-black'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              <span className="text-xl">{tab.icon}</span>
              <span>{tab.name}</span>
            </button>
          ))}
        </div>

        {/* Active Tab Content */}
        <div className="space-y-12">
          {/* Tab Header */}
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">
              {technologyTabs.find(t => t.id === activeTab)?.title}
            </h3>
            <p className="text-xl text-gray-300">
              {technologyTabs.find(t => t.id === activeTab)?.subtitle}
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {(technologyDetails as any)[activeTab].features.map((feature: any, index: number) => (
              <div key={index} className="rounded-xl p-6 border border-white/20 backdrop-blur-lg bg-white/10">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.stats.map((stat: string, i: number) => (
                    <li key={i} className="text-sm text-gray-400 flex items-center">
                      <span className="w-1 h-1 bg-white rounded-full mr-2"></span>
                      {stat}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Demo Section */}
          <div className="bg-gray-900 rounded-2xl p-8 border border-white/20 backdrop-blur-lg bg-white/10">
            <h4 className="text-2xl font-bold mb-4">
              {(technologyDetails as any)[activeTab].demo.title}
            </h4>
            <p className="text-gray-300 mb-8">
              {(technologyDetails as any)[activeTab].demo.description}
            </p>

            {/* Voice Demo */}
            {activeTab === 'voice' && (
              <div className="grid md:grid-cols-3 gap-6">
                {technologyDetails.voice.demo.samples.map((sample, index) => (
                  <div key={index} className="bg-black rounded-lg p-6 text-center border border-white/20 backdrop-blur-lg bg-white/10">
                    <h5 className="font-semibold mb-2">{sample.name}</h5>
                    <div className="text-2xl font-bold text-green-400 mb-4">
                      {sample.quality}
                    </div>
                    <button className="bg-white/60 text-black px-4 py-2 rounded-lg border border-white/20 backdrop-blur-lg hover:bg-white transition-colors text-sm">
                      ▶ Ascultă Sample
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* AI Demo */}
            {activeTab === 'ai' && (
              <div className="space-y-4">
                {technologyDetails.ai.demo.samples.map((sample, index) => (
                  <div key={index} className="bg-black rounded-lg p-4 flex justify-between items-center border border-white/20 backdrop-blur-lg bg-white/10">
                    <div className="flex-1">
                      <span className="text-gray-300">"{sample.question}"</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className={`px-3 py-1 rounded-full text-xs ${
                        sample.complexity === 'Foarte Înaltă' ? 'bg-red-900 text-red-300' :
                        sample.complexity === 'Înaltă' ? 'bg-orange-900 text-orange-300' :
                        'bg-yellow-900 text-yellow-300'
                      }`}>
                        {sample.complexity}
                      </span>
                      <button className="bg-white/60 text-black px-4 py-2 rounded-lg border border-white/20 backdrop-blur-lg hover:bg-white transition-colors text-sm">
                        Testează
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Integration Demo */}
            {activeTab === 'integration' && (
              <div className="grid md:grid-cols-3 gap-4">
                {technologyDetails.integration.demo.integrations.map((integration, index) => (
                  <div key={index} className="bg-black rounded-lg p-4 flex items-center justify-between border border-white/20 backdrop-blur-lg bg-white/10">
                    <div>
                      <div className="font-semibold">{integration.name}</div>
                      <div className="text-sm text-gray-400">{integration.category}</div>
                    </div>
                    <span className="bg-green-900/80 text-green-300 px-2 py-1 rounded-full text-xs border border-white/20 backdrop-blur-lg">
                      {integration.status}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Analytics Demo */}
            {activeTab === 'analytics' && (
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {technologyDetails.analytics.demo.metrics.map((metric, index) => (
                  <div key={index} className="bg-black rounded-lg p-6 text-center border border-white/20 backdrop-blur-lg bg-white/10">
                    <div className="text-sm text-gray-400 mb-2">{metric.name}</div>
                    <div className="text-2xl font-bold mb-2">{metric.value}</div>
                    <div className={`text-sm flex items-center justify-center ${
                      metric.trend === 'up' ? 'text-green-400' : 'text-blue-400'
                    }`}>
                      <span className="mr-1">
                        {metric.trend === 'up' ? '↑' : '↓'}
                      </span>
                      {metric.change}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold mb-4">
            Gata să Experimentezi Tehnologia Viitorului?
          </h3>
          <p className="text-gray-300 mb-8">
            Testează toate funcționalitățile avansate în demo-ul nostru interactiv
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/demo"
              className="bg-white/60 text-black px-8 py-4 rounded-lg border border-white/20 backdrop-blur-lg hover:bg-white transition-colors font-semibold text-lg"
            >
              Demo Interactiv →
            </Link>
            <Link
              href="/technical-specs"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-black transition-all duration-200 font-semibold text-lg border-white/20 backdrop-blur-lg bg-white/10"
            >
              Specificații Tehnice
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
