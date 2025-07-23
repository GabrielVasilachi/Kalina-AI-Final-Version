import { HeroSection } from '@/components/sections/HeroSection'
import { MainFeaturesSection } from '@/components/sections/MainFeaturesSection'
import { InteractiveFeatureCards } from '@/components/InteractiveFeatureCards'
import { ProductDemoSection } from '@/components/sections/ProductDemoSection'
import { AdvancedCapabilitiesSection } from '@/components/sections/AdvancedCapabilitiesSection'

import { HowItWorksSection } from '@/components/sections/HowItWorksSection'
import { TrustedBySection } from '@/components/sections/TrustedBySection'
import { CalendarDemoSection } from '@/components/sections/CalendarDemoSection'
import { FrequentlyAskedQuestions } from '@/components/sections/FrequentlyAskedQuestions'
import { CallToActionSection } from '@/components/sections/CallToActionSection'
import { NavigationHeader } from '@/components/layout/NavigationHeader'
import { SmoothScrollContextProvider } from '@/components/providers/SmoothScrollContextProvider'

export default function HomePage() {
  return (
    <SmoothScrollContextProvider>
      <div className="relative min-h-screen bg-white">
        {/* Background Effects removed for pure white */}
        
        {/* Navigation */}
        <NavigationHeader />
        
        {/* Main Content */}
        <main>
          <HeroSection />
          <ProductDemoSection />
          <TrustedBySection />
          <MainFeaturesSection />
          <AdvancedCapabilitiesSection />
          
          {/* Stacked Feature Sections */}
          <InteractiveFeatureCards />
          <HowItWorksSection />
          <FrequentlyAskedQuestions />
          <CallToActionSection />
        </main>
      </div>
    </SmoothScrollContextProvider>
  )
}
