"use client";
import React, { useEffect, useRef } from 'react'

export default function NavigationBottomBar() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotsRef = useRef<any[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    function setCanvasSizeAndDots() {
      if (!canvas) return;
      // Set actual canvas size attributes
      const width = canvas.offsetWidth || 600;
      const height = canvas.offsetHeight || 120;
      canvas.width = width;
      canvas.height = height;
      // Re-initialize dots to fill the canvas
      dotsRef.current = Array.from({ length: 30 }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: 2 + Math.random() * 2,
        dx: (Math.random() - 0.5) * 0.5,
        dy: (Math.random() - 0.5) * 0.5
      }));
    }
    setCanvasSizeAndDots();
    window.addEventListener('resize', setCanvasSizeAndDots);

    function animate() {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dotsRef.current.forEach(dot => {
        dot.x += dot.dx;
        dot.y += dot.dy;
        if (dot.x < 0 || dot.x > canvas.width) dot.dx *= -1;
        if (dot.y < 0 || dot.y > canvas.height) dot.dy *= -1;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.r, 0, 2 * Math.PI);
        ctx.fillStyle = 'rgb(0,0,0,)';
        ctx.shadowColor = '#000';
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      });
      requestAnimationFrame(animate);
    }
    animate();
    return () => {
      window.removeEventListener('resize', setCanvasSizeAndDots);
    };
  }, []);

  return (
    <div className="px-2 py-2 bg-gray-0 relative overflow-hidden shadow-lg" style={{ borderRadius: '0px' }}>
      {/* Animated Dots Background */}
      <canvas
        ref={canvasRef}
        width={600}
        height={120}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />
      <div className="container-width px-2 py-4 relative z-10">
        <div className="glass-card rounded-xl p-4 text-center magnetic-hover max-w-md mx-auto">
          <h3 className="text-lg font-semibold text-brand-400 mb-2 text-glow">
            Rămâi la curent
          </h3>
          <p className="text-brand-400 mb-3 text-sm">
            Obține cele mai recente știri despre tehnologia de apelare AI și actualizările platformei
          </p>
          <div className="flex max-w-xs mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-2 py-1 bg-slate-100 border border-slate-900 rounded-l-lg text-gray-950 placeholder-brand-400 focus:outline-none focus:border-brand-400 transition-colors text-xs"
            />
            <button className="btn-primary px-3 py-1 rounded-l-none btn-magnetic text-xs">
              Subscribe
            </button>
          </div>
        </div>
        <div className="text-center mt-2 text-xs text-brand-300">
          Made with ♡ by Kallina AI Team &mdash; 2025
        </div>
      </div>
    </div>
  )
}
