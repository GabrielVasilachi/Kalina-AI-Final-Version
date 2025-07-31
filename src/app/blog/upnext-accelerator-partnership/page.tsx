'use client'

export default function UpnextAcceleratorPartnership() {
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
                <h1 className="font-bold text-gray-900">Kalina AI Blog</h1>
                <p className="text-sm text-gray-600">Partnership Announcement</p>
              </div>
            </div>
            <a 
              href="/blog" 
              className="text-gray-600 hover:text-gray-900 text-sm font-medium px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
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
          <div className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            PARTNERSHIP
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Part of UpNext Accelerator by Dreamups — with
            <span className="text-gray-700"> $10K start funding</span> to grow Aichat.md
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            (Începem în final de iulie cu UpNext și Dreamups - sunt pe net)
          </p>
          
          {/* Meta Info */}
          <div className="flex items-center justify-center gap-6 mt-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-black rounded-full"></span>
              8 min citire
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-black rounded-full"></span>
              Gabriel Vasilachi
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-black rounded-full"></span>
              Iulie 2024
            </div>
          </div>
        </div>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-12">
            
            {/* Placeholder for UpNext Accelerator Image */}
            <div className="mb-8 bg-gray-100 border border-gray-200 rounded-lg p-8 text-center">
              <div className="text-gray-400 text-sm mb-2">PLACEHOLDER FOR IMAGE</div>
              <div className="text-gray-600 text-sm">UpNext Accelerator by Dreamups Logo/Program Visual</div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">We joined UpNext by Dreamups — here's our 6-month plan</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>UpNext</strong> is a 6-month traction accelerator in Moldova that helps tech startups grow faster with 
              hands-on mentoring, access to investors, workspace, and funding opportunities (up to <strong>€25k</strong>). 
              It's run by <strong>Dreamups</strong> and focuses on practical execution, not theory.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              The program selects a small cohort (typically <strong>five teams</strong>) and surrounds them with mentors, 
              experts, and a supportive community geared toward scale.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              In recent editions, founders work with <strong>resident mentors and 30+ experts</strong> on growth, go-to-market, 
              and investment readiness.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">What UpNext includes:</h3>
            
            <ul className="list-disc list-inside text-gray-700 space-y-3 mb-8">
              <li><strong>Mentoring & experts:</strong> Weekly expert sessions on targeted topics, plus 1:1 mentor hours to keep us unblocked and moving.</li>
              <li><strong>Investor access & demo:</strong> Regular pitch practice with feedback, a public launch moment, and a <strong>Demo Day</strong> at the end.</li>
              <li><strong>Workspace & tools:</strong> A dedicated coworking environment and an organized toolkit for collaboration (Slack, Zoom; Dreamups uses an offline/onsite format for UpNext).</li>
              <li><strong>Funding pathway:</strong> UpNext is positioned with <strong>funding up to €25k</strong> for the cohort, alongside active investor exposure.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">How we'll work week to week</h3>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Based on our internal program timeline, here's the cadence we'll follow across the six months:
            </p>

            <ul className="list-disc list-inside text-gray-700 space-y-3 mb-8">
              <li><strong>Expert Sessions (weekly):</strong> Deep dives on a specific topic (e.g., positioning, pricing, sales systems, analytics, hiring).</li>
              <li><strong>Founder Talks / Investor Guests (every ~3 weeks):</strong> Short, practical sessions with founders and investors who share what actually worked for them.</li>
              <li><strong>Group Hour — founders only (weekly):</strong> A closed space to compare progress, share obstacles, and borrow working playbooks.</li>
              <li><strong>Group Office Hours — founders & mentors (every ~2 weeks):</strong> Hands-on work on experiments, funnels, and product priorities.</li>
              <li><strong>1-to-1 Mentor Hours (weekly):</strong> Individual guidance on our growth levers and blockers.</li>
              <li><strong>Pitch Practice (ongoing):</strong> Iterative improvement of our story, metrics, and Q&A ahead of investor meetings and Demo Day.</li>
            </ul>

            <p className="text-gray-700 leading-relaxed mb-8">
              We'll keep participation <strong>full-time</strong>, ship <strong>deliverables per topic</strong>, and track against our 
              <strong>six-month goals</strong> in a clear dashboard.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              <strong>Tools & workspace:</strong> We'll coordinate in Slack/Zoom and use the assigned coworking space for 
              focus days, mentor sessions, and check-ins. (Exact venues/tools may vary by cohort, but the format remains 
              structured and offline-first.)
            </p>

            {/* Placeholder for 6-month journey image */}
            <div className="mb-8 bg-gray-100 border border-gray-200 rounded-lg p-8 text-center">
              <div className="text-gray-400 text-sm mb-2">PLACEHOLDER FOR IMAGE</div>
              <div className="text-gray-600 text-sm">6-Month Journey Timeline Visual</div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Our six-month journey</h3>

            <div className="space-y-6 mb-8">
              <div className="border-l-4 border-gray-300 pl-6">
                <h4 className="font-semibold text-gray-900 mb-2">Phase 1 — Onboarding & Goals</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Define our single top growth objective and baseline metrics.</li>
                  <li>• Prioritize customer segments and set up the reporting cadence.</li>
                  <li>• Book 1:1 mentor slots and lock the weekly routine.</li>
                </ul>
              </div>

              <div className="border-l-4 border-gray-300 pl-6">
                <h4 className="font-semibold text-gray-900 mb-2">Phase 2 — Product-Market Fit Signals</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Tighten ICP, value proposition, and messaging.</li>
                  <li>• Fix must-have product gaps that block adoption or retention.</li>
                  <li>• Start 2–3 traction experiments (activation, conversion, or expansion).</li>
                </ul>
              </div>

              <div className="border-l-4 border-gray-300 pl-6">
                <h4 className="font-semibold text-gray-900 mb-2">Phase 3 — Go-to-Market Focus</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Test channels (partnerships, outbound, inbound content, events).</li>
                  <li>• Build a repeatable sales process (qualify → demo → close → onboard).</li>
                  <li>• Document playbooks; track CAC payback and time-to-value.</li>
                </ul>
              </div>

              <div className="border-l-4 border-gray-300 pl-6">
                <h4 className="font-semibold text-gray-900 mb-2">Phase 4 — Scale Readiness</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Optimize onboarding, SLAs, and support automation.</li>
                  <li>• Strengthen analytics (dashboards, cohort views, retention).</li>
                  <li>• Prepare the investor data room (metrics, pipeline, legal basics).</li>
                </ul>
              </div>

              <div className="border-l-4 border-gray-300 pl-6">
                <h4 className="font-semibold text-gray-900 mb-2">Phase 5 — Launch & Investor Prep</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Public announcement/PR and customer references.</li>
                  <li>• Formal pitch reviews with mentors and guest investors.</li>
                  <li>• Set up follow-up meetings and a target investor list.</li>
                </ul>
              </div>

              <div className="border-l-4 border-gray-300 pl-6">
                <h4 className="font-semibold text-gray-900 mb-2">Phase 6 — Demo Day & Next Steps</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Deliver a crisp, numbers-first pitch.</li>
                  <li>• Convert investor interest into meetings.</li>
                  <li>• Publish our six-month results and the 12-month execution plan.</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">What we expect to achieve</h3>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              By graduation, we want to show <strong>clear traction</strong>: higher conversion rates, faster sales cycles, 
              and stronger retention. We also aim to leave with a <strong>repeatable go-to-market motion</strong>, ready to 
              scale. These outcomes are the core promise of UpNext's traction-first design.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Why we chose UpNext</h3>
            
            <p className="text-gray-700 leading-relaxed mb-8">
              UpNext is Moldova's traction-focused accelerator with a tight cohort, deep mentor bench, and 
              an execution rhythm that matches the way we build. For us, it's the fastest way to pressure-test 
              our roadmap, grow smarter, and get investment-ready.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              <strong>Follow our journey:</strong> We'll share monthly updates on what worked, what didn't, and the exact 
              metrics we're improving. Subscribe to stay in the loop.
            </p>

            {/* Call to Action */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2">Follow our UpNext journey</h4>
              <p className="text-gray-600 mb-4">
                Stay updated with our progress through the 6-month accelerator program and see how we scale Aichat.md.
              </p>
              <a 
                href="/company" 
                className="inline-flex items-center bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium"
              >
                About Our Company →
              </a>
            </div>
          </div>
        </article>
      </main>
    </div>
  )
}
