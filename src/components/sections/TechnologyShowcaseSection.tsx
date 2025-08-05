'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/lib/i18n'

export function TechnologyShowcaseSection() {
  const { t } = useLanguage()
  const [activeTab, setActiveTab] = useState('voice')
  // Header color change logic
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ref = sectionRef.current;
    if (!ref) return;
    let lastState = false;
    // IntersectionObserver for initial detection
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        const isAtTop = entry.isIntersecting && entry.boundingClientRect.top <= 0;
        if (isAtTop && !lastState) {
          window.dispatchEvent(new CustomEvent('headerOverDemo', { detail: { isOver: true } }));
          lastState = true;
        } else if ((!isAtTop) && lastState) {
          window.dispatchEvent(new CustomEvent('headerOverDemo', { detail: { isOver: false } }));
          lastState = false;
        }
      },
      { threshold: 0, rootMargin: '0px 0px 0px 0px' }
    );
    observer.observe(ref);

    // Scroll fallback for robust detection
    const handleScroll = () => {
      if (!ref) return;
      const rect = ref.getBoundingClientRect();
      const isAtTop = rect.top <= 0 && rect.bottom > 0;
      if (isAtTop && !lastState) {
        window.dispatchEvent(new CustomEvent('headerOverDemo', { detail: { isOver: true } }));
        lastState = true;
      } else if (!isAtTop && lastState) {
        window.dispatchEvent(new CustomEvent('headerOverDemo', { detail: { isOver: false } }));
        lastState = false;
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      window.dispatchEvent(new CustomEvent('headerOverDemo', { detail: { isOver: false } }));
    };
  }, []);

  const technologyTabs = [
    {
      id: 'voice',
      name: t('technology.tabs.voice'),
      icon: '♪',
      title: t('technology.voiceTitle'),
      subtitle: t('technology.voiceSubtitle')
    },
    {
      id: 'ai',
      name: t('technology.tabs.ai'),
      icon: '◉',
      title: t('technology.aiTitle'),
      subtitle: t('technology.aiSubtitle')
    },
    {
      id: 'integration',
      name: t('technology.tabs.integration'),
      icon: '⚹',
      title: t('technology.integrationTitle'),
      subtitle: t('technology.integrationSubtitle')
    },
    {
      id: 'analytics',
      name: t('technology.tabs.analytics'),
      icon: '□',
      title: t('technology.analyticsTitle'),
      subtitle: t('technology.analyticsSubtitle')
    }
  ]

  const technologyDetails = {
    voice: {
      features: [
        {
          title: t('technology.latencyTitle'),
          description: t('technology.latencyDesc'),
          stats: t('technology.latencyStats'),
          icon: 'ϟ'
        },
        {
          title: t('technology.voiceCloneTitle'),
          description: t('technology.voiceCloneDesc'),
          stats: t('technology.voiceCloneStats'),
          icon: '♪'
        },
        {
          title: t('technology.noiseTitle'),
          description: t('technology.noiseDesc'),
          stats: t('technology.noiseStats'),
          icon: '◌'
        }
      ],
      demo: {
        title: t('technology.voiceDemoTitle'),
        description: t('technology.voiceDemoDesc'),
        samples: [
          { name: t('technology.sampleNames')[0], quality: '100%', file: 'kallina-sample.mp3' },
          { name: t('technology.sampleNames')[1], quality: '72%', file: 'comp-a-sample.mp3' },
          { name: t('technology.sampleNames')[2], quality: '68%', file: 'comp-b-sample.mp3' }
        ]
      }
    },
    ai: {
      features: [
        {
          title: t('technology.memoryTitle'),
          description: t('technology.memoryDesc'),
          stats: t('technology.memoryStats'),
          icon: '◉'
        },
        {
          title: t('technology.interruptTitle'),
          description: t('technology.interruptDesc'),
          stats: t('technology.interruptStats'),
          icon: '◑'
        },
        {
          title: t('technology.empathyTitle'),
          description: t('technology.empathyDesc'),
          stats: t('technology.empathyStats'),
          icon: '♡'
        }
      ],
      demo: {
        title: t('technology.aiDemoTitle'),
        description: t('technology.aiDemoDesc'),
        samples: [
          { question: t('technology.questions')[0], complexity: t('technology.complexities')[1] },
          { question: t('technology.questions')[1], complexity: t('technology.complexities')[2] },
          { question: t('technology.questions')[2], complexity: t('technology.complexities')[0] }
        ]
      }
    },
    integration: {
      features: [
        {
          title: t('technology.crmTitle'),
          description: t('technology.crmDesc'),
          stats: t('technology.crmStats'),
          icon: '◊'
        },
        {
          title: t('technology.calendarTitle'),
          description: t('technology.calendarDesc'),
          stats: t('technology.calendarStats'),
          icon: '◈'
        },
        {
          title: t('technology.webhooksTitle'),
          description: t('technology.webhooksDesc'),
          stats: t('technology.webhooksStats'),
          icon: '◉'
        }
      ],
      demo: {
        title: t('technology.integrationDemoTitle'),
        description: t('technology.integrationDemoDesc'),
        integrations: [
          { name: t('technology.integrationNames')[0], category: t('technology.integrationCategories')[0], status: t('technology.integrationStatus') },
          { name: t('technology.integrationNames')[1], category: t('technology.integrationCategories')[0], status: t('technology.integrationStatus') },
          { name: t('technology.integrationNames')[2], category: t('technology.integrationCategories')[1], status: t('technology.integrationStatus') },
          { name: t('technology.integrationNames')[3], category: t('technology.integrationCategories')[2], status: t('technology.integrationStatus') },
          { name: t('technology.integrationNames')[4], category: t('technology.integrationCategories')[3], status: t('technology.integrationStatus') },
          { name: t('technology.integrationNames')[5], category: t('technology.integrationCategories')[4], status: t('technology.integrationStatus') }
        ]
      }
    },
    analytics: {
      features: [
        {
          title: t('technology.monitoringTitle'),
          description: t('technology.monitoringDesc'),
          stats: t('technology.monitoringStats'),
          icon: '◎'
        },
        {
          title: t('technology.predictiveTitle'),
          description: t('technology.predictiveDesc'),
          stats: t('technology.predictiveStats'),
          icon: '◐'
        },
        {
          title: t('technology.roiTrackingTitle'),
          description: t('technology.roiTrackingDesc'),
          stats: t('technology.roiTrackingStats'),
          icon: '$'
        }
      ],
      demo: {
        title: t('technology.analyticsDemoTitle'),
        description: t('technology.analyticsDemoDesc'),
        metrics: [
          { name: t('technology.analyticsMetrics.conversions'), value: '342', change: '+23%', trend: 'up' },
          { name: t('technology.analyticsMetrics.responseTime'), value: '87ms', change: '-12ms', trend: 'down' },
          { name: t('technology.analyticsMetrics.satisfaction'), value: '4.8/5', change: '+0.3', trend: 'up' },
          { name: t('technology.analyticsMetrics.costPerLead'), value: '12 lei', change: '-8 lei', trend: 'down' }
        ]
      }
    }
  }

  return (
    <section ref={sectionRef} className="py-24 bg-black text-white rounded-b-3xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            {t('technology.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('technology.subtitle')}
          </p>
        </div>

        {/* Technology Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {technologyTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`group relative overflow-hidden px-6 py-4 rounded-xl font-medium transition-all duration-700 flex items-center space-x-3 border border-white/20 backdrop-blur-lg ${
                activeTab === tab.id
                  ? 'bg-white text-black'
                  : 'bg-gradient-to-br from-gray-900/80 to-gray-800/40 text-gray-300 hover:bg-white/20'
              }`}
            >
              {/* Light sweep effect */}
              <span className="absolute inset-0 pointer-events-none overflow-hidden rounded-xl">
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </span>
              <span className="text-xl relative z-10">{tab.icon}</span>
              <span className="relative z-10">{tab.name}</span>
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
              <div key={index} className="group relative bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-xl border border-gray-700/50 rounded-xl p-6 hover:border-purple-500/30 transition-all duration-700">
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 via-pink-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rounded-xl pointer-events-none"></div>
                <div className="relative z-10">
                  <div className="text-3xl mb-4">{feature.icon}</div>
                  <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.stats && Array.isArray(feature.stats) && feature.stats.length > 0 && feature.stats.map((stat: string, i: number) => (
                      <li key={i} className="text-sm text-gray-400 flex items-center">
                        <span className="w-1 h-1 bg-white rounded-full mr-2"></span>
                        {stat}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Demo Section */}
          <div className="group relative bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 hover:border-emerald-500/30 transition-all duration-700">
            {/* Hover gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/5 via-teal-600/5 to-cyan-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rounded-2xl pointer-events-none"></div>
            <div className="relative z-10">
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
                  <div key={index} className="group relative bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-xl border border-gray-700/50 rounded-lg p-6 text-center hover:border-green-500/30 transition-all duration-700">
                    {/* Hover gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-green-600/5 via-yellow-600/5 to-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rounded-lg pointer-events-none"></div>
                    <div className="relative z-10">
                      <h5 className="font-semibold mb-2">{sample.name}</h5>
                      <div className="text-2xl font-bold text-green-400 mb-4">
                        {sample.quality}
                      </div>
                      <button className="group relative overflow-hidden bg-white/60 text-black px-4 py-2 rounded-lg border border-white/20 backdrop-blur-lg hover:bg-white transition-colors text-sm">
                        {/* Light sweep effect */}
                        <span className="absolute inset-0 pointer-events-none overflow-hidden rounded-lg">
                          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                        </span>
                        ▶ {t('technology.listenSample')}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* AI Demo */}
            {activeTab === 'ai' && (
              <div className="space-y-4">
                {technologyDetails.ai.demo.samples.map((sample, index) => (
                  <div key={index} className="group relative bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-xl border border-gray-700/50 rounded-lg p-4 flex justify-between items-center hover:border-blue-500/30 transition-all duration-700">
                    {/* Hover gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-indigo-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rounded-lg pointer-events-none"></div>
                    <div className="relative z-10 flex-1">
                      <span className="text-gray-300">"{sample.question}"</span>
                    </div>
                    <div className="relative z-10 flex items-center space-x-4">
                      <span className={`px-3 py-1 rounded-full text-xs ${
                        sample.complexity === 'Foarte Înaltă' ? 'bg-red-900 text-red-300' :
                        sample.complexity === 'Înaltă' ? 'bg-orange-900 text-orange-300' :
                        'bg-yellow-900 text-yellow-300'
                      }`}>
                        {sample.complexity}
                      </span>
                      <button className="group relative overflow-hidden bg-white/60 text-black px-4 py-2 rounded-lg border border-white/20 backdrop-blur-lg hover:bg-white transition-colors text-sm">
                        {/* Light sweep effect */}
                        <span className="absolute inset-0 pointer-events-none overflow-hidden rounded-lg">
                          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                        </span>
                        {t('technology.testNow')}
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
                  <div key={index} className="group relative bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-xl border border-gray-700/50 rounded-lg p-4 flex items-center justify-between hover:border-orange-500/30 transition-all duration-700">
                    {/* Hover gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-600/5 via-red-600/5 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rounded-lg pointer-events-none"></div>
                    <div className="relative z-10">
                      <div className="font-semibold">{integration.name}</div>
                      <div className="text-sm text-gray-400">{integration.category}</div>
                    </div>
                    <span className="relative z-10 bg-green-900/80 text-green-300 px-2 py-1 rounded-full text-xs border border-white/20 backdrop-blur-lg">
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
                  <div key={index} className="group relative bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-xl border border-gray-700/50 rounded-lg p-6 text-center hover:border-cyan-500/30 transition-all duration-700">
                    {/* Hover gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/5 via-teal-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rounded-lg pointer-events-none"></div>
                    <div className="relative z-10">
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
                  </div>
                ))}
              </div>
            )}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold mb-4">
            {t('technology.ctaTitle')}
          </h3>
          <p className="text-gray-300 mb-8">
            {t('technology.ctaSubtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/demo"
              className="group relative overflow-hidden bg-white/60 text-black px-8 py-4 rounded-lg border border-white/20 backdrop-blur-lg hover:bg-white transition-colors font-semibold text-lg"
            >
              {/* Light sweep effect */}
              <span className="absolute inset-0 pointer-events-none overflow-hidden rounded-lg">
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </span>
              <span className="relative z-10">{t('technology.interactiveDemo')}</span>
            </Link>
            <Link
              href="/technical-specs"
              className="group relative overflow-hidden border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-black transition-all duration-200 font-semibold text-lg border-white/20 backdrop-blur-lg bg-white/10"
            >
              {/* Light sweep effect */}
              <span className="absolute inset-0 pointer-events-none overflow-hidden rounded-lg">
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </span>
              <span className="relative z-10">{t('technology.technicalSpecs')}</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
