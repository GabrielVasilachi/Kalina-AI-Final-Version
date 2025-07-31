'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useLanguage } from '../../lib/i18n'

import { LanguageSelector } from '../LanguageSelector'

type NavigationHeaderProps = {
  logoPosition?: 'left' | 'center' | 'right';
}

export function NavigationHeader({ logoPosition = 'left' }: NavigationHeaderProps) {
  const { t } = useLanguage()
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

  // Sponsors ticker line - perfect seamless scrolling with links
  const sponsorsData = [
    {
      text: 'We won 1st Place at ElevenLabs Hackathon – $20,000 for our AI Agents',
      url: '/blog/elevenlabs-hackathon-winner',
    },
    {
      text: 'EBRD selected Aichat.md for the prestigious Star Venture Program',
      url: '/blog/ebrd-star-venture-program',
    },
    {
      text: '2nd Place at Sevan Startup Summit – $6,000 award for Aichat.md',
      url: '/blog/sevan-startup-summit-second-place',
    },
    {
      text: 'Winner of the YoHealth Challenge at Sevan – $6,000 for Aichat.md',
      url: '/blog/sevan-startup-summit-second-place',
    },
    {
      text: 'Backed by Google Cloud – $25K grant to scale our AI infrastructure',
      url: '/blog/google-cloud-partnership-grant',
    },
    {
      text: 'Part of UpNext Accelerator by Dreamups – with $10K funding to grow Aichat.md',
      url: '/blog/upnext-accelerator-partnership',
    },
  ];

  // Create seamless scrolling by tripling the sponsor list for continuous flow
  const duplicatedSponsors = [...sponsorsData, ...sponsorsData, ...sponsorsData];

  // Ticker styles with improved smoothness
  const tickerStyles = {
    position: 'fixed' as const,
    top: 0,
    left: 0,
    width: '100%',
    height: '32px',
    background: 'linear-gradient(90deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)',
    overflow: 'hidden',
    zIndex: 10000,
    borderBottom: '1px solid rgba(255,255,255,0.1)',
    display: 'flex',
    alignItems: 'center',
    boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
  };

  const tickerTrackStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: '120px', // Perfect spacing between sponsors
    whiteSpace: 'nowrap' as const,
    animation: 'ticker-smooth-roll 120s linear infinite',
    willChange: 'transform', // Optimize for smooth animation
  };

  const tickerItemStyles = {
    color: '#ffffff',
    fontWeight: 600,
    fontSize: '14px',
    letterSpacing: '0.5px',
    display: 'inline-block',
    textShadow: '0 1px 2px rgba(0,0,0,0.3)',
    minWidth: 'max-content',
    opacity: 0.95,
    cursor: 'pointer',
    transition: 'text-decoration 0.2s, transform 0.18s cubic-bezier(0.4,0,0.2,1)',
    textDecoration: 'none',
  };

  // Pause ticker on hover of any item
  const [isTickerPaused, setIsTickerPaused] = useState(false);

  // Add improved ticker keyframes with smoother animation
  useEffect(() => {
    if (typeof window !== 'undefined' && !document.getElementById('ticker-keyframes')) {
      const style = document.createElement('style');
      style.id = 'ticker-keyframes';
      style.innerHTML = `
        @keyframes ticker-smooth-roll { 
          0% { 
            transform: translateX(0%); 
          } 
          100% { 
            transform: translateX(-33.333%); 
          } 
        }
        .ticker-track {
          animation-play-state: running;
        }
        .ticker-track.ticker-paused {
          animation-play-state: paused !important;
        }
      `;
      document.head.appendChild(style);
    }
  }, []);
  return (
    <>
      {/* Perfect sponsors ticker line - smooth and seamless, now with links and pause on hover */}
      <div style={tickerStyles}>
        <div
          style={{ ...tickerTrackStyles, animationPlayState: isTickerPaused ? 'paused' : 'running' }}
          className={`ticker-track${isTickerPaused ? ' ticker-paused' : ''}`}
        >
          {duplicatedSponsors.map((item, idx) => (
            <a
              href={item.url}
              key={`sponsor-${idx}`}
              style={tickerItemStyles}
              onMouseEnter={e => {
                setIsTickerPaused(true);
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={e => {
                setIsTickerPaused(false);
                e.currentTarget.style.transform = 'none';
              }}
              tabIndex={0}
              onFocus={e => {
                setIsTickerPaused(true);
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onBlur={e => {
                setIsTickerPaused(false);
                e.currentTarget.style.transform = 'none';
              }}
              className="hover:underline focus:underline"
            >
              {item.text}
            </a>
          ))}
        </div>
      </div>
      <header className={`fixed left-0 right-0 z-[9999] transition-all duration-500 backdrop-blur-xl bg-white/30` +
        (isScrolled 
          ? ' glass border-b border-neutral-200/20' 
          : ' bg-transparent border-b border-transparent')
      } style={{overflow: 'visible', top: '32px'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-50">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link
              href="/"
              className={`text-2xl font-bold magnetic-hover text-shimmer animate-gradient transition-colors duration-300 whitespace-nowrap mr-12 ${
                isOverDemo ? 'text-white' : 'text-brand-400'
              }`}
            >
              Kallina AI
            </Link>
            <nav className="hidden xl:flex items-center gap-x-8 z-[100] whitespace-nowrap">
            {/* PRODUCTS DROPDOWN */}
            <div
              className="relative group/menu"
              onMouseEnter={() => setOpenDropdown('products')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                className={`transition-all duration-300 magnetic-hover relative group px-4 py-2 ${
                  isOverDemo ? 'text-white hover:text-gray-200' : 'text-gray-600 hover:text-black'
                }`}
                aria-haspopup="true"
                aria-expanded={openDropdown === 'products'}
                type="button"
              >
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  {t('nav.products')}
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
              </button>
              <div
                className={`absolute left-0 top-full w-64 rounded-xl bg-white shadow-lg z-[200] dropdown ${openDropdown === 'products' ? 'block' : 'hidden'}`}
                role="menu"
                style={{ marginTop: '-1px' }}
              >
                <Link href="/platform" className="block px-6 py-3 text-gray-600 hover:text-black hover:bg-blue-100/20 transition-all rounded-t-xl">
                  <span className="flex items-center gap-3">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    {t('products.platform')}
                  </span>
                </Link>
                <Link href="/ai-agents" className="block px-6 py-3 text-gray-600 hover:text-black hover:bg-blue-100/20 transition-all">
                  <span className="flex items-center gap-3">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"/>
                    </svg>
                    {t('products.agents')}
                  </span>
                </Link>
                <Link href="/features" className="block px-6 py-3 text-gray-600 hover:text-black hover:bg-blue-100/20 transition-all">
                  <span className="flex items-center gap-3">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                    </svg>
                    {t('products.features')}
                  </span>
                </Link>
                <Link href="/integrations" className="block px-6 py-3 text-gray-600 hover:text-black hover:bg-blue-100/20 transition-all rounded-b-xl">
                  <span className="flex items-center gap-3">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    {t('products.integrations')}
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
                  isOverDemo ? 'text-white hover:text-gray-200' : 'text-gray-600 hover:text-black'
                }`}
                aria-haspopup="true"
                aria-expanded={openDropdown === 'solutions'}
                type="button"
              >
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                  </svg>
                  {t('nav.solutions')}
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
              </button>
              <div
                className={`absolute left-0 top-full w-64 rounded-xl bg-white shadow-lg z-[200] dropdown ${openDropdown === 'solutions' ? 'block' : 'hidden'}`}
                role="menu"
                style={{ marginTop: '-1px' }}
              >
                <Link href="/healthcare-ai" className="block px-6 py-3 text-gray-600 hover:text-black hover:bg-blue-100/20 transition-all rounded-t-xl">
                  <span className="flex items-center gap-3">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    {t('solutions.healthcare')}
                  </span>
                </Link>
                <Link href="/restaurants" className="block px-6 py-3 text-gray-600 hover:text-black hover:bg-blue-100/20 transition-all">
                  <span className="flex items-center gap-3">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    {t('solutions.restaurants')}
                  </span>
                </Link>
                <Link href="/enterprise" className="block px-6 py-3 text-gray-600 hover:text-black hover:bg-blue-100/20 transition-all rounded-b-xl">
                  <span className="flex items-center gap-3">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                    </svg>
                    {t('solutions.enterprise')}
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
                  isOverDemo ? 'text-white hover:text-gray-200' : 'text-gray-600 hover:text-black'
                }`}
                aria-haspopup="true"
                aria-expanded={openDropdown === 'research'}
                type="button"
              >
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  {t('nav.research')}
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
              </button>
              <div
                className={`absolute left-0 top-full w-64 rounded-xl bg-white shadow-lg z-[200] dropdown ${openDropdown === 'research' ? 'block' : 'hidden'}`}
                role="menu"
                style={{ marginTop: '-1px' }}
              >
                <Link href="/developers" className="block px-6 py-3 text-gray-600 hover:text-black hover:bg-blue-100/20 transition-all rounded-t-xl">
                  <span className="flex items-center gap-3">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
                    </svg>
                    {t('research.developers')}
                  </span>
                </Link>
                <Link href="/api-documentation" className="block px-6 py-3 text-gray-600 hover:text-black hover:bg-blue-100/20 transition-all">
                  <span className="flex items-center gap-3">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                    </svg>
                    {t('research.apiSdk')}
                  </span>
                </Link>
                <Link href="/analytics" className="block px-6 py-3 text-gray-600 hover:text-black hover:bg-blue-100/20 transition-all">
                  <span className="flex items-center gap-3">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                    </svg>
                    {t('research.analytics')}
                  </span>
                </Link>
                <Link href="/getting-started" className="block px-6 py-3 text-gray-600 hover:text-black hover:bg-blue-100/20 transition-all rounded-b-xl">
                  <span className="flex items-center gap-3">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    {t('research.quickGuide')}
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
                  isOverDemo ? 'text-white hover:text-gray-200' : 'text-gray-600 hover:text-black'
                }`}
                aria-haspopup="true"
                aria-expanded={openDropdown === 'resources'}
                type="button"
              >
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
                  </svg>
                  {t('nav.resources')}
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
              </button>
              <div
                className={`absolute left-0 top-full w-64 rounded-xl bg-white shadow-lg z-[200] dropdown ${openDropdown === 'resources' ? 'block' : 'hidden'}`}
                role="menu"
                style={{ marginTop: '-1px' }}
              >
                <Link href="/blog" className="block px-6 py-3 text-gray-600 hover:text-black hover:bg-blue-100/20 transition-all rounded-t-xl">
                  <span className="flex items-center gap-3">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
                    </svg>
                    {t('resources.blogCases')}
                  </span>
                </Link>
                <Link href="/whats-new" className="block px-6 py-3 text-gray-600 hover:text-black hover:bg-blue-100/20 transition-all">
                  <span className="flex items-center gap-3">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    {t('resources.news')}
                  </span>
                </Link>
                <Link href="/support" className="block px-6 py-3 text-gray-600 hover:text-black hover:bg-blue-100/20 transition-all">
                  <span className="flex items-center gap-3">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    {t('resources.support')}
                  </span>
                </Link>
                <Link href="/community" className="block px-6 py-3 text-gray-600 hover:text-black hover:bg-blue-100/20 transition-all rounded-b-xl">
                  <span className="flex items-center gap-3">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    {t('resources.community')}
                  </span>
                </Link>
              </div>
            </div>
            {/* Restul linkurilor simple */}
            <Link href="/pricing" className={`transition-all duration-300 magnetic-hover relative group px-4 py-2 ${
              isOverDemo ? 'text-white hover:text-gray-200' : 'text-gray-600 hover:text-black'
            }`}>
              {t('nav.pricing')}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/company" className={`transition-all duration-300 magnetic-hover relative group px-4 py-2 ${
              isOverDemo ? 'text-white hover:text-gray-200' : 'text-gray-600 hover:text-black'
            }`}>
              {t('nav.company')}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
            </Link>
            </nav>
          </div>
          
          {/* Desktop CTA & Sign in Buttons */}
          <div className="hidden xl:flex items-center gap-x-3 ml-auto">
            <LanguageSelector />
            <Link href="https://preview--kallina.lovable.app/auth" className="whitespace-nowrap px-5 py-2 text-sm rounded-lg border border-gray-300 bg-white text-black font-semibold hover:bg-gray-50 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-200" style={{minWidth:'90px', height:'36px'}}>
              {t('nav.signIn')}
            </Link>
            <Link href="/getting-started" className="whitespace-nowrap px-5 py-2 text-sm rounded-lg bg-black text-white font-semibold hover:bg-gray-800 transition-colors animate-pulse-glow" style={{minWidth:'90px', height:'36px'}}>
              {t('nav.getStarted')}
            </Link>
          </div>

          {/* Mobile Burger Menu Button */}
          <button
            onClick={() => {
              console.log('Burger clicked, current state:', isMobileMenuOpen);
              setIsMobileMenuOpen(!isMobileMenuOpen);
            }}
            className={`xl:hidden relative z-[10000] w-10 h-10 flex flex-col justify-center items-center transition-all duration-300 border-2 border-transparent hover:border-gray-600/30 rounded mr-4 ${
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

        {/* Mobile Navigation Menu - Full Featured */}
        {isMobileMenuOpen && (
          <div className="xl:hidden fixed inset-x-0 bg-white shadow-lg z-[9998] border-t overflow-y-auto" style={{ top: '80px', maxHeight: 'calc(100vh - 80px)' }}>
            <nav className="p-4">
              <div className="space-y-1">
                {/* PRODUCTS DROPDOWN */}
                <div className="border-b border-gray-100">
                  <button
                    onClick={() => setOpenMobileDropdown(openMobileDropdown === 'products' ? null : 'products')}
                    className="flex items-center justify-between w-full text-left text-gray-600 font-semibold text-lg py-3 hover:text-black transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                      {t('nav.products')}
                    </span>
                    <svg 
                      className={`w-5 h-5 transition-transform duration-200 ${openMobileDropdown === 'products' ? 'rotate-180' : ''}`} 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                  {openMobileDropdown === 'products' && (
                    <div className="pb-3 pl-6 space-y-2">
                      <Link href="/platform" className="flex items-center gap-3 text-gray-600 py-2 hover:text-black transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                        {t('products.platform')}
                      </Link>
                      <Link href="/ai-agents" className="flex items-center gap-3 text-gray-600 py-2 hover:text-black transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"/>
                        </svg>
                        {t('products.agents')}
                      </Link>
                      <Link href="/features" className="flex items-center gap-3 text-gray-600 py-2 hover:text-black transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                        </svg>
                        {t('products.features')}
                      </Link>
                      <Link href="/integrations" className="flex items-center gap-3 text-gray-600 py-2 hover:text-black transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                        {t('products.integrations')}
                      </Link>
                    </div>
                  )}
                </div>

                {/* SOLUTIONS DROPDOWN */}
                <div className="border-b border-gray-100">
                  <button
                    onClick={() => setOpenMobileDropdown(openMobileDropdown === 'solutions' ? null : 'solutions')}
                    className="flex items-center justify-between w-full text-left text-gray-600 font-semibold text-lg py-3 hover:text-black transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                      </svg>
                      {t('nav.solutions')}
                    </span>
                    <svg 
                      className={`w-5 h-5 transition-transform duration-200 ${openMobileDropdown === 'solutions' ? 'rotate-180' : ''}`} 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                  {openMobileDropdown === 'solutions' && (
                    <div className="pb-3 pl-6 space-y-2">
                      <Link href="/healthcare-ai" className="flex items-center gap-3 text-gray-600 py-2 hover:text-black transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                        {t('solutions.healthcare')}
                      </Link>
                      <Link href="/restaurants" className="flex items-center gap-3 text-gray-600 py-2 hover:text-black transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                        {t('solutions.restaurants')}
                      </Link>
                      <Link href="/enterprise" className="flex items-center gap-3 text-gray-600 py-2 hover:text-black transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                        </svg>
                        {t('solutions.enterprise')}
                      </Link>
                    </div>
                  )}
                </div>

                {/* RESEARCH DROPDOWN */}
                <div className="border-b border-gray-100">
                  <button
                    onClick={() => setOpenMobileDropdown(openMobileDropdown === 'research' ? null : 'research')}
                    className="flex items-center justify-between w-full text-left text-gray-600 font-semibold text-lg py-3 hover:text-black transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                      {t('nav.research')}
                    </span>
                    <svg 
                      className={`w-5 h-5 transition-transform duration-200 ${openMobileDropdown === 'research' ? 'rotate-180' : ''}`} 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                  {openMobileDropdown === 'research' && (
                    <div className="pb-3 pl-6 space-y-2">
                      <Link href="/developers" className="flex items-center gap-3 text-gray-600 py-2 hover:text-black transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
                        </svg>
                        {t('research.developers')}
                      </Link>
                      <Link href="/api-documentation" className="flex items-center gap-3 text-gray-600 py-2 hover:text-black transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                        </svg>
                        {t('research.apiSdk')}
                      </Link>
                      <Link href="/analytics" className="flex items-center gap-3 text-gray-600 py-2 hover:text-black transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                        </svg>
                        {t('research.analytics')}
                      </Link>
                      <Link href="/getting-started" className="flex items-center gap-3 text-gray-600 py-2 hover:text-black transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                        {t('research.quickGuide')}
                      </Link>
                    </div>
                  )}
                </div>

                {/* RESOURCES DROPDOWN */}
                <div className="border-b border-gray-100">
                  <button
                    onClick={() => setOpenMobileDropdown(openMobileDropdown === 'resources' ? null : 'resources')}
                    className="flex items-center justify-between w-full text-left text-gray-600 font-semibold text-lg py-3 hover:text-black transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
                      </svg>
                      {t('nav.resources')}
                    </span>
                    <svg 
                      className={`w-5 h-5 transition-transform duration-200 ${openMobileDropdown === 'resources' ? 'rotate-180' : ''}`} 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                  {openMobileDropdown === 'resources' && (
                    <div className="pb-3 pl-6 space-y-2">
                      <Link href="/blog" className="flex items-center gap-3 text-gray-600 py-2 hover:text-black transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
                        </svg>
                        {t('resources.blogCases')}
                      </Link>
                      <Link href="/whats-new" className="flex items-center gap-3 text-gray-600 py-2 hover:text-black transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                        {t('resources.news')}
                      </Link>
                      <Link href="/support" className="flex items-center gap-3 text-gray-600 py-2 hover:text-black transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                        {t('resources.support')}
                      </Link>
                      <Link href="/community" className="flex items-center gap-3 text-gray-600 py-2 hover:text-black transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                        {t('resources.community')}
                      </Link>
                    </div>
                  )}
                </div>

                {/* Simple Links */}
                <div className="border-b border-gray-100">
                  <Link href="/pricing" className="flex items-center text-gray-600 font-semibold text-lg py-3 hover:text-black transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                    {t('nav.pricing')}
                  </Link>
                </div>

                <div className="border-b border-gray-100">
                  <Link href="/company" className="flex items-center text-gray-600 font-semibold text-lg py-3 hover:text-black transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                    {t('nav.company')}
                  </Link>
                </div>

                {/* Language Selector for Mobile */}
                <div className="border-b border-gray-100 py-3">
                  <LanguageSelector />
                </div>

                {/* CTA Buttons */}
                <div className="pt-4 space-y-3">
                  <Link 
                    href="https://preview--kallina.lovable.app/auth"
                    className="w-full block text-center border-2 border-black text-black bg-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-50 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-200 mobile-nav-button"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t('nav.signIn')}
                  </Link>
                  <Link 
                    href="/getting-started"
                    className="w-full block text-center bg-black text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-800 transition-colors mobile-nav-button"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t('nav.getStarted')}
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
    </>
  )
}
