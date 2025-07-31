'use client'

import { useLanguage, useHydration, Language } from '@/lib/i18n'
import { useState } from 'react'

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const hasHydrated = useHydration()

  // Don't render until hydrated to prevent hydration mismatch
  if (!hasHydrated) {
    return (
      <div 
        className="flex items-center gap-2 text-white"
        style={{
          minWidth: '80px',
          height: '32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgba(255, 255, 255, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          borderRadius: '16px',
          padding: '8px 12px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
        }}
      >
        <span className="text-sm">RO</span>
        <span className="text-xs font-medium hidden sm:block">Loading...</span>
      </div>
    )
  }

  const languages = [
    { code: 'ro' as Language, name: 'Română', flag: 'RO' },
    { code: 'en' as Language, name: 'English', flag: 'EN' }
  ]

  const currentLanguage = languages.find(lang => lang.code === language)

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-black font-semibold focus:outline-none text-sm"
        style={{
          minWidth: '80px',
          height: '32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgba(255, 255, 255, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          borderRadius: '16px',
          padding: '8px 12px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
          transition: 'background 0.3s ease, box-shadow 0.3s ease, transform 0.2s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'
          e.currentTarget.style.boxShadow = '0 6px 24px rgba(0, 0, 0, 0.15)'
          e.currentTarget.style.transform = 'translateY(-1px)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'
          e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)'
          e.currentTarget.style.transform = 'translateY(0px)'
        }}
        aria-label="Selectează limba"
      >
        <span className="text-sm">{currentLanguage?.flag}</span>
        <span className="text-sm font-medium text-black hidden sm:block">
          {currentLanguage?.name}
        </span>
        <svg 
          className={`w-4 h-4 text-black transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div 
          className="absolute top-full right-0 mt-2 min-w-[140px] z-50"
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            borderRadius: '16px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
          }}
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code)
                setIsOpen(false)
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-all first:rounded-t-2xl last:rounded-b-2xl ${
                lang.code === language ? 'text-black font-semibold' : 'text-gray-700'
              }`}
              style={{
                background: lang.code === language ? 'rgba(255, 255, 255, 0.3)' : 'transparent',
                transition: 'background 0.2s ease'
              }}
              onMouseEnter={(e) => {
                if (lang.code !== language) {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'
                }
              }}
              onMouseLeave={(e) => {
                if (lang.code !== language) {
                  e.currentTarget.style.background = 'transparent'
                }
              }}
            >
              <span className="text-sm">{lang.flag}</span>
              <span className="font-medium">{lang.name}</span>
              {lang.code === language && (
                <svg className="w-4 h-4 ml-auto text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
