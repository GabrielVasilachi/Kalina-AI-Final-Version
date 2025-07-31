'use client'

export default function GoogleCloudPartnershipGrant() {
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
                <p className="text-sm text-gray-600">Google Cloud Partnership</p>
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
            BACKED
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
            Backed by Google Cloud
            <span className="block"> $25K grant to scale our AI infrastructure</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Powering Up with Google Cloud: Aichat.md Secures $25,000 in Credits. In June we received great news: 
            Aichat.md was accepted into the Google for Startups Cloud Program.
          </p>
          
          {/* Meta Info */}
          <div className="flex items-center justify-center gap-6 mt-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-black rounded-full"></span>
              June 2025
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-black rounded-full"></span>
              Tech Team
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-black rounded-full"></span>
              7 min read
            </div>
          </div>
        </div>

        {/* Hero Image Placeholder */}
        <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg h-64 flex items-center justify-center mb-16">
          <p className="text-gray-500 font-medium">Hero Image: Google Cloud Partnership Announcement</p>
        </div>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          <div className="bg-white border border-gray-200 p-8 md:p-12">
            
            {/* Introduction */}
            <section className="mb-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                In June we received great news: <span className="font-semibold">Aichat.md was accepted into the Google for Startups Cloud Program</span> 
                and granted <span className="font-semibold">US $25,000 in Google Cloud credits</span>—non-dilutive fuel we can pour straight into product development. 
                These credits come from the program's Ecosystem Tier, which supports accelerator-backed and ecosystem-nominated startups with exactly this $25k package.
              </p>
            </section>

            {/* What is the Google for Startups Cloud Program */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-black mb-6 border-b border-gray-200 pb-3">What is the Google for Startups Cloud Program?</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Google's global initiative matches early-stage companies to one of several benefit tiers, providing cloud spend, 
                technical support and community perks so founders can build quickly and keep burn low. Highlights we now have access to include:
              </p>
              
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700"><span className="font-semibold">US $25,000 of Google Cloud & Firebase usage</span> (valid for 12 months).</p>
                </div>
                <div className="flex gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700"><span className="font-semibold">Startup Success Manager</span>—a dedicated engineer to review architecture, security and cost optimisation.</p>
                </div>
                <div className="flex gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700"><span className="font-semibold">Enhanced Support credits</span> & on-demand Cloud Customer Engineers.</p>
                </div>
                <div className="flex gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700"><span className="font-semibold">Training vouchers</span> for Google Cloud Skills Boost, plus discounts on Workspace and Maps.</p>
                </div>
              </div>
            </section>

            {/* Why It Matters for Aichat.md */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-black mb-6 border-b border-gray-200 pb-3">Why It Matters for Aichat.md</h2>
              
              {/* Impact Table */}
              <div className="overflow-x-auto mb-8">
                <table className="w-full border border-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-black">Area</th>
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-black">Immediate Impact</th>
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-black">Long-Term Gain</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr>
                      <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">Model fine-tuning</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">Spin up larger GPU clusters in Vertex AI without extra cash outlay.</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">Faster iteration for Romanian & multi-lingual chat agents.</td>
                    </tr>
                    <tr className="bg-gray-25">
                      <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">Autoscaling</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">Migrate messaging pipelines to Cloud Run & Cloud Functions.</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">Handle surge traffic from upcoming pilots while paying only for what we use.</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">Observability & Security</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">Turn on Cloud Logging, Monitoring, Assured Workloads.</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">Enterprise-grade reliability that reassures prospects in regulated sectors.</td>
                    </tr>
                    <tr className="bg-gray-25">
                      <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">R&D Playground</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">Sandbox voice-bot prototypes on Speech-to-Speech APIs.</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">Speed up entry into voice commerce & healthcare verticals.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Infrastructure Overview Image Placeholder */}
            <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg h-48 flex items-center justify-center mb-12">
              <p className="text-gray-500 font-medium">Image: AI Infrastructure Architecture on Google Cloud</p>
            </div>

            {/* Timeline and Benefits */}
            <section className="mb-12">
              <p className="text-gray-700 leading-relaxed mb-6">
                The credits should cover roughly <span className="font-semibold">6–8 months of our projected compute bill</span>, extending runway. 
                Just as important, acceptance signals technical validation by Google engineers—an extra credibility boost when we talk to investors.
              </p>
            </section>

            {/* Next Steps */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-black mb-6 border-b border-gray-200 pb-3">Next Steps</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-semibold text-black">Vertex AI upgrade</h4>
                    <p className="text-gray-700 text-sm">Migrate current fine-tuning jobs this month.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-semibold text-black">Infrastructure hardening</h4>
                    <p className="text-gray-700 text-sm">Complete Cloud Run move and implement cost-controls.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-semibold text-black">Pilot acceleration</h4>
                    <p className="text-gray-700 text-sm">Channel the saved cash into rolling out our five newly-signed clients.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">4</div>
                  <div>
                    <h4 className="font-semibold text-black">Credit stewardship</h4>
                    <p className="text-gray-700 text-sm">Meet quarterly with our Startup Success Manager to track spend versus milestones.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* A Quick Thank-You */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-black mb-6 border-b border-gray-200 pb-3">A Quick Thank-You</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Huge thanks to the <span className="font-semibold">Google for Startups & Google Cloud</span> teams for the vote of confidence—
                and to our ecosystem partners who encouraged the application. With this boost we're pushing harder than ever toward 
                a smarter, fully multilingual AI assistant that sells, supports and scales for every SME.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                Stay tuned: we'll share real usage data and performance wins as the credits turn into new features and happy customers.
              </p>
            </section>

            {/* Call to Action */}
            <div className="bg-gray-50 border border-gray-200 p-6">
              <h4 className="font-semibold text-black mb-2">Experience Google Cloud-powered AI</h4>
              <p className="text-gray-600 mb-4">
                Test our AI platform now running on enterprise-grade Google Cloud infrastructure.
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
