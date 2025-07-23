'use client'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { useEffect, useState } from 'react'

export interface Translations {
  // Navigation
  nav: {
    products: string
    solutions: string
    research: string
    resources: string
    pricing: string
    company: string
    signIn: string
    getStarted: string
  }
  // Products dropdown
  products: {
    platform: string
    agents: string
    features: string
    integrations: string
  }
  // Solutions dropdown
  solutions: {
    healthcare: string
    restaurants: string
    enterprise: string
  }
  // Research dropdown
  research: {
    developers: string
    apiSdk: string
    analytics: string
    quickGuide: string
  }
  // Resources dropdown
  resources: {
    blogCases: string
    news: string
    support: string
    community: string
  }
  // Hero section
  hero: {
    title: string
    subtitle: string
    ctaButton: string
    watchDemo: string
  }
  // Product Demo section
  demo: {
    title: string
    subtitle: string
    feature1: string
    feature2: string
    feature3: string
    tryDemo: string
  }
  // Trusted By section
  trustedBy: {
    title: string
    subtitle: string
    developers: string
    charactersGenerated: string
    languagesSupported: string
    uptime: string
  }
  // Main Features section
  mainFeatures: {
    title: string
    subtitle: string
    feature1Title: string
    feature1Desc: string
    feature2Title: string
    feature2Desc: string
    feature3Title: string
    feature3Desc: string
    feature4Title: string
    feature4Desc: string
  }
  // Advanced Capabilities section
  advanced: {
    title: string
    subtitle: string
    capability1Title: string
    capability1Desc: string
    capability2Title: string
    capability2Desc: string
    capability3Title: string
    capability3Desc: string
  }
  // How It Works section
  howItWorks: {
    title: string
    subtitle: string
    step1Title: string
    step1Desc: string
    step2Title: string
    step2Desc: string
    step3Title: string
    step3Desc: string
  }
  // FAQ section
  faq: {
    title: string
    subtitle: string
    question1: string
    answer1: string
    question2: string
    answer2: string
    question3: string
    answer3: string
    question4: string
    answer4: string
    question5: string
    answer5: string
  }
  // CTA section
  cta: {
    title: string
    subtitle: string
    primaryButton: string
    secondaryButton: string
  }
  // Features section
  features: {
    title: string
    subtitle: string
    feature1Title: string
    feature1Desc: string
    feature2Title: string
    feature2Desc: string
    feature3Title: string
    feature3Desc: string
  }
  // Common
  common: {
    learnMore: string
    contactUs: string
    getStarted: string
    readMore: string
    tryFree: string
    bookDemo: string
    viewAll: string
    close: string
    next: string
    previous: string
    loading: string
  }
  // Footer
  footer: {
    product: string
    solutions: string
    resources: string
    company: string
    legal: string
    privacyPolicy: string
    termsOfService: string
    copyright: string
  }
  // Pages
  pages: {
    // Pricing page
    pricing: {
      title: string
      subtitle: string
      monthly: string
      yearly: string
      free: string
      freeDesc: string
      pro: string
      proDesc: string
      enterprise: string
      enterpriseDesc: string
      selectPlan: string
      mostPopular: string
      starter: string
      starterDesc: string
      professional: string
      professionalDesc: string
      enterpriseDesc2: string
      perMonth: string
      custom: string
      contactUs: string
      startFree: string
      faqTitle: string
      faqQuestion1: string
      faqAnswer1: string
      faqQuestion2: string
      faqAnswer2: string
      faqQuestion3: string
      faqAnswer3: string
      upToMinutes: string
      unlimitedMinutes: string
      aiNoiseReduction: string
      emailSupport: string
      prioritySupport: string
      basicApi: string
      fullApi: string
      uptime99: string
      uptime999: string
      uptime9999: string
      advancedAnalytics: string
      customIntegrations: string
      allAiFeatures: string
      customAi: string
      dedicatedManager: string
      guaranteedSla: string
      advancedSecurity: string
      onPremiseDeploy: string
      gdprCompliance: string
    }
    // Features page
    featuresPage: {
      title: string
      subtitle: string
      voiceTitle: string
      voiceDesc: string
      aiTitle: string
      aiDesc: string
      securityTitle: string
      securityDesc: string
      heroFeatures: string
      heroFeaturesDesc: string
      nativeIntegrations: string
      nativeIntegrationsDesc: string
      enterpriseReady: string
      enterpriseReadyDesc: string
      aiConversationalTitle: string
      naturalLanguage: string
      naturalLanguageDesc: string
      smartResponse: string
      smartResponseDesc: string
      contextAwareness: string
      contextAwarenessDesc: string
      multilingual: string
      multilingualDesc: string
      voiceProcessingTitle: string
      qualityEnhancement: string
      qualityEnhancementDesc: string
      noiseReduction: string
      noiseReductionDesc: string
      realTimeTranscription: string
      realTimeTranscriptionDesc: string
      speechSynthesis: string
      speechSynthesisDesc: string
    }
    // Platform page
    platform: {
      title: string
      subtitle: string
      overview: string
      capabilities: string
      integration: string
    }
    // Company page
    company: {
      title: string
      subtitle: string
      mission: string
      vision: string
      values: string
      team: string
    }
    // Support page
    support: {
      title: string
      subtitle: string
      documentation: string
      community: string
      contact: string
      faq: string
    }
  }
}

