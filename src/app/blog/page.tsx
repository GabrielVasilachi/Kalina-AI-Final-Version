import { MinimalPage } from '@/components/MinimalPage'

export default function Blog() {
  return (
    <MinimalPage
      title="Blog & Cazuri de Studiu"
      description="Ultimele tendințe în AI, cazuri de succes și insights din industrie"
    >
      <div className="space-y-12">
        {/* Featured Articles */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-8">Articole Recente</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <article className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  <span>AI & Tehnologie</span>
                  <span className="text-gray-300">|</span>
                  <span>5 min citire</span>
                </div>
                <h3 className="text-xl font-semibold text-black mb-3">
                  Viitorul Asistenților AI în Serviciile Medicale
                </h3>
                <p className="text-gray-600 mb-4">
                  Cum transformă AI-ul conversațional experiența pacienților și eficiențele operaționale în sistemul sanitar...
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">15 Dec 2024</span>
                  <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                    Citește mai mult →
                  </button>
                </div>
              </div>
            </article>

            <article className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                  </svg>
                  <span>Cazuri de Studiu</span>
                  <span className="text-gray-300">|</span>
                  <span>8 min citire</span>
                </div>
                <h3 className="text-xl font-semibold text-black mb-3">
                  Cum a Crescut Restaurantul X Vânzările cu 40%
                </h3>
                <p className="text-gray-600 mb-4">
                  Implementarea sistemului de comenzi vocale AI a transformat complet operațiunile...
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">12 Dec 2024</span>
                  <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                    Citește mai mult →
                  </button>
                </div>
              </div>
            </article>

            <article className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"/>
                  </svg>
                  <span>Ghiduri Tehnice</span>
                  <span className="text-gray-300">|</span>
                  <span>12 min citire</span>
                </div>
                <h3 className="text-xl font-semibold text-black mb-3">
                  Integrarea API-urilor de Voce în Aplicații
                </h3>
                <p className="text-gray-600 mb-4">
                  Ghid pas cu pas pentru dezvoltatori: implementarea funcționalităților vocale...
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">10 Dec 2024</span>
                  <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                    Citește mai mult →
                  </button>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* Categories */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-8">Categorii</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="border border-gray-200 rounded-lg p-6 hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="flex items-center gap-3 mb-3">
                <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <h3 className="text-lg font-semibold text-black">AI & Tehnologie</h3>
              </div>
              <p className="text-gray-600 text-sm mb-3">
                Ultimele dezvoltări în inteligența artificială
              </p>
              <span className="text-blue-600 text-sm font-medium">
                24 articole →
              </span>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="flex items-center gap-3 mb-3">
                <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                </svg>
                <h3 className="text-lg font-semibold text-black">Cazuri de Studiu</h3>
              </div>
              <p className="text-gray-600 text-sm mb-3">
                Povești de succes din diferite industrii
              </p>
              <span className="text-blue-600 text-sm font-medium">
                18 cazuri →
              </span>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="flex items-center gap-3 mb-3">
                <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"/>
                </svg>
                <h3 className="text-lg font-semibold text-black">Ghiduri</h3>
              </div>
              <p className="text-gray-600 text-sm mb-3">
                Tutoriale și best practices
              </p>
              <span className="text-blue-600 text-sm font-medium">
                15 ghiduri →
              </span>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="flex items-center gap-3 mb-3">
                <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <h3 className="text-lg font-semibold text-black">Industrii</h3>
              </div>
              <p className="text-gray-600 text-sm mb-3">
                Aplicații specifice pe sectoare
              </p>
              <span className="text-blue-600 text-sm font-medium">
                12 sectoare →
              </span>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="bg-gray-50 rounded-lg p-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"/>
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-black mb-4">
              Abonează-te la Newsletter
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Primește cele mai noi articole, cazuri de studiu și insights despre AI direct în inbox-ul tău. 
              Fără spam, doar conținut de calitate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Email-ul tău"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-medium">
                Abonare
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              Poți să te dezabonezi oricând. Citește 
              <a href="#" className="text-blue-600 hover:underline"> Politica de Confidențialitate</a>
            </p>
          </div>
        </section>

        {/* Popular Tags */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-8">Tag-uri Populare</h2>
          <div className="flex flex-wrap gap-3">
            {[
              'AI conversațional', 'Automatizare', 'Healthcare AI', 'Restaurant Tech',
              'Voice AI', 'Machine Learning', 'Customer Service', 'Analytics',
              'Integration', 'ROI', 'Digital Transformation', 'Future of Work'
            ].map((tag) => (
              <button 
                key={tag}
                className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-colors"
              >
                {tag}
              </button>
            ))}
          </div>
        </section>
      </div>
    </MinimalPage>
  )
}
