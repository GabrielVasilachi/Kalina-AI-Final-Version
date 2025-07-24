"use client"

import { useScrollAnimationReveal } from '@/hooks/useScrollAnimationReveal'
import { useRef, useEffect, useState, useMemo } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useLanguage } from '../../lib/i18n'

export function MainFeaturesSection() {
  // Removed scroll reveal hooks
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const [centeredIndex, setCenteredIndex] = useState(0)

  const { t, translations } = useLanguage()

  // Dynamic features with fallback - memoized to prevent useEffect dependency issues
  const dynamicFeatures = useMemo(() => 
    translations?.mainFeaturesDynamic || [
      'Revolutionize Customer Communication with Advanced AI Technology',
      'Global Presence, Local Services',
      'Enterprise-Level Security for Your Communications',
      'Artificial Intelligence That Understands and Responds Perfectly'
    ], [translations?.mainFeaturesDynamic])
    
  // Static features with fallback - memoized to prevent dependency issues
  const staticFeatures = useMemo(() => 
    translations?.mainFeaturesStatic || [
      'Natural language processing with 99.2% accuracy',
      'Multi-language support for global reach',
      'Real-time analytics and insights',
      'Seamless integration with existing systems'
    ], [translations?.mainFeaturesStatic])

  // Feature cards from mainFeatures translation object with fallback - memoized
  const mainFeatures = useMemo(() => 
    translations?.mainFeatures || {
      title: 'Core Features',
      subtitle: 'Intelligent Voice Automation',
      feature1Title: 'Smart Conversations',
      feature1Desc: 'AI-powered conversations that understand context and intent',
      feature2Title: 'Real-time Processing',
      feature2Desc: 'Instant responses with minimal latency',
      feature3Title: 'Advanced Analytics',
      feature3Desc: 'Comprehensive insights into customer interactions',
      feature4Title: 'Seamless Integration',
      feature4Desc: 'Easy integration with existing business systems'
    }, [translations?.mainFeatures])
  const features = [
    {
      title: mainFeatures.feature1Title,
      description: mainFeatures.feature1Desc
    },
    {
      title: mainFeatures.feature2Title,
      description: mainFeatures.feature2Desc
    },
    {
      title: mainFeatures.feature3Title,
      description: mainFeatures.feature3Desc
    },
    {
      title: mainFeatures.feature4Title,
      description: mainFeatures.feature4Desc
    }
  ]

  // Auto-cycle through dynamic features
  useEffect(() => {
    if (dynamicFeatures && dynamicFeatures.length > 0) {
      const interval = setInterval(() => {
        setCenteredIndex((prev) => (prev + 1) % dynamicFeatures.length)
      }, 3000) // Change every 3 seconds

      return () => clearInterval(interval)
    }
  }, [dynamicFeatures])

  // Removed feature card scaling/fading animation on scroll

  return (
    <section id="features" className="section-padding">
      <div className="container-width">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Side - Title and Description */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <div className="space-y-6 md:space-y-8">
              <div className="inline-flex items-center gap-2 glass px-4 md:px-6 py-2 md:py-3 rounded-full text-sm md:text-base text-brand-400 magnetic-hover animate-pulse-glow">
                <span className="text-brand-300 animate-pulse"></span>
                {mainFeatures.title}
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-brand-400 leading-tight text-shimmer">
                {mainFeatures.subtitle}
              </h2>

              <p className="text-base sm:text-lg md:text-xl text-brand-300 leading-relaxed">
                {mainFeatures.feature1Desc}
              </p>
              {/* Dynamic text below main text with smooth animation */}
              <div className="mt-6 md:mt-8 min-h-[2rem] md:min-h-[2.5rem]">
                <AnimatePresence mode="wait">
                  {dynamicFeatures && dynamicFeatures.map((text, i) => (
                    centeredIndex === i && (
                      <motion.p
                        key={`Image-${i}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                        className="text-sm sm:text-base md:text-lg text-brand-400 font-semibold"
                      >
                        {text}
                      </motion.p>
                    )
                  ))}
                </AnimatePresence>
              </div>
              <div className="space-y-4">
                {staticFeatures && staticFeatures.map((text, i) => (
                  <div className="flex items-center gap-3 text-brand-300 magnetic-hover" key={i}>
                    <div className="w-2 h-2 bg-brand-300 rounded-full animate-pulse" style={{ animationDelay: `${i * 0.5}s` }}></div>
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Feature Cards Column */}
          <div className="lg:col-span-7">
            <div className="flex flex-col items-center gap-40 pt-12">
              {features.map((feature, index) => (
                <div
                  key={index}
                  ref={el => { cardRefs.current[index] = el || null; }}
                  className="glass-card rounded-2xl p-8 magnetic-hover"
                >
                  <div className="flex flex-col gap-4">
                    <h3 className="text-2xl font-bold text-black mb-2">{feature.title}</h3>
                    <p className="text-base text-black leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}

              {/* Spațiu suplimentar minim la final */}
              <div className="h-px" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
