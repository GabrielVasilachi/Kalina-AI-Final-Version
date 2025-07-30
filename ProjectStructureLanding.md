# Kallina AI Final Version - Project Structure

## Root Directory
```
Kallina-AI-Final-Version/
├── deploy-instructions.sh          # Deployment script for production
├── next-env.d.ts                   # Next.js TypeScript declarations
├── next.config.js                  # Next.js configuration file
├── package.json                    # Dependencies and scripts
├── postcss.config.js               # PostCSS configuration for Tailwind
├── README.md                       # Project documentation
├── tailwind.config.js              # Tailwind CSS configuration
├── tsconfig.json                   # TypeScript configuration
├── public/                         # Static assets
└── src/                           # Source code
```

## Public Directory (`/public/`)
Static assets served directly by Next.js:
```
public/
├── List-of-companies.mp4          # Video: Company listing demonstration
├── Loading-screen.mp4              # Video: Application loading animation
├── Reference-video.mp4             # Video: Reference/tutorial content
└── Video-interaction-with-clients.mp4  # Video: Client interaction demo
```

## Source Directory (`/src/`)
Main application source code:
```
src/
├── app/                           # Next.js 13+ App Router pages
├── components/                    # Reusable React components
├── hooks/                        # Custom React hooks
└── lib/                          # Utility libraries and configurations
```

## App Directory (`/src/app/`)
Next.js App Router pages and layouts:
```
app/
├── client-layout.tsx             # Client-side layout wrapper
├── globals.css                   # Global CSS styles
├── layout.tsx                    # Root layout component
├── page.tsx                      # Home page component
├── providers.tsx                 # Application providers wrapper
├── ai-agents/
│   └── page.tsx                  # AI Agents page
├── analytics/
│   └── page.tsx                  # Analytics dashboard page
├── api-documentation/
│   └── page.tsx                  # API documentation page
├── blog/
│   └── page.tsx                  # Blog/articles page
├── calendar-ai/
│   └── page.tsx                  # Calendar AI features page
├── community/
│   └── page.tsx                  # Community page
├── company/
│   └── page.tsx                  # Company information page
├── demo/
│   └── page.tsx                  # Demo page (legacy)
├── demo-new/
│   └── page.tsx                  # New demo page
├── developers/
│   └── page.tsx                  # Developer resources page
├── enterprise/
│   └── page.tsx                  # Enterprise solutions page
├── features/
│   └── page.tsx                  # Features overview page
├── getting-started/
│   └── page.tsx                  # Getting started guide
├── healthcare-ai/
│   └── page.tsx                  # Healthcare AI solutions
├── integrations/
│   └── page.tsx                  # Third-party integrations page
├── legal-services-ai/
│   └── page.tsx                  # Legal services AI page
├── magic-button/
│   └── page.tsx                  # Magic Button feature page
├── platform/
│   └── page.tsx                  # Platform overview page
├── pricing/
│   └── page.tsx                  # Pricing plans page
├── products/
│   └── page.tsx                  # Products catalog page
├── real-estate-ai/
│   └── page.tsx                  # Real estate AI solutions
├── research/
│   └── page.tsx                  # Research and insights page
├── resources/
│   └── page.tsx                  # Resources and documentation
├── restaurants/
│   └── page.tsx                  # Restaurant AI solutions
├── solutions/
│   └── page.tsx                  # Solutions overview page
├── support/
│   └── page.tsx                  # Support and help page
└── whats-new/
    └── page.tsx                  # What's new/changelog page
```

## Components Directory (`/src/components/`)
Reusable React components organized by function:
```
components/
├── AnimatedThreadsBackground.jsx  # Animated background component
├── AppLoadingScreen.tsx          # Application loading screen
├── BasicPageLayout.tsx           # Basic page layout wrapper
├── HomeFeatureSection.tsx        # Home page features section
├── InteractiveFeatureCards.tsx   # Interactive feature cards
├── LanguageSelector.tsx          # Language selection component
├── PageLoadingWrapper.tsx        # Page loading wrapper component
├── layout/
│   ├── NavigationBottomBar.tsx   # Bottom navigation bar
│   ├── NavigationHeader.tsx      # Main navigation header
│   └── SiteFooter.tsx           # Site footer component
├── providers/
│   └── SmoothScrollContextProvider.tsx  # Smooth scroll context
└── sections/
    ├── AdvancedCapabilitiesSection.tsx   # Advanced capabilities section
    ├── CalendarDemoSection.tsx          # Calendar demo section
    ├── CallToActionSection.tsx          # Call-to-action section
    ├── FrequentlyAskedQuestions.tsx     # FAQ section
    ├── HeroSection.tsx                  # Hero/banner section
    ├── HowItWorksSection.tsx           # How it works section
    ├── MainFeaturesSection.tsx         # Main features section
    ├── ProductDemoSection.tsx          # Product demo section (main)
    └── TrustedBySection.tsx            # Trusted by companies section
```

