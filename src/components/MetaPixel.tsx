'use client'

import { useEffect } from 'react'
import Script from 'next/script'
import { META_PIXEL_CONFIG } from '@/lib/metaPixel'

declare global {
  interface Window {
    fbq: any
  }
}

const MetaPixel = () => {
  useEffect(() => {
    // Initialize Facebook Pixel tracking for page views after script loads
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'PageView')
    }
  }, [])

  return (
    <>
      <Script
        id="meta-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${META_PIXEL_CONFIG.PIXEL_ID}');
            fbq('track', 'PageView');
          `,
        }}
      />
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src={`https://www.facebook.com/tr?id=${META_PIXEL_CONFIG.PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
          loading="lazy"
        />
      </noscript>
    </>
  )
}

export default MetaPixel
