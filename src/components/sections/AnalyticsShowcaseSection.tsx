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

interface FeaturePoint {
  title: string;
  description: string;
}

interface AnimationStep {
  title: string;
  subtitle: string;
  description: string;
  video: VideoContent;
  features: FeaturePoint[];
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

  // Animation steps with images for first 2 sections, videos for others
  const animationSteps: AnimationStep[] = [
    {
      title: 'Stay on Top of Every Call',
      subtitle: 'REAL-TIME DASHBOARD INSIGHTS',
      description: 'Keep a pulse on your contact-center performance at a glance. See how many agents are online, track monthly call volumes, monitor average talk time, and spot sales trends—everything you need to coach faster, boost efficiency, and delight customers.',
      video: {
        title: 'Agent Performance Dashboard',
        description: 'Real-time agent metrics and AI assistance tools',
        videoPath: '/AnalyticsShowcase/DashboardImage.png'
      },
      features: [
        {
          title: 'Live Agent Overview',
          description: 'Instantly view how many agents are active and ready to take calls.'
        },
        {
          title: 'Call Volume & Talk Time',
          description: 'Track total calls this month and average talk-time minutes to allocate resources and cut wait times.'
        },
        {
          title: 'Performance & Sales Insights',
          description: 'Gauge efficiency scores, review sales-trend charts, and scan order summaries to uncover growth opportunities.'
        }
      ]
    },
    {
      title: 'All Your Customers, One Click Away',
      subtitle: 'SMART CLIENT MANAGEMENT',
      description: 'Give agents a single source of truth for every caller. Instantly search, add, or edit client records—from anywhere in the world—so conversations stay personal and follow-ups stay effortless.',
      video: {
        title: 'Agent Performance Dashboard',
        description: 'Real-time agent metrics and AI assistance tools',
        videoPath: '/AnalyticsShowcase/ClientsImage.png'
      },
      features: [
        {
          title: 'Unified Client Directory',
          description: 'Maintain a centralized list with names, emails, phone numbers, and addresses—no more scattered spreadsheets.'
        },
        {
          title: 'Instant Search & Add',
          description: 'Locate any contact in seconds or create a new profile with a single tap while still on the call.'
        },
        {
          title: 'One-Tap Editing',
          description: 'Update details in real time without leaving the screen, ensuring data is always fresh for the next interaction.'
        }
      ]
    },
    {
      title: 'Turn Raw Metrics into Actionable Insights',
      subtitle: 'ON-DEMAND PERFORMANCE REPORTING',
      description: 'Generate custom reports in seconds. Pick any date range, visualize KPIs in bar, pie, and trend charts, then export a polished PDF—perfect for quick coaching sessions or executive updates      .',
      video: {
        title: 'Agent Analytics Suite',
        description: 'Detailed performance tracking and insights dashboard',
        videoPath: '/AnalyticsShowcase/AnalyticsImage.png'
      },
      features: [
        {
          title: 'Flexible Date Filters',
          description: 'Select any start and end dates to focus on campaigns, seasons, or peak weeks.'
        },
        {
          title: 'Multi-Chart Dashboards',
          description: 'Compare key metrics side-by-side with bar, pie, and line visuals in one unified view.'
        },
        {
          title: 'One-Click PDF Export',
          description: 'Create presentation-ready reports instantly for managers, clients, or team reviews.'
        }
      ]
    },
    {
      title: 'Put Vital Details in Front of Every Rep',
      subtitle: 'CONTEXT-RICH AGENT CARDS',
      description: 'Instantly surface caller info—ID, status, contact details, and active offers—so agents can personalize the conversation and close faster.',
      video: {
        title: 'Agent CRM Integration',
        description: 'Customer interaction tools and agent workflow optimization',
        videoPath: '/AnalyticsShowcase/AgentsImage.png'
      },
      features: [
        {
          title: 'Instant Caller Snapshot',
          description: 'See assigned ID, call status, and customer name the moment the line connects.'
        },
        {
          title: 'Real-Time Contact Info',
          description: 'Auto-pull the customer’s primary phone number so follow-ups and transfers happen seamlessly.'
        },
        {
          title: 'Offer & Campaign Context',
          description: 'Highlight current promotions (e.g., Spring Promotion 2025) to upsell at exactly the right moment.'
        }
      ]
    },
    {
      title: 'Team Collaboration',
      subtitle: 'Connected Agent Network',
      description: 'Enable seamless collaboration between agents with integrated communication tools, knowledge sharing platforms, and team management features across all channels.',
      video: {
        title: 'Agent Collaboration Platform',
        description: 'Team coordination and communication management interface',
        videoPath: '/AnalyticsShowcase/CalendarImage.png'
      },
      features: [
        {
          title: 'Shared Knowledge Base',
          description: 'Agents can access and contribute to a central knowledge repository.'
        },
        {
          title: 'Internal Messaging',
          description: 'Chat and coordinate with teammates in real time.'
        },
        {
          title: 'Team Performance',
          description: 'Managers track team goals and collaboration metrics.'
        }
      ]
    }
  ];

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

