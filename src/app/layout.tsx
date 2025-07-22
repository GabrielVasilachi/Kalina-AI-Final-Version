import './globals.css'
import { Footer } from '@/components/layout/Footer'
import BottomBar from '@/components/layout/BottomBar'
import { LoadingWrapper } from '@/components/LoadingWrapper'
import { Providers } from './providers'
// import { inter } from './fonts'

export const metadata = {
  title: 'Kalina AI - Crystal-clear AI calls, anywhere',
  description: 'Experience ultra-low latency voice calls with AI-enhanced quality, end-to-end encryption, and global coverage for seamless communication.',
  keywords: 'AI calls, voice communication, low latency, encryption, global coverage',
  authors: [{ name: 'Kalina AI Team' }],
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
        <LoadingWrapper>
          <Providers>
            {children}
            <Footer />
            <BottomBar />
          </Providers>
        </LoadingWrapper>
      </body>
    </html>
  )
}
