'use client'

export default function GoogleCloudPartnershipGrant() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50">
      {/* Header */}
      <header className="border-b border-red-200 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl flex items-center justify-center">
                <span className="text-white text-lg">🚀</span>
              </div>
              <div>
                <h1 className="font-bold text-gray-900">Kallina AI Blog</h1>
                <p className="text-sm text-gray-600">Google Cloud Partnership</p>
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
          <div className="inline-flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            🚀 BACKED
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Google Cloud ne Susține: 
            <span className="text-red-600"> $25K Grant</span> pentru Infrastructura AI
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Parteneriatul strategic cu Google Cloud ne permite să scalăm infrastructura AI 
            la nivel global. Detalii despre grant-ul de $25,000.
          </p>
          
          {/* Meta Info */}
          <div className="flex items-center justify-center gap-6 mt-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-red-500 rounded-full"></span>
              10 min citire
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-red-500 rounded-full"></span>
              Alex Cloud
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-red-500 rounded-full"></span>
              Februarie 2025
            </div>
          </div>
        </div>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          <div className="bg-white rounded-2xl shadow-sm border border-red-100 p-8 md:p-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Parteneriatul cu Google Cloud</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Google Cloud a recunoscut potențialul tehnologiei noastre și ne-a acordat un grant 
              de $25,000 prin programul lor pentru startup-uri AI inovatoare. Această sumă ne permite 
              să utilizăm infrastructura Google Cloud pentru scalarea globală a platformei noastre.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">De Ce Google Cloud?</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Alegerea Google Cloud nu a fost întâmplătoare. Beneficiile cheie include:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
              <li>Latență ultra-scăzută pentru procesarea vocii în timp real</li>
              <li>Auto-scaling pentru trafic variabil de apeluri</li>
              <li>Conformitate GDPR și SOC 2 Type II</li>
              <li>Integrare nativă cu serviciile Google AI și ML</li>
              <li>Prezență globală în 35+ regiuni</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Infrastructura Scalabilă</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Cu grant-ul Google Cloud implementăm:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
              <li><strong>Kubernetes clusters</strong> pentru orchestrarea microserviciilor AI</li>
              <li><strong>Cloud Run</strong> pentru deployment automatizat al agenților</li>
              <li><strong>Vertex AI</strong> pentru antrenarea și optimizarea modelelor</li>
              <li><strong>Cloud Storage</strong> pentru backup-ul conversațiilor și analiza datelor</li>
              <li><strong>Cloud CDN</strong> pentru livrarea rapidă a răspunsurilor</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Performanța Îmbunătățită</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Migrarea pe Google Cloud a adus îmbunătățiri semnificative:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
              <li>Reducerea latenței cu 45% (de la 300ms la 165ms)</li>
              <li>Uptime 99.95% vs 99.2% anterior</li>
              <li>Capacitatea de a gestiona 10x mai multe apeluri simultane</li>
              <li>Costuri reduse cu 30% prin optimizarea resurselor</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Expansiunea Globală</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Infrastructura Google Cloud ne deschide ușile către piețe noi:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
              <li>Europa de Vest (Germania, Franța, Olanda)</li>
              <li>Europa Centrală (Polonia, Cehia, Ungaria)</li>
              <li>Regiunea Nordică (Suedia, Finlanda, Danemarca)</li>
              <li>Balcanii (Serbia, Bulgaria, Croația)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Viitorul cu Google Cloud</h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              Acest parteneriat strategic marchează începutul unei noi ere pentru Kallina AI. 
              Cu infrastructura Google Cloud și grant-ul de $25,000, suntem pregătiți să devenim 
              platforma de referință pentru agenți AI vocali în Europa de Est. Următorul nostru 
              obiectiv este să procesăm peste 1 milion de apeluri pe lună până la finalul anului 2025.
            </p>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6 border border-red-200">
              <h4 className="font-semibold text-gray-900 mb-2">Experimentează puterea Google Cloud</h4>
              <p className="text-gray-600 mb-4">
                Testează platforma alimentată de infrastructura Google Cloud.
              </p>
              <a 
                href="/technical-specs" 
                className="inline-flex items-center bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors font-medium"
              >
                Specificații Tehnice →
              </a>
            </div>
          </div>
        </article>
      </main>
    </div>
  )
}
