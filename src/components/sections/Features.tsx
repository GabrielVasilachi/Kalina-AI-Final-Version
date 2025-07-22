"use client"

import { useScrollReveal } from '@/hooks/useScrollReveal'
import { useRef, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export function Features() {
  // Removed scroll reveal hooks
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const [centeredIndex, setCenteredIndex] = useState(0)

  const features = [
    {
      title: 'Frontier intelligence, tailored to You.',
      description: 'Make your AI your own. Train, distill, fine-tune, and build with the world’s best open source models.'
    },
    {
      title: 'Enterprise-grade. Agent-ready.',
      description: 'Deploy agents that execute, adapt, and deliver real results, with powerful orchestration, tooling, and safety.'
    },
    {
      title: 'Privacy-first.',
      description: 'Deploy and build with AI anywhere—on-premises, cloud, edge, devices, and more—while retaining full control of your data.'
    },
    {
      title: 'Deeply engaged solutioning and value delivery.',
      description: 'Hands-on assistance from the world’s foremost applied AI scientists across deployment, solutioning, safety, and beyond.'
    },
  ]

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
                Funcții principale
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-brand-400 leading-tight text-shimmer">
                Caracteristici puternice
              </h2>
              
              <p className="text-base sm:text-lg md:text-xl text-brand-300 leading-relaxed">
                Răspunsuri rapide, precise și eficiente, livrate de un AI care înțelege și se adaptează perfect nevoilor clienților tăi. Redefinește comunicarea vocală cu tehnologia noastră avansată.
              </p>
              {/* Dynamic text below main text with smooth animation */}
              <div className="mt-6 md:mt-8 min-h-[2rem] md:min-h-[2.5rem]">
                <AnimatePresence mode="wait">
                  {centeredIndex === 0 && (
                    <motion.p
                      key="Image-1"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4, ease: 'easeOut' }}
                      className="text-sm sm:text-base md:text-lg text-brand-400 font-semibold"
                    >
                      Revoluționează Comunicarea cu Clienții Prin Tehnologia AI Avansată
                    </motion.p>
                  )}
                  {centeredIndex === 1 && (
                    <motion.p
                      key="Image-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4, ease: 'easeOut' }}
                      className="text-sm sm:text-base md:text-lg text-brand-400 font-semibold"
                    >
                      Prezență Globală, Servicii Locale
                    </motion.p>
                  )}
                  {centeredIndex === 2 && (
                    <motion.p
                      key="Image-3"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4, ease: 'easeOut' }}
                      className="text-sm sm:text-base md:text-lg text-brand-400 font-semibold"
                    >
                      Securitate de Nivel Enterprise pentru Comunicările Tale
                    </motion.p>
                  )}
                  {centeredIndex === 3 && (
                    <motion.p
                      key="Image-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4, ease: 'easeOut' }}
                      className="text-sm sm:text-base md:text-lg text-brand-400 font-semibold"
                    >
                      Inteligență Artificială Care Înțelege și Răspunde Perfect
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-brand-300 magnetic-hover">
                  <div className="w-2 h-2 bg-brand-300 rounded-full animate-pulse"></div>
                  <span>Scalabilitate și Flexibilitate Pentru Nevoile Afacerii Tale</span>
                </div>
                <div className="flex items-center gap-3 text-brand-300 magnetic-hover">
                  <div className="w-2 h-2 bg-brand-300 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <span>24/7 Suport Global</span>
                </div>
                <div className="flex items-center gap-3 text-brand-300 magnetic-hover">
                  <div className="w-2 h-2 bg-brand-300 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                  <span>99.9% Garanție Uptime</span>
                </div>
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
