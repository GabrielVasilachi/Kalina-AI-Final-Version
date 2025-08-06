'use client'
import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '@/lib/i18n'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface VideoContent {
  title: string
  description: string
  videoPath: string
}

interface AnimationStep {
  title: string
  subtitle: string
  description: string
  video: VideoContent
}

export function AnalyticsShowcaseSection() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const rightSideRef = useRef<HTMLDivElement>(null)
  const videoContainerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)
  const lastState = useRef(false)
  const [currentStep, setCurrentStep] = useState(0)
  const isTransitioningRef = useRef(false)

  // Animation steps with single video content
  const animationSteps: AnimationStep[] = [
    {
      title: 'Empower Your Agents',
      subtitle: 'AI-Powered Agent Assistance',
      description: 'Transform your communication agents into productivity powerhouses with real-time AI support, intelligent call routing, and automated workflows that boost performance and customer satisfaction.',
      video: {
        title: 'Agent Performance Dashboard',
        description: 'Real-time agent metrics and AI assistance tools',
        videoPath: '/AnalyticsShowcase/DashboardKallina.png'
      }
    },
    {
      title: 'Performance Analytics',
      subtitle: 'Advanced Agent Metrics',
      description: 'Track agent performance with comprehensive analytics. Monitor call quality, conversion rates, response times, and customer satisfaction to identify top performers and coaching opportunities.',
      video: {
        title: 'Agent Analytics Suite',
        description: 'Detailed performance tracking and insights dashboard',
        videoPath: '/AnalyticsShowcase/2testVideo.mp4'
      }
    },
    {
      title: 'Customer Connection',
      subtitle: 'Enhanced Agent Experience',
      description: 'Equip your agents with advanced CRM integration, intelligent call scripting, and real-time customer data to deliver personalized experiences that drive results.',
      video: {
        title: 'Agent CRM Integration',
        description: 'Customer interaction tools and agent workflow optimization',
        videoPath: '/AnalyticsShowcase/3testVideo.mp4'
      }
    },
    {
      title: 'Team Collaboration',
      subtitle: 'Connected Agent Network',
      description: 'Enable seamless collaboration between agents with integrated communication tools, knowledge sharing platforms, and team management features across all channels.',
      video: {
        title: 'Agent Collaboration Platform',
        description: 'Team coordination and communication management interface',
        videoPath: '/AnalyticsShowcase/4testVideo.mp4'
      }
    }
  ]

  // Header color change logic
  useEffect(() => {
    const handle = () => {
      const ref = sectionRef.current;
      if (!ref) return;
      const rect = ref.getBoundingClientRect();
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
    setTimeout(handle, 10);
    return () => {
      window.removeEventListener('scroll', handle);
      window.dispatchEvent(new CustomEvent('headerOverDemo', { detail: { isOver: false } }));
    };
  }, []);

  // GSAP ScrollTrigger for pinning right side and step transitions
  useEffect(() => {
    if (typeof window !== 'undefined' && rightSideRef.current && sectionRef.current) {
      const rightSide = rightSideRef.current;
      const section = sectionRef.current;

      // Pin the right side
      ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: 'bottom bottom',
        pin: rightSide,
        pinSpacing: false,
      });

      // Create scroll-triggered step changes
      animationSteps.forEach((step, index) => {
        const stepElement = document.getElementById(`step-${index}`);
        if (stepElement) {
          ScrollTrigger.create({
            trigger: stepElement,
            start: 'top center',
            end: 'bottom center',
            onEnter: () => {
              console.log(`Entering step ${index}, current: ${currentStep}`); // Debug log
              if (!isTransitioningRef.current) {
                setCurrentStep(index);
                // Add small delay to ensure state update
                setTimeout(() => transitionToStep(index), 50);
              }
            },
            onEnterBack: () => {
              console.log(`Entering back step ${index}, current: ${currentStep}`); // Debug log
              if (!isTransitioningRef.current) {
                setCurrentStep(index);
                // Add small delay to ensure state update
                setTimeout(() => transitionToStep(index), 50);
              }
            }
          });
        }
      });

      return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    }
  }, []); // Remove currentStep dependency to avoid recreation

  const transitionToStep = (stepIndex: number) => {
    if (!videoRef.current || isTransitioningRef.current) {
      return;
    }
    
    console.log(`Transitioning to step ${stepIndex}`); // Debug log
    isTransitioningRef.current = true;
    
    const video = videoRef.current;
    const newStep = animationSteps[stepIndex];
    
    // Always proceed with transition, don't check if it's the same step
    // Check if video source is already the correct one
    const currentSrc = video.src.split('/').pop(); // Get filename from full URL
    const newSrc = newStep.video.videoPath.split('/').pop(); // Get filename from path
    
    if (currentSrc === newSrc) {
      console.log(`Video already showing: ${newSrc}`);
      isTransitioningRef.current = false;
      return;
    }
    
    console.log(`Changing from ${currentSrc} to ${newSrc}`);
    
    // Fade out current video
    gsap.to(video, {
      opacity: 0,
      duration: 0.4,
      ease: 'power2.out',
      onComplete: () => {
        // Change video source
        video.src = newStep.video.videoPath;
        
        // Handle video load
        const handleCanPlay = () => {
          video.removeEventListener('canplay', handleCanPlay);
          
          // Fade in new video
          gsap.to(video, {
            opacity: 1,
            duration: 0.4,
            ease: 'power2.out',
            onComplete: () => {
              isTransitioningRef.current = false;
            }
          });
        };
        
        const handleError = () => {
          video.removeEventListener('error', handleError);
          console.error(`Failed to load video: ${newStep.video.videoPath}`);
          
          // Still fade back in even if video fails to load
          gsap.to(video, {
            opacity: 1,
            duration: 0.4,
            ease: 'power2.out',
            onComplete: () => {
              isTransitioningRef.current = false;
            }
          });
        };
        
        video.addEventListener('canplay', handleCanPlay, { once: true });
        video.addEventListener('error', handleError, { once: true });
        
        // Load the new video
        video.load();
      }
    });
  };

  // Initialize first step
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (currentStep === 0 && imageRef.current) {
        imageRef.current.src = animationSteps[0].video.videoPath;
      } else if (currentStep !== 0 && videoRef.current) {
        videoRef.current.src = animationSteps[currentStep].video.videoPath;
        videoRef.current.load();
      }
    }
  }, []);

  const { t } = useLanguage();

  return (
    <section ref={sectionRef} className="bg-black text-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex">
          {/* Left side - Scrolling content */}
          <div className="w-1/2 pr-16">
            {/* Hero Section */}
            <div className="min-h-screen flex items-center justify-center py-20">
              <div className="space-y-8">
                <div className="text-sm font-medium text-gray-400 uppercase tracking-wider">
                  Agent Solutions Platform
                </div>
                <h1 className="text-6xl font-bold text-white leading-tight">
                  Supercharge your
                  <br />
                  <span className="text-gray-300">
                    communication agents with AI
                  </span>
                </h1>
                <p className="text-xl text-gray-400 leading-relaxed">
                  Transform your agent productivity with intelligent automation, real-time performance insights, and seamless customer interaction tools designed for modern communication teams.
                </p>
              </div>
            </div>

            {/* Steps Sections */}
            {animationSteps.map((step, index) => (
              <div key={index} id={`step-${index}`} className="min-h-screen py-20 flex items-center">
                <div className="space-y-8">
                  <div>
                    <div className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">
                      {step.subtitle}
                    </div>
                    <h2 className="text-5xl font-bold text-white mb-6 leading-tight">
                      {step.title}
                    </h2>
                    <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
                      {step.description}
                    </p>
                  </div>

                  {/* Feature points */}
                  <div className="space-y-4 max-w-lg">
                    <div className="border-l-2 border-gray-800 pl-6">
                      <h3 className="text-lg font-semibold text-white mb-2">
                        AI-Powered Assistance
                      </h3>
                      <p className="text-gray-400">
                        Real-time AI support helps agents handle complex customer inquiries efficiently
                      </p>
                    </div>
                    <div className="border-l-2 border-gray-800 pl-6">
                      <h3 className="text-lg font-semibold text-white mb-2">
                        Performance Optimization
                      </h3>
                      <p className="text-gray-400">
                        Track and improve agent performance with detailed analytics and coaching tools
                      </p>
                    </div>
                    <div className="border-l-2 border-gray-800 pl-6">
                      <h3 className="text-lg font-semibold text-white mb-2">
                        Customer Satisfaction
                      </h3>
                      <p className="text-gray-400">
                        Deliver exceptional customer experiences with personalized interaction tools
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right side - Fixed video container */}
          <div ref={rightSideRef} className="w-1/2 pl-16">
            <div className="h-screen flex items-center justify-center">
              <div ref={videoContainerRef} className="w-full max-w-4xl">
                {/* Video player with ref */}
                {/* Video or image player with ref */}
                {currentStep === 0 ? (
                  <img
                    ref={imageRef}
                    src={animationSteps[0].video.videoPath}
                    alt={animationSteps[0].video.title}
                    className="w-full h-auto rounded-2xl shadow-2xl object-cover"
                  />
                ) : (
                  <video
                    ref={videoRef}
                    className="w-full h-auto rounded-2xl shadow-2xl"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  >
                    Your browser does not support the video tag.
                  </video>
                )}

                {/* Current step indicator */}
                <div className="flex justify-center space-x-2 mt-6">
                  {animationSteps.map((_, index) => (
                    <div
                      key={index}
                      className={`h-1 w-8 rounded-full transition-all duration-500 ${
                        index === currentStep ? 'bg-white' : 'bg-gray-700'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Minimal background effects */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl"></div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .flex {
            flex-direction: column;
          }
          
          .w-1\\/2 {
            width: 100%;
          }
          
          .pr-16, .pl-16 {
            padding-left: 1rem;
            padding-right: 1rem;
          }
          
          .text-5xl {
            font-size: 2.5rem;
          }
          
          .text-6xl {
            font-size: 3rem;
          }
        }

        @media (max-width: 768px) {
          .min-h-screen {
            min-height: 80vh;
          }
          
          .py-20 {
            padding-top: 3rem;
            padding-bottom: 3rem;
          }
          
          .text-5xl {
            font-size: 2.25rem;
          }
          
          .text-6xl {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </section>
  )
}