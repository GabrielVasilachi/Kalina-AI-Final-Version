import { Hero } from '@/components/sections/Hero'
import { Features } from '@/components/sections/Features'
import { StackedFeatureSections } from '@/components/StackedFeatureSections'
import { Demo } from '@/components/sections/Demo'

import { HowItWorks } from '@/components/sections/HowItWorks'
import { TrustedBy } from '@/components/sections/TrustedBy'
import { CalendarSection } from '@/components/sections/Calendar'
import { FAQ } from '@/components/sections/FAQ'
import { CTA } from '@/components/sections/CTA'
import { Header } from '@/components/layout/Header'
import { SmoothScrollProvider } from '@/components/providers/SmoothScrollProvider'

export default function HomePage() {
  return (
    <SmoothScrollProvider>
      <div className="relative min-h-screen bg-white">
        {/* Background Effects removed for pure white */}
        
        {/* Navigation */}
        <Header />
        
        {/* Main Content */}
        <main>
          <Hero />
          <Demo />
          <TrustedBy />
          <Features />
          
          {/* Stacked Feature Sections */}
          <StackedFeatureSections />
          <HowItWorks />
          <FAQ />
          <CTA />
        </main>
      </div>
    </SmoothScrollProvider>
  )
}
