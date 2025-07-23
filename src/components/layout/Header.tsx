'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOverDemo, setIsOverDemo] = useState(false)
  // Dropdown state for each menu
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  // Mobile menu state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  // Mobile dropdown state
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        setIsScrolled(window.scrollY > 50)
      }
    }

    const handleHeaderOverDemo = (event: CustomEvent) => {
      setIsOverDemo(event.detail.isOver)
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
      }
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll)
      window.addEventListener('headerOverDemo', handleHeaderOverDemo as EventListener)
      window.addEventListener('keydown', handleKeyDown)
    }
    
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', handleScroll)
        window.removeEventListener('headerOverDemo', handleHeaderOverDemo as EventListener)
        window.removeEventListener('keydown', handleKeyDown)
      }
    }
  }, [isMobileMenuOpen])

  // Handle body scroll lock when mobile menu is open
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (isMobileMenuOpen) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = 'unset'
      }
    }

    return () => {
      if (typeof window !== 'undefined') {
        document.body.style.overflow = 'unset'
      }
    }
  }, [isMobileMenuOpen])

  return (
    <header className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-500 backdrop-blur-xl bg-white/30` +
      (isScrolled 
        ? ' glass border-b border-neutral-200/20' 
        : ' bg-transparent border-b border-transparent')
    } style={{overflow: 'visible'}}>
      <div className="container-width relative z-50">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className={`text-2xl font-bold magnetic-hover text-shimmer animate-gradient transition-colors duration-300 ${
            isOverDemo ? 'text-white' : 'text-brand-400'
          }`}>
            Kalina AI
          </Link>
          <nav className="hidden md:flex items-center space-x-8 z-[100]">
            {/* PRODUCTS DROPDOWN */}
            <div
              className="relative group/menu"
              onMouseEnter={() => setOpenDropdown('products')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                className={`transition-all duration-300 magnetic-hover relative group px-4 py-2 ${
                  isOverDemo ? 'text-white hover:text-gray-200' : 'text-brand-300 hover:text-blue-900'
                }`}
                aria-haspopup="true"
                aria-expanded={openDropdown === 'products'}
                type="button"
              >
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  Products
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-900 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <div
                className={`absolute left-0 top-full w-64 rounded-xl bg-white shadow-lg z-[200] dropdown ${openDropdown === 'products' ? 'block' : 'hidden'}`}
                role="menu"
                style={{ marginTop: '-1px' }}
              >
                <Link href="/platform" className="block px-6 py-3 text-brand-300 hover:text-blue-900 hover:bg-blue-100/20 transition-all rounded-t-xl">
                  <span className="flex items-center gap-3">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    Platforma AI
                  </span>
                </Link>
                <Link href="/ai-agents" className="block px-6 py-3 text-brand-300 hover:text-blue-900 hover:bg-blue-100/20 transition-all">
                  <span className="flex items-center gap-3">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"/>
                    </svg>
                    Agenții AI
                  </span>
                </Link>
                <Link href="/features" className="block px-6 py-3 text-brand-300 hover:text-blue-900 hover:bg-blue-100/20 transition-all">
                  <span className="flex items-center gap-3">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                    </svg>
                    Funcționalități
                  </span>
                </Link>
                <Link href="/integrations" className="block px-6 py-3 text-brand-300 hover:text-blue-900 hover:bg-blue-100/20 transition-all rounded-b-xl">
                  <span className="flex items-center gap-3">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    Integrări
                  </span>
                </Link>
              </div>
            </div>
            {/* SOLUTIONS DROPDOWN */}
            <div
              className="relative group/menu"
              onMouseEnter={() => setOpenDropdown('solutions')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                className={`transition-all duration-300 magnetic-hover relative group px-4 py-2 ${
                  isOverDemo ? 'text-white hover:text-gray-200' : 'text-brand-300 hover:text-blue-900'
                }`}
                aria-haspopup="true"
                aria-expanded={openDropdown === 'solutions'}
                type="button"
              >
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                  </svg>
                  Solutions
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-900 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <div
                className={`absolute left-0 top-full w-64 rounded-xl bg-white shadow-lg z-[200] dropdown ${openDropdown === 'solutions' ? 'block' : 'hidden'}`}
                role="menu"
                style={{ marginTop: '-1px' }}
              >
                <Link href="/healthcare-ai" className="block px-6 py-3 text-brand-300 hover:text-blue-900 hover:bg-blue-100/20 transition-all rounded-t-xl">
                  <span className="flex items-center gap-3">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    Sănătate
                  </span>
                </Link>
                <Link href="/restaurants" className="block px-6 py-3 text-brand-300 hover:text-blue-900 hover:bg-blue-100/20 transition-all">
                  <span className="flex items-center gap-3">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    Restaurante
                  </span>
                </Link>
                <Link href="/enterprise" className="block px-6 py-3 text-brand-300 hover:text-blue-900 hover:bg-blue-100/20 transition-all rounded-b-xl">
                  <span className="flex items-center gap-3">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                    </svg>
                    Enterprise
                  </span>
                </Link>
              </div>
            </div>
            {/* RESEARCH DROPDOWN */}
            <div
              className="relative group/menu"
              onMouseEnter={() => setOpenDropdown('research')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                className={`transition-all duration-300 magnetic-hover relative group px-4 py-2 ${
                  isOverDemo ? 'text-white hover:text-gray-200' : 'text-brand-300 hover:text-blue-900'
                }`}
                aria-haspopup="true"
                aria-expanded={openDropdown === 'research'}
                type="button"
              >
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  Research
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-900 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <div
                className={`absolute left-0 top-full w-64 rounded-xl bg-white shadow-lg z-[200] dropdown ${openDropdown === 'research' ? 'block' : 'hidden'}`}
                role="menu"
                style={{ marginTop: '-1px' }}
              >
                <Link href="/developers" className="block px-6 py-3 text-brand-300 hover:text-blue-900 hover:bg-blue-100/20 transition-all rounded-t-xl">
                  <span className="flex items-center gap-3">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
                    </svg>
                    Dezvoltatori
                  </span>
                </Link>
                <Link href="/api-documentation" className="block px-6 py-3 text-brand-300 hover:text-blue-900 hover:bg-blue-100/20 transition-all">
                  <span className="flex items-center gap-3">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                    </svg>
                    API & SDK
                  </span>
                </Link>
                <Link href="/analytics" className="block px-6 py-3 text-brand-300 hover:text-blue-900 hover:bg-blue-100/20 transition-all">
                  <span className="flex items-center gap-3">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                    </svg>
                    Analytics
                  </span>
                </Link>
                <Link href="/getting-started" className="block px-6 py-3 text-brand-300 hover:text-blue-900 hover:bg-blue-100/20 transition-all rounded-b-xl">
                  <span className="flex items-center gap-3">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    Ghid Rapid
                  </span>
                </Link>
              </div>
            </div>
            {/* RESOURCES DROPDOWN */}
            <div
              className="relative group/menu"
              onMouseEnter={() => setOpenDropdown('resources')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                className={`transition-all duration-300 magnetic-hover relative group px-4 py-2 ${
                  isOverDemo ? 'text-white hover:text-gray-200' : 'text-brand-300 hover:text-blue-900'
                }`}
                aria-haspopup="true"
                aria-expanded={openDropdown === 'resources'}
                type="button"
              >
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
                  </svg>
                  Resources
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-900 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <div
                className={`absolute left-0 top-full w-64 rounded-xl bg-white shadow-lg z-[200] dropdown ${openDropdown === 'resources' ? 'block' : 'hidden'}`}
                role="menu"
                style={{ marginTop: '-1px' }}
              >
                <Link href="/blog" className="block px-6 py-3 text-brand-300 hover:text-blue-900 hover:bg-blue-100/20 transition-all rounded-t-xl">
                  <span className="flex items-center gap-3">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
                    </svg>
                    Blog & Cazuri
                  </span>
                </Link>
                <Link href="/whats-new" className="block px-6 py-3 text-brand-300 hover:text-blue-900 hover:bg-blue-100/20 transition-all">
                  <span className="flex items-center gap-3">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    Noutăți
                  </span>
                </Link>
                <Link href="/support" className="block px-6 py-3 text-brand-300 hover:text-blue-900 hover:bg-blue-100/20 transition-all">
                  <span className="flex items-center gap-3">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    Suport
                  </span>
                </Link>
                <Link href="/community" className="block px-6 py-3 text-brand-300 hover:text-blue-900 hover:bg-blue-100/20 transition-all rounded-b-xl">
                  <span className="flex items-center gap-3">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    Comunitate
                  </span>
                </Link>
              </div>
            </div>
            {/* Restul linkurilor simple */}
            <Link href="/pricing" className={`transition-all duration-300 magnetic-hover relative group px-4 py-2 ${
              isOverDemo ? 'text-white hover:text-gray-200' : 'text-brand-300 hover:text-blue-900'
            }`}>
              Pricing
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-900 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/company" className={`transition-all duration-300 magnetic-hover relative group px-4 py-2 ${
              isOverDemo ? 'text-white hover:text-gray-200' : 'text-brand-300 hover:text-blue-900'
            }`}>
              Company
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-900 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>
          
          {/* Desktop CTA & Sign in Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Link href="https://preview--kallina.lovable.app/auth" className="btn-secondary px-6 py-2 rounded-lg font-semibold border border-black text-black bg-white hover:bg-blue-50 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200">
              Sign in
            </Link>
            <button className="btn-primary btn-magnetic animate-pulse-glow">
              Get Started
            </button>
          </div>

          {/* Mobile Burger Menu Button */}
          <button
            onClick={() => {
              console.log('Burger clicked, current state:', isMobileMenuOpen);
              setIsMobileMenuOpen(!isMobileMenuOpen);
            }}
            className={`md:hidden relative z-[10000] w-10 h-10 flex flex-col justify-center items-center transition-all duration-300 border-2 border-transparent hover:border-brand-300/30 rounded ${
              isOverDemo ? 'text-white' : 'text-brand-400'
            }`}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
              isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
            }`}></span>
            <span className={`block h-0.5 w-6 bg-current transition-all duration-300 my-1 ${
              isMobileMenuOpen ? 'opacity-0' : ''
            }`}></span>
            <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
              isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
            }`}></span>
          </button>
        </div>

        {/* Mobile Navigation Menu - Simplified */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-x-0 bg-white shadow-lg z-[9998] border-t" style={{ top: '64px', minHeight: '400px' }}>
            <nav className="p-6">
              <div className="space-y-4">
                {/* Simple Menu Items */}
                {/* ...existing code... */}
                <div className="py-4 border-b border-gray-200">
                  <button
                    onClick={() => setOpenMobileDropdown(openMobileDropdown === 'products' ? null : 'products')}
                    className="flex items-center justify-between w-full text-left text-blue-900 font-semibold text-lg"
                  >
                    Products
                    <span className="text-xl">{openMobileDropdown === 'products' ? '−' : '+'}</span>
                  </button>
                  {openMobileDropdown === 'products' && (
                    <div className="mt-3 pl-4 space-y-2">
                      <Link href="/products" className="block text-gray-600 py-1" onClick={() => setIsMobileMenuOpen(false)}>Motorul AI</Link>
                      <Link href="/products" className="block text-gray-600 py-1" onClick={() => setIsMobileMenuOpen(false)}>Infrastructura Globală</Link>
                      <Link href="/products" className="block text-gray-600 py-1" onClick={() => setIsMobileMenuOpen(false)}>Suite Enterprise</Link>
                    </div>
                  )}
                </div>
                {/* ...existing code... */}
                <div className="py-4 border-b border-gray-200">
                  <button
                    onClick={() => setOpenMobileDropdown(openMobileDropdown === 'solutions' ? null : 'solutions')}
                    className="flex items-center justify-between w-full text-left text-blue-900 font-semibold text-lg"
                  >
                    Solutions
                    <span className="text-xl">{openMobileDropdown === 'solutions' ? '−' : '+'}</span>
                  </button>
                  {openMobileDropdown === 'solutions' && (
                    <div className="mt-3 pl-4 space-y-2">
                      <Link href="/solutions" className="block text-gray-600 py-1" onClick={() => setIsMobileMenuOpen(false)}>Call Centers</Link>
                      <Link href="/solutions" className="block text-gray-600 py-1" onClick={() => setIsMobileMenuOpen(false)}>Remote Work</Link>
                      <Link href="/solutions" className="block text-gray-600 py-1" onClick={() => setIsMobileMenuOpen(false)}>Healthcare</Link>
                    </div>
                  )}
                </div>
                {/* ...existing code... */}
                <div className="py-4 border-b border-gray-200">
                  <button
                    onClick={() => setOpenMobileDropdown(openMobileDropdown === 'research' ? null : 'research')}
                    className="flex items-center justify-between w-full text-left text-blue-900 font-semibold text-lg"
                  >
                    Research
                    <span className="text-xl">{openMobileDropdown === 'research' ? '−' : '+'}</span>
                  </button>
                  {openMobileDropdown === 'research' && (
                    <div className="mt-3 pl-4 space-y-2">
                      <Link href="/research" className="block text-gray-600 py-1" onClick={() => setIsMobileMenuOpen(false)}>Cercetare AI</Link>
                      <Link href="/research" className="block text-gray-600 py-1" onClick={() => setIsMobileMenuOpen(false)}>Publicații</Link>
                      <Link href="/research" className="block text-gray-600 py-1" onClick={() => setIsMobileMenuOpen(false)}>Inovații</Link>
                    </div>
                  )}
                </div>
                {/* ...existing code... */}
                <div className="py-4 border-b border-gray-200">
                  <button
                    onClick={() => setOpenMobileDropdown(openMobileDropdown === 'resources' ? null : 'resources')}
                    className="flex items-center justify-between w-full text-left text-blue-900 font-semibold text-lg"
                  >
                    Resources
                    <span className="text-xl">{openMobileDropdown === 'resources' ? '−' : '+'}</span>
                  </button>
                  {openMobileDropdown === 'resources' && (
                    <div className="mt-3 pl-4 space-y-2">
                      <Link href="/resources" className="block text-gray-600 py-1" onClick={() => setIsMobileMenuOpen(false)}>Documentație</Link>
                      <Link href="/resources" className="block text-gray-600 py-1" onClick={() => setIsMobileMenuOpen(false)}>Tutoriale</Link>
                      <Link href="/resources" className="block text-gray-600 py-1" onClick={() => setIsMobileMenuOpen(false)}>Suport</Link>
                    </div>
                  )}
                </div>
                {/* ...existing code... */}
                <div className="py-4 border-b border-gray-200">
                  <Link href="/pricing" className="block text-blue-900 font-semibold text-lg" onClick={() => setIsMobileMenuOpen(false)}>Pricing</Link>
                </div>
                {/* ...existing code... */}
                <div className="py-4 border-b border-gray-200">
                  <Link href="/company" className="block text-blue-900 font-semibold text-lg" onClick={() => setIsMobileMenuOpen(false)}>Company</Link>
                </div>
                {/* Sign in button for mobile */}
                <div className="pt-4">
                  <Link 
                    href="/auth"
                    className="w-full block text-center border border-blue-600 text-blue-700 bg-white py-3 px-6 rounded-lg font-semibold mb-2 hover:bg-blue-50 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Sign in
                  </Link>
                  <button 
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
