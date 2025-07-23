import { BasicPageLayout } from '@/components/BasicPageLayout'

export default function MagicButtonPage() {
  return (
    <BasicPageLayout
      title="Magic Button"
      description="Un click, sute de acțiuni perfecte - magia AI-ului în acțiune. Orchestrare automată de campanii și procese complexe."
    >
      {/* How It Works */}
      <section className="max-w-6xl mx-auto mb-20">
        <div className="text-center mb-12">
          <div className="w-32 h-32 bg-gradient-to-br from-black to-gray-600 rounded-full mx-auto mb-8 flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 shadow-2xl">
            <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
          <h2 className="text-3xl font-bold mb-4">Cum Funcționează Magic Button</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Algoritm avansat care analizează contextul și execută acțiuni complexe într-o fracțiune de secundă
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl">🧠</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">1. Analizează</h3>
            <p className="text-gray-600">
              Scanează calendarul, preferințele clientului și istoricul conversațiilor
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">2. Orchestrează</h3>
            <p className="text-gray-600">
              Creează și coordonează multiple procese în paralel pentru eficiență maximă
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">3. Execută</h3>
            <p className="text-gray-600">
              Implementează toate acțiunile și monitorizează rezultatele în timp real
            </p>
          </div>
        </div>
      </section>

      {/* Before/After Scenarios */}
      <section className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Înainte vs După</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="border-2 border-red-200 bg-red-50 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-red-800 mb-4 flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              </svg>
              Fără Magic Button
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span>Verifici manual calendarul (10 min)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span>Cauți contactele potrivite (15 min)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span>Compui mesaje individuale (30 min)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span>Trimiți manual fiecare invitație (20 min)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span>Setezi reminder-e manuale (10 min)</span>
              </div>
              <div className="border-t border-red-300 pt-3 mt-4">
                <strong className="text-red-800">Total: 85 minute</strong>
              </div>
            </div>
          </div>

          <div className="border-2 border-green-200 bg-green-50 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-green-800 mb-4 flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
              </svg>
              Cu Magic Button
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Click pe Magic Button (1 secundă)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>AI analizează automat tot (2 secunde)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Generează campanii personalizate (3 secunde)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Trimite toate invitațiile (1 secundă)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Setează toate reminder-ele (1 secundă)</span>
              </div>
              <div className="border-t border-green-300 pt-3 mt-4">
                <strong className="text-green-800">Total: 8 secunde</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-block bg-black text-white px-8 py-4 rounded-xl">
            <strong className="text-2xl">637x mai rapid</strong>
            <p className="text-sm mt-1">Eficiență incredibilă cu acuratețe perfectă</p>
          </div>
        </div>
      </section>

      {/* Algorithm Explanation */}
      <section className="max-w-4xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Algoritmul Magic Button</h2>
        
        <div className="space-y-8">
          <div className="border border-gray-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
              </svg>
              <h3 className="text-xl font-semibold">Faza de Analiză</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-2">Date de intrare:</h4>
                <ul className="text-sm space-y-1 text-gray-600">
                  <li>• Calendar și disponibilități</li>
                  <li>• Baza de date clienți</li>
                  <li>• Istoricul conversațiilor</li>
                  <li>• Preferințe și comportament</li>
                  <li>• Contextu campaniilor anterioare</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Procesare AI:</h4>
                <ul className="text-sm space-y-1 text-gray-600">
                  <li>• Analiza predictivă</li>
                  <li>• Segmentare automată</li>
                  <li>• Optimizare timming</li>
                  <li>• Personalizare conținut</li>
                  <li>• Calculul probabilităților</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              Faza de Orchestrare
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                <div>
                  <h4 className="font-medium">Generare Campanii Paralele</h4>
                  <p className="text-sm text-gray-600">Creează simultan campanii personalizate pentru fiecare segment de clienți</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                <div>
                  <h4 className="font-medium">Optimizare Resurse</h4>
                  <p className="text-sm text-gray-600">Distribuie inteligent sarcinile pentru performanță maximă</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                <div>
                  <h4 className="font-medium">Coordinare Acțiuni</h4>
                  <p className="text-sm text-gray-600">Sincronizează toate procesele pentru execuție perfectă</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              <h3 className="text-xl font-semibold">Faza de Execuție</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full mx-auto mb-2 flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"/>
                  </svg>
                </div>
                <h4 className="font-medium text-sm">Trimitere Invitații</h4>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full mx-auto mb-2 flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                  </svg>
                </div>
                <h4 className="font-medium text-sm">Creare Evenimente</h4>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full mx-auto mb-2 flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
                  </svg>
                </div>
                <h4 className="font-medium text-sm">Setare Reminder-e</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="max-w-4xl mx-auto mb-20">
        <div className="bg-gray-50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-center mb-8">ROI Calculator Magic Button</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Calculează economiile</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Campanii pe lună</label>
                  <input type="number" className="w-full border border-gray-300 rounded-lg px-3 py-2" placeholder="20" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Ore per campanie (metoda tradițională)</label>
                  <input type="number" step="0.1" className="w-full border border-gray-300 rounded-lg px-3 py-2" placeholder="1.5" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Cost pe oră (RON)</label>
                  <input type="number" className="w-full border border-gray-300 rounded-lg px-3 py-2" placeholder="100" />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Rezultate</h3>
              <div className="space-y-3">
                <div className="flex justify-between p-3 bg-white rounded-lg">
                  <span>Timp economisit/lună</span>
                  <span className="font-semibold">29.9 ore</span>
                </div>
                <div className="flex justify-between p-3 bg-white rounded-lg">
                  <span>Economii monetare</span>
                  <span className="font-semibold">2,990 RON</span>
                </div>
                <div className="flex justify-between p-3 bg-white rounded-lg">
                  <span>Îmbunătățire acuratețe</span>
                  <span className="font-semibold">+47%</span>
                </div>
                <div className="flex justify-between p-3 bg-black text-white rounded-lg">
                  <span>ROI anual</span>
                  <span className="font-semibold">8,970%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </BasicPageLayout>
  )
}
