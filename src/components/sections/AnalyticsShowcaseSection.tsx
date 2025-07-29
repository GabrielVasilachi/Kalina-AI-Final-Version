'use client'
import { useEffect, useRef, useState } from 'react'

export function AnalyticsShowcaseSection() {
  // Header color change logic (robust: always colors header when section is at top)
  // sectionRef is declared at the top, only declare once
  const sectionRef = useRef<HTMLElement | null>(null)
  const lastState = useRef(false)
  const [isVisible, setIsVisible] = useState(false)
  const lineChartRef = useRef<HTMLCanvasElement>(null)
  const barChartRef = useRef<HTMLCanvasElement>(null)
  const circleChartRef = useRef<HTMLCanvasElement>(null)
  const miniChartRef = useRef<HTMLCanvasElement>(null)
  const sparklineRef = useRef<HTMLCanvasElement>(null)
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

  // Intersection observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Premium animated line chart with multiple lines
  useEffect(() => {
    if (!isVisible || !lineChartRef.current) return

    const canvas = lineChartRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const width = canvas.width
    const height = canvas.height
    const padding = 40

    // Multiple data series
    const dataSet1 = [
      { x: padding, y: height - 80 },
      { x: width * 0.2, y: height - 100 },
      { x: width * 0.35, y: height - 120 },
      { x: width * 0.5, y: height - 90 },
      { x: width * 0.65, y: height - 150 },
      { x: width * 0.8, y: height - 180 },
      { x: width - padding, y: height - 200 },
    ]

    const dataSet2 = [
      { x: padding, y: height - 60 },
      { x: width * 0.2, y: height - 70 },
      { x: width * 0.35, y: height - 85 },
      { x: width * 0.5, y: height - 110 },
      { x: width * 0.65, y: height - 130 },
      { x: width * 0.8, y: height - 160 },
      { x: width - padding, y: height - 170 },
    ]

    let animationProgress = 0
    const animationDuration = 3000

    function drawGrid() {
      if (!ctx) return
      // Horizontal grid lines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)'
      ctx.lineWidth = 1
      for (let i = 1; i < 6; i++) {
        const y = (height / 6) * i
        ctx.beginPath()
        ctx.moveTo(padding, y)
        ctx.lineTo(width - padding, y)
        ctx.stroke()
      }
      
      // Vertical grid lines
      for (let i = 1; i < 8; i++) {
        const x = padding + ((width - 2 * padding) / 8) * i
        ctx.beginPath()
        ctx.moveTo(x, padding)
        ctx.lineTo(x, height - padding)
        ctx.stroke()
      }
    }

    function drawAnimatedLine(dataPoints: any[], color: string, gradient: any, progress: number) {
      if (!ctx) return
      const currentPointIndex = Math.floor(progress * (dataPoints.length - 1))
      const pointProgress = (progress * (dataPoints.length - 1)) % 1

      // Create gradient
      const lineGradient = ctx.createLinearGradient(0, 0, 0, height)
      lineGradient.addColorStop(0, color)
      lineGradient.addColorStop(1, 'rgba(99, 102, 241, 0.1)')

      // Draw area under curve
      ctx.fillStyle = gradient
      ctx.beginPath()
      ctx.moveTo(dataPoints[0].x, height - padding)
      
      for (let i = 0; i <= currentPointIndex; i++) {
        const point = dataPoints[i]
        ctx.lineTo(point.x, point.y)
      }
      
      if (currentPointIndex < dataPoints.length - 1) {
        const currentPoint = dataPoints[currentPointIndex]
        const nextPoint = dataPoints[currentPointIndex + 1]
        const x = currentPoint.x + (nextPoint.x - currentPoint.x) * pointProgress
        const y = currentPoint.y + (nextPoint.y - currentPoint.y) * pointProgress
        ctx.lineTo(x, y)
        ctx.lineTo(x, height - padding)
      } else {
        ctx.lineTo(dataPoints[currentPointIndex].x, height - padding)
      }
      
      ctx.closePath()
      ctx.fill()

      // Draw line
      ctx.strokeStyle = color
      ctx.lineWidth = 3
      ctx.beginPath()
      
      for (let i = 0; i <= currentPointIndex; i++) {
        const point = dataPoints[i]
        if (i === 0) {
          ctx.moveTo(point.x, point.y)
        } else {
          ctx.lineTo(point.x, point.y)
        }
      }

      if (currentPointIndex < dataPoints.length - 1) {
        const currentPoint = dataPoints[currentPointIndex]
        const nextPoint = dataPoints[currentPointIndex + 1]
        const x = currentPoint.x + (nextPoint.x - currentPoint.x) * pointProgress
        const y = currentPoint.y + (nextPoint.y - currentPoint.y) * pointProgress
        ctx.lineTo(x, y)
      }

      ctx.stroke()

      // Draw animated points
      for (let i = 0; i <= currentPointIndex; i++) {
        const point = dataPoints[i]
        
        // Outer glow
        ctx.shadowColor = color
        ctx.shadowBlur = 15
        ctx.fillStyle = color
        ctx.beginPath()
        ctx.arc(point.x, point.y, 6, 0, 2 * Math.PI)
        ctx.fill()
        
        // Inner dot
        ctx.shadowBlur = 0
        ctx.fillStyle = '#000'
        ctx.beginPath()
        ctx.arc(point.x, point.y, 2, 0, 2 * Math.PI)
        ctx.fill()
      }

      // Animated current position
      if (currentPointIndex < dataPoints.length - 1) {
        const currentPoint = dataPoints[currentPointIndex]
        const nextPoint = dataPoints[currentPointIndex + 1]
        const x = currentPoint.x + (nextPoint.x - currentPoint.x) * pointProgress
        const y = currentPoint.y + (nextPoint.y - currentPoint.y) * pointProgress
        
        ctx.shadowColor = color
        ctx.shadowBlur = 20
        ctx.fillStyle = color
        ctx.beginPath()
        ctx.arc(x, y, 8, 0, 2 * Math.PI)
        ctx.fill()
        ctx.shadowBlur = 0
      }
    }

    function animate() {
      if (animationProgress >= animationDuration || !ctx) return

      ctx.clearRect(0, 0, width, height)
      
      const progress = Math.min(animationProgress / animationDuration, 1)
      
      drawGrid()

      // Create gradients
      const gradient1 = ctx.createLinearGradient(0, 0, 0, height)
      gradient1.addColorStop(0, 'rgba(99, 102, 241, 0.3)')
      gradient1.addColorStop(1, 'rgba(99, 102, 241, 0.05)')

      const gradient2 = ctx.createLinearGradient(0, 0, 0, height)
      gradient2.addColorStop(0, 'rgba(139, 92, 246, 0.3)')
      gradient2.addColorStop(1, 'rgba(139, 92, 246, 0.05)')

      // Draw both lines with staggered animation
      drawAnimatedLine(dataSet2, '#8b5cf6', gradient2, Math.max(0, progress - 0.2))
      drawAnimatedLine(dataSet1, '#6366f1', gradient1, progress)

      animationProgress += 16
      requestAnimationFrame(animate)
    }

    setTimeout(() => animate(), 800)
  }, [isVisible])

  // Premium bar chart with 3D effect
  useEffect(() => {
    if (!isVisible || !barChartRef.current) return

    const canvas = barChartRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const width = canvas.width
    const height = canvas.height
    const padding = 20

    const bars = [
      { height: 40, color: '#6366f1', label: 'Jan' },
      { height: 80, color: '#8b5cf6', label: 'Feb' },
      { height: 60, color: '#6366f1', label: 'Mar' },
      { height: 120, color: '#8b5cf6', label: 'Apr' },
      { height: 90, color: '#6366f1', label: 'May' },
      { height: 140, color: '#8b5cf6', label: 'Jun' },
      { height: 110, color: '#6366f1', label: 'Jul' },
    ]

    let animationProgress = 0
    const animationDuration = 2000

    function animate() {
      if (animationProgress >= animationDuration || !ctx) return

      ctx.clearRect(0, 0, width, height)
      
      const progress = Math.min(animationProgress / animationDuration, 1)
      const barWidth = (width - 2 * padding) / bars.length
      
      bars.forEach((bar, index) => {
        const delay = index * 0.1
        const barProgress = Math.max(0, Math.min(1, (progress - delay) / 0.8))
        
        const x = padding + index * barWidth + barWidth * 0.15
        const barHeight = bar.height * barProgress * (0.8 + 0.2 * Math.sin(barProgress * Math.PI))
        const y = height - padding - barHeight
        
        // 3D effect - shadow
        ctx.fillStyle = 'rgba(0, 0, 0, 0.2)'
        ctx.fillRect(x + 3, y + 3, barWidth * 0.7, barHeight)
        
        // Gradient bar
        const gradient = ctx.createLinearGradient(x, y, x, y + barHeight)
        gradient.addColorStop(0, bar.color)
        gradient.addColorStop(1, bar.color + '80')
        
        ctx.fillStyle = gradient
        ctx.fillRect(x, y, barWidth * 0.7, barHeight)
        
        // Glow effect
        if (barProgress > 0.8) {
          ctx.shadowColor = bar.color
          ctx.shadowBlur = 10
          ctx.fillStyle = bar.color
          ctx.fillRect(x, y, barWidth * 0.7, 2)
          ctx.shadowBlur = 0
        }
      })

      animationProgress += 16
      requestAnimationFrame(animate)
    }

    setTimeout(() => animate(), 1200)
  }, [isVisible])

  // Animated circular progress chart
  useEffect(() => {
    if (!isVisible || !circleChartRef.current) return

    const canvas = circleChartRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    const radius = 50

    let animationProgress = 0
    const animationDuration = 2500

    function animate() {
      if (animationProgress >= animationDuration || !ctx) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      const progress = Math.min(animationProgress / animationDuration, 1)
      const percentage = 0.75 * progress

      // Background circle
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)'
      ctx.lineWidth = 8
      ctx.beginPath()
      ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI)
      ctx.stroke()

      // Progress arc
      ctx.strokeStyle = '#6366f1'
      ctx.lineWidth = 8
      ctx.lineCap = 'round'
      ctx.beginPath()
      ctx.arc(centerX, centerY, radius, -Math.PI / 2, -Math.PI / 2 + (2 * Math.PI * percentage))
      ctx.stroke()

      // Glow effect
      ctx.shadowColor = '#6366f1'
      ctx.shadowBlur = 20
      ctx.stroke()
      ctx.shadowBlur = 0

      // Center text
      ctx.fillStyle = '#fff'
      ctx.font = 'bold 18px system-ui'
      ctx.textAlign = 'center'
      ctx.fillText(`${Math.round(percentage * 100)}%`, centerX, centerY + 5)

      animationProgress += 16
      requestAnimationFrame(animate)
    }

    setTimeout(() => animate(), 1600)
  }, [isVisible])

  // Mini sparkline chart
  useEffect(() => {
    if (!isVisible || !sparklineRef.current) return

    const canvas = sparklineRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const width = canvas.width
    const height = canvas.height

    const dataPoints = Array.from({ length: 20 }, (_, i) => ({
      x: (width / 19) * i,
      y: height / 2 + Math.sin(i * 0.5) * 20 + Math.random() * 10
    }))

    let animationProgress = 0
    const animationDuration = 1500

    function animate() {
      if (animationProgress >= animationDuration || !ctx) return

      ctx.clearRect(0, 0, width, height)
      
      const progress = Math.min(animationProgress / animationDuration, 1)
      const currentPointIndex = Math.floor(progress * (dataPoints.length - 1))

      // Draw line
      ctx.strokeStyle = '#10b981'
      ctx.lineWidth = 2
      ctx.beginPath()
      
      for (let i = 0; i <= currentPointIndex; i++) {
        const point = dataPoints[i]
        if (i === 0) {
          ctx.moveTo(point.x, point.y)
        } else {
          ctx.lineTo(point.x, point.y)
        }
      }
      ctx.stroke()

      // Draw points
      ctx.fillStyle = '#10b981'
      for (let i = 0; i <= currentPointIndex; i++) {
        const point = dataPoints[i]
        ctx.beginPath()
        ctx.arc(point.x, point.y, 2, 0, 2 * Math.PI)
        ctx.fill()
      }

      animationProgress += 16
      requestAnimationFrame(animate)
    }

    setTimeout(() => animate(), 2000)
  }, [isVisible])

  return (
    <section ref={sectionRef} className="py-32 bg-black relative overflow-hidden rounded-t-3xl">
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
            VISUALISE INFO
          </div>
          <h2 className="text-6xl md:text-7xl font-bold mb-8 leading-tight animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Built for business.
            <br />
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Feels like play.
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Widgets are carefully crafted to help you distill powerful messages from your information and data.
          </p>
        </div>

        {/* Premium dashboard layout */}
        <div className="grid lg:grid-cols-12 gap-8 mb-16">
          {/* Main analytics card - spans 8 columns */}
          <div className="lg:col-span-8 bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 relative overflow-hidden group hover:border-indigo-500/30 hover:bg-indigo-600/30 transition-all duration-700 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            {/* Card glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">KAI</span>
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm">JAN 2025</div>
                    <div className="text-white font-semibold">Daily active users</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-400">
                  <span>Last 28 days</span>
                  <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <div className="flex items-baseline space-x-4 mb-4">
                  <div className="text-5xl font-bold text-white">5.24k</div>
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-1 text-emerald-400 bg-emerald-400/10 px-3 py-1 rounded-full">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" transform="rotate(180 10 10)" />
                      </svg>
                      <span className="font-semibold">25%</span>
                    </div>
                    <span className="text-gray-400 text-sm">vs last month</span>
                  </div>
                </div>
              </div>

              {/* Premium line chart */}
              <div className="relative h-64 bg-black/20 rounded-2xl p-4 border border-gray-800/50">
                <canvas
                  ref={lineChartRef}
                  width={600}
                  height={220}
                  className="w-full h-full rounded-xl"
                />
                <div className="absolute top-4 right-4 flex space-x-2">
                  <div className="flex items-center space-x-2 text-xs text-gray-400">
                    <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                    <span>Current period</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-gray-400">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span>Previous period</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Side panel - spans 4 columns */}
          <div className="lg:col-span-4 space-y-6">
            {/* Circular progress card */}
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-6 hover:bg-purple-600/30 hover:border-purple-500/30 transition-all duration-700 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <div className="text-center">
                <div className="text-gray-400 text-sm mb-4">Completion Rate</div>
                <div className="flex justify-center mb-4">
                  <canvas
                    ref={circleChartRef}
                    width={220}
                    height={220}
                    className="w-34 h-34"
                  />
                </div>
                <div className="text-2xl font-bold text-white mb-1">75%</div>
                <div className="text-gray-400 text-sm">Above target</div>
              </div>
            </div>

            {/* Quick stats card */}
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-6 hover:bg-emerald-600/30 hover:border-emerald-500/30 transition-all duration-700 animate-fade-in-up" style={{ animationDelay: '1s' }}>
              <div className="text-gray-400 text-sm mb-4">Revenue Growth</div>
              <div className="flex items-end justify-between mb-4">
                <div>
                  <div className="text-3xl font-bold text-white">$24.5k</div>
                  <div className="text-emerald-400 text-sm">+12.5% this month</div>
                </div>
                <div className="w-20 h-12">
                  <canvas
                    ref={sparklineRef}
                    width={100}
                    height={60}
                    className="w-full h-full ml-[-50px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section with bar chart and features */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Enhanced bar chart section */}
          <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 hover:border-indigo-500/30 hover:bg-indigo-600/30 transition-all duration-700 animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
            <div className="mb-6">
              <div className="flex items-center justify-between mb-6">
                <div className="text-gray-400 text-sm">App Users</div>
                <div className="text-gray-400 text-sm">Last 7 months</div>
              </div>
              
              {/* Premium bar chart */}
              <div className="h-40 bg-black/20 rounded-2xl p-4 mb-6 border border-gray-800/50">
                <canvas
                  ref={barChartRef}
                  width={400}
                  height={140}
                  className="w-full h-full"
                />
              </div>
              
              <div className="grid grid-cols-3 gap-6 text-center">
                <div className="bg-black/20 rounded-xl p-4">
                  <div className="text-2xl font-bold text-white mb-1">5.24k</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide">Monthly Active</div>
                </div>
                <div className="bg-black/20 rounded-xl p-4">
                  <div className="text-2xl font-bold text-white mb-1">194</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide">Daily Active</div>
                </div>
                <div className="bg-black/20 rounded-xl p-4">
                  <div className="text-2xl font-bold text-emerald-400 mb-1">+24%</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide">Growth Rate</div>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-700/50 pt-6">
              <div className="text-indigo-400 text-sm font-semibold mb-3 uppercase tracking-wide">CUSTOMISE</div>
              <h3 className="text-white text-2xl font-bold mb-4 leading-tight">
                Easy to customise.
                <br />
                <span className="text-gray-400">Hard to get wrong.</span>
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Widgets are designed to be customized easily. They always look stunning, no matter how you edit.
              </p>
            </div>
          </div>

          {/* Enhanced integration section */}
          <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 hover:border-purple-500/30 hover:bg-purple-600/30 transition-all duration-700 animate-fade-in-up" style={{ animationDelay: '1.4s' }}>
            <div className="text-purple-400 text-sm font-semibold mb-3 uppercase tracking-wide">EMBED</div>
            <h3 className=" text-white text-2xl font-bold mb-4 leading-tight">
              A window
              <br />
              <span className="text-gray-400">into your work.</span>
            </h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Simply paste a link to any of the hundreds of tools you use and Kalina AI will seamlessly package your outputs.
            </p>
            
            {/* Premium integration grid */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="group">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.84-.179-.96-.6-.12-.421.18-.841.6-.961 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.78.301 1.141zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
                  </svg>
                </div>
              </div>
              <div className="group">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-gray-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-xl">N</span>
                </div>
              </div>
              <div className="group">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-yellow-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.5 2C13.5 2 15 3.5 15 6.5C15 9.5 13.5 11 13.5 11C13.5 11 15 12.5 15 15.5C15 18.5 13.5 20 13.5 20C13.5 20 12 18.5 12 15.5C12 12.5 13.5 11 13.5 11C13.5 11 12 9.5 12 6.5C12 3.5 13.5 2 13.5 2Z"/>
                  </svg>
                </div>
              </div>
              <div className="group">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-red-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1L13.5 2.5L18.5 7.5H9.5L14.5 2.5L13 1L7 7V9H10V11H14V9H21Z"/>
                  </svg>
                </div>
              </div>
              <div className="group">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L13.09 8.26L22 9L16 14L18 22L12 18L6 22L8 14L2 9L10.91 8.26L12 2Z"/>
                  </svg>
                </div>
              </div>
              <div className="group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.643 4.937C22.808 5.313 21.911 5.575 20.968 5.708C21.941 5.141 22.669 4.259 23.016 3.204C22.116 3.724 21.119 4.100 20.058 4.307C19.208 3.432 17.998 2.888 16.658 2.888C14.086 2.888 12 4.974 12 7.547C12 7.917 12.042 8.278 12.125 8.626C8.246 8.436 4.817 6.606 2.542 3.747C2.143 4.371 1.917 5.141 1.917 5.974C1.917 7.563 2.731 8.967 3.959 9.766C3.199 9.740 2.488 9.533 1.875 9.191V9.251C1.875 11.513 3.479 13.396 5.608 13.828C5.222 13.937 4.814 13.996 4.392 13.996C4.093 13.996 3.803 13.966 3.521 13.909C4.109 15.760 5.818 17.123 7.865 17.162C6.271 18.423 4.259 19.178 2.077 19.178C1.694 19.178 1.317 19.157 0.948 19.116C2.019 20.428 4.475 21.178 7.144 21.178C16.647 21.178 21.779 14.079 21.779 7.769C21.779 7.565 21.775 7.363 21.766 7.162C22.679 6.520 23.465 5.715 24.078 4.791L23.643 4.937Z"/>
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-gray-400 text-sm">Connect with 100+ apps and services</div>
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
