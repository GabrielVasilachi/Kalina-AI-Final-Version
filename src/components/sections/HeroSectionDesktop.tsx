"use client"

import { useState, useRef, useEffect } from 'react'
import { useScrollAnimationReveal } from '@/hooks/useScrollAnimationReveal'
import { motion } from 'framer-motion'
import { easeInOut } from 'framer-motion'

import { useLanguage } from '@/lib/i18n'
import { useMetaPixel } from '@/hooks/useMetaPixel'


export function HeroSectionDesktop() {
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
  
  const titleReveal = useScrollAnimationReveal('left', 0.1)
  const formReveal = useScrollAnimationReveal('left', 0.3)
  const imageReveal = useScrollAnimationReveal('right', 0.2)

  const handleCallButtonClick = () => {
    trackLead({
      phone_number: phoneNumber,
      company_name: companyName,
      event_source: 'hero_section_desktop'
    })
    console.log('Call initiated for:', { phoneNumber, companyName })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.4 // faster by 1s
      }
    }
  }

  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6, // faster by 0.2s
        ease: easeInOut,
        delay: 0.4 // faster by 1s
      }
    }
  }

  const leftSlideVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5, // faster by 0.5s
        ease: easeInOut
      }
    }
  }

  const rightSlideVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.7, // faster by 0.5s
        ease: easeInOut
      }
    }
  }

  return (
    <section id="hero-desktop" className="relative py-0 overflow-hidden bg-white min-h-screen flex items-center" style={{height: '950px', minHeight: '600px'}}>
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

      {/* Main Content Container */}
      <div className="container-width relative z-10 flex items-center justify-between h-full py-16" style={{height: '100%', left: '20px', right: '20px'}}>
        
        {/* Left Content - Only Title */}
        <div className="w-1/2 pr-16 flex items-start">
          <motion.div
            ref={titleReveal.ref}
            variants={leftSlideVariants}
            initial="hidden"
            animate={titleReveal.isVisible ? "visible" : "hidden"}
          >
            {/* Small text above title with effect */}
            <motion.div 
              className="mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium bg-gradient-to-r from-blue-50 to-purple-50 text-gray-700 border border-gray-200 shadow-sm">
                ✨ The Future of AI Communication
              </span>
            </motion.div>
            
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-extrabold text-black leading-tight mb-8 tracking-wide">
              <span>
                {t('hero.title')}
              </span>
            </h1>
            <h2 className="text-xl lg:text-2xl font-medium text-gray-700 mb-6" style={{letterSpacing: '0.03em'}}>
              {t('hero.subtitle')}
            </h2>
            
            {/* Two Simple Glass Buttons */}
            <div className="flex gap-4 mt-8">
              <button 
                className="px-8 py-3 rounded-full font-medium bg-gray-100 border border-gray-700 text-black transition-colors duration-200 hover:bg-black hover:text-white">
                Sign-in
              </button>
              <button 
                className="px-8 py-3 rounded-full font-medium border border-black hover:bg-white hover:border-black hover:text-black bg-black text-white transition-colors duration-200">
                Create Account
              </button>
            </div>
          </motion.div>
        </div>

        {/* Right Content - Form Section and iPhone Image */}
        <div className="w-1/2 flex flex-col items-center justify-center gap-12 relative">
          {/* iPhone Image */}
          <motion.div
            ref={imageReveal.ref}
            variants={rightSlideVariants}
            initial="hidden"
            animate={imageReveal.isVisible ? "visible" : "hidden"}
            className="relative z-10"
          >
            <img
              src="/PNGiphone-mockup-full.png"
              alt="iPhone Mockup Full"
              className="object-contain drop-shadow-2xl"
              style={{
                width: '650px',
                minWidth: '650px',
                maxWidth: '650px',
                filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.15))',
                marginLeft: '1px',
                marginTop: '480px'
              }}
            />
          </motion.div>

          {/* Form Section */}
          <motion.div 
            ref={formReveal.ref}
            className="max-w-md w-full absolute left-1/2 z-20 rounded-2xl p-[50px]"
            style={{ top: '47%', transform: 'translateX(-50%)', position: 'absolute' }}
            variants={containerVariants}
            initial="hidden"
            animate={formReveal.isVisible ? "visible" : "hidden"}
            
          >
            {/* Notification Header - moved higher and made smaller */}
            <motion.div
              className="mb-4 rounded-2xl shadow-2xl p-3 flex items-center gap-4 group transition-all duration-500"
              style={{ 
                background: 'rgba(0, 0, 0, 0.5)',
                backdropFilter: 'blur(18px)',
                WebkitBackdropFilter: 'blur(18px)',
                border: '1.5px solid rgba(255, 255, 255, 0.12)',
                position: 'absolute',
                top: '-49px',
                left: '55px',
                transform: 'none',
                width: '340px',
                maxWidth: '95%',
                zIndex: 30,
                transition: 'cubic-bezier(.4,0,.2,1)'
              }}
              variants={childVariants}
              transition={{ duration: 0.6, ease: easeInOut }}
              // Animation on hover removed as requested
            >
              <div className="w-full flex flex-row items-center gap-2 justify-between">
                <div className="flex flex-row items-center gap-2">
                  {/* Left: White rounded square */}
                <div className="flex-shrink-0">
                  <div className="bg-white flex items-center justify-center" style={{ width: '38px', height: '38px', borderRadius: '10px', boxShadow: '0 4px 16px rgba(0,0,0,0.14)' }}>
                    <img
                      src="/GraphicsForSections/KallinaLogo.png"
                      alt="Kallina Logo"
                      style={{ width: '24px', height: '24px', objectFit: 'contain' }}
                    />
                  </div>
                </div>
                  {/* Right: Text and subtext */}
                  <div className="flex flex-col justify-center items-start">
                    <span className="font-semibold text-white text-lg leading-tight">{t('hero.aiAssistantCall')}</span>
                    <span className="text-sm text-gray-300 leading-tight">{t('hero.incomingCall')}</span>
                  </div>
                </div>
                {/* Timestamp */}
                <span className="text-xs text-gray-200 font-medium" style={{position: 'relative', top: '-18px'}}>3m ago</span>
              </div>
            </motion.div>
            {/* Input Fields */}
            <motion.div
              className="mb-8 space-y-6"
              style={{ marginTop: '38px' }}
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.6,
                    ease: easeInOut,
                    delay: 1.1 // faster by 1s
                  }
                }
              }}
            >
              <div style={{ position: 'relative',  top: '20px' }}>
                <label className="block text-lg font-semibold text-gray-700 mb-3">
                  {t('hero.phoneNumber')}
                </label>
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="+373 XX XXX XXX"
                  className="w-full px-5 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-base hover:border-gray-300 hover:shadow-lg"
                  style={{
                    backdropFilter: 'blur(10px)',
                    background: 'rgba(255, 255, 255, 0.9)'
                  }}
                />
              </div>
              <div style={{ position: 'relative',  top: '20px' }}>
                <label className="block text-lg font-semibold text-gray-700 mb-3">
                  {t('hero.companyName')}
                </label>
                <input
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder={t('hero.yourCompany')}
                  className="w-full px-5 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-base hover:border-gray-300 hover:shadow-lg"
                  style={{
                    backdropFilter: 'blur(10px)',
                    background: 'rgba(255, 255, 255, 0.9)'
                  }}
                />
              </div>
            </motion.div>

            {/* Call Button */}
            <motion.div style={{ position: 'relative',  top: '30px' }}>
              <div className="w-full flex justify-center">
                <motion.button
                  onClick={handleCallButtonClick}
                  className="flex items-center justify-center rounded-full shadow-xl focus:outline-none transition-all duration-300 group hover:shadow-2xl"
                  style={{
                    background: '#28a745',
                    border: 'none',
                    color: 'white',
                    width: '64px',
                    height: '64px',
                    minWidth: '64px',
                    minHeight: '64px',
                    maxWidth: '64px',
                    maxHeight: '64px',
                    boxShadow: '0 4px 16px rgba(40,167,69,0.18)',
                    padding: 0
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = '#218838';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = '#28a745';
                  }}
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        duration: 0.6,
                        ease: easeInOut,
                        delay: 1.1
                      }
                    }
                  }}
                  aria-label="Call"
                >
                  {/* Phone icon SVG, no extra circle or gradient */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="none" viewBox="0 0 28 28">
                    <path d="M19.5 17.5c-.7 0-1.38-.11-2.03-.32a1.5 1.5 0 0 0-1.47.36l-1.13 1.13a10.97 10.97 0 0 1-5.18-5.18l1.13-1.13a1.5 1.5 0 0 0 .36-1.47A7.5 7.5 0 0 1 10.5 8.5c0-.83-.67-1.5-1.5-1.5H7A1.5 1.5 0 0 0 5.5 8.5c0 7.18 5.82 13 13 13 .83 0 1.5-.67 1.5-1.5v-2a1.5 1.5 0 0 0-1.5-1.5z" fill="#fff"/>
                  </svg>
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      {/* Wave Header Bottom - Always at the bottom */}
      <img
        src="/GraphicsForSections/wave-header-bottom.svg"
        alt="Wave Header Bottom"
        className="pointer-events-none select-none absolute left-0 bottom-[0px] w-full z-30"
        // style={{
        //   objectFit: 'cover',
        //   height: '80px',
        //   width: '100vw'
        // }}
      />
    </section>
  )
}
