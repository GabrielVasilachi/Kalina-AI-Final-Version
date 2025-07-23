import { BasicPageLayout } from '@/components/BasicPageLayout'

export default function HealthcareAIPage() {
  return (
    <BasicPageLayout
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

      {/* Advanced Medical AI Capabilities */}
      <section className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Inteligență Artificială Medicală Avansată</h2>
        
        <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Diagnostic și Asistență Clinică AI</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Tehnologie de vârf pentru asistență medicală inteligentă, diagnostic diferențial și suport clinic bazat pe dovezi științifice.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.14,12.94C19.73,12.34 20.34,11.69 20.34,10.86C20.34,10 19.73,9.37 19.14,8.78L13.81,3.45C13.54,3.16 13.14,3 12.69,3C12.24,3 11.84,3.16 11.56,3.45L6.23,8.78C5.64,9.37 5.03,10 5.03,10.86C5.03,11.69 5.64,12.34 6.23,12.94L11.56,18.27C11.84,18.55 12.24,18.72 12.69,18.72C13.14,18.72 13.54,18.55 13.81,18.27L19.14,12.94M12.69,5.29L16.93,9.53H8.45L12.69,5.29M8.45,12.19H16.93L12.69,16.43L8.45,12.19Z"/>
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Diagnostic AI</h4>
              <p className="text-gray-600 text-sm">Algoritmi de diagnostic diferențial cu acuratețe de 94.3% pentru simptome comune</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M11,16.5L6.5,12L7.91,10.59L11,13.67L16.59,8.09L18,9.5L11,16.5Z"/>
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Evidence-Based Medicine</h4>
              <p className="text-gray-600 text-sm">Recomandări bazate pe 50,000+ studii medicale și ghiduri clinice actualizate</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17,10.5V7A1,1 0 0,0 16,6H4A1,1 0 0,0 3,7V10.5C3,11.5 3.5,12.37 4.22,12.81V17A1,1 0 0,0 5,18H7A1,1 0 0,0 8,17V13H12V17A1,1 0 0,0 13,18H15A1,1 0 0,0 16,17V12.81C16.5,12.37 17,11.5 17,10.5M19,6V10.5A2.5,2.5 0 0,1 16.5,13H14V17A2,2 0 0,1 12,19H8A2,2 0 0,1 6,17V13H3.5A2.5,2.5 0 0,1 1,10.5V6A2,2 0 0,1 3,4H17A2,2 0 0,1 19,6Z"/>
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Drug Interaction Monitor</h4>
              <p className="text-gray-600 text-sm">Monitorizare automată a interacțiunilor medicamentoase și alergiilor cunoscute</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2C17.52,2 22,6.48 22,12C22,17.52 17.52,22 12,22C6.48,22 2,17.52 2,12C2,6.48 6.48,2 12,2M15.5,8H14.5C14.5,6.75 13.25,5.5 12,5.5C10.75,5.5 9.5,6.75 9.5,8H8.5C8.5,6.19 9.69,5 11.5,5H12.5C14.31,5 15.5,6.19 15.5,8M12,8.5C10.62,8.5 9.5,9.62 9.5,11V15.5C9.5,16.88 10.62,18 12,18C13.38,18 14.5,16.88 14.5,15.5V11C14.5,9.62 13.38,8.5 12,8.5Z"/>
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Risk Assessment</h4>
              <p className="text-gray-600 text-sm">Evaluare predictivă a riscurilor medicale și stratificare pentru pacienți</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="border border-gray-200 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21,9V7L9,5V9L21,9M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M16,14H13V17H11V14H8V12H11V9H13V12H16V14Z"/>
              </svg>
              Clinical Decision Support
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                <span>Sugestii de diagnostic bazate pe simptome și istoric medical</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                <span>Protocoluri de tratament personalizate pentru fiecare pacient</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                <span>Alerturi pentru contraindicații și complicații potențiale</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                <span>Integrare cu laborator pentru interpretare rezultate</span>
              </li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M17,13H13V17H11V13H7V11H11V7H13V11H17V13Z"/>
              </svg>
              Predictive Healthcare
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                <span>Predicție deteriorare clinică cu 48-72h în avans</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                <span>Identificare precoce a infecțiilor nosocomiale</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                <span>Optimizare resurse și planificare capacitate</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                <span>Modele de risc personalizate pentru boli cronice</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 bg-red-50 px-4 py-2 rounded-full">
            <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M11,16.5L6.5,12L7.91,10.59L11,13.67L16.59,8.09L18,9.5L11,16.5Z"/>
            </svg>
            <span className="text-red-800 font-medium">Certificat pentru uz medical în România și UE</span>
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
    </BasicPageLayout>
  )
}