const romanianTranslations: Translations = {
  nav: {
    products: 'Produse',
    solutions: 'Soluții',
    research: 'Cercetare',
    resources: 'Resurse',
    pricing: 'Prețuri',
    company: 'Companie',
    signIn: 'Conectează-te',
    getStarted: 'Începe Acum'
  },
  products: {
    platform: 'Platforma AI',
    agents: 'Agenții AI',
    features: 'Funcționalități',
    integrations: 'Integrări'
  },
  solutions: {
    healthcare: 'Sănătate',
    restaurants: 'Restaurante',
    enterprise: 'Enterprise'
  },
  research: {
    developers: 'Dezvoltatori',
    apiSdk: 'API & SDK',
    analytics: 'Analytics',
    quickGuide: 'Ghid Rapid'
  },
  resources: {
    blogCases: 'Blog & Cazuri',
    news: 'Noutăți',
    support: 'Suport',
    community: 'Comunitate'
  },
  hero: {
    title: 'Comunicare Vocală AI de Următoarea Generație',
    subtitle: 'Experimentează apeluri vocale cu latență ultra-scăzută cu calitate îmbunătățită de AI, criptare end-to-end și acoperire globală pentru comunicare fără întreruperi.',
    ctaButton: 'Începe Gratuit',
    watchDemo: 'Vizionează Demo'
  },
  demo: {
    title: 'Experimentează Puterea AI',
    subtitle: 'Testează funcționalitățile noastre avansate în timp real',
    feature1: 'Procesare vocală în timp real',
    feature2: 'Reducerea zgomotului de fundal',
    feature3: 'Traducere automată',
    tryDemo: 'Încearcă Demo-ul'
  },
  trustedBy: {
    title: 'Încrederea companiilor de top',
    subtitle: 'Peste 1000+ companii folosesc Kalina AI pentru comunicare',
    developers: 'Dezvoltatori',
    charactersGenerated: 'Caractere generate', 
    languagesSupported: 'Limbi suportate',
    uptime: 'Timp funcționare'
  },
  mainFeatures: {
    title: 'Funcționalități Principale',
    subtitle: 'Descoperă ce face Kalina AI să fie diferit',
    feature1Title: 'Calitate Audio Superioară',
    feature1Desc: 'Tehnologie AI avansată pentru claritate cristalină',
    feature2Title: 'Securitate Maximă',
    feature2Desc: 'Criptare end-to-end pentru toate conversațiile',
    feature3Title: 'Integrare Simplă',
    feature3Desc: 'API-uri simple pentru integrare rapidă',
    feature4Title: 'Suport Global',
    feature4Desc: 'Disponibil 24/7 în întreaga lume'
  },
  advanced: {
    title: 'Capabilități Avansate',
    subtitle: 'Tehnologii de vârf pentru experiențe excepționale',
    capability1Title: 'AI Procesare Vocală',
    capability1Desc: 'Algoritmi avansați pentru optimizarea vocii',
    capability2Title: 'Analiză în Timp Real',
    capability2Desc: 'Monitorizare și optimizare continuă',
    capability3Title: 'Scalabilitate Infinită',
    capability3Desc: 'Creșteți fără limite tehnice'
  },
  howItWorks: {
    title: 'Cum Funcționează',
    subtitle: 'Trei pași simpli pentru a începe',
    step1Title: 'Înregistrează-te',
    step1Desc: 'Creează contul tău gratuit în mai puțin de 2 minute',
    step2Title: 'Configurează',
    step2Desc: 'Integrează API-ul nostru în aplicația ta',
    step3Title: 'Lansează',
    step3Desc: 'Începe să folosești apeluri AI de înaltă calitate'
  },
  faq: {
    title: 'Întrebări Frecvente',
    subtitle: 'Răspunsuri la întrebările tale',
    question1: 'Ce este Kalina AI?',
    answer1: 'Kalina AI este o platformă de comunicare vocală alimentată de inteligența artificială, care oferă apeluri de înaltă calitate cu latență ultra-scăzută.',
    question2: 'Cum funcționează tehnologia AI?',
    answer2: 'Folosim algoritmi avansați de machine learning pentru a optimiza calitatea vocii, reduce zgomotul de fundal și îmbunătăți claritatea conversațiilor.',
    question3: 'Este sigur să folosesc Kalina AI?',
    answer3: 'Da, toate conversațiile sunt protejate cu criptare end-to-end și respectăm cele mai înalte standarde de securitate.',
    question4: 'Pot integra Kalina AI în aplicația mea?',
    answer4: 'Absolut! Oferim API-uri simple și documentație completă pentru integrare rapidă în orice aplicație.',
    question5: 'Ce planuri de prețuri aveți?',
    answer5: 'Oferim planuri flexibile de la gratuit pentru testare până la soluții enterprise personalizate.'
  },
  cta: {
    title: 'Gata să Începi?',
    subtitle: 'Alătură-te miilor de companii care folosesc deja Kalina AI',
    primaryButton: 'Începe Gratuit',
    secondaryButton: 'Programează Demo'
  },
  features: {
    title: 'Funcționalități Avansate',
    subtitle: 'Descoperă puterea tehnologiei noastre AI pentru comunicare vocală de înaltă calitate',
    feature1Title: 'Latență Ultra-Scăzută',
    feature1Desc: 'Apeluri în timp real cu întârziere minimă pentru o experiență naturală',
    feature2Title: 'Criptare End-to-End',
    feature2Desc: 'Securitatea maximă pentru toate conversațiile tale',
    feature3Title: 'Acoperire Globală',
    feature3Desc: 'Conectează-te oriunde în lume cu același nivel de calitate'
  },
  common: {
    learnMore: 'Află Mai Mult',
    contactUs: 'Contactează-ne',
    getStarted: 'Începe Acum',
    readMore: 'Citește Mai Mult',
    tryFree: 'Încearcă Gratuit',
    bookDemo: 'Rezervă Demo',
    viewAll: 'Vezi Toate',
    close: 'Închide',
    next: 'Următorul',
    previous: 'Precedentul',
    loading: 'Se încarcă...'
  },
  footer: {
    product: 'Produs',
    solutions: 'Soluții',
    resources: 'Resurse',
    company: 'Companie',
    legal: 'Legal',
    privacyPolicy: 'Politica de Confidențialitate',
    termsOfService: 'Termeni și Condiții',
    copyright: '© 2025 Kalina AI. Toate drepturile rezervate.'
  },
  pages: {
    pricing: {
      title: 'Planuri și Prețuri',
      subtitle: 'Alege planul potrivit pentru nevoile tale',
      monthly: 'Lunar',
      yearly: 'Anual',
      free: 'Gratuit',
      freeDesc: 'Perfect pentru testare și proiecte mici',
      pro: 'Professional',
      proDesc: 'Pentru echipe și aplicații în creștere',
      enterprise: 'Enterprise',
      enterpriseDesc: 'Soluții personalizate pentru companii mari',
      selectPlan: 'Selectează Planul',
      mostPopular: 'Cel mai popular',
      starter: 'Starter',
      starterDesc: 'Perfect pentru echipe mici și freelanceri',
      professional: 'Professional',
      professionalDesc: 'Ideal pentru echipe medii și companii în creștere',
      enterpriseDesc2: 'Soluții scalabile pentru organizații mari',
      perMonth: '/lună',
      custom: 'Personalizat',
      contactUs: 'Contactează-ne',
      startFree: 'Începe Gratuit',
      faqTitle: 'Întrebări Frecvente despre Prețuri',
      faqQuestion1: 'Pot schimba planul oricând?',
      faqAnswer1: 'Da, poți face upgrade sau downgrade oricând. Modificările se aplică în următorul ciclu de facturare.',
      faqQuestion2: 'Există costuri ascunse?',
      faqAnswer2: 'Nu. Prețurile afișate sunt finale și includ toate funcțiile menționate în plan.',
      faqQuestion3: 'Ce înseamnă încercarea gratuită?',
      faqAnswer3: '14 zile complete de acces la toate funcțiile planului Professional, fără card de credit.',
      upToMinutes: 'Până la',
      unlimitedMinutes: 'Minute nelimitate',
      aiNoiseReduction: 'Reducerea zgomotului AI',
      emailSupport: 'Suport email',
      prioritySupport: 'Suport prioritar',
      basicApi: 'API basic',
      fullApi: 'API complet',
      uptime99: '99.5% uptime',
      uptime999: '99.9% uptime',
      uptime9999: '99.99% uptime',
      advancedAnalytics: 'Analize avansate',
      customIntegrations: 'Integrări personalizate',
      allAiFeatures: 'Toate funcțiile AI',
      customAi: 'AI personalizat',
      dedicatedManager: 'Account manager dedicat',
      guaranteedSla: 'SLA garantat',
      advancedSecurity: 'Securitate avansată',
      onPremiseDeploy: 'Deploy on-premise',
      gdprCompliance: 'Conformitate GDPR/HIPAA'
    },
    featuresPage: {
      title: 'Funcționalități Complete',
      subtitle: 'Totul ce ai nevoie pentru comunicare vocală perfectă',
      voiceTitle: 'Procesare Vocală AI',
      voiceDesc: 'Tehnologie avansată pentru calitate audio superioară',
      aiTitle: 'Inteligență Artificială',
      aiDesc: 'Algoritmi de machine learning pentru optimizare continuă',
      securityTitle: 'Securitate Avansată',
      securityDesc: 'Protecție completă pentru toate conversațiile',
      heroFeatures: '50+ Funcționalități',
      heroFeaturesDesc: 'De la conversații simple la automatizări complexe',
      nativeIntegrations: 'Integrări Native',
      nativeIntegrationsDesc: 'Conectare cu 200+ aplicații și servicii',
      enterpriseReady: 'Enterprise Ready',
      enterpriseReadyDesc: 'Securitate, scalabilitate și compliance complete',
      aiConversationalTitle: 'Capabilități AI Conversaționale',
      naturalLanguage: 'Procesare Limbaj Natural',
      naturalLanguageDesc: 'Înțelegere avansată a contextului și intenției conversației',
      smartResponse: 'Răspunsuri Inteligente',
      smartResponseDesc: 'Generare automată de răspunsuri contextuale și relevante',
      contextAwareness: 'Conștiință Contextuală',
      contextAwarenessDesc: 'Menținerea contextului pe parcursul întregii conversații',
      multilingual: 'Suport Multilingv',
      multilingualDesc: 'Comunicare fluentă în peste 40 de limbi',
      voiceProcessingTitle: 'Procesare Vocală Avansată',
      qualityEnhancement: 'Îmbunătățire Calitate Audio',
      qualityEnhancementDesc: 'Optimizare automată a calității audio în timp real',
      noiseReduction: 'Reducere Zgomot AI',
      noiseReductionDesc: 'Eliminarea zgomotului de fundal și ecoului pentru claritate perfectă',
      realTimeTranscription: 'Transcriere în Timp Real',
      realTimeTranscriptionDesc: 'Conversie instantanee vorbire-în-text cu acuratețe ridicată',
      speechSynthesis: 'Sinteză Vocală',
      speechSynthesisDesc: 'Generare de voci naturale și expresive pentru răspunsuri AI'
    },
    platform: {
      title: 'Platforma Kalina AI',
      subtitle: 'Infrastructura completă pentru comunicare vocală modernă',
      overview: 'Prezentare Generală',
      capabilities: 'Capabilități',
      integration: 'Integrare'
    },
    company: {
      title: 'Despre Kalina AI',
      subtitle: 'Revoluționăm comunicarea vocală prin tehnologie AI',
      mission: 'Misiunea Noastră',
      vision: 'Viziunea Noastră',
      values: 'Valorile Noastre',
      team: 'Echipa Noastră'
    },
    support: {
      title: 'Centrul de Suport',
      subtitle: 'Aici pentru a te ajuta să reușești',
      documentation: 'Documentație',
      community: 'Comunitate',
      contact: 'Contact',
      faq: 'Întrebări Frecvente'
    }
  }
}

