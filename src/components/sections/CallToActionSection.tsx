'use client'

import { useScrollAnimationReveal } from '@/hooks/useScrollAnimationReveal'
import { useState, useEffect, useRef } from 'react'

export function CallToActionSection() {
  const { ref, classes, isVisible } = useScrollAnimationReveal('up')
  const [isHovered, setIsHovered] = useState(false)
  const [isHeaderOverCTA, setIsHeaderOverCTA] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  
  // Header overlap detection (like Demo)
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        const headerHeight = 80 // Header height
        
        // Check if header is overlapping with CTA section
        const isOverlapping = rect.top <= headerHeight && rect.bottom >= headerHeight
        setIsHeaderOverCTA(isOverlapping)
      }
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll)
      handleScroll() // Check initial state
    }
    
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  // Dispatch event when overlap state changes (like Demo)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (isHeaderOverCTA) {
        window.dispatchEvent(new CustomEvent('headerOverDemo', { detail: { isOver: true } }))
      } else {
        window.dispatchEvent(new CustomEvent('headerOverDemo', { detail: { isOver: false } }))
      }
    }
  }, [isHeaderOverCTA])

  return (
    <section ref={sectionRef} className="section-padding relative overflow-hidden bg-black" style={{ border: 'none', borderTop: 'none' }}>
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-black"></div>
      <div className="morph-shape-1 absolute top-10 left-10 opacity-40"></div>
      <div className="morph-shape-3 absolute bottom-10 right-10 opacity-30"></div>
      
      <div className="container-width relative z-10" ref={ref}>
        <div 
          className={`glass-card rounded-3xl p-8 md:p-12 lg:p-20 text-center magnetic-hover relative overflow-hidden transition-all duration-1000 ${classes}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Animated background gradient overlay */}
          <div className={`absolute inset-0 bg-gradient-to-br from-brand-500/20 via-primary-500/10 to-accent-500/20 transition-opacity duration-700 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}></div>
          
          <div className="relative z-10">
            <h2 className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-brand-100 mb-4 md:mb-6 text-shimmer transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Integrează un AI conversațional care răspunde automat, învață din datele tale și oferă suport de top non-stop.
            </h2>
            <p className={`text-base sm:text-lg md:text-xl text-brand-300 mb-6 md:mb-8 max-w-3xl mx-auto transition-all duration-700 delay-200 px-4 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Join thousands of companies already using Kallina AI for crystal-clear, 
              secure, and ultra-fast voice communications.
            </p>
            
            <div className={`flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-6 md:mb-8 transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <a
                href="/getting-started"
                className="btn-primary btn-magnetic text-base md:text-lg px-6 md:px-8 py-3 md:py-4 animate-pulse-glow group w-full sm:w-auto"
              >
                <span className="flex items-center justify-center space-x-2">
                  <span>Start Free Trial</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </a>
              <a
                href="/support"
                className="btn-secondary magnetic-hover text-base md:text-lg px-6 md:px-8 py-3 md:py-4 group w-full sm:w-auto"
              >
                <span className="flex items-center justify-center space-x-2">
                  <span>Contact Sales</span>
                  <svg className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </span>
              </a>
            </div>
            
            {/* Feature highlights */}
            <div className={`grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8 transition-all duration-700 delay-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="flex items-center justify-center space-x-2 text-brand-300 text-sm md:text-base">
                <span className="text-green-400">✓</span>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-brand-300 text-sm md:text-base">
                <span className="text-green-400">✓</span>
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-brand-300 text-sm md:text-base">
                <span className="text-green-400">✓</span>
                <span>Cancel anytime</span>
              </div>
            </div>
            
            <p className={`text-xs md:text-sm text-brand-300 transition-all duration-700 delay-800 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <span className="text-shimmer">▲ Limited time:</span> Get 50% off your first 3 months
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
