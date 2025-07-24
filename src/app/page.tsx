import { HeroSection } from '@/components/sections/HeroSection'
import { MainFeaturesSection } from '@/components/sections/MainFeaturesSection'
import { InteractiveFeatureCards } from '@/components/InteractiveFeatureCards'
import { ProductDemoSection } from '@/components/sections/ProductDemoSection'
import { AdvancedCapabilitiesSection } from '@/components/sections/AdvancedCapabilitiesSection'
import { TechnologyShowcaseSection } from '@/components/sections/TechnologyShowcaseSection'
import { ROICalculatorSection } from '@/components/sections/ROICalculatorSection'
import { CompetitiveAdvantageSection } from '@/components/sections/CompetitiveAdvantageSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { FinalCTASection } from '@/components/sections/FinalCTASection'

import { HowItWorksSection } from '@/components/sections/HowItWorksSection'
import { TrustedBySection } from '@/components/sections/TrustedBySection'
import { FrequentlyAskedQuestions } from '@/components/sections/FrequentlyAskedQuestions'
import { CallToActionSection } from '@/components/sections/CallToActionSection'
import { NavigationHeader } from '@/components/layout/NavigationHeader'
import { SmoothScrollContextProvider } from '@/components/providers/SmoothScrollContextProvider'

export default function HomePage() {
  return (
    <SmoothScrollContextProvider>
      <div className="relative min-h-screen bg-white">
        {/* Background Effects */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-100/20 via-transparent to-blue-50/10"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-200/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl"></div>
        </div>
        
        {/* Navigation */}
        <NavigationHeader />
        
        {/* Main Content */}
        <main className="relative z-10">
          <HeroSection />
          <ProductDemoSection />
          <TrustedBySection />

          <TechnologyShowcaseSection />
          <ROICalculatorSection />
          <MainFeaturesSection />
          <CompetitiveAdvantageSection />
          <AdvancedCapabilitiesSection />
          <TestimonialsSection />
          
          {/* Stacked Feature Sections */}
          <InteractiveFeatureCards />
          <HowItWorksSection />
          <FrequentlyAskedQuestions />
          <FinalCTASection />
          <CallToActionSection />
        </main>
      </div>
    </SmoothScrollContextProvider>
  )
}
