'use client'

import { useState } from 'react'
import { useScrollAnimationReveal } from '@/hooks/useScrollAnimationReveal'
import { motion } from 'framer-motion'
import { easeInOut } from 'framer-motion'

import { useLanguage } from '@/lib/i18n'
import LiquidChrome from '@/../LiquidChromeBackground/LiquidChrome/LiquidChrome'

export function HeroSection() {
  const { t } = useLanguage()
  // Removed mousePosition state and mousemove effect
  const [phoneNumber, setPhoneNumber] = useState('')
  const [companyName, setCompanyName] = useState('')
  const badgeReveal = useScrollAnimationReveal('up', 0.1)
  const titleReveal = useScrollAnimationReveal('up', 0.2)
  const descReveal = useScrollAnimationReveal('up', 0.3)
  const buttonsReveal = useScrollAnimationReveal('up', 0.4)
  const featuresReveal = useScrollAnimationReveal('up', 0.5)
  const phoneReveal = useScrollAnimationReveal('up', 0.6)

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



  return (
    <section id="hero" className="relative py-0 overflow-hidden bg-white min-h-[90vh] flex flex-col items-center justify-center">
      {/* Liquid Chrome Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <LiquidChrome baseColor={[0.5,0.8,0.5]} speed={0.1} amplitude={0.4} frequencyX={3} frequencyY={2} interactive={false} style={{width:'100%',height:'100%'}} />
      </div>

      {/* 200px border at the bottom, overlays all elements with fading top */}
      <div className="pointer-events-none absolute left-0 bottom-0 w-full h-[200px] z-30" style={{
        background: 'linear-gradient(to top, #fff 0%, rgba(255,255,255,0.85) 10%, rgba(255,255,255,0.5) 18%, rgba(255,255,255,0.15) 26%, rgba(255,255,255,0.0) 32%)',
        borderBottom: '0px solid #fff'
      }} />

      <div className="container-width relative z-10 flex flex-col items-center justify-center flex-grow w-full">
        {/* Title Centered */}
        <motion.h1 
          ref={titleReveal.ref}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-black leading-tight text-center mt-0 mb-0 p-0 relative tracking-wide"
          style={{ 
            top: '150px', 
            fontFamily: `'Satisfy', 'Segoe UI', 'Arial', cursive`
          }}
          variants={containerVariants}
          initial="hidden"
          animate={titleReveal.isVisible ? "visible" : "hidden"}
        >
          <motion.span variants={childVariants}>{t('hero.title')}</motion.span>
        </motion.h1>

        {/* iPhone and Notification Centered Below Title */}
        <motion.div 
          ref={phoneReveal.ref}
          className="flex flex-col items-center justify-center relative"
          variants={childVariants}
          initial="hidden"
          animate={phoneReveal.isVisible ? "visible" : "hidden"}
        >
          <div className="relative flex flex-col items-center justify-center">
            <motion.img
              src="/iphone_image.png"
              alt="iPhone with AI Assistant"
              className="w-80 md:w-96 lg:w-[400px] object-contain drop-shadow-2xl m-0 p-0 relative lg:top-[150px] mb-8 mt-48 sm:mt-0"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: 'easeInOut', delay: 3.2 }}
            />
            <motion.div
              className="flex flex-col items-center justify-center w-56 sm:w-64 md:w-80 mt-[-400px] sm:mt-[-350px] md:mt-[-430px] lg:mt-[-360px] z-20 relative"
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              animate={{ 
                opacity: 1, 
                y: 0, 
                scale: 1,
              }}
              transition={{
                opacity: { delay: 1, duration: 0.6 },
                y: { delay: 1, duration: 0.6 },
                scale: { delay: 1, duration: 0.6 }
              }}
            >
              {/* Notification Header */}
              <motion.div
                className="mb-6 w-full rounded-2xl shadow-2xl p-3 sm:p-4 md:p-6 flex items-center gap-2 sm:gap-3"
                style={{ background: 'rgba(0, 0, 0, 0.2)' }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.8, ease: 'easeInOut', delay: 3.9 }}
              >
                <div>
                  <h4 className="font-semibold text-black">{t('hero.aiAssistantCall')}</h4>
                  <p className="text-sm text-gray-800">{t('hero.incomingCall')}</p>
                </div>
              </motion.div>

              {/* Input Fields */}
              <motion.div
                className="mb-6 w-full flex flex-col items-center"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.8, ease: 'easeInOut', delay: 4.3 }}
              >
                <div className="space-y-2 sm:space-y-4 w-full">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                      {t('hero.phoneNumber')}
                    </label>
                    <input
                      type="tel"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="+373 XX XXX XXX"
                      className="w-full px-2 py-1.5 sm:px-4 sm:py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-xs sm:text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                      {t('hero.companyName')}
                    </label>
                    <input
                      type="text"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder={t('hero.yourCompany')}
                      className="w-full px-2 py-1.5 sm:px-4 sm:py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-xs sm:text-sm"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Call Button */}
              <div className="mb-6 w-full flex flex-col items-center">
                <button
                  className="w-full text-black font-medium py-[10px] px-[10px] rounded-2xl flex items-center justify-center gap-2 shadow-lg focus:outline-none transition-all duration-300"
                  style={{
                    background: 'rgba(255,255,255,0.82)',
                    border: '1px solid rgba(255,255,255,0.22)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
                    transition: 'background 0.3s, box-shadow 0.3s, transform 0.25s cubic-bezier(0.1,0,0.1,1), padding 0.25s cubic-bezier(0.1,0,0.1,1), min-width 0.25s cubic-bezier(0.1,0,0.1,1), max-width 0.25s cubic-bezier(0.1,0,0.1,1)',
                    minWidth: '120px',
                    maxWidth: '100%',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.95)';
                    e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.14)';
                    e.currentTarget.style.transform = 'scale(1.045)';
                    e.currentTarget.style.paddingLeft = '8px';
                    e.currentTarget.style.paddingRight = '8px';
                    e.currentTarget.style.minWidth = '90px';
                    e.currentTarget.style.maxWidth = '260px';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.82)';
                    e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.10)';
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.paddingLeft = '10px';
                    e.currentTarget.style.paddingRight = '10px';
                    e.currentTarget.style.minWidth = '120px';
                    e.currentTarget.style.maxWidth = '100%';
                  }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {t('hero.startAiCall')}
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
