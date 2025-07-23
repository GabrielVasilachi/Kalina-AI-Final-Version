import { MinimalPage } from '@/components/MinimalPage'

export default function IntegrationsPage() {
  return (
    <MinimalPage
      title="Integrări Complete"
      description="Conectează-te cu toate aplicațiile și serviciile pe care le folosești deja. 200+ integrări native disponibile."
    >
      {/* Integration Categories */}
      <section className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Categorii Integrări</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="border border-gray-200 rounded-2xl p-8 hover:border-black transition-all">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">CRM & Sales</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Salesforce</li>
              <li>• HubSpot</li>
              <li>• Pipedrive</li>
              <li>• Zoho CRM</li>
              <li>• Microsoft Dynamics</li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-2xl p-8 hover:border-black transition-all">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.1 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">Calendar & Scheduling</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Google Calendar</li>
              <li>• Calendly</li>
              <li>• Outlook Calendar</li>
              <li>• Acuity Scheduling</li>
              <li>• When2meet</li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-2xl p-8 hover:border-black transition-all">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">Communication</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Slack</li>
              <li>• Microsoft Teams</li>
              <li>• WhatsApp Business</li>
              <li>• Telegram</li>
              <li>• Discord</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Popular Integrations */}
      <section className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Integrări Populare</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: 'Salesforce', category: 'CRM', setup: '5 min', color: 'blue' },
            { name: 'Google Calendar', category: 'Calendar', setup: '2 min', color: 'green' },
            { name: 'Slack', category: 'Communication', setup: '3 min', color: 'purple' },
            { name: 'Shopify', category: 'E-commerce', setup: '10 min', color: 'orange' },
            { name: 'HubSpot', category: 'Marketing', setup: '5 min', color: 'red' },
            { name: 'Zoom', category: 'Video', setup: '2 min', color: 'blue' },
            { name: 'Mailchimp', category: 'Email', setup: '5 min', color: 'yellow' },
            { name: 'Stripe', category: 'Payments', setup: '7 min', color: 'indigo' }
          ].map((integration, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:border-black transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 bg-${integration.color}-100 rounded-lg flex items-center justify-center`}>
                  <svg className={`w-5 h-5 text-${integration.color}-600`} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">{integration.name}</h3>
                  <p className="text-xs text-gray-500">{integration.category}</p>
                </div>
              </div>
              <div className="text-sm text-gray-600 mb-3">
                Setup în {integration.setup}
              </div>
              <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 rounded-lg text-sm font-medium transition-all">
                Conectează
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Custom Integration */}
      <section className="max-w-4xl mx-auto mb-20">
        <div className="bg-gradient-to-r from-black to-gray-800 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Nu găsești integrarea dorită?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Echipa noastră poate dezvolta orice integrare custom în 2-4 săptămâni
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div>
              <div className="text-2xl font-bold mb-2">48h</div>
              <div className="text-sm text-gray-300">Analiza fezabilitate</div>
            </div>
            
            <div>
              <div className="text-2xl font-bold mb-2">2-4 săpt</div>
              <div className="text-sm text-gray-300">Dezvoltare completă</div>
            </div>
            
            <div>
              <div className="text-2xl font-bold mb-2">24/7</div>
              <div className="text-sm text-gray-300">Suport și mentenanță</div>
            </div>
          </div>
          
          <button className="bg-white text-black px-8 py-3 rounded-xl font-semibold">
            Cere Integrare Custom
          </button>
        </div>
      </section>

      {/* Setup Guides */}
      <section className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Ghiduri Setup</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="border border-gray-200 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4">Integrări Rapide (sub 5 min)</h3>
            <div className="space-y-3">
              {[
                'Google Calendar - 2 minute',
                'Slack - 3 minute', 
                'Zoom - 2 minute',
                'WhatsApp Business - 4 minute'
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm">{item}</span>
                  <button className="text-blue-600 text-sm font-medium hover:underline">
                    Vezi Ghid
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4">Integrări Enterprise</h3>
            <div className="space-y-3">
              {[
                'Salesforce - 10 minute',
                'Microsoft Dynamics - 15 minute',
                'SAP - 20 minute', 
                'Oracle CX - 15 minute'
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm">{item}</span>
                  <button className="text-blue-600 text-sm font-medium hover:underline">
                    Vezi Ghid
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </MinimalPage>
  )
}
