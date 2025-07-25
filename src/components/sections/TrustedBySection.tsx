'use client'

import { useScrollAnimationReveal } from '@/hooks/useScrollAnimationReveal'
import { useEffect, useState } from 'react'
import AnimatedThreadsBackground from '../AnimatedThreadsBackground'
import { useLanguage } from '@/lib/i18n'

export function TrustedBySection() {
  const { t } = useLanguage()
  const { ref, classes, isVisible } = useScrollAnimationReveal('up')
  const [isMobile, setIsMobile] = useState(false)
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])
  
  const companies = [
    "OpenAI",
    "Google",
    "Microsoft",
    "Amazon",
    "Meta"
  ]

  const metrics = [
    { value: "1M+", label: t('trustedBy.developers') },
    { value: "10B+", label: t('trustedBy.charactersGenerated') },
    { value: "29", label: t('trustedBy.languagesSupported') },
    { value: "99.9%", label: t('trustedBy.uptime') }
  ]

  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-10">
      <AnimatedThreadsBackground
        className="absolute inset-0 z-0 pointer-events-none w-full h-full"
        color={[0, 0, 0]}
        amplitude={isMobile ? 0.8 : 1.5}
        distance={isMobile ? 0.5 : 0.5}
        enableMouseInteraction={false}
      />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
            {t('trustedBy.title')}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {t('trustedBy.subtitle')}
          </p>
        </div>

        {/* Company logos */}
        <div className={`flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16 mb-20 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>
          {companies.map((company, index) => (
            <div 
              key={company} 
              className="group transition-all duration-300 hover:scale-105"
              style={{
                transitionDelay: `${index * 100}ms`
              }}
            >
              <div className="px-6 py-3 text-gray-400 font-semibold text-lg group-hover:text-black transition-colors duration-300">
                {company}
              </div>
            </div>
          ))}
        </div>
        
        {/* Metrics */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 text-center transition-all duration-1000 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>
          {metrics.map((metric, index) => (
            <div 
              key={metric.label}
              className="group"
              style={{
                transitionDelay: `${index * 150}ms`
              }}
            >
              <div className="text-3xl md:text-4xl font-bold text-black mb-2 group-hover:scale-105 transition-transform duration-300">
                {metric.value}
              </div>
              <div className="text-gray-600 text-sm md:text-base">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className={`text-center mt-4 transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>
          <p className="text-gray-600 mb-6">
            {t('cta.title')}
          </p>
          <a
            href="/getting-started"
            className="inline-block bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200"
          >
            {t('common.getStarted')}
          </a>
        </div>
      </div>
    </section>
  )
}