## Hooks Directory (`/src/hooks/`)
Custom React hooks for reusable logic:
```
hooks/
├── useDeviceTypeDetection.ts     # Hook for detecting device type (mobile/desktop)
└── useScrollAnimationReveal.ts   # Hook for scroll-based animation reveals
```

## Lib Directory (`/src/lib/`)
Utility libraries and configurations:
```
lib/
├── commonUtilities.ts            # Common utility functions
└── i18n.ts                      # Internationalization configuration
```

## Configuration Files

### `package.json`
- Dependencies: Next.js, React, TypeScript, Tailwind CSS, Framer Motion
- Scripts: dev, build, start, lint
- Development dependencies: ESLint, TypeScript types

### `next.config.js`
- Next.js configuration
- Build optimization settings
- Image optimization
- Experimental features

### `tailwind.config.js`
- Tailwind CSS configuration
- Custom colors, fonts, animations
- Responsive breakpoints
- Plugin configurations

### `tsconfig.json`
- TypeScript compiler options
- Path mapping for imports
- Strict type checking
- Module resolution settings

### `postcss.config.js`
- PostCSS plugins configuration
- Tailwind CSS integration
- CSS processing pipeline

## Key Features by Component

### ProductDemoSection.tsx (Main Demo Component)
- **Features**: Tab-based demo interface (Conversation AI, Calendar AI, Magic Button)
- **Animations**: Smooth transitions, SVG path animations
- **Responsive**: Dynamic button sizing based on screen width
- **State Management**: Multiple demo states, progress tracking
- **Interactive Elements**: Voice selection, company selection, microphone controls

### Navigation Components
- **NavigationHeader.tsx**: Main site navigation with responsive menu
- **NavigationBottomBar.tsx**: Mobile bottom navigation
- **SiteFooter.tsx**: Site footer with links and information

### Section Components
- **HeroSection.tsx**: Main landing section with CTA
- **MainFeaturesSection.tsx**: Core platform features
- **AdvancedCapabilitiesSection.tsx**: Advanced AI capabilities
- **CalendarDemoSection.tsx**: Calendar AI demonstration
- **HowItWorksSection.tsx**: Process explanation
- **TrustedBySection.tsx**: Social proof and testimonials
- **FrequentlyAskedQuestions.tsx**: FAQ accordion
- **CallToActionSection.tsx**: Final conversion section

### Utility Components
- **AppLoadingScreen.tsx**: Application-wide loading state
- **PageLoadingWrapper.tsx**: Page-specific loading wrapper
- **BasicPageLayout.tsx**: Standard page layout template
- **LanguageSelector.tsx**: Multi-language support
- **InteractiveFeatureCards.tsx**: Interactive feature showcase

## Technology Stack

### Frontend Framework
- **Next.js 14+**: React framework with App Router
- **React 18+**: UI library with latest features
- **TypeScript**: Type-safe JavaScript

### Styling
- **Tailwind CSS**: Utility-first CSS framework
- **PostCSS**: CSS processing
- **Custom CSS**: Global styles and animations

### Animation
- **Framer Motion**: Animation library for React
- **CSS Animations**: Custom keyframe animations
- **SVG Animations**: Animated path drawings

### State Management
- **React Hooks**: useState, useEffect, useRef, useLayoutEffect
- **Context API**: Global state management
- **Custom Hooks**: Reusable stateful logic

### Internationalization
- **Custom i18n**: Multi-language support
- **Dynamic content**: Language-based content switching

### Development Tools
- **ESLint**: Code linting
- **TypeScript**: Type checking
- **Hot Reload**: Development server

## Deployment
- **Vercel**: Recommended deployment platform
- **Static Export**: Build-time optimization
- **CDN**: Asset distribution
- **Performance**: Optimized builds and assets
