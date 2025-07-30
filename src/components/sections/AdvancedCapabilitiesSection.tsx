"use client";
import { useLanguage } from '../../lib/i18n'

export function AdvancedCapabilitiesSection() {
  const { t, translations } = useLanguage()
  
  return (
    <>
      {/* Advanced Capabilities Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">
              {t('advancedCapabilitiesSection.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('advancedCapabilitiesSection.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {translations.advancedCapabilitiesSection?.features?.map((feature: { title: string; items: string[] }, idx: number) => (
              <div className="bg-gray-100 rounded-xl p-8 border border-gray-300 hover:shadow-2xl hover:shadow-brand-400/20 hover:scale-105 hover:bg-gradient-to-br hover:from-gray-100 hover:to-brand-50 hover:border-brand-300 transition-all duration-500 group" key={idx}>
                <div className="flex items-center mb-4">
                  {/* You can add icons here if needed */}
                  <h3 className="text-xl font-bold text-black group-hover:text-brand-500 transition-colors duration-300">{feature.title}</h3>
                </div>
                <ul className="text-gray-700 space-y-2 text-sm group-hover:text-brand-600 transition-colors duration-300">
                  {feature.items.map((item: string, i: number) => (
                    <li key={i} className="hover:text-brand-700 transition-colors duration-200">• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-black text-white rounded-2xl p-12 hover:bg-gradient-to-br hover:from-black hover:to-brand-700 hover:shadow-2xl hover:shadow-brand-400/30 hover:scale-[1.02] transition-all duration-500 group">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4 group-hover:text-brand-200 transition-colors duration-300">{translations.advancedCapabilitiesSection?.business?.title}</h3>
              <p className="text-gray-300 text-lg group-hover:text-brand-100 transition-colors duration-300">
                {translations.advancedCapabilitiesSection?.business?.subtitle}
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-3 text-white">{translations.advancedCapabilitiesSection?.business?.orchestrationTitle}</h4>
                <ul className="text-gray-300 space-y-2 text-sm">
                  {translations.advancedCapabilitiesSection?.business?.orchestrationItems?.map((item: string, i: number) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3 text-white">{translations.advancedCapabilitiesSection?.business?.predictiveTitle}</h4>
                <ul className="text-gray-300 space-y-2 text-sm">
                  {translations.advancedCapabilitiesSection?.business?.predictiveItems?.map((item: string, i: number) => (
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
            {translations.advancedCapabilitiesSection?.voiceTech?.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {translations.advancedCapabilitiesSection?.voiceTech?.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-blue-100 rounded-2xl p-8 border border-blue-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold">{translations.advancedCapabilitiesSection?.voiceTech?.turnTaking?.title}</h3>
            </div>
            <p className="text-gray-700 mb-4">
              {translations.advancedCapabilitiesSection?.voiceTech?.turnTaking?.description}
            </p>
            <div className="bg-white rounded-lg p-4 border border-blue-200">
              <h4 className="font-semibold mb-2 text-blue-800">{translations.advancedCapabilitiesSection?.voiceTech?.turnTaking?.featuresTitle}</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                {translations.advancedCapabilitiesSection?.voiceTech?.turnTaking?.features?.map((feature: string, i: number) => (
                  <li key={i}>• {feature}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-purple-100 rounded-2xl p-8 border border-purple-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold">{translations.advancedCapabilitiesSection?.voiceTech?.subTts?.title}</h3>
            </div>
            <p className="text-gray-700 mb-4">
              {translations.advancedCapabilitiesSection?.voiceTech?.subTts?.description}
            </p>
            <div className="bg-white rounded-lg p-4 border border-purple-200">
              <h4 className="font-semibold mb-2 text-purple-800">{translations.advancedCapabilitiesSection?.voiceTech?.subTts?.impactTitle}</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                {translations.advancedCapabilitiesSection?.voiceTech?.subTts?.impact?.map((item: string, i: number) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-black text-white rounded-2xl p-8 mb-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">{translations.advancedCapabilitiesSection?.voiceTech?.voiceCloning?.title}</h3>
            <p className="text-gray-300 text-lg">
              {translations.advancedCapabilitiesSection?.voiceTech?.voiceCloning?.subtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                </svg>
              </div>
              <h4 className="font-semibold mb-2">{translations.advancedCapabilitiesSection?.voiceTech?.voiceCloning?.security?.title}</h4>
              <p className="text-gray-300 text-sm">{translations.advancedCapabilitiesSection?.voiceTech?.voiceCloning?.security?.description}</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M11,16.5L6.5,12L7.91,10.59L11,13.67L16.59,8.09L18,9.5L11,16.5Z"/>
                </svg>
              </div>
              <h4 className="font-semibold mb-2">{translations.advancedCapabilitiesSection?.voiceTech?.voiceCloning?.training?.title}</h4>
              <p className="text-gray-300 text-sm">{translations.advancedCapabilitiesSection?.voiceTech?.voiceCloning?.training?.description}</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.9,17.39C17.64,16.59 16.89,16 16,16H15V13A1,1 0 0,0 14,12H8V10H10A1,1 0 0,0 11,9V7H13A2,2 0 0,0 15,5V4.59C17.93,5.77 20,8.64 20,12C20,14.08 19.2,15.97 17.9,17.39M11,19.93C7.05,19.44 4,16.08 4,12C4,11.38 4.08,10.78 4.21,10.21L9,15V16A2,2 0 0,0 11,18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"/>
                </svg>
              </div>
              <h4 className="font-semibold mb-2">{translations.advancedCapabilitiesSection?.voiceTech?.voiceCloning?.multilingual?.title}</h4>
              <p className="text-gray-300 text-sm">{translations.advancedCapabilitiesSection?.voiceTech?.voiceCloning?.multilingual?.description}</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-100 rounded-2xl p-6 border border-gray-300">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 9h-2V5h2v6zm0 4h-2v-2h2v2z"/>
              </svg>
              {translations.advancedCapabilitiesSection?.voiceTech?.emotionalControl?.title}
            </h3>
            <ul className="space-y-3 text-gray-600">
              {translations.advancedCapabilitiesSection?.voiceTech?.emotionalControl?.features?.map((feature: string, i: number) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-100 rounded-2xl p-6 border border-gray-300">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.9,17.39C17.64,16.59 16.89,16 16,16H15V13A1,1 0 0,0 14,12H8V10H10A1,1 0 0,0 11,9V7H13A2,2 0 0,0 15,5V4.59C17.93,5.77 20,8.64 20,12C20,14.08 19.2,15.97 17.9,17.39M11,19.93C7.05,19.44 4,16.08 4,12C4,11.38 4.08,10.78 4.21,10.21L9,15V16A2,2 0 0,0 11,18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"/>
              </svg>
              {translations.advancedCapabilitiesSection?.voiceTech?.multiCharacter?.title}
            </h3>
            <ul className="space-y-3 text-gray-600">
              {translations.advancedCapabilitiesSection?.voiceTech?.multiCharacter?.features?.map((feature: string, i: number) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
