import { BasicPageLayout } from '@/components/BasicPageLayout'

export default function CalendarAIPage() {
  return (
    <BasicPageLayout
      title="Calendar AI"
      description="Calendarul care gândește și acționează pentru tine cu AI avansat. Magic Button, comenzi în limbaj natural și orchestrare automată."
    >
      {/* Magic Button Feature */}
      <section className="max-w-6xl mx-auto mb-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6">Magic Button Revolution</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un singur click declanșează sute de acțiuni perfecte - de la programări la campanii complete
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-gray-50 rounded-2xl p-8 h-80 flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 bg-black rounded-full mx-auto mb-4 flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <p className="text-lg font-semibold">Magic Button</p>
              <p className="text-gray-600">Click pentru a vedea magia</p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Ce se întâmplă la un click:</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-black rounded-full"></div>
                <span>Analizează calendarul și identifică sloturile optime</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-black rounded-full"></div>
                <span>Generează campanii personalizate pentru fiecare client</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-black rounded-full"></div>
                <span>Trimite invitații și confirmări automate</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-black rounded-full"></div>
                <span>Orchestrează follow-up-uri și reminder-e</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-black rounded-full"></div>
                <span>Ajustează automat în funcție de răspunsuri</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Natural Language Commands */}
      <section className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Comenzi în Limbaj Natural</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="border border-gray-200 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4">Spune ce vrei</h3>
            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <p className="text-gray-700 italic">
                "Programează toți clienții VIP pentru săptămâna viitoare și trimite-le oferta specială"
              </p>
            </div>
            <p className="text-gray-600">
              Calendar AI înțelege intenția ta și execută automat toate acțiunile necesare
            </p>
          </div>

          <div className="border border-gray-200 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4">AI interpretează</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                <span>Identifică clienții cu status VIP</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                <span>Găsește sloturi disponibile</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                <span>Creează programări optimale</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                <span>Pregătește oferta specială</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                <span>Trimite invitații personalizate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Cazuri de Utilizare</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">Clinici Medicale</h3>
            <p className="text-gray-600">
              Programări automate, reminder-e pentru tratamente, optimizarea programului medicilor
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">Restaurante</h3>
            <p className="text-gray-600">
              Rezervări dinamice, gestionarea evenimentelor speciale, optimizarea ocupării meselor
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6m0 0v6m0-6H8m0 0V6m0 0v6m0-6h8" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">Servicii Profesionale</h3>
            <p className="text-gray-600">
              Consultații automate, coordonarea echipelor, campanii de reactivare clienți
            </p>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="max-w-4xl mx-auto mb-20">
        <div className="border border-gray-200 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-center mb-8">Calculator ROI Calendar AI</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Situația actuală</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Ore săptămânale pentru programări</label>
                  <input type="number" className="w-full border border-gray-300 rounded-lg px-3 py-2" placeholder="20" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Programări ratate pe lună</label>
                  <input type="number" className="w-full border border-gray-300 rounded-lg px-3 py-2" placeholder="50" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Valoarea medie per programare (RON)</label>
                  <input type="number" className="w-full border border-gray-300 rounded-lg px-3 py-2" placeholder="200" />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Cu Calendar AI</h3>
              <div className="space-y-4 text-sm">
                <div className="flex justify-between p-3 bg-green-50 rounded-lg">
                  <span>Timp economisit</span>
                  <span className="font-semibold">18 ore/săptămână</span>
                </div>
                <div className="flex justify-between p-3 bg-green-50 rounded-lg">
                  <span>Programări ratate</span>
                  <span className="font-semibold">-95%</span>
                </div>
                <div className="flex justify-between p-3 bg-green-50 rounded-lg">
                  <span>Venit suplimentar/lună</span>
                  <span className="font-semibold">9,500 RON</span>
                </div>
                <div className="flex justify-between p-3 bg-black text-white rounded-lg">
                  <span>ROI lunar</span>
                  <span className="font-semibold">2,400%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </BasicPageLayout>
  )
}
