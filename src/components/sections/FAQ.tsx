"use client"

import { useState, useEffect } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

export function FAQ() {
  const { ref, classes, isVisible } = useScrollReveal('up')
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const sectionRef = ref
  const [isHeaderOverFAQ, setIsHeaderOverFAQ] = useState(false)
  // Header overlap detection
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef?.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const headerHeight = 80 // Header height
      // Check if header is overlapping with FAQ section
      const isOverlapping = rect.top <= headerHeight && rect.bottom >= headerHeight
      setIsHeaderOverFAQ(isOverlapping)
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [sectionRef])
  useEffect(() => {
    if (isHeaderOverFAQ) {
      window.dispatchEvent(new CustomEvent('headerOverDemo', { detail: { isOver: true } }))
    } else {
      window.dispatchEvent(new CustomEvent('headerOverDemo', { detail: { isOver: false } }))
    }
  }, [isHeaderOverFAQ])
  const faqs = [
    {
      question: "Care este latența apelurilor voastre?",
      answer: "Infrastructura noastră cu AI oferă latență sub 100ms la nivel global, asigurând conversații în timp real."
    },
    {
      question: "Cât de sigure sunt apelurile?",
      answer: "Toate apelurile folosesc criptare end-to-end cu protocoale de securitate de nivel militar pentru a vă proteja comunicațiile."
    },
    {
      question: "Ce țări sunt suportate?",
      answer: "Oferim acoperire fiabilă în peste 120 de țări cu infrastructură locală pentru performanță optimă."
    },
    {
      question: "Pot integra cu sistemele mele existente?",
      answer: "Da, oferim API-uri și SDK-uri complete pentru integrare fără probleme cu infrastructura actuală."
    }
  ]

  return (
    <section 
      className="section-padding relative overflow-hidden bg-gradient-to-b from-black to-black"
      style={{ clipPath: 'polygon(0 130px, 100% 0, 100% 100%, 0% 100%)', border: 'none', borderBottom: 'none', paddingTop: '230px' }}
    >
      {/* Morphing background elements */}
      <div className="morph-shape-2 absolute top-40 left-10 opacity-20"></div>
      <div className="morph-shape-3 absolute bottom-20 right-20 opacity-30"></div>
      
      <div className="container-width" ref={ref}>
        <div className={`text-center mb-16 ${classes}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-brand-100 mb-6 text-shimmer">
            Întrebări Frecvente
          </h2>
          <p className="text-xl text-brand-100 max-w-2xl mx-auto animate-fade-in-up delay-200">
            Tot ce trebuie să știi despre platforma noastră de apeluri cu AI
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`glass-card rounded-2xl overflow-hidden magnetic-hover transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{
                transitionDelay: `${index * 150}ms`
              }}
            >
              <button
                className="w-full p-6 text-left focus:outline-none group"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                    </span>
                    <h3 className="text-xl font-semibold text-gray-100 group-hover:text-brand-50 transition-colors text-glow">
                      {faq.question}
                    </h3>
                  </div>
                  <div className={`text-brand-200 text-2xl transition-transform duration-300 ${
                    openIndex === index ? 'rotate-45' : 'rotate-0'
                  }`}>
                    +
                  </div>
                </div>
              </button>
              
              <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
                openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-6 pb-6">
                  <div className="pl-12">
                    <p className="text-brand-200 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Contact support card */}
        <div className={`mt-12 text-center transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>
          <div className="glass-card rounded-2xl p-8 max-w-md mx-auto magnetic-hover">
            <div className="text-4xl mb-4">💬</div>
            <h3 className="text-xl font-semibold text-brand-100 mb-2 text-glow">
              Încă ai întrebări?
            </h3>
            <p className="text-brand-200 mb-6">
              Echipa noastră de suport este aici să te ajute 24/7
            </p>
            <button className="btn-primary btn-magnetic animate-pulse-glow">
              Contactează Suportul
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