  // GSAP ScrollTrigger for pinning right side and step transitions (desktop only)
  useEffect(() => {
    if (typeof window !== 'undefined' && rightSideRef.current && sectionRef.current && window.innerWidth >= 1024) {
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
    if (isTransitioningRef.current) {
      return;
    }
    
    console.log(`Transitioning to step ${stepIndex}`); // Debug log
    isTransitioningRef.current = true;
    
    const newStep = animationSteps[stepIndex];
    
    // For steps 0 and 1 (images)
    if (stepIndex === 0 || stepIndex === 1) {
      if (!imageRef.current) {
        isTransitioningRef.current = false;
        return;
      }
      
      const image = imageRef.current;
      const currentSrc = image.src.split('/').pop(); // Get filename from full URL
      const newSrc = newStep.video.videoPath.split('/').pop(); // Get filename from path
      
      if (currentSrc === newSrc) {
        console.log(`Image already showing: ${newSrc}`);
        isTransitioningRef.current = false;
        return;
      }
      
      console.log(`Changing image from ${currentSrc} to ${newSrc}`);
      
      // Fade out current image
      gsap.to(image, {
        opacity: 0,
        duration: 0.4,
        ease: 'power2.out',
        onComplete: () => {
          // Change image source
          image.src = newStep.video.videoPath;
          
          // Fade in new image
          gsap.to(image, {
            opacity: 1,
            duration: 0.4,
            ease: 'power2.out',
            onComplete: () => {
              isTransitioningRef.current = false;
            }
          });
        }
      });
    } 
    // For steps 2 and 3 (videos)
    else {
      if (!videoRef.current) {
        isTransitioningRef.current = false;
        return;
      }
      
      const video = videoRef.current;
      const currentSrc = video.src.split('/').pop(); // Get filename from full URL
      const newSrc = newStep.video.videoPath.split('/').pop(); // Get filename from path
      
      if (currentSrc === newSrc) {
        console.log(`Video already showing: ${newSrc}`);
        isTransitioningRef.current = false;
        return;
      }
      
      console.log(`Changing video from ${currentSrc} to ${newSrc}`);
      
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
    }
  };

  // Initialize first step
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if ((currentStep === 0 || currentStep === 1) && imageRef.current) {
        imageRef.current.src = animationSteps[currentStep].video.videoPath;
      } else if (currentStep > 1 && videoRef.current) {
        videoRef.current.src = animationSteps[currentStep].video.videoPath;
        videoRef.current.load();
      }
    }
  }, []);

  const { t } = useLanguage();

  return (
    <section ref={sectionRef} className="bg-black text-white relative">
      <div className="max-w-7xl mx-auto px-0 sm:px-5">
        <div className="flex">
          {/* Left side - Scrolling content */}
          <div className="w-full lg:w-1/2 pr-4 lg:pr-16">

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

                  {/* Feature points - customizable per section */}
                  <div className="space-y-4 max-w-lg">
                    {step.features.map((feature, idx) => (
                      <div key={idx} className="border-l-2 border-gray-800 pl-6">
                        <h3 className="text-lg font-semibold text-white mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-gray-400">
                          {feature.description}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Mobile-only images under each section */}
                  <div className="block lg:hidden mt-8">
                    <img
                      src={step.video.videoPath}
                      alt={step.video.title}
                      className="w-full h-auto rounded-2xl shadow-2xl object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right side - Fixed video container (hidden on mobile) */}
          <div ref={rightSideRef} className="hidden lg:block w-1/2 pl-16">
            <div className="h-screen flex items-center justify-center">
              <div ref={videoContainerRef} className="w-full max-w-4xl">
                {/* Video or image player with ref */}
                {animationSteps[currentStep].video.videoPath.match(/\.(png|jpg|jpeg|gif|svg)$/i) ? (
                  <img
                    ref={imageRef}
                    src={animationSteps[currentStep].video.videoPath}
                    alt={animationSteps[currentStep].video.title}
                    className="w-full h-auto rounded-2xl shadow-2xl object-cover"
                    style={{ width: '120%', maxWidth: '120%' }}
                  />
                ) : (
                  <video
                    ref={videoRef}
                    src={animationSteps[currentStep].video.videoPath}
                    className="w-full h-auto rounded-2xl shadow-2xl"
                    style={{ width: '120%', maxWidth: '120%' }}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  >
                    Your browser does not support the video tag.
                  </video>
                )}

                {/* Progress bar removed as requested */}
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
        @media (max-width: 640px) {
          .max-w-7xl {
            padding-left: 20px !important;
            padding-right: 20px !important;
          }
        }
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