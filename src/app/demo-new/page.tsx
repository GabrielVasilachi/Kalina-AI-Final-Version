import { MinimalPage } from '@/components/MinimalPage'

export default function DemoPage() {
  return (
    <MinimalPage
      title="Demo Live"
      description="Demonstrație interactivă a platformei Kallina.ai în acțiune. Vorbește cu Ana, Mihai sau Elena - agenții noștri AI în 30 de secunde."
    >
      {/* Demo Widget */}
      <section className="max-w-6xl mx-auto mb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Încearcă acum</h2>
            <p className="text-lg text-gray-600 mb-8">
              Alege unul dintre agenții noștri AI și testează o conversație reală în doar câteva secunde.
            </p>
            
            {/* Agent Selection */}
            <div className="space-y-4 mb-8">
              <div className="border border-gray-200 rounded-xl p-4 hover:border-black transition-all cursor-pointer">
                <h3 className="font-semibold">Ana - Agent Vânzări</h3>
                <p className="text-gray-600 text-sm">Specialist în conversii și închiderea vânzărilor</p>
              </div>
              <div className="border border-gray-200 rounded-xl p-4 hover:border-black transition-all cursor-pointer">
                <h3 className="font-semibold">Mihai - Agent Suport</h3>
                <p className="text-gray-600 text-sm">Expert în rezolvarea problemelor clienților</p>
              </div>
              <div className="border border-gray-200 rounded-xl p-4 hover:border-black transition-all cursor-pointer">
                <h3 className="font-semibold">Elena - Agent Marketing</h3>
                <p className="text-gray-600 text-sm">Specializată în calificarea lead-urilor</p>
              </div>
            </div>

            <button className="bg-black text-white px-8 py-4 rounded-xl font-semibold">
              Începe Conversația
            </button>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 h-96 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </div>
              <p className="text-gray-600">Demo Widget Interactiv</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-loaded Scenarios */}
      <section className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Scenarii Preconfigurate</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="border border-gray-200 rounded-xl p-6 hover:border-black transition-all">
            <h3 className="text-xl font-semibold mb-4">Restaurant</h3>
            <p className="text-gray-600 mb-6">
              Rezervări, meniu, comenzi speciale și programări evenimente
            </p>
            <button className="text-black font-semibold hover:underline">Testează →</button>
          </div>
          <div className="border border-gray-200 rounded-xl p-6 hover:border-black transition-all">
            <h3 className="text-xl font-semibold mb-4">Clinică Medicală</h3>
            <p className="text-gray-600 mb-6">
              Programări, informații tratamente și suport pacienți
            </p>
            <button className="text-black font-semibold hover:underline">Testează →</button>
          </div>
          <div className="border border-gray-200 rounded-xl p-6 hover:border-black transition-all">
            <h3 className="text-xl font-semibold mb-4">Service Auto</h3>
            <p className="text-gray-600 mb-6">
              Programări reparații, diagnosticare și urmărire progres
            </p>
            <button className="text-black font-semibold hover:underline">Testează →</button>
          </div>
        </div>
      </section>

      {/* Tutorial Steps */}
      <section className="max-w-4xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Cum Funcționează</h2>
        <div className="space-y-8">
          <div className="flex items-start gap-6">
            <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-semibold">1</div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Alege Agentul</h3>
              <p className="text-gray-600">Selectează agentul AI potrivit pentru nevoile tale de business</p>
            </div>
          </div>
          <div className="flex items-start gap-6">
            <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-semibold">2</div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Începe Conversația</h3>
              <p className="text-gray-600">Apasă butonul și vorbește natural cu agentul AI</p>
            </div>
          </div>
          <div className="flex items-start gap-6">
            <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-semibold">3</div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Vezi Rezultatele</h3>
              <p className="text-gray-600">Observă răspunsurile naturale și acțiunile automate</p>
            </div>
          </div>
        </div>
      </section>
    </MinimalPage>
  )
}
