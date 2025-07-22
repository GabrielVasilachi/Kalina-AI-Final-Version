'use client'

import { Demo } from '@/components/sections/Demo'
import { Header } from '@/components/layout/Header'
import { SmoothScrollProvider } from '@/components/providers/SmoothScrollProvider'

export default function DemoPage() {
  return (
    <SmoothScrollProvider>
      <div className="relative min-h-screen bg-white">
        <Header />
        
        <main className="pt-16">
          <Demo />
          
          {/* Additional demo content */}
          <section className="section-padding">
            <div className="container-width">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-brand-400 mb-6 text-shimmer">
                  Testează Toate Funcțiile
                </h2>
                <p className="text-xl text-brand-300 max-w-3xl mx-auto">
                  Explorează întreaga gamă de capabilități AI pentru comunicații vocale
                </p>
              </div>
              
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="glass-card rounded-2xl p-6 magnetic-hover">
                  <h3 className="text-xl font-bold text-brand-400 mb-4 text-glow">
                    Reducerea Zgomotului
                  </h3>
                  <p className="text-brand-300 mb-4">
                    Testează cum AI-ul nostru elimină zgomotele de fundal
                  </p>
                  <button className="btn-secondary btn-magnetic w-full">
                    Testează Acum
                  </button>
                </div>
                
                <div className="glass-card rounded-2xl p-6 magnetic-hover">
                  <h3 className="text-xl font-bold text-brand-400 mb-4 text-glow">
                    Optimizarea Vocii
                  </h3>
                  <p className="text-brand-300 mb-4">
                    Vezi cum îmbunătățim claritatea și calitatea vocii
                  </p>
                  <button className="btn-secondary btn-magnetic w-full">
                    Testează Acum
                  </button>
                </div>
                
                <div className="glass-card rounded-2xl p-6 magnetic-hover">
                  <h3 className="text-xl font-bold text-brand-400 mb-4 text-glow">
                    Latența Redusă
                  </h3>
                  <p className="text-brand-300 mb-4">
                    Experimentează comunicarea în timp real
                  </p>
                  <button className="btn-secondary btn-magnetic w-full">
                    Testează Acum
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </SmoothScrollProvider>
  )
}