'use client'

import { useEffect, useState } from 'react'
import { useScrollAnimationReveal } from '@/hooks/useScrollAnimationReveal'
import { motion } from 'framer-motion'
import { easeInOut } from 'framer-motion'
import { useLanguage } from '@/lib/i18n'

export function HeroSection() {
  const { t } = useLanguage()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const badgeReveal = useScrollAnimationReveal('up', 0.1)
  const titleReveal = useScrollAnimationReveal('up', 0.2)
  const descReveal = useScrollAnimationReveal('up', 0.3)
  const buttonsReveal = useScrollAnimationReveal('up', 0.4)
  const featuresReveal = useScrollAnimationReveal('up', 0.5)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeInOut
      }
    }
  }

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (typeof window !== 'undefined') {
        setMousePosition({
          x: e.clientX / window.innerWidth - 0.5,
          y: e.clientY / window.innerHeight - 0.5,
        })
      }
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('mousemove', handleMouseMove)
    }
    
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('mousemove', handleMouseMove)
      }
    }
  }, [])

  return (
    <section id="hero" className="relative py-24 pt-40 overflow-hidden bg-white min-h-[80vh]">
      {/* Dynamic background elements */}
      <div 
        className="absolute inset-0 opacity-60 hidden sm:block"
        style={{
          background: 'white',
          transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
          transition: 'transform 0.3s ease-out'
        }}
      >
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-brand-300/70 to-brand-400/60 text-black rounded-full morphing-shape animate-float"></div>
        <div className="absolute top-60 right-32 w-32 h-32 bg-gradient-to-br from-brand-400/80 to-brand-500/70 text-black rounded-full morphing-shape animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-10 left-32 w-28 h-28 bg-gradient-to-br from-brand-400/60 to-brand-300/50 text-black rounded-full morphing-shape animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container-width relative z-10">
        {/* Centered Content */}
        <div className="flex flex-col items-center text-center max-w-7xl mx-auto">
          <div className="space-y-6">
            <div className="space-y-6">
              
              
              <motion.h1 
                ref={titleReveal.ref}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-black leading-tight stagger-2"
                variants={containerVariants}
                initial="hidden"
                animate={titleReveal.isVisible ? "visible" : "hidden"}
              >
                <motion.span variants={childVariants}>{t('hero.title')}</motion.span>
              </motion.h1>
              
              <motion.p 
                ref={descReveal.ref}
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-brand-300 max-w-4xl mx-auto leading-relaxed stagger-3"
                variants={childVariants}
                initial="hidden"
                animate={descReveal.isVisible ? "visible" : "hidden"}
              >
                {t('hero.subtitle')}
              </motion.p>
            </div>
            <motion.div 
              ref={buttonsReveal.ref}
              className="flex flex-row gap-2 md:gap-6 justify-center stagger-4"
              variants={containerVariants}
              initial="hidden"
              animate={buttonsReveal.isVisible ? "visible" : "hidden"}
            >
              <motion.div variants={childVariants}>
                <a
                  href="/getting-started"
                  className="btn-primary btn-magnetic flex items-center justify-center gap-1 group text-[10px] md:text-lg px-1.5 md:px-8 py-1 md:py-4 animate-pulse-glow w-24 h-7 sm:w-auto sm:h-auto whitespace-nowrap border border-gray-300 rounded-lg mx-auto"
                >
                  {t('hero.ctaButton')}
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </motion.div>
              <motion.div variants={childVariants}>
                <a
                  href="https://preview--kallina.lovable.app/auth"
                  className="btn-secondary btn-magnetic flex items-center justify-center gap-1 group text-[10px] md:text-lg px-1.5 md:px-8 py-1 md:py-4 w-24 h-7 sm:w-auto sm:h-auto whitespace-nowrap border border-gray-300 rounded-lg mx-auto"
                >
                  <svg className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  {t('nav.signIn')}
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
