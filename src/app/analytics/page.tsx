import { MinimalPage } from '@/components/MinimalPage'

export default function AnalyticsPage() {
  return (
    <MinimalPage
      title="Analytics Dashboard"
      description="Analytics în timp real și insights AI pentru optimizarea conversațiilor și creșterea performanței business."
    >
      {/* Real-time Dashboard Preview */}
      <section className="max-w-6xl mx-auto mb-20">
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-200">
          <h2 className="text-3xl font-bold text-center mb-8">Dashboard în Timp Real</h2>
          
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-green-600">2,847</div>
              <div className="text-sm text-gray-600">Apeluri Astăzi</div>
              <div className="text-xs text-green-600 mt-1">↗ +12.3%</div>
            </div>
            
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-blue-600">73.2%</div>
              <div className="text-sm text-gray-600">Rata Conversie</div>
              <div className="text-xs text-blue-600 mt-1">↗ +5.8%</div>
            </div>
            
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-purple-600">2.4s</div>
              <div className="text-sm text-gray-600">Timp Răspuns</div>
              <div className="text-xs text-green-600 mt-1">↘ -0.3s</div>
            </div>
            
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-orange-600">4.8/5</div>
              <div className="text-sm text-gray-600">Satisfacție</div>
              <div className="text-xs text-green-600 mt-1">↗ +0.2</div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">Trafic Apeluri (24h)</h3>
              <div className="h-48 bg-gray-100 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
                  </svg>
                  <p>Grafic Interactiv Trafic</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">Top Subiecte Conversații</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Programări</span>
                  <div className="flex items-center gap-2">
                    <div className="w-20 h-2 bg-gray-200 rounded-full">
                      <div className="w-16 h-2 bg-blue-600 rounded-full"></div>
                    </div>
                    <span className="text-sm text-gray-600">80%</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm">Informații Servicii</span>
                  <div className="flex items-center gap-2">
                    <div className="w-20 h-2 bg-gray-200 rounded-full">
                      <div className="w-14 h-2 bg-green-600 rounded-full"></div>
                    </div>
                    <span className="text-sm text-gray-600">70%</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm">Plângeri</span>
                  <div className="flex items-center gap-2">
                    <div className="w-20 h-2 bg-gray-200 rounded-full">
                      <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    </div>
                    <span className="text-sm text-gray-600">10%</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm">Prețuri</span>
                  <div className="flex items-center gap-2">
                    <div className="w-20 h-2 bg-gray-200 rounded-full">
                      <div className="w-8 h-2 bg-purple-600 rounded-full"></div>
                    </div>
                    <span className="text-sm text-gray-600">40%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Analytics Features */}
      <section className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Funcționalități Analytics Avansate</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="border border-gray-200 rounded-2xl p-8">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Sentiment Analysis</h3>
            <p className="text-gray-600 mb-6">
              Analiza în timp real a emoțiilor și sentimentelor clienților din conversații
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm">Detectare emoții în timp real</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm">Scoruri satisfacție automate</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm">Alertes sentiment negativ</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm">Trending mood analysis</span>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 rounded-2xl p-8">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.1 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Predictive Analytics</h3>
            <p className="text-gray-600 mb-6">
              Machine learning pentru predicții trafic, behaviour patterns și optimizări
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-sm">Forecast volum apeluri</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-sm">Predictii conversie rate</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-sm">Seasonality patterns</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-sm">Churn risk assessment</span>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 rounded-2xl p-8">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Performance Optimization</h3>
            <p className="text-gray-600 mb-6">
              Recomandări automatizate pentru îmbunătățirea performanței agenților AI
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-sm">A/B testing automat</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-sm">Script optimization hints</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-sm">Voice tone recommendations</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-sm">Timing optimization</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Intelligence Reports */}
      <section className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Rapoarte Business Intelligence</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-6">Rapoarte Executive</h3>
            <p className="text-gray-600 mb-8">
              Rapoarte high-level pentru leadership cu KPI-uri esențiale și insights strategice
            </p>
            
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6">
                <h4 className="font-semibold mb-3">📊 Weekly Business Review</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Overview performance, trends majore, și recomandări strategice
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">Trimis automat Luni dimineața</span>
                  <button className="text-blue-600 text-sm font-semibold">Configurează</button>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h4 className="font-semibold mb-3">💼 Monthly ROI Report</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Calculul detaliat al return on investment și cost per conversion
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">Generat prima zi a lunii</span>
                  <button className="text-blue-600 text-sm font-semibold">Preview</button>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h4 className="font-semibold mb-3">🎯 Goal Tracking Report</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Progress către obiectivele de business și milestones
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">Customizabil frecvență</span>
                  <button className="text-blue-600 text-sm font-semibold">Setează Goals</button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-6">Rapoarte Operaționale</h3>
            <p className="text-gray-600 mb-8">
              Detalii granulare pentru echipe operaționale și optimizare zilnică
            </p>
            
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6">
                <h4 className="font-semibold mb-3">🔍 Call Quality Analysis</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Analiza detaliată a calității conversațiilor și scoring automat
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">Daily updates</span>
                  <button className="text-green-600 text-sm font-semibold">Vezi Sample</button>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h4 className="font-semibold mb-3">⚡ Performance Alerts</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Alertes în timp real pentru anomalii și probleme de performanță
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">Instant notifications</span>
                  <button className="text-orange-600 text-sm font-semibold">Setup Alerts</button>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h4 className="font-semibold mb-3">📈 Optimization Suggestions</h4>
                <p className="text-sm text-gray-600 mb-3">
                  AI-generated recommendations pentru îmbunătățiri concrete
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">Weekly AI insights</span>
                  <button className="text-purple-600 text-sm font-semibold">Enable AI</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration with External Tools */}
      <section className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Integrări Analytics</h2>
        
        <div className="bg-gradient-to-r from-gray-900 to-black rounded-2xl p-8 text-white">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold mb-4">Export & Sincronizare Date</h3>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Conectează datele Kallina.ai cu ecosistemul tău de business intelligence și data analytics
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white/10 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Google Analytics</h4>
              <p className="text-sm text-gray-300">Custom events & conversions</p>
            </div>

            <div className="bg-white/10 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Tableau</h4>
              <p className="text-sm text-gray-300">Advanced visualizations</p>
            </div>

            <div className="bg-white/10 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Power BI</h4>
              <p className="text-sm text-gray-300">Microsoft ecosystem</p>
            </div>

            <div className="bg-white/10 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z"/>
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Custom API</h4>
              <p className="text-sm text-gray-300">REST & GraphQL</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold mb-3">📤 Export Formats</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• CSV/Excel pentru spreadsheets</li>
                <li>• JSON pentru aplicații custom</li>
                <li>• PDF pentru rapoarte executive</li>
                <li>• API endpoints în timp real</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3">🔄 Automation</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Scheduled exports automate</li>
                <li>• Webhook notifications</li>
                <li>• Email delivery programmable</li>
                <li>• Slack/Teams integrations</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3">🛡️ Data Security</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Encryption în transit și rest</li>
                <li>• Role-based access control</li>
                <li>• GDPR compliance</li>
                <li>• Audit logs complete</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="max-w-4xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">ROI Calculator</h2>
        
        <div className="border border-gray-200 rounded-2xl p-8">
          <h3 className="text-xl font-semibold mb-6 text-center">Calculează ROI-ul pentru business-ul tău</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold mb-4">Date Current Business</h4>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Apeluri primite/lună</label>
                  <input type="number" className="w-full border border-gray-300 rounded-lg px-3 py-2" placeholder="ex: 1000" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Cost per apel (receptionist)</label>
                  <input type="number" className="w-full border border-gray-300 rounded-lg px-3 py-2" placeholder="ex: 25 RON" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Rata de conversie actuală</label>
                  <input type="number" className="w-full border border-gray-300 rounded-lg px-3 py-2" placeholder="ex: 45%" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Valoare medie per client</label>
                  <input type="number" className="w-full border border-gray-300 rounded-lg px-3 py-2" placeholder="ex: 500 RON" />
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Proiecții cu Kallina.ai</h4>
              <div className="bg-green-50 rounded-xl p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Cost lunar Kallina.ai:</span>
                    <span className="font-semibold">2,400 RON</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Economie per apel:</span>
                    <span className="font-semibold text-green-600">20 RON</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Îmbunătățire conversie:</span>
                    <span className="font-semibold text-green-600">+25%</span>
                  </div>
                  
                  <div className="border-t border-green-200 pt-4">
                    <div className="flex justify-between items-center text-lg">
                      <span className="font-semibold">ROI lunar:</span>
                      <span className="font-bold text-green-600">+18,600 RON</span>
                    </div>
                    
                    <div className="flex justify-between items-center text-sm text-gray-600 mt-2">
                      <span>ROI anual:</span>
                      <span>+223,200 RON</span>
                    </div>
                  </div>
                </div>
                
                <button className="w-full mt-6 bg-green-600 text-white py-3 rounded-lg font-semibold">
                  Trimite Calculul Detaliat
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="max-w-4xl mx-auto mb-20">
        <div className="text-center bg-gray-50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-4">Începe să Analizezi Astăzi</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Setup în 5 minute. First insights în prima zi. ROI measurable în prima săptămână.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-black text-white px-8 py-3 rounded-xl font-semibold">
              Demo Analytics Live
            </button>
            <button className="border border-gray-300 px-8 py-3 rounded-xl font-semibold hover:border-black transition-all">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </MinimalPage>
  )
}
