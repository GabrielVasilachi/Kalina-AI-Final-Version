'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'
import { Header } from '@/components/layout/Header'
import { SmoothScrollProvider } from '@/components/providers/SmoothScrollProvider'

export default function CompanyPage() {
  const { ref, classes, isVisible } = useScrollReveal('up')

  const team = [
    {
      name: "Alex Popescu",
      role: "CEO & Co-Founder",
      bio: "Expert în AI cu peste 15 ani experiență în telecomunicații",
      image: "👨‍💼"
    },
    {
      name: "Maria Ionescu", 
      role: "CTO & Co-Founder",
      bio: "Pionier în procesarea audio AI, fost Google Research",
      image: "👩‍💻"
    },
    {
      name: "Andrei Georgescu",
      role: "Head of Engineering",
      bio: "Architect software cu experiență în sisteme distribuite",
      image: "👨‍🔧"
    },
    {
      name: "Elena Mihai",
      role: "Head of Product",
      bio: "Product leader cu focus pe experiența utilizatorului",
      image: "👩‍🎨"
    }
  ]

  const timeline = [
    {
      year: "2021",
      event: "Înființarea Kalina AI",
      description: "Doi ingineri cu viziunea unei comunicații AI perfecte"
    },
    {
      year: "2022", 
      event: "Prima rundă de finanțare",
      description: "Investiție de 2M€ pentru dezvoltarea produsului"
    },
    {
      year: "2023",
      event: "Lansarea produsului",
      description: "Primii 1000 de utilizatori și feedback excepțional"
    },
    {
      year: "2024",
      event: "Expansiunea globală",
      description: "Acoperire în 120+ țări și 50,000+ utilizatori activi"
    }
  ]

  return (
    <SmoothScrollProvider>
      <div className="relative min-h-screen bg-white">
        <Header />
        
        <main className="pt-16">
          {/* Hero Section */}
          <section className="section-padding relative overflow-hidden">
            <div className="morph-shape-1 absolute top-20 right-20 opacity-20"></div>
            <div className="morph-shape-2 absolute bottom-40 left-20 opacity-30"></div>
            
            <div className="container-width" ref={ref}>
              <div className={`text-center mb-16 ${classes}`}>
                <h1 className="text-6xl lg:text-7xl font-bold text-brand-400 mb-6 text-shimmer">
                  Despre Kalina AI
                </h1>
                <p className="text-xl text-brand-300 max-w-3xl mx-auto animate-fade-in-up delay-200">
                  Misiunea noastră este să revoluționăm comunicațiile globale prin inteligența artificială
                </p>
              </div>

              {/* Mission & Vision */}
              <div className="grid lg:grid-cols-2 gap-12 mb-20">
                <div className={`glass-card rounded-2xl p-8 magnetic-hover transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`} style={{ transitionDelay: '200ms' }}>
                  <h2 className="text-3xl font-bold text-brand-400 mb-6 text-glow">
                    Misiunea Noastră
                  </h2>
                  <p className="text-brand-300 leading-relaxed">
                    Să facem comunicarea vocală perfectă pentru toată lumea, eliminând barierele 
                    geografice și tehnice prin puterea inteligenței artificiale. Credem că fiecare 
                    conversație trebuie să fie clară, sigură și instantanee.
                  </p>
                </div>
                
                <div className={`glass-card rounded-2xl p-8 magnetic-hover transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`} style={{ transitionDelay: '400ms' }}>
                  <h2 className="text-3xl font-bold text-brand-400 mb-6 text-glow">
                    Viziunea Noastră
                  </h2>
                  <p className="text-brand-300 leading-relaxed">
                    O lume în care distanța nu mai contează, unde comunicarea este la fel de naturală 
                    ca și cum ai fi față în față cu persoana dragă. Tehnologia noastră AI va fi 
                    fundația unei noi ere a comunicațiilor umane.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Timeline */}
          <section className="section-padding">
            <div className="container-width">
              <h2 className="text-4xl font-bold text-brand-400 mb-12 text-center text-glow">
                Călătoria Noastră
              </h2>
              
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div 
                    key={index}
                    className={`flex items-center gap-8 transition-all duration-700 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                    }`}
                    style={{ transitionDelay: `${600 + index * 200}ms` }}
                  >
                    <div className="flex-shrink-0 w-20 h-20 glass-card rounded-full flex items-center justify-center magnetic-hover">
                      <span className="text-xl font-bold text-brand-400">
                        {item.year}
                      </span>
                    </div>
                    <div className="glass-card rounded-xl p-6 flex-1">
                      <h3 className="text-xl font-bold text-brand-400 mb-2 text-glow">
                        {item.event}
                      </h3>
                      <p className="text-brand-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Team */}
          <section className="section-padding">
            <div className="container-width">
              <h2 className="text-4xl font-bold text-brand-400 mb-12 text-center text-glow">
                Echipa Noastră
              </h2>
              
              <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
                {team.map((member, index) => (
                  <div 
                    key={index}
                    className={`glass-card rounded-2xl p-6 text-center magnetic-hover transition-all duration-700 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                    }`}
                    style={{ transitionDelay: `${1200 + index * 150}ms` }}
                  >
                    <div className="text-6xl mb-4">
                      {member.image}
                    </div>
                    <h3 className="text-xl font-bold text-brand-400 mb-2 text-glow">
                      {member.name}
                    </h3>
                    <p className="text-brand-400 font-semibold mb-3">
                      {member.role}
                    </p>
                    <p className="text-brand-300 text-sm">
                      {member.bio}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Values */}
          <section className="section-padding">
            <div className="container-width">
              <h2 className="text-4xl font-bold text-brand-400 mb-12 text-center text-glow">
                Valorile Noastre
              </h2>
              
              <div className="grid lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Inovație",
                    description: "Căutăm constant să depășim limitele tehnologiei AI",
                    icon: "🚀"
                  },
                  {
                    title: "Transparență", 
                    description: "Comunicăm deschis cu utilizatorii și partenerii noștri",
                    icon: "💎"
                  },
                  {
                    title: "Excelență",
                    description: "Standardele noastre înalte se reflectă în fiecare produs",
                    icon: "⭐"
                  }
                ].map((value, index) => (
                  <div 
                    key={index}
                    className={`glass-card rounded-2xl p-8 text-center magnetic-hover transition-all duration-700 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                    }`}
                    style={{ transitionDelay: `${1800 + index * 200}ms` }}
                  >
                    <div className="text-5xl mb-6">
                      {value.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-brand-400 mb-4 text-glow">
                      {value.title}
                    </h3>
                    <p className="text-brand-300">
                      {value.description}
                    </p>
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
