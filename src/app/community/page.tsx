import { BasicPageLayout } from '@/components/BasicPageLayout'

export default function Community() {
  return (
    <BasicPageLayout
      title="Comunitatea Kallina"
      description="Alătură-te comunității noastre de dezvoltatori, antreprenori și pasionați de AI"
    >
      <div className="space-y-12">
        {/* Community Stats */}
        <section className="bg-gray-50 rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-black mb-2">5,200+</div>
              <div className="text-gray-600">Membri Activi</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-black mb-2">1,800+</div>
              <div className="text-gray-600">Proiecte Create</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-black mb-2">12,500+</div>
              <div className="text-gray-600">Mesaje Schimbate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-black mb-2">95%</div>
              <div className="text-gray-600">Satisfacție Membri</div>
            </div>
          </div>
        </section>

        {/* Community Platforms */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-8">Unde ne Găsești</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <h3 className="text-xl font-semibold text-black">Discord</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Chat în timp real cu dezvoltatori și experți AI. Întrebări rapide, ajutor tehnic și networking.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">2,100+ membri</span>
                <button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors text-sm">
                  Alătură-te
                </button>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                </svg>
                <h3 className="text-xl font-semibold text-black">GitHub</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Cod open-source, exemple de implementare și colaborare la proiecte community.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">1,500+ stars</span>
                <button className="px-4 py-2 bg-white border border-black text-black rounded-lg hover:bg-gray-50 transition-colors text-sm">
                  Vezi Repos
                </button>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
                </svg>
                <h3 className="text-xl font-semibold text-black">Reddit</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Forum pentru discuții aprofundate, cazuri de studiu și sharing de best practices.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">3,200+ membri</span>
                <button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors text-sm">
                  r/KallinaAI
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Community Events */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-8">Evenimente Community</h2>
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                    </svg>
                    <span className="text-sm text-gray-500">20 Decembrie 2024, 18:00</span>
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-2">
                    Webinar: "AI Voice în Healthcare - Cazuri Reale"
                  </h3>
                  <p className="text-gray-600">
                    Prezentare live cu Dr. Maria Popescu despre implementarea AI-ului conversațional 
                    în clinici și spitale. Studii de caz și Q&A.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <button className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
                    Înregistrare
                  </button>
                  <span className="text-sm text-gray-500 text-center">Gratuit</span>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                    </svg>
                    <span className="text-sm text-gray-500">15 Ianuarie 2025, 19:00</span>
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-2">
                    Hackathon: "Build with Kallina API"
                  </h3>
                  <p className="text-gray-600">
                    Competiție de 48h pentru dezvoltatori. Construiește aplicații inovatoare 
                    folosind API-urile Kallina. Premii în valoare de 10.000 EUR.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <button className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
                    Participă
                  </button>
                  <span className="text-sm text-gray-500 text-center">Online/Offline</span>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                    </svg>
                    <span className="text-sm text-gray-500">Monthly, prima joi</span>
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-2">
                    AI Coffee Chat București
                  </h3>
                  <p className="text-gray-600">
                    Întâlniri lunare informale pentru networking și discuții despre AI. 
                    Perfect pentru a cunoaște oameni din comunitate.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <button className="px-6 py-2 bg-white border border-black text-black rounded-lg hover:bg-gray-50 transition-colors">
                    Vezi Detalii
                  </button>
                  <span className="text-sm text-gray-500 text-center">București</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Community Members */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-8">Membri Destacați</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">Alexandru M.</h3>
              <p className="text-gray-600 text-sm mb-3">Lead Developer @ TechCorp</p>
              <p className="text-gray-600 text-sm">
                "Kallina mi-a transformat complet modul în care gândesc despre 
                interacțiunea cu clienții. API-urile sunt incredibil de simple!"
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">Dr. Maria P.</h3>
              <p className="text-gray-600 text-sm mb-3">Director Medical</p>
              <p className="text-gray-600 text-sm">
                "Implementarea în clinica noastră a fost perfectă. Pacienții adoră 
                noul sistem de programări vocale."
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">Radu T.</h3>
              <p className="text-gray-600 text-sm mb-3">Restaurant Owner</p>
              <p className="text-gray-600 text-sm">
                "Comenzile vocale au redus timpul de așteptare cu 60%. 
                Clienții sunt mult mai mulțumiți!"
              </p>
            </div>
          </div>
        </section>

        {/* Community Guidelines */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-8">Regulile Comunității</h2>
          <div className="bg-gray-50 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-black mb-4">Ce Încurajăm</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    <span className="text-gray-700">Sharing de cunoștințe și experiențe</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    <span className="text-gray-700">Ajutorarea membrilor cu întrebări</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    <span className="text-gray-700">Feedback constructiv și respectuos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    <span className="text-gray-700">Colaborarea la proiecte open-source</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-black mb-4">Ce Nu Permitem</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                    </svg>
                    <span className="text-gray-700">Spam sau conținut promocional excesiv</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                    </svg>
                    <span className="text-gray-700">Limbaj ofensiv sau discriminatoriu</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                    </svg>
                    <span className="text-gray-700">Sharing de informații confidențiale</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                    </svg>
                    <span className="text-gray-700">Off-topic persistent sau trolling</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Join CTA */}
        <section className="bg-black text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Gata să te alături comunității?
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Fii parte din cea mai activă comunitate de pasionați AI din România. 
            Învață, colaborează și construiește împreună cu noi viitorul conversațiilor inteligente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-black rounded-lg hover:bg-gray-100 transition-colors font-medium">
              Alătură-te pe Discord
            </button>
            <button className="px-8 py-3 bg-transparent border border-white text-white rounded-lg hover:bg-white hover:text-black transition-colors font-medium">
              Vezi pe GitHub
            </button>
          </div>
        </section>
      </div>
    </BasicPageLayout>
  )
}
