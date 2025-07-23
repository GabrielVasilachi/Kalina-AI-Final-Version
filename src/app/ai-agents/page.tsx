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

      {/* Advanced Dialogue & Multi-Character System */}
      <section className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Sistem Avansat de Dialog Multicaracter</h2>
        
        <div className="bg-gradient-to-br from-emerald-50 to-white rounded-2xl p-8 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Mod Text-către-Dialog Revoluționar</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Permite crearea de scenarii în care Angajatul Digital Kallina poate simula conversații între mai multe "personaje" sau poate transfera conversația către departamente virtuale diferite.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-xl p-6 border border-emerald-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M17,7H14V9H17V16H14V18H17A1,1 0 0,0 18,17V8A1,1 0 0,0 17,7M11,7H7A1,1 0 0,0 6,8V17A1,1 0 0,0 7,18H11V16H8V9H11V7Z"/>
                  </svg>
                </div>
                <h4 className="text-lg font-semibold">Dialoguri Multi-Locutor</h4>
              </div>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-emerald-600 rounded-full mt-1.5 flex-shrink-0"></span>
                  <span>Conversații între mai multe "personaje" AI în același flux audio</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-emerald-600 rounded-full mt-1.5 flex-shrink-0"></span>
                  <span>Transferuri seamless către "departamente" virtuale</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-emerald-600 rounded-full mt-1.5 flex-shrink-0"></span>
                  <span>Generare automată a fluxului emoțional realist</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-emerald-600 rounded-full mt-1.5 flex-shrink-0"></span>
                  <span>Structurare JSON simplă pentru scenarii complexe</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 border border-emerald-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,2C17.52,2 22,6.48 22,12C22,17.52 17.52,22 12,22C6.48,22 2,17.52 2,12C2,6.48 6.48,2 12,2M15.5,8H14.5C14.5,6.75 13.25,5.5 12,5.5C10.75,5.5 9.5,6.75 9.5,8H8.5C8.5,6.19 9.69,5 11.5,5H12.5C14.31,5 15.5,6.19 15.5,8M12,8.5C10.62,8.5 9.5,9.62 9.5,11V15.5C9.5,16.88 10.62,18 12,18C13.38,18 14.5,16.88 14.5,15.5V11C14.5,9.62 13.38,8.5 12,8.5Z"/>
                  </svg>
                </div>
                <h4 className="text-lg font-semibold">Comutare Multi-Personaj</h4>
              </div>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-emerald-600 rounded-full mt-1.5 flex-shrink-0"></span>
                  <span>Un singur agent comută între diferite personalități</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-emerald-600 rounded-full mt-1.5 flex-shrink-0"></span>
                  <span>Schimbarea vocii și stilului de comunicare dinamic</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-emerald-600 rounded-full mt-1.5 flex-shrink-0"></span>
                  <span>Reguli de business pentru comutare contextualizeată</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-emerald-600 rounded-full mt-1.5 flex-shrink-0"></span>
                  <span>De la "Recepționer" la "Manager evenimente" instant</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-black text-white rounded-xl p-6">
            <h4 className="text-xl font-semibold mb-4 text-center">Use Cases Avansate</h4>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                  </svg>
                </div>
                <h5 className="font-semibold mb-2">Suport Tehnic pe Nivele</h5>
                <p className="text-gray-300 text-sm">Tier 1 → Tier 2 → Specialist cu tranziții naturale</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19,3H5C3.9,3 3,3.9 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.9 20.1,3 19,3M19,19H5V5H19V19Z"/>
                  </svg>
                </div>
                <h5 className="font-semibold mb-2">Simulări Training</h5>
                <p className="text-gray-300 text-sm">Scenarii interactive cu roluri multiple pentru educație</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21,9V7L9,5V9L21,9M12,2A7,7 0 0,1 19,9A7,7 0 0,1 12,16A7,7 0 0,1 5,9A7,7 0 0,1 12,2M12,4A5,5 0 0,0 7,9A5,5 0 0,0 12,14A5,5 0 0,0 17,9A5,5 0 0,0 12,4Z"/>
                  </svg>
                </div>
                <h5 className="font-semibold mb-2">Campanii Narative</h5>
                <p className="text-gray-300 text-sm">Marketing storytelling cu personaje multiple captivante</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-Agent Intelligence */}
      <section className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Sistem Multi-Agent Inteligent</h2>
        
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Coordonare Autonomă de Agenți</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Platforma Kallina orchestrează ecosisteme complexe de agenți AI care colaborează în timp real pentru a livra rezultate excepționale.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2A2,2 0 0,1 14,4C14,4.74 13.6,5.39 13,5.73V7H14A7,7 0 0,1 21,14H22A1,1 0 0,1 23,15V18A1,1 0 0,1 22,19H21V20A2,2 0 0,1 19,22H5A2,2 0 0,1 3,20V19H2A1,1 0 0,1 1,18V15A1,1 0 0,1 2,14H3A7,7 0 0,1 10,7H11V5.73C10.4,5.39 10,4.74 10,4A2,2 0 0,1 12,2M12,4A0.5,0.5 0 0,0 11.5,4.5A0.5,0.5 0 0,0 12,5A0.5,0.5 0 0,0 12.5,4.5A0.5,0.5 0 0,0 12,4Z"/>
                </svg>
              </div>
              <h4 className="font-semibold mb-2">A2A Protocols</h4>
              <p className="text-gray-600 text-sm">Protocoale avansate de comunicare agent-to-agent pentru coordonare seamless</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z"/>
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Context Sharing</h4>
              <p className="text-gray-600 text-sm">Memorie partajată și context comun pentru coherență conversațională</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M10,17L5,12L6.41,10.59L10,14.17L17.59,6.58L19,8L10,17Z"/>
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Task Distribution</h4>
              <p className="text-gray-600 text-sm">Distribuție inteligentă de sarcini bazată pe specializare și disponibilitate</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13,3A9,9 0 0,0 4,12H1L4.89,15.89L4.96,16.03L9,12H6A7,7 0 0,1 13,5A7,7 0 0,1 20,12A7,7 0 0,1 13,19C11.07,19 9.32,18.21 8.06,16.94L6.64,18.36C8.27,20 10.5,21 13,21A9,9 0 0,0 22,12A9,9 0 0,0 13,3Z"/>
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Adaptive Learning</h4>
              <p className="text-gray-600 text-sm">Învățare colaborativă și optimizare continuă a performanței de grup</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="border border-gray-200 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,14L6.5,9.5L7.91,8.09L11,11.18L16.09,6.09L17.5,7.5L11,14Z"/>
              </svg>
              Workflow Orchestration
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></span>
                <span>Coordonare automată între agenți pentru procese complexe</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></span>
                <span>Escaladare inteligentă bazată pe competențe și context</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></span>
                <span>Handoff seamless între agenți specializați</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></span>
                <span>Monitorizare în timp real a performanței colective</span>
              </li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20,2H4A2,2 0 0,0 2,4V16A2,2 0 0,0 4,18H18L22,22V4A2,2 0 0,0 20,2M6,9H18V11H6M6,5H18V7H6M6,13H15V15H6V13Z"/>
              </svg>
              Knowledge Federation
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></span>
                <span>Bază de cunoștințe federată accesibilă instant</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></span>
                <span>Actualizări în timp real ale informațiilor partajate</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></span>
                <span>Verificare și validare cross-agent pentru acuratețe</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></span>
                <span>Învățare distribuită și sincronizare de experiență</span>
              </li>
            </ul>
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
