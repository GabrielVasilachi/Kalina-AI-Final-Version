'use client'

export default function EBRDStarVentureProgram() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Header */}
      <header className="border-b border-blue-200 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                <span className="text-white text-lg">🚀</span>
              </div>
              <div>
                <h1 className="font-bold text-gray-900">Kallina AI Blog</h1>
                <p className="text-sm text-gray-600">EBRD Star Venture Program</p>
              </div>
            </div>
            <a 
              href="/blog" 
              className="text-gray-600 hover:text-gray-900 text-sm font-medium px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              ← Înapoi la Blog
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-16">
        {/* Article Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            🚀 SELECTED
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            EBRD ne Selectează pentru 
            <span className="text-blue-600"> Programul Star Venture</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Aichat.md este selectat pentru prestigiosul program Star Venture de la EBRD. 
            Ce înseamnă această recunoaștere pentru dezvoltarea AI în Moldova.
          </p>
          
          {/* Meta Info */}
          <div className="flex items-center justify-center gap-6 mt-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              7 min citire
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              Gabriel Vasilachi
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              Decembrie 2024
            </div>
          </div>
        </div>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-8 md:p-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Recunoașterea Internațională</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              European Bank for Reconstruction and Development (EBRD) a selectat Aichat.md pentru prestigiosul 
              program Star Venture, o recunoaștere care validează potențialul nostru tehnologic și viziunea 
              pentru transformarea digitală în regiunea Moldovei.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Ce Înseamnă Star Venture Program</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Star Venture este programul EBRD dedicat startup-urilor cu potențial ridicat de scalare. 
              Selecția noastră înseamnă:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
              <li>Acces la rețeaua internațională EBRD de investitori și parteneri</li>
              <li>Mentorat specializat pentru expansiunea în piețele europene</li>
              <li>Validare oficială a modelului nostru de business</li>
              <li>Suport pentru conformarea cu standardele internaționale</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Impactul pentru Moldova</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Această selecție poziționează Moldova pe harta tehnologică europeană. Demonstrează că 
              în țara noastră se dezvoltă soluții AI competitive la nivel global, capabile să atragă 
              atenția instituțiilor financiare internaționale majore.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Următorii Pași</h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              Cu sprijinul EBRD, ne pregătim pentru expansiunea în piețele din Europa de Est și Centrală. 
              Obiectivul nostru este să devenim platforma de referință pentru agenți AI vocali în regiunea 
              noastră, păstrând în același timp focus-ul pe calitatea serviciilor pentru clienții din Moldova și România.
            </p>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
              <h4 className="font-semibold text-gray-900 mb-2">Fii parte din transformarea digitală</h4>
              <p className="text-gray-600 mb-4">
                Alătură-te companiilor care deja beneficiază de tehnologia validată internațional.
              </p>
              <a 
                href="/getting-started" 
                className="inline-flex items-center bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors font-medium"
              >
                Începe Acum →
              </a>
            </div>
          </div>
        </article>
      </main>
    </div>
  )
}
