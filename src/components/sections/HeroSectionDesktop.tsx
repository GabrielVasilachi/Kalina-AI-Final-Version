'use client'

import { useState } from 'react'
import { useScrollAnimationReveal } from '@/hooks/useScrollAnimationReveal'
import { motion } from 'framer-motion'
import { easeInOut } from 'framer-motion'

import { useLanguage } from '@/lib/i18n'
import { useMetaPixel } from '@/hooks/useMetaPixel'
import LiquidChrome from '@/../LiquidChromeBackground/LiquidChrome/LiquidChrome'

export function HeroSectionDesktop() {
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
        delayChildren: 1.4
      }
    }
  }

  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: easeInOut,
        delay: 1.4
      }
    }
  }

  const leftSlideVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
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
        duration: 1.2,
        ease: easeInOut
      }
    }
  }

  return (
    <section id="hero-desktop" className="relative py-0 overflow-hidden bg-white min-h-screen flex items-center" style={{height: '950px', minHeight: '600px'}}>
      {/* Liquid Chrome Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <LiquidChrome 
          baseColor={[0.9,0.9,0.9]} 
          speed={0.1} 
          amplitude={0.4} 
          frequencyX={3} 
          frequencyY={2} 
          interactive={true} 
          style={{width:'100%',height:'100%'}} 
        />
      </div>

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
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-extrabold text-black leading-tight mb-8 tracking-wide">
              <span style={{ fontFamily: `Bespoke Slab` }}>
                {t('hero.title')}
              </span>
            </h1>
            <h2 className="text-xl lg:text-2xl font-medium text-gray-700 mb-6" style={{letterSpacing: '0.03em'}}>
              {t('hero.subtitle')}
            </h2>
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
              className="w-full max-w-lg object-contain drop-shadow-2xl"
              style={{
                filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.15))',
                marginLeft: '1px',
                marginTop: '50px'
              }}
            />
          </motion.div>

          {/* Form Section */}
          <motion.div 
            ref={formReveal.ref}
            className="max-w-md w-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 rounded-2xl p-20"
            variants={containerVariants}
            initial="hidden"
            animate={formReveal.isVisible ? "visible" : "hidden"}
            
          >
            {/* Notification Header - moved higher and made smaller */}
            <motion.div
              className="mb-4 rounded-xl shadow-lg p-3 flex items-center gap-2 group transition-all duration-500"
              style={{ 
                background: 'rgba(0, 0, 0, 0.5)',
                backdropFilter: 'blur(14px)',
                WebkitBackdropFilter: 'blur(14px)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                position: 'absolute',
                top: '-23px',
                left: '85px',
                transform: 'none',
                width: '277px',
                maxWidth: '90%',
                zIndex: 30,
                transition: 'cubic-bezier(.4,0,.2,1)'
              }}
              variants={childVariants}
              transition={{ duration: 0.8, ease: easeInOut }}
              whileHover={{
                top: '-25px',
                left: '80px',
                width: '287px',
                maxWidth: '90%',
                zIndex: 30,
                transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
              }}
            >
              <div className="w-full flex flex-row items-center gap-2 justify-between">
                <div className="flex flex-row items-center gap-2">
                  {/* Left: White rounded square */}
                  <div className="flex-shrink-0">
                    <div className="bg-white flex items-center justify-center" style={{ width: '28px', height: '28px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.12)' }}>
                      <img
                        src="/GraphicsForSections/KallinaLogo.png"
                        alt="Kallina Logo"
                        style={{ width: '18px', height: '18px', objectFit: 'contain' }}
                      />
                    </div>
                  </div>
                  {/* Right: Text and subtext */}
                  <div className="flex flex-col justify-center items-start">
                    <span className="font-semibold text-white text-xs leading-tight">{t('hero.aiAssistantCall')}</span>
                    <span className="text-[10px] text-gray-300 leading-tight">{t('hero.incomingCall')}</span>
                  </div>
                </div>
                {/* Timestamp */}
                <span className="text-[10px] text-gray-400 font-medium" style={{position: 'relative', top: '-10px'}}>3m ago</span>
              </div>
            </motion.div>
            {/* Input Fields */}
            <motion.div
              className="mb-8 space-y-6"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.8,
                    ease: easeInOut,
                    delay: 2.1 // input fields apar mai târziu
                  }
                }
              }}
            >
              <div style={{ position: 'relative',  top: '20px' }}>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  {t('hero.phoneNumber')}
                </label>
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="+373 XX XXX XXX"
                  className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-base hover:border-gray-300 hover:shadow-lg"
                  style={{
                    backdropFilter: 'blur(10px)',
                    background: 'rgba(255, 255, 255, 0.9)'
                  }}
                />
              </div>
              <div style={{ position: 'relative',  top: '20px' }}>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  {t('hero.companyName')}
                </label>
                <input
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder={t('hero.yourCompany')}
                  className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-base hover:border-gray-300 hover:shadow-lg"
                  style={{
                    backdropFilter: 'blur(10px)',
                    background: 'rgba(255, 255, 255, 0.9)'
                  }}
                />
              </div>
            </motion.div>

            {/* Call Button */}
            <motion.div style={{ position: 'relative',  top: '70px' }}>
              <motion.button
                onClick={handleCallButtonClick}
                className="w-full text-black font-bold py-3 px-8 rounded-2xl flex items-center justify-center gap-4 shadow-xl focus:outline-none transition-all duration-500 group hover:shadow-2xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.95), rgba(255,255,255,0.85))',
                  border: '1px solid rgba(255,255,255,0.3)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  fontSize: '18px',
                  height: '44px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)'
                  e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255,255,255,1), rgba(255,255,255,0.95))'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)'
                  e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255,255,255,0.95), rgba(255,255,255,0.85))'
                }}
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      duration: 0.8,
                      ease: easeInOut,
                      delay: 2.1 // apare odată cu input fields
                    }
                  }
                }}
              >
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  {t('hero.startAiCall')}
                </span>
              </motion.button>
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
