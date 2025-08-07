'use client'

import { useState, useRef, useEffect } from 'react'
import { useScrollAnimationReveal } from '@/hooks/useScrollAnimationReveal'
import { motion } from 'framer-motion'
import { easeInOut } from 'framer-motion'

import { useLanguage } from '@/lib/i18n'
import { useMetaPixel } from '@/hooks/useMetaPixel'


export function HeroSectionMobile() {
  const videoRef = useRef<HTMLVideoElement>(null);
  // Slow down video playback
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7;
    }
  }, []);
  const [fade, setFade] = useState(false);
  const fadeDuration = 2200; // ms
  const handleVideoTimeUpdate = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const video = e.currentTarget;
    // Fade out near end
    if (video.duration - video.currentTime <= 1.2 && !fade) {
      setFade(true);
    }
    // Fade in after restart
    if (video.currentTime < 1.2 && fade) {
      setFade(false);
    }
  };
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
    <section id="hero-mobile" className="relative py-0 overflow-hidden bg-white min-h-[620px] flex flex-col">
            {/* Video Background with extra smooth loop fade */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover z-0 transition-opacity"
        src="/Background-Video.mp4"
        autoPlay
        muted
        loop
        playsInline
        style={{
          objectFit: 'cover',
          opacity: fade ? 0.04 : 1,
          transition: `opacity ${fadeDuration}ms cubic-bezier(.4,0,.2,1)`
        }}
        onTimeUpdate={handleVideoTimeUpdate}
      />
      {/* Crossfade overlay for ultra smoothness */}
      <div
        className="absolute inset-0 w-full h-full z-10 pointer-events-none transition-opacity"
        style={{
          background: fade
            ? 'radial-gradient(ellipse at center, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.32) 100%)'
            : 'transparent',
          opacity: fade ? 0.7 : 0,
          transition: `opacity ${fadeDuration}ms cubic-bezier(.4,0,.2,1)`
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-start flex-grow px-6 pt-16 pb-12">
        {/* Title Section */}
        <motion.div
          ref={titleReveal.ref}
          className="text-center mb-8 pt-16"
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
      </div>

      {/* Mobile iPhone image - Always at the bottom */}
      <div className="absolute left-1/2 transform -translate-x-1/2 z-20" style={{ width: '480px', height: '480px', bottom: '-130px' }}>
        <img
          src="/iphone_image.png"
          alt="iPhone with AI Assistant"
          style={{ width: '480px', height: '480px', objectFit: 'contain'}}
        />

        {/* Form Section - overlayed on iPhone */}
        <motion.div 
          ref={formReveal.ref}
          className="absolute flex flex-col items-center justify-start pt-4"
          style={{ top: '130px', left: '50%', transform: 'translateX(-50%)', width: '150px', minWidth: '150px', maxWidth: '150px', zIndex: 30 }}
          variants={containerVariants}
          initial="hidden"
          animate={formReveal.isVisible ? "visible" : "hidden"}
        >
          {/* Notification Header - custom design */}
          <motion.div
            className="mb-4 rounded-xl shadow-lg p-3 flex items-center gap-2 group transition-all duration-500"
            style={{ 
              background: 'rgba(0, 0, 0, 0.5)',
              backdropFilter: 'blur(14px)',
              WebkitBackdropFilter: 'blur(14px)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              position: 'absolute',
              top: '-57px',
              left: '-60px',
              transform: 'none',
              width: '270px',
              zIndex: 30,
              transition: 'cubic-bezier(.4,0,.2,1)'
            }}
            variants={childVariants}
            transition={{ duration: 0.8, ease: easeInOut }}
          >
            <div className="w-full flex flex-row items-center gap-2 justify-between">
              <div className="flex flex-row items-center gap-2">
                {/* Left: White rounded square */}
                <div className="flex-shrink-0">
                  <div className="bg-white flex items-center justify-center" style={{ width: '28px', height: '28px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.12)' }}>
                    <img
                      src="/GraphicsForSections/KallinaLogo.png"
                      alt="Kallina Logo"
                      style={{ width: '20px', height: '20px', objectFit: 'contain' }}
                    />
                  </div>
                </div>
                {/* Right: Text and subtext */}
                <div className="flex flex-col justify-center items-start">
                  <span className="font-semibold text-white text-[10px] leading-tight">{t('hero.aiAssistantCall')}</span>
                  <span className="text-[7px] text-gray-300 leading-tight">{t('hero.incomingCall')}</span>
                </div>
              </div>
              {/* Timestamp */}
              <span className="text-[6px] text-gray-400 font-medium" style={{position: 'relative', top: '-10px'}}>3m ago</span>
            </div>
          </motion.div>

          {/* Input Fields */}
          <motion.div
            className="mb-2 space-y-2 w-full"
            variants={childVariants}
          >
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                {t('hero.phoneNumber')}
              </label>
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="+373 XX XXX XXX"
                className="w-full px-2 py-1 border border-gray-200 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-xs"
                style={{ 
                  minHeight: '28px',
                  backdropFilter: 'blur(8px)',
                  background: 'rgba(255, 255, 255, 0.92)'
                }}
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                {t('hero.companyName')}
              </label>
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder={t('hero.yourCompany')}
                className="w-full px-2 py-1 border border-gray-200 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-xs"
                style={{ 
                  minHeight: '28px',
                  backdropFilter: 'blur(8px)',
                  background: 'rgba(255, 255, 255, 0.92)'
                }}
              />
            </div>
          </motion.div>

          {/* Call Button */}
          <motion.div className="w-full" variants={childVariants}>
            <button
              onClick={handleCallButtonClick}
              className="w-full text-black font-semibold py-2 px-2 rounded flex items-center justify-center gap-1 shadow focus:outline-none transition-all duration-300 active:scale-95"
              style={{
                background: 'rgba(255,255,255,0.95)',
                border: '1px solid rgba(255,255,255,0.22)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                boxShadow: '0 4px 16px rgba(0,0,0,0.10)',
                minHeight: '28px',
                fontSize: '12px'
              }}
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {t('hero.startAiCall')}
            </button>
          </motion.div>
        </motion.div>
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
