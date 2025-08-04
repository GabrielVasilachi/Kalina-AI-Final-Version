// import { HeroSection } from '@/components/sections/HeroSection'

import { MainFeaturesSection } from '@/components/sections/MainFeaturesSection'
import { InteractiveFeatureCards } from '@/components/InteractiveFeatureCards'
import { ProductDemoSection } from '@/components/sections/ProductDemoSection'
import { AdvancedCapabilitiesSection } from '@/components/sections/AdvancedCapabilitiesSection'
import { TechnologyShowcaseSection } from '@/components/sections/TechnologyShowcaseSection'
import { ROICalculatorSection } from '@/components/sections/ROICalculatorSection'
import { CompetitiveAdvantageSection } from '@/components/sections/CompetitiveAdvantageSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { FinalCTASection } from '@/components/sections/FinalCTASection'
import { AnalyticsShowcaseSection } from '@/components/sections/AnalyticsShowcaseSection'

import { HowItWorksSection } from '@/components/sections/HowItWorksSection'
import { TrustedBySection } from '@/components/sections/TrustedBySection'
import { FrequentlyAskedQuestions } from '@/components/sections/FrequentlyAskedQuestions'

import { NavigationHeader } from '@/components/layout/NavigationHeader'
import { SmoothScrollContextProvider } from '@/components/providers/SmoothScrollContextProvider'
import { ResponsiveHeroSection } from '@/components/sections/ResponsiveHeroSection'

export default function HomePage() {
  return (
    <SmoothScrollContextProvider>
      <div className="relative min-h-screen bg-white">
        {/* Navigation */}
        <NavigationHeader />
        
        {/* Main Content */}
        <main className="relative z-10">
          <ResponsiveHeroSection />
          <ProductDemoSection />
          <TrustedBySection />
          <AnalyticsShowcaseSection />

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
          {/* <CallToActionSection /> */}
        </main>
      </div>
    </SmoothScrollContextProvider>
  )
}
