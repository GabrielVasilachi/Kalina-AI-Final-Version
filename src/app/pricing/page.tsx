'use client'

import { useScrollAnimationReveal } from '@/hooks/useScrollAnimationReveal'
import { NavigationHeader } from '@/components/layout/NavigationHeader'
import { SmoothScrollContextProvider } from '@/components/providers/SmoothScrollContextProvider'
import { useLanguage } from '@/lib/i18n'

export default function PricingPage() {
  const { t } = useLanguage()
  const { ref, classes, isVisible } = useScrollAnimationReveal('up')

  const plans = [
    {
      name: t('pages.pricing.starter'),
      price: "€29",
      period: t('pages.pricing.perMonth'),
      description: t('pages.pricing.starterDesc'),
      features: [
        "Până la 1,000 minute/lună",
        t('pages.pricing.aiNoiseReduction'),
        t('pages.pricing.emailSupport'),
        t('pages.pricing.basicApi'),
        t('pages.pricing.uptime99')
      ],
      highlighted: false,
      cta: t('pages.pricing.startFree')
    },
    {
      name: t('pages.pricing.professional'),
      price: "€99",
      period: t('pages.pricing.perMonth'),
      description: t('pages.pricing.professionalDesc'),
      features: [
        "Până la 10,000 minute/lună",
        t('pages.pricing.allAiFeatures'),
        t('pages.pricing.prioritySupport'),
        t('pages.pricing.fullApi'),
        t('pages.pricing.uptime999'),
        t('pages.pricing.advancedAnalytics'),
        t('pages.pricing.customIntegrations')
      ],
      highlighted: true,
      cta: t('pages.pricing.startFree')
    },
    {
      name: t('pages.pricing.enterprise'),
      price: t('pages.pricing.custom'),
      period: "",
      description: t('pages.pricing.enterpriseDesc2'),
      features: [
        t('pages.pricing.unlimitedMinutes'),
        t('pages.pricing.customAi'),
        t('pages.pricing.dedicatedManager'),
        t('pages.pricing.guaranteedSla'),
        t('pages.pricing.uptime9999'),
        t('pages.pricing.advancedSecurity'),
        t('pages.pricing.onPremiseDeploy'),
        t('pages.pricing.gdprCompliance')
      ],
      highlighted: false,
      cta: t('pages.pricing.contactUs')
    }
  ]

  return (
    <SmoothScrollContextProvider>
      <div className="relative min-h-screen bg-white">
        <NavigationHeader />
        
        <main className="pt-16">
          {/* Hero Section */}
          <section className="section-padding relative overflow-hidden">
            <div className="morph-shape-3 absolute top-20 left-20 opacity-20"></div>
            <div className="morph-shape-1 absolute bottom-40 right-20 opacity-30"></div>
            
        <div className="container max-w-8xl mx-auto px-6 pt-32 pb-24">
          <div 
            ref={ref}
            className={`${classes} text-center mb-16`}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-8 break-words leading-tight">
              {t('pages.pricing.title')}
            </h1>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto mb-4 break-words leading-normal">
              {t('pages.pricing.subtitle')}
            </p>
          </div>              {/* Pricing Cards */}
              <div className="grid lg:grid-cols-3 gap-x-12 gap-y-16 mt-20">
                {plans.map((plan, index) => (
                  <div 
                    key={index}
                    className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 relative border border-white/20 shadow-lg ${
                      plan.highlighted ? 'border-2 border-brand-400' : ''
                    }`}
                    style={{
                      overflow: 'visible',
                      paddingTop: plan.highlighted ? '2.5rem' : undefined, // extra space for badge
                      background: 'rgba(234, 239, 239, 0.1)',
                      boxShadow: '0 8px 32px rgba(51, 52, 70, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    {plan.highlighted && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-brand-400 text-white px-4 py-2 rounded-full text-sm font-semibold">
                          {t('pages.pricing.mostPopular')}
                        </span>
                      </div>
                    )}
                    
                    <div className="text-center mb-10">
                      <h3 className="text-2xl font-bold text-brand-400 mb-3 break-words leading-tight">
                        {plan.name}
                      </h3>
                      <p className="text-brand-300 text-base mb-7 break-words leading-normal">
                        {plan.description}
                      </p>
                      <div className="flex flex-wrap items-baseline justify-center gap-x-2">
                        <span className="text-4xl font-bold text-brand-400">
                          {plan.price}
                        </span>
                        <span className="text-brand-300 ml-1">
                          {plan.period}
                        </span>
                      </div>
                    </div>
                    
                    <ul className="space-y-4 mb-10">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3 break-words">
                          <span className="text-green-400 flex-shrink-0">✓</span>
                          <span className="text-brand-300 break-words leading-normal">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <button 
                      className="w-full font-semibold py-3 px-6 rounded-xl cursor-pointer"
                      style={{
                        background: plan.highlighted 
                          ? 'linear-gradient(135deg, var(--brand-400), var(--brand-300))' 
                          : 'rgba(234, 239, 239, 0.6)',
                        color: plan.highlighted ? 'var(--brand-100)' : 'var(--brand-400)',
                        border: plan.highlighted ? 'none' : '1px solid rgba(127, 140, 170, 0.3)',
                        boxShadow: plan.highlighted 
                          ? '0 10px 25px rgba(51, 52, 70, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                          : 'none'
                      }}
                    >
                      {plan.cta}
                    </button>
                  </div>
                ))}
              </div>

              {/* FAQ Section */}
              <div className="mt-20">
                <h2 className="text-3xl font-bold text-brand-400 mb-8 text-center">
                  {t('pages.pricing.faqTitle')}
                </h2>
                
                <div className="max-w-3xl mx-auto space-y-6">
                  {[
                    {
                      q: t('pages.pricing.faqQuestion1'),
                      a: t('pages.pricing.faqAnswer1')
                    },
                    {
                      q: t('pages.pricing.faqQuestion2'),
                      a: t('pages.pricing.faqAnswer2')
                    },
                    {
                      q: t('pages.pricing.faqQuestion3'),
                      a: t('pages.pricing.faqAnswer3')
                    }
                  ].map((faq, index) => (
                    <div 
                      key={index} 
                      className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg"
                      style={{
                        background: 'rgba(234, 239, 239, 0.1)',
                        boxShadow: '0 8px 32px rgba(51, 52, 70, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                      }}
                    >
                      <h3 className="text-lg font-semibold text-brand-400 mb-2">
                        {faq.q}
                      </h3>
                      <p className="text-brand-300">
                        {faq.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </SmoothScrollContextProvider>
  )
}
