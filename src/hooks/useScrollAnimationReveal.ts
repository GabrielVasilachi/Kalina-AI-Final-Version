'use client'

import { useRef, useState, useEffect } from 'react'

type RevealDirection = 'left' | 'right' | 'up' | 'down'

export function useScrollAnimationReveal(direction: RevealDirection = 'up', threshold: number = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold, rootMargin: '50px' }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [isVisible, threshold])

  const getBaseClasses = () => {
    switch (direction) {
      case 'left':
        return 'reveal-left'
      case 'right':
        return 'reveal-right'
      case 'up':
        return 'reveal-up'
      case 'down':
        return 'reveal-down'
      default:
        return 'reveal-up'
    }
  }

  const baseClasses = getBaseClasses()
  const classes = isVisible ? `${baseClasses} reveal-show` : baseClasses

  return { ref, classes, isVisible }
}
