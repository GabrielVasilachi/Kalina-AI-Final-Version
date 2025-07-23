import { MinimalPage } from '@/components/MinimalPage'

export default function AIAgentsPage() {
  return (
    <MinimalPage
      title="Agenții AI"
      description="Cunoaște echipa ta virtuală - fiecare expert în domeniul său. Ana, Mihai și Elena, specializați în vânzări, suport și marketing."
    >
      {/* Main Agents */}
      <section className="max-w-6xl mx-auto mb-20">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Ana - Sales Agent */}
          <div className="border border-gray-200 rounded-xl p-8 hover:border-black transition-all">
            <div className="text-center mb-6">
              <div className="w-24 h-24 bg-gradient-to-br from-pink-100 to-pink-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-12 h-12 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold">Ana</h3>
              <p className="text-gray-600">Agent Vânzări AI</p>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Specializări:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Închiderea vânzărilor</li>
                  <li>• Calificarea lead-urilor</li>
                  <li>• Upselling și cross-selling</li>
                  <li>• Negociere avansată</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Performanță:</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Rata de închidere</span>
                    <span className="font-semibold">73%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Timp mediu/vânzare</span>
                    <span className="font-semibold">4.2 min</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Satisfacție client</span>
                    <span className="font-semibold">96%</span>
                  </div>
                </div>
              </div>

              <button className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-900 transition-all">
                Vorbește cu Ana
              </button>
            </div>
          </div>

          {/* Mihai - Support Agent */}
          <div className="border border-gray-200 rounded-xl p-8 hover:border-black transition-all">
            <div className="text-center mb-6">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-12 h-12 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold">Mihai</h3>
              <p className="text-gray-600">Agent Suport AI</p>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Specializări:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Rezolvarea problemelor</li>
                  <li>• Suport tehnic</li>
                  <li>• Escaladare inteligentă</li>
                  <li>• Documentare automată</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Performanță:</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Prima rezolvare</span>
                    <span className="font-semibold">89%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Timp mediu/caz</span>
                    <span className="font-semibold">3.1 min</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Satisfacție client</span>
                    <span className="font-semibold">94%</span>
                  </div>
                </div>
              </div>

              <button className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-900 transition-all">
                Vorbește cu Mihai
              </button>
            </div>
          </div>

          {/* Elena - Marketing Agent */}
          <div className="border border-gray-200 rounded-xl p-8 hover:border-black transition-all">
            <div className="text-center mb-6">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-12 h-12 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold">Elena</h3>
              <p className="text-gray-600">Agent Marketing AI</p>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Specializări:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Lead generation</li>
                  <li>• Calificare prospecți</li>
                  <li>• Campanii personalizate</li>
                  <li>• Market research</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Performanță:</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Lead-uri calificate</span>
                    <span className="font-semibold">84%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Timp/calificare</span>
                    <span className="font-semibold">2.8 min</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Conversie în vânzări</span>
                    <span className="font-semibold">41%</span>
                  </div>
                </div>
              </div>

              <button className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-900 transition-all">
                Vorbește cu Elena
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Personality Customization */}
      <section className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Personalizarea Personalității</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Creează Agentul Perfect</h3>
            <p className="text-gray-600 mb-8">
              Fiecare agent poate fi personalizat să reflecte perfect cultura și valorile companiei tale.
            </p>

            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Ton și Stil</h4>
                <p className="text-sm text-gray-600">Formal, casual, prietenos, profesional sau un mix personalizat</p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Cunoștințe Specifice</h4>
                <p className="text-sm text-gray-600">Produse, servicii, procese și expertise unică companiei</p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Limba și Accent</h4>
                <p className="text-sm text-gray-600">40+ limbi cu accente regionale și adaptare culturală</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <h4 className="text-xl font-semibold mb-6 text-center">Personality Builder</h4>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Nume Agent</label>
                <input type="text" className="w-full border border-gray-300 rounded-lg px-3 py-2" placeholder="ex: Alexandra" />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Ton de Voce</label>
                <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
                  <option>Profesional și Prietenos</option>
                  <option>Formal și Respectuos</option>
                  <option>Casual și Relaxat</option>
                  <option>Energetic și Entuziast</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Specializare</label>
                <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
                  <option>Vânzări și Conversii</option>
                  <option>Suport și Asistență</option>
                  <option>Marketing și Lead Gen</option>
                  <option>Consultanță Specializată</option>
                </select>
              </div>
              
              <button className="w-full bg-black text-white py-3 rounded-lg font-semibold">
                Creează Agentul
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Voice Samples */}
      <section className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Mostre de Voce</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Ana - Vânzări</h3>
            <div className="bg-gray-100 rounded-xl p-6 mb-4">
              <div className="w-16 h-16 bg-pink-200 rounded-full mx-auto mb-4 flex items-center justify-center cursor-pointer hover:bg-pink-300 transition-all">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m-2 4H7a2 2 0 01-2-2V8a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2z" />
                </svg>
              </div>
              <p className="text-sm text-gray-600">
                "Bună ziua! Mă numesc Ana și sunt aici să vă ajut să găsiți soluția perfectă pentru nevoile dumneavoastră."
              </p>
            </div>
            <button className="text-black font-semibold hover:underline">Ascultă Mostra →</button>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Mihai - Suport</h3>
            <div className="bg-gray-100 rounded-xl p-6 mb-4">
              <div className="w-16 h-16 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center cursor-pointer hover:bg-blue-300 transition-all">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m-2 4H7a2 2 0 01-2-2V8a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2z" />
                </svg>
              </div>
              <p className="text-sm text-gray-600">
                "Salut! Sunt Mihai de la suport. Înțeleg perfect problema ta și te voi ajuta să o rezolvăm rapid."
              </p>
            </div>
            <button className="text-black font-semibold hover:underline">Ascultă Mostra →</button>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Elena - Marketing</h3>
            <div className="bg-gray-100 rounded-xl p-6 mb-4">
              <div className="w-16 h-16 bg-purple-200 rounded-full mx-auto mb-4 flex items-center justify-center cursor-pointer hover:bg-purple-300 transition-all">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m-2 4H7a2 2 0 01-2-2V8a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2z" />
                </svg>
              </div>
              <p className="text-sm text-gray-600">
                "Hei! Elena aici. Am pregătit câteva oferte speciale care s-ar putea să te intereseze foarte mult."
              </p>
            </div>
            <button className="text-black font-semibold hover:underline">Ascultă Mostra →</button>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="max-w-4xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Cazuri de Succes</h2>
        
        <div className="space-y-8">
          <div className="border border-gray-200 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Ana @ Restaurant "La Mama"</h3>
                <p className="text-gray-600 mb-4">
                  A crescut rezervările cu 340% în prima lună, gestionând 50+ apeluri pe zi cu o rată de închidere de 78%.
                </p>
                <div className="flex gap-4 text-sm">
                  <span className="bg-green-100 px-2 py-1 rounded">+340% rezervări</span>
                  <span className="bg-blue-100 px-2 py-1 rounded">78% închidere</span>
                  <span className="bg-purple-100 px-2 py-1 rounded">50+ apeluri/zi</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Mihai @ Clinica "MedLife"</h3>
                <p className="text-gray-600 mb-4">
                  A redus timpul de așteptare pentru programări de la 15 minute la 2 minute, cu satisfacție pacienți de 96%.
                </p>
                <div className="flex gap-4 text-sm">
                  <span className="bg-green-100 px-2 py-1 rounded">-87% timp așteptare</span>
                  <span className="bg-blue-100 px-2 py-1 rounded">96% satisfacție</span>
                  <span className="bg-purple-100 px-2 py-1 rounded">24/7 disponibil</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Elena @ Agenția "Digital Pro"</h3>
                <p className="text-gray-600 mb-4">
                  A generat 150+ lead-uri calificate pe lună, cu o rată de conversie în clienți de 42%.
                </p>
                <div className="flex gap-4 text-sm">
                  <span className="bg-green-100 px-2 py-1 rounded">150+ lead-uri/lună</span>
                  <span className="bg-blue-100 px-2 py-1 rounded">42% conversie</span>
                  <span className="bg-purple-100 px-2 py-1 rounded">ROI 450%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MinimalPage>
  )
}
