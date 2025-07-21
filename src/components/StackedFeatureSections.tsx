'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'
import { useState, useEffect, useRef } from 'react'

interface FeatureCardProps {
  title: string
  body: string
  imgSrc: string
  imgAlt: string
  index: number
  videoSrc?: string
}

function FeatureCard({ title, body, imgSrc, imgAlt, index, videoSrc }: FeatureCardProps) {
  const cardReveal = useScrollReveal('up', 0.2)
  const [isHovered, setIsHovered] = useState(false)
  const featureVideoRef = useRef<HTMLVideoElement>(null)

  // Set playback speed for feature video
  useEffect(() => {
    if (featureVideoRef.current) {
      featureVideoRef.current.playbackRate = 1.3;
    }
  }, [])
  
  return (
    <>
      {videoSrc ? (
        // Layout with external video on the right
        <div className="relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Feature Card - takes up 7 columns */}
            <div className="lg:col-span-7 relative z-20">
              <div 
                ref={cardReveal.ref}
                className={`feature-card glass-card rounded-3xl p-8 lg:p-12 transition-all duration-700 ${cardReveal.classes}`}
                style={{ 
                  transitionDelay: `${index * 150}ms`,
                  transform: isHovered ? 'translateY(-12px) scale(1.02)' : 'translateY(0) scale(1)',
                  zIndex: 30
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {/* Only content, no image */}
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 bg-brand-100 px-4 py-2 rounded-full animate-pulse-glow">
                    <div className="w-2 h-2 bg-brand-100 rounded-full animate-pulse loading-dots"></div>
                    <span className="text-sm font-medium text-gray-950">Caracteristica {index + 1}</span>
                  </div>
                  
                  <h3 className="text-3xl lg:text-4xl font-bold text-brand-100 leading-tight text-glow">
                    {title}
                  </h3>
                  
                  <p className="text-lg text-brand-100 leading-relaxed">
                    {body}
                  </p>
                  
                  <button className="btn-secondary btn-magnetic group inline-flex items-center gap-2">
                    Află mai multe
                    <span className="ml-2 transition-transform duration-300 group-hover:translate-x-2 group-hover:scale-110"></span>
                  </button>
                </div>
              </div>
            </div>
            
            {/* Video - takes up 5 columns, positioned on the right */}
            <div className="lg:col-span-5 relative z-10">
              <div 
                className="transition-all duration-600 opacity-0 translate-y-4"
                style={{ 
                  opacity: cardReveal.isVisible ? 1 : 0,
                  transform: cardReveal.isVisible ? 'translateY(0) scale(1)' : 'translateY(16px) scale(0.9)',
                  transitionDelay: '200ms',
                  zIndex: 15
                }}
              >
                <video
                  ref={featureVideoRef}
                  className="w-full h-auto object-cover rounded-2xl"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                >
                  <source src={videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // Original layout for features without video
        <div 
          ref={cardReveal.ref}
          className={`feature-card glass-card rounded-3xl p-8 lg:p-12 transition-all duration-700 ${cardReveal.classes}`}
          style={{ 
            transitionDelay: `${index * 150}ms`,
            transform: isHovered ? 'translateY(-12px) scale(1.02)' : 'translateY(0) scale(1)',
            zIndex: 30,
            position: 'relative'
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Image */}
            <div 
              className={`${index % 2 === 0 ? 'order-1' : 'order-1 lg:order-2'} transition-all duration-600 opacity-0 translate-y-4`}
              ref={cardReveal.ref}
              style={{ 
                opacity: cardReveal.isVisible ? 1 : 0,
                transform: cardReveal.isVisible ? 'translateY(0) scale(1)' : 'translateY(16px) scale(0.9)',
                transitionDelay: '200ms'
              }}
            >
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-200/20 to-brand-400/20 p-1 group">
                <div className="relative overflow-hidden rounded-xl bg-white/5 group-hover:bg-white/10 transition-all duration-500">
                  <img 
                    src={imgSrc}
                    alt={imgAlt}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-400/30 to-transparent group-hover:from-brand-400/20 transition-all duration-500"></div>
                  
                  {/* Animated overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
              </div>
            </div>
              
            {/* Content */}
            <div 
              className={`space-y-6 ${index % 2 === 0 ? 'order-2' : 'order-2 lg:order-1'} transition-all duration-600 opacity-0 translate-x-4`}
              style={{ 
                opacity: cardReveal.isVisible ? 1 : 0,
                transform: cardReveal.isVisible ? 'translateX(0)' : `translateX(${index % 2 === 0 ? '50px' : '-50px'})`,
                transitionDelay: '300ms'
              }}
            >
              <div className="inline-flex items-center gap-2 bg-brand-300/20 px-4 py-2 rounded-full animate-pulse-glow">
                <div className="w-2 h-2 bg-brand-300 rounded-full animate-pulse loading-dots"></div>
                <span className="text-sm font-medium text-brand-300">Caracteristica {index + 1}</span>
              </div>
              
              <h3 className="text-3xl lg:text-4xl font-bold text-brand-400 leading-tight text-glow">
                {title}
              </h3>
              
              <p className="text-lg text-brand-300 leading-relaxed">
                {body}
              </p>
              
              <button className="btn-secondary btn-magnetic group inline-flex items-center gap-2">
                Află mai multe
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-2 group-hover:scale-110"></span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export function StackedFeatureSections() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isHeaderOverSection, setIsHeaderOverSection] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        const headerHeight = 80 // Approximate header height
        // Check if header is overlapping with this section
        const isOverlapping = rect.top <= headerHeight && rect.bottom >= headerHeight
        setIsHeaderOverSection(isOverlapping)
      }
    }
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll)
      handleScroll()
    }
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (isHeaderOverSection) {
        window.dispatchEvent(new CustomEvent('headerOverDemo', { detail: { isOver: true } }))
      } else {
        window.dispatchEvent(new CustomEvent('headerOverDemo', { detail: { isOver: false } }))
      }
    }
  }, [isHeaderOverSection])
  
  const features = [
    {
      title: "Disponibil Pentru Orice Tip de Companie",
      body: "De la startup-uri la corporații mari, oferim tehnologii personalizate care se potrivesc perfect nevoilor oricărei companii.",
      imgSrc: "/assets/voice-clone.png",
      imgAlt: "Ilustrație a tehnologiei de clonare a vocii",
      videoSrc: "/List-of-companies.mp4"
    },
    {
      title: "Structura Simplu De Implementat",
      body: "Construiește rapid și eficient fluxuri de conversație cu logică decizională, fără a necesita cunoștințe tehnice avansate.",
      imgSrc: "/assets/multimodal-search.png",
      imgAlt: "Interfață de căutare multimodală",
      videoSrc: "/Reference-video.mp4"
    },
    {
      title: "Analizează Interacțiunile în Detaliu",
      body: "Vezi în timp real toate conversațiile, deciziile luate și datele esențiale pentru a înțelege mai bine interacțiunile și a îmbunătăți experiența utilizatorilor.",
      imgSrc: "/assets/edge-deploy.png",
      imgAlt: "Diagramă a arhitecturii de implementare edge",
      videoSrc: "/Video-interaction-with-clients.mp4"
    },
  ]

  return (
    <section
      ref={sectionRef}
      style={{
        backgroundColor: 'black',
        clipPath: 'polygon(0 130px, 100% 0, 100% calc(100% - 130px), 0 100%)',
        WebkitClipPath: 'polygon(0 130px, 100% 0, 100% calc(100% - 130px), 0 100%)',
        isolation: 'isolate',
        position: 'relative',
        zIndex: 10,
        paddingTop: '9rem',
        paddingBottom: '8rem'
      }}
      className="relative overflow-hidden px-4"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20 z-0">
        <div 
          className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-brand-200/30 to-brand-300/30 rounded-full morphing-shape"
          style={{ zIndex: 1 }}
        />
        <div 
          className="absolute bottom-40 right-20 w-32 h-32 bg-gradient-to-br from-brand-300/20 to-brand-400/20 rounded-full morphing-shape"
          style={{ zIndex: 1 }}
        />
      </div>

      <div className="container-width relative z-20">
        <div className="max-w-none">
          {/* Feature Cards */}
          <div className="space-y-16 lg:space-y-24">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                index={index}
                title={feature.title}
                body={feature.body}
                imgSrc={feature.imgSrc}
                imgAlt={feature.imgAlt}
                videoSrc={feature.videoSrc}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}