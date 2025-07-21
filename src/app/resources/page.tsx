'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'
import { Header } from '@/components/layout/Header'
import { SmoothScrollProvider } from '@/components/providers/SmoothScrollProvider'

export default function ResourcesPage() {
  const { ref, classes, isVisible } = useScrollReveal('up')

  const resources = [
    {
      category: "Documentație",
      items: [
        {
          title: "Ghid de Implementare",
          description: "Ghid complet pentru integrarea API-ului Kalina AI",
          type: "PDF",
          size: "2.5 MB"
        },
        {
          title: "Referință API",
          description: "Documentația completă a API-ului nostru",
          type: "Online",
          size: ""
        },
        {
          title: "SDK-uri și Biblioteci",
          description: "Resurse pentru dezvoltatori în multiple limbaje",
          type: "GitHub",
          size: ""
        }
      ]
    },
    {
      category: "Tutoriale",
      items: [
        {
          title: "Primul Apel AI",
          description: "Tutorial pas cu pas pentru primul tău apel AI",
          type: "Video",
          size: "15 min"
        },
        {
          title: "Configurare Avansată",
          description: "Setări avansate pentru optimizarea performanței",
          type: "Article",
          size: "10 min"
        },
        {
          title: "Integrare Enterprise",
          description: "Cum să integrezi Kalina AI în sistemele enterprise",
          type: "Webinar",
          size: "45 min"
        }
      ]
    },
    {
      category: "Suport",
      items: [
        {
          title: "Centru de Ajutor",
          description: "Răspunsuri la întrebările frecvente",
          type: "Online",
          size: ""
        },
        {
          title: "Comunitate",
          description: "Alătură-te comunității noastre de dezvoltatori",
          type: "Forum",
          size: ""
        },
        {
          title: "Suport Direct",
          description: "Contactează echipa noastră de suport",
          type: "Chat/Email",
          size: ""
        }
      ]
    }
  ]

  return (
    <SmoothScrollProvider>
      <div className="relative min-h-screen bg-white">
        <Header />
        
        <main className="pt-16">
          {/* Hero Section */}
          <section className="section-padding relative overflow-hidden">
            <div className="morph-shape-2 absolute top-40 right-10 opacity-20"></div>
            <div className="morph-shape-1 absolute bottom-20 left-20 opacity-30"></div>
            
            <div className="container-width" ref={ref}>
              <div className={`text-center mb-16 ${classes}`}>
                <h1 className="text-6xl lg:text-7xl font-bold text-brand-400 mb-6 text-shimmer">
                  Resurse pentru Dezvoltatori
                </h1>
                <p className="text-xl text-brand-300 max-w-3xl mx-auto animate-fade-in-up delay-200">
                  Tot ce ai nevoie pentru a implementa și optimiza Kalina AI
                </p>
              </div>

              {/* Resources Categories */}
              <div className="space-y-16">
                {resources.map((category, categoryIndex) => (
                  <div 
                    key={categoryIndex}
                    className={`transition-all duration-700 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                    }`}
                    style={{
                      transitionDelay: `${categoryIndex * 300}ms`
                    }}
                  >
                    <h2 className="text-3xl font-bold text-brand-400 mb-8 text-center text-glow">
                      {category.category}
                    </h2>
                    
                    <div className="grid lg:grid-cols-3 gap-6">
                      {category.items.map((item, itemIndex) => (
                        <div 
                          key={itemIndex}
                          className="glass-card rounded-2xl p-6 magnetic-hover group"
                        >
                          <div className="flex justify-between items-start mb-4">
                            <span className="glass px-3 py-1 rounded-full text-xs text-brand-300">
                              {item.type}
                            </span>
                            {item.size && (
                              <span className="text-xs text-brand-300">
                                {item.size}
                              </span>
                            )}
                          </div>
                          
                          <h3 className="text-xl font-bold text-brand-400 mb-3 text-glow group-hover:text-brand-50 transition-colors">
                            {item.title}
                          </h3>
                          
                          <p className="text-brand-300 mb-6 group-hover:text-brand-400 transition-colors">
                            {item.description}
                          </p>
                          
                          <button className="btn-secondary btn-magnetic w-full group-hover:bg-brand-400 group-hover:text-white transition-all">
                            Accesează
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Section */}
              <div className={`mt-20 text-center transition-all duration-700 delay-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}>
                <div className="glass-card rounded-2xl p-12 magnetic-hover">
                  <h3 className="text-3xl font-bold text-brand-400 mb-6 text-glow">
                    Nu găsești ce cauți?
                  </h3>
                  <p className="text-brand-300 mb-8 max-w-2xl mx-auto">
                    Echipa noastră de suport este gata să te ajute cu orice întrebări sau nevoi specifice
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="btn-primary btn-magnetic">
                      Contactează Suportul
                    </button>
                    <button className="btn-secondary btn-magnetic">
                      Solicită Resurse Personalizate
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </SmoothScrollProvider>
  )
}
