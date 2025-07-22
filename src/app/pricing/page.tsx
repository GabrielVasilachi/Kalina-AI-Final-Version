'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'
import { Header } from '@/components/layout/Header'
import { SmoothScrollProvider } from '@/components/providers/SmoothScrollProvider'

export default function PricingPage() {
  const { ref, classes, isVisible } = useScrollReveal('up')

  const plans = [
    {
      name: "Starter",
      price: "€29",
      period: "/lună",
      description: "Perfect pentru echipe mici și freelanceri",
      features: [
        "Până la 1,000 minute/lună",
        "Reducerea zgomotului AI",
        "Suport email",
        "API basic",
        "99.5% uptime"
      ],
      highlighted: false
    },
    {
      name: "Professional", 
      price: "€99",
      period: "/lună",
      description: "Ideal pentru echipe medii și companii în creștere",
      features: [
        "Până la 10,000 minute/lună",
        "Toate funcțiile AI",
        "Suport prioritar",
        "API complet",
        "99.9% uptime",
        "Analize avansate",
        "Integrări personalizate"
      ],
      highlighted: true
    },
    {
      name: "Enterprise",
      price: "Personalizat",
      period: "",
      description: "Soluții scalabile pentru organizații mari",
      features: [
        "Minute nelimitate",
        "AI personalizat",
        "Account manager dedicat",
        "SLA garantat",
        "99.99% uptime", 
        "Securitate avansată",
        "Deploy on-premise",
        "Conformitate GDPR/HIPAA"
      ],
      highlighted: false
    }
  ]

  return (
    <SmoothScrollProvider>
      <div className="relative min-h-screen bg-white">
        <Header />
        
        <main className="pt-16">
          {/* Hero Section */}
          <section className="section-padding relative overflow-hidden">
            <div className="morph-shape-3 absolute top-20 left-20 opacity-20"></div>
            <div className="morph-shape-1 absolute bottom-40 right-20 opacity-30"></div>
            
            <div className="container-width" ref={ref}>
              <div className={`text-center mb-16 ${classes}`}>
                <h1 className="text-6xl lg:text-7xl font-bold text-brand-400 mb-6 text-shimmer">
                  Prețuri Simple și Transparente
                </h1>
                <p className="text-xl text-brand-300 max-w-3xl mx-auto animate-fade-in-up delay-200">
                  Alege planul perfect pentru nevoile tale. Toate planurile includ încercare gratuită de 14 zile.
                </p>
              </div>

              {/* Pricing Cards */}
              <div className="grid lg:grid-cols-3 gap-8 mt-16">
                {plans.map((plan, index) => (
                  <div 
                    key={index}
                    className={`glass-card rounded-2xl p-8 magnetic-hover transition-all duration-700 relative ${
                      plan.highlighted ? 'border-2 border-brand-400 scale-105' : ''
                    } ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                    }`}
                    style={{
                      transitionDelay: `${index * 200}ms`
                    }}
                  >
                    {plan.highlighted && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-brand-400 text-white px-4 py-2 rounded-full text-sm font-semibold">
                          Cel mai popular
                        </span>
                      </div>
                    )}
                    
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-brand-400 mb-2 text-glow">
                        {plan.name}
                      </h3>
                      <p className="text-brand-300 text-sm mb-6">
                        {plan.description}
                      </p>
                      <div className="flex items-baseline justify-center">
                        <span className="text-4xl font-bold text-brand-400 text-shimmer">
                          {plan.price}
                        </span>
                        <span className="text-brand-300 ml-1">
                          {plan.period}
                        </span>
                      </div>
                    </div>
                    
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <span className="text-green-400 flex-shrink-0">✓</span>
                          <span className="text-brand-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <button className={`w-full btn-magnetic transition-all ${
                      plan.highlighted 
                        ? 'btn-primary' 
                        : 'btn-secondary hover:bg-brand-400 hover:text-white'
                    }`}>
                      {plan.name === 'Enterprise' ? 'Contactează-ne' : 'Începe Gratuit'}
                    </button>
                  </div>
                ))}
              </div>

              {/* FAQ Section */}
              <div className={`mt-20 transition-all duration-700 delay-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}>
                <h2 className="text-3xl font-bold text-brand-400 mb-8 text-center text-glow">
                  Întrebări Frecvente despre Prețuri
                </h2>
                
                <div className="max-w-3xl mx-auto space-y-6">
                  {[
                    {
                      q: "Pot schimba planul oricând?",
                      a: "Da, poți face upgrade sau downgrade oricând. Modificările se aplică în următorul ciclu de facturare."
                    },
                    {
                      q: "Există costuri ascunse?",
                      a: "Nu. Prețurile afișate sunt finale și includ toate funcțiile menționate în plan."
                    },
                    {
                      q: "Ce înseamnă încercarea gratuită?",
                      a: "14 zile complete de acces la toate funcțiile planului Professional, fără card de credit."
                    }
                  ].map((faq, index) => (
                    <div key={index} className="glass-card rounded-xl p-6">
                      <h3 className="text-lg font-semibold text-brand-400 mb-2">
                        {faq.q}
                      </h3>
                      <p className="text-brand-300">
                        {faq.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </SmoothScrollProvider>
  )
}
