'use client'

import { useState } from 'react'
import { useScrollAnimationReveal } from '@/hooks/useScrollAnimationReveal'
import { motion } from 'framer-motion'
import { easeInOut } from 'framer-motion'

import { useLanguage } from '@/lib/i18n'
import { useMetaPixel } from '@/hooks/useMetaPixel'
import LiquidChrome from '@/../LiquidChromeBackground/LiquidChrome/LiquidChrome'

export function HeroSectionMobile() {
  const { t } = useLanguage()
  const { trackLead, trackContact } = useMetaPixel()
  const [phoneNumber, setPhoneNumber] = useState('')
  const [companyName, setCompanyName] = useState('')
  
  const titleReveal = useScrollAnimationReveal('up', 0.2)
  const formReveal = useScrollAnimationReveal('up', 0.4)

  const handleCallButtonClick = () => {
    trackLead({
      phone_number: phoneNumber,
      company_name: companyName,
      event_source: 'hero_section_mobile'
    })
    console.log('Call initiated for:', { phoneNumber, companyName })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: easeInOut
      }
    }
  }

  return (
    <section id="hero-mobile" className="relative py-0 overflow-hidden bg-white min-h-screen flex flex-col">
      {/* Liquid Chrome Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <LiquidChrome 
          baseColor={[0.1,0.1,0.5]} 
          speed={0.1} 
          amplitude={0.3} 
          frequencyX={2} 
          frequencyY={1.5} 
          interactive={false} 
          style={{width:'100%',height:'100%'}} 
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-start flex-grow px-4 pt-16 pb-8">
        
        {/* Title Section */}
        <motion.div
          ref={titleReveal.ref}
          className="text-center mb-8"
          variants={containerVariants}
          initial="hidden"
          animate={titleReveal.isVisible ? "visible" : "hidden"}
        >
          <motion.h1 
            className="text-3xl sm:text-4xl font-extrabold text-black leading-tight mb-4 tracking-wide"
            style={{ 
              fontFamily: `'Satisfy', 'Segoe UI', 'Arial', cursive`
            }}
            variants={childVariants}
          >
            {t('hero.title')}
          </motion.h1>
        </motion.div>

        {/* Form Section */}
        <motion.div 
          ref={formReveal.ref}
          className="w-full max-w-sm mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={formReveal.isVisible ? "visible" : "hidden"}
        >
          {/* Notification Header */}
          <motion.div
            className="mb-6 w-full rounded-2xl shadow-xl p-4 flex items-center gap-3"
            style={{ background: 'rgba(0, 0, 0, 0.15)' }}
            variants={childVariants}
          >
            <div>
              <h4 className="font-semibold text-black text-sm">{t('hero.aiAssistantCall')}</h4>
              <p className="text-xs text-gray-800">{t('hero.incomingCall')}</p>
            </div>
          </motion.div>

          {/* Input Fields */}
          <motion.div
            className="mb-6 space-y-4"
            variants={childVariants}
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('hero.phoneNumber')}
              </label>
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="+373 XX XXX XXX"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-base"
                style={{ minHeight: '48px' }} // Touch-friendly height
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('hero.companyName')}
              </label>
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder={t('hero.yourCompany')}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-base"
                style={{ minHeight: '48px' }} // Touch-friendly height
              />
            </div>
          </motion.div>

          {/* Call Button */}
          <motion.div className="mb-8" variants={childVariants}>
            <button
              onClick={handleCallButtonClick}
              className="w-full text-black font-semibold py-4 px-6 rounded-2xl flex items-center justify-center gap-3 shadow-lg focus:outline-none transition-all duration-300 active:scale-95"
              style={{
                background: 'rgba(255,255,255,0.9)',
                border: '1px solid rgba(255,255,255,0.3)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
                minHeight: '56px', // Touch-friendly height
                fontSize: '16px' // Prevent zoom on iOS
              }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {t('hero.startAiCall')}
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Mobile iPhone image - Always at the bottom */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-20">
        <img
          src="/iphone_image.png"
          alt="iPhone with AI Assistant"
          className="w-72 sm:w-80 object-contain drop-shadow-2xl"
          style={{ 
            maxHeight: '40vh',
            width: 'auto'
          }}
        />
      </div>

      {/* Wave Header Bottom - Always at the bottom, overlays iPhone */}
      <img
        src="/GraphicsForSections/wave-header-bottom.svg"
        alt="Wave Header Bottom"
        className="pointer-events-none select-none absolute left-0 bottom-0 w-full z-30"
        style={{
          objectFit: 'cover',
          height: '60px',
          width: '100vw'
        }}
      />
    </section>
  )
}
