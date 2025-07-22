'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'
import { Header } from '@/components/layout/Header'
import { SmoothScrollProvider } from '@/components/providers/SmoothScrollProvider'

export default function ProductsPage() {
  const { ref, classes, isVisible } = useScrollReveal('up')

  const products = [
    {
      title: "Voice AI Engine",
      description: "Motorul nostru AI de ultimă generație pentru procesarea vocii în timp real",
      features: ["Reducerea zgomotului", "Optimizarea vocii", "Analiză în timp real"],
      price: "€49/lună"
    },
    {
      title: "Global Infrastructure",
      description: "Infrastructura globală cu latență ultra-redusă",
      features: ["120+ țări", "Sub 100ms latență", "99.9% uptime"],
      price: "€99/lună"
    },
    {
      title: "Enterprise Suite",
      description: "Soluție completă pentru întreprinderi mari",
      features: ["API-uri personalizate", "Suport dedicat", "Securitate avansată"],
      price: "Preț personalizat"
    }
  ]

  return (
    <SmoothScrollProvider>
      <div className="relative min-h-screen bg-white">
        <Header />
        
        <main className="pt-16">
          {/* Hero Section */}
          <section className="section-padding relative overflow-hidden">
            <div className="morph-shape-1 absolute top-20 left-20 opacity-20"></div>
            <div className="morph-shape-2 absolute bottom-40 right-20 opacity-30"></div>
            
            <div className="container-width" ref={ref}>
              <div className={`text-center mb-16 ${classes}`}>
                <h1 className="text-6xl lg:text-7xl font-bold text-brand-400 mb-6 text-shimmer">
                  Produsele Noastre
                </h1>
                <p className="text-xl text-brand-300 max-w-3xl mx-auto animate-fade-in-up delay-200">
                  Descoperă gama completă de soluții AI pentru comunicații vocale
                </p>
              </div>

              {/* Products Grid */}
              <div className="grid lg:grid-cols-3 gap-8 mt-16">
                {products.map((product, index) => (
                  <div 
                    key={index}
                    className={`glass-card rounded-2xl p-8 magnetic-hover transition-all duration-700 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                    }`}
                    style={{
                      transitionDelay: `${index * 200}ms`
                    }}
                  >
                    <h3 className="text-2xl font-bold text-brand-400 mb-4 text-glow">
                      {product.title}
                    </h3>
                    <p className="text-brand-300 mb-6">
                      {product.description}
                    </p>
                    
                    <ul className="space-y-3 mb-8">
                      {product.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2 text-brand-300">
                          <span className="text-green-400">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="text-2xl font-bold text-brand-400 mb-6 text-shimmer">
                      {product.price}
                    </div>
                    
                    <button className="btn-primary btn-magnetic w-full">
                      Află Mai Multe
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </SmoothScrollProvider>
  )
}
