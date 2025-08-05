'use client'
import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '@/lib/i18n'

export function AnalyticsShowcaseSection() {
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
  const { t } = useLanguage()
  // Header color change logic (robust: always colors header when section is at top)
  // sectionRef is declared at the top, only declare once
  const sectionRef = useRef<HTMLElement | null>(null)
  const lastState = useRef(false)
  const [isVisible, setIsVisible] = useState(false)
  // ...existing code...

  return (
    <section ref={sectionRef} className="py-32 bg-black relative overflow-hidden">
      {/* SVG wave background at the top */}
      <div className="absolute left-0 top-0 w-full z-0" style={{ pointerEvents: 'none' }}>
        <img
          src="/AnalyticsShowcaseSection/WaveBackgroudForAnalytics.svg"
          alt="Wave background for analytics"
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
      </div>
      {/* Premium background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-indigo-600/5 to-transparent rounded-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Premium header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-full border border-indigo-500/20 text-indigo-300 text-sm font-semibold mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3 animate-ping"></span>
            {t('analytics.visualiseInfo')}
          </div>
          <h2 className="text-6xl text-white md:text-7xl font-bold mb-8 leading-tight animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {t('analytics.title')}
            <br />
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              {t('analytics.subtitle')}
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            {t('analytics.description')}
          </p>
        </div>

        {/* Premium dashboard layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-8 mb-16">
          {/* Main analytics card - spans 8 columns */}
          <div className="lg:col-span-8 bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-xl border border-gray-700/50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 relative overflow-hidden group transition-all duration-700 animate-fade-in-up w-full" style={{ animationDelay: '0.6s' }}>
            {/* Light sweep effect */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl sm:rounded-3xl">
                <div
                  className="absolute inset-0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                  style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.04), transparent)' }}
                />
            </div>
            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 gap-4 sm:gap-0">
                <div className="flex items-center space-x-4">
                  <div>
                    <div className="text-gray-400 text-sm">JAN 2025</div>
                    <div className="text-white font-semibold text-sm sm:text-base">{t('analytics.dailyActiveUsers')}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-400">
                  <span className="hidden sm:inline">{t('analytics.lastDays')}</span>
                  <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="mb-6 sm:mb-8">
                <div className="flex flex-col sm:flex-row sm:items-baseline space-y-2 sm:space-y-0 sm:space-x-4 mb-4">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">5.24k</div>
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-1 text-emerald-400 bg-emerald-400/10 px-2 sm:px-3 py-1 rounded-full">
                      <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" transform="rotate(180 10 10)" />
                      </svg>
                      <span className="font-semibold text-xs sm:text-sm">25%</span>
                    </div>
                    <span className="text-gray-400 text-xs sm:text-sm">{t('analytics.vsLastMonth')}</span>
                  </div>
                </div>
              </div>

              {/* Premium line chart (video zoomed in and contained) */}
              <div className="w-full flex justify-center items-center overflow-hidden rounded-xl sm:rounded-2xl border-2 border-indigo-500 my-4 sm:my-8 mx-auto" 
                style={{ 
                  height: 'clamp(250px, 50vw, 550px)',
                  width: '100%',
                  maxWidth: '700px'
                }}>
                <video
                  src="/AnalyticsShowcaseSection/Animated-Line-Chart_-White.mp4"
                  width={1150}
                  height={600}
                  className="scale-[1.5] sm:scale-[2.1]"
                  style={{ objectFit: 'cover' }}
                  muted
                  playsInline
                  autoPlay
                  loop={false}
                  onTimeUpdate={e => {
                    const video = e.target as HTMLVideoElement;
                    if (video.duration - video.currentTime <= 2 && !video.paused) {
                      video.pause();
                    }
                  }}
                />
              </div>
            </div>
          </div>

          {/* Side panel - spans 4 columns */}
          <div className="lg:col-span-4 space-y-4 sm:space-y-6">
            {/* Circular progress card */}
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-xl border border-gray-700/50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 transition-all duration-700 animate-fade-in-up group relative overflow-hidden w-full" style={{ animationDelay: '0.8s' }}>
              {/* Light sweep effect */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl sm:rounded-3xl">
                <div
                  className="absolute inset-0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                  style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.04), transparent)' }}
                />
              </div>
              <div className="text-center">
                <div className="text-gray-400 text-sm mb-4">{t('analytics.completionRate')}</div>
                <div className="flex justify-center mb-4">
                  <div className="w-full flex justify-center items-center overflow-hidden rounded-xl sm:rounded-2xl border-2 border-indigo-500 my-4 sm:my-8 mx-auto" 
                    style={{ 
                      height: 'clamp(200px, 40vw, 490px)',
                      width: '100%',
                      maxWidth: '600px'
                    }}>
                <video
                  src="/AnalyticsShowcaseSection/Donut-Chart_-3-Parts-[remix].mp4"
                  width={1150}
                  height={600}
                  className="scale-[2] sm:scale-[3]"
                  style={{ objectFit: 'cover' }}
                  muted
                  playsInline
                  autoPlay
                  loop={false}
                  onTimeUpdate={e => {
                    const video = e.target as HTMLVideoElement;
                    if (video.duration - video.currentTime <= 2 && !video.paused) {
                      video.pause();
                    }
                  }}
                />
              </div>
                </div>
                <div className="text-xl sm:text-2xl font-bold text-white mb-1">75%</div>
                <div className="text-gray-400 text-sm">{t('analytics.aboveTarget')}</div>
              </div>
            </div>

            {/* Quick stats card */}
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-xl border border-gray-700/50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 transition-all duration-700 animate-fade-in-up group relative overflow-hidden w-full" style={{ animationDelay: '1s' }}>
              {/* Light sweep effect */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl sm:rounded-3xl">
                <div
  className="absolute inset-0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
  style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.04), transparent)' }}
/>
              </div>
              <div className="text-gray-400 text-sm mb-4">{t('analytics.revenueGrowth')}</div>
              <div className="flex items-end justify-between mb-4">
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-white">$24.5k</div>
                  <div className="text-emerald-400 text-sm">+12.5% {t('analytics.thisMonth')}</div>
                </div>
                <div className="w-16 h-10 sm:w-20 sm:h-12 flex items-center justify-center text-gray-400 text-xs sm:text-sm font-semibold border-2 border-dashed border-emerald-400 rounded-xl bg-black/10">
                  Placeholder
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section with bar chart and features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">
          {/* Enhanced bar chart section */}
          <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-xl border border-gray-700/50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 transition-all duration-700 animate-fade-in-up group relative overflow-hidden w-full" style={{ animationDelay: '1.2s' }}>
            {/* Light sweep effect */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl sm:rounded-3xl">
              <div
  className="absolute inset-0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
  style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.04), transparent)' }}
/>
            </div>
            <div className="mb-6 w-full">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6 gap-2 sm:gap-0">
                <div className="text-gray-400 text-sm">{t('analytics.appUsers')}</div>
                <div className="text-gray-400 text-sm">{t('analytics.lastMonths')}</div>
              </div>
              
              {/* Premium bar chart */}
              <div className="h-32 sm:h-40 bg-black/20 rounded-xl sm:rounded-2xl p-3 sm:p-4 mb-4 sm:mb-6 border-2 border-dashed border-indigo-500 flex items-center justify-center text-gray-400 text-sm sm:text-lg font-semibold">
                Placeholder: Add your video or graphic here
              </div>
              
              <div className="grid grid-cols-3 gap-3 sm:gap-6 text-center">
                <div className="bg-black/20 rounded-lg sm:rounded-xl p-3 sm:p-4">
                  <div className="text-lg sm:text-2xl font-bold text-white mb-1">5.24k</div>
                  <div className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-wide">{t('analytics.monthlyActive')}</div>
                </div>
                <div className="bg-black/20 rounded-lg sm:rounded-xl p-3 sm:p-4">
                  <div className="text-lg sm:text-2xl font-bold text-white mb-1">194</div>
                  <div className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-wide">{t('analytics.dailyActive')}</div>
                </div>
                <div className="bg-black/20 rounded-lg sm:rounded-xl p-3 sm:p-4">
                  <div className="text-lg sm:text-2xl font-bold text-emerald-400 mb-1">+24%</div>
                  <div className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-wide">{t('analytics.growthRate')}</div>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-700/50 pt-4 sm:pt-6">
              <div className="text-indigo-400 text-xs sm:text-sm font-semibold mb-2 sm:mb-3 uppercase tracking-wide">{t('analytics.customise')}</div>
              <h3 className="text-white text-lg sm:text-2xl font-bold mb-3 sm:mb-4 leading-tight">
                {t('analytics.customiseTitle')}
                <br />
                <span className="text-gray-400">{t('analytics.customiseSubtitle')}</span>
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                {t('analytics.customiseDescription')}
              </p>
            </div>
          </div>

          {/* Redesigned integration/video section */}
          <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-xl border border-gray-700/50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 flex flex-col items-center justify-center min-h-[320px] sm:min-h-[420px] transition-all duration-700 animate-fade-in-up group relative overflow-hidden w-full" style={{ animationDelay: '1.4s' }}>
            {/* Light sweep effect */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl sm:rounded-3xl">
              <div
  className="absolute inset-0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
  style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.04), transparent)' }}
/>
            </div>
            <div className="w-full flex flex-col items-center justify-center mb-6 sm:mb-8">
              <div className="text-purple-400 text-xs sm:text-sm font-semibold mb-2 sm:mb-3 uppercase tracking-wide">INTEGRATION & DEMO</div>
              <h3 className="text-white text-xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 leading-tight text-center">
                {t('analytics.integrationTitle')}
              </h3>
              <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed max-w-lg text-center text-sm sm:text-base">
                {t('analytics.integrationDescription')}
              </p>
            </div>
            {/* Video/demo placeholder */}
            <div className="w-full flex flex-col items-center justify-center">
              <div className="w-full aspect-video max-w-2xl bg-black/60 border-2 border-dashed border-purple-500 rounded-xl sm:rounded-2xl flex items-center justify-center text-purple-400 text-sm sm:text-lg font-semibold">
                {/* TODO: Embed your video or interactive demo here */}
                <div className="text-center px-4">
                  {t('analytics.videoDemoPlaceholder')}
                </div>
              </div>
              <div className="text-gray-400 text-xs mt-2 sm:mt-3">{t('analytics.videoUploadText')}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fade-in-up {
          from { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </section>
  )
}
