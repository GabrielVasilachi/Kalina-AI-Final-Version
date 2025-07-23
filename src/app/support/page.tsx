import { MinimalPage } from '@/components/MinimalPage'

export default function Support() {
  return (
    <MinimalPage
      title="Suport & Ajutor"
      description="Găsește răspunsuri la întrebările tale sau contactează echipa noastră de suport"
    >
      <div className="space-y-12">
        {/* Quick Help */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg border border-gray-100 text-center">
            <div className="flex justify-center mb-4">
              <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-black mb-3">Chat Live</h3>
            <p className="text-gray-600 mb-4">
              Vorbește direct cu un expert din echipa noastră
            </p>
            <button className="w-full px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
              Începe Conversația
            </button>
          </div>

          <div className="bg-white p-8 rounded-lg border border-gray-100 text-center">
            <div className="flex justify-center mb-4">
              <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-black mb-3">Email Suport</h3>
            <p className="text-gray-600 mb-4">
              Trimite-ne un email și îți răspundem în max 24h
            </p>
            <button className="w-full px-4 py-2 bg-white border border-black text-black rounded-lg hover:bg-gray-50 transition-colors">
              Trimite Email
            </button>
          </div>

          <div className="bg-white p-8 rounded-lg border border-gray-100 text-center">
            <div className="flex justify-center mb-4">
              <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-black mb-3">Suport Telefonic</h3>
            <p className="text-gray-600 mb-4">
              Sună-ne pentru asistență imediată
            </p>
            <button className="w-full px-4 py-2 bg-white border border-black text-black rounded-lg hover:bg-gray-50 transition-colors">
              +40 21 XXX XXXX
            </button>
          </div>
        </section>

        {/* FAQ Section */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-8">Întrebări Frecvente</h2>
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg">
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <svg className="w-5 h-5 text-black mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/>
                  </svg>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-black mb-2">
                      Cum încep să folosesc platforma Kallina?
                    </h3>
                    <p className="text-gray-600">
                      Pentru a începe, creează un cont gratuit, configurează primul tău agent AI folosind ghidul nostru 
                      pas cu pas, apoi integrează-l în sistemele tale existente prin API-urile noastre simple.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg">
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <svg className="w-5 h-5 text-black mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/>
                  </svg>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-black mb-2">
                      Ce limbi suportă agenții AI Kallina?
                    </h3>
                    <p className="text-gray-600">
                      Agenții noștri AI suportă peste 40 de limbi, inclusiv română, engleză, franceză, germană, spaniolă 
                      și multe altele. Detectează automat limba clientului și răspunde în mod corespunzător.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg">
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <svg className="w-5 h-5 text-black mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/>
                  </svg>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-black mb-2">
                      Cât de sigure sunt datele mele?
                    </h3>
                    <p className="text-gray-600">
                      Securitatea datelor este prioritatea noastră #1. Folosim criptare end-to-end, certificări SOC 2, 
                      conformitate GDPR și servere localizate în UE pentru a-ți proteja informațiile.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg">
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <svg className="w-5 h-5 text-black mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/>
                  </svg>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-black mb-2">
                      Pot integra Kallina cu sistemele mele existente?
                    </h3>
                    <p className="text-gray-600">
                      Da! Oferim integrări native cu peste 200 de platforme populare și API-uri RESTful pentru 
                      integrări personalizate. Echipa noastră tehnică te poate ajuta cu implementarea.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Help Categories */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-8">Centre de Ajutor</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="flex items-center gap-3 mb-4">
                <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <h3 className="text-lg font-semibold text-black">Primul Pas</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Ghiduri pentru începători și configurarea inițială
              </p>
              <div className="text-sm text-gray-500">
                12 articole disponibile
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="flex items-center gap-3 mb-4">
                <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                </svg>
                <h3 className="text-lg font-semibold text-black">Integrări</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Cum să conectezi Kallina cu alte platforme
              </p>
              <div className="text-sm text-gray-500">
                25 ghiduri de integrare
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="flex items-center gap-3 mb-4">
                <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"/>
                </svg>
                <h3 className="text-lg font-semibold text-black">API & Dezvoltare</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Documentație tehnică și exemple de cod
              </p>
              <div className="text-sm text-gray-500">
                35 resurse pentru dezvoltatori
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="flex items-center gap-3 mb-4">
                <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <h3 className="text-lg font-semibold text-black">Troubleshooting</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Soluții pentru problemele comune
              </p>
              <div className="text-sm text-gray-500">
                18 soluții rapide
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="flex items-center gap-3 mb-4">
                <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                <h3 className="text-lg font-semibold text-black">Best Practices</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Sfaturi pentru optimizarea performanței
              </p>
              <div className="text-sm text-gray-500">
                22 ghiduri de optimizare
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="flex items-center gap-3 mb-4">
                <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
                </svg>
                <h3 className="text-lg font-semibold text-black">Facturare</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Întrebări despre planuri și plăți
              </p>
              <div className="text-sm text-gray-500">
                8 ghiduri de facturare
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="bg-gray-50 rounded-lg p-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">
                Nu ai găsit răspunsul?
              </h2>
              <p className="text-gray-600">
                Completează formularul de mai jos și echipa noastră îți va răspunde în cel mai scurt timp.
              </p>
            </div>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-black mb-2">Nume</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Numele tău complet"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="email@exemplu.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-black mb-2">Subiect</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Selectează o categorie</option>
                  <option>Suport tehnic</option>
                  <option>Întrebări despre facturare</option>
                  <option>Cerere funcționalitate nouă</option>
                  <option>Raportare bug</option>
                  <option>Altele</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-black mb-2">Mesaj</label>
                <textarea 
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Descrie problema sau întrebarea ta..."
                ></textarea>
              </div>
              <button type="submit" className="w-full px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-medium">
                Trimite Mesajul
              </button>
            </form>
          </div>
        </section>
      </div>
    </MinimalPage>
  )
}
