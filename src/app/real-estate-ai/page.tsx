import { MinimalPage } from '@/components/MinimalPage'

export default function RealEstateAI() {
  return (
    <MinimalPage
      title="AI pentru Imobiliare"
      description="Soluții AI avansate pentru agenții imobiliare și dezvoltatorii de proprietăți"
    >
      <div className="space-y-12">
        {/* Real Estate AI Solutions */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
              </svg>
              <h3 className="text-xl font-semibold text-black">Evaluare Proprietăți</h3>
            </div>
            <p className="text-gray-600 mb-4">
              AI pentru evaluarea automată și precisă a proprietăților imobiliare
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Analiză piață în timp real</li>
              <li>• Comparare proprietăți similare</li>
              <li>• Predicții evoluție prețuri</li>
              <li>• Rapoarte detaliate evaluare</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              <h3 className="text-xl font-semibold text-black">Lead Generation</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Asistent AI pentru identificarea și calificarea lead-urilor
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Analiză comportament online</li>
              <li>• Scoring automat lead-uri</li>
              <li>• Segmentare clienți potențiali</li>
              <li>• Urmărire conversii</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"/>
              </svg>
              <h3 className="text-xl font-semibold text-black">Marketing Automat</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Campanii de marketing personalizate și automatizate
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Email marketing personalizat</li>
              <li>• Social media automation</li>
              <li>• Nurturing lead-uri</li>
              <li>• Analiză performanță</li>
            </ul>
          </div>
        </section>

        {/* Property Types */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-8">Tipuri de Proprietăți</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="border border-gray-200 rounded-lg p-6 text-center">
              <div className="flex justify-center mb-4">
                <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">Rezidențial</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Apartamente</li>
                <li>Case individuale</li>
                <li>Vile</li>
                <li>Condominii</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 text-center">
              <div className="flex justify-center mb-4">
                <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">Comercial</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Birouri</li>
                <li>Spații retail</li>
                <li>Centre comerciale</li>
                <li>Coworking</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 text-center">
              <div className="flex justify-center mb-4">
                <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">Industrial</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Depozite</li>
                <li>Fabrici</li>
                <li>Parcuri logistice</li>
                <li>Spații producție</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 text-center">
              <div className="flex justify-center mb-4">
                <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">Teren</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Terenuri construibile</li>
                <li>Terenuri agricole</li>
                <li>Parcele investiție</li>
                <li>Dezvoltări viitoare</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Market Analysis */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-8">Analiză Piață</h2>
          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                  </svg>
                  <h3 className="text-lg font-semibold text-black">Tendințe Prețuri</h3>
                </div>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Evoluție istorică prețuri</li>
                  <li>• Predicții future</li>
                  <li>• Comparații regionale</li>
                  <li>• Indicatori economici</li>
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  <h3 className="text-lg font-semibold text-black">Cerere & Ofertă</h3>
                </div>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Analiza cererii actuale</li>
                  <li>• Inventar disponibil</li>
                  <li>• Timp mediu vânzare</li>
                  <li>• Competitivitate zonală</li>
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  <h3 className="text-lg font-semibold text-black">ROI Investiții</h3>
                </div>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Calculare randament</li>
                  <li>• Analiză cash flow</li>
                  <li>• Riscuri investiție</li>
                  <li>• Oportunități profit</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Virtual Tours */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-8">Tururi Virtuale AI</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-black mb-4">Tehnologii Avansate</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-black mt-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  <div>
                    <h4 className="font-medium text-black">360° Photography</h4>
                    <p className="text-sm text-gray-600">Imagini immersive de înaltă calitate</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-black mt-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  <div>
                    <h4 className="font-medium text-black">VR Integration</h4>
                    <p className="text-sm text-gray-600">Experiențe de realitate virtuală</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-black mt-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  <div>
                    <h4 className="font-medium text-black">AR Staging</h4>
                    <p className="text-sm text-gray-600">Mobilare virtuală în timp real</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-black mb-4">Beneficii Business</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-black mt-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                  </svg>
                  <div>
                    <h4 className="font-medium text-black">Mai multe vizualizări</h4>
                    <p className="text-sm text-gray-600">Creștere cu 87% în interesul clienților</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-black mt-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  <div>
                    <h4 className="font-medium text-black">Vânzări mai rapide</h4>
                    <p className="text-sm text-gray-600">Reducere timp pe piață cu 31%</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-black mt-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  <div>
                    <h4 className="font-medium text-black">Costuri reduse</h4>
                    <p className="text-sm text-gray-600">Economii 60% la organizarea vizitelor</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CRM Integration */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-8">Integrare CRM</h2>
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-black mb-2">Contact Management</h3>
                <p className="text-gray-600 text-sm">
                  Gestionare completă bază de date clienți
                </p>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-black mb-2">Pipeline Vânzări</h3>
                <p className="text-gray-600 text-sm">
                  Urmărire completă proces vânzare
                </p>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-black mb-2">Rapoarte</h3>
                <p className="text-gray-600 text-sm">
                  Analytics și insights business
                </p>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-black mb-2">Automatizare</h3>
                <p className="text-gray-600 text-sm">
                  Workflow-uri și notificări automate
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MinimalPage>
  )
}
