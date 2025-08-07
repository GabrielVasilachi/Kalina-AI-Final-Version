import './globals.css'
import { SiteFooter } from '@/components/layout/SiteFooter'
import NavigationBottomBar from '@/components/layout/NavigationBottomBar'
import { PageLoadingWrapper } from '@/components/PageLoadingWrapper'
import { GoogleAnalytics } from '@/components/GoogleAnalytics'
import MetaPixel from '@/components/MetaPixel'
import { Providers } from './providers'
// import { inter } from './fonts'

export const metadata = {
  title: 'Kallina AI',
  description: 'Experience ultra-low latency voice calls with AI-enhanced quality, end-to-end encryption, and global coverage for seamless communication.',
  keywords: 'AI calls, voice communication, low latency, encryption, global coverage',
  authors: [{ name: 'Kallina AI Team' }],
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
  openGraph: {
    title: 'Kallina AI',
    description: 'Experience ultra-low latency voice calls with AI-enhanced quality, end-to-end encryption, and global coverage for seamless communication.',
    images: ['/GraphicsForSections/KallinaLogo.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kallina AI',
    description: 'Experience ultra-low latency voice calls with AI-enhanced quality, end-to-end encryption, and global coverage for seamless communication.',
    images: ['/GraphicsForSections/KallinaLogo.png'],
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#333446',
  viewportFit: 'cover',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      {/* If you want to use a custom font, uncomment and fix the import for inter */}
      <body /* className={inter.className} */>
        <GoogleAnalytics />
        <MetaPixel />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "sqllw0jb3w");
            `,
          }}
        />
        <PageLoadingWrapper>
          <Providers>
            {children}
            <SiteFooter />
            <NavigationBottomBar />
          </Providers>
        </PageLoadingWrapper>
      </body>
    </html>
  )
}
