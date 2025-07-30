'use client'

export default function YohealthChallengeWinner() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      {/* Header */}
      <header className="border-b border-green-200 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                <span className="text-white text-lg">🏅</span>
              </div>
              <div>
                <h1 className="font-bold text-gray-900">Kallina AI Blog</h1>
                <p className="text-sm text-gray-600">YoHealth Challenge Winner</p>
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
          <div className="inline-flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            🏅 WINNER
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Câștigători YoHealth Challenge: 
            <span className="text-green-600"> $6,000</span> pentru Inovația în Sănătate
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Cum tehnologia noastră AI revoluționează sectorul medical și de ce am fost aleși 
            câștigători la YoHealth Challenge Sevan.
          </p>
          
          {/* Meta Info */}
          <div className="flex items-center justify-center gap-6 mt-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              8 min citire
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Dr. Maria Health
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Noiembrie 2024
            </div>
          </div>
        </div>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          <div className="bg-white rounded-2xl shadow-sm border border-green-100 p-8 md:p-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">AI în Serviciul Sănătății</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              YoHealth Challenge a fost o competiție dedicată inovațiilor în domeniul sănătății. 
              Victoria noastră demonstrează cum agenții AI pot transforma fundamental accesul 
              la informații medicale și îmbunătăți comunicarea pacient-medic.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Soluția Pentru Sectorul Medical</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Am dezvoltat un agent AI specializat pentru consultații medicale primare care oferă:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
              <li>Triaj telefonic inteligent pentru urgențe medicale</li>
              <li>Programări automatizate cu specialiști potriviți</li>
              <li>Consiliere medicală de bază 24/7 în limba română</li>
              <li>Integrare cu sisteme medicale existente (HIMS)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Impactul Măsurabil</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              În timpul testelor pilot, soluția noastră a demonstrat:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
              <li>Reducerea timpului de așteptare cu 60% pentru programări</li>
              <li>Creșterea satisfacției pacienților cu 45%</li>
              <li>Economii de 40% la costurile administrative</li>
              <li>Disponibilitate 24/7 pentru consultații de bază</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Recunoașterea Comunității Medicale</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Juriul, format din medici și experți în tehnologie medicală, a apreciat în mod special:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
              <li>Respectarea strictă a confidențialității medicale (GDPR compliant)</li>
              <li>Interfața intuitivă pentru personal medical nevergăt cu tehnologia</li>
              <li>Capacitatea de a identifica situații care necesită intervenție umană</li>
              <li>Integrarea seamless cu protocoalele medicale existente</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Viitorul Sănătății Digitale</h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              Această victorie validează viziunea noastră că AI poate să democratizeze accesul la 
              servicii medicale de calitate. Premiul de $6,000 va fi investit în dezvoltarea de 
              noi funcționalități specializate pentru diferite ramuri medicale și în extinderea 
              pilotului la mai multe clinici din regiune.
            </p>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
              <h4 className="font-semibold text-gray-900 mb-2">Implementează AI în clinica ta</h4>
              <p className="text-gray-600 mb-4">
                Descoperă cum tehnologia premiată poate îmbunătăți serviciile medicale.
              </p>
              <a 
                href="/healthcare-ai" 
                className="inline-flex items-center bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors font-medium"
              >
                Soluții pentru Sănătate →
              </a>
            </div>
          </div>
        </article>
      </main>
    </div>
  )
}
