'use client'
import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '@/lib/i18n'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export function AnalyticsShowcaseSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  
  useEffect(() => {
    const handle = () => {
      const ref = sectionRef.current;
      if (!ref) return;
      const rect = ref.getBoundingClientRect();
      // Section is considered "at top" if its top is at or above the viewport top, and at least 60px of it is visible
      const minVisible = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
      const isAtTop = rect.top <= 0 && minVisible > 60;
      if (isAtTop) {
        if (!lastState.current) {
          window.dispatchEvent(new CustomEvent('headerOverDemo', { detail: { isOver: true } }));
          lastState.current = true;
        }
      } else {
        if (lastState.current) {
          window.dispatchEvent(new CustomEvent('headerOverDemo', { detail: { isOver: false } }));
          lastState.current = false;
        }
      }
    };
    window.addEventListener('scroll', handle, { passive: true });
    // Fire once on mount in case already at top
    setTimeout(handle, 10);
    return () => {
      window.removeEventListener('scroll', handle);
      window.dispatchEvent(new CustomEvent('headerOverDemo', { detail: { isOver: false } }));
    };
  }, []);

  // GSAP ScrollTrigger animation for video
  useEffect(() => {
    let playTimeout: ReturnType<typeof setTimeout> | null = null;
    if (videoRef.current && typeof window !== 'undefined') {
      const video = videoRef.current;
      // Set initial position (start from a bit less down)
      gsap.set(video, { y: 1000, opacity: 1 });
      // Create ScrollTrigger animation for video
      gsap.to(video, {
        y: '-100vh', // Move to top (exit through top)
        opacity: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom', // Start when section enters viewport
          end: 'bottom top', // End when section exits viewport
          scrub: 8, // Even slower scroll animation
          onEnter: () => {
            video.play().catch(() => {
              // Handle autoplay restrictions
            });
            video.playbackRate = 0.5;
          },
          onLeave: () => {
            video.pause();
            video.playbackRate = 1;
          },
          onEnterBack: () => {
            video.play().catch(() => {
              // Handle autoplay restrictions
            });
            video.playbackRate = 0.5;
          },
          onLeaveBack: () => {
            video.pause();
            video.playbackRate = 1;
          },
        }
      });
      // Pause 2 seconds before the end and keep paused, then play again after 5 seconds
      const handleTimeUpdate = () => {
        if (video.duration - video.currentTime <= 2 && !video.paused) {
          video.pause();
          video.currentTime = video.duration - 2;
          if (playTimeout) clearTimeout(playTimeout);
          playTimeout = setTimeout(() => {
            video.currentTime = 0;
            video.play().catch(() => {});
          }, 120000);
        }
      };
      video.addEventListener('timeupdate', handleTimeUpdate);

      // Animate over_15k_image
      const over15kImg = document.getElementById('over_15k_image');
      if (over15kImg) {
        gsap.set(over15kImg, { y: 1000, opacity: 0.7 });
        gsap.to(over15kImg, {
          y: '-100vh',
          opacity: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 8,
          }
        });
      }
      // Animate Ai-agents-image
      const aiAgentsImg = document.getElementById('Ai-agents-image');
      if (aiAgentsImg) {
        gsap.set(aiAgentsImg, { y: 1000, opacity: 0.7 });
        gsap.to(aiAgentsImg, {
          y: '-100vh',
          opacity: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 8,
          }
        });
      }
      // Animate Spiral Integrations video with GSAP ScrollTrigger
      const spiralVideo = document.querySelector('video[src="/AnalyticsShowcase/Spiral-Integrations.mp4"]');
      if (spiralVideo) {
        gsap.set(spiralVideo, { y: 1000, opacity: 0.2 });
        gsap.to(spiralVideo, {
          y: '-100vh',
          opacity: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 8,
          }
        });
      }

      return () => {
        video.removeEventListener('timeupdate', handleTimeUpdate);
        if (playTimeout) clearTimeout(playTimeout);
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const { t } = useLanguage()
  // Header color change logic (robust: always colors header when section is at top)
  // sectionRef is declared at the top, only declare once
  const sectionRef = useRef<HTMLElement | null>(null)
  const lastState = useRef(false)
  const [isVisible, setIsVisible] = useState(false)

  return (
    <section ref={sectionRef} className="py-64 md:py-96 bg-black relative overflow-hidden min-h-[90vh]">
      {/* Wave background image at the top, does not resize, keeps form on mobile/desktop */}
      <img
        src="/AnalyticsShowcase/WaveBackgroudForAnalytics.svg"
        alt="Wave Background"
        className="w-auto h-auto max-w-none absolute top-0 left-0 right-0 mx-auto z-[30] select-none pointer-events-none"
        style={{ minWidth: '100vw', minHeight: 'auto', objectFit: 'none' }}
      />
      {/* Animated video with GSAP ScrollTrigger - very small 1:1 */}
      <img
        id="over_15k_image"
        src="/AnalyticsShowcase/Image-1234.png"
        alt="Widget Agents"
        className="absolute top-[431px] left-[397px] w-64 h-auto rounded-2xl shadow-2xl z-[2]"
      />
      <video
        ref={videoRef}
        src="/AnalyticsShowcase/DataShowcase.mp4"
        className="absolute top-[380px] left-[400px] transform -translate-x-1/2 -translate-y-1/2 w-[460px] h-[370px] object-cover z-[1] rounded-2xl"
        muted
        playsInline
        loop
        preload="metadata"
      />
      {/* Spiral Integrations video */}
      <video
        src="/AnalyticsShowcase/Spiral-Integrations.mp4"
        className="absolute top-[700px] left-[600px] transform -translate-x-1/2 -translate-y-1/2 w-[460px] h-[370px] object-cover z-[0] border-2 border-gray-800 rounded-2xl bg-gray-200"
        muted
        playsInline
        loop
        preload="metadata"
        autoPlay
      />
      {/* WidgetAgents image at bottom right with reveal animation */}
      <img
        id="Ai-agents-image"
        src="/AnalyticsShowcase/WidgetAgents.png"
        alt="Widget Agents"
        className="absolute top-[800px] left-[200px] w-64 h-auto rounded-2xl shadow-2xl z-10"
      />
      {/* Title absolutely at the top of the section */}
      <div className="absolute top-0 left-0 w-full z-20 pt-44">
        <div className="text-center">
          <h2 className="text-6xl text-white md:text-7xl font-bold mb-8 leading-tight">
            {t('analytics.title')}
            <br />
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              {t('analytics.subtitle')}
            </span>
          </h2>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ...existing code... (other content if needed) */}
      </div>
      {/* Black gradient div at the bottom of the section */}
      <div className="absolute left-0 bottom-0 w-full h-32 z-40 pointer-events-none" style={{background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, #000 100%)'}} />
    </section>
  )
}