const englishTranslations: Translations = {
  nav: {
    products: 'Products',
    solutions: 'Solutions',
    research: 'Research',
    resources: 'Resources',
    pricing: 'Pricing',
    company: 'Company',
    signIn: 'Sign In',
    getStarted: 'Get Started'
  },
  products: {
    platform: 'AI Platform',
    agents: 'AI Agents',
    features: 'Features',
    integrations: 'Integrations'
  },
  solutions: {
    healthcare: 'Healthcare',
    restaurants: 'Restaurants',
    enterprise: 'Enterprise'
  },
  research: {
    developers: 'Developers',
    apiSdk: 'API & SDK',
    analytics: 'Analytics',
    quickGuide: 'Quick Guide'
  },
  resources: {
    blogCases: 'Blog & Cases',
    news: 'What\'s New',
    support: 'Support',
    community: 'Community'
  },
  hero: {
    title: 'Next-Generation AI Voice Communication',
    subtitle: 'Experience ultra-low latency voice calls with AI-enhanced quality, end-to-end encryption, and global coverage for seamless communication.',
    ctaButton: 'Get Started Free',
    watchDemo: 'Watch Demo'
  },
  demo: {
    title: 'Experience AI Power',
    subtitle: 'Test our advanced features in real-time',
    feature1: 'Real-time voice processing',
    feature2: 'Background noise reduction',
    feature3: 'Automatic translation',
    tryDemo: 'Try Demo'
  },
  trustedBy: {
    title: 'Trusted by top companies',
    subtitle: 'Over 1000+ companies use Kalina AI for communication',
    developers: 'Developers',
    charactersGenerated: 'Characters generated',
    languagesSupported: 'Languages supported',
    uptime: 'Uptime'
  },
  mainFeatures: {
    title: 'Main Features',
    subtitle: 'Discover what makes Kalina AI different',
    feature1Title: 'Superior Audio Quality',
    feature1Desc: 'Advanced AI technology for crystal-clear clarity',
    feature2Title: 'Maximum Security',
    feature2Desc: 'End-to-end encryption for all conversations',
    feature3Title: 'Simple Integration',
    feature3Desc: 'Easy APIs for rapid integration',
    feature4Title: 'Global Support',
    feature4Desc: 'Available 24/7 worldwide'
  },
  advanced: {
    title: 'Advanced Capabilities',
    subtitle: 'Cutting-edge technologies for exceptional experiences',
    capability1Title: 'AI Voice Processing',
    capability1Desc: 'Advanced algorithms for voice optimization',
    capability2Title: 'Real-time Analysis',
    capability2Desc: 'Continuous monitoring and optimization',
    capability3Title: 'Infinite Scalability',
    capability3Desc: 'Grow without technical limits'
  },
  howItWorks: {
    title: 'How It Works',
    subtitle: 'Three simple steps to get started',
    step1Title: 'Sign Up',
    step1Desc: 'Create your free account in less than 2 minutes',
    step2Title: 'Configure',
    step2Desc: 'Integrate our API into your application',
    step3Title: 'Launch',
    step3Desc: 'Start using high-quality AI calls'
  },
  faq: {
    title: 'Frequently Asked Questions',
    subtitle: 'Answers to your questions',
    question1: 'What is Kalina AI?',
    answer1: 'Kalina AI is an artificial intelligence-powered voice communication platform that provides high-quality calls with ultra-low latency.',
    question2: 'How does AI technology work?',
    answer2: 'We use advanced machine learning algorithms to optimize voice quality, reduce background noise, and enhance conversation clarity.',
    question3: 'Is it safe to use Kalina AI?',
    answer3: 'Yes, all conversations are protected with end-to-end encryption and we follow the highest security standards.',
    question4: 'Can I integrate Kalina AI into my app?',
    answer4: 'Absolutely! We provide simple APIs and complete documentation for rapid integration into any application.',
    question5: 'What pricing plans do you have?',
    answer5: 'We offer flexible plans from free for testing to customized enterprise solutions.'
  },
  cta: {
    title: 'Ready to Get Started?',
    subtitle: 'Join thousands of companies already using Kalina AI',
    primaryButton: 'Get Started Free',
    secondaryButton: 'Schedule Demo'
  },
  features: {
    title: 'Advanced Features',
    subtitle: 'Discover the power of our AI technology for high-quality voice communication',
    feature1Title: 'Ultra-Low Latency',
    feature1Desc: 'Real-time calls with minimal delay for natural experience',
    feature2Title: 'End-to-End Encryption',
    feature2Desc: 'Maximum security for all your conversations',
    feature3Title: 'Global Coverage',
    feature3Desc: 'Connect anywhere in the world with the same quality level'
  },
  common: {
    learnMore: 'Learn More',
    contactUs: 'Contact Us',
    getStarted: 'Get Started',
    readMore: 'Read More',
    tryFree: 'Try Free',
    bookDemo: 'Book Demo',
    viewAll: 'View All',
    close: 'Close',
    next: 'Next',
    previous: 'Previous',
    loading: 'Loading...'
  },
  footer: {
    product: 'Product',
    solutions: 'Solutions',
    resources: 'Resources',
    company: 'Company',
    legal: 'Legal',
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',
    copyright: '© 2025 Kalina AI. All rights reserved.'
  },
  pages: {
    pricing: {
      title: 'Plans & Pricing',
      subtitle: 'Choose the right plan for your needs',
      monthly: 'Monthly',
      yearly: 'Yearly',
      free: 'Free',
      freeDesc: 'Perfect for testing and small projects',
      pro: 'Professional',
      proDesc: 'For growing teams and applications',
      enterprise: 'Enterprise',
      enterpriseDesc: 'Custom solutions for large companies',
      selectPlan: 'Select Plan',
      mostPopular: 'Most Popular',
      starter: 'Starter',
      starterDesc: 'Perfect for small teams and freelancers',
      professional: 'Professional',
      professionalDesc: 'Ideal for medium teams and growing companies',
      enterpriseDesc2: 'Scalable solutions for large organizations',
      perMonth: '/month',
      custom: 'Custom',
      contactUs: 'Contact Us',
      startFree: 'Start Free',
      faqTitle: 'Pricing FAQ',
      faqQuestion1: 'Can I change my plan anytime?',
      faqAnswer1: 'Yes, you can upgrade or downgrade anytime. Changes apply to the next billing cycle.',
      faqQuestion2: 'Are there any hidden costs?',
      faqAnswer2: 'No. The displayed prices are final and include all features mentioned in the plan.',
      faqQuestion3: 'What does the free trial mean?',
      faqAnswer3: '14 full days of access to all Professional plan features, no credit card required.',
      upToMinutes: 'Up to',
      unlimitedMinutes: 'Unlimited minutes',
      aiNoiseReduction: 'AI noise reduction',
      emailSupport: 'Email support',
      prioritySupport: 'Priority support',
      basicApi: 'Basic API',
      fullApi: 'Full API',
      uptime99: '99.5% uptime',
      uptime999: '99.9% uptime',
      uptime9999: '99.99% uptime',
      advancedAnalytics: 'Advanced analytics',
      customIntegrations: 'Custom integrations',
      allAiFeatures: 'All AI features',
      customAi: 'Custom AI',
      dedicatedManager: 'Dedicated account manager',
      guaranteedSla: 'Guaranteed SLA',
      advancedSecurity: 'Advanced security',
      onPremiseDeploy: 'On-premise deployment',
      gdprCompliance: 'GDPR/HIPAA compliance'
    },
    featuresPage: {
      title: 'Complete Features',
      subtitle: 'Everything you need for perfect voice communication',
      voiceTitle: 'AI Voice Processing',
      voiceDesc: 'Advanced technology for superior audio quality',
      aiTitle: 'Artificial Intelligence',
      aiDesc: 'Machine learning algorithms for continuous optimization',
      securityTitle: 'Advanced Security',
      securityDesc: 'Complete protection for all conversations',
      heroFeatures: '50+ Features',
      heroFeaturesDesc: 'From simple conversations to complex automations',
      nativeIntegrations: 'Native Integrations',
      nativeIntegrationsDesc: 'Connect with 200+ applications and services',
      enterpriseReady: 'Enterprise Ready',
      enterpriseReadyDesc: 'Complete security, scalability and compliance',
      aiConversationalTitle: 'AI Conversational Capabilities',
      naturalLanguage: 'Natural Language Processing',
      naturalLanguageDesc: 'Advanced understanding of conversation context and intent',
      smartResponse: 'Smart Responses',
      smartResponseDesc: 'Automatic generation of contextual and relevant responses',
      contextAwareness: 'Context Awareness',
      contextAwarenessDesc: 'Maintaining context throughout the entire conversation',
      multilingual: 'Multilingual Support',
      multilingualDesc: 'Fluent communication in over 40 languages',
      voiceProcessingTitle: 'Advanced Voice Processing',
      qualityEnhancement: 'Audio Quality Enhancement',
      qualityEnhancementDesc: 'Automatic real-time audio quality optimization',
      noiseReduction: 'AI Noise Reduction',
      noiseReductionDesc: 'Eliminate background noise and echo for perfect clarity',
      realTimeTranscription: 'Real-time Transcription',
      realTimeTranscriptionDesc: 'Instant speech-to-text conversion with high accuracy',
      speechSynthesis: 'Speech Synthesis',
      speechSynthesisDesc: 'Generate natural and expressive voices for AI responses'
    },
    platform: {
      title: 'Kalina AI Platform',
      subtitle: 'Complete infrastructure for modern voice communication',
      overview: 'Overview',
      capabilities: 'Capabilities',
      integration: 'Integration'
    },
    company: {
      title: 'About Kalina AI',
      subtitle: 'We\'re revolutionizing voice communication through AI technology',
      mission: 'Our Mission',
      vision: 'Our Vision',
      values: 'Our Values',
      team: 'Our Team'
    },
    support: {
      title: 'Support Center',
      subtitle: 'Here to help you succeed',
      documentation: 'Documentation',
      community: 'Community',
      contact: 'Contact',
      faq: 'FAQ'
    }
  }
}

export type Language = 'ro' | 'en'

interface LanguageStore {
  language: Language
  translations: Translations
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  hasHydrated: boolean
  setHasHydrated: (state: boolean) => void
}

export const useLanguage = create<LanguageStore>()(
  persist(
    (set, get) => ({
      language: 'ro',
      translations: romanianTranslations,
      hasHydrated: false,
      setHasHydrated: (state: boolean) => set({ hasHydrated: state }),
      setLanguage: (lang: Language) => {
        const translations = lang === 'ro' ? romanianTranslations : englishTranslations
        set({ language: lang, translations })
      },
      t: (key: string) => {
        const { translations } = get()
        const keys = key.split('.')
        let value: any = translations
        
        for (const k of keys) {
          value = value?.[k]
        }
        
        return value || key
      }
    }),
    {
      name: 'kalina-language',
      skipHydration: true,
    }
  )
)

// Hook to handle hydration properly
export const useHydration = () => {
  const [hasHydrated, setHasHydrated] = useState(false)
  const { setHasHydrated: setStoreHydrated } = useLanguage()

  useEffect(() => {
    useLanguage.persist.rehydrate()
    setHasHydrated(true)
    setStoreHydrated(true)
  }, [setStoreHydrated])

  return hasHydrated
}
