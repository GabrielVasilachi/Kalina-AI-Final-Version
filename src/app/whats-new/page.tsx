import { BasicPageLayout } from '@/components/BasicPageLayout'

export default function WhatsNewPage() {
  return (
    <BasicPageLayout
      title="Noutăți și Actualizări"
      description="Rămâi la curent cu ultimele funcționalități, îmbunătățiri și actualizări ale platformei Kallina.ai"
    >
      {/* Latest Release */}
      <section className="max-w-4xl mx-auto mb-20">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-white/20 rounded-full px-3 py-1 text-sm font-semibold">
              NOU
            </div>
            <span className="text-blue-100">Versiunea 2.4.0 - Ianuarie 2025</span>
          </div>
          
          <h2 className="text-3xl font-bold mb-4">Magic Button 2.0 & Calendar AI Revolution</h2>
          <p className="text-xl text-blue-100 mb-6">
            Cea mai mare actualizare din istoria Kallina.ai cu funcționalități revoluționare
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">Magic Button 2.0</h3>
              <ul className="space-y-2 text-sm text-blue-100">
                <li>• Context switching în timp real</li>
                <li>• Orchestrare automată campanii</li>
                <li>• Predictive AI pentru acțiuni</li>
                <li>• Integration cu 50+ platforme</li>
              </ul>
            </div>
            
            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">Calendar AI</h3>
              <ul className="space-y-2 text-sm text-blue-100">
                <li>• Natural language scheduling</li>
                <li>• Conflict detection avansată</li>
                <li>• Multi-timezone support</li>
                <li>• Automated follow-ups</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Changelog */}
      <section className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Changelog Detaliat</h2>
        
        <div className="space-y-8">
          {/* January 2025 */}
          <div className="border border-gray-200 rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <h3 className="text-2xl font-semibold">Ianuarie 2025</h3>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                LIVE
              </span>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-4 text-green-600">Funcții Noi</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    <div>
                      <strong>Magic Button 2.0</strong>
                      <p className="text-sm text-gray-600">Context switching automат și orchestrare campanii</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.1 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
                    </svg>
                    <div>
                      <strong>Calendar AI</strong>
                      <p className="text-sm text-gray-600">Programări inteligente cu procesare limbaj natural</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                    </svg>
                    <div>
                      <strong>Advanced Analytics</strong>
                      <p className="text-sm text-gray-600">Dashboard-uri noi cu predictive insights</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4 text-blue-600">Îmbunătățiri</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-blue-500 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    <div>
                      <strong>Performanță Vocală</strong>
                      <p className="text-sm text-gray-600">Reducere latență cu 40% (acum sub 0.8s)</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-blue-500 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                    </svg>
                    <div>
                      <strong>Securitate Enhanced</strong>
                      <p className="text-sm text-gray-600">SOC 2 Type II compliance și end-to-end encryption</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-blue-500 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                    <div>
                      <strong>Integrări Noi</strong>
                      <p className="text-sm text-gray-600">25+ integrări noi: Notion, Airtable, Monday.com</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* December 2024 */}
          <div className="border border-gray-200 rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
              <h3 className="text-2xl font-semibold">Decembrie 2024</h3>
              <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
                v2.3.2
              </span>
            </div>
            
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-xl p-4">
                <h4 className="font-semibold mb-2">Multilingual AI Expansion</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Adăugare suport pentru 15 limbi noi, inclusiv dialecte regionale
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Germană', 'Franceză', 'Spaniolă', 'Italiană', 'Portugheză'].map((lang, index) => (
                    <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-4">
                <h4 className="font-semibold mb-2">Enterprise Security Updates</h4>
                <p className="text-sm text-gray-600">
                  GDPR compliance îmbunătățit și audit trail complet pentru toate acțiunile
                </p>
              </div>
            </div>
          </div>

          {/* November 2024 */}
          <div className="border border-gray-200 rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
              <h3 className="text-2xl font-semibold">Noiembrie 2024</h3>
              <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
                v2.3.0
              </span>
            </div>
            
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-xl p-4">
                <h4 className="font-semibold mb-2">Voice Quality Revolution</h4>
                <p className="text-sm text-gray-600">
                  Nou engine de sinteză vocală cu calitate de studio și 20+ voci românești native
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-4">
                <h4 className="font-semibold mb-2">Smart Interruption Handling</h4>
                <p className="text-sm text-gray-600">
                  Gestionarea întreruperilor naturale ca într-o conversație reală între oameni
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">În Dezvoltare</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-purple-600 text-white rounded-full px-3 py-1 text-sm font-semibold">
                Q2 2025
              </div>
            </div>
            
            <h3 className="text-2xl font-semibold mb-4">AI Vision & Video Calls</h3>
            <p className="text-gray-700 mb-6">
              Agenți AI cu capabilități video care pot vedea și interpreta gesturi și expresii
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                <span className="text-sm">Computer vision pentru gesture recognition</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                <span className="text-sm">Video calls cu agenți AI avatars</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                <span className="text-sm">Emotion detection prin facial analysis</span>
              </div>
            </div>
            
            <button className="mt-6 bg-purple-600 text-white px-6 py-3 rounded-xl font-semibold w-full">
              Înscrie-te la Early Access
            </button>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-green-600 text-white rounded-full px-3 py-1 text-sm font-semibold">
                Q3 2025
              </div>
            </div>
            
            <h3 className="text-2xl font-semibold mb-4">Autonomous AI Agents</h3>
            <p className="text-gray-700 mb-6">
              Agenți complet autonomi care pot lua decizii și acționa independent
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span className="text-sm">Decision making autonom</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span className="text-sm">Learning din interacțiuni</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span className="text-sm">Multi-agent collaboration</span>
              </div>
            </div>
            
            <button className="mt-6 bg-green-600 text-white px-6 py-3 rounded-xl font-semibold w-full">
              Join Beta Program
            </button>
          </div>
        </div>
      </section>

      {/* Beta Access */}
      <section className="max-w-4xl mx-auto mb-20">
        <div className="bg-gradient-to-r from-black to-gray-800 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Acces Early la Funcții Noi</h2>
          <p className="text-xl text-gray-300 mb-8">
            Fii primul care testează și oferă feedback pentru următoarele funcționalități revoluționare
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div>
              <div className="text-2xl font-bold mb-2">7 zile</div>
              <div className="text-sm text-gray-300">Înainte de release oficial</div>
            </div>
            
            <div>
              <div className="text-2xl font-bold mb-2">Gratuit</div>
              <div className="text-sm text-gray-300">Beta access complet</div>
            </div>
            
            <div>
              <div className="text-2xl font-bold mb-2">Feedback</div>
              <div className="text-sm text-gray-300">Influențează dezvoltarea</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-black px-8 py-3 rounded-xl font-semibold">
              Înscrie-te la Beta
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-xl font-semibold">
              Vezi Roadmap Complet
            </button>
          </div>
        </div>
      </section>
    </BasicPageLayout>
  )
}
