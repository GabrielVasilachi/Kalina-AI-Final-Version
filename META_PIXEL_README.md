# Meta Pixel Implementation Guide

## Overview
Meta Pixel a fost implementat cu succes în proiectul Kalina AI pentru tracking-ul utilizatorilor și conversiilor pe toate paginile.

## Ce a fost implementat:

### 1. Componenta Meta Pixel (`/src/components/MetaPixel.tsx`)
- Încarcă scriptul Meta Pixel pe toate paginile
- Configurează tracking-ul automat pentru PageView
- Include fallback pentru utilizatorii fără JavaScript

### 2. Hook pentru tracking evenimente (`/src/hooks/useMetaPixel.ts`)
- Funcții pentru tracking evenimente standard (Lead, Contact, Purchase, etc.)
- Funcții pentru evenimente personalizate
- Tracking automat pentru PageView

### 3. Configurație centralizată (`/src/lib/metaPixel.ts`)
- Pixel ID: `1086310532994843`
- Access Token pentru Conversion API
- Constante pentru numele evenimentelor

### 4. Integrare în layout (`/src/app/layout.tsx`)
- Meta Pixel se încarcă pe toate paginile automat
- Poziționat alături de Google Analytics

### 5. Exemplu de utilizare (HeroSection)
- Tracking pentru butonul "Start AI Call"
- Salvează informații despre lead-uri (telefon, companie)

## Cum să folosești tracking-ul:

### În componente:
```typescript
import { useMetaPixel } from '@/hooks/useMetaPixel'

function MyComponent() {
  const { trackLead, trackContact, trackEvent } = useMetaPixel()
  
  const handleButtonClick = () => {
    trackLead({
      phone_number: 'user_phone',
      email: 'user_email',
      source: 'landing_page'
    })
  }
}
```

### Evenimente disponibile:
- `trackPageView()` - Se apelează automat
- `trackLead(parameters)` - Pentru lead-uri noi
- `trackContact(parameters)` - Pentru contacte
- `trackPurchase(value, currency, parameters)` - Pentru achiziții
- `trackEvent(eventName, parameters)` - Pentru evenimente personalizate

## Verificare funcționare:

1. **În browser**: Deschide Developer Tools > Network și caută cereri către `facebook.net`
2. **Facebook Events Manager**: Verifică în contul tău Facebook Business dacă apar evenimente
3. **Pixel Helper**: Folosește extensia Facebook Pixel Helper pentru Chrome

## Token și acces:
- **Pixel ID**: `1086310532994843`
- **Access Token**: Stocat în `META_PIXEL_CONFIG.ACCESS_TOKEN`
- **Conversion API URL**: Configurată pentru trimiterea evenimentelor server-side

## Următorii pași recomandați:

1. **Verifică în Facebook Events Manager** că evenimentele sunt primite
2. **Adaugă tracking pe alte acțiuni importante** (formulare, descărcări, etc.)
3. **Configurează conversii personalizate** în Facebook Ads Manager
4. **Testează remarketing campaigns** bazate pe evenimentele trackuite

## Note importante:
- Meta Pixel respectă GDPR și politicile de confidențialitate
- Evenimentele sunt trimise atât client-side cât și server-side pentru acuratețe maximă
- Access Token-ul trebuie păstrat confidențial și nu expus în frontend
