'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'
import { useEffect, useState } from 'react'

// Simple animated grid background
function AnimatedGridBG() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <svg width="100%" height="100%" className="w-full h-full animate-pulse" style={{opacity:0.08}}>
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#000" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  )
}

export function CalendarSection() {
  const { ref, classes, isVisible } = useScrollReveal('up')
  const [selectedDate, setSelectedDate] = useState(15)
  const [aiMessages, setAiMessages] = useState([
    { from: 'ai', text: 'Bună! Cu ce te pot ajuta astăzi?' },
    { from: 'user', text: 'Aș vrea să reprogramez întâlnirea pentru 22 iulie.' },
    { from: 'ai', text: 'Sigur! Am actualizat calendarul pentru 22 iulie. Mai pot face ceva pentru tine?' }
  ])

  // Animate calendar update when user "schedules" a new date
  function handleDateClick(day: number) {
    setSelectedDate(day)
    setAiMessages([
      ...aiMessages,
      { from: 'user', text: `Aș vrea să reprogramez întâlnirea pentru ${day} iulie.` },
      { from: 'ai', text: `Perfect! Întâlnirea a fost mutată pe ${day} iulie.` }
    ])
  }

  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-10" title="Calendarul care gândește și acționează pentru tine cu AI avansat">
      <AnimatedGridBG />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Header */}
        <div className={`text-center mb-8 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Calendar AI Revolution
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Calendarul care gândește și acționează pentru tine cu AI avansat. Programează întâlniri doar vorbind cu asistentul tău digital.
          </p>
        </div>
        {/* AI Chat Simulation */}
        <div className="max-w-xl mx-auto mb-10">
          <div className="bg-gray-900 rounded-xl shadow-lg p-6 flex flex-col gap-3 animate-fade-in">
            {aiMessages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.from === 'ai' ? 'justify-start' : 'justify-end'}`}>
                <div className={`px-4 py-2 rounded-2xl text-sm max-w-xs break-words shadow-md transition-all duration-300 ${
                  msg.from === 'ai'
                    ? 'bg-gradient-to-br from-blue-600 to-indigo-700 text-white'
                    : 'bg-white text-black border border-gray-200'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Animated Calendar */}
        <div className="flex flex-col items-center justify-center gap-8 mb-12 transition-all duration-1000 delay-200">
          <div className="w-full max-w-xl bg-white border border-gray-200 rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-black">Iulie 2025</h3>
              <div className="space-x-2">
                <button className="bg-black text-white px-3 py-1 rounded hover:bg-gray-800 transition-colors duration-200">Prev</button>
                <button className="bg-black text-white px-3 py-1 rounded hover:bg-gray-800 transition-colors duration-200">Next</button>
              </div>
            </div>
            <div className="grid grid-cols-7 gap-2 text-center">
              {['D','L','Ma','Mi','J','V','S'].map(day => (
                <div key={day} className="text-gray-500 font-medium">{day}</div>
              ))}
              {/* July 2025 starts on Tuesday (so 1 empty cell) */}
              <div></div>
              {Array.from({length: 31}, (_,i) => (
                <div
                  key={i+1}
                  className={`py-2 rounded-lg cursor-pointer font-medium transition-all duration-300
                    ${selectedDate === i+1
                      ? 'bg-gradient-to-br from-blue-600 to-indigo-700 text-white scale-110 shadow-lg'
                      : 'text-black hover:bg-gray-100'}
                  `}
                  onClick={() => handleDateClick(i+1)}
                  style={{position:'relative'}}
                >
                  {i+1}
                  {selectedDate === i+1 && (
                    <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full animate-bounce shadow">AI</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Call to action */}
        <div className={`text-center mt-4 transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>
          <p className="text-gray-600 mb-6">
            Calendar AI inteligent, orchestrare campanii, automatizare programări. Încearcă acum!
          </p>
          <button className="bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200">
            Programează cu AI
          </button>
        </div>
      </div>
    </section>
  )
}
