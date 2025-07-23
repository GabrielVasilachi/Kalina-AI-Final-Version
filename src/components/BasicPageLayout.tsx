'use client'

import { NavigationHeader } from '@/components/layout/NavigationHeader'
import { ReactNode } from 'react'

interface BasicPageLayoutProps {
  title: string
  description: string
  children: ReactNode
  className?: string
}

export function BasicPageLayout({ title, description, children, className = '' }: BasicPageLayoutProps) {
  return (
    <>
      <NavigationHeader />
      <div className={`min-h-screen bg-white text-black ${className}`}>
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              {title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              {description}
            </p>
          </div>
        </section>

        {/* Content */}
        <main className="px-4">
          {children}
        </main>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="border border-black rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Începe cu Kallina.ai
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Transformă-ți afacerea cu primul angajat digital perfect instruit
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-black text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-900 transition-all">
                  Începe Gratuit
                </button>
                <button className="border border-black text-black px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all">
                  Programează Demo
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
