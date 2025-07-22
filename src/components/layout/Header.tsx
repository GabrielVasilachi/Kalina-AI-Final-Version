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
                Products
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-900 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <div
                className={`absolute left-0 top-full w-56 rounded-xl bg-white shadow-lg z-[200] dropdown ${openDropdown === 'products' ? 'block' : 'hidden'}`}
                role="menu"
                style={{ marginTop: '-1px' }}
              >
                <Link href="/products" className="block px-6 py-3 text-brand-300 hover:text-blue-900 hover:bg-blue-100/20 transition-all rounded-t-xl">Motorul AI</Link>
                <Link href="/products" className="block px-6 py-3 text-brand-300 hover:text-blue-900 hover:bg-blue-100/20 transition-all">Infrastructura Globală</Link>
                <Link href="/products" className="block px-6 py-3 text-brand-300 hover:text-blue-900 hover:bg-blue-100/20 transition-all rounded-b-xl">Suite Enterprise</Link>
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
                Solutions
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-900 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <div
                className={`absolute left-0 top-full w-56 rounded-xl bg-white shadow-lg z-[200] dropdown ${openDropdown === 'solutions' ? 'block' : 'hidden'}`}
                role="menu"
                style={{ marginTop: '-1px' }}
              >
                <Link href="/solutions" className="block px-6 py-3 text-brand-300 hover:text-blue-900 hover:bg-blue-100/20 transition-all rounded-t-xl">Call Centers</Link>
                <Link href="/solutions" className="block px-6 py-3 text-brand-300 hover:text-blue-900 hover:bg-blue-100/20 transition-all">Remote Work</Link>
                <Link href="/solutions" className="block px-6 py-3 text-brand-300 hover:text-blue-900 hover:bg-blue-100/20 transition-all rounded-b-xl">Healthcare</Link>
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
                Research
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-900 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <div
                className={`absolute left-0 top-full w-56 rounded-xl bg-white shadow-lg z-[200] dropdown ${openDropdown === 'research' ? 'block' : 'hidden'}`}
                role="menu"
                style={{ marginTop: '-1px' }}
              >
                <Link href="/research" className="block px-6 py-3 text-brand-300 hover:text-blue-900 hover:bg-blue-100/20 transition-all rounded-t-xl">Cercetare AI</Link>
                <Link href="/research" className="block px-6 py-3 text-brand-300 hover:text-blue-900 hover:bg-blue-100/20 transition-all">Publicații</Link>
                <Link href="/research" className="block px-6 py-3 text-brand-300 hover:text-blue-900 hover:bg-blue-100/20 transition-all rounded-b-xl">Inovații</Link>
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
                Resources
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-900 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <div
                className={`absolute left-0 top-full w-56 rounded-xl bg-white shadow-lg z-[200] dropdown ${openDropdown === 'resources' ? 'block' : 'hidden'}`}
                role="menu"
                style={{ marginTop: '-1px' }}
              >
                <Link href="/resources" className="block px-6 py-3 text-brand-300 hover:text-blue-900 hover:bg-blue-100/20 transition-all rounded-t-xl">Documentație</Link>
                <Link href="/resources" className="block px-6 py-3 text-brand-300 hover:text-blue-900 hover:bg-blue-100/20 transition-all">Tutoriale</Link>
                <Link href="/resources" className="block px-6 py-3 text-brand-300 hover:text-blue-900 hover:bg-blue-100/20 transition-all rounded-b-xl">Suport</Link>
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
            <Link href="/auth" className="btn-secondary px-6 py-2 rounded-lg font-semibold border border-black text-black bg-white hover:bg-blue-50 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200">
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
