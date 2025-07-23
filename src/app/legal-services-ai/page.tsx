import { BasicPageLayout } from '@/components/BasicPageLayout'

export default function LegalServicesAI() {
  return (
    <BasicPageLayout
      title="AI pentru Servicii Juridice"
      description="Soluții AI avansate pentru cabinetele de avocatură și firmele de consultanță juridică"
    >
      <div className="space-y-12">
        {/* Legal AI Solutions */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
              </svg>
              <h3 className="text-xl font-semibold text-black">Analiză Contracte</h3>
            </div>
            <p className="text-gray-600 mb-4">
              AI pentru analizarea și revizuirea automată a contractelor juridice
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Detectare clauze problematice</li>
              <li>• Verificare conformitate</li>
              <li>• Sugestii îmbunătățiri</li>
              <li>• Comparare versiuni</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              <h3 className="text-xl font-semibold text-black">Cercetare Juridică</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Asistent AI pentru cercetare și documentare juridică
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Căutare jurisprudență</li>
              <li>• Analiză cazuri similare</li>
              <li>• Rezumuri automate</li>
              <li>• Citate și referințe</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
              </svg>
              <h3 className="text-xl font-semibold text-black">Documente Auto</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Generare automată documente juridice și formulare
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Template-uri personalizate</li>
              <li>• Completare automată</li>
              <li>• Validare juridică</li>
              <li>• Export multiple formate</li>
            </ul>
          </div>
        </section>

        {/* Legal Practice Areas */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-8">Domenii de Practică</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-black mb-4">Drept Comercial</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  <span className="text-gray-700">Contracte comerciale</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  <span className="text-gray-700">Due diligence</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  <span className="text-gray-700">Fuziuni și achiziții</span>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-black mb-4">Drept Civil</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  <span className="text-gray-700">Litigii civile</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  <span className="text-gray-700">Drept imobiliar</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  <span className="text-gray-700">Drept familiei</span>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-black mb-4">Drept Penal</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  <span className="text-gray-700">Apărare penală</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  <span className="text-gray-700">Crimă economică</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  <span className="text-gray-700">Consultanță juridică</span>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-black mb-4">Proprietate Intelectuală</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  <span className="text-gray-700">Brevete și mărci</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  <span className="text-gray-700">Drepturi de autor</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  <span className="text-gray-700">Licențe IP</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Client Portal */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-8">Portal Client</h2>
          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-black mb-2">Urmărire Cazuri</h3>
                <p className="text-gray-600 text-sm">
                  Actualizări în timp real despre progresul cazurilor
                </p>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-black mb-2">Documente</h3>
                <p className="text-gray-600 text-sm">
                  Acces securizat la toate documentele cazului
                </p>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-black mb-2">Facturare</h3>
                <p className="text-gray-600 text-sm">
                  Transparență completă în facturare și costuri
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Benefits */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-8">Beneficii Implementare</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-black mb-4">Eficiență Operațională</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-black mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  Reducere timp cercetare cu 80%
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-black mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  Automatizare documente standard
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-black mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  Optimizare flux de lucru
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-black mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  Reducere erori umane
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-black mb-4">Competitivitate</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-black mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  Servicii mai rapide pentru clienți
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-black mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  Costuri operaționale reduse
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-black mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  Calitate superioară servicii
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-black mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  Scalabilitate practică
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </BasicPageLayout>
  )
}
