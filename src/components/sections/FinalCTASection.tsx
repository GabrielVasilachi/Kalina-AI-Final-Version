
'use client'
import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/lib/i18n'

export function FinalCTASection() {
  const { translations } = useLanguage()
  // --- HEADER COLOR CHANGE LOGIC START ---
  // Ref for the section
  const sectionRef = useRef<HTMLDivElement>(null)
  // State to track if header is overlapping this section
  const [isHeaderOverFAQ, setIsHeaderOverFAQ] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const headerHeight = 80 // Header height
      // Check if header is overlapping with this section
      const isOverlapping = rect.top <= headerHeight && rect.bottom >= headerHeight
      setIsHeaderOverFAQ(isOverlapping)
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Dispatch custom event to trigger header color change
  useEffect(() => {
    if (isHeaderOverFAQ) {
      window.dispatchEvent(new CustomEvent('headerOverDemo', { detail: { isOver: true } }))
    } else {
      window.dispatchEvent(new CustomEvent('headerOverDemo', { detail: { isOver: false } }))
    }
  }, [isHeaderOverFAQ])
  // --- HEADER COLOR CHANGE LOGIC END ---

  const benefits = translations?.finalCta?.benefits || [
    {
      icon: 'ϟ',
      title: 'Setup în 3 Minute',
      description: 'De la înregistrare la primul agent funcțional'
    },
    {
      icon: '◎',
      title: 'ROI în Prima Lună',
      description: 'Investiția se plătește singură rapid'
    },
    {
      icon: '◆',
      title: 'Română Perfectă',
      description: 'Înțelege perfect clientii români'
    },
    {
      icon: '▪',
      title: 'Fără Risc',
      description: 'Anulează oricând, fără penalități'
    }
  ]

  const urgencyFactors = translations?.finalCta?.urgencyFactors || [
    'Concurența ta poate implementa acum',
    'Fiecare zi înseamnă clienți pierduți',
    'Prețurile cresc de la 1 Februarie',
    'Bonusul de early adopter expiră curând'
  ]

  return (
    <section ref={sectionRef} className="py-24 bg-black text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-black"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main CTA */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 leading-tight">
            {translations?.finalCta?.title?.split(' ')[0]} {translations?.finalCta?.title?.split(' ')[1]} {translations?.finalCta?.title?.split(' ')[2]}
            <br />
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              {translations?.finalCta?.title?.split(' ').slice(3).join(' ') || "Avantajul Competitiv"}
            </span>
          </h2>
          <p className="text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            {translations?.finalCta?.subtitle || "În următorii 3 ani, fiecare business va avea agenți AI. Întrebarea e: vei fi pionier sau vei alerga din urmă?"}
          </p>
          
          {/* Urgency Timer */}
          <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6 max-w-2xl mx-auto mb-8 hover:bg-red-900/30 hover:border-red-400/50 hover:shadow-xl hover:shadow-red-500/20 hover:scale-105 transition-all duration-300">
            <div className="text-red-400 font-semibold mb-2">⏱︎ {translations?.finalCta?.urgencyTitle || "OFERTA LIMITATĂ"}</div>
            <div className="text-white text-lg">
              {translations?.finalCta?.urgencyDescription || "Primul agent AI gratuit pentru primii 100 de clienți din Ianuarie"}
            </div>
            <div className="text-red-300 text-sm mt-2">
              {translations?.finalCta?.urgencyRemaining || "Doar 23 de locuri rămase"}
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/5 rounded-xl p-6 text-center hover:bg-white/10 hover:shadow-xl hover:shadow-white/20 hover:scale-105 hover:border hover:border-white/20 transition-all duration-300 group">
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">{benefit.icon}</div>
                <h3 className="font-bold mb-2 group-hover:text-gray-200 transition-colors duration-300">{benefit.title}</h3>
                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* Main CTA Buttons */}
          <div className="flex flex-col lg:flex-row gap-6 justify-center items-center mb-12">
            <Link
              href="/getting-started"
              className="bg-white text-black px-12 py-6 rounded-xl hover:bg-gray-100 hover:shadow-2xl hover:shadow-white/30 transition-all duration-300 font-bold text-xl shadow-2xl transform hover:scale-110 min-w-[280px] group"
            >
              <span className="group-hover:animate-pulse">→</span> {translations?.finalCta?.ctaButton || "Începe GRATUIT Acum"}
            </Link>
            <div className="text-gray-400 text-lg lg:mx-6 hover:text-gray-300 transition-colors duration-300">sau</div>
            <Link
              href="/demo"
              className="border-2 border-white text-white px-12 py-6 rounded-xl hover:bg-white hover:text-black hover:shadow-2xl hover:shadow-white/30 transition-all duration-300 font-bold text-xl min-w-[280px] hover:scale-110"
            >
              ◉ {translations?.finalCta?.secondaryButton || "Demo Live în 30 Sec"}
            </Link>
          </div>

          {/* Social Proof */}
          <div className="text-center mb-12">
            <div className="text-gray-400 mb-4">{translations?.finalCta?.socialProof || "Alătură-te la 655+ antreprenori care au făcut deja schimbarea"}</div>
            <div className="flex justify-center items-center space-x-8 text-2xl">
              <span>★★★★★</span>
              <span className="text-gray-400">|</span>
              <span className="text-lg text-gray-300">{translations?.finalCta?.rating || "4.8/5 din 1,200+ review-uri"}</span>
            </div>
          </div>
        </div>

        {/* Urgency Section */}
        <div className="bg-gradient-to-r from-red-900/20 to-orange-900/20 border border-red-500/30 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold mb-6 text-center text-red-400">
            {translations?.finalCta?.urgencyHeading || "DE CE TREBUIE SĂ ACȚIONEZI ACUM"}
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {urgencyFactors.map((factor, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="text-red-400 text-xl mt-1">⚠</div>
                <div className="text-gray-200">{factor}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Risk Reversal */}
        <div className="bg-green-900/20 border border-green-500/30 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold mb-6 text-center text-green-400">
            {translations?.finalCta?.guaranteeTitle || "GARANȚIE 100% RISK-FREE"}
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            {translations?.finalCta?.guarantees?.map((guarantee, index) => (
              <div key={index}>
                <div className="text-3xl mb-3">{guarantee.icon}</div>
                <h4 className="font-bold mb-2">{guarantee.title}</h4>
                <p className="text-gray-300 text-sm">
                  {guarantee.description}
                </p>
              </div>
            )) || [
              <div key="roi">
                <div className="text-3xl mb-3"></div>
                <h4 className="font-bold mb-2">Garanție ROI</h4>
                <p className="text-gray-300 text-sm">
                  Dacă nu economisești măcar 2x costul abonamentului în prima lună, îți returnăm banii
                </p>
              </div>,
              <div key="setup">
                <div className="text-3xl mb-3"></div>
                <h4 className="font-bold mb-2">Setup Garantat</h4>
                <p className="text-gray-300 text-sm">
                  Dacă nu reușești să-ți configurezi agentul în 3 minute, îl configurăm noi GRATUIT
                </p>
              </div>,
              <div key="cancel">
                <div className="text-3xl mb-3"></div>
                <h4 className="font-bold mb-2">Anulare Instant</h4>
                <p className="text-gray-300 text-sm">
                  Poți anula oricând cu un click. Fără întrebări, fără penalități, fără contracte
                </p>
              </div>
            ]}
          </div>
        </div>

        {/* Final Push */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-4">
            {translations?.finalCta?.finalTitle || "Următorii 30 de Secondi Pot Să-ți Schimbe Business-ul"}
          </h3>
          <p className="text-xl text-gray-300 mb-8">
            {translations?.finalCta?.finalSubtitle || "Un click. O decizie. O transformare completă."}
          </p>
          
          <Link
            href="/getting-started"
            className="inline-flex items-center bg-gradient-to-r from-white to-gray-200 text-black px-16 py-8 rounded-2xl hover:from-gray-100 hover:to-gray-300 transition-all duration-200 font-bold text-2xl shadow-2xl transform hover:scale-105"
          >
            <span className="mr-4">→</span>
            {translations?.finalCta?.finalCtaButton || "DA, VREAU AVANTAJUL COMPETITIV"}
            <span className="ml-4">→</span>
          </Link>
          
          <div className="text-gray-500 text-sm mt-6">
            ▪ {translations?.finalCta?.disclaimer || "Fără card de credit necesar pentru testare • Activare instantanee"}
          </div>
        </div>
      </div>
    </section>
  )
}
