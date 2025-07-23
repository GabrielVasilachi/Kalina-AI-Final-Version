'use client'

import { useScrollAnimationReveal } from '@/hooks/useScrollAnimationReveal'
import { NavigationHeader } from '@/components/layout/NavigationHeader'
import { SmoothScrollContextProvider } from '@/components/providers/SmoothScrollContextProvider'

export default function ResearchPage() {
  const { ref, classes, isVisible } = useScrollAnimationReveal('up')

  const research = [
    {
      title: "Procesarea Vocii cu AI",
      date: "2024",
      summary: "Cercetare avansată în algoritmi de îmbunătățire a calității vocii folosind rețele neurale",
      tags: ["AI", "Machine Learning", "Audio Processing"],
      readTime: "5 min"
    },
    {
      title: "Optimizarea Latenței Globale",
      date: "2024", 
      summary: "Studiu asupra metodelor de reducere a latenței în comunicațiile globale",
      tags: ["Networking", "Infrastructure", "Performance"],
      readTime: "8 min"
    },
    {
      title: "Securitatea în Comunicațiile AI",
      date: "2023",
      summary: "Analiza securității și protecției datelor în sistemele de comunicații AI",
      tags: ["Security", "Privacy", "Encryption"],
      readTime: "6 min"
    }
  ]

  const publications = [
    {
      title: "AI-Enhanced Voice Communication: A New Era",
      journal: "International Journal of AI Communications",
      year: "2024",
      authors: "Kalina AI Research Team"
    },
    {
      title: "Low-Latency Global Audio Transmission",
      journal: "IEEE Network Communications",
      year: "2023", 
      authors: "Dr. Smith, Dr. Johnson"
    }
  ]

  return (
    <SmoothScrollContextProvider>
      <div className="relative min-h-screen bg-white">
        <NavigationHeader />
        
        <main className="pt-16">
          {/* Hero Section */}
          <section className="section-padding relative overflow-hidden">
            <div className="morph-shape-1 absolute top-20 right-20 opacity-20"></div>
            <div className="morph-shape-3 absolute bottom-40 left-20 opacity-30"></div>
            
            <div className="container-width" ref={ref}>
              <div className={`text-center mb-16 ${classes}`}>
                <h1 className="text-6xl lg:text-7xl font-bold text-brand-400 mb-6 text-shimmer">
                  Cercetare & Inovație
                </h1>
                <p className="text-xl text-brand-300 max-w-3xl mx-auto animate-fade-in-up delay-200">
                  Explorează frontiera tehnologiei AI pentru comunicații vocale
                </p>
              </div>

              {/* Research Papers */}
              <div className="mb-20">
                <h2 className="text-4xl font-bold text-brand-400 mb-8 text-center text-glow">
                  Lucrări de Cercetare
                </h2>
                <div className="grid lg:grid-cols-2 gap-8">
                  {research.map((paper, index) => (
                    <div 
                      key={index}
                      className={`glass-card rounded-2xl p-6 magnetic-hover transition-all duration-700 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                      }`}
                      style={{
                        transitionDelay: `${index * 200}ms`
                      }}
                    >
                      <div className="flex justify-between items-start mb-4">
                        <span className="text-sm text-brand-300">{paper.date}</span>
                        <span className="text-sm text-brand-300">{paper.readTime}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-brand-400 mb-3 text-glow">
                        {paper.title}
                      </h3>
                      
                      <p className="text-brand-300 mb-4">
                        {paper.summary}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {paper.tags.map((tag, tagIndex) => (
                          <span 
                            key={tagIndex}
                            className="glass px-3 py-1 rounded-full text-xs text-brand-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <button className="btn-secondary btn-magnetic text-sm">
                        Citește Mai Mult
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Publications */}
              <div>
                <h2 className="text-4xl font-bold text-brand-400 mb-8 text-center text-glow">
                  Publicații
                </h2>
                <div className="max-w-4xl mx-auto space-y-6">
                  {publications.map((pub, index) => (
                    <div 
                      key={index}
                      className={`glass-card rounded-xl p-6 magnetic-hover transition-all duration-700 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                      }`}
                      style={{
                        transitionDelay: `${(research.length + index) * 200}ms`
                      }}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-semibold text-brand-400 mb-2">
                            {pub.title}
                          </h3>
                          <p className="text-brand-300 text-sm mb-1">
                            {pub.journal} • {pub.year}
                          </p>
                          <p className="text-brand-300 text-sm">
                            {pub.authors}
                          </p>
                        </div>
                        <button className="btn-secondary btn-magnetic text-sm">
                          Vezi PDF
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </SmoothScrollContextProvider>
  )
}
