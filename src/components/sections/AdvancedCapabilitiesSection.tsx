"use client";
import { useLanguage } from '../../lib/i18n'
import { useStore } from 'zustand'
export function AdvancedCapabilitiesSection() {
  const translations = useStore(useLanguage, state => state.translations)
  const adv = translations.advancedCapabilitiesSection
  return (
    <>
      {/* Advanced Capabilities Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">
              {adv.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {adv.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {adv.features.map((feature: { title: string; items: string[] }, idx: number) => (
              <div className="bg-gray-50 rounded-xl p-8" key={idx}>
                <div className="flex items-center mb-4">
                  {/* You can add icons here if needed */}
                  <h3 className="text-xl font-bold text-black">{feature.title}</h3>
                </div>
                <ul className="text-gray-700 space-y-2 text-sm">
                  {feature.items.map((item: string, i: number) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-black text-white rounded-2xl p-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">{adv.business.title}</h3>
              <p className="text-gray-300 text-lg">
                {adv.business.subtitle}
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-3 text-white">{adv.business.orchestrationTitle}</h4>
                <ul className="text-gray-300 space-y-2 text-sm">
                  {adv.business.orchestrationItems.map((item: string, i: number) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3 text-white">{adv.business.predictiveTitle}</h4>
                <ul className="text-gray-300 space-y-2 text-sm">
                  {adv.business.predictiveItems.map((item: string, i: number) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Voice Technology Innovation */}
      <section className="max-w-7xl mx-auto mb-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Tehnologii Vocale Revoluționare
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Fundamentul platformei Kallina.ai: 10 tehnologii breakthrough care redefinesc interacțiunea vocală cu AI
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold">Turn-Taking Revolution</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Model avansat de preluare a rândului la vorbire care elimină pauzele incomode și întreruperile nenaturale.
            </p>
            <div className="bg-white rounded-lg p-4 border border-blue-200">
              <h4 className="font-semibold mb-2 text-blue-800">Caracteristici cheie:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Analiză real-time a indicilor conversaționali</li>
                <li>• Detectare avansată a cuvintelor de umplutură</li>
                <li>• Optimizare momentului de intervenție</li>
                <li>• Conversații indistinguibile de cele umane</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-8 border border-purple-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold">Sub-100ms TTS</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Sinteză vocală fulgerătoare cu timp până la primul octet sub 100ms pentru interacțiuni în timp real.
            </p>
            <div className="bg-white rounded-lg p-4 border border-purple-200">
              <h4 className="font-semibold mb-2 text-purple-800">Impact:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Răspunsuri vocale aproape instantanee</li>
                <li>• Elimină întârzierile perceptibile</li>
                <li>• Ritm conversațional natural și rapid</li>
                <li>• Optimizări algoritmice avansate</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-black text-white rounded-2xl p-8 mb-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Clonare Vocală Profesională 2.0</h3>
            <p className="text-gray-300 text-lg">
              Clonarea avansată a vocii cu doar 30 minute de înregistrări - Suport pentru 32 de limbi
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Voice Captcha Security</h4>
              <p className="text-gray-300 text-sm">Mecanism avansat pentru consimțământ și legitimitate</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M11,16.5L6.5,12L7.91,10.59L11,13.67L16.59,8.09L18,9.5L11,16.5Z"/>
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Rapid Training</h4>
              <p className="text-gray-300 text-sm">Doar 2-4 ore pentru antrenament complet</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.9,17.39C17.64,16.59 16.89,16 16,16H15V13A1,1 0 0,0 14,12H8V10H10A1,1 0 0,0 11,9V7H13A2,2 0 0,0 15,5V4.59C17.93,5.77 20,8.64 20,12C20,14.08 19.2,15.97 17.9,17.39M11,19.93C7.05,19.44 4,16.08 4,12C4,11.38 4.08,10.78 4.21,10.21L9,15V16A2,2 0 0,0 11,18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"/>
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Multilingv Global</h4>
              <p className="text-gray-300 text-sm">Suport nativ pentru 32 de limbi internationale</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 9h-2V5h2v6zm0 4h-2v-2h2v2z"/>
              </svg>
              Control Emoțional Avansat
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></span>
                <span>Etichete audio pentru șoapte, râs, entuziasm</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></span>
                <span>Schimbări de ton în mijlocul propoziției</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></span>
                <span>Cel mai expresiv model TTS disponibil</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.9,17.39C17.64,16.59 16.89,16 16,16H15V13A1,1 0 0,0 14,12H8V10H10A1,1 0 0,0 11,9V7H13A2,2 0 0,0 15,5V4.59C17.93,5.77 20,8.64 20,12C20,14.08 19.2,15.97 17.9,17.39M11,19.93C7.05,19.44 4,16.08 4,12C4,11.38 4.08,10.78 4.21,10.21L9,15V16A2,2 0 0,0 11,18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"/>
              </svg>
              Multi-Character & Multi-Accent
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></span>
                <span>Comutare între personaje în timp real</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></span>
                <span>Schimbare accent dinamic (US/UK/Australian)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></span>
                <span>40+ limbi cu detectare automată</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
