import { MinimalPage } from '@/components/MinimalPage'

export default function FeaturesPage() {
  return (
    <MinimalPage
      title="Funcționalități Complete"
      description="Toate capabilitățile platformei Kallina.ai într-un singur loc. De la AI conversațional la automatizări complexe."
    >
      {/* Hero Features Overview */}
      <section className="max-w-6xl mx-auto mb-20">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-2">50+ Funcționalități</h3>
            <p className="text-gray-600">De la conversații simple la automatizări complexe</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 3h18v18H3V3zm16 16V5H5v14h14zM11 7h2v2h-2V7zm0 4h2v6h-2v-6z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-2">Integrări Native</h3>
            <p className="text-gray-600">Conectare cu 200+ aplicații și servicii</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-2">Enterprise Ready</h3>
            <p className="text-gray-600">Securitate, scalabilitate și compliance complete</p>
          </div>
        </div>
      </section>

      {/* Core AI Features */}
      <section className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Capabilități AI Conversaționale</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="border border-gray-200 rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold">Procesare Vocală Avansată</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-black rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold">Speech-to-Text în Timp Real</h4>
                  <p className="text-sm text-gray-600">Recunoaștere vocală cu precizie 99.2% în română</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-black rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold">Text-to-Speech Natural</h4>
                  <p className="text-sm text-gray-600">20+ voci românești realiste cu emoții</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-black rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold">Detectare Emoții</h4>
                  <p className="text-sm text-gray-600">Analiză sentiment și adaptare ton conversație</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-black rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold">Filtrare Zgomot</h4>
                  <p className="text-sm text-gray-600">AI noise cancellation pentru claritate perfectă</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.1 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold">Gestionare Inteligentă</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-black rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold">Context Conversație</h4>
                  <p className="text-sm text-gray-600">Memorie pe termen lung și context multi-turn</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-black rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold">Întreruperi Naturale</h4>
                  <p className="text-sm text-gray-600">Gestionarea întreruperilor ca într-o conversație reală</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-black rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold">Transfer Seamless</h4>
                  <p className="text-sm text-gray-600">Escaladare către operatori umani cu context</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-black rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold">Multi-limbă</h4>
                  <p className="text-sm text-gray-600">Support pentru 40+ limbi cu traducere în timp real</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Magic Button & Calendar AI */}
      <section className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Funcționalități Signature</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold">Magic Button™</h3>
            </div>
            
            <p className="text-gray-700 mb-6">
              Un singur click pentru a activa agentul AI perfect pentru situația curentă. 
              Tehnologie brevetată de context switching.
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-sm">Detectare automată context business</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-sm">Switching instant între personalități AI</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-sm">Adaptare automată la tipul de client</span>
              </div>
            </div>
            
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold w-full">
              Testează Magic Button
            </button>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.1 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold">Calendar AI</h3>
            </div>
            
            <p className="text-gray-700 mb-6">
              Gestionare inteligentă a programărilor cu optimizare automată, 
              detectare conflicte și sugestii proactive.
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-sm">Programări vocale în limbaj natural</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-sm">Optimizare automată slot-uri libere</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-sm">Reminders automatizate pentru clienți</span>
              </div>
            </div>
            
            <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-xl font-semibold w-full">
              Demo Calendar AI
            </button>
          </div>
        </div>
      </section>

      {/* Integration Features */}
      <section className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Integrări & Automatizări</h2>
        
        <div className="bg-gray-50 rounded-2xl p-8">
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center mx-auto mb-3">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h4 className="font-semibold">CRM</h4>
              <p className="text-sm text-gray-600">Salesforce, HubSpot, Pipedrive</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center mx-auto mb-3">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.1 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
                </svg>
              </div>
              <h4 className="font-semibold">Calendar</h4>
              <p className="text-sm text-gray-600">Google, Outlook, Calendly</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center mx-auto mb-3">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <h4 className="font-semibold">Email</h4>
              <p className="text-sm text-gray-600">Gmail, Outlook, Mailchimp</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center mx-auto mb-3">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h4 className="font-semibold">E-commerce</h4>
              <p className="text-sm text-gray-600">Shopify, WooCommerce</p>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">200+ Integrări Disponibile</h3>
            <p className="text-gray-600 mb-6">
              Conectează-te cu toate aplicațiile și serviciile pe care le folosești deja
            </p>
            <button className="bg-black text-white px-8 py-3 rounded-xl font-semibold">
              Vezi Toate Integrările
            </button>
          </div>
        </div>
      </section>

      {/* Analytics & Reporting */}
      <section className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Analytics & Raportare</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="border border-gray-200 rounded-xl p-6">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Metrici în Timp Real</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Apeluri active și în așteptare</li>
              <li>• Rata de conversie live</li>
              <li>• Timp mediu de răspuns</li>
              <li>• Sentiment clienți în timp real</li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-xl p-6">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Rapoarte Detaliate</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Performance săptămânal/lunar</li>
              <li>• Analiza conversațiilor</li>
              <li>• ROI și costuri per apel</li>
              <li>• Trending topics și feedback</li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-xl p-6">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">AI Insights</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Sugestii optimizare automată</li>
              <li>• Predictii trend business</li>
              <li>• Alertes anomalii performance</li>
              <li>• Recomandări îmbunătățire</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Enterprise Features */}
      <section className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Funcționalități Enterprise</h2>
        
        <div className="bg-gradient-to-r from-gray-900 to-black rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Securitate & Compliance</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold">GDPR Compliant</h4>
                    <p className="text-sm text-gray-300">Protecția datelor conform reglementărilor europene</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold">Criptare End-to-End</h4>
                    <p className="text-sm text-gray-300">Toate conversațiile sunt criptate AES-256</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold">Audit Trail Complet</h4>
                    <p className="text-sm text-gray-300">Logging detaliat pentru compliance</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold">SSO & Multi-Factor Auth</h4>
                    <p className="text-sm text-gray-300">Integrare cu Active Directory și Okta</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">Scalabilitate & Performance</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold">Auto-scaling</h4>
                    <p className="text-sm text-gray-300">Capacitate automată în funcție de trafic</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold">99.9% Uptime SLA</h4>
                    <p className="text-sm text-gray-300">Infrastructură redundantă multi-region</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold">Load Balancing Inteligent</h4>
                    <p className="text-sm text-gray-300">Distribuție optimă a apelurilor</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold">Backup & Disaster Recovery</h4>
                    <p className="text-sm text-gray-300">Redundanță completă și recovery instant</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <h4 className="text-xl font-semibold mb-4">Ai nevoie de o soluție enterprise?</h4>
            <button className="bg-white text-black px-8 py-3 rounded-xl font-semibold mr-4">
              Vorbește cu Sales
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-xl font-semibold">
              Demo Enterprise
            </button>
          </div>
        </div>
      </section>

      {/* Multilingual Voice Technology */}
      <section className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Tehnologie Vocală Multilingvă Avansată</h2>
        
        <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Voci Neurale Multilingve (Tip Azure Jenny/Ryan)</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Un singur model vocal Kallina poate vorbi peste 40 de limbi cu adaptare de accent și detectare dinamică a limbii - eliminând nevoia de multipli actori vocali.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.9,17.39C17.64,16.59 16.89,16 16,16H15V13A1,1 0 0,0 14,12H8V10H10A1,1 0 0,0 11,9V7H13A2,2 0 0,0 15,5V4.59C17.93,5.77 20,8.64 20,12C20,14.08 19.2,15.97 17.9,17.39M11,19.93C7.05,19.44 4,16.08 4,12C4,11.38 4.08,10.78 4.21,10.21L9,15V16A2,2 0 0,0 11,18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"/>
                </svg>
              </div>
              <h4 className="font-semibold mb-2">40+ Limbi Suportate</h4>
              <p className="text-gray-600 text-sm">Acoperire globală cu aceeași personalitate vocală</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13,3A9,9 0 0,0 4,12H1L4.89,15.89L4.96,16.03L9,12H6A7,7 0 0,1 13,5A7,7 0 0,1 20,12A7,7 0 0,1 13,19C11.07,19 9.32,18.21 8.06,16.94L6.64,18.36C8.27,20 10.5,21 13,21A9,9 0 0,0 22,12A9,9 0 0,0 13,3Z"/>
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Detectare Automată</h4>
              <p className="text-gray-600 text-sm">Comutare instantly când detectează altă limbă</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M11,16.5L6.5,12L7.91,10.59L11,13.67L16.59,8.09L18,9.5L11,16.5Z"/>
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Brand Consistency</h4>
              <p className="text-gray-600 text-sm">Aceeași voce de brand pe toate piețele globale</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2C17.52,2 22,6.48 22,12C22,17.52 17.52,22 12,22C6.48,22 2,17.52 2,12C2,6.48 6.48,2 12,2M15.5,8H14.5C14.5,6.75 13.25,5.5 12,5.5C10.75,5.5 9.5,6.75 9.5,8H8.5C8.5,6.19 9.69,5 11.5,5H12.5C14.31,5 15.5,6.19 15.5,8M12,8.5C10.62,8.5 9.5,9.62 9.5,11V15.5C9.5,16.88 10.62,18 12,18C13.38,18 14.5,16.88 14.5,15.5V11C14.5,9.62 13.38,8.5 12,8.5Z"/>
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Accent Regional</h4>
              <p className="text-gray-600 text-sm">Adaptare culturală și accent local automatic</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-cyan-200">
            <h4 className="text-xl font-semibold mb-6 text-center">Comutare de Accent în Timp Real</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-semibold mb-3 text-cyan-700">Flexibilitate Avansată:</h5>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-cyan-600 rounded-full mt-1.5 flex-shrink-0"></span>
                    <span>Schimbarea accentului în mijlocul conversației</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-cyan-600 rounded-full mt-1.5 flex-shrink-0"></span>
                    <span>De la engleză americană la britanică instant</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-cyan-600 rounded-full mt-1.5 flex-shrink-0"></span>
                    <span>Păstrarea caracteristicilor de bază ale vocii</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-cyan-600 rounded-full mt-1.5 flex-shrink-0"></span>
                    <span>Adaptare la accentul utilizatorului detectat</span>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold mb-3 text-cyan-700">Aplicații Practice:</h5>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-cyan-600 rounded-full mt-1.5 flex-shrink-0"></span>
                    <span>Servicii globale cu accent local familiar</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-cyan-600 rounded-full mt-1.5 flex-shrink-0"></span>
                    <span>Aplicații educaționale pentru învățarea limbilor</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-cyan-600 rounded-full mt-1.5 flex-shrink-0"></span>
                    <span>Asistenți vocali personalizați cultural</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-cyan-600 rounded-full mt-1.5 flex-shrink-0"></span>
                    <span>Îmbunătățirea confortului și înțelegerii</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-3 bg-cyan-100 px-6 py-3 rounded-full">
            <svg className="w-5 h-5 text-cyan-700" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.9,17.39C17.64,16.59 16.89,16 16,16H15V13A1,1 0 0,0 14,12H8V10H10A1,1 0 0,0 11,9V7H13A2,2 0 0,0 15,5V4.59C17.93,5.77 20,8.64 20,12C20,14.08 19.2,15.97 17.9,17.39M11,19.93C7.05,19.44 4,16.08 4,12C4,11.38 4.08,10.78 4.21,10.21L9,15V16A2,2 0 0,0 11,18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"/>
            </svg>
            <span className="font-semibold text-cyan-800">Reduce costurile și complexitatea pentru expansiunea globală</span>
            <svg className="w-5 h-5 text-cyan-700" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13,3A9,9 0 0,0 4,12H1L4.89,15.89L4.96,16.03L9,12H6A7,7 0 0,1 13,5A7,7 0 0,1 20,12A7,7 0 0,1 13,19C11.07,19 9.32,18.21 8.06,16.94L6.64,18.36C8.27,20 10.5,21 13,21A9,9 0 0,0 22,12A9,9 0 0,0 13,3Z"/>
            </svg>
          </div>
        </div>
      </section>

      {/* Next-Generation AI Features */}
      <section className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Funcționalități AI de Următoarea Generație</h2>
        
        <div className="bg-gradient-to-br from-black to-gray-900 rounded-2xl p-8 text-white mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Sistem AI Avansat Multimodal</h3>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Platforma Kallina integrează cele mai avansate tehnologii AI pentru a livra experiențe conversaționale de excepție și automatizare inteligentă.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M11,16.5L6.5,12L7.91,10.59L11,13.67L16.59,8.09L18,9.5L11,16.5Z"/>
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Neural Language Model</h4>
              <p className="text-gray-300 text-sm">Procesare avansată NLP cu înțelegere contextuală de 98.7%</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"/>
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Voice Synthesis AI</h4>
              <p className="text-gray-300 text-sm">Generare vocală neurală cu expresivitate emoțională completă</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13,3A9,9 0 0,0 4,12H1L4.89,15.89L4.96,16.03L9,12H6A7,7 0 0,1 13,5A7,7 0 0,1 20,12A7,7 0 0,1 13,19C11.07,19 9.32,18.21 8.06,16.94L6.64,18.36C8.27,20 10.5,21 13,21A9,9 0 0,0 22,12A9,9 0 0,0 13,3Z"/>
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Predictive Intelligence</h4>
              <p className="text-gray-300 text-sm">Algoritmi predictivi pentru optimizare proactivă și anticipare</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2A2,2 0 0,1 14,4C14,4.74 13.6,5.39 13,5.73V7H14A7,7 0 0,1 21,14H22A1,1 0 0,1 23,15V18A1,1 0 0,1 22,19H21V20A2,2 0 0,1 19,22H5A2,2 0 0,1 3,20V19H2A1,1 0 0,1 1,18V15A1,1 0 0,1 2,14H3A7,7 0 0,1 10,7H11V5.73C10.4,5.39 10,4.74 10,4A2,2 0 0,1 12,2Z"/>
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Autonomous Agents</h4>
              <p className="text-gray-300 text-sm">Agenți AI autonomi cu capacități de decizie și acțiune independentă</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="border border-gray-200 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19,3H5C3.9,3 3,3.9 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.9 20.1,3 19,3M19,19H5V5H19V19Z"/>
              </svg>
              Real-Time Document Generation
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></span>
                <span>Generare automată facturi, contracte și oferte</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></span>
                <span>Completare formularelor în timp real din conversație</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></span>
                <span>Template-uri personalizabile pentru fiecare industrie</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></span>
                <span>Integrare directă cu sisteme de gestiune document</span>
              </li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M11,16.5L6.5,12L7.91,10.59L11,13.67L16.59,8.09L18,9.5L11,16.5Z"/>
              </svg>
              Omnichannel Distribution
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></span>
                <span>Integrare nativă WhatsApp Business și Messenger</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></span>
                <span>Coordonare cross-platform cu memorie partajată</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></span>
                <span>Distribuție inteligentă bazată pe preferințe client</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></span>
                <span>Analytics unificată pentru toate canalele</span>
              </li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13,3A9,9 0 0,0 4,12H1L4.89,15.89L4.96,16.03L9,12H6A7,7 0 0,1 13,5A7,7 0 0,1 20,12A7,7 0 0,1 13,19C11.07,19 9.32,18.21 8.06,16.94L6.64,18.36C8.27,20 10.5,21 13,21A9,9 0 0,0 22,12A9,9 0 0,0 13,3Z"/>
              </svg>
              Autonomous Business Operations
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></span>
                <span>Orchestrare inteligentă de task-uri și procese</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></span>
                <span>Decizie autonomă în scenarii predefinite</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></span>
                <span>Învățare continuă din interacțiuni și rezultate</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></span>
                <span>Optimizare predictivă a performanțelor business</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-gray-50 px-6 py-3 rounded-full">
            <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M11,16.5L6.5,12L7.91,10.59L11,13.67L16.59,8.09L18,9.5L11,16.5Z"/>
            </svg>
            <span className="font-semibold text-gray-800">Toate funcționalitățile sunt disponibile în timp real</span>
            <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13,3A9,9 0 0,0 4,12H1L4.89,15.89L4.96,16.03L9,12H6A7,7 0 0,1 13,5A7,7 0 0,1 20,12A7,7 0 0,1 13,19C11.07,19 9.32,18.21 8.06,16.94L6.64,18.36C8.27,20 10.5,21 13,21A9,9 0 0,0 22,12A9,9 0 0,0 13,3Z"/>
            </svg>
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Comparație Planuri</h2>
        
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 rounded-2xl overflow-hidden">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-6 font-semibold">Funcționalitate</th>
                <th className="text-center p-6 font-semibold">Starter</th>
                <th className="text-center p-6 font-semibold">Professional</th>
                <th className="text-center p-6 font-semibold">Enterprise</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="p-6 font-medium">Apeluri/lună</td>
                <td className="p-6 text-center">500</td>
                <td className="p-6 text-center">5,000</td>
                <td className="p-6 text-center">Unlimited</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-6 font-medium">Agenți AI</td>
                <td className="p-6 text-center">1</td>
                <td className="p-6 text-center">5</td>
                <td className="p-6 text-center">Unlimited</td>
              </tr>
              <tr>
                <td className="p-6 font-medium">Magic Button</td>
                <td className="p-6 text-center">
                  <svg className="w-5 h-5 text-red-600 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                  </svg>
                </td>
                <td className="p-6 text-center">
                  <svg className="w-5 h-5 text-green-600 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                </td>
                <td className="p-6 text-center">
                  <svg className="w-5 h-5 text-green-600 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-6 font-medium">Calendar AI</td>
                <td className="p-6 text-center">
                  <svg className="w-5 h-5 text-red-600 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                  </svg>
                </td>
                <td className="p-6 text-center">
                  <svg className="w-5 h-5 text-green-600 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                </td>
                <td className="p-6 text-center">
                  <svg className="w-5 h-5 text-green-600 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                </td>
              </tr>
              <tr>
                <td className="p-6 font-medium">Analytics Avansate</td>
                <td className="p-6 text-center">Basic</td>
                <td className="p-6 text-center">Advanced</td>
                <td className="p-6 text-center">Enterprise</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-6 font-medium">Integrări</td>
                <td className="p-6 text-center">5</td>
                <td className="p-6 text-center">50</td>
                <td className="p-6 text-center">Unlimited</td>
              </tr>
              <tr>
                <td className="p-6 font-medium">Support</td>
                <td className="p-6 text-center">Email</td>
                <td className="p-6 text-center">Priority</td>
                <td className="p-6 text-center">Dedicated</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </MinimalPage>
  )
}
