'use client'

export default function UpnextAcceleratorPartnership() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-violet-50">
      {/* Header */}
      <header className="border-b border-purple-200 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl flex items-center justify-center">
                <span className="text-white text-lg">🔥</span>
              </div>
              <div>
                <h1 className="font-bold text-gray-900">Kallina AI Blog</h1>
                <p className="text-sm text-gray-600">UpNext Accelerator</p>
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
          <div className="inline-flex items-center gap-2 bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            🔥 ACCELERATED
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Parteneri cu UpNext Accelerator: 
            <span className="text-purple-600"> $10K Start Funding</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Alăturarea programului UpNext Accelerator by Dreamups marchează o nouă etapă 
            în dezvoltarea Aichat.md cu finanțare de $10,000.
          </p>
          
          {/* Meta Info */}
          <div className="flex items-center justify-center gap-6 mt-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
              9 min citire
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
              Team Dreamups
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
              Septembrie 2024
            </div>
          </div>
        </div>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          <div className="bg-white rounded-2xl shadow-sm border border-purple-100 p-8 md:p-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">UpNext Accelerator by Dreamups</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Dreamups, unul dintre cele mai respectate acceleratoare de startup-uri din regiunea 
              noastră, ne-a acceptat în programul UpNext Accelerator. Această selecție vine cu 
              o finanțare inițială de $10,000 și acces la o rețea de mentori și investitori 
              cu experiență vastă în scaling business-uri tech.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">De Ce UpNext Accelerator?</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              UpNext nu este doar despre finanțare - este despre accelerarea inteligentă:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
              <li>Mentorship 1:1 cu fondatori care au scaling experiență</li>
              <li>Acces la rețeaua Dreamups de investitori seed și Series A</li>
              <li>Workshops săptămânale despre product-market fit și scaling</li>
              <li>Co-working space în București cu echipă tech avansată</li>
              <li>Demo Day în fața a 200+ investitori și corporate partners</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Programul de 4 Luni</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Programul este structurat în 4 etape principale:
            </p>
            <div className="bg-purple-50 rounded-lg p-6 mb-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-purple-900 mb-2">Luna 1-2: Foundation</h4>
                  <ul className="text-sm text-purple-700 space-y-1">
                    <li>• Product-market fit validation</li>
                    <li>• Business model optimization</li>
                    <li>• Team structure și hiring</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-900 mb-2">Luna 3-4: Scale</h4>
                  <ul className="text-sm text-purple-700 space-y-1">
                    <li>• Go-to-market strategy</li>
                    <li>• Fundraising preparation</li>
                    <li>• Demo Day pitch perfection</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Mentorii Noștri</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Dreamups ne-a asociat cu mentori de top din industrie:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
              <li><strong>Andrei Radu</strong> - Ex-VP Engineering la UiPath</li>
              <li><strong>Maria Ionescu</strong> - Former Head of AI la eMAG</li>
              <li><strong>Cristian Pop</strong> - Serial entrepreneur cu 3 exit-uri</li>
              <li><strong>Dr. Elena Tech</strong> - AI researcher cu 50+ papers</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Obiectivele Pentru Următoarele 4 Luni</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Cu sprijinul UpNext, ne propunem să:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
              <li>Dublăm baza de clienți activi (de la 150 la 300+)</li>
              <li>Lansăm versiunea Enterprise cu funcții avansate</li>
              <li>Stabilim partnerships cu 5 mari companii din România</li>
              <li>Pregătim Series A round de $500K - $1M</li>
              <li>Extindem echipa cu 6 developeri seniori</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Demo Day și Următorii Pași</h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              Programul se încheie cu Demo Day în ianuarie 2025, unde vom prezenta progresul 
              și planurile de viitor în fața a peste 200 de investitori. Obiectivul este să 
              securăm finanțarea pentru următoarea fază de dezvoltare și să stabilim 
              partnerships strategice care să ne permită expansiunea în piețele din Europa Centrală.
            </p>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-xl p-6 border border-purple-200">
              <h4 className="font-semibold text-gray-900 mb-2">Fii parte din călătoria noastră</h4>
              <p className="text-gray-600 mb-4">
                Urmărește progresul nostru în UpNext Accelerator și testează produsul.
              </p>
              <a 
                href="/company" 
                className="inline-flex items-center bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-600 transition-colors font-medium"
              >
                Despre Companie →
              </a>
            </div>
          </div>
        </article>
      </main>
    </div>
  )
}
