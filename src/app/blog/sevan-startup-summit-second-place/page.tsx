'use client'

export default function SevanStartupSummitSecondPlace() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-slate-50">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-gray-500 to-slate-600 rounded-xl flex items-center justify-center">
                <span className="text-white text-lg">🥈</span>
              </div>
              <div>
                <h1 className="font-bold text-gray-900">Kallina AI Blog</h1>
                <p className="text-sm text-gray-600">Sevan Startup Summit</p>
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
          <div className="inline-flex items-center gap-2 bg-gray-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            🥈 2ND PLACE
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Locul 2 la Sevan Startup Summit: 
            <span className="text-gray-600"> $6,000</span> pentru Aichat.md
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Performanța excepțională la Sevan Startup Summit ne aduce recunoașterea internațională 
            și finanțarea pentru dezvoltarea ulterioară.
          </p>
          
          {/* Meta Info */}
          <div className="flex items-center justify-center gap-6 mt-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
              6 min citire
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
              Echipa Aichat
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
              Octombrie 2024
            </div>
          </div>
        </div>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Competiția de la Sevan</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Sevan Startup Summit din Armenia a reunit peste 200 de startup-uri din toată regiunea. 
              Să obții locul 2 într-o competiție atât de dură înseamnă validarea internațională a 
              tehnologiei și a echipei noastre.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Prezentarea Care a Convins Juriul</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Pitch-ul nostru s-a concentrat pe trei aspecte cheie:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
              <li>Demonstrația live a capabilităților AI în limba română</li>
              <li>Metrici concrete de performanță și ROI pentru clienți</li>
              <li>Planul de expansiune în piețele din Europa de Est</li>
              <li>Echipa tehnică cu experiență dovedită în AI și business</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Ce Înseamnă Premiul de $6,000</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Finanțarea obținută va fi investită strategic în:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
              <li>Dezvoltarea de noi funcționalități AI avansate</li>
              <li>Extinderea echipei de development și suport</li>
              <li>Marketing și expansiune în noi piețe</li>
              <li>Îmbunătățirea infrastructurii pentru scalare</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Recunoașterea Internațională</h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              Această performanță ne-a deschis ușile către noi oportunități de colaborare și investiții. 
              Juriul internațional a apreciat în mod special inovația tehnologică și potențialul de impact 
              în regiune. Pentru noi, aceasta este confirmarea că suntem pe drumul cel bun către 
              transformarea comunicării business prin AI.
            </p>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-xl p-6 border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2">Explorează tehnologia premiată</h4>
              <p className="text-gray-600 mb-4">
                Testează soluția care a impresionat juriul internațional la Sevan.
              </p>
              <a 
                href="/platform" 
                className="inline-flex items-center bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors font-medium"
              >
                Descoperă Platforma →
              </a>
            </div>
          </div>
        </article>
      </main>
    </div>
  )
}
