import { MinimalPage } from '@/components/MinimalPage'

export default function GettingStartedPage() {
  return (
    <MinimalPage
      title="Ghid Rapid de Început"
      description="De la zero la primul agent AI funcțional în mai puțin de 3 minute. Onboarding perfect pentru utilizatori noi."
    >
      {/* Quick Start Checklist */}
      <section className="max-w-4xl mx-auto mb-20">
        <div className="bg-gray-50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-center mb-8">Checklist Setup 3 Minute</h2>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-4 bg-white rounded-xl">
              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">✓</div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">1. Creează Contul (30 secunde)</h3>
                <p className="text-gray-600 mb-3">
                  Înregistrare rapidă cu email și confirmare instantanee
                </p>
                <button className="bg-black text-white px-6 py-2 rounded-lg text-sm">
                  Creează Cont Gratuit
                </button>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-white rounded-xl">
              <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold">2</div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">2. Alege Template Agent (1 minut)</h3>
                <p className="text-gray-600 mb-3">
                  Selectează din template-urile pre-configurate pentru industria ta
                </p>
                <div className="grid grid-cols-3 gap-3">
                  <div className="border border-gray-200 rounded-lg p-3 text-center hover:border-black transition-all cursor-pointer">
                    <div className="text-2xl mb-1">🏥</div>
                    <div className="text-sm">Medical</div>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-3 text-center hover:border-black transition-all cursor-pointer">
                    <div className="text-2xl mb-1">🍽️</div>
                    <div className="text-sm">Restaurant</div>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-3 text-center hover:border-black transition-all cursor-pointer">
                    <div className="text-2xl mb-1">🏢</div>
                    <div className="text-sm">Business</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-white rounded-xl">
              <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold">3</div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">3. Personalizează Agentul (1 minut)</h3>
                <p className="text-gray-600 mb-3">
                  Numele, vocea și personalitatea agentului tău AI
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <input type="text" placeholder="Numele agentului" className="border border-gray-300 rounded-lg px-3 py-2 text-sm" />
                  <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
                    <option>Voce feminină călduroasă</option>
                    <option>Voce masculină profesională</option>
                    <option>Voce neutră prietenoasă</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-white rounded-xl">
              <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold">4</div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">4. Primul Test (30 secunde)</h3>
                <p className="text-gray-600 mb-3">
                  Testează agentul cu o conversație demo
                </p>
                <button className="bg-green-500 text-white px-6 py-2 rounded-lg text-sm font-semibold">
                  🎤 Testează Acum
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Tutorials */}
      <section className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Tutorial Video Scurt</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-100 rounded-2xl aspect-video flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 bg-black rounded-full mx-auto mb-4 flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
                <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Setup Complet (2:30 min)</h3>
              <p className="text-gray-600">De la cont nou la primul agent funcțional</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Ce vei învăța:</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-black rounded-full"></div>
                <span>Crearea contului și navigarea în dashboard</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-black rounded-full"></div>
                <span>Alegerea template-ului potrivit pentru business</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-black rounded-full"></div>
                <span>Personalizarea vocii și personalității</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-black rounded-full"></div>
                <span>Primul test și conversație demo</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-black rounded-full"></div>
                <span>Publicarea agentului pentru utilizare</span>
              </div>
            </div>
            
            <div className="pt-4">
              <button className="bg-black text-white px-6 py-3 rounded-xl font-semibold">
                Vezi Tutorial Complet
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* First Agent Creation Wizard */}
      <section className="max-w-4xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Wizard Creare Agent</h2>
        
        <div className="border border-gray-200 rounded-2xl p-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold">1</div>
              <span className="text-lg font-semibold">Informații de Bază</span>
            </div>
            <div className="text-sm text-gray-500">Pasul 1 din 4</div>
          </div>

          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Numele Agentului *</label>
                <input 
                  type="text" 
                  className="w-full border border-gray-300 rounded-lg px-3 py-2" 
                  placeholder="ex: Ana Rezervări"
                />
                <p className="text-xs text-gray-500 mt-1">Numele cu care se va prezenta clientului</p>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Industria *</label>
                <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
                  <option value="">Selectează industria</option>
                  <option value="healthcare">Sănătate și Medical</option>
                  <option value="restaurant">Restaurant și HoReCa</option>
                  <option value="retail">Retail și Comerț</option>
                  <option value="services">Servicii Profesionale</option>
                  <option value="education">Educație</option>
                  <option value="other">Altă industrie</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Scopul Principal</label>
              <div className="grid md:grid-cols-3 gap-3">
                <div className="border border-gray-200 rounded-lg p-4 text-center hover:border-black transition-all cursor-pointer">
                  <div className="text-2xl mb-2">📞</div>
                  <div className="font-semibold">Rezervări</div>
                  <div className="text-xs text-gray-600">Programări și rezervări</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4 text-center hover:border-black transition-all cursor-pointer">
                  <div className="text-2xl mb-2">💰</div>
                  <div className="font-semibold">Vânzări</div>
                  <div className="text-xs text-gray-600">Lead-uri și conversii</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4 text-center hover:border-black transition-all cursor-pointer">
                  <div className="text-2xl mb-2">🆘</div>
                  <div className="font-semibold">Suport</div>
                  <div className="text-xs text-gray-600">Asistență clienți</div>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Descriere Business (Opțional)</label>
              <textarea 
                className="w-full border border-gray-300 rounded-lg px-3 py-2 h-20" 
                placeholder="Scurtă descriere a business-ului pentru context agent..."
              ></textarea>
            </div>

            <div className="flex justify-between pt-6">
              <button className="text-gray-500 px-6 py-2">
                ← Înapoi
              </button>
              <button className="bg-black text-white px-8 py-2 rounded-lg font-semibold">
                Continuă →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Evită Greșelile Frecvente</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="border border-red-200 bg-red-50 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-red-800 mb-4">❌ Ce să NU faci</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-red-700">Instrucțiuni prea complexe</h4>
                  <p className="text-sm text-red-600">Nu supraîncărca agentul cu prea multe reguli</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-red-700">Testare insuficientă</h4>
                  <p className="text-sm text-red-600">Testează în diferite scenarii înainte de lansare</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-red-700">Lipsă backup plan</h4>
                  <p className="text-sm text-red-600">Setează escaladarea către oameni pentru cazuri complexe</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-green-200 bg-green-50 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-green-800 mb-4">✅ Best Practices</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-green-700">Început simplu</h4>
                  <p className="text-sm text-green-600">Începe cu funcționalități de bază și extinde treptat</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-green-700">Testare extensivă</h4>
                  <p className="text-sm text-green-600">Testează cu echipa înainte de a expune clienților</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-green-700">Monitorizare activă</h4>
                  <p className="text-sm text-green-600">Urmărește conversațiile și optimizează continuu</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="max-w-4xl mx-auto mb-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8">Următorii Pași</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="border border-gray-200 rounded-xl p-6 hover:border-black transition-all">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="font-semibold mb-2">Analytics</h3>
              <p className="text-sm text-gray-600 mb-4">
                Învață să interpretezi metricile și să optimizezi performanța
              </p>
              <button className="text-black font-semibold hover:underline">
                Ghid Analytics →
              </button>
            </div>

            <div className="border border-gray-200 rounded-xl p-6 hover:border-black transition-all">
              <div className="text-3xl mb-4">🔗</div>
              <h3 className="font-semibold mb-2">Integrări</h3>
              <p className="text-sm text-gray-600 mb-4">
                Conectează cu CRM, calendar și alte sisteme
              </p>
              <button className="text-black font-semibold hover:underline">
                Vezi Integrări →
              </button>
            </div>

            <div className="border border-gray-200 rounded-xl p-6 hover:border-black transition-all">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="font-semibold mb-2">Funcții Avansate</h3>
              <p className="text-sm text-gray-600 mb-4">
                Magic Button, Calendar AI și mult mai mult
              </p>
              <button className="text-black font-semibold hover:underline">
                Funcții Pro →
              </button>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-4">Ai nevoie de ajutor?</h3>
            <p className="text-gray-600 mb-6">
              Echipa noastră de suport este disponibilă 24/7 pentru a te ajuta cu orice întrebare
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-black text-white px-6 py-3 rounded-xl font-semibold">
                💬 Chat Live
              </button>
              <button className="border border-gray-300 px-6 py-3 rounded-xl font-semibold hover:border-black transition-all">
                📧 Email Suport
              </button>
              <button className="border border-gray-300 px-6 py-3 rounded-xl font-semibold hover:border-black transition-all">
                📞 Programează Call
              </button>
            </div>
          </div>
        </div>
      </section>
    </MinimalPage>
  )
}
