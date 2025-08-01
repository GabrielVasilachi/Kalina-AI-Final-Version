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
      {/* If you want to use a custom font, uncomment and fix the import for inter */}
      <body /* className={inter.className} */>
        <GoogleAnalytics />
        <MetaPixel />
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
