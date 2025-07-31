'use client'

import { useState } from 'react'

export default function SevanStartupSummitSecondPlace() {
  const [showAllPhotos, setShowAllPhotos] = useState(false)

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

        {/* Hero Image */}
        <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg h-64 flex items-center justify-center mb-16">
          <p className="text-gray-500 font-medium">Hero Image: Team at Sevan Startup Summit with Award</p>
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

            {/* Photo Gallery */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-black mb-6 border-b border-gray-200 pb-3">Summit Highlights</h2>
              
              {/* Main Photos Grid */}
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg h-48 flex items-center justify-center">
                  <p className="text-gray-500 font-medium text-center">Award Ceremony<br/>2nd Place Recognition</p>
                </div>
                <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg h-48 flex items-center justify-center">
                  <p className="text-gray-500 font-medium text-center">Team Presentation<br/>Pitch Competition</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg h-32 flex items-center justify-center">
                  <p className="text-gray-500 font-medium text-center text-sm">Lakeside Camp</p>
                </div>
                <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg h-32 flex items-center justify-center">
                  <p className="text-gray-500 font-medium text-center text-sm">Networking Sessions</p>
                </div>
                <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg h-32 flex items-center justify-center">
                  <p className="text-gray-500 font-medium text-center text-sm">Mentor Meetings</p>
                </div>
              </div>

              {/* Hidden Gallery */}
              {showAllPhotos && (
                <div className="grid md:grid-cols-4 gap-3 mb-6 animate-in fade-in duration-300">
                  <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg h-24 flex items-center justify-center">
                    <p className="text-gray-400 text-xs text-center">Team Building</p>
                  </div>
                  <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg h-24 flex items-center justify-center">
                    <p className="text-gray-400 text-xs text-center">Demo Setup</p>
                  </div>
                  <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg h-24 flex items-center justify-center">
                    <p className="text-gray-400 text-xs text-center">Workshop</p>
                  </div>
                  <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg h-24 flex items-center justify-center">
                    <p className="text-gray-400 text-xs text-center">Evening Social</p>
                  </div>
                  <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg h-24 flex items-center justify-center">
                    <p className="text-gray-400 text-xs text-center">Judging Panel</p>
                  </div>
                  <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg h-24 flex items-center justify-center">
                    <p className="text-gray-400 text-xs text-center">Camping Life</p>
                  </div>
                  <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg h-24 flex items-center justify-center">
                    <p className="text-gray-400 text-xs text-center">Tech Demo</p>
                  </div>
                  <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg h-24 flex items-center justify-center">
                    <p className="text-gray-400 text-xs text-center">Celebration</p>
                  </div>
                </div>
              )}

              {/* Gallery Toggle Button */}
              <div className="text-center">
                <button 
                  onClick={() => setShowAllPhotos(!showAllPhotos)}
                  className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 hover:bg-gray-800 transition-colors font-medium"
                >
                  {showAllPhotos ? (
                    <>
                      Show Less Photos
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                      </svg>
                    </>
                  ) : (
                    <>
                      View All Photos
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
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
    </div>
  )
}
