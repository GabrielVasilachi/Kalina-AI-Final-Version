import { BasicPageLayout } from '@/components/BasicPageLayout'

export default function APIDocumentationPage() {
  return (
    <BasicPageLayout
      title="Documentația API"
      description="API-ul cel mai puternic din industrie pentru dezvoltatori. Documentație completă, exemple și referințe tehnice."
    >
      {/* API Overview */}
      <section className="max-w-6xl mx-auto mb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">REST API v1.0</h2>
            <p className="text-lg text-gray-600 mb-8">
              API modern cu arhitectură RESTful, răspunsuri JSON și autentificare securizată prin API keys.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Base URL: <code className="bg-gray-100 px-2 py-1 rounded">https://api.kallina.ai/v1</code></span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Protocol: HTTPS only</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Format: JSON</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Auth: API Key (Bearer token)</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 text-gray-100 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4 text-green-400">Primul tău request</h3>
            <pre className="text-sm overflow-x-auto">
{`curl -X GET \\
  https://api.kallina.ai/v1/agents \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`}
            </pre>
          </div>
        </div>
      </section>

      {/* Authentication */}
      <section className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-bold mb-8">Autentificare</h2>
        
        <div className="border border-gray-200 rounded-xl p-8">
          <p className="text-gray-600 mb-6">
            Toate request-urile către API necesită un API key valid în header-ul Authorization.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Obținerea API Key</h3>
              <ol className="space-y-2 text-sm text-gray-600">
                <li>1. Loghează-te în Dashboard-ul Kallina.ai</li>
                <li>2. Navighează la Settings → API Keys</li>
                <li>3. Click "Generate New Key"</li>
                <li>4. Copiază și salvează cheia securizat</li>
              </ol>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Format Header</h3>
              <div className="bg-gray-100 rounded-lg p-4">
                <code className="text-sm">
                  Authorization: Bearer kallina_sk_live_xyz123...
                </code>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                ⚠️ Nu expune niciodată API key-ul în cod client-side
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Endpoints */}
      <section className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-bold mb-8">Endpoint-uri Principale</h2>
        
        <div className="space-y-6">
          {/* Agents */}
          <div className="border border-gray-200 rounded-xl p-6">
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">GET</span>
              <code className="text-lg font-mono">/agents</code>
            </div>
            <p className="text-gray-600 mb-4">Listează toți agenții AI din contul tău</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Request</h4>
                <div className="bg-gray-900 text-gray-100 rounded-lg p-4 text-sm">
                  <pre>
{`GET /v1/agents
Authorization: Bearer YOUR_API_KEY

Query Parameters:
- limit: int (default: 20)
- page: int (default: 1)
- status: string (active|inactive)`}
                  </pre>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Response</h4>
                <div className="bg-gray-900 text-gray-100 rounded-lg p-4 text-sm">
                  <pre>
{`{
  "data": [
    {
      "id": "agent_123",
      "name": "Ana Sales",
      "voice": "ro-RO-female-warm",
      "status": "active",
      "created_at": "2025-01-01T00:00:00Z"
    }
  ],
  "meta": {
    "total": 1,
    "page": 1,
    "limit": 20
  }
}`}
                  </pre>
                </div>
              </div>
            </div>
          </div>

          {/* Create Agent */}
          <div className="border border-gray-200 rounded-xl p-6">
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">POST</span>
              <code className="text-lg font-mono">/agents</code>
            </div>
            <p className="text-gray-600 mb-4">Creează un agent AI nou</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Request Body</h4>
                <div className="bg-gray-900 text-gray-100 rounded-lg p-4 text-sm">
                  <pre>
{`{
  "name": "Ana Restaurant",
  "voice": "ro-RO-female-warm",
  "personality": "professional-friendly",
  "industry": "restaurant",
  "instructions": "Tu ești Ana...",
  "integrations": {
    "calendar": {
      "provider": "google",
      "calendar_id": "primary"
    }
  }
}`}
                  </pre>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Response</h4>
                <div className="bg-gray-900 text-gray-100 rounded-lg p-4 text-sm">
                  <pre>
{`{
  "id": "agent_456",
  "name": "Ana Restaurant",
  "voice": "ro-RO-female-warm",
  "status": "active",
  "phone_number": "+40800123456",
  "webhook_url": null,
  "created_at": "2025-01-23T10:30:00Z"
}`}
                  </pre>
                </div>
              </div>
            </div>
          </div>

          {/* Start Call */}
          <div className="border border-gray-200 rounded-xl p-6">
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">POST</span>
              <code className="text-lg font-mono">/calls</code>
            </div>
            <p className="text-gray-600 mb-4">Inițiază un apel cu un agent AI</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Request Body</h4>
                <div className="bg-gray-900 text-gray-100 rounded-lg p-4 text-sm">
                  <pre>
{`{
  "agent_id": "agent_456",
  "phone_number": "+40712345678",
  "context": {
    "customer_name": "Ion Popescu",
    "previous_orders": ["pizza"],
    "preferred_time": "evening"
  },
  "webhook_url": "https://your-app.com/webhook"
}`}
                  </pre>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Response</h4>
                <div className="bg-gray-900 text-gray-100 rounded-lg p-4 text-sm">
                  <pre>
{`{
  "id": "call_789",
  "agent_id": "agent_456",
  "phone_number": "+40712345678",
  "status": "initiated",
  "started_at": "2025-01-23T10:35:00Z",
  "estimated_duration": 120
}`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Error Handling */}
      <section className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-bold mb-8">Gestionarea Erorilor</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Coduri de Status HTTP</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <span className="font-mono">200</span>
                <span className="text-sm">OK - Request reușit</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                <span className="font-mono">201</span>
                <span className="text-sm">Created - Resursa creată</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                <span className="font-mono">400</span>
                <span className="text-sm">Bad Request - Date invalide</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                <span className="font-mono">401</span>
                <span className="text-sm">Unauthorized - API key invalid</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                <span className="font-mono">429</span>
                <span className="text-sm">Rate Limited - Prea multe request-uri</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                <span className="font-mono">500</span>
                <span className="text-sm">Server Error - Eroare internă</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Format Răspuns Eroare</h3>
            <div className="bg-gray-900 text-gray-100 rounded-lg p-4">
              <pre className="text-sm">
{`{
  "error": {
    "code": "invalid_phone_number",
    "message": "Numărul de telefon nu este valid",
    "details": {
      "field": "phone_number",
      "provided": "+407123",
      "expected": "E.164 format"
    },
    "request_id": "req_xyz123"
  }
}`}
              </pre>
            </div>
            
            <div className="mt-4 p-3 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Tip:</strong> Folosește <code>request_id</code> când contactezi suportul pentru debugging
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rate Limiting */}
      <section className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-bold mb-8">Rate Limiting</h2>
        
        <div className="border border-gray-200 rounded-xl p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Limite Curente</h3>
              <div className="space-y-3">
                <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                  <span>Free Tier</span>
                  <span className="font-semibold">100 req/min</span>
                </div>
                <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                  <span>Developer</span>
                  <span className="font-semibold">1,000 req/min</span>
                </div>
                <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                  <span>Business</span>
                  <span className="font-semibold">5,000 req/min</span>
                </div>
                <div className="flex justify-between p-3 bg-black text-white rounded-lg">
                  <span>Enterprise</span>
                  <span className="font-semibold">Custom</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Headers Răspuns</h3>
              <div className="bg-gray-900 text-gray-100 rounded-lg p-4">
                <pre className="text-sm">
{`X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 999
X-RateLimit-Reset: 1642780800
X-RateLimit-Retry-After: 60`}
                </pre>
              </div>
              
              <div className="mt-4 space-y-2 text-sm text-gray-600">
                <p><strong>Limit:</strong> Numărul maxim de request-uri pe minut</p>
                <p><strong>Remaining:</strong> Request-uri rămase în fereastra curentă</p>
                <p><strong>Reset:</strong> Timestamp când se resetează (Unix)</p>
                <p><strong>Retry-After:</strong> Secunde până la reset</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Webhooks */}
      <section className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-bold mb-8">Webhooks</h2>
        
        <div className="space-y-6">
          <div className="border border-gray-200 rounded-xl p-8">
            <h3 className="text-xl font-semibold mb-4">Configurare Webhooks</h3>
            <p className="text-gray-600 mb-6">
              Webhooks-urile îți permit să primești notificări în timp real pentru evenimente importante.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-3">Tipuri de Evenimente</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 p-2 bg-green-50 rounded">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <code>call.started</code>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-blue-50 rounded">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <code>call.ended</code>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-purple-50 rounded">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <code>agent.action_completed</code>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-orange-50 rounded">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <code>conversation.updated</code>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3">Exemplu Payload</h4>
                <div className="bg-gray-900 text-gray-100 rounded-lg p-4 text-xs">
                  <pre>
{`{
  "event": "call.ended",
  "timestamp": "2025-01-23T10:30:00Z",
  "data": {
    "call_id": "call_789",
    "agent_id": "agent_456",
    "duration": 180,
    "outcome": "appointment_booked",
    "actions": [
      {
        "type": "calendar_booking",
        "status": "completed",
        "data": {
          "date": "2025-01-25",
          "time": "14:00"
        }
      }
    ]
  }
}`}
                  </pre>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl p-8">
            <h3 className="text-xl font-semibold mb-4">Securitatea Webhooks</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-3">Verificarea Semnăturii</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Fiecare webhook include un header <code>X-Kallina-Signature</code> pentru verificarea autenticității.
                </p>
                <div className="bg-gray-100 rounded-lg p-3 text-xs font-mono">
                  X-Kallina-Signature: sha256=abc123...
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3">Verificare în Node.js</h4>
                <div className="bg-gray-900 text-gray-100 rounded-lg p-4 text-xs">
                  <pre>
{`const crypto = require('crypto');

function verifyWebhook(payload, signature, secret) {
  const expectedSignature = crypto
    .createHmac('sha256', secret)
    .update(payload)
    .digest('hex');
  
  return signature === \`sha256=\${expectedSignature}\`;
}`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testing */}
      <section className="max-w-4xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-center mb-8">Testarea API-ului</h2>
        
        <div className="border border-gray-200 rounded-xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold mb-4">API Explorer Interactiv</h3>
            <p className="text-gray-600 mb-8">
              Testează toate endpoint-urile direct din browser cu datele tale reale
            </p>
            
            <div className="bg-gray-50 rounded-xl p-8 mb-8">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">GET</span>
                  <code>/agents</code>
                </div>
                <button className="bg-black text-white px-4 py-2 rounded-lg text-sm">
                  Execută
                </button>
              </div>
              <div className="text-left">
                <textarea 
                  className="w-full h-20 p-3 border border-gray-300 rounded-lg text-sm font-mono"
                  placeholder="Headers, query parameters, request body..."
                ></textarea>
              </div>
            </div>
            
            <button className="bg-black text-white px-8 py-3 rounded-xl font-semibold">
              Deschide API Explorer
            </button>
          </div>
        </div>
      </section>
    </BasicPageLayout>
  )
}
