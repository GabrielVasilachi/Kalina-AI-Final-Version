import { MinimalPage } from '@/components/MinimalPage'

export default function HealthcareAIPage() {
  return (
    <MinimalPage
      title="AI Medical"
      description="Revoluționează comunicarea medicală cu AI certificat HIPAA. Programări automate, suport pacienți 24/7 și eficiență maximă."
    >
      {/* Key Benefits */}
      <section className="max-w-6xl mx-auto mb-20">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-gray-100 rounded-full mx-auto mb-6 flex items-center justify-center">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">100% Conformitate HIPAA</h3>
            <p className="text-gray-600">
              Certificare completă pentru protecția datelor medicale și confidențialitatea pacienților
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-gray-100 rounded-full mx-auto mb-6 flex items-center justify-center">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">24/7 Disponibilitate</h3>
            <p className="text-gray-600">
              Programări și suport continuu pentru pacienți, chiar și în afara orelor de program
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-gray-100 rounded-full mx-auto mb-6 flex items-center justify-center">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">90% Reducere Costuri</h3>
            <p className="text-gray-600">
              Economii significative prin automatizarea proceselor administrative și de comunicare
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Cazuri de Utilizare Medicale</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="border border-gray-200 rounded-xl p-6 hover:border-black transition-all">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 8h-1V6c0-2.76-2.24-5-5-5S8 3.24 8 6v2H7c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM10 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2h-6V6zm0 9c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z"/>  
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Clinici și Spitale</h3>
            </div>
            <ul className="space-y-2 text-gray-600 mb-6">
              <li>• Programări consultații și investigații</li>
              <li>• Confirmări și reprogramări automate</li>
              <li>• Informații despre tratamente</li>
              <li>• Reminder-e pentru medicamente</li>
              <li>• Triaj telefonic inițial</li>
            </ul>
            <div className="bg-green-50 p-3 rounded-lg">
              <p className="text-sm text-green-800">
                <strong>Rezultat:</strong> +60% eficiență programări, -40% no-shows
              </p>
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl p-6 hover:border-black transition-all">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🦷</span>
              </div>
              <h3 className="text-xl font-semibold">Cabinete Stomatologice</h3>
            </div>
            <ul className="space-y-2 text-gray-600 mb-6">
              <li>• Programări tratamente dentare</li>
              <li>• Educație igienă orală</li>
              <li>• Verificare asigurări medicale</li>
              <li>• Follow-up post-tratament</li>
              <li>• Urgențe stomatologice</li>
            </ul>
            <div className="bg-green-50 p-3 rounded-lg">
              <p className="text-sm text-green-800">
                <strong>Rezultat:</strong> +45% programări noi, +30% retenție pacienți
              </p>
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl p-6 hover:border-black transition-all">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21,9V7L9,5V9L21,9M12,2A7,7 0 0,1 19,9A7,7 0 0,1 12,16A7,7 0 0,1 5,9A7,7 0 0,1 12,2M12,4A5,5 0 0,0 7,9A5,5 0 0,0 12,14A5,5 0 0,0 17,9A5,5 0 0,0 12,4M12,6A3,3 0 0,1 15,9A3,3 0 0,1 12,12A3,3 0 0,1 9,9A3,3 0 0,1 12,6Z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Farmacii</h3>
            </div>
            <ul className="space-y-2 text-gray-600 mb-6">
              <li>• Verificare disponibilitate medicamente</li>
              <li>• Consiliere farmaceutică</li>
              <li>• Comandă și rezervare produse</li>
              <li>• Informații despre efecte adverse</li>
              <li>• Coordonarea livrărilor</li>
            </ul>
            <div className="bg-green-50 p-3 rounded-lg">
              <p className="text-sm text-green-800">
                <strong>Rezultat:</strong> +55% satisfacție clienți, -25% timp consultare
              </p>
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl p-6 hover:border-black transition-all">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Pediatrie</h3>
            </div>
            <ul className="space-y-2 text-gray-600 mb-6">
              <li>• Programări consultații copii</li>
              <li>• Vaccinări și controale</li>
              <li>• Consiliere părinți</li>
              <li>• Urgențe pediatrice</li>
              <li>• Dezvoltare și creștere</li>
            </ul>
            <div className="bg-green-50 p-3 rounded-lg">
              <p className="text-sm text-green-800">
                <strong>Rezultat:</strong> +70% satisfacție părinți, -50% timp așteptare
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Medical Conversation Example */}
      <section className="max-w-4xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Exemplu Conversație Medicală</h2>
        
        <div className="bg-gray-50 rounded-2xl p-8">
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">AI</span>
              </div>
              <div className="bg-white rounded-xl p-4 flex-1">
                <p className="text-gray-800">
                  Bună ziua! Mă numesc Ana și sunt asistentul virtual al Clinicii MedLife. Cu ce vă pot ajuta astăzi?
                </p>
              </div>
            </div>

            <div className="flex gap-4 justify-end">
              <div className="bg-blue-100 rounded-xl p-4 flex-1 max-w-md">
                <p className="text-gray-800">
                  Bună ziua, aș dori să programez o consultație la cardiolog pentru săptămâna viitoare.
                </p>
              </div>
              <div className="w-10 h-10 bg-gray-400 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                </svg>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">AI</span>
              </div>
              <div className="bg-white rounded-xl p-4 flex-1">
                <p className="text-gray-800">
                  Perfect! Pentru a vă programa la cardiolog, am nevoie de câteva informații. Aveți o problemă specifică sau este o consultație de rutină? Și aveți o preferință pentru ziua sau ora?
                </p>
              </div>
            </div>

            <div className="flex gap-4 justify-end">
              <div className="bg-blue-100 rounded-xl p-4 flex-1 max-w-md">
                <p className="text-gray-800">
                  Am avut niște dureri în piept recent și doctorul de familie mi-a recomandat un consult. Prefer dimineața, dacă se poate.
                </p>
              </div>
              <div className="w-10 h-10 bg-gray-400 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                </svg>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">AI</span>
              </div>
              <div className="bg-white rounded-xl p-4 flex-1">
                <p className="text-gray-800">
                  Înțeleg, și îmi pare rău să aud de dureri. Am găsit un slot disponibil marți, 28 ianuarie la ora 09:30 cu Dr. Popescu. Această programare include și un ECG de rutină. Vă convine?
                </p>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-gray-600 italic">
                Conversația continuă cu confirmarea datelor, trimiterea confirmării și toate detaliile necesare...
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HIPAA Compliance */}
      <section className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Conformitate HIPAA</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Protecția Datelor Medicale</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold">Encriptare End-to-End</h4>
                  <p className="text-gray-600 text-sm">Toate conversațiile și datele sunt criptate cu standarde militare</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold">Audit Trail Complet</h4>
                  <p className="text-gray-600 text-sm">Înregistrarea tuturor accesărilor și modificărilor datelor</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold">Control Acces Granular</h4>
                  <p className="text-gray-600 text-sm">Permisiuni precise pentru fiecare utilizator și funcție</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold">Backup Securizat</h4>
                  <p className="text-gray-600 text-sm">Copii de siguranță automate cu stocare criptată</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-4">Certificări și Standarde</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                <span className="font-medium">HIPAA Compliance</span>
                <span className="text-green-600 font-semibold flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  Certificat
                </span>
              </div>
              <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                <span className="font-medium">SOC 2 Type II</span>
                <span className="text-green-600 font-semibold flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  Certificat
                </span>
              </div>
              <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                <span className="font-medium">ISO 27001</span>
                <span className="text-green-600 font-semibold flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  Certificat
                </span>
              </div>
              <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                <span className="font-medium">GDPR Compliant</span>
                <span className="text-green-600 font-semibold flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  Certificat
                </span>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Garanție:</strong> 100% conformitate cu toate reglementările medicale românești și internaționale
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="max-w-4xl mx-auto mb-20">
        <div className="bg-gray-50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-center mb-8">Calculator ROI Medical</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Situația actuală</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Pacienți programați/zi</label>
                  <input type="number" className="w-full border border-gray-300 rounded-lg px-3 py-2" placeholder="50" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Minute/programare (telefonic)</label>
                  <input type="number" className="w-full border border-gray-300 rounded-lg px-3 py-2" placeholder="5" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Cost personal administrativ/oră</label>
                  <input type="number" className="w-full border border-gray-300 rounded-lg px-3 py-2" placeholder="45" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Programări ratate/săptămână</label>
                  <input type="number" className="w-full border border-gray-300 rounded-lg px-3 py-2" placeholder="15" />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Cu Kallina.ai Medical</h3>
              <div className="space-y-3">
                <div className="flex justify-between p-3 bg-white rounded-lg">
                  <span>Timp economisit/zi</span>
                  <span className="font-semibold">3.8 ore</span>
                </div>
                <div className="flex justify-between p-3 bg-white rounded-lg">
                  <span>Economii personal/lună</span>
                  <span className="font-semibold">4,560 RON</span>
                </div>
                <div className="flex justify-between p-3 bg-white rounded-lg">
                  <span>Programări ratate</span>
                  <span className="font-semibold">-92%</span>
                </div>
                <div className="flex justify-between p-3 bg-white rounded-lg">
                  <span>Venit suplimentar/lună</span>
                  <span className="font-semibold">8,400 RON</span>
                </div>
                <div className="flex justify-between p-3 bg-black text-white rounded-lg">
                  <span>ROI lunar total</span>
                  <span className="font-semibold">3,240%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MinimalPage>
  )
}
