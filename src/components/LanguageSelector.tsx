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
      <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-gray-400">
        <span className="text-lg">🇷🇴</span>
        <span className="text-sm font-medium text-white hidden sm:block">Loading...</span>
      </div>
    )
  }

  const languages = [
    { code: 'ro' as Language, name: 'Română', flag: '🇷🇴' },
    { code: 'en' as Language, name: 'English', flag: '🇺🇸' }
  ]

  const currentLanguage = languages.find(lang => lang.code === language)

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-gray-400 hover:bg-white/20 transition-all duration-200"
        aria-label="Selectează limba"
      >
        <span className="text-lg">{currentLanguage?.flag}</span>
        <span className="text-sm font-medium text-gray-950 hidden sm:block">
          {currentLanguage?.name}
        </span>
        <svg 
          className={`w-4 h-4 text-gray-950 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-400 min-w-[140px] z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code)
                setIsOpen(false)
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-50 transition-colors first:rounded-t-lg last:rounded-b-lg ${
                lang.code === language ? 'bg-white/20 text-gray-950 border border-gray-400' : 'text-gray-700'
              }`}
            >
              <span className="text-lg">{lang.flag}</span>
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
