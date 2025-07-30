'use client'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { useEffect, useState } from 'react'

export interface Translations {
  mainFeaturesDynamic: string[];
  mainFeaturesStatic: string[];
  demoSection: {
    title: string;
    description: string;
  }
  companies: {
    restaurant: string
    clinic: string
    autoService: string
    travelAgency: string
  }
  // Navigation
  conversationAIFeatures: {
    naturalConversations: string
    naturalConversationsDesc: string
    realisticVoice: string
    realisticVoiceDesc: string
    instantResponse: string
    instantResponseDesc: string
    multilingual: string
    multilingualDesc: string
    adaptive: string
    adaptiveDesc: string
    secure: string
    secureDesc: string
  }
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
    aiAssistantCall: string
    incomingCall: string
    phoneNumber: string
    companyName: string
    yourCompany: string
    startAiCall: string
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
  // Analytics Showcase section
  analytics: {
    visualiseInfo: string
    title: string
    subtitle: string
    description: string
    dailyActiveUsers: string
    lastDays: string
    vsLastMonth: string
    completionRate: string
    aboveTarget: string
    revenueGrowth: string
    thisMonth: string
    appUsers: string
    lastMonths: string
    monthlyActive: string
    dailyActive: string
    growthRate: string
    customise: string
    customiseTitle: string
    customiseSubtitle: string
    customiseDescription: string
    integrationTitle: string
    integrationDescription: string
    videoDemoPlaceholder: string
    videoUploadText: string
  }
  // Technology Showcase section
  technology: {
    title: string
    subtitle: string
    tabs: {
      voice: string
      ai: string
      integration: string
      analytics: string
    }
    voiceTitle: string
    voiceSubtitle: string
    aiTitle: string
    aiSubtitle: string
    integrationTitle: string
    integrationSubtitle: string
    analyticsTitle: string
    analyticsSubtitle: string
    // Voice features
    latencyTitle: string
    latencyDesc: string
    latencyStats: string[]
    voiceCloneTitle: string
    voiceCloneDesc: string
    voiceCloneStats: string[]
    noiseTitle: string
    noiseDesc: string
    noiseStats: string[]
    // AI features
    memoryTitle: string
    memoryDesc: string
    memoryStats: string[]
    interruptTitle: string
    interruptDesc: string
    interruptStats: string[]
    empathyTitle: string
    empathyDesc: string
    empathyStats: string[]
    crmTitle: string
    crmDesc: string
    crmStats: string[]
    calendarTitle: string
    calendarDesc: string
    calendarStats: string[]
    webhooksTitle: string
    webhooksDesc: string
    webhooksStats: string[]
    monitoringTitle: string
    monitoringDesc: string
    monitoringStats: string[]
    predictiveTitle: string
    predictiveDesc: string
    predictiveStats: string[]
    roiTrackingTitle: string
    roiTrackingDesc: string
    roiTrackingStats: string[]
    // Demo sections
    voiceDemoTitle: string
    voiceDemoDesc: string
    aiDemoTitle: string
    aiDemoDesc: string
    integrationDemoTitle: string
    integrationDemoDesc: string
    analyticsDemoTitle: string
    analyticsDemoDesc: string
    listenSample: string
    testNow: string
    questions: string[]
    complexities: string[]
    sampleNames: string[]
    integrationNames: string[]
    integrationCategories: string[]
    integrationStatus: string
    analyticsMetrics: {
      conversions: string
      responseTime: string
      satisfaction: string
      costPerLead: string
    }
    ctaTitle: string
    ctaSubtitle: string
    interactiveDemo: string
    technicalSpecs: string
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
  // ROI Calculator section
  roi: {
    title: string
    subtitle: string
    metrics: {
      costReduction: string
      conversionIncrease: string  
      responseTime: string
      availability: string
    }
    descriptions: {
      costReduction: string
      conversionIncrease: string
      responseTime: string
      availability: string
    }
    scenario: string
    beforeTitle: string
    afterTitle: string
    savings: string
    ctaText: string
    metricsData: Array<{
      label: string
      value: string
      description: string
      icon: string
    }>
    calculationsData: Array<{
      scenario: string
      before: {
        title: string
        costs: Array<{ item: string; amount: string }>
        total: string
      }
      after: {
        title: string
        costs: Array<{ item: string; amount: string }>
        total: string
      }
      savings: string
      roi: string
    }>
    calculatorCta: {
      title: string
      subtitle: string
      interactiveCalculator: string
      talkToExpert: string
      savingsNote: string
    }
    labels: {
      monthlyEconomy: string
      roi: string
      total: string
      paybackNote: string
    }
  }
  // Competitive Advantage section
  competitive: {
    title: string
    subtitle: string
    vsText: string
    kallinaAdvantagesTitle: string
    competitors: Array<{
      id: string
      name: string
      logo: string
      weaknessesTitle: string
      weaknesses: string[]
    }>
    advantages: Array<{
      title: string
      description: string
      icon: string
      details: string[]
    }>
    comparisonTitle: string
    comparisonMatrix: Array<{
      feature: string
      kallina: string
      voiceflow: string
      MistralAI: string
      vapi: string
    }>
    migrationCta: {
      title: string
      subtitle: string
      freeMigration: string
      detailedComparison: string
      migrationNote: string
    }
  }
  // Testimonials section  
  testimonials: {
    title: string
    subtitle: string
    testimonialsList: Array<{
      name: string
      position: string
      company: string
      avatar: string
      industry: string
      quote: string
      metrics: {
        increase: string
        savings: string
        rating: string
      }
      beforeAfter: {
        before: string
        after: string
      }
    }>
    industryStats: Array<{
      industry: string
      clients: string
      avgROI: string
      satisfaction: string
    }>
    labels: {
      measurableResults: string
      businessGrowth: string
      monthlySavings: string
      clientRating: string
      activeClients: string
      averageROI: string
      satisfaction: string
      industryResultsTitle: string
      beforeLabel: string
      afterLabel: string
    }
    cta: {
      title: string
      subtitle: string
      primaryButton: string
      secondaryButton: string
      benefits: string
    }
  }
  // Final CTA section
  finalCta: {
    title: string
    subtitle: string
    ctaButton: string
    secondaryButton: string
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

  interactiveFeatureCards: {
    features: Array<{
      title: string
      body: string
      imgSrc: string
      imgAlt: string
      videoSrc: string
    }>
    labels: {
      featureNumber: string
      learnMore: string
    }
  }

  // Advanced Capabilities Section
  advancedCapabilitiesSection: {
    title: string;
    subtitle: string;
    features: Array<{
      title: string;
      items: string[];
    }>;
    business: {
      title: string;
      subtitle: string;
      orchestrationTitle: string;
      orchestrationItems: string[];
      predictiveTitle: string;
      predictiveItems: string[];
    };
    voiceTech: {
      title: string;
      subtitle: string;
      turnTaking: {
        title: string;
        description: string;
        featuresTitle: string;
        features: string[];
      };
      subTts: {
        title: string;
        description: string;
        impactTitle: string;
        impact: string[];
      };
      voiceCloning: {
        title: string;
        subtitle: string;
        security: {
          title: string;
          description: string;
        };
        training: {
          title: string;
          description: string;
        };
        multilingual: {
          title: string;
          description: string;
        };
      };
      emotionalControl: {
        title: string;
        features: string[];
      };
      multiCharacter: {
        title: string;
        features: string[];
      };
    };
  };
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
  mainFeaturesDynamic: [
    'Revoluționează Comunicarea cu Clienții Prin Tehnologia AI Avansată',
    'Prezență Globală, Servicii Locale',
    'Securitate de Nivel Enterprise pentru Comunicările Tale',
    'Inteligență Artificială Care Înțelege și Răspunde Perfect'
  ],
  advancedCapabilitiesSection: {
    title: 'Funcționalități Avansate AI',
    subtitle: 'Bazat pe cercetarea detaliată a 20+ platforme voice AI din iulie 2025',
    features: [
      {
        title: 'Generare Documente în Timp Real',
        items: [
          'Creare facturi cu calcul automat TVA',
          'Generare contracte cu termeni auto-completați',
          'Generare oferte cu prețuri în timp real',
          'Pregătire documente legale cu verificare conformitate',
        ],
      },
      {
        title: 'Inteligență Multi-Agent',
        items: [
          'Protocoale de comunicare agent-agent',
          'Păstrarea contextului între transferuri',
          'Implementare agenți specializați',
          'Capacități de rezolvare colectivă a problemelor',
        ],
      },
      {
        title: 'Distribuție Omnicanal',
        items: [
          'Integrare WhatsApp Business',
          'Coordonare multiplatformă',
          'Livrare instantanee de documente',
          'Păstrarea contextului cross-channel',
        ],
      },
    ],
    business: {
      title: 'Operațiuni Autonome de Business',
      subtitle: 'Procesare tranzacții end-to-end cu supraveghere umană minimă',
      orchestrationTitle: 'Orchestrare Inteligentă a Sarcinilor',
      orchestrationItems: [
        'Inițiere workflow multi-pas',
        'Coordonare resurse între sisteme',
        'Managementul timeline-ului cu notificări',
        'Puncte de control pentru asigurarea calității',
      ],
      predictiveTitle: 'Inteligență Predictivă',
      predictiveItems: [
        'Analiză a tiparelor comportamentale',
        'Predicție de nevoi & auto-îndeplinire',
        'Servicii proactive',
        'Evaluare și reducere a riscurilor',
      ],
    },
    voiceTech: {
      title: 'Tehnologii Vocale Revoluționare',
      subtitle: 'Fundamentul platformei Kallina.ai: 10 tehnologii breakthrough care redefinesc interacțiunea vocală cu AI',
      turnTaking: {
        title: 'Turn-Taking Revolution',
        description: 'Model avansat de preluare a rândului la vorbire care elimină pauzele incomode și întreruperile nenaturale.',
        featuresTitle: 'Caracteristici cheie:',
        features: [
          'Analiză real-time a indicilor conversaționali',
          'Detectare avansată a cuvintelor de umplutură',
          'Optimizare momentului de intervenție',
          'Conversații indistinguibile de cele umane'
        ]
      },
      subTts: {
        title: 'Sub-100ms TTS',
        description: 'Sinteză vocală fulgerătoare cu timp până la primul octet sub 100ms pentru interacțiuni în timp real.',
        impactTitle: 'Impact:',
        impact: [
          'Răspunsuri vocale aproape instantanee',
          'Elimină întârzierile perceptibile',
          'Ritm conversațional natural și rapid',
          'Optimizări algoritmice avansate'
        ]
      },
      voiceCloning: {
        title: 'Clonare Vocală Profesională 2.0',
        subtitle: 'Clonarea avansată a vocii cu doar 30 minute de înregistrări - Suport pentru 32 de limbi',
        security: {
          title: 'Voice Captcha Security',
          description: 'Mecanism avansat pentru consimțământ și legitimitate'
        },
        training: {
          title: 'Rapid Training',
          description: 'Doar 2-4 ore pentru antrenament complet'
        },
        multilingual: {
          title: 'Multilingv Global',
          description: 'Suport nativ pentru 32 de limbi internationale'
        }
      },
      emotionalControl: {
        title: 'Control Emoțional Avansat',
        features: [
          'Etichete audio pentru șoapte, râs, entuziasm',
          'Schimbări de ton în mijlocul propoziției',
          'Cel mai expresiv model TTS disponibil'
        ]
      },
      multiCharacter: {
        title: 'Multi-Character & Multi-Accent',
        features: [
          'Comutare între personaje în timp real',
          'Schimbare accent dinamic (US/UK/Australian)',
          '40+ limbi cu detectare automată'
        ]
      }
    }
  },
  mainFeaturesStatic: [
    'Scalabilitate și Flexibilitate Pentru Nevoile Afacerii Tale',
    '24/7 Suport Global',
    '99.9% Garanție Uptime'
  ],
  demoSection: {
    title: 'Încearcă Kallina AI',
    description: 'Experimentează conversații cu voce alimentate de AI, cu răspunsuri naturale, asemănătoare celor umane.'
  },
  companies: {
    restaurant: 'Restaurante',
    clinic: 'Clinică',
    autoService: 'Service Auto',
    travelAgency: 'Agenție de Turism',
  },
  conversationAIFeatures: {
    naturalConversations: 'Conversații naturale',
    naturalConversationsDesc: 'AI care înțelege contextul și emoțiile',
    realisticVoice: 'Voce realistă',
    realisticVoiceDesc: 'Tehnologie de clonare vocală de înaltă calitate',
    instantResponse: 'Răspuns instantaneu',
    instantResponseDesc: 'Latentă minimă pentru interacțiuni fluide',
    multilingual: 'Multilingv',
    multilingualDesc: 'Suport pentru multiple limbi și accente',
    adaptive: 'Adaptiv',
    adaptiveDesc: 'Învăță și se adaptează la stilul tău de comunicare',
    secure: 'Sigur',
    secureDesc: 'Datele tale rămân private și protejate',
  },
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
    watchDemo: 'Vizionează Demo',
    aiAssistantCall: 'Apel Asistent AI',
    incomingCall: 'Apel inteligent primit',
    phoneNumber: 'Numărul de telefon',
    companyName: 'Numele companiei',
    yourCompany: 'Compania ta',
    startAiCall: 'Începe Apelul AI'
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
    subtitle: 'Peste 1000+ companii folosesc Kallina AI pentru comunicare',
    developers: 'Dezvoltatori',
    charactersGenerated: 'Caractere generate', 
    languagesSupported: 'Limbi suportate',
    uptime: 'Timp funcționare'
  },
  analytics: {
    visualiseInfo: 'VIZUALIZEAZĂ INFO',
    title: 'Creat pentru business.',
    subtitle: 'Se simte ca o joacă.',
    description: 'Widget-urile sunt realizate cu atenție pentru a te ajuta să extragi mesaje puternice din informațiile și datele tale.',
    dailyActiveUsers: 'Utilizatori activi zilnic',
    lastDays: 'Ultimele 28 de zile',
    vsLastMonth: 'față de luna trecută',
    completionRate: 'Rata de completare',
    aboveTarget: 'Peste țintă',
    revenueGrowth: 'Creșterea veniturilor',
    thisMonth: 'în această lună',
    appUsers: 'Utilizatori Aplicație',
    lastMonths: 'Ultimele 7 luni',
    monthlyActive: 'Activi Lunar',
    dailyActive: 'Activi Zilnic',
    growthRate: 'Rata Creșterii',
    customise: 'PERSONALIZEAZĂ',
    customiseTitle: 'Ușor de personalizat.',
    customiseSubtitle: 'Greu de greșit.',
    customiseDescription: 'Widget-urile sunt proiectate să fie personalizate cu ușurință. Arată întotdeauna uimitor, indiferent cum le editezi.',
    integrationTitle: 'Kallina AI în Acțiune',
    integrationDescription: 'Încorporează instant, previzualizează sau interacționează cu instrumentele și dashboard-urile tale preferate. Adaugă aici o demonstrație video sau o previzualizare live pentru a prezenta integrarea perfectă și rezultatele reale.',
    videoDemoPlaceholder: 'Placeholder Demo Video',
    videoUploadText: 'Încarcă sau încorporează un video de produs, YouTube sau un link Loom aici.'
  },
  technology: {
    title: 'Tehnologia Cea Mai Avansată Din Industrie',
    subtitle: 'Nu e doar un alt chatbot. E o revoluție tehnologică care redefinește comunicarea business cu AI de ultimă generație.',
    tabs: {
      voice: 'Voice Tech',
      ai: 'Conversational AI',
      integration: 'Integrări',
      analytics: 'Analytics'
    },
    voiceTitle: 'Tehnologia Vocală Sub-100ms',
    voiceSubtitle: 'Sinteză și recunoaștere vocală mai rapidă decât gândirea umană',
    aiTitle: 'AI Conversațional Avansat',
    aiSubtitle: 'Înțelege contextul și răspunde ca un expert uman',
    integrationTitle: 'Ecosistem de Integrări',
    integrationSubtitle: 'Se conectează cu orice sistem folosești deja',
    analyticsTitle: 'Intelligence Business',
    analyticsSubtitle: 'Insights și predicții pentru optimizarea continuă',
    // Voice features
    latencyTitle: 'Latență Sub-100ms',
    latencyDesc: 'De la vorbire la răspuns mai rapid decât orice competitor',
    latencyStats: ['~80ms timp răspuns', '99.9% uptime', '40+ limbi native'],
    voiceCloneTitle: 'Voice Cloning Perfect',
    voiceCloneDesc: 'Clonează vocea ta cu doar 3 minute de înregistrare',
    voiceCloneStats: ['96% acuratețe', '3 min training', 'Identitate vocală unică'],
    noiseTitle: 'Anulare Zgomot AI',
    noiseDesc: 'Conversații clare chiar și în medii zgomotoase',
    noiseStats: ['-40dB reducere zgomot', 'Filtrare adaptivă', 'Claritate cristalină'],
    // AI features
    memoryTitle: 'Memorie Contextuală',
    memoryDesc: 'Își amintește totul din toate conversațiile pe toate canalele',
    memoryStats: ['Memorie infinită', 'Context cross-channel', 'Personalizare adaptivă'],
    interruptTitle: 'Întreruperi Naturale',
    interruptDesc: 'Gestionează întreruperile ca în conversațiile umane reale',
    interruptStats: ['Detecție instant', 'Context preservat', 'Flow natural'],
    empathyTitle: 'Empatie AI',
    empathyDesc: 'Detectează și răspunde la emoțiile clientului în timp real',
    empathyStats: ['8 emoții detectate', 'Răspuns empatic', 'De-escalare automată'],
    // Integration features
    crmTitle: 'CRM Native',
    crmDesc: 'Sincronizare perfectă cu toate CRM-urile majore',
    crmStats: ['50+ CRM-uri', 'Sync timp real', 'Zero config'],
    calendarTitle: 'Calendar Magic',
    calendarDesc: 'Programări inteligente cu evitarea conflictelor',
    calendarStats: ['Calendar orchestration', 'Conflict detection', 'Auto-rescheduling'],
    webhooksTitle: 'Webhooks Robuste',
    webhooksDesc: 'Evenimente în timp real pentru orice sistem extern',
    webhooksStats: ['Real-time events', 'Retry logic', '99.9% delivery'],
    // Analytics features
    monitoringTitle: 'Real-time Monitoring',
    monitoringDesc: 'Dashboard live cu toate metricile importante',
    monitoringStats: ['Live metrics', 'Custom KPIs', 'Alertă automată'],
    predictiveTitle: 'Predictive Analytics',
    predictiveDesc: 'Predicții AI pentru optimizarea business-ului',
    predictiveStats: ['90% acuratețe', 'Trend forecasting', 'Opportunity alerts'],
    roiTrackingTitle: 'ROI Tracking',
    roiTrackingDesc: 'Măsoară exact impactul și economiile generate',
    roiTrackingStats: ['ROI în timp real', 'Cost per lead', 'Efficiency gains'],
    // Demo sections
    voiceDemoTitle: 'Ascultă Diferența',
    voiceDemoDesc: 'Compară calitatea vocală kallina.ai cu concurența',
    aiDemoTitle: 'Test de Inteligență',
    aiDemoDesc: 'Pune întrebări complexe și vezi răspunsurile inteligente',
    integrationDemoTitle: 'Integrări Disponibile',
    integrationDemoDesc: 'Vezi toate sistemele cu care se conectează',
    analyticsDemoTitle: 'Dashboard Preview',
    analyticsDemoDesc: 'Vezi cum arată analytics-ul în acțiune',
    listenSample: 'Ascultă Sample',
    testNow: 'Testează',
    questions: [
      'Cum gestionezi o reclamație?',
      'Ce faci când clientul e supărat?',
      'Explică-mi diferențele între planuri'
    ],
    complexities: ['Medie', 'Înaltă', 'Foarte Înaltă'],
    // Sample names
    sampleNames: ['Kallina.ai', 'Competitor A', 'Competitor B'],
    // Integration names
    integrationNames: ['HubSpot', 'Salesforce', 'Google Calendar', 'Zoom', 'WhatsApp', 'Facebook'],
    integrationCategories: ['CRM', 'Calendar', 'Video', 'Messaging', 'Social'],
    integrationStatus: 'Native',
    // Analytics metrics
    analyticsMetrics: {
      conversions: 'Conversii Lunare',
      responseTime: 'Timp Răspuns',
      satisfaction: 'Satisfacție Clienți',
      costPerLead: 'Cost per Lead'
    },
    ctaTitle: "Gata să Experimentezi Tehnologia Viitorului?",
    ctaSubtitle: "Testează toate funcționalitățile avansate în demo-ul nostru interactiv",
    interactiveDemo: "Demo Interactiv →",
    technicalSpecs: "Specificații Tehnice"
  },
  roi: {
    title: 'ROI Care Se Vede în Prima Lună',
    subtitle: 'Nu este doar economie de costuri - este transformarea completă a business-ului tău. Vezi calculele reale pentru industria ta.',
    metrics: {
      costReduction: 'Reducere Costuri Operaționale',
      conversionIncrease: 'Creștere Conversii',
      responseTime: 'Timp de Răspuns',
      availability: 'Disponibilitate'
    },
    descriptions: {
      costReduction: 'Elimină costurile cu personalul pentru programări și suport 24/7',
      conversionIncrease: 'Mai multe rezervări și vânzări prin disponibilitate continuă',
      responseTime: 'Răspunsuri instant față de minutele de așteptare',
      availability: 'Business-ul tău funcționează non-stop, fără pauze'
    },
    scenario: 'Restaurant Mediu',
    beforeTitle: 'Înainte de Kallina.ai',
    afterTitle: 'Cu Kallina.ai',
    savings: 'Economii/lună: ',
    ctaText: 'Calculează ROI-ul tău',
    // ROI Calculator specific
    metricsData: [
      {
        label: 'Reducere Costuri Operaționale',
        value: '90%',
        description: 'Elimină costurile cu personalul pentru programări și suport 24/7',
        icon: '$'
      },
      {
        label: 'Creștere Conversii',
        value: '3x',
        description: 'Mai multe rezervări și vânzări prin disponibilitate continuă',
        icon: '↗'
      },
      {
        label: 'Timp de Răspuns',
        value: '<100ms',
        description: 'Răspunsuri instant față de minutele de așteptare',
        icon: 'ϟ'
      },
      {
        label: 'Disponibilitate',
        value: '24/7',
        description: 'Business-ul tău funcționează non-stop, fără pauze',
        icon: '●'
      }
    ],
    calculationsData: [
      {
        scenario: 'Restaurant Mediu',
        before: {
          title: 'Înainte de Kallina.ai',
          costs: [
            { item: 'Recepționer part-time', amount: '3,000 lei/lună' },
            { item: 'Rezervări ratate', amount: '2,500 lei/lună' },
            { item: 'Ore suplimentare staff', amount: '1,500 lei/lună' }
          ],
          total: '7,000 lei/lună'
        },
        after: {
          title: 'Cu Kallina.ai',
          costs: [
            { item: 'Abonament Kallina.ai', amount: '299 lei/lună' },
            { item: 'Setup inițial', amount: '0 lei' },
            { item: 'Mentenanță', amount: '0 lei' }
          ],
          total: '299 lei/lună'
        },
        savings: '6,701 lei/lună',
        roi: '2,242%'
      },
      {
        scenario: 'Cabinet Medical',
        before: {
          title: 'Înainte de Kallina.ai',
          costs: [
            { item: 'Recepționer full-time', amount: '4,500 lei/lună' },
            { item: 'Programări ratate', amount: '3,000 lei/lună' },
            { item: 'Telefoane ratate', amount: '2,000 lei/lună' }
          ],
          total: '9,500 lei/lună'
        },
        after: {
          title: 'Cu Kallina.ai',
          costs: [
            { item: 'Abonament Kallina.ai Pro', amount: '499 lei/lună' },
            { item: 'Conformitate HIPAA', amount: 'Inclusă' },
            { item: 'Suport 24/7', amount: 'Inclus' }
          ],
          total: '499 lei/lună'
        },
        savings: '9,001 lei/lună',
        roi: '1,804%'
      }
    ],
    calculatorCta: {
      title: 'Calculează ROI-ul Pentru Business-ul Tău',
      subtitle: 'Folosește calculatorul nostru interactiv pentru scenariul tău specific',
      interactiveCalculator: 'Calculator ROI Interactiv',
      talkToExpert: 'Vorbește cu un Expert',
      savingsNote: 'ℹ Majoritatea clienților economisesc 5,000-15,000 lei lunar'
    },
    labels: {
      monthlyEconomy: 'Economie Lunară',
      roi: 'ROI',
      total: 'Total:',
      paybackNote: 'Se plătește singură în prima lună'
    }
  },
  competitive: {
    title: 'De Ce Kallina.ai Bate Orice Competitor',
    subtitle: 'Analiza onestă despre ce face kallina.ai superioară față de toate alternativele. Spoiler: totul se rezumă la simplicitate și rezultate.',
    vsText: 'vs',
    kallinaAdvantagesTitle: 'Kallina.ai Avantaje',
    competitors: [
      {
        id: 'voiceflow',
        name: 'Voiceflow',
        logo: '༄ ',
        weaknessesTitle: 'Voiceflow Limitări',
        weaknesses: [
          'Complexitate tehnică ridicată',
          'Fără suport pentru română',
          'Implementare în săptămâni',
          'Costuri ascunse pentru funcții avansate'
        ]
      },
      {
        id: 'MistralAI',
        name: 'MistralAI',
        logo: '♪',
        weaknessesTitle: 'MistralAI Limitări',
        weaknesses: [
          'Doar sinteză vocală, nu conversații',
          'Fără integrări business',
          'Lipsă management conversații',
          'Nu e soluție completă'
        ]
      },
      {
        id: 'vapi',
        name: 'VAPI',
        logo: '◎',
        weaknessesTitle: 'VAPI Limitări',
        weaknesses: [
          'Interfață complicată pentru non-tehnici',
          'Documentație insuficientă',
          'Suport limitat pentru piața europeană',
          'Prețuri neprevizibile'
        ]
      }
    ],
    advantages: [
      {
        title: 'Implementare în 3 Minute',
        description: 'De la zero la primul agent funcțional mai rapid decât să bei o cafea',
        icon: 'ϟ',
        details: ['Setup ghidat pas-cu-pas', 'Template-uri predefinite', 'Training automat', 'Deploy instant']
      },
      {
        title: 'Română Nativă Perfectă',
        description: 'Înțelege perfect accentul, slang-ul și contextul cultural românesc',
        icon: 'RO',
        details: ['Dialect și accent românesc', 'Expresii și idiomuri locale', 'Context cultural', 'Compliance local']
      },
      {
        title: 'Soluție Completă End-to-End',
        description: 'Tot ce ai nevoie într-o singură platformă, fără integrări complicate',
        icon: '●',
        details: ['Conversații + CRM', 'Analytics integrat', 'Billing automat', 'Support 24/7']
      },
      {
        title: 'Transparență Totală Prețuri',
        description: 'Fără costuri ascunse, fără surprize, fără upgrade-uri forțate',
        icon: '◆',
        details: ['Preț fix lunar', 'Toate funcțiile incluse', 'Fără limite artificiale', 'ROI garantat']
      }
    ],
    comparisonTitle: 'Comparație Detaliată',
    comparisonMatrix: [
      {
        feature: 'Timp implementare',
        kallina: '3 minute',
        voiceflow: '2-4 săptămâni',
        MistralAI: 'N/A',
        vapi: '1-2 săptămâni'
      },
      {
        feature: 'Suport română nativă',
        kallina: '✓ Perfect',
        voiceflow: '✗ Nu',
        MistralAI: '△ Limitat',
        vapi: '✗ Nu'
      },
      {
        feature: 'Soluție completă',
        kallina: '✓ Da',
        voiceflow: '△ Parțial',
        MistralAI: '✗ Nu',
        vapi: '△ Parțial'
      },
      {
        feature: 'Prețuri transparente',
        kallina: '✓ Da',
        voiceflow: '✗ Costuri ascunse',
        MistralAI: '△ Per-usage',
        vapi: '✗ Variabile'
      },
      {
        feature: 'Suport 24/7',
        kallina: '✓ Inclus',
        voiceflow: '$ Extra',
        MistralAI: '✗ Limitat',
        vapi: '$ Enterprise only'
      }
    ],
    migrationCta: {
      title: 'Migrezi de la Alt Provider?',
      subtitle: 'Te ajutăm cu migrarea completă GRATUIT. Zero downtime, zero dureri de cap.',
      freeMigration: 'Migrare Gratuită',
      detailedComparison: 'Comparație Detaliată',
      migrationNote: '★ 95% dintre cei care migrează nu se mai întorc la soluția veche'
    }
  },
  testimonials: {
    title: 'Ce Spun Clienții Despre Kallina.ai',
    subtitle: 'Peste 655+ afaceri românești și-au transformat comunicarea cu clienții. Iată poveștile lor de succes cu rezultate măsurabile.',
    testimonialsList: [
      {
        name: 'Alexandru Marin',
        position: 'Proprietar Restaurant',
        company: 'Bistro Central',
        avatar: 'CH',
        industry: 'Restaurante',
        quote: 'În prima lună cu Kallina.ai am avut 40% mai multe rezervări și zero programări ratate. Ana, agentul nostru AI, lucrează 24/7 și clienții nici nu-și dau seama că nu vorbesc cu o persoană reală.',
        metrics: {
          increase: '+40%',
          savings: '4,500 lei/lună',
          rating: '4.9/5'
        },
        beforeAfter: {
          before: 'Pierdeam 20-30 de apeluri zilnic după program',
          after: 'Zero apeluri pierdute, rezervări automate non-stop'
        }
      },
      {
        name: 'Dr. Maria Popescu',
        position: 'Medic Specialist',
        company: 'Clinica MedExpert',
        avatar: 'MD',
        industry: 'Sănătate',
        quote: 'Pacienții sunt încântați de Mihai, asistentul nostru AI. Programează consultații, răspunde la întrebări și gestionează urgențele cu o empatie incredibilă. Nu mai avem cozi la telefon.',
        metrics: {
          increase: '+60%',
          savings: '7,200 lei/lună',
          rating: '4.8/5'
        },
        beforeAfter: {
          before: 'Asistenta era ocupată 80% din timp cu programări',
          after: 'Focus total pe pacienți, programări 100% automate'
        }
      },
      {
        name: 'Cristian Ionescu',
        position: 'CEO',
        company: 'AutoService Pro',
        avatar: 'ME',
        industry: 'Automotive',
        quote: 'Elena, agentul nostru de vânzări AI, a crescut conversiile cu 250%. Vorbește cu clienții în română perfectă, le explică serviciile și programează vizitele. ROI-ul s-a văzut din prima săptămână.',
        metrics: {
          increase: '+250%',
          savings: '12,000 lei/lună',
          rating: '5.0/5'
        },
        beforeAfter: {
          before: 'Rateam 70% din apelurile din afara programului',
          after: 'Capturăm fiecare lead, 24/7 fără excepție'
        }
      },
      {
        name: 'Andreea Dumitrescu',
        position: 'Proprietar Salon',
        company: 'Beauty Studio',
        avatar: 'BS',
        industry: 'Beauty & Wellness',
        quote: 'Implementarea a durat literal 3 minute. Acum clientele pot programa online, primesc confirmări automate și reminder-uri. Productivitatea salonului a crescut cu 80%.',
        metrics: {
          increase: '+80%',
          savings: '3,800 lei/lună',
          rating: '4.9/5'
        },
        beforeAfter: {
          before: 'Programări doar telefonic în timpul programului',
          after: 'Programări automate 24/7 cu confirmări smart'
        }
      },
      {
        name: 'Radu Constantinescu',
        position: 'Managing Partner',
        company: 'Law Firm & Associates',
        avatar: 'LW',
        industry: 'Juridic',
        quote: 'Clienții noștri apreciază că pot programa consultații juridice oricând. Sistemul filtrează cazurile, colectează informații preliminare și pregătește dosarele. Eficiența a explodat.',
        metrics: {
          increase: '+150%',
          savings: '8,500 lei/lună',
          rating: '4.7/5'
        },
        beforeAfter: {
          before: 'Secretara program 8-17, multe apeluri pierdute',
          after: 'Intake clienți 24/7, dosare pregătite automat'
        }
      }
    ],
    industryStats: [
      { industry: 'Restaurante', clients: '150+', avgROI: '300%', satisfaction: '4.8/5' },
      { industry: 'Clinici Medicale', clients: '89+', avgROI: '280%', satisfaction: '4.9/5' },
      { industry: 'Service Auto', clients: '76+', avgROI: '420%', satisfaction: '4.7/5' },
      { industry: 'Saloane Beauty', clients: '95+', avgROI: '250%', satisfaction: '4.8/5' },
      { industry: 'Cabinete Juridice', clients: '45+', avgROI: '380%', satisfaction: '4.6/5' },
      { industry: 'Alte Industrii', clients: '200+', avgROI: '310%', satisfaction: '4.8/5' }
    ],
    labels: {
      measurableResults: 'Rezultate Măsurabile',
      businessGrowth: 'Creștere Business',
      monthlySavings: 'Economii Lunare',
      clientRating: 'Rating Clienți',
      activeClients: 'Clienți Activi',
      averageROI: 'ROI Mediu',
      satisfaction: 'Satisfacție',
      industryResultsTitle: 'Rezultate Pe Industrii',
      beforeLabel: '✗ Înainte',
      afterLabel: '✓ Acum'
    },
    cta: {
      title: 'Gata Să-ți Transformi Business-ul?',
      subtitle: 'Alătură-te comunității de 655+ antreprenori care și-au automatizat comunicarea',
      primaryButton: 'Începe Gratuit Acum →',
      secondaryButton: 'Vezi Toate Cazurile',
      benefits: '▪ Fără contract pe termen lung • Poți anula oricând • Suport 24/7 inclus'
    }
  },

  interactiveFeatureCards: {
    features: [
      {
        title: "Disponibil Pentru Orice Tip de Companie",
        body: "De la startup-uri la corporații mari, oferim tehnologii personalizate care se potrivesc perfect nevoilor oricărei companii.",
        imgSrc: "/assets/voice-clone.png",
        imgAlt: "Ilustrație a tehnologiei de clonare a vocii",
        videoSrc: "/List-of-companies.mp4"
      },
      {
        title: "Structura Simplu De Implementat",
        body: "Construiește rapid și eficient fluxuri de conversație cu logică decizională, fără a necesita cunoștințe tehnice avansate.",
        imgSrc: "/assets/multimodal-search.png",
        imgAlt: "Interfață de căutare multimodală",
        videoSrc: "/Reference-video.mp4"
      },
      {
        title: "Analizează Interacțiunile în Detaliu",
        body: "Vezi în timp real toate conversațiile, deciziile luate și datele esențiale pentru a înțelege mai bine interacțiunile și a îmbunătăți experiența utilizatorilor.",
        imgSrc: "/assets/edge-deploy.png",
        imgAlt: "Diagramă a arhitecturii de implementare edge",
        videoSrc: "/Video-interaction-with-clients.mp4"
      }
    ],
    labels: {
      featureNumber: "Caracteristica",
      learnMore: "Află mai multe"
    }
  },

  finalCta: {
    title: 'Începe Transformarea Astăzi',
    subtitle: 'Alătură-te miilor de business-uri care și-au dublat eficiența cu Kallina.ai',
    ctaButton: 'Începe Gratuit',
    secondaryButton: 'Programează Demo'
  },
  mainFeatures: {
    title: 'Funcționalități Principale',
    subtitle: 'Descoperă ce face Kallina AI să fie diferit',
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
    question1: 'Ce este Kallina AI?',
    answer1: 'Kallina AI este o platformă de comunicare vocală alimentată de inteligența artificială, care oferă apeluri de înaltă calitate cu latență ultra-scăzută.',
    question2: 'Cum funcționează tehnologia AI?',
    answer2: 'Folosim algoritmi avansați de machine learning pentru a optimiza calitatea vocii, reduce zgomotul de fundal și îmbunătăți claritatea conversațiilor.',
    question3: 'Este sigur să folosesc Kallina AI?',
    answer3: 'Da, toate conversațiile sunt protejate cu criptare end-to-end și respectăm cele mai înalte standarde de securitate.',
    question4: 'Pot integra Kallina AI în aplicația mea?',
    answer4: 'Absolut! Oferim API-uri simple și documentație completă pentru integrare rapidă în orice aplicație.',
    question5: 'Ce planuri de prețuri aveți?',
    answer5: 'Oferim planuri flexibile de la gratuit pentru testare până la soluții enterprise personalizate.'
  },
  cta: {
    title: 'Gata să Începi?',
    subtitle: 'Alătură-te miilor de companii care folosesc deja Kallina AI',
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
    copyright: '© 2025 Kallina AI. Toate drepturile rezervate.'
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
      title: 'Platforma Kallina AI',
      subtitle: 'Infrastructura completă pentru comunicare vocală modernă',
      overview: 'Prezentare Generală',
      capabilities: 'Capabilități',
      integration: 'Integrare'
    },
    company: {
      title: 'Despre Kallina AI',
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
  mainFeaturesDynamic: [
    'Revolutionize Customer Communication With Advanced AI Technology',
    'Global Presence, Local Services',
    'Enterprise-Level Security for Your Communications',
    'Artificial Intelligence That Understands and Responds Perfectly'
  ],
  advancedCapabilitiesSection: {
    title: 'Advanced AI Capabilities',
    subtitle: 'Based on detailed research of 20+ voice AI platforms as of July 2025',
    features: [
      {
        title: 'Real-Time Document Generation',
        items: [
          'Invoice creation with automatic VAT calculation',
          'Contract generation with auto-populated terms',
          'Quote generation with real-time pricing',
          'Legal document preparation with compliance verification',
        ],
      },
      {
        title: 'Multi-Agent Intelligence',
        items: [
          'Agent-to-Agent communication protocols',
          'Context preservation across transfers',
          'Specialized agent deployment',
          'Collective problem-solving capabilities',
        ],
      },
      {
        title: 'Omnichannel Distribution',
        items: [
          'WhatsApp Business integration',
          'Multi-platform coordination',
          'Instant document delivery',
          'Cross-channel context preservation',
        ],
      },
    ],
    business: {
      title: 'Autonomous Business Operations',
      subtitle: 'End-to-end transaction processing with minimal human oversight',
      orchestrationTitle: 'Intelligent Task Orchestration',
      orchestrationItems: [
        'Multi-step workflow initiation',
        'Resource coordination across systems',
        'Timeline management with notifications',
        'Quality assurance checkpoints',
      ],
      predictiveTitle: 'Predictive Intelligence',
      predictiveItems: [
        'Behavioral pattern analysis',
        'Need prediction & auto-fulfillment',
        'Proactive service delivery',
        'Risk assessment & mitigation',
      ],
    },
    voiceTech: {
      title: 'Revolutionary Voice Technologies',
      subtitle: 'Foundation of the Kallina.ai platform: 10 breakthrough technologies that redefine voice interaction with AI',
      turnTaking: {
        title: 'Turn-Taking Revolution',
        description: 'Advanced turn-taking model that eliminates awkward pauses and unnatural interruptions.',
        featuresTitle: 'Key features:',
        features: [
          'Real-time analysis of conversational cues',
          'Advanced filler word detection',
          'Optimized intervention timing',
          'Conversations indistinguishable from human ones'
        ]
      },
      subTts: {
        title: 'Sub-100ms TTS',
        description: 'Lightning-fast voice synthesis with time to first byte under 100ms for real-time interactions.',
        impactTitle: 'Impact:',
        impact: [
          'Nearly instantaneous voice responses',
          'Eliminates perceptible delays',
          'Natural and fast conversational rhythm',
          'Advanced algorithmic optimizations'
        ]
      },
      voiceCloning: {
        title: 'Professional Voice Cloning 2.0',
        subtitle: 'Advanced voice cloning with just 30 minutes of recordings - Support for 32 languages',
        security: {
          title: 'Voice Captcha Security',
          description: 'Advanced mechanism for consent and legitimacy'
        },
        training: {
          title: 'Rapid Training',
          description: 'Only 2-4 hours for complete training'
        },
        multilingual: {
          title: 'Global Multilingual',
          description: 'Native support for 32 international languages'
        }
      },
      emotionalControl: {
        title: 'Advanced Emotional Control',
        features: [
          'Audio labels for whispers, laughter, enthusiasm',
          'Mid-sentence tone changes',
          'Most expressive TTS model available'
        ]
      },
      multiCharacter: {
        title: 'Multi-Character & Multi-Accent',
        features: [
          'Real-time character switching',
          'Dynamic accent changes (US/UK/Australian)',
          '40+ languages with automatic detection'
        ]
      }
    }
  },
  mainFeaturesStatic: [
    'Scalability and Flexibility For Your Business Needs',
    '24/7 Global Support',
    '99.9% Uptime Guarantee'
  ],
  demoSection: {
    title: 'Try Kallina AI',
    description: 'Experience AI-powered voice conversations with natural, human-like responses.'
  },
  companies: {
    restaurant: 'Restaurant',
    clinic: 'Clinic',
    autoService: 'Auto Service',
    travelAgency: 'Travel Agency',
  },
  conversationAIFeatures: {
    naturalConversations: 'Natural Conversations',
    naturalConversationsDesc: 'AI that understands context and emotions',
    realisticVoice: 'Realistic Voice',
    realisticVoiceDesc: 'High-quality voice cloning technology',
    instantResponse: 'Instant Response',
    instantResponseDesc: 'Minimal latency for smooth interactions',
    multilingual: 'Multilingual',
    multilingualDesc: 'Support for multiple languages and accents',
    adaptive: 'Adaptive',
    adaptiveDesc: 'Learns and adapts to your communication style',
    secure: 'Secure',
    secureDesc: 'Your data remains private and protected',
  },
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
    watchDemo: 'Watch Demo',
    aiAssistantCall: 'AI Assistant Call',
    incomingCall: 'Incoming intelligent call',
    phoneNumber: 'Phone Number',
    companyName: 'Company Name',
    yourCompany: 'Your Company',
    startAiCall: 'Start AI Call'
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
    subtitle: 'Over 1000+ companies use Kallina AI for communication',
    developers: 'Developers',
    charactersGenerated: 'Characters generated',
    languagesSupported: 'Languages supported',
    uptime: 'Uptime'
  },
  analytics: {
    visualiseInfo: 'VISUALISE INFO',
    title: 'Built for business.',
    subtitle: 'Feels like play.',
    description: 'Widgets are carefully crafted to help you distill powerful messages from your information and data.',
    dailyActiveUsers: 'Daily active users',
    lastDays: 'Last 28 days',
    vsLastMonth: 'vs last month',
    completionRate: 'Completion Rate',
    aboveTarget: 'Above target',
    revenueGrowth: 'Revenue Growth',
    thisMonth: 'this month',
    appUsers: 'App Users',
    lastMonths: 'Last 7 months',
    monthlyActive: 'Monthly Active',
    dailyActive: 'Daily Active',
    growthRate: 'Growth Rate',
    customise: 'CUSTOMISE',
    customiseTitle: 'Easy to customise.',
    customiseSubtitle: 'Hard to get wrong.',
    customiseDescription: 'Widgets are designed to be customized easily. They always look stunning, no matter how you edit.',
    integrationTitle: 'See Kallina AI in Action',
    integrationDescription: 'Instantly embed, preview, or interact with your favorite tools and dashboards. Add a video demo or live preview here to showcase seamless integration and real results.',
    videoDemoPlaceholder: 'Video Demo Placeholder',
    videoUploadText: 'Upload or embed a product video, YouTube, or Loom link here.'
  },
  technology: {
    title: 'The Most Advanced Technology in the Industry',
    subtitle: 'It\'s not just another chatbot. It\'s a technological revolution that redefines business communication with cutting-edge AI.',
    tabs: {
      voice: 'Voice Tech',
      ai: 'Conversational AI',
      integration: 'Integrations',
      analytics: 'Analytics'
    },
    voiceTitle: 'Sub-100ms Voice Technology',
    voiceSubtitle: 'Voice synthesis and recognition faster than human thought',
    aiTitle: 'Advanced Conversational AI',
    aiSubtitle: 'Understands context and responds like a human expert',
    integrationTitle: 'Integration Ecosystem',
    integrationSubtitle: 'Connects with any system you already use',
    analyticsTitle: 'Business Intelligence',
    analyticsSubtitle: 'Insights and predictions for continuous optimization',
    latencyTitle: 'Sub-100ms Latency',
    latencyDesc: 'From speech to response faster than any competitor',
    latencyStats: ['~80ms response time', '99.9% uptime', '40+ native languages'],
    voiceCloneTitle: 'Perfect Voice Cloning',
    voiceCloneDesc: 'Clone your voice with just 3 minutes of recording',
    voiceCloneStats: ['96% accuracy', '3 min training', 'Unique voice identity'],
    noiseTitle: 'AI Noise Cancellation',
    noiseDesc: 'Clear conversations even in noisy environments',
    noiseStats: ['-40dB noise reduction', 'Adaptive filtering', 'Crystal clarity'],
    memoryTitle: 'Contextual Memory',
    memoryDesc: 'Remembers everything from all conversations across all channels',
    memoryStats: ['Infinite memory', 'Cross-channel context', 'Adaptive personalization'],
    interruptTitle: 'Natural Interruptions',
    interruptDesc: 'Handles interruptions like real human conversations',
    interruptStats: ['Instant detection', 'Preserved context', 'Natural flow'],
    empathyTitle: 'AI Empathy',
    empathyDesc: 'Detects and responds to customer emotions in real-time',
    empathyStats: ['8 emotions detected', 'Empathetic response', 'Automatic de-escalation'],
    crmTitle: 'Native CRM',
    crmDesc: 'Perfect synchronization with all major CRMs',
    crmStats: ['Real-time sync', 'Zero configuration', 'Universal API'],
    calendarTitle: 'Calendar Magic',
    calendarDesc: 'Smart scheduling with conflict avoidance',
    calendarStats: ['Calendar orchestration', 'Conflict detection', 'Auto-rescheduling'],
    webhooksTitle: 'Robust Webhooks',
    webhooksDesc: 'Real-time events for any external system',
    webhooksStats: ['Real-time events', 'Retry logic', '99.9% delivery'],
    monitoringTitle: 'Real-time Monitoring',
    monitoringDesc: 'Live dashboard with all important metrics',
    monitoringStats: ['Live metrics', 'Custom KPIs', 'Auto alerts'],
    predictiveTitle: 'Predictive Analytics',
    predictiveDesc: 'AI predictions for business optimization',
    predictiveStats: ['90% accuracy', 'Trend forecasting', 'Opportunity alerts'],
    roiTrackingTitle: 'ROI Tracking',
    roiTrackingDesc: 'Precisely measure impact and generated savings',
    roiTrackingStats: ['Real-time ROI', 'Cost per lead', 'Efficiency gains'],
    voiceDemoTitle: 'Hear the Difference',
    voiceDemoDesc: 'Compare kallina.ai voice quality with competition',
    aiDemoTitle: 'Intelligence Test',
    aiDemoDesc: 'Ask complex questions and see intelligent responses',
    integrationDemoTitle: 'Available Integrations',
    integrationDemoDesc: 'See all systems it connects with',
    analyticsDemoTitle: 'Dashboard Preview',
    analyticsDemoDesc: 'See what analytics looks like in action',
    listenSample: 'Listen Sample',
    testNow: 'Test Now',
    questions: [
      'How do you handle a complaint?',
      'What do you do when the customer is upset?',
      'Explain the differences between plans'
    ],
    complexities: ['Medium', 'High', 'Very High'],
    sampleNames: ['Kallina.ai', 'Competitor A', 'Competitor B'],
    integrationNames: ['HubSpot', 'Salesforce', 'Google Calendar', 'Zoom', 'WhatsApp', 'Facebook'],
    integrationCategories: ['CRM', 'Calendar', 'Video', 'Messaging', 'Social'],
    integrationStatus: 'Native',
    analyticsMetrics: {
      conversions: 'Monthly Conversions',
      responseTime: 'Response Time',
      satisfaction: 'Client Satisfaction',
      costPerLead: 'Cost per Lead'
    },
    ctaTitle: "Ready to Experience Future Technology?",
    ctaSubtitle: "Test all advanced features in our interactive demo",
    interactiveDemo: "Interactive Demo →",
    technicalSpecs: "Technical Specifications"
  },
  roi: {
    title: 'ROI Visible in the First Month',
    subtitle: 'It\'s not just cost savings - it\'s complete transformation of your business. See real calculations for your industry.',
    metrics: {
      costReduction: 'Operational Cost Reduction',
      conversionIncrease: 'Conversion Increase',
      responseTime: 'Response Time',
      availability: 'Availability'
    },
    descriptions: {
      costReduction: 'Eliminate staff costs for appointments and 24/7 support',
      conversionIncrease: 'More bookings and sales through continuous availability',
      responseTime: 'Instant responses vs minutes of waiting',
      availability: 'Your business operates non-stop, without breaks'
    },
    scenario: 'Medium Restaurant',
    beforeTitle: 'Before Kallina.ai',
    afterTitle: 'With Kallina.ai',
    savings: 'Savings/month: ',
    ctaText: 'Calculate Your ROI',
    metricsData: [
      {
        label: 'Operational Cost Reduction',
        value: '90%',
        description: 'Eliminate staff costs for appointments and 24/7 support',
        icon: '$'
      },
      {
        label: 'Conversion Increase',
        value: '3x',
        description: 'More bookings and sales through continuous availability',
        icon: '↗'
      },
      {
        label: 'Response Time',
        value: '<100ms',
        description: 'Instant responses vs minutes of waiting',
        icon: 'ϟ'
      },
      {
        label: 'Availability',
        value: '24/7',
        description: 'Your business operates non-stop, without breaks',
        icon: '●'
      }
    ],
    calculationsData: [
      {
        scenario: 'Medium Restaurant',
        before: {
          title: 'Before Kallina.ai',
          costs: [
            { item: 'Part-time receptionist', amount: '$500/month' },
            { item: 'Missed reservations', amount: '$400/month' },
            { item: 'Staff overtime', amount: '$250/month' }
          ],
          total: '$1,150/month'
        },
        after: {
          title: 'With Kallina.ai',
          costs: [
            { item: 'Kallina.ai subscription', amount: '$49/month' },
            { item: 'Initial setup', amount: '$0' },
            { item: 'Maintenance', amount: '$0' }
          ],
          total: '$49/month'
        },
        savings: '$1,101/month',
        roi: '2,247%'
      },
      {
        scenario: 'Medical Practice',
        before: {
          title: 'Before Kallina.ai',
          costs: [
            { item: 'Full-time receptionist', amount: '$750/month' },
            { item: 'Missed appointments', amount: '$500/month' },
            { item: 'Missed calls', amount: '$350/month' }
          ],
          total: '$1,600/month'
        },
        after: {
          title: 'With Kallina.ai',
          costs: [
            { item: 'Kallina.ai Pro subscription', amount: '$99/month' },
            { item: 'HIPAA compliance', amount: 'Included' },
            { item: '24/7 support', amount: 'Included' }
          ],
          total: '$99/month'
        },
        savings: '$1,501/month',
        roi: '1,516%'
      }
    ],
    calculatorCta: {
      title: 'Calculate ROI For Your Business',
      subtitle: 'Use our interactive calculator for your specific scenario',
      interactiveCalculator: 'Interactive ROI Calculator',
      talkToExpert: 'Talk to an Expert',
      savingsNote: 'ℹ Most clients save $800-$2,500 monthly'
    },
    labels: {
      monthlyEconomy: 'Monthly Savings',
      roi: 'ROI',
      total: 'Total:',
      paybackNote: 'Pays for itself in the first month'
    }
  },
  competitive: {
    title: 'Why Kallina.ai Beats Any Competitor',
    subtitle: 'Honest analysis about what makes kallina.ai superior to all alternatives. Spoiler: it all comes down to simplicity and results.',
    vsText: 'vs',
    kallinaAdvantagesTitle: 'Kallina.ai Avantaje',
    competitors: [
      {
        id: 'voiceflow',
        name: 'Voiceflow',
        logo: '༄ ',
        weaknessesTitle: 'Voiceflow Limitări',
        weaknesses: [
          'Complexitate tehnică ridicată',
          'Fără suport pentru română',
          'Implementare în săptămâni',
          'Costuri ascunse pentru funcții avansate'
        ]
      },
      {
        id: 'MistralAI',
        name: 'MistralAI',
        logo: '♪',
        weaknessesTitle: 'MistralAI Limitări',
        weaknesses: [
          'Doar sinteză vocală, nu conversații',
          'Fără integrări business',
          'Lipsă management conversații',
          'Nu e soluție completă'
        ]
      },
      {
        id: 'vapi',
        name: 'VAPI',
        logo: '◎',
        weaknessesTitle: 'VAPI Limitări',
        weaknesses: [
          'Interfață complicată pentru non-tehnici',
          'Documentație insuficientă',
          'Suport limitat pentru piața europeană',
          'Prețuri neprevizibile'
        ]
      }
    ],
    advantages: [
      {
        title: 'Implementare în 3 Minute',
        description: 'De la zero la primul agent funcțional mai rapid decât să bei o cafea',
        icon: 'ϟ',
        details: ['Setup ghidat pas-cu-pas', 'Template-uri predefinite', 'Training automat', 'Deploy instant']
      },
      {
        title: 'Română Nativă Perfectă',
        description: 'Înțelege perfect accentul, slang-ul și contextul cultural românesc',
        icon: 'RO',
        details: ['Dialect și accent românesc', 'Expresii și idiomuri locale', 'Context cultural', 'Compliance local']
      },
      {
        title: 'Soluție Completă End-to-End',
        description: 'Tot ce ai nevoie într-o singură platformă, fără integrări complicate',
        icon: '●',
        details: ['Conversații + CRM', 'Analytics integrat', 'Billing automat', 'Support 24/7']
      },
      {
        title: 'Transparență Totală Prețuri',
        description: 'Fără costuri ascunse, fără surprize, fără upgrade-uri forțate',
        icon: '◆',
        details: ['Preț fix lunar', 'Toate funcțiile incluse', 'Fără limite artificiale', 'ROI garantat']
      }
    ],
    comparisonTitle: 'Comparație Detaliată',
    comparisonMatrix: [
      {
        feature: 'Timp implementare',
        kallina: '3 minute',
        voiceflow: '2-4 săptămâni',
        MistralAI: 'N/A',
        vapi: '1-2 săptămâni'
      },
      {
        feature: 'Suport română nativă',
        kallina: '✓ Perfect',
        voiceflow: '✗ Nu',
        MistralAI: '△ Limitat',
        vapi: '✗ Nu'
      },
      {
        feature: 'Soluție completă',
        kallina: '✓ Da',
        voiceflow: '△ Parțial',
        MistralAI: '✗ Nu',
        vapi: '△ Parțial'
      },
      {
        feature: 'Prețuri transparente',
        kallina: '✓ Da',
        voiceflow: '✗ Costuri ascunse',
        MistralAI: '△ Per-usage',
        vapi: '✗ Variabile'
      },
      {
        feature: 'Suport 24/7',
        kallina: '✓ Inclus',
        voiceflow: '$ Extra',
        MistralAI: '✗ Limitat',
        vapi: '$ Enterprise only'
      }
    ],
    migrationCta: {
      title: 'Migrezi de la Alt Provider?',
      subtitle: 'Te ajutăm cu migrarea completă GRATUIT. Zero downtime, zero dureri de cap.',
      freeMigration: 'Migrare Gratuită',
      detailedComparison: 'Comparație Detaliată',
      migrationNote: '★ 95% dintre cei care migrează nu se mai întorc la soluția veche'
    }
  },
  testimonials: {
    title: 'What Our Clients Say About Kallina.ai',
    subtitle: 'Over 655+ Romanian businesses have transformed their customer communication. Here are their success stories with measurable results.',
    testimonialsList: [
      {
        name: 'Alexandru Marin',
        position: 'Restaurant Owner',
        company: 'Bistro Central',
        avatar: 'CH',
        industry: 'Restaurants',
        quote: 'In the first month with Kallina.ai we had 40% more reservations and zero missed appointments. Ana, our AI agent, works 24/7 and customers don\'t even realize they\'re not talking to a real person.',
        metrics: {
          increase: '+40%',
          savings: '€900/month',
          rating: '4.9/5'
        },
        beforeAfter: {
          before: 'We lost 20-30 calls daily after hours',
          after: 'Zero missed calls, automated reservations 24/7'
        }
      },
      {
        name: 'Dr. Maria Popescu',
        position: 'Medical Specialist',
        company: 'MedExpert Clinic',
        avatar: 'MD',
        industry: 'Healthcare',
        quote: 'Patients love Mihai, our AI assistant. He schedules consultations, answers questions and handles emergencies with incredible empathy. No more phone queues.',
        metrics: {
          increase: '+60%',
          savings: '€1,440/month',
          rating: '4.8/5'
        },
        beforeAfter: {
          before: 'Assistant was busy 80% of time with scheduling',
          after: 'Total focus on patients, 100% automated scheduling'
        }
      },
      {
        name: 'Cristian Ionescu',
        position: 'CEO',
        company: 'AutoService Pro',
        avatar: 'ME',
        industry: 'Automotive',
        quote: 'Elena, our AI sales agent, increased conversions by 250%. She speaks perfect Romanian to customers, explains services and schedules visits. ROI was visible from the first week.',
        metrics: {
          increase: '+250%',
          savings: '€2,400/month',
          rating: '5.0/5'
        },
        beforeAfter: {
          before: 'We missed 70% of calls outside business hours',
          after: 'We capture every lead, 24/7 without exception'
        }
      },
      {
        name: 'Andreea Dumitrescu',
        position: 'Salon Owner',
        company: 'Beauty Studio',
        avatar: 'BS',
        industry: 'Beauty & Wellness',
        quote: 'Implementation took literally 3 minutes. Now clients can book online, receive automatic confirmations and reminders. Salon productivity increased by 80%.',
        metrics: {
          increase: '+80%',
          savings: '€760/month',
          rating: '4.9/5'
        },
        beforeAfter: {
          before: 'Bookings only by phone during business hours',
          after: 'Automated 24/7 bookings with smart confirmations'
        }
      },
      {
        name: 'Radu Constantinescu',
        position: 'Managing Partner',
        company: 'Law Firm & Associates',
        avatar: 'LW',
        industry: 'Legal',
        quote: 'Our clients appreciate being able to schedule legal consultations anytime. The system filters cases, collects preliminary information and prepares files. Efficiency has exploded.',
        metrics: {
          increase: '+150%',
          savings: '€1,700/month',
          rating: '4.7/5'
        },
        beforeAfter: {
          before: 'Secretary worked 8-5, many missed calls',
          after: '24/7 client intake, automatically prepared files'
        }
      }
    ],
    industryStats: [
      { industry: 'Restaurants', clients: '150+', avgROI: '300%', satisfaction: '4.8/5' },
      { industry: 'Medical Clinics', clients: '89+', avgROI: '280%', satisfaction: '4.9/5' },
      { industry: 'Auto Service', clients: '76+', avgROI: '420%', satisfaction: '4.7/5' },
      { industry: 'Beauty Salons', clients: '95+', avgROI: '250%', satisfaction: '4.8/5' },
      { industry: 'Law Firms', clients: '45+', avgROI: '380%', satisfaction: '4.6/5' },
      { industry: 'Other Industries', clients: '200+', avgROI: '310%', satisfaction: '4.8/5' }
    ],
    labels: {
      measurableResults: 'Measurable Results',
      businessGrowth: 'Business Growth',
      monthlySavings: 'Monthly Savings',
      clientRating: 'Client Rating',
      activeClients: 'Active Clients',
      averageROI: 'Average ROI',
      satisfaction: 'Satisfaction',
      industryResultsTitle: 'Results by Industry',
      beforeLabel: '✗ Before',
      afterLabel: '✓ Now'
    },
    cta: {
      title: 'Ready to Transform Your Business?',
      subtitle: 'Join the community of 655+ entrepreneurs who have automated their communication',
      primaryButton: 'Start Free Now →',
      secondaryButton: 'View All Cases',
      benefits: '▪ No long-term contract • Cancel anytime • 24/7 support included'
    }
  },

  interactiveFeatureCards: {
    features: [
      {
        title: "Available for Any Type of Company",
        body: "From startups to large corporations, we offer personalized technologies that perfectly fit the needs of any company.",
        imgSrc: "/assets/voice-clone.png",
        imgAlt: "Voice cloning technology illustration",
        videoSrc: "/List-of-companies.mp4"
      },
      {
        title: "Simple Structure to Implement",
        body: "Build conversation flows with decision logic quickly and efficiently, without requiring advanced technical knowledge.",
        imgSrc: "/assets/multimodal-search.png",
        imgAlt: "Multimodal search interface",
        videoSrc: "/Reference-video.mp4"
      },
      {
        title: "Analyze Interactions in Detail",
        body: "See in real time all conversations, decisions made and essential data to better understand interactions and improve user experience.",
        imgSrc: "/assets/edge-deploy.png",
        imgAlt: "Edge deployment architecture diagram",
        videoSrc: "/Video-interaction-with-clients.mp4"
      }
    ],
    labels: {
      featureNumber: "Feature",
      learnMore: "Learn more"
    }
  },

  finalCta: {
    title: 'Start the Transformation Today',
    subtitle: 'Join thousands of businesses that have doubled their efficiency with Kallina.ai',
    ctaButton: 'Get Started Free',
    secondaryButton: 'Schedule Demo'
  },
  mainFeatures: {
    title: 'Main Features',
    subtitle: 'Discover what makes Kallina AI different',
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
    question1: 'What is Kallina AI?',
    answer1: 'Kallina AI is an artificial intelligence-powered voice communication platform that provides high-quality calls with ultra-low latency.',
    question2: 'How does AI technology work?',
    answer2: 'We use advanced machine learning algorithms to optimize voice quality, reduce background noise, and enhance conversation clarity.',
    question3: 'Is it safe to use Kallina AI?',
    answer3: 'Yes, all conversations are protected with end-to-end encryption and we follow the highest security standards.',
    question4: 'Can I integrate Kallina AI into my app?',
    answer4: 'Absolutely! We provide simple APIs and complete documentation for rapid integration into any application.',
    question5: 'What pricing plans do you have?',
    answer5: 'We offer flexible plans from free for testing to customized enterprise solutions.'
  },
  cta: {
    title: 'Ready to Get Started?',
    subtitle: 'Join thousands of companies already using Kallina AI',
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
    copyright: '© 2025 Kallina AI. All rights reserved.'
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
      title: 'Kallina AI Platform',
      subtitle: 'Complete infrastructure for modern voice communication',
      overview: 'Overview',
      capabilities: 'Capabilities',
      integration: 'Integration'
    },
    company: {
      title: 'About Kallina AI',
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
      name: 'Kallina-language',
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
