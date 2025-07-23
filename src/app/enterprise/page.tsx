import { MinimalPage } from '@/components/MinimalPage'

export default function EnterprisePage() {
  return (
    <MinimalPage
      title="Enterprise Solutions"
      description="Soluții AI conversaționale la scară enterprise. Securitate, compliance și integrări pentru organizații mari."
    >
      {/* Enterprise Hero Stats */}
      <section className="max-w-6xl mx-auto mb-20">
        <div className="bg-gradient-to-r from-gray-900 to-black rounded-2xl p-8 text-white">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Trusted by Enterprise Leaders</h2>
            <p className="text-xl text-gray-300">500+ companii mari își automatizează comunicarea cu Kallina.ai</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div className="text-sm text-gray-300">Uptime SLA</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">50M+</div>
              <div className="text-sm text-gray-300">Apeluri procesate</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">ISO 27001</div>
              <div className="text-sm text-gray-300">Certified</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-sm text-gray-300">Dedicated Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Features Grid */}
      <section className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Capabilități Enterprise</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="border border-gray-200 rounded-2xl p-8 hover:border-black transition-all">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">Advanced Security</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• End-to-end encryption AES-256</li>
              <li>• SOC 2 Type II compliance</li>
              <li>• GDPR & CCPA ready</li>
              <li>• Private cloud deployment</li>
              <li>• Advanced threat protection</li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-2xl p-8 hover:border-black transition-all">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">Scalability & Performance</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Auto-scaling infrastructure</li>
              <li>• Load balancing inteligent</li>
              <li>• Multi-region deployment</li>
              <li>• 99.9% uptime guarantee</li>
              <li>• Disaster recovery plan</li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-2xl p-8 hover:border-black transition-all">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">Advanced Integrations</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Enterprise CRM systems</li>
              <li>• SSO & Active Directory</li>
              <li>• Custom API development</li>
              <li>• Legacy system connections</li>
              <li>• Real-time data sync</li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-2xl p-8 hover:border-black transition-all">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">Enterprise Analytics</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Advanced BI dashboards</li>
              <li>• Custom KPI tracking</li>
              <li>• Predictive analytics</li>
              <li>• Multi-tenant reporting</li>
              <li>• Executive summaries</li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-2xl p-8 hover:border-black transition-all">
            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">Dedicated Support</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• 24/7 technical support</li>
              <li>• Dedicated success manager</li>
              <li>• Priority issue resolution</li>
              <li>• Custom training programs</li>
              <li>• Quarterly business reviews</li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-2xl p-8 hover:border-black transition-all">
            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-teal-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.1 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">Governance & Compliance</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Role-based access control</li>
              <li>• Audit trail comprehensive</li>
              <li>• Data retention policies</li>
              <li>• Regulatory compliance</li>
              <li>• Risk management tools</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Soluții pe Industrii</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-blue-50 rounded-2xl p-8 border border-blue-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold">Healthcare Enterprise</h3>
            </div>
            
            <p className="text-gray-700 mb-6">
              Soluții specializate pentru rețele de spitale, clinici private și organizații medicale mari
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-sm">HIPAA compliance nativ</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-sm">Integrare EMR/EHR systems</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-sm">Multi-location management</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-sm">Specialized medical AI training</span>
              </div>
            </div>
            
            <div className="bg-blue-100 rounded-xl p-4">
              <h4 className="font-semibold mb-2">Case Study: Rețea Clinici Medicale</h4>
              <p className="text-sm text-blue-800">
                Reducere 60% în timpul de așteptare, îmbunătățire 40% satisfacție pacienți, 
                automatizare 85% programări de rutină.
              </p>
            </div>
          </div>

          <div className="bg-green-50 rounded-2xl p-8 border border-green-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold">Financial Services</h3>
            </div>
            
            <p className="text-gray-700 mb-6">
              Soluții pentru bănci, asiguratori și instituții financiare cu cerințe stricte de securitate
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span className="text-sm">PCI DSS Level 1 compliance</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span className="text-sm">Advanced fraud detection</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span className="text-sm">Core banking integrations</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span className="text-sm">Regulatory reporting automation</span>
              </div>
            </div>
            
            <div className="bg-green-100 rounded-xl p-4">
              <h4 className="font-semibold mb-2">Case Study: Bancă Comercială</h4>
              <p className="text-sm text-green-800">
                Procesare 500,000+ apeluri/lună, reducere 70% costuri call center, 
                îmbunătățire 50% customer satisfaction score.
              </p>
            </div>
          </div>

          <div className="bg-purple-50 rounded-2xl p-8 border border-purple-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold">E-commerce & Retail</h3>
            </div>
            
            <p className="text-gray-700 mb-6">
              Automatizare pentru retaileri mari, marketplace-uri și brand-uri de consum
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                <span className="text-sm">Omnichannel customer experience</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                <span className="text-sm">Inventory management integration</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                <span className="text-sm">Order tracking automation</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                <span className="text-sm">Peak season scaling</span>
              </div>
            </div>
            
            <div className="bg-purple-100 rounded-xl p-4">
              <h4 className="font-semibold mb-2">Case Study: Retailer Online</h4>
              <p className="text-sm text-purple-800">
                Gestionare Black Friday 2M+ apeluri, zero downtime, 
                îmbunătățire 35% conversion rate pe suport vocal.
              </p>
            </div>
          </div>

          <div className="bg-orange-50 rounded-2xl p-8 border border-orange-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold">Telecommunications</h3>
            </div>
            
            <p className="text-gray-700 mb-6">
              Soluții pentru provideri telecom, ISP-uri și companii de utilități publice
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                <span className="text-sm">High-volume call processing</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                <span className="text-sm">Network outage automation</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                <span className="text-sm">Billing inquiry handling</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                <span className="text-sm">Technical support triage</span>
              </div>
            </div>
            
            <div className="bg-orange-100 rounded-xl p-4">
              <h4 className="font-semibold mb-2">Case Study: Provider Telecom</h4>
              <p className="text-sm text-orange-800">
                Automatizare 80% întrebări frecvente, reducere 45% timp rezolvare, 
                disponibilitate 24/7 în 12 limbi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Deployment Options */}
      <section className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Opțiuni de Deployment</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="border border-gray-200 rounded-2xl p-8 text-center hover:border-black transition-all">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Public Cloud</h3>
            <p className="text-gray-600 mb-6">
              Deployment rapid pe infrastructura Kallina.ai cu securitate enterprise
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 justify-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-sm">Setup în 24 ore</span>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-sm">Mentenanță automată</span>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-sm">Scaling automat</span>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-sm">Updates continue</span>
              </div>
            </div>
            
            <div className="text-3xl font-bold mb-2">De la €2,500</div>
            <div className="text-sm text-gray-600 mb-6">per lună</div>
            
            <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold">
              Începe Trial
            </button>
          </div>

          <div className="border border-gray-200 rounded-2xl p-8 text-center hover:border-black transition-all relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Recomandat
              </span>
            </div>
            
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Private Cloud</h3>
            <p className="text-gray-600 mb-6">
              Instanță dedicată în cloud privat cu control complet asupra datelor
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 justify-center">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span className="text-sm">Izolație completă</span>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span className="text-sm">Conformitate maximă</span>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span className="text-sm">Customizări avansate</span>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span className="text-sm">Support dedicat</span>
              </div>
            </div>
            
            <div className="text-3xl font-bold mb-2">De la €7,500</div>
            <div className="text-sm text-gray-600 mb-6">per lună</div>
            
            <button className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold">
              Contactează Sales
            </button>
          </div>

          <div className="border border-gray-200 rounded-2xl p-8 text-center hover:border-black transition-all">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4">On-Premise</h3>
            <p className="text-gray-600 mb-6">
              Deployment complet în infrastructura proprie pentru control maxim
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 justify-center">
                <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                <span className="text-sm">Control total date</span>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                <span className="text-sm">Zero dependency extern</span>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                <span className="text-sm">Customizări extreme</span>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                <span className="text-sm">Air-gapped deployment</span>
              </div>
            </div>
            
            <div className="text-3xl font-bold mb-2">Quote Custom</div>
            <div className="text-sm text-gray-600 mb-6">pricing specific</div>
            
            <button className="w-full bg-purple-600 text-white py-3 rounded-xl font-semibold">
              Cere Ofertă
            </button>
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Timeline Implementare</h2>
        
        <div className="bg-gray-50 rounded-2xl p-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">Discovery & Planning</h3>
              <p className="text-sm text-gray-600 mb-4">
                Analiza cerințelor, arhitectura soluției și planul de implementare
              </p>
              <div className="text-sm font-semibold text-blue-600">Săptămânile 1-2</div>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">Setup & Configuration</h3>
              <p className="text-sm text-gray-600 mb-4">
                Deployment infrastructură, configurarea inițială și integrări
              </p>
              <div className="text-sm font-semibold text-green-600">Săptămânile 3-4</div>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">Testing & Training</h3>
              <p className="text-sm text-gray-600 mb-4">
                Testing extensiv, training echipe și fine-tuning agenți AI
              </p>
              <div className="text-sm font-semibold text-purple-600">Săptămânile 5-6</div>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold mb-3">Go-Live & Support</h3>
              <p className="text-sm text-gray-600 mb-4">
                Lansare în producție cu monitoring 24/7 și support dedicat
              </p>
              <div className="text-sm font-semibold text-orange-600">Săptămâna 7+</div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Testimonials */}
      <section className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Ce Spun Clienții Enterprise</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white border border-gray-200 rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                BC
              </div>
              <div>
                <h4 className="font-semibold">Alexandru Popescu</h4>
                <p className="text-sm text-gray-600">CTO, Banca Comercială România</p>
              </div>
            </div>
            
            <p className="text-gray-700 mb-6">
              "Kallina.ai ne-a transformat complet customer experience-ul. Procesăm acum 
              500,000+ apeluri pe lună cu o eficiență de 95% și satisfaction score de 4.8/5. 
              ROI-ul s-a amortizat în 4 luni."
            </p>
            
            <div className="text-sm text-gray-500">
              ⭐⭐⭐⭐⭐ Implementare în 6 săptămâni
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
                RM
              </div>
              <div>
                <h4 className="font-semibold">Maria Ionescu</h4>
                <p className="text-sm text-gray-600">Head of Operations, Regina Maria</p>
              </div>
            </div>
            
            <p className="text-gray-700 mb-6">
              "Automatizarea programărilor ne-a eliberat 60% din timpul staff-ului medical 
              pentru activități cu valoare adăugată. Pacienții sunt încântați de experiența 
              seamless și disponibilitatea 24/7."
            </p>
            
            <div className="text-sm text-gray-500">
              ⭐⭐⭐⭐⭐ HIPAA compliant, Multi-location
            </div>
          </div>
        </div>
      </section>

      {/* Contact Enterprise Sales */}
      <section className="max-w-4xl mx-auto mb-20">
        <div className="bg-gradient-to-r from-black to-gray-800 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for Enterprise?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Programează o întâlnire cu echipa noastră enterprise pentru o demonstrație personalizată 
            și propunere comercială adaptată cerințelor tale.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">48h</div>
              <div className="text-sm text-gray-300">Răspuns la inquiry</div>
            </div>
            
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">7 zile</div>
              <div className="text-sm text-gray-300">POC functional</div>
            </div>
            
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">6 săptămâni</div>
              <div className="text-sm text-gray-300">Full deployment</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-black px-8 py-3 rounded-xl font-semibold">
              Schedule Demo
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-xl font-semibold">
              Download Brochure
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-xl font-semibold">
              Contact Sales Team
            </button>
          </div>
        </div>
      </section>
    </MinimalPage>
  )
}
