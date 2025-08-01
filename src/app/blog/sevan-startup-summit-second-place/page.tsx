'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function SevanStartupSummitSecondPlace() {
  const [showAllPhotos, setShowAllPhotos] = useState(false)
  const [selectedMedia, setSelectedMedia] = useState<string | null>(null)
  
  // Lista completă cu toate media files din gallerySevanStartUp
  const galleryMedia = [
    { src: '/gallerySevanStartUp/7D452339-7F88-4321-BFF0-72E48E72DEAF.jpg', type: 'image', caption: 'Team arrival at Sevan Startup Summit' },
    { src: '/gallerySevanStartUp/IMG_4661.jpg', type: 'image', caption: 'Setting up camp at Lake Sevan' },
    { src: '/gallerySevanStartUp/IMG_4720.JPG', type: 'image', caption: 'Workshop sessions in progress' },
    { src: '/gallerySevanStartUp/IMG_4724.JPG', type: 'image', caption: 'Networking with fellow startups' },
    { src: '/gallerySevanStartUp/IMG_4730.mp4', type: 'video', caption: 'Behind the scenes preparation' },
    { src: '/gallerySevanStartUp/IMG_4823.mp4', type: 'video', caption: 'Pitch practice sessions' },
    { src: '/gallerySevanStartUp/IMG_4900.JPG', type: 'image', caption: 'Mentor meetings and feedback' },
    { src: '/gallerySevanStartUp/IMG_4912.jpg', type: 'image', caption: 'Demo day preparations' },
    { src: '/gallerySevanStartUp/IMG_4958.jpg', type: 'image', caption: 'Team collaboration moments' },
    { src: '/gallerySevanStartUp/IMG_4959.mp4', type: 'video', caption: 'Live pitch presentation' },
    { src: '/gallerySevanStartUp/IMG_4962.jpg', type: 'image', caption: 'Audience engagement during pitch' },
    { src: '/gallerySevanStartUp/IMG_4973.PNG', type: 'image', caption: 'Technical demo showcase' },
    { src: '/gallerySevanStartUp/IMG_5333.JPG', type: 'image', caption: 'Judges evaluation process' },
    { src: '/gallerySevanStartUp/IMG_5476.JPG', type: 'image', caption: 'Award ceremony moment' },
    { src: '/gallerySevanStartUp/IMG_6539.jpg', type: 'image', caption: '2nd place celebration' },
    { src: '/gallerySevanStartUp/IMG_6544.jpg', type: 'image', caption: 'Victory with the trophy' },
    { src: '/gallerySevanStartUp/IMG_6619.jpeg', type: 'image', caption: 'Team success photo' },
    { src: '/gallerySevanStartUp/IMG_7576.jpeg', type: 'image', caption: 'Lakeside camp life' },
    { src: '/gallerySevanStartUp/IMG_7704.jpeg', type: 'image', caption: 'Evening social gatherings' },
    { src: '/gallerySevanStartUp/IMG_7710.jpg', type: 'image', caption: 'Memorable summit moments' }
  ]
  
  const featuredMedia = galleryMedia.slice(0, 6)
  const extraMedia = galleryMedia.slice(6)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                <span className="text-white text-lg font-bold">K</span>
              </div>
              <div>
                <h1 className="font-bold text-black">Kallina AI Blog</h1>
                <p className="text-sm text-gray-600">Sevan Startup Summit</p>
              </div>
            </div>
            <a 
              href="/blog" 
              className="text-gray-600 hover:text-black text-sm font-medium px-4 py-2 hover:bg-gray-50 transition-colors"
            >
              ← Înapoi la Blog
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-16">
        {/* Article Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-black text-white px-4 py-2 text-sm font-semibold mb-6">
            2ND PLACE
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
            2nd Place at Sevan Startup Summit
            <span className="block"> $6,000 award for Aichat.md</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            From Campfires to Clients: Aichat.md at Sevan Startup Summit 2025. When your "office" is a tent 
            pitched at 1,900m on the shores of Lake Sevan, inspiration comes easily.
          </p>
          
          {/* Meta Info */}
          <div className="flex items-center justify-center gap-6 mt-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-black rounded-full"></span>
              20-26 July 2025
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-black rounded-full"></span>
              Team Aichat
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-black rounded-full"></span>
              8 min read
            </div>
          </div>
        </div>

        {/* Hero Visual Story */}
        <div className="mb-16">
          <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-700">
            <Image
              src="/gallerySevanStartUp/IMG_6544.jpg"
              alt="Kallina AI team celebrating 2nd place at Sevan Startup Summit"
              fill
              className="object-cover opacity-90"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6">
                <h2 className="text-2xl font-bold text-black mb-2">Victory at Lake Sevan</h2>
                <p className="text-gray-700">From tent pitches to pitch victories - our journey to 2nd place</p>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          <div className="bg-white border border-gray-200 p-8 md:p-12">
            
            {/* Summit Overview */}
            <section className="mb-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                From 20 to 26 July 2025 hundreds of founders, investors and tech enthusiasts converged on Armenia 
                for the open-air Sevan Startup Summit—a unique week-long blend of acceleration program, competition and festival life.
              </p>
            </section>

            {/* Summit in a Snapshot */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-black mb-6 border-b border-gray-200 pb-3">Summit in a Snapshot</h2>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700"><span className="font-semibold">1700+ participants</span> living and working shoulder-to-shoulder in the lakeside camp</p>
                </div>
                <div className="flex gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700"><span className="font-semibold">400+ speakers and mentors</span> delivering daily clinics, fireside feedback and rapid-fire Q&A</p>
                </div>
                <div className="flex gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Dozens of workshops, pitch battles and side-events that ran from sunrise to midnight</p>
                </div>
              </div>
            {/* Video Placeholder for future upload */}
            <div className="w-full aspect-video max-w-2xl bg-black/60 border-2 border-dashed border-purple-500 rounded-2xl flex items-center justify-center text-purple-400 text-lg font-semibold mx-auto mb-8">
              Video Demo: Sevan Startup Summit (coming soon)
            </div>
            <div className="text-gray-400 text-xs text-center mb-8">The summit video will be added here once available and optimized for web.</div>
              
              <p className="text-gray-700 leading-relaxed mt-6">
                The campground format flattened hierarchies: CEOs queued for breakfast next to junior devs, 
                investors roasted marshmallows with first-time founders, and every critique happened face-to-face under the stars.
              </p>
            </section>

            {/* What Aichat.md Achieved */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-black mb-6 border-b border-gray-200 pb-3">What Aichat.md Achieved</h2>
              
              {/* Achievement Table */}
              <div className="overflow-x-auto mb-8">
                <table className="w-full border border-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-black">Goal</th>
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-black">Result</th>
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-black">Why It Matters</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr>
                      <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">Win customers</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">5 paying clients signed up for pilots (e-commerce, automotive, healthcare, services).</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">Immediate revenue pipeline & live product validation.</td>
                    </tr>
                    <tr className="bg-gray-25">
                      <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">Form partnerships</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">3 cross-startup deals – incl. ad-placement inside the indie game "Sumo Tatami."</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">Extends reach into new user segments at near-zero CAC.</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">Grow investor funnel</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">Multiple VCs & angels added; follow-ups booked for August.</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">Positions us strongly for the upcoming pre-seed round.</td>
                    </tr>
                    <tr className="bg-gray-25">
                      <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">Secure a white-label channel</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">Retail-focused SaaS partner meets us in Chișinău next month.</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">Opens scalable access to hundreds of CIS retailers.</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">Upgrade the pitch</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">Deck rebuilt & three-minute story perfected through mentor drills.</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">Ready for investor roadshows, demo days & sales calls.</td>
                    </tr>
                    <tr className="bg-gray-25">
                      <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">Validate pricing</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">Mentor consensus: raise prices ≈ 15%. A/B tests already live.</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">Path to healthier MRR and gross margins.</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">Competition success</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">2nd place in the Booster finale ≈ $6,000 cash, instantly doubled by YoHealth to $12,000.</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">Non-dilutive capital funds Q3 feature sprints & GTM.</td>
                    </tr>
                    <tr className="bg-gray-25">
                      <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">Strengthen mentor network</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">All four lead mentors committed to quarterly check-ins & on-demand advice.</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">Ongoing senior guidance at zero extra cost.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Visual Journey Gallery */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-black mb-8 border-b border-gray-200 pb-4">Our Sevan Journey</h2>
              
              {/* Featured Media Grid - Creative Layout */}
              <div className="grid grid-cols-12 gap-4 mb-8">
                {/* Large hero image */}
                <div className="col-span-12 md:col-span-8 relative group cursor-pointer" onClick={() => setSelectedMedia(featuredMedia[0].src)}>
                  <div className="relative h-64 md:h-80 rounded-xl overflow-hidden">
                    <Image
                      src={featuredMedia[0].src}
                      alt={featuredMedia[0].caption}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">{featuredMedia[0].caption}</p>
                    </div>
                  </div>
                </div>
                
                {/* Two stacked images */}
                <div className="col-span-12 md:col-span-4 space-y-4">
                  <div className="relative group cursor-pointer h-[calc(50%-8px)]" onClick={() => setSelectedMedia(featuredMedia[1].src)}>
                    <div className="relative h-full rounded-xl overflow-hidden">
                      <Image
                        src={featuredMedia[1].src}
                        alt={featuredMedia[1].caption}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                  <div className="relative group cursor-pointer h-[calc(50%-8px)]" onClick={() => setSelectedMedia(featuredMedia[2].src)}>
                    <div className="relative h-full rounded-xl overflow-hidden">
                      <Image
                        src={featuredMedia[2].src}
                        alt={featuredMedia[2].caption}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Medium grid layout */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                {featuredMedia.slice(3, 6).map((media, index) => (
                  <div key={index} className="relative group cursor-pointer" onClick={() => setSelectedMedia(media.src)}>
                    <div className="relative h-48 rounded-xl overflow-hidden">
                      {media.type === 'video' ? (
                        <video
                          src={media.src}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          muted
                          loop
                          onMouseEnter={(e) => e.currentTarget.play()}
                          onMouseLeave={(e) => e.currentTarget.pause()}
                        />
                      ) : (
                        <Image
                          src={media.src}
                          alt={media.caption}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      )}
                      {media.type === 'video' && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                          <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                            <svg className="w-6 h-6 text-black ml-1" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M8 5v10l8-5-8-5z"/>
                            </svg>
                          </div>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-3 left-3 right-3">
                        <p className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">{media.caption}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Expandable Gallery */}
              {showAllPhotos && (
                <div className="space-y-8 animate-in fade-in duration-500">
                  {/* Video Highlights Section */}
                  <div>
                    <h3 className="text-xl font-semibold text-black mb-4">Video Highlights</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {extraMedia.filter(media => media.type === 'video').map((media, index) => (
                        <div key={index} className="relative group cursor-pointer" onClick={() => setSelectedMedia(media.src)}>
                          <div className="relative h-48 rounded-xl overflow-hidden bg-black">
                            <video
                              src={media.src}
                              className="w-full h-full object-cover"
                              muted
                              loop
                              onMouseEnter={(e) => e.currentTarget.play()}
                              onMouseLeave={(e) => e.currentTarget.pause()}
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                              <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                <svg className="w-8 h-8 text-black ml-1" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M8 5v10l8-5-8-5z"/>
                                </svg>
                              </div>
                            </div>
                            <div className="absolute bottom-4 left-4 right-4">
                              <p className="text-white font-medium">{media.caption}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Masonry Photo Grid */}
                  <div>
                    <h3 className="text-xl font-semibold text-black mb-4">Photo Moments</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {extraMedia.filter(media => media.type === 'image').map((media, index) => (
                        <div 
                          key={index} 
                          className={`relative group cursor-pointer ${index % 3 === 0 ? 'md:row-span-2' : ''}`}
                          onClick={() => setSelectedMedia(media.src)}
                        >
                          <div className={`relative rounded-lg overflow-hidden ${index % 3 === 0 ? 'h-64 md:h-80' : 'h-32 md:h-36'}`}>
                            <Image
                              src={media.src}
                              alt={media.caption}
                              fill
                              className="object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
                            />
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="absolute inset-0 p-3 flex items-end">
                              <p className="text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">{media.caption}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Gallery Toggle Button */}
              <div className="text-center">
                <button 
                  onClick={() => setShowAllPhotos(!showAllPhotos)}
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-black to-gray-800 text-white px-8 py-4 rounded-full hover:from-gray-800 hover:to-black transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  {showAllPhotos ? (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                      </svg>
                      Show Less
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      Explore Full Gallery ({extraMedia.length} more)
                    </>
                  )}
                </button>
              </div>
            </section>

            {/* A Moldovan Mini-Squad */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-black mb-6 border-b border-gray-200 pb-3">A Moldovan Mini-Squad</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We weren't the only Moldovan flags waving in the mountain wind. <span className="font-semibold">OneSyncs, Gems Around and EatingAI</span> camped 
                beside us, pitched beside us and celebrated beside us — proof that Moldova's startup scene is growing louder and prouder every year.
              </p>
            </section>

            {/* Life in the Tent City */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-black mb-6 border-b border-gray-200 pb-3">Life in the Tent City</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Days started with sunrise stand-ups and ended with storytelling round campfires. Demo rehearsals echoed across 
                the lake, while spontaneous white-boarding happened anywhere a picnic table met a good idea. The informal setup 
                turned every meal line and yoga mat into a networking session — and that authenticity is exactly why deals got done.
              </p>
            </section>

            {/* Gratitude */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-black mb-6 border-b border-gray-200 pb-3">Gratitude</h2>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700"><span className="font-semibold">Startup Moldova</span> & <span className="font-semibold">EU4Innovation East</span> – your travel grant and continuous ecosystem support made this journey possible.</p>
                </div>
                <div className="flex gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700"><span className="font-semibold">Sevan Startup Summit organisers</span> – for crafting an unforgettable blend of acceleration and adventure.</p>
                </div>
                <div className="flex gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700"><span className="font-semibold">YoHealth</span> – for doubling our prize and doubling our momentum.</p>
                </div>
                <div className="flex gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">The 50+ mentors, the jury and the new friends who challenged and championed us all week long.</p>
                </div>
              </div>
            </section>

            {/* What's Next */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-black mb-6 border-b border-gray-200 pb-3">What's Next?</h2>
              <div className="space-y-4 mb-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-semibold text-black">Integrations live</h4>
                    <p className="text-gray-700 text-sm">Deploy pilots for the five new clients (August).</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-semibold text-black">White-label pilot</h4>
                    <p className="text-gray-700 text-sm">Scope and sign with the retail SaaS partner.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-semibold text-black">Close funding</h4>
                    <p className="text-gray-700 text-sm">Convert at least one of the newly-met investors before Q4.</p>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700 leading-relaxed">
                Sevan 2025 proved that big ideas can grow around campfires. With fresh capital, new clients and a stronger network, 
                Aichat.md returns to Chișinău ready to scale faster – and we can't wait to share the next milestones with you.
              </p>
            </section>

            {/* Call to Action */}
            <div className="bg-gray-50 border border-gray-200 p-6">
              <h4 className="font-semibold text-black mb-2">Experience our award-winning technology</h4>
              <p className="text-gray-600 mb-4">
                Test the AI solution that impressed international judges and secured 2nd place at Sevan Startup Summit.
              </p>
              <a 
                href="/getting-started" 
                className="inline-flex items-center bg-black text-white px-6 py-3 hover:bg-gray-800 transition-colors font-medium"
              >
                Get Started →
              </a>
            </div>
          </div>
        </article>
      </main>

      {/* Media Preview Modal */}
      {selectedMedia && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedMedia(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedMedia(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {selectedMedia.endsWith('.mp4') ? (
              <video
                src={selectedMedia}
                controls
                autoPlay
                className="max-w-full max-h-full rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
            ) : (
              <div className="relative" onClick={(e) => e.stopPropagation()}>
                <Image
                  src={selectedMedia}
                  alt="Full size preview"
                  width={1200}
                  height={800}
                  className="max-w-full max-h-full object-contain rounded-lg"
                />
              </div>
            )}
            
            <div className="absolute bottom-4 left-4 right-4 text-center">
              <p className="text-white text-sm bg-black/50 rounded-lg px-4 py-2 backdrop-blur-sm">
                {galleryMedia.find(m => m.src === selectedMedia)?.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
