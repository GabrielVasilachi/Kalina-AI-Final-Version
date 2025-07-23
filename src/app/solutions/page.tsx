'use client'

import { useScrollAnimationReveal } from '@/hooks/useScrollAnimationReveal'
import { NavigationHeader } from '@/components/layout/NavigationHeader'
import { SmoothScrollContextProvider } from '@/components/providers/SmoothScrollContextProvider'

export default function SolutionsPage() {
  const { ref, classes, isVisible } = useScrollAnimationReveal('up')

  const solutions = [
    {
      title: "Call Centers",
      description: "Îmbunătățește calitatea apelurilor în call center-ul tău",
      icon: "📞",
      benefits: ["Reducerea timpului de așteptare", "Calitate audio superioară", "Analiză conversații"],
      industries: ["Telecomunicații", "Banking", "E-commerce"]
    },
    {
      title: "Remote Work",
      description: "Soluții pentru echipe remote și hibride",
      icon: "💻",
      benefits: ["Conferințe claire", "Colaborare seamless", "Securitate avansată"],
      industries: ["Tech", "Consulting", "Educație"]
    },
    {
      title: "Healthcare",
      description: "Comunicații sigure pentru domeniul medical",
      icon: "🏥",
      benefits: ["Conformitate HIPAA", "Criptare end-to-end", "Înregistrări securizate"],
      industries: ["Spitale", "Clinici", "Telemedicină"]
    }
  ]

  return (
    <SmoothScrollContextProvider>
      <div className="relative min-h-screen bg-white">
        <NavigationHeader />
        
        <main className="pt-16">
          {/* Hero Section */}
          <section className="section-padding relative overflow-hidden">
            <div className="morph-shape-2 absolute top-40 left-10 opacity-20"></div>
            <div className="morph-shape-3 absolute bottom-20 right-20 opacity-30"></div>
            
            <div className="container-width" ref={ref}>
              <div className={`text-center mb-16 ${classes}`}>
                <h1 className="text-6xl lg:text-7xl font-bold text-brand-400 mb-6 text-shimmer">
                  Soluții pentru Industria Ta
                </h1>
                <p className="text-xl text-brand-300 max-w-3xl mx-auto animate-fade-in-up delay-200">
                  Adaptăm tehnologia noastră AI pentru nevoile specifice ale industriei tale
                </p>
              </div>

              {/* Solutions Grid */}
              <div className="space-y-16 mt-16">
                {solutions.map((solution, index) => (
                  <div 
                    key={index}
                    className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                    } ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
                    style={{
                      transitionDelay: `${index * 300}ms`
                    }}
                  >
                    <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                      <div className="glass-card rounded-2xl p-8 magnetic-hover">
                        <div className="text-6xl mb-6 text-center">{solution.icon}</div>
                        <h3 className="text-3xl font-bold text-brand-400 mb-4 text-glow text-center">
                          {solution.title}
                        </h3>
                        <p className="text-brand-300 mb-8 text-center text-lg">
                          {solution.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-xl font-semibold text-brand-400 mb-4">Beneficii:</h4>
                          <ul className="space-y-2">
                            {solution.benefits.map((benefit, benefitIndex) => (
                              <li key={benefitIndex} className="flex items-center space-x-2 text-brand-300">
                                <span className="text-green-400">✓</span>
                                <span>{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="text-xl font-semibold text-brand-400 mb-4">Industrii:</h4>
                          <div className="flex flex-wrap gap-2">
                            {solution.industries.map((industry, industryIndex) => (
                              <span 
                                key={industryIndex}
                                className="glass px-4 py-2 rounded-full text-brand-300 text-sm"
                              >
                                {industry}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <button className="btn-primary btn-magnetic">
                          Solicită Demo
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </SmoothScrollContextProvider>
  )
}
