import { BasicPageLayout } from '@/components/BasicPageLayout'

export default function DevelopersPage() {
  return (
    <BasicPageLayout
      title="Portal Dezvoltatori"
      description="Totul ce ai nevoie pentru a construi cu Kallina.ai. API-ul cel mai puternic și simplu de integrat din industrie."
    >
      {/* Quick Start */}
      <section className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Începe în 5 Minute</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="border border-gray-200 rounded-xl p-6 hover:border-black transition-all">
            <div className="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center font-bold mb-4">1</div>
            <h3 className="text-xl font-semibold mb-3">Obține API Key</h3>
            <p className="text-gray-600 mb-4">
              Creează contul și primește cheia API în câteva secunde
            </p>
            <div className="bg-gray-100 rounded-lg p-3 text-sm font-mono">
              kallina_api_key_xyz123
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl p-6 hover:border-black transition-all">
            <div className="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center font-bold mb-4">2</div>
            <h3 className="text-xl font-semibold mb-3">Prima Integrare</h3>
            <p className="text-gray-600 mb-4">
              Codul pentru primul tău agent vocal
            </p>
            <div className="bg-gray-100 rounded-lg p-3 text-sm font-mono">
              curl -X POST api.kallina.ai/v1/agents
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl p-6 hover:border-black transition-all">
            <div className="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center font-bold mb-4">3</div>
            <h3 className="text-xl font-semibold mb-3">Testează Live</h3>
            <p className="text-gray-600 mb-4">
              Vezi agentul tău funcționând în timp real
            </p>
            <button className="bg-black text-white px-4 py-2 rounded-lg text-sm">
              Test Agent
            </button>
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Exemple de Cod</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">JavaScript / Node.js</h3>
            <div className="bg-gray-900 text-gray-100 rounded-xl p-6 overflow-x-auto">
              <pre className="text-sm">
{`import { KallinaAI } from '@kallina/sdk';

const kallina = new KallinaAI({
  apiKey: 'your_api_key',
  region: 'eu-central-1'
});

// Creează un agent nou
const agent = await kallina.agents.create({
  name: 'Ana Sales',
  voice: 'ro-RO-female-warm',
  personality: 'professional-friendly',
  industry: 'restaurant'
});

// Începe o conversație
const call = await agent.startCall({
  phoneNumber: '+40712345678',
  context: {
    customerName: 'Ion Popescu',
    previousOrders: ['pizza-margherita']
  }
});`}
              </pre>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Python</h3>
            <div className="bg-gray-900 text-gray-100 rounded-xl p-6 overflow-x-auto">
              <pre className="text-sm">
{`from kallina import KallinaAI

kallina = KallinaAI(
    api_key="your_api_key",
    region="eu-central-1"
)

# Creează un agent nou
agent = kallina.agents.create(
    name="Ana Sales",
    voice="ro-RO-female-warm",
    personality="professional-friendly",
    industry="restaurant"
)

# Începe o conversație
call = agent.start_call(
    phone_number="+40712345678",
    context={
        "customer_name": "Ion Popescu",
        "previous_orders": ["pizza-margherita"]
    }
)`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* SDK Downloads */}
      <section className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">SDK-uri Oficiale</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="border border-gray-200 rounded-xl p-6 text-center hover:border-black transition-all">
            <div className="w-16 h-16 bg-yellow-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="font-semibold mb-2">JavaScript</h3>
            <p className="text-sm text-gray-600 mb-4">Node.js & Browser</p>
            <button className="w-full bg-black text-white py-2 rounded-lg text-sm">
              npm install @kallina/sdk
            </button>
          </div>

          <div className="border border-gray-200 rounded-xl p-6 text-center hover:border-black transition-all">
            <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl">◈</span>
            </div>
            <h3 className="font-semibold mb-2">Python</h3>
            <p className="text-sm text-gray-600 mb-4">pip package</p>
            <button className="w-full bg-black text-white py-2 rounded-lg text-sm">
              pip install kallina-ai
            </button>
          </div>

          <div className="border border-gray-200 rounded-xl p-6 text-center hover:border-black transition-all">
            <div className="w-16 h-16 bg-red-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl">◊</span>
            </div>
            <h3 className="font-semibold mb-2">Ruby</h3>
            <p className="text-sm text-gray-600 mb-4">gem package</p>
            <button className="w-full bg-black text-white py-2 rounded-lg text-sm">
              gem install kallina
            </button>
          </div>

          <div className="border border-gray-200 rounded-xl p-6 text-center hover:border-black transition-all">
            <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl">◎</span>
            </div>
            <h3 className="font-semibold mb-2">Mobile</h3>
            <p className="text-sm text-gray-600 mb-4">iOS & Android</p>
            <button className="w-full bg-black text-white py-2 rounded-lg text-sm">
              CocoaPods / Gradle
            </button>
          </div>
        </div>
      </section>

      {/* API Features */}
      <section className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Funcționalități API</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Ce poți construi:</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold">Agenți vocali personalizați</h4>
                  <p className="text-gray-600 text-sm">Cu personalitate, voce și comportament unic</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold">Integrări complexe</h4>
                  <p className="text-gray-600 text-sm">CRM, calendare, baze de date, sisteme ERP</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold">Workflow-uri automate</h4>
                  <p className="text-gray-600 text-sm">Procese business complete cu AI vocal</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold">Analytics și monitoring</h4>
                  <p className="text-gray-600 text-sm">Dashboard-uri personalizate cu metrici detaliate</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-4">Specificații Tehnice</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span>Latență răspuns</span>
                <span className="font-semibold">&lt; 100ms</span>
              </div>
              <div className="flex justify-between">
                <span>Rate limit</span>
                <span className="font-semibold">1000 req/min</span>
              </div>
              <div className="flex justify-between">
                <span>Uptime</span>
                <span className="font-semibold">99.9%</span>
              </div>
              <div className="flex justify-between">
                <span>Regiuni</span>
                <span className="font-semibold">12 globale</span>
              </div>
              <div className="flex justify-between">
                <span>Limbi suportate</span>
                <span className="font-semibold">40+</span>
              </div>
              <div className="flex justify-between">
                <span>Webhooks</span>
                <span className="font-semibold">Real-time</span>
              </div>
            </div>
            
            <div className="mt-6 p-3 bg-black text-white rounded-lg text-center">
              <p className="font-semibold">Enterprise SLA</p>
              <p className="text-xs text-gray-300">99.99% uptime garantat</p>
            </div>
          </div>
        </div>
      </section>

      {/* Webhook Example */}
      <section className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Webhooks în Timp Real</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Primește evenimente live</h3>
            <p className="text-gray-600 mb-6">
              Fii notificat instant pentru fiecare eveniment important din conversațiile tale
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm">call.started</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-sm">conversation.updated</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-sm">action.completed</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-sm">call.ended</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Exemplu Webhook</h3>
            <div className="bg-gray-900 text-gray-100 rounded-xl p-4 overflow-x-auto">
              <pre className="text-xs">
{`{
  "event": "call.ended",
  "timestamp": "2025-01-23T10:30:00Z",
  "data": {
    "call_id": "call_xyz123",
    "agent_id": "agent_ana_sales",
    "duration": 180,
    "outcome": "appointment_booked",
    "customer": {
      "phone": "+40712345678",
      "name": "Ion Popescu"
    },
    "actions": [
      {
        "type": "calendar_booking",
        "details": {
          "date": "2025-01-25",
          "time": "14:00",
          "service": "consultation"
        }
      }
    ],
    "sentiment": "positive",
    "satisfaction": 0.92
  }
}`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="max-w-4xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Comunitatea Dezvoltatorilor</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="border border-gray-200 rounded-xl p-6 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Discord Comunitate</h3>
            <p className="text-gray-600 mb-4">
              Peste 1,200 dezvoltatori activi care construiesc cu Kallina.ai
            </p>
            <button className="bg-[#5865F2] text-white px-6 py-2 rounded-lg">
              Alătură-te pe Discord
            </button>
          </div>

          <div className="border border-gray-200 rounded-xl p-6 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">GitHub Samples</h3>
            <p className="text-gray-600 mb-4">
              Exemple de cod, template-uri și boilerplate pentru toate framework-urile
            </p>
            <button className="bg-black text-white px-6 py-2 rounded-lg">
              Vezi pe GitHub
            </button>
          </div>
        </div>
      </section>

      {/* Support Tiers */}
      <section className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Nivele de Suport</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="border border-gray-200 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4">Community</h3>
            <div className="text-3xl font-bold mb-4">Gratuit</div>
            <ul className="space-y-2 text-sm text-gray-600 mb-6">
              <li>• Documentație completă</li>
              <li>• Discord comunitate</li>
              <li>• GitHub samples</li>
              <li>• Tutorial video</li>
            </ul>
            <button className="w-full border border-gray-300 py-2 rounded-lg">
              Începe Gratuit
            </button>
          </div>

          <div className="border border-black rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4">Developer</h3>
            <div className="text-3xl font-bold mb-4">€99/lună</div>
            <ul className="space-y-2 text-sm text-gray-600 mb-6">
              <li>• Tot din Community +</li>
              <li>• Email support 24h response</li>
              <li>• Video call consultanță</li>
              <li>• Priority bug fixes</li>
            </ul>
            <button className="w-full bg-black text-white py-2 rounded-lg">
              Upgrade la Developer
            </button>
          </div>

          <div className="border border-gray-200 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4">Enterprise</h3>
            <div className="text-3xl font-bold mb-4">Custom</div>
            <ul className="space-y-2 text-sm text-gray-600 mb-6">
              <li>• Tot din Developer +</li>
              <li>• Dedicated account manager</li>
              <li>• Custom integrations</li>
              <li>• SLA personalizat</li>
            </ul>
            <button className="w-full bg-black text-white py-2 rounded-lg">
              Contactează Sales
            </button>
          </div>
        </div>
      </section>
    </BasicPageLayout>
  )
}
