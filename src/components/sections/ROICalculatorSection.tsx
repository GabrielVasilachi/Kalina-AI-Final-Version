'use client'

import Link from 'next/link'

export function ROICalculatorSection() {
  const metrics = [
    {
      label: 'Reducere Costuri Operaționale',
      value: '90%',
      description: 'Elimină costurile cu personalul pentru programări și suport 24/7',
      icon: '$'
    },
    {
      label: 'Creștere Conversii',
      value: '3x',
      description: 'Mai multe rezervări și vânzări prin disponibilitate continuă',
      icon: '↗'
    },
    {
      label: 'Timp de Răspuns',
      value: '<100ms',
      description: 'Răspunsuri instant față de minutele de așteptare',
      icon: '⚡'
    },
    {
      label: 'Disponibilitate',
      value: '24/7',
      description: 'Business-ul tău funcționează non-stop, fără pauze',
      icon: '●'
    }
  ]

  const calculations = [
    {
      scenario: 'Restaurant Mediu',
      before: {
        title: 'Înainte de Kallina.ai',
        costs: [
          { item: 'Recepționer part-time', amount: '3,000 lei/lună' },
          { item: 'Rezervări ratate', amount: '2,500 lei/lună' },
          { item: 'Ore suplimentare staff', amount: '1,500 lei/lună' }
        ],
        total: '7,000 lei/lună'
      },
      after: {
        title: 'Cu Kallina.ai',
        costs: [
          { item: 'Abonament Kallina.ai', amount: '299 lei/lună' },
          { item: 'Setup inițial', amount: '0 lei' },
          { item: 'Mentenanță', amount: '0 lei' }
        ],
        total: '299 lei/lună'
      },
      savings: '6,701 lei/lună',
      roi: '2,242%'
    },
    {
      scenario: 'Cabinet Medical',
      before: {
        title: 'Înainte de Kallina.ai',
        costs: [
          { item: 'Recepționer full-time', amount: '4,500 lei/lună' },
          { item: 'Programări ratate', amount: '3,000 lei/lună' },
          { item: 'Telefoane ratate', amount: '2,000 lei/lună' }
        ],
        total: '9,500 lei/lună'
      },
      after: {
        title: 'Cu Kallina.ai',
        costs: [
          { item: 'Abonament Kallina.ai Pro', amount: '499 lei/lună' },
          { item: 'Conformitate HIPAA', amount: 'Inclusă' },
          { item: 'Suport 24/7', amount: 'Inclus' }
        ],
        total: '499 lei/lună'
      },
      savings: '9,001 lei/lună',
      roi: '1,804%'
    }
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-6">
            ROI Care Se Vede în Prima Lună
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nu este doar economie de costuri - este transformarea completă a business-ului tău. 
            Vezi calculele reale pentru industria ta.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm">
              <div className="text-3xl mb-4">{metric.icon}</div>
              <div className="text-3xl font-bold text-black mb-2">{metric.value}</div>
              <div className="text-sm font-medium text-black mb-2">{metric.label}</div>
              <div className="text-xs text-gray-600">{metric.description}</div>
            </div>
          ))}
        </div>

        {/* ROI Calculations */}
        <div className="space-y-12">
          {calculations.map((calc, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-black mb-8 text-center">
                {calc.scenario}
              </h3>
              
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Before */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-red-600 mb-4">
                    {calc.before.title}
                  </h4>
                  <div className="space-y-3">
                    {calc.before.costs.map((cost, i) => (
                      <div key={i} className="flex justify-between text-sm">
                        <span className="text-gray-600">{cost.item}</span>
                        <span className="font-medium text-black">{cost.amount}</span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-gray-200 pt-3">
                    <div className="flex justify-between font-bold">
                      <span>Total:</span>
                      <span className="text-red-600">{calc.before.total}</span>
                    </div>
                  </div>
                </div>

                {/* After */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-green-600 mb-4">
                    {calc.after.title}
                  </h4>
                  <div className="space-y-3">
                    {calc.after.costs.map((cost, i) => (
                      <div key={i} className="flex justify-between text-sm">
                        <span className="text-gray-600">{cost.item}</span>
                        <span className="font-medium text-black">{cost.amount}</span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-gray-200 pt-3">
                    <div className="flex justify-between font-bold">
                      <span>Total:</span>
                      <span className="text-green-600">{calc.after.total}</span>
                    </div>
                  </div>
                </div>

                {/* Savings */}
                <div className="bg-black text-white rounded-xl p-6 text-center">
                  <div className="text-sm text-gray-300 mb-2">Economie Lunară</div>
                  <div className="text-3xl font-bold mb-4">{calc.savings}</div>
                  <div className="text-sm text-gray-300 mb-2">ROI</div>
                  <div className="text-2xl font-bold text-green-400">{calc.roi}</div>
                  <div className="text-xs text-gray-400 mt-4">
                    Se plătește singură în prima lună
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Calculator CTA */}
        <div className="bg-black text-white rounded-2xl p-12 text-center mt-16">
          <h3 className="text-3xl font-bold mb-4">
            Calculează ROI-ul Pentru Business-ul Tău
          </h3>
          <p className="text-xl text-gray-300 mb-8">
            Folosește calculatorul nostru interactiv pentru scenariul tău specific
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/roi-calculator"
              className="bg-white text-black px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg"
            >
              Calculator ROI Interactiv
            </Link>
            <Link
              href="/demo"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-black transition-all duration-200 font-semibold text-lg"
            >
              Vorbește cu un Expert
            </Link>
          </div>
          <div className="text-sm text-gray-400 mt-6">
            ℹ Majoritatea clienților economisesc 5,000-15,000 lei lunar
          </div>
        </div>
      </div>
    </section>
  )
}
