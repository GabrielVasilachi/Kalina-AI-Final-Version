import { MinimalPage } from '@/components/MinimalPage'

export default function PlatformPage() {
  return (
    <MinimalPage
      title="Platforma Kallina.ai"
      description="Cea mai avansată platformă AI vocală din România și Europa. Arhitectură în 3 niveluri pentru performanță și scalabilitate maximă."
    >
      {/* Architecture Overview */}
      <section className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Arhitectură în 3 Niveluri</h2>
        
        <div className="space-y-8">
          {/* Level 1 - Voice Layer */}
          <div className="border border-gray-200 rounded-xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center font-bold">1</div>
              <h3 className="text-2xl font-semibold">Nivelul Vocal</h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                </div>
                <h4 className="font-semibold mb-2">Recunoaștere Vocală</h4>
                <p className="text-sm text-gray-600">99.2% acuratețe în limba română</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2C7 1.45 7.45 1 8 1H16C16.55 1 17 1.45 17 2V4H20C20.55 4 21 4.45 21 5S20.55 6 20 6H19V19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V6H4C3.45 6 3 5.55 3 5S3.45 4 4 4H7Z" />
                  </svg>
                </div>
                <h4 className="font-semibold mb-2">Sinteză Vocală</h4>
                <p className="text-sm text-gray-600">Sub 100ms latență</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-1v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM22 18c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2z" />
                  </svg>
                </div>
                <h4 className="font-semibold mb-2">Procesare Audio</h4>
                <p className="text-sm text-gray-600">Noise cancellation avansat</p>
              </div>
            </div>
          </div>

          {/* Level 2 - AI Layer */}
          <div className="border border-gray-200 rounded-xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center font-bold">2</div>
              <h3 className="text-2xl font-semibold">Nivelul AI</h3>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">🧠</span>
                </div>
                <h4 className="font-semibold mb-2">NLP Avansat</h4>
                <p className="text-sm text-gray-600">Înțelegere contextuală</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
                  </svg>
                </div>
                <h4 className="font-semibold mb-2">Memorie Contextuală</h4>
                <p className="text-sm text-gray-600">Istoricul complet</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                </div>
                <h4 className="font-semibold mb-2">Detectare Emoții</h4>
                <p className="text-sm text-gray-600">Răspuns empatic</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h4 className="font-semibold mb-2">Învățare Adaptivă</h4>
                <p className="text-sm text-gray-600">Îmbunătățire continuă</p>
              </div>
            </div>
          </div>

          {/* Level 3 - Integration Layer */}
          <div className="border border-gray-200 rounded-xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center font-bold">3</div>
              <h3 className="text-2xl font-semibold">Nivelul de Integrare</h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </div>
                <h4 className="font-semibold mb-2">API Universal</h4>
                <p className="text-sm text-gray-600">Conectează orice sistem</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="font-semibold mb-2">Webhooks</h4>
                <p className="text-sm text-gray-600">Evenimente în timp real</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="font-semibold mb-2">Securitate</h4>
                <p className="text-sm text-gray-600">Encriptare end-to-end</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* System Diagram */}
      <section className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Diagrama Sistemului</h2>
        
        <div className="bg-gray-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <div className="inline-block bg-white border-2 border-black rounded-xl p-4">
              <h3 className="font-semibold">Client (Telefon/Web)</h3>
            </div>
            <div className="my-4">↓</div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
              <h4 className="font-semibold mb-2">Load Balancer</h4>
              <p className="text-sm text-gray-600">Distribuție trafic</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
              <h4 className="font-semibold mb-2">Voice Gateway</h4>
              <p className="text-sm text-gray-600">Procesare audio</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
              <h4 className="font-semibold mb-2">AI Engine</h4>
              <p className="text-sm text-gray-600">Inteligență artificială</p>
            </div>
          </div>

          <div className="text-center mb-8">
            <div className="my-4">↓</div>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-white border border-gray-200 rounded-lg p-3 text-center">
                <h5 className="font-medium text-sm">CRM</h5>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-3 text-center">
                <h5 className="font-medium text-sm">Calendar</h5>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-3 text-center">
                <h5 className="font-medium text-sm">Email</h5>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-3 text-center">
                <h5 className="font-medium text-sm">Analytics</h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Diferențiatori Unici</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="border border-gray-200 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              Optimizat pentru România
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>• NLP specialized pentru limba română</li>
              <li>• Înțelegerea accenturilor regionale</li>
              <li>• Conformitate cu reglementările locale</li>
              <li>• Suport în limba română 24/7</li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"/>
              </svg>
              <h3 className="text-xl font-semibold">Performanță Extremă</h3>
            </div>
            <ul className="space-y-2 text-gray-600">
              <li>• Latență sub 100ms pentru răspunsuri</li>
              <li>• Scalabilitate automată</li>
              <li>• 99.9% uptime garantat</li>
              <li>• Edge computing global</li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z"/>
              </svg>
              Securitate Enterprise
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Encriptare end-to-end</li>
              <li>• Conformitate GDPR și HIPAA</li>
              <li>• Audit trails complete</li>
              <li>• Data residency controlabilă</li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4zM6.7 8.8c-.7.7-1.9.7-2.6 0-.7-.7-.7-1.9 0-2.6.7-.7 1.9-.7 2.6 0 .7.7.7 1.9 0 2.6z"/>
              </svg>
              <h3 className="text-xl font-semibold">Flexibilitate Totală</h3>
            </div>
            <ul className="space-y-2 text-gray-600">
              <li>• API-uri complete pentru dezvoltatori</li>
              <li>• Customizare fără limite</li>
              <li>• Integrări native cu 200+ sisteme</li>
              <li>• White-label disponibil</li>
            </ul>
          </div>
        </div>
      </section>

      {/* LLM-Based TTS System */}
      <section className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Sistem TTS Bazat pe LLM</h2>
        
        <div className="bg-gradient-to-br from-indigo-50 to-white rounded-2xl p-8 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Inteligență Emoțională Vocală Revoluționară</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Angajatul Digital Kallina produce vorbire cu precizie și control stilistic de neegalat, înțelegând contextul și nuanțele emoționale pentru o dinamică conversațională adaptivă.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M11,16.5L6.5,12L7.91,10.59L11,13.67L16.59,8.09L18,9.5L11,16.5Z"/>
                </svg>
              </div>
              <h4 className="text-lg font-semibold mb-3">Analiză Semantică Profundă</h4>
              <p className="text-gray-600 text-sm">Modele lingvistice mari analizează textul lexical, semantic și contextual pentru înțelegere completă</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </div>
              <h4 className="text-lg font-semibold mb-3">Adaptabilitate Emoțională</h4>
              <p className="text-gray-600 text-sm">Generare vocală care se adaptează dinamic la contextul emoțional al conversației</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13,3A9,9 0 0,0 4,12H1L4.89,15.89L4.96,16.03L9,12H6A7,7 0 0,1 13,5A7,7 0 0,1 20,12A7,7 0 0,1 13,19C11.07,19 9.32,18.21 8.06,16.94L6.64,18.36C8.27,20 10.5,21 13,21A9,9 0 0,0 22,12A9,9 0 0,0 13,3Z"/>
                </svg>
              </div>
              <h4 className="text-lg font-semibold mb-3">Optimizare Continuă</h4>
              <p className="text-gray-600 text-sm">Echilibru perfect între expresivitate și viteză cu învățare din fiecare interacțiune</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h4 className="text-xl font-semibold mb-4 text-center">Conversie Vocală Emoțională Adaptivă</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-semibold mb-3 text-indigo-700">Capability Overview:</h5>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mt-1.5 flex-shrink-0"></span>
                    <span>Modificare dinamică a emoției în mesajele vocale existente</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mt-1.5 flex-shrink-0"></span>
                    <span>Păstrarea identității vorbitorului cu schimbarea expresiei</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mt-1.5 flex-shrink-0"></span>
                    <span>Control fin asupra intensității emoționale</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mt-1.5 flex-shrink-0"></span>
                    <span>Răspunsuri empatice bazate pe contextul conversației</span>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold mb-3 text-indigo-700">Use Cases:</h5>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mt-1.5 flex-shrink-0"></span>
                    <span>Personalizarea mesajelor de confirmare după tonul clientului</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mt-1.5 flex-shrink-0"></span>
                    <span>Adaptarea tonului în scenarii de suport clienți</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mt-1.5 flex-shrink-0"></span>
                    <span>Crearea de agenți de vânzări mai persuasivi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mt-1.5 flex-shrink-0"></span>
                    <span>Răspunsuri cu gamă emoțională largă și credibilă</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Voice Capabilities */}
      <section className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Capabilități Vocale Avansate</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="border border-gray-200 rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Personalitate Vocală</h3>
            <p className="text-gray-600 text-sm">Voci personalizate cu tonuri, accente și stiluri unice adaptate brandului</p>
          </div>

          <div className="border border-gray-200 rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Branding Vocal</h3>
            <p className="text-gray-600 text-sm">Identitate vocală unică care reflectă valorile și personalitatea companiei</p>
          </div>

          <div className="border border-gray-200 rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 9h-2V5h2v6zm0 4h-2v-2h2v2z"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Inteligență Conversațională</h3>
            <p className="text-gray-600 text-sm">Înțelegere contextuală avansată și răspunsuri naturale în timp real</p>
          </div>

          <div className="border border-gray-200 rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13,3A9,9 0 0,0 4,12H1L4.89,15.89L4.96,16.03L9,12H6A7,7 0 0,1 13,5A7,7 0 0,1 20,12A7,7 0 0,1 13,19C11.07,19 9.32,18.21 8.06,16.94L6.64,18.36C8.27,20 10.5,21 13,21A9,9 0 0,0 22,12A9,9 0 0,0 13,3Z"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Decizie în Timp Real</h3>
            <p className="text-gray-600 text-sm">Procesare instantanie și decizii autonome bazate pe context și intenție</p>
          </div>
        </div>

        <div className="mt-12 bg-gray-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Caracteristici Tehnice Avansate</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Platforma Kallina integrează cele mai avansate tehnologii de procesare vocală și inteligență artificială pentru a livra experiențe conversaționale de excepție.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full border border-gray-200 mb-4">
                <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z"/>
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Neural Voice Synthesis</h4>
              <p className="text-gray-600 text-sm">Generare vocală neurală cu 99.7% naturalețe și expresivitate emoțională</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full border border-gray-200 mb-4">
                <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9,5V9H21V5M9,19H21V15H9M9,14H21V10H9M4,9H8L6,7M4,19H8L6,17M4,14H8L6,12"/>
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Context Memory</h4>
              <p className="text-gray-600 text-sm">Memorie contextuală de lungă durată pentru conversații coerente și personalizate</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full border border-gray-200 mb-4">
                <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,12.5A1.5,1.5 0 0,1 10.5,11A1.5,1.5 0 0,1 12,9.5A1.5,1.5 0 0,1 13.5,11A1.5,1.5 0 0,1 12,12.5M12,7.2C9.9,7.2 8.2,8.9 8.2,11C8.2,14 12,17.5 12,17.5C12,17.5 15.8,14 15.8,11C15.8,8.9 14.1,7.2 12,7.2Z"/>
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Adaptive Learning</h4>
              <p className="text-gray-600 text-sm">Învățare adaptivă continuă pentru optimizarea performanței în timp real</p>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="max-w-4xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Roadmap Tehnologic</h2>
        
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-4 h-4 bg-green-500 rounded-full mt-2"></div>
            <div>
              <h3 className="font-semibold">Q1 2025 - Lansare Completă</h3>
              <p className="text-gray-600">Toate funcționalitățile core, suport multilingv 40+ limbi</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-4 h-4 bg-blue-500 rounded-full mt-2"></div>
            <div>
              <h3 className="font-semibold">Q2 2025 - AI Avatars Video</h3>
              <p className="text-gray-600">Conversații video cu avatars AI fotorealiste</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-4 h-4 bg-purple-500 rounded-full mt-2"></div>
            <div>
              <h3 className="font-semibold">Q3 2025 - Blockchain Integration</h3>
              <p className="text-gray-600">Smart contracts pentru automatizarea plăților</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-4 h-4 bg-orange-500 rounded-full mt-2"></div>
            <div>
              <h3 className="font-semibold">Q4 2025 - Quantum Computing</h3>
              <p className="text-gray-600">Primul AI vocal cu procesare quantum comercială</p>
            </div>
          </div>
        </div>
      </section>
    </MinimalPage>
  )
}
