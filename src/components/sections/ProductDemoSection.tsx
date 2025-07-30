'use client'

import React from 'react';
import Silk from '../../../BackgroundSilk/Silk/Silk';
import { useLanguage } from '@/lib/i18n'

type AnimatedPathProps = {
  d: string;
  stroke?: string;
  strokeWidth?: number;
  fill?: string;
  opacity?: number;
  duration?: number;
};

const AnimatedPath: React.FC<AnimatedPathProps> = ({ d, stroke, strokeWidth, fill, opacity, duration = 800 }) => {
  const pathRef = React.useRef<SVGPathElement | null>(null);
  React.useEffect(() => {
    const path = pathRef.current;
    if (!path) return;
    const length = path.getTotalLength();
    path.style.transition = 'none';
    path.style.strokeDasharray = `${length}`;
    path.style.strokeDashoffset = `${length}`;
    // Force reflow
    void path.getBoundingClientRect();
    path.style.transition = `stroke-dashoffset ${duration}ms cubic-bezier(0.4,0,0.2,1)`;
    path.style.strokeDashoffset = '0';
  }, [d, duration]);
  return (
    <path
      ref={pathRef}
      d={d}
      stroke={stroke}
      strokeWidth={strokeWidth}
      fill={fill}
      opacity={opacity}
      style={{}}
    />
  );
};

import { useScrollAnimationReveal } from '@/hooks/useScrollAnimationReveal'

import { useState, useEffect, useRef, useLayoutEffect } from 'react'


