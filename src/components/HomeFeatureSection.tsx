'use client'

import { useScrollAnimationReveal } from '@/hooks/useScrollAnimationReveal'
import Image from 'next/image'

interface FeatureSectionProps {
  title: string
  body: string
  imgSrc: string
  imgAlt: string
}

export function FeatureSection({ title, body, imgSrc, imgAlt }: FeatureSectionProps) {
  const textReveal = useScrollAnimationReveal('left')
  const imageReveal = useScrollAnimationReveal('right')

  return (
    <section className="section-padding">
      <div className="container-width">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Text Content - Left Side on Desktop, Bottom on Mobile */}
          <div 
            ref={textReveal.ref}
            className={`lg:col-span-6 max-w-xl order-2 lg:order-1 ${textReveal.classes}`}
          >
            <h3 className="text-3xl lg:text-4xl font-bold text-brand-400 mb-6">
              {title}
            </h3>
            <p className="text-lg text-brand-300 leading-relaxed">
              {body}
            </p>
          </div>
          
          {/* Image - Right Side on Desktop, Top on Mobile */}
          <div 
            ref={imageReveal.ref}
            className={`lg:col-span-6 order-1 lg:order-2 delay-150 ${imageReveal.classes}`}
          >
            <Image 
              src={imgSrc}
              alt={imgAlt}
              width={600}
              height={400}
              className="w-full h-auto object-contain rounded-xl drop-shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
