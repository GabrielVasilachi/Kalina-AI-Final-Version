
'use client';
import React, { useState } from 'react';

const WhatsKallinaSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const containers = [
    {
      id: 2,
      title: "Virtual Agent for Companies",
      description: "Kallina AI is your company's virtual agent, ready to answer every call and support your clients 24/7.",
      backgroundImage: "url('/WhatsKallinaSection/FirstContainerImageBackgroundWhatsKallinaSection.png')"
    },
    {
      id: 3,
      title: "Never Miss a Call",
      description: "Our AI agents replace traditional operators, ensuring no call is missed and every customer receives instant, professional assistance.",
      backgroundImage: "url('/WhatsKallinaSection/SecondContainerImageBackgroundWhatsKallinaSection.png')"
    },
    {
      id: 4,
      title: "Focus on What Matters",
      description: "Let Kallina handle your company's communications, so your team can focus on what matters most.",
      backgroundImage: "url('/WhatsKallinaSection/ThirdContainerImageBackgroundWhatsKallinaSection.png')"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % containers.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + containers.length) % containers.length);
  };
  return (
    <div className="w-full bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Container 1 */}
          <div className="p-8 rounded-lg flex flex-col justify-between min-h-[352px]">
            <h1 className="text-black text-5xl md:text-8xl font-extrabold text-left leading-tight">
              What<br />Is<br />Kallina
            </h1>
          </div>

          {/* Container 2 - Desktop view */}
          <div
            className="hidden md:flex bg-black p-8 rounded-lg bg-cover bg-center min-h-[352px] flex-col justify-between relative overflow-hidden"
            style={{ backgroundImage: "url('/WhatsKallinaSection/FirstContainerImageBackgroundWhatsKallinaSection.png')" }}
          >
            {/* Big number 1 background */}
            <span className="absolute inset-0 pointer-events-none select-none z-0 flex items-end justify-start">
              <span className="text-white/10 font-extrabold leading-none" style={{ fontSize: '28rem', lineHeight: 1, position: 'absolute', left: '5rem', bottom: '-11rem' }}>1</span>
            </span>
            <div className="relative z-10 max-w-md text-left">
              <h2 className="text-white text-3xl font-bold mb-2">Virtual Agent for Companies</h2>
              <p className="text-white text-lg md:text-xl mb-4">Kallina AI is your company's virtual agent, ready to answer every call and support your clients 24/7.</p>
            </div>
            <div className="flex justify-end relative z-10">
              <button className="bg-white text-black font-semibold px-6 py-2 rounded-full shadow transition-colors duration-200 hover:bg-black hover:text-white border border-black flex items-center gap-2 group relative overflow-visible" style={{ top: '-10px', left: '-10px', position: 'relative' }}>
                Learn more
                {/* Arrow 1: animates on hover */}
                <span className="inline-block relative w-5 h-5">
                  {/* Arrow 1: disappears on hover */}
                  <svg className="w-5 h-5 absolute top-0 left-0 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:opacity-0 group-hover:translate-x-4 group-hover:-translate-y-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 19L19 5" />
                    <path d="M9 5h10v10" />
                  </svg>
                  {/* Arrow 2: appears in the same spot as Arrow 1 on hover */}
                  <svg className="w-5 h-5 text-white absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 19L19 5" />
                    <path d="M9 5h10v10" />
                  </svg>
                </span>
              </button>
            </div>
          </div>

          {/* Mobile carousel */}
          <div className="block md:hidden relative">
            <div className="overflow-hidden rounded-lg">
              <div 
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {/* Rearranged: 2nd, 4th, 3rd container with big numbers */}
                {[
                  { ...containers[0], bigNumber: 1 }, // 2nd container (index 0)
                  { ...containers[2], bigNumber: 2 }, // 4th container (index 2)
                  { ...containers[1], bigNumber: 3 }, // 3rd container (index 1)
                ].map((container, index) => (
                  <div
                    key={container.id}
                    className="w-full flex-shrink-0 bg-black p-6 pb-0 bg-cover bg-center min-h-[320px] flex flex-col justify-between relative overflow-hidden"
                    style={{ backgroundImage: container.backgroundImage }}
                  >
                    {/* Big number background */}
                    <span className="absolute inset-0 pointer-events-none select-none z-0 flex items-end justify-start">
                      <span className="text-white/10 font-extrabold leading-none" style={{ fontSize: '20rem', lineHeight: 1, position: 'absolute', left: '5rem', bottom: '-7rem' }}>{container.bigNumber}</span>
                    </span>
                    <div className="relative z-10 max-w-xs text-left">
                      <h2 className="text-white text-2xl font-bold mb-2">{container.title}</h2>
                      <p className="text-white text-base mb-4">{container.description}</p>
                    </div>
                    <div className="flex justify-end relative z-10">
                      <button className="bg-white text-black font-semibold px-4 py-2 rounded-full shadow transition-colors duration-200 hover:bg-black hover:text-white border border-black flex items-center gap-2 group relative overflow-visible text-sm" style={{ top: '-20px', left: '-10px', position: 'relative' }}>
                        Learn more
                        <span className="inline-block relative w-4 h-4">
                          <svg className="w-4 h-4 absolute top-0 left-0 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:opacity-0 group-hover:translate-x-4 group-hover:-translate-y-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 19L19 5" />
                            <path d="M9 5h10v10" />
                          </svg>
                          <svg className="w-4 h-4 text-white absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 19L19 5" />
                            <path d="M9 5h10v10" />
                          </svg>
                        </span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 rounded-full transition-all duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 rounded-full transition-all duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dots indicator */}
            <div className="flex justify-center mt-4 space-x-2">
              {containers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    currentSlide === index ? 'bg-black' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Container 3 - Desktop view */}
          <div 
            className="hidden md:flex bg-black p-8 rounded-lg bg-cover bg-center min-h-[352px] flex-col justify-between relative overflow-hidden"
            style={{ backgroundImage: "url('/WhatsKallinaSection/SecondContainerImageBackgroundWhatsKallinaSection.png')" }}
          >
            {/* Big number 3 background */}
            <span className="absolute inset-0 pointer-events-none select-none z-0 flex items-end justify-start">
              <span className="text-white/10 font-extrabold leading-none" style={{ fontSize: '28rem', lineHeight: 1, position: 'absolute', left: '5rem', bottom: '-11rem' }}>3</span>
            </span>
            <div className="relative z-10 max-w-md text-left">
              <h2 className="text-white text-3xl font-bold mb-2">Never Miss a Call</h2>
              <p className="text-white text-lg md:text-xl mb-4">Our AI agents replace traditional operators, ensuring no call is missed and every customer receives instant, professional assistance.</p>
            </div>
            <div className="flex justify-end relative z-10">
              <button className="bg-white text-black font-semibold px-6 py-2 rounded-full shadow transition-colors duration-200 hover:bg-black hover:text-white border border-black flex items-center gap-2 group relative overflow-visible" style={{ top: '-10px', left: '-10px', position: 'relative' }}>
                Learn more
                {/* Arrow 1: animates on hover */}
                <span className="inline-block relative w-5 h-5">
                  {/* Arrow 1: disappears on hover */}
                  <svg className="w-5 h-5 absolute top-0 left-0 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:opacity-0 group-hover:translate-x-4 group-hover:-translate-y-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 19L19 5" />
                    <path d="M9 5h10v10" />
                  </svg>
                  {/* Arrow 2: appears in the same spot as Arrow 1 on hover */}
                  <svg className="w-5 h-5 text-white absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 19L19 5" />
                    <path d="M9 5h10v10" />
                  </svg>
                </span>
              </button>
            </div>
          </div>

          {/* Container 4 - Desktop view */}
          <div 
            className="hidden md:flex bg-black p-8 rounded-lg bg-cover bg-center min-h-[352px] flex-col justify-between relative overflow-hidden"
            style={{ backgroundImage: "url('/WhatsKallinaSection/ThirdContainerImageBackgroundWhatsKallinaSection.png')" }}
          >
            {/* Big number 2 background */}
            <span className="absolute inset-0 pointer-events-none select-none z-0 flex items-end justify-start">
              <span className="text-white/10 font-extrabold leading-none" style={{ fontSize: '28rem', lineHeight: 1, position: 'absolute', left: '5rem', bottom: '-11rem' }}>2</span>
            </span>
            <div className="relative z-10 max-w-md text-left">
              <h2 className="text-white text-3xl font-bold mb-2">Focus on What Matters</h2>
              <p className="text-white text-lg md:text-xl mb-4">Let Kallina handle your company’s communications, so your team can focus on what matters most.</p>
            </div>
            <div className="flex justify-end relative z-10">
              <button className="bg-white text-black font-semibold px-6 py-2 rounded-full shadow transition-colors duration-200 hover:bg-black hover:text-white border border-black flex items-center gap-2 group relative overflow-visible" style={{ top: '-10px', left: '-10px', position: 'relative' }}>
                Learn more
                {/* Arrow 1: animates on hover */}
                <span className="inline-block relative w-5 h-5">
                  {/* Arrow 1: disappears on hover */}
                  <svg className="w-5 h-5 absolute top-0 left-0 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:opacity-0 group-hover:translate-x-4 group-hover:-translate-y-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 19L19 5" />
                    <path d="M9 5h10v10" />
                  </svg>
                  {/* Arrow 2: appears in the same spot as Arrow 1 on hover */}
                  <svg className="w-5 h-5 text-white absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 19L19 5" />
                    <path d="M9 5h10v10" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsKallinaSection;
