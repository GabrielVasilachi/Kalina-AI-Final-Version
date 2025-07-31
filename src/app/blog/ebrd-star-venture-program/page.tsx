'use client'

export default function EBRDStarVentureProgram() {
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
                <p className="text-sm text-gray-600">EBRD Star Venture Program</p>
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
            SELECTED
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
            EBRD selected Aichat.md for the
            <span className="block"> prestigious Star Venture Program</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Aichat.md joins the EBRD Star Venture Programme, a two-year support track for high-potential, 
            tech-enabled startups in the EBRD regions.
          </p>
          
          {/* Meta Info */}
          <div className="flex items-center justify-center gap-6 mt-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-black rounded-full"></span>
              25 July 2025
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-black rounded-full"></span>
              Gabriel Vasilachi
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-black rounded-full"></span>
              8 min read
            </div>
          </div>
        </div>

        {/* Hero Image Placeholder */}
        <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg h-64 flex items-center justify-center mb-16">
          <p className="text-gray-500 font-medium">Hero Image: EBRD Star Venture Program Announcement</p>
        </div>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          <div className="bg-white border border-gray-200 p-8 md:p-12">
            
            {/* Introduction */}
            <div className="mb-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We're excited to announce that Aichat.md has been selected for the prestigious EBRD Star Venture Programme. 
                This recognition validates our technological potential and vision for digital transformation in the EBRD regions.
              </p>
            </div>

            {/* What is Star Venture */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-black mb-6 border-b border-gray-200 pb-3">What is Star Venture?</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                The EBRD Star Venture Programme is a two-year support track for high-potential, tech-enabled startups 
                in the EBRD regions. It blends hands-on advisory, world-class mentoring, investor access and market-entry 
                support—without taking equity or charging fees.
              </p>
            </section>

            {/* Key Resources */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-black mb-6 border-b border-gray-200 pb-3">Key resources we'll receive</h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-6">
                  <div className="border-l-4 border-black pl-4">
                    <h3 className="font-semibold text-black mb-2">Tailored advisory</h3>
                    <p className="text-gray-700 text-sm mb-2">Up to €50k of expert consulting across strategy, marketing, ops, finance and tech.</p>
                    <p className="text-gray-600 text-sm">Hands-on help to fix bottlenecks and unlock growth.</p>
                  </div>
                  
                  <div className="border-l-4 border-black pl-4">
                    <h3 className="font-semibold text-black mb-2">Mentoring</h3>
                    <p className="text-gray-700 text-sm mb-2">Access to 1,500+ global mentors via the Dosen platform, matched to our needs.</p>
                    <p className="text-gray-600 text-sm">Personal guidance from founders, investors and industry specialists.</p>
                  </div>

                  <div className="border-l-4 border-black pl-4">
                    <h3 className="font-semibold text-black mb-2">Workshops</h3>
                    <p className="text-gray-700 text-sm mb-2">A structured Business Diagnostics Workshop delivered with Cambridge University to define our scale roadmap.</p>
                    <p className="text-gray-600 text-sm">Clear priorities and action plan before we dive into execution.</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="border-l-4 border-black pl-4">
                    <h3 className="font-semibold text-black mb-2">Access to finance</h3>
                    <p className="text-gray-700 text-sm mb-2">Pitch events, fundraising workshops and warm intros to VC & CVC funds.</p>
                    <p className="text-gray-600 text-sm">Readiness and connections when we raise our next round.</p>
                  </div>

                  <div className="border-l-4 border-black pl-4">
                    <h3 className="font-semibold text-black mb-2">Market expansion budget</h3>
                    <p className="text-gray-700 text-sm mb-2">Up to €20k reimbursed for business-matching trips and global conferences.</p>
                    <p className="text-gray-600 text-sm">Meet customers and partners in new markets at lower cost.</p>
                  </div>

                  <div className="border-l-4 border-black pl-4">
                    <h3 className="font-semibold text-black mb-2">Cloud & learning credits</h3>
                    <p className="text-gray-700 text-sm mb-2">AWS Activate credits up to $25k • Microsoft Azure credits up to $150k • Coursera licence for 12k+ courses</p>
                    <p className="text-gray-600 text-sm">Scalable infrastructure and continuous up-skilling for the team.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Program Structure Image Placeholder */}
            <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg h-48 flex items-center justify-center mb-12">
              <p className="text-gray-500 font-medium">Image: Star Venture Program Benefits Overview</p>
            </div>

            {/* How the next 24 months will unfold */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-black mb-6 border-b border-gray-200 pb-3">How the next 24 months will unfold</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Star Venture runs over six phases, each building on the last (no specific dates, just the flow):
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-semibold text-black">Kick-off & goals</h4>
                    <p className="text-gray-700 text-sm">Business diagnostics workshop, baseline metrics, clear growth objective.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-semibold text-black">Product-market fit tune-up</h4>
                    <p className="text-gray-700 text-sm">Sharpen value proposition, close critical product gaps.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-semibold text-black">Go-to-market build-out</h4>
                    <p className="text-gray-700 text-sm">Experiment with channels, craft a repeatable sales motion.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">4</div>
                  <div>
                    <h4 className="font-semibold text-black">Scale readiness</h4>
                    <p className="text-gray-700 text-sm">Optimise onboarding, support, analytics and internal processes.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">5</div>
                  <div>
                    <h4 className="font-semibold text-black">Investor prep</h4>
                    <p className="text-gray-700 text-sm">Iterate our pitch, open data room, practise with mentors and VCs.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">6</div>
                  <div>
                    <h4 className="font-semibold text-black">Demo Day & beyond</h4>
                    <p className="text-gray-700 text-sm">Showcase results, line up investor meetings, publish our 12-month plan.</p>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700 leading-relaxed">
                Throughout, we'll track progress weekly, tap mentors on demand, and launch advisory projects 
                as soon as needs surface.
              </p>
            </section>

            {/* Timeline Image Placeholder */}
            <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg h-48 flex items-center justify-center mb-12">
              <p className="text-gray-500 font-medium">Image: 24-Month Program Timeline</p>
            </div>

            {/* What we commit to */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-black mb-6 border-b border-gray-200 pb-3">What we commit to</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                We agree to stay fully engaged, share key metrics, and complete the programme to graduation. 
                It's a time investment—but the upside is tailored support worth up to €50k, delivered exactly when we need it.
              </p>
            </section>

            {/* Expected outcomes */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-black mb-6 border-b border-gray-200 pb-3">Expected outcomes for Aichat.md</h2>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Stronger unit economics via focused advisory and channel experiments.</p>
                </div>
                <div className="flex gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Expanded network of mentors, investors and potential partners across Europe and beyond.</p>
                </div>
                <div className="flex gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Investment readiness backed by a solid data room and warm VC introductions.</p>
                </div>
                <div className="flex gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Global exposure through subsidised trips to major tech and industry events.</p>
                </div>
              </div>
            </section>

            {/* Closing */}
            <section className="mb-12">
              <p className="text-gray-700 leading-relaxed mb-6">
                We're excited to start this journey with EBRD and the Star Venture cohort. Follow our updates 
                as we share wins, lessons and metrics along the way.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-8">
                <span className="font-medium">Have questions about the programme or want to partner with us during this journey?</span> 
                <br />
                Reach out at <a href="mailto:info@aichat.md" className="underline hover:no-underline">info@aichat.md</a>.
              </p>
            </section>

            {/* Call to Action */}
            <div className="bg-gray-50 border border-gray-200 p-6">
              <h4 className="font-semibold text-black mb-2">Ready to experience our AI technology?</h4>
              <p className="text-gray-600 mb-4">
                Join the companies already benefiting from our internationally validated AI solutions.
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
