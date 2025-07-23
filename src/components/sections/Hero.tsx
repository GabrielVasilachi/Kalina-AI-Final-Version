'use client'

import { useEffect, useState } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { motion } from 'framer-motion'

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const badgeReveal = useScrollReveal('up', 0.1)
  const titleReveal = useScrollReveal('up', 0.2)
  const descReveal = useScrollReveal('up', 0.3)
  const buttonsReveal = useScrollReveal('up', 0.4)
  const featuresReveal = useScrollReveal('up', 0.5)

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
        ease: [0.2, 0.65, 0.3, 0.9]
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
    <section id="hero" className="relative py-10 pt-24 overflow-hidden">
      {/* Dynamic background elements */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
          transition: 'transform 0.3s ease-out'
        }}
      >
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-brand-300/30 text-black rounded-full morphing-shape animate-float"></div>
        <div className="absolute top-60 right-32 w-24 h-24 bg-gradient-to-br text-black to-brand-400/40 rounded-full morphing-shape animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-32 w-20 h-20 bg-gradient-to-br text-black to-brand-400/20 rounded-full morphing-shape animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container-width relative z-10">
        {/* Centered Content */}
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          <div className="space-y-6">
            <div className="space-y-6">
              
              
              <motion.h1 
                ref={titleReveal.ref}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-black leading-tight stagger-2"
                variants={containerVariants}
                initial="hidden"
                animate={titleReveal.isVisible ? "visible" : "hidden"}
              >
                <motion.span variants={childVariants}>Creează agent </motion.span>
                <motion.span variants={childVariants} className="text-shimmer animate-gradient">
                  AI
                </motion.span>
                <motion.span variants={childVariants}> în </motion.span>
                <motion.span variants={childVariants} className="text-shimmer animate-gradient" style={{ animationDelay: '0.5s' }}>
                  3 minute
                </motion.span>
              </motion.h1>
              
              <motion.p 
                ref={descReveal.ref}
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-brand-300 max-w-4xl mx-auto leading-relaxed stagger-3"
                variants={childVariants}
                initial="hidden"
                animate={descReveal.isVisible ? "visible" : "hidden"}
              >
                Transformă-ți afacerea cu primul angajat digital perfect instruit.
              </motion.p>
            </div>
            <motion.div 
              ref={buttonsReveal.ref}
              className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center stagger-4"
              variants={containerVariants}
              initial="hidden"
              animate={buttonsReveal.isVisible ? "visible" : "hidden"}
            >
              <motion.button variants={childVariants} className="btn-primary btn-magnetic flex items-center gap-2 group text-base md:text-lg px-6 md:px-8 py-3 md:py-4 animate-pulse-glow">
                Începe Trial Gratuit
                <span className="group-hover:translate-x-1 transition-transform duration-300"></span>
              </motion.button>
              <motion.div variants={childVariants}>
                <a
                  href="https://preview--kallina.lovable.app/auth"
                  className="btn-secondary btn-magnetic flex items-center gap-2 group text-base md:text-lg px-6 md:px-8 py-3 md:py-4"
                >
                  <span className="group-hover:scale-110 transition-transform duration-300"></span>
                  Sign In
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
