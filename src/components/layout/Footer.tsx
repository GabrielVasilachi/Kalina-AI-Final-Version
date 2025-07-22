'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'
import { useEffect, useState, useRef } from 'react'

export function Footer() {
  const { ref, classes, isVisible } = useScrollReveal('up')
  const [isHeaderOverFooter, setIsHeaderOverFooter] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  // Header overlap detection (like Demo)
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        const headerHeight = 80 // Header height
        
        // Check if header is overlapping with footer section
        const isOverlapping = rect.top <= headerHeight && rect.bottom >= headerHeight
        setIsHeaderOverFooter(isOverlapping)
      }
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll)
      handleScroll() // Check initial state
    }
    
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  // Dispatch event when overlap state changes (like Demo)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (isHeaderOverFooter) {
        window.dispatchEvent(new CustomEvent('headerOverDemo', { detail: { isOver: true } }))
      } else {
        window.dispatchEvent(new CustomEvent('headerOverDemo', { detail: { isOver: false } }))
      }
    }
  }, [isHeaderOverFooter])

  const footerSections = [
    {
      title: "Product",
      links: [
        { name: "Features" },
        { name: "Pricing" },
        { name: "Demo" },
        { name: "API" }
      ]
    },
    {
      title: "Company", 
      links: [
        { name: "About" },
        { name: "Careers" },
        { name: "Contact" },
        { name: "Blog" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Documentation" },
        { name: "Help Center" },
        { name: "Status" },
        { name: "Community" }
      ]
    }
  ]

  const socialLinks = [
    { name: "Twitter", url: "#" },
    { name: "LinkedIn", url: "#" },
    { name: "GitHub", url: "#" },
    { name: "Discord", url: "#" }
  ]
      // id="demo" 
      // ref={sectionRef}
      // className="section-padding bg-gray-950 relative overflow-hidden shadow-lg"
      // style={{ borderRadius: '90px' }}

  return (
    <footer ref={sectionRef} className="px-8 py-10 bg-black relative overflow-hidden shadow-lg"
      style={{ borderRadius: '0 0 90px 90px' }}>
      {/* Subtle background animation */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-500/5 via-transparent to-transparent"></div>
      <div className="morph-shape-2 absolute top-10 right-20 opacity-10"></div>
      
      <div className="container-width px-4 py-8 relative z-10" ref={ref}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand section */}
          <div className={`space-y-4 transition-all duration-700 ${classes} md:col-span-1 col-span-1`}>
            <div className="text-xl md:text-2xl font-bold text-brand-100 text-shimmer magnetic-hover">
              Kalina AI
            </div>
            <p className="text-sm md:text-base text-brand-100 leading-relaxed">
              Crystal-clear AI calls, anywhere in the world. Revolutionizing global communications.
            </p>
            <div className="flex space-x-3 md:space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="w-8 h-8 md:w-10 md:h-10 glass-card rounded-lg flex items-center justify-center magnetic-hover group transition-all duration-300 hover:scale-110"
                  title={social.name}
                >
                  <span className="group-hover:scale-125 transition-transform duration-300">
                  </span>
                </a>
              ))}
            </div>
          </div>
          
          {/* Footer sections - Mobile: 2 columns, Desktop: 3 columns */}
          <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {footerSections.map((section, sectionIndex) => (
              <div 
                key={sectionIndex}
                className={`space-y-3 md:space-y-4 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: `${(sectionIndex + 1) * 200}ms`
                }}
              >
                <h3 className="text-sm md:text-base font-semibold text-brand-100 text-glow">
                  {section.title}
                </h3>
                <div className="space-y-2 md:space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href="#"
                      className="flex items-center space-x-2 text-xs md:text-sm text-brand-100 hover:text-brand-100 transition-all duration-300 magnetic-hover group"
                    >
                      <span className="group-hover:scale-110 transition-transform duration-300">
                      </span>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {link.name}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Newsletter signup moved to BottomBar */}
        
        {/* Copyright */}
        <div className={`mt-8 md:mt-12 pt-6 md:pt-8 text-center transition-all duration-1000 delay-900 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            <p className="text-xs md:text-sm text-brand-100">
              &copy; 2024 Kalina AI. All rights reserved.
            </p>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 md:space-x-6 text-xs">
              <a href="#" className="text-brand-100 hover:text-brand-100 transition-colors magnetic-hover">
                Privacy Policy
              </a>
              <a href="#" className="text-brand-100 hover:text-brand-100 transition-colors magnetic-hover">
                Terms of Service
              </a>
              <a href="#" className="text-brand-100 hover:text-brand-100 transition-colors magnetic-hover">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
