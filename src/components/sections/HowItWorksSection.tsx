'use client'

import { useScrollAnimationReveal } from '@/hooks/useScrollAnimationReveal'
import { motion } from 'framer-motion'
import { easeInOut } from 'framer-motion'

export function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Conectează-te",
      description: "Începe un apel cu infrastructura noastră cu latență ultra-redusă",
      icon: "◉"
    },
    {
      number: "02", 
      title: "Procesare inteligentă",
      description: "AI-ul nostru analizează și optimizează calitatea audio în timp real, pentru o experiență impecabilă.",
      icon: "◎"
    },
    {
      number: "03",
      title: "Conversează natural", 
      description: "Bucură-te de conversații fluide și clare, oriunde în lume, asistate de inteligență artificială.",
      icon: "◈"
    }
  ]

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  const stepVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeInOut
      }
    }
  }

  return (
    <motion.section 
      id="how-it-works" 
      className="section-padding py-6 pt-7 relative overflow-hidden bg-white"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Morphing background elements */}
      <div className="morph-shape-3 absolute top-20 right-20 opacity-20"></div>
      <div className="morph-shape-1 absolute bottom-40 left-20 opacity-30"></div>
      
      <div className="container-width">
        <motion.div className="text-center mb-16" variants={stepVariants}>
          <h2 className="text-4xl lg:text-5xl font-bold text-brand-400 mb-6 text-shimmer">
            Cum Funcționează
          </h2>
          <p className="text-xl text-brand-300 max-w-3xl mx-auto">
            Simplu, rapid și de încredere – începe în câteva minute
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              className="text-center relative"
              variants={stepVariants}
            >
              <div className="glass-card rounded-2xl p-8 mb-6 magnetic-hover group relative overflow-hidden">
                {/* Animated background gradient */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-brand-500/20 to-primary-500/20"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
                
                <div className="relative z-10">
                  <motion.div 
                    className="text-6xl mb-4"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut', delay: index * 0.2 }}
                  >
                    {step.icon}
                  </motion.div>
                  <div className="text-4xl font-bold text-brand-400 mb-4 text-shimmer">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-semibold text-brand-400 mb-4 text-glow group-hover:text-brand-50 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-brand-400 group-hover:text-brand-400 transition-colors">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