export function ProductDemoSection() {
  // Map agent voices to Silk colors
  const silkColors = [
    '#EF4444', // Lili - Red
    '#F59E42', // Eric - Orange
    '#7B7481', // Kallina - Gray
    '#EC4899', // Alexandra - Pink
  ];

  function getSilkColor() {
    // Use selectedVoiceRight to pick the color from silkColors
    if (selectedVoiceRight === null) {
      return '#7B7481'; // Default Gray when no agent selected
    }
    if (selectedVoiceRight >= 0 && selectedVoiceRight < silkColors.length) {
      return silkColors[selectedVoiceRight];
    }
    return '#7B7481'; // Fallback
  }
  // Utility function to get button size classes based on screen width
  function getSwitcherButtonClasses() {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;
      if (width < 400) {
        return 'px-2 py-1 text-[9px]';
      } else if (width < 600) {
        return 'px-3 py-1 text-[10px]';
      } else if (width < 900) {
        return 'px-4 py-2 text-sm';
      } else {
        return 'px-6 py-2 text-base';
      }
    }
    // Default for SSR
    return 'px-4 py-2 text-sm';
  }

  // State to trigger re-render on resize
  const [screenWidth, setScreenWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const [activeTab, setActiveTab] = useState<'conversation' | 'calendar' | 'magicbutton'>('conversation');
  const { t } = useLanguage();
  
  // Magic Button specific state
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisProgress, setAnalysisProgress] = useState(0);
  const [analysisSteps, setAnalysisSteps] = useState([
    { id: 1, text: 'Analizez istoricul conversațiilor', completed: false, current: false },
    { id: 2, text: 'Identific patternuri și tendințe', completed: false, current: false },
    { id: 3, text: 'Segmentez contactele', completed: false, current: false },
    { id: 4, text: 'Generez campanii personalizate', completed: false, current: false },
    { id: 5, text: 'Optimizez timing și mesaje', completed: false, current: false }
  ]);
  
  // Calendar-specific state
  const [selectedDate, setSelectedDate] = useState(15);
  const [aiMessages, setAiMessages] = useState([
    { from: 'ai', text: 'Bună! Cu ce te pot ajuta astăzi?' },
    { from: 'user', text: 'Aș vrea să reprogramez întâlnirea pentru 22 iulie.' },
    { from: 'ai', text: 'Sigur! Am actualizat calendarul pentru 22 iulie. Mai pot face ceva pentru tine?' }
  ]);

  // Handle calendar date clicks
  const handleDateClick = (day: number) => {
    setSelectedDate(day);
    setAiMessages([
      ...aiMessages,
      { from: 'user', text: `Aș vrea să reprogramez întâlnirea pentru ${day} iulie.` },
      { from: 'ai', text: `Perfect! Întâlnirea a fost mutată pe ${day} iulie.` }
    ]);
  };

  // Handle Magic Button AI Analysis
  const handleMagicButtonClick = async () => {
    if (isAnalyzing) return;
    
    setIsAnalyzing(true);
    setAnalysisProgress(0);
    
    // Reset all steps
    setAnalysisSteps(steps => steps.map(step => ({ ...step, completed: false, current: false })));
    
    // Simulate AI analysis process
    for (let i = 0; i < analysisSteps.length; i++) {
      // Mark current step as active
      setAnalysisSteps(steps => steps.map((step, index) => ({
        ...step,
        current: index === i,
        completed: index < i
      })));
      
      // Simulate processing time (2-4 seconds per step)
      const processingTime = 2000 + Math.random() * 2000;
      await new Promise(resolve => setTimeout(resolve, processingTime));
      
      // Update progress
      setAnalysisProgress(((i + 1) / analysisSteps.length) * 100);
      
      // Mark step as completed
      setAnalysisSteps(steps => steps.map((step, index) => ({
        ...step,
        current: false,
        completed: index <= i
      })));
    }
    
    // Complete the analysis
    setTimeout(() => {
      setIsAnalyzing(false);
      setAnalysisProgress(100);
    }, 500);
  };

  // Ref pentru butonul selectat și microfon
  const selectedCompanyRef = useRef<HTMLButtonElement>(null)
  const micRef = useRef<HTMLButtonElement>(null)
  type CompanyCurve = {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    width: number;
    height: number;
    curveOffset?: number;
  };
  const [curve, setCurve] = useState<CompanyCurve | null>(null)
  // No company selected by default
  const [selectedCompanyLeft, setSelectedCompanyLeft] = useState<number | null>(null) // No company selected by default
  const selectedVoiceRightRef = useRef<HTMLButtonElement>(null)
  const [voiceCurve, setVoiceCurve] = useState<
    | { x1: number; y1: number; x2: number; y2: number; width: number; height: number; curveOffset?: number }
    | null
  >(null)
  const [selectedVoiceRight, setSelectedVoiceRight] = useState<number | null>(null) // No agent selected by default
  // ...all useState and useRef declarations...
  // ...state declarations...
  // (all useState/useRef declarations go here)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isRecording, setIsRecording] = useState(false)
  const [audioLevel, setAudioLevel] = useState(0)
  // Removed isHeaderOverDemo state
  const [conversationStatus, setConversationStatus] = useState<string>('')
  const [error, setError] = useState<string>('')
  const [selectedVoice, setSelectedVoice] = useState(0)
  const [selectedVoiceLeft, setSelectedVoiceLeft] = useState(0)
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null);
  const lastScrollY = useRef<number>(typeof window !== 'undefined' ? window.scrollY : 0);
  const { ref, classes, isVisible } = useScrollAnimationReveal('up')
  const sectionRef = useRef<HTMLElement>(null)
  // Calculate curve for selected company option
  useLayoutEffect(() => {
    function updateCurve() {
      if (
        selectedCompanyLeft !== null &&
        selectedCompanyRef.current &&
        micRef.current &&
        sectionRef.current
      ) {
        const companyRect = selectedCompanyRef.current.getBoundingClientRect();
        const micRect = micRef.current.getBoundingClientRect();
        const sectionRect = sectionRef.current.getBoundingClientRect();
        const isMobile = window.innerWidth < 640;
        if (isMobile) {
          // Mobile: Companies start from center of selected item to center of microphone
          const x1 = companyRect.left + companyRect.width * 0.5 - sectionRect.left;
          const y1 = companyRect.top + companyRect.height * 0.5 - sectionRect.top - 100; // Increased Y start position for mobile
          const x2 = micRect.left + micRect.width * 0.5 - sectionRect.left;
          const y2 = micRect.top + micRect.height * 0.5 - sectionRect.top - 100;
          setCurve({
            x1,
            y1,
            x2,
            y2,
            width: sectionRect.width,
            height: sectionRect.height,
            curveOffset: 50 // Default curve offset
          });
        } else {
          // Desktop: Center-to-center line positioning
          console.log('Desktop mode - calculating center-to-center positions');
          
          // Calculate absolute center of company button
          const companyX = companyRect.left + (companyRect.width / 2);
          const companyY = companyRect.top + (companyRect.height / 2);
          
          // Calculate absolute center of microphone
          const micX = micRect.left + (micRect.width / 2);
          const micY = micRect.top + (micRect.height / 2);
          
          // Convert to relative coordinates within section
          const x1 = companyX - sectionRect.left + 50;
          const y1 = companyY - sectionRect.top - 140;
          const x2 = micX - sectionRect.left - 120;
          const y2 = micY - sectionRect.top - 140;
          
          console.log('Desktop curve calculation:', {
            selectedCompanyLeft,
            companyButton: { x: companyX, y: companyY, rect: companyRect },
            microphone: { x: micX, y: micY, rect: micRect },
            section: { left: sectionRect.left, top: sectionRect.top },
            finalCoords: { x1, y1, x2, y2 }
          });
          
          setCurve({
            x1,
            y1,
            x2,
            y2,
            width: sectionRect.width,
            height: sectionRect.height,
            curveOffset: 120 // Increased curve for desktop mode
          });
        }
      } else {
        setCurve(null);
      }
    }
    updateCurve()
    window.addEventListener('resize', updateCurve)
    return () => window.removeEventListener('resize', updateCurve)
  }, [selectedCompanyLeft, isRecording])

    // Voice options with exact MistralAI voice IDs provided by user
  const voiceOptions = [
    { name: 'Lili'},
    { name: 'Eric'},
    { name: 'Kallina'},
    { name: 'Alexandra'},
  ] as const
  
  const Companies = [
    { name: t('companies.restaurant')},
    { name: t('companies.clinic')},
    { name: t('companies.autoService')},
    { name: t('companies.travelAgency')},
  ] as const

  // Handle voice selection navigation with smooth animations
  const handleVoiceSelect = (direction: 'next' | 'prev') => {
    setSelectedVoice((prev) => {
      if (direction === 'next') {
        return prev >= voiceOptions.length - 1 ? 0 : prev + 1
      } else {
        return prev <= 0 ? voiceOptions.length - 1 : prev - 1
      }
    })
  }

  // Reset function to clear all states
  const resetDemoState = () => {
    setIsRecording(false)
    setError('')
    setConversationStatus('')
    setAudioLevel(0)
  }

  useEffect(() => {
    const handleScroll = () => {
      // Only detect scroll direction, no header overlap logic
      const currentY = window.scrollY;
      if (currentY > lastScrollY.current) {
        setScrollDirection('down');
      } else if (currentY < lastScrollY.current) {
        setScrollDirection('up');
      }
      lastScrollY.current = currentY;
    };
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll)
      handleScroll() // Check initial state
    }
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  // Removed header overlap effect

  // Handle demo click - purely visual demo without backend
  const handleDemoClick = async () => {
    if (!isRecording) {
      // Visual demo mode only
      setIsRecording(true)
      setConversationStatus(`Demo vizual cu ${voiceOptions[selectedVoice].name}...`)
      
      // Simulate demo conversation
      setTimeout(() => {
        setConversationStatus('Simulare ascultare...')
      }, 1000)
      
      setTimeout(() => {
        setConversationStatus('Simulare răspuns AI...')
      }, 3000)
      
      setTimeout(() => {
        setConversationStatus('Demo complet!')
        setTimeout(() => {
          setIsRecording(false)
          setConversationStatus('')
        }, 2000)
      }, 5000)
      
    } else {
      // Stop demo
      setIsRecording(false)
      setAudioLevel(0)
      setError('')
      setConversationStatus('')
    }
  }

  // Calculate voice curve for selected voice option
  useLayoutEffect(() => {
    function updateVoiceCurve() {
      if (
        selectedVoiceRight !== null &&
        selectedVoiceRightRef.current &&
        micRef.current &&
        sectionRef.current
      ) {
        const voiceRect = selectedVoiceRightRef.current.getBoundingClientRect();
        const micRect = micRef.current.getBoundingClientRect();
        const sectionRect = sectionRef.current.getBoundingClientRect();
        const isMobile = window.innerWidth < 640;
        
        if (isMobile) {
          // Mobile: Agents start from top center of button to center of microphone
          const x1 = voiceRect.left + voiceRect.width * 0.5 - sectionRect.left;
          const y1 = voiceRect.top - sectionRect.top - 100; // Top edge of button minus offset
          const x2 = micRect.left + micRect.width * 0.5 - sectionRect.left;
          const y2 = micRect.top + micRect.height * 0.5 - sectionRect.top - 100;
          setVoiceCurve({
            x1,
            y1,
            x2,
            y2,
            width: sectionRect.width,
            height: sectionRect.height,
            curveOffset: 50 // Default curve offset
          });
        } else {
          // Desktop: Center-to-center line positioning
          console.log('Desktop mode - calculating voice center-to-center positions');
          
          // Calculate absolute center of voice button
          const voiceX = voiceRect.left + (voiceRect.width / 2);
          const voiceY = voiceRect.top + (voiceRect.height / 2);
          
          // Calculate absolute center of microphone
          const micX = micRect.left + (micRect.width / 2);
          const micY = micRect.top + (micRect.height / 2);
          
          // Convert to relative coordinates within section
          const x1 = voiceX - sectionRect.left - 40;
          const y1 = voiceY - sectionRect.top - 150;
          const x2 = micX - sectionRect.left + 120;
          const y2 = micY - sectionRect.top - 140;

          console.log('Desktop voice curve calculation:', {
            selectedVoiceRight,
            voiceButton: { x: voiceX, y: voiceY, rect: voiceRect },
            microphone: { x: micX, y: micY, rect: micRect },
            section: { left: sectionRect.left, top: sectionRect.top },
            finalCoords: { x1, y1, x2, y2 }
          });
          
          setVoiceCurve({
            x1,
            y1,
            x2,
            y2,
            width: sectionRect.width,
            height: sectionRect.height,
            curveOffset: 50
          });
        }
      } else {
        setVoiceCurve(null);
      }
    }
    updateVoiceCurve()
    window.addEventListener('resize', updateVoiceCurve)
    return () => window.removeEventListener('resize', updateVoiceCurve)
  }, [selectedVoiceRight, isRecording])

  return (
    <section id="demo" ref={sectionRef} className="bg-white py-6 md:py-8">
      {/* Switcher buttons */}
      <div className="flex justify-center gap-4 mb-8">
        <button
          className={`rounded-full font-semibold border-2 transition-all duration-200 ${
            activeTab === 'conversation'
              ? 'bg-black text-white border-black'
              : 'bg-white text-black border-gray-300 hover:border-gray-400'
          } ${getSwitcherButtonClasses()}`}
          onClick={() => setActiveTab('conversation')}
        >
          Conversation AI
        </button>
        <button
          className={`rounded-full font-semibold border-2 transition-all duration-200 ${
            activeTab === 'calendar'
              ? 'bg-black text-white border-black'
              : 'bg-white text-black border-gray-300 hover:border-gray-400'
          } ${getSwitcherButtonClasses()}`}
          onClick={() => setActiveTab('calendar')}
        >
          Calendar AI
        </button>
        <button
          className={`rounded-full font-semibold border-2 transition-all duration-200 ${
            activeTab === 'magicbutton'
              ? 'bg-black text-white border-black'
              : 'bg-white text-black border-gray-300 hover:border-gray-400'
          } ${getSwitcherButtonClasses()}`}
          onClick={() => setActiveTab('magicbutton')}
        >
          Magic Button
        </button>
      </div>
      
      {/* Content Container with smooth transitions */}
      <div className="relative overflow-hidden">
        {/* Conversation AI Content */}
        <div 
          className={`transition-all duration-500 ease-in-out ${
            activeTab === 'conversation' 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 -translate-x-full absolute inset-0 pointer-events-none'
          }`}
        >
        <div className="relative bg-gray-200 py-8 md:py-10">
          {/* Top white to gray fade overlay */}
          <div className="absolute left-0 top-0 w-full h-24 pointer-events-none z-0 border-none" style={{
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.99) 0%, rgba(229,231,235,1) 100%)',
          }} />
          {/* Bottom blur/fade overlay */}
          <div className="absolute left-0 bottom-0 w-full h-24 pointer-events-none z-0 border-none" style={{
            background: 'linear-gradient(to top, rgba(255,255,255,0.99) 0%, rgba(229,231,235,1) 100%)',
          }} />
          <div ref={ref} style={{ position: 'relative' }}>
        {/* SVG lines moved below content to avoid interfering with text */}
        <div style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }}>
          {curve && selectedCompanyLeft !== null && (
            <svg
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                pointerEvents: 'none',
                width: curve.width,
                height: curve.height,
              }}
              width={curve.width}
              height={curve.height}
            >
              {window.innerWidth < 640 ? (
                // Mobile: curve from bottom of company, curve up to mic center
                <AnimatedPath
                  d={`M ${curve.x1} ${curve.y1} C ${curve.x1} ${curve.y1 + ((curve.y2 - curve.y1) / 2)}, ${curve.x2} ${curve.y2 - ((curve.y2 - curve.y1) / 2)}, ${curve.x2} ${curve.y2}`}
                  stroke="black"
                  strokeWidth={3}
                  fill="none"
                  opacity={0.7}
                  duration={800}
                />
              ) : (
                // Desktop: original horizontal curve
                <AnimatedPath
                  d={`M ${curve.x1} ${curve.y1} C ${curve.x1 + (curve.curveOffset ?? 120)} ${curve.y1}, ${curve.x2 - (curve.curveOffset ?? 120)} ${curve.y2}, ${curve.x2} ${curve.y2}`}
                  stroke="black"
                  strokeWidth={3}
                  fill="none"
                  opacity={0.7}
                  duration={800}
                />
              )}
            </svg>
          )}
          {voiceCurve && selectedVoiceRight !== null && (
            <svg
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                pointerEvents: 'none',
                width: voiceCurve.width,
                height: voiceCurve.height,
              }}
              width={voiceCurve.width}
              height={voiceCurve.height}
            >
              {window.innerWidth < 640 ? (
                // Mobile: curve using curveOffset from agentVoicesMobileLineConfig
                <AnimatedPath
                  d={`M ${voiceCurve.x1} ${voiceCurve.y1} C ${voiceCurve.x1 + (voiceCurve.curveOffset ?? 50)} ${voiceCurve.y1}, ${voiceCurve.x2 - (voiceCurve.curveOffset ?? 50)} ${voiceCurve.y2}, ${voiceCurve.x2} ${voiceCurve.y2}`}
                  stroke="black"
                  strokeWidth={3}
                  fill="none"
                  opacity={0.7}
                  duration={800}
                />
              ) : (
                <AnimatedPath
                  d={`M ${voiceCurve.x1} ${voiceCurve.y1} C ${voiceCurve.x1 - 80} ${voiceCurve.y1}, ${voiceCurve.x2 + 80} ${voiceCurve.y2}, ${voiceCurve.x2} ${voiceCurve.y2}`}
                  stroke="black"
                  strokeWidth={3}
                  fill="none"
                  opacity={0.7}
                  duration={800}
                />
              )}
            </svg>
          )}
        </div>
      {/* Close the previously opened <div ref={ref} ...> */}
      </div>
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div
            className="border border-transparent rounded-lg overflow-hidden bg-transparent"
            style={{
              marginLeft: 'auto',
              marginRight: 'auto',
              width: '100%',
              maxWidth: '1000px',
              minHeight: '400px',
              height: 'auto',
              boxSizing: 'border-box',
            }}
          >
            {/* Header Section */}
            <div className="text-center mb-10 mt-8 sm:mb-16 sm:mt-11 px-2">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-black mb-3 sm:mb-4">
                {t('demoSection.title')}
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                {t('demoSection.description')}
              </p>
            </div>

            {/* Voice Selection */}
            {!isRecording && (
              <div className="mb-8 sm:mb-12 flex flex-col sm:flex-row items-center justify-between gap-8 sm:gap-0 px-2 sm:px-6 w-full">
                {/* Companies on the left */}
                <div className="flex flex-row sm:flex-col gap-2 sm:gap-4 items-start sm:pr-6 w-full sm:w-auto justify-center" style={{zIndex: 10, position: 'relative'}}>
                  {Companies.map((company, idx) => (
                    <button
                      key={idx}
                      ref={selectedCompanyLeft === idx ? selectedCompanyRef : undefined}
                      onClick={() => setSelectedCompanyLeft(idx)}
                      className={`px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-full border-2 transition-all duration-200 font-medium text-xs sm:text-sm md:text-base ${
                        selectedCompanyLeft === idx
                          ? 'bg-black text-white border-black'
                          : selectedCompanyLeft === null
                            ? 'bg-white text-black border-gray-300 hover:border-gray-400 opacity-70'
                            : 'bg-white text-black border-gray-300 hover:border-gray-400'
                      }`}
                      style={{ minWidth: '80px', textAlign: 'center', position: 'relative', zIndex: 10 }}
                    >
                      <span style={{ position: 'relative', zIndex: 10 }}>{company.name}</span>
                    </button>
                  ))}
                </div>
                {/* Centered microphone */}
                <div className="flex flex-col items-center justify-center flex-1 w-full sm:w-auto" style={{position: 'relative'}}>
                  <button
                    ref={micRef}
                    onClick={handleDemoClick}
                    className={`relative rounded-full text-white transition-all duration-300 hover:scale-105 w-20 h-20 sm:w-28 sm:h-28 md:w-44 md:h-44 lg:w-56 lg:h-56 xl:w-64 xl:h-64 bg-transparent`}
                    style={{ margin: '0 0.5rem', overflow: 'hidden', padding: 0 }}
                  >
                    <div style={{position: 'absolute', inset: 0, borderRadius: '50%', overflow: 'hidden', zIndex: 100}}>
                      {/* Force Silk to re-mount when color changes to restart animation */}
                      <Silk key={selectedVoiceRight ?? 'default'} speed={5} scale={1.2} color={getSilkColor()} noiseIntensity={1.5} rotation={0.2} />
                    </div>
                    <svg className="w-10 h-10 sm:w-14 sm:h-14 md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-40 xl:h-40 mx-auto" style={{position: 'relative', zIndex: 200}} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
                    </svg>
                  </button>
                  {/* Removed text below microphone button for cleaner UI */}
                </div>
                {/* Agents on the right (independent selector) */}
                <div className="flex flex-row sm:flex-col gap-2 sm:gap-4 items-end sm:pl-6 w-full sm:w-auto justify-center" style={{zIndex: 10, position: 'relative'}}>
                  {[0,1,2,3].map((index) => (
                    <button
                      key={index}
                      ref={selectedVoiceRight === index ? selectedVoiceRightRef : undefined}
                      onClick={() => {
                        setSelectedVoiceRight(index);
                        setSelectedVoice(index); // Sync Silk color with selected agent
                      }}
                      className={`px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-full border-2 transition-all duration-200 font-medium text-xs sm:text-sm md:text-base ${
                        selectedVoiceRight === index 
                          ? 'bg-black text-white border-black' 
                          : selectedVoiceRight === null
                            ? 'bg-white text-black border-gray-300 hover:border-gray-400 opacity-70'
                            : 'bg-white text-black border-gray-300 hover:border-gray-400'
                      }`}
                      style={{ minWidth: '80px', textAlign: 'center', position: 'relative', zIndex: 10 }}
                    >
                      <span style={{ position: 'relative', zIndex: 10 }}>{voiceOptions[index].name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Demo Interface */}
            <div className="max-w-2xl mx-auto w-full px-2 sm:px-0">
              
              {/* Removed demo button and text below microphone */}

              {/* Status Messages */}
              <div className="text-center space-y-2 sm:space-y-4">
                {conversationStatus && (
                  <div className="px-4 py-2 bg-gray-100 border border-gray-200 rounded-lg">
                    <p className="text-black text-sm">{conversationStatus}</p>
                  </div>
                )}
                
                {error && (
                  <div className="px-4 py-2 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-700 text-sm mb-2">{error}</p>
                    <button 
                      onClick={resetDemoState}
                      className="text-red-600 text-xs underline hover:text-red-800 transition-colors"
                    >
                      Try again
                    </button>
                  </div>
                )}

                {isRecording && (
                  <div className="flex items-center justify-center space-x-2">
                    <div className={`w-2 h-2 sm:w-2 sm:h-2 rounded-full bg-green-500 animate-pulse`}></div>
                    <span className="text-gray-700 text-xs sm:text-sm">
                      Demo în curs cu {voiceOptions[selectedVoice].name}
                    </span>
                  </div>
                )}
              </div>
            </div>
            {/* Features List */}
              {!isRecording && (
                <div className="mt-10 sm:mt-16 w-full px-1 sm:px-4 relative">
                  {/* Fade overlays for left/right edges */}
                  <div className="pointer-events-none absolute left-0 top-0 h-full w-8 sm:w-16 z-10" style={{background: 'linear-gradient(to right, rgba(243,244,246,0.7) 60%, rgba(243,244,246,0) 100%)'}} />
                  <div className="pointer-events-none absolute right-0 top-0 h-full w-8 sm:w-16 z-10" style={{background: 'linear-gradient(to left, rgba(243,244,246,0.7) 60%, rgba(243,244,246,0) 100%)'}} />
                  <div className="overflow-x-auto custom-scrollbar">
                    <div className="flex gap-4 sm:gap-20 pb-4 min-w-max lg:justify-center px-2 sm:px-4 lg:px-0">
                      {[ 
                        { title: t('conversationAIFeatures.naturalConversations'), desc: t('conversationAIFeatures.naturalConversationsDesc') },
                        { title: t('conversationAIFeatures.realisticVoice'), desc: t('conversationAIFeatures.realisticVoiceDesc') },
                        { title: t('conversationAIFeatures.instantResponse'), desc: t('conversationAIFeatures.instantResponseDesc') },
                        { title: t('conversationAIFeatures.multilingual'), desc: t('conversationAIFeatures.multilingualDesc') },
                        { title: t('conversationAIFeatures.adaptive'), desc: t('conversationAIFeatures.adaptiveDesc') },
                        { title: t('conversationAIFeatures.secure'), desc: t('conversationAIFeatures.secureDesc') }
                      ].map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex-shrink-0 w-48 sm:w-64 text-center p-3 sm:p-6 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors duration-200 bg-white"
                        >
                          <h4 className="text-black font-semibold text-base sm:text-lg mb-1 sm:mb-2">{feature.title}</h4>
                          <p className="text-gray-600 text-xs sm:text-sm">{feature.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
          </div>
          </div>
          </div>
        </div>
        
        {/* Calendar AI Content */}
        <div 
          className={`transition-all duration-500 ease-in-out ${
            activeTab === 'calendar' 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 translate-x-full absolute inset-0 pointer-events-none'
          }`}
        >
          <div className="relative bg-blue-100 py-8 md:py-10">
          {/* Top white fade overlay */}
          <div className="absolute left-0 top-0 w-full h-24 pointer-events-none z-0 border-none" style={{
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.99) 0%, rgba(255,255,255,0.0) 100%)',
          }} />
          {/* Bottom blur/fade overlay */}
          <div className="absolute left-0 bottom-0 w-full h-24 pointer-events-none z-0 border-none" style={{
            background: 'linear-gradient(to top, rgba(255,255,255,0.99) 0%, rgba(255,255,255,0.0) 100%)',
          }} />
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              {/* Header */}
              <div className={`text-center mb-8 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}>
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 mt-9">
                  Revoluția Calendarului AI
                </h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                  Calendarul care gândește și acționează pentru tine cu AI avansat. Programează întâlniri doar vorbind cu asistentul tău digital.
                </p>
              </div>
              
              {/* AI Chat Simulation */}
              <div className="max-w-xl mx-auto mb-10">
                <div className="bg-gray-900 rounded-xl shadow-lg p-6 flex flex-col gap-3 animate-fade-in">
                  {aiMessages.map((msg, idx) => (
                    <div key={idx} className={`flex ${msg.from === 'ai' ? 'justify-start' : 'justify-end'}`}>
                      <div className={`px-4 py-2 rounded-2xl text-sm max-w-xs break-words shadow-md transition-all duration-300 ${
                        msg.from === 'ai'
                          ? 'bg-gradient-to-br from-blue-600 to-indigo-700 text-white'
                          : 'bg-white text-black border border-gray-200'
                      }`}>
                        {msg.text}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Animated Calendar */}
              <div className="flex flex-col items-center justify-center gap-8 mb-12 transition-all duration-1000 delay-200">
                <div className="w-full max-w-xl bg-white border border-gray-200 rounded-lg shadow p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold text-black">Iulie 2025</h3>
                    <div className="space-x-2">
                      <button className="bg-black text-white px-3 py-1 rounded hover:bg-gray-800 transition-colors duration-200">←</button>
                      <button className="bg-black text-white px-3 py-1 rounded hover:bg-gray-800 transition-colors duration-200">→</button>
                    </div>
                  </div>
                  <div className="grid grid-cols-7 gap-2 text-center">
                    {['D','L','Ma','Mi','J','V','S'].map(day => (
                      <div key={day} className="text-gray-500 font-medium">{day}</div>
                    ))}
                    {/* July 2025 starts on Tuesday (so 1 empty cell) */}
                    <div></div>
                    {Array.from({length: 31}, (_,i) => (
                      <div
                        key={i+1}
                        className={`py-2 rounded-lg cursor-pointer font-medium transition-all duration-300
                          ${selectedDate === i+1
                            ? 'bg-gradient-to-br from-blue-600 to-indigo-700 text-white scale-110 shadow-lg'
                            : 'text-black hover:bg-gray-100'}
                        `}
                        onClick={() => handleDateClick(i+1)}
                        style={{position:'relative'}}
                      >
                        {i+1}
                        {selectedDate === i+1 && (
                          <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full animate-bounce shadow">AI</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Call to action */}
              <div className={`text-center mt-4 transition-all duration-1000 delay-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}>
                <p className="text-gray-600 mb-6">
                  Calendar AI inteligent, orchestrare campanii, automatizare programări. Încearcă acum!
                </p>
                <a
                  href="/calendar-ai"
                  className="inline-block bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200"
                >
                  Află mai multe
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Magic Button Content */}
        <div 
          className={`transition-all duration-500 ease-in-out ${
            activeTab === 'magicbutton' 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 translate-x-full absolute inset-0 pointer-events-none'
          }`}
        >
          <div className="relative py-8 md:py-12 bg-gradient-to-br from-purple-50 to-pink-50">
          {/* Top white fade overlay for Magic Button */}
          <div className="absolute left-0 top-0 w-full h-24 pointer-events-none z-0 border-none" style={{
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.0) 100%)',
          }} />
          {/* Bottom blur/fade overlay for Magic Button */}
          <div className="absolute left-0 bottom-0 w-full h-24 pointer-events-none z-0 border-none" style={{
            background: 'linear-gradient(to top, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.0) 100%)',
          }} />
            {/* Animated background pattern */}
            {/* <div className="absolute inset-0 z-0 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-100/30 to-pink-100/30"></div>
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 25% 25%, #8B5CF6 0.5px, transparent 0.5px), 
                                 radial-gradient(circle at 75% 75%, #EC4899 0.5px, transparent 0.5px)`,
                backgroundSize: '30px 30px',
                opacity: 0.1
              }}></div>
            </div> */}
            
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              {/* Header */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                  Buton Fermecat
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">
                  Creator Inteligent de Campanii
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Funcția unică care analizează toate datele tale pentru a crea campanii personalizate și optimizate automat.
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-black">Analiză AI Avansată</h3>
                  </div>
                  <p className="text-gray-600">Procesez istoric conversații, patternuri de comportament și preferințe cliente</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-black">RAG & MCP Integration</h3>
                  </div>
                  <p className="text-gray-600">Folosesc toate sursele de date conectate pentru context complet</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 00-2 2v2m0 0V9a2 2 0 012-2m0 0V7a2 2 0 012-2h10a2 2 0 012 2v2M7 7V5a2 2 0 012-2h6a2 2 0 012 2v2" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-black">Segmentare Inteligentă</h3>
                  </div>
                  <p className="text-gray-600">Împart contactele în segmente pentru campanii ultra-personalizate</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-black">Optimizare Automată</h3>
                  </div>
                  <p className="text-gray-600">Aleg cel mai bun timing, agent și mesaj pentru fiecare contact</p>
                </div>
              </div>

              {/* Magic Button Action */}
              <div className="text-center mb-8">
                <button
                  onClick={handleMagicButtonClick}
                  disabled={isAnalyzing}
                  className={`inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 ${
                    isAnalyzing ? 'opacity-75 cursor-not-allowed' : 'hover:scale-105'
                  }`}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                  {isAnalyzing ? 'Activează Magia AI' : 'Activează Magia AI'}
                </button>
                <p className="text-gray-600 mt-4">
                  {isAnalyzing ? `Procesul va dura ${Math.ceil((100 - analysisProgress) / 20)} secunde pentru analiză completă` : 'Procesul va dura 10-15 secunde pentru analiză completă'}
                </p>
              </div>

              {/* Analysis Progress */}
              {(isAnalyzing || analysisProgress > 0) && (
                <div className="max-w-2xl mx-auto">
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-black">🔍 Analiză AI în progres...</h3>
                      <span className="text-sm text-gray-500">{Math.round(analysisProgress)}%</span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 rounded-full h-3 mb-6">
                      <div 
                        className="bg-gradient-to-r from-purple-600 to-pink-600 h-3 rounded-full transition-all duration-300 ease-out"
                        style={{ width: `${analysisProgress}%` }}
                      ></div>
                    </div>

                    {/* Analysis Steps */}
                    <div className="space-y-3">
                      {analysisSteps.map((step) => (
                        <div key={step.id} className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-300 ${
                          step.current ? 'bg-purple-50 border border-purple-200' : 
                          step.completed ? 'bg-green-50 border border-green-200' : 
                          'bg-gray-50 border border-gray-200'
                        }`}>
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                            step.completed ? 'bg-green-500 text-white' :
                            step.current ? 'bg-purple-500 text-white' :
                            'bg-gray-300 text-gray-600'
                          }`}>
                            {step.completed ? (
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            ) : step.current ? (
                              <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                            ) : (
                              <span className="text-xs">{step.id}</span>
                            )}
                          </div>
                          <span className={`text-sm font-medium ${
                            step.current ? 'text-purple-700' :
                            step.completed ? 'text-green-700' :
                            'text-gray-600'
                          }`}>
                            {step.text}
                          </span>
                          {step.current && (
                            <div className="ml-auto">
                              <div className="flex gap-1">
                                <div className="w-1 h-1 bg-purple-500 rounded-full animate-bounce"></div>
                                <div className="w-1 h-1 bg-purple-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                                <div className="w-1 h-1 bg-purple-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {analysisProgress === 100 && !isAnalyzing && (
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6 text-center">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-green-800 mb-2">Analiza completă!</h3>
                      <p className="text-green-700 mb-4">
                        Am generat 3 campanii personalizate și optimizate pentru audiența ta. Gata de lansare!
                      </p>
                      <button 
                        onClick={() => {
                          setAnalysisProgress(0);
                          setAnalysisSteps(steps => steps.map(step => ({ ...step, completed: false, current: false })));
                        }}
                        className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors"
                      >
                        Resetează Demo
                      </button>
                      <a href="/magic-button" className="ml-3 bg-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-purple-700 transition-colors inline-block">
                        Află mai multe
                      </a>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}