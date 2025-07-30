'use client'

import Link from 'next/link'
import { ArrowLeft, Trophy, Zap } from 'lucide-react'

export default function ElevenLabsHackathonWinner() {
  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Header */}
      <div className="sticky top-0 z-50 bg-white border-b-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/blog" className="text-black hover:bg-black hover:text-white transition-all duration-300 flex items-center gap-2 px-3 py-2 border-2 border-black font-bold transform hover:translate-x-1 hover:translate-y-1 hover:shadow-none shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
            <Link href="/" className="text-black hover:bg-black hover:text-white transition-all duration-300 px-4 py-2 border-2 border-black font-bold transform hover:translate-x-1 hover:translate-y-1 hover:shadow-none shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              Home
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white border-4 border-black px-6 py-3 mb-6 font-bold transform rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Trophy className="w-6 h-6 text-black" />
              <span className="text-black">1st Place Winner - $20,000</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-black mb-6 transform -rotate-1 drop-shadow-[4px_4px_0px_rgba(255,255,255,1)] stroke-black" style={{textShadow: '4px 4px 0px white, 8px 8px 0px black'}}>
              We won 1st Place at ElevenLabs Hackathon
            </h1>
            <p className="text-xl text-black max-w-3xl mx-auto font-bold bg-white border-2 border-black p-4 transform rotate-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              We just won the ElevenLabs Online Conversational Agent Hackathon — here's the story
            </p>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg mx-auto max-w-none">
            
            {/* What is the ElevenLabs Hackathon */}
            <div className="bg-white border-4 border-black p-8 mb-8 transform -rotate-1 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h2 className="text-3xl font-black text-black mb-6 transform rotate-1">What is the ElevenLabs Conversational Agent Hackathon?</h2>
              <ul className="text-black space-y-4 font-bold">
                <li className="border-l-4 border-black pl-4"><strong>2-hour online sprint.</strong> Each team had exactly two hours to design and ship a working voice agent live on the ElevenLabs platform. Took place on Wednesday, July 2, 3pm - 5pm UTC.</li>
                <li className="border-l-4 border-black pl-4"><strong>Global event celebrating 1 million agents built</strong> on ElevenLabs, with partners like Lovable, Exa, n8n, Notion and others.</li>
                <li className="border-l-4 border-black pl-4"><strong>Top prize: US $20 000 in ElevenLabs credits</strong> for 1st place (that's us 🎉).</li>
              </ul>
            </div>

            {/* Our Idea */}
            <div className="bg-white border-4 border-black p-8 mb-8 transform rotate-1 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h2 className="text-3xl font-black text-black mb-6 transform -rotate-1">Our idea: a "Voice Nurse" built in under 2 hours</h2>
              <p className="text-black mb-6 font-bold border-2 border-black p-4 bg-gray-100">
                We focused on healthcare because fast, accurate answers save stress — and sometimes lives.
              </p>
              
              <h3 className="text-2xl font-black text-black mb-4">Key abilities</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-4 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <thead>
                    <tr className="bg-black">
                      <th className="border-2 border-black p-4 text-left text-white font-black">What it does</th>
                      <th className="border-2 border-black p-4 text-left text-white font-black">Why it matters</th>
                    </tr>
                  </thead>
                  <tbody className="text-black font-bold">
                    <tr className="bg-gray-100">
                      <td className="border-2 border-black p-4">Listens to a symptom description in natural speech</td>
                      <td className="border-2 border-black p-4">Removes the need to fill in long forms when you're worried.</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border-2 border-black p-4">Asks the right follow-up questions</td>
                      <td className="border-2 border-black p-4">Mimics the logic of a triage nurse to narrow down the issue.</td>
                    </tr>
                    <tr className="bg-gray-100">
                      <td className="border-2 border-black p-4">Gives clear next-step guidance (self-care vs doctor visit)</td>
                      <td className="border-2 border-black p-4">Users leave the call knowing exactly what to do.</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border-2 border-black p-4">Books an appointment or connects to a human line on request</td>
                      <td className="border-2 border-black p-4">One call, zero hand-offs.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Technical Implementation */}
            <div className="bg-white border-4 border-black p-8 mb-8 transform -rotate-1 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h2 className="text-3xl font-black text-black mb-6 transform rotate-1">Technical Implementation</h2>
              <p className="text-black mb-6 font-bold border-2 border-black p-4 bg-gray-100">
                We stitched everything together with ElevenLabs' <strong>Conversational AI</strong> for real-time speech, a lightweight symptom-checker API. Total build time: <strong>1 hour 59 minutes</strong> plus a quick demo video.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full border-4 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <thead>
                    <tr className="bg-black">
                      <th className="border-2 border-black p-4 text-left text-white font-black">Step</th>
                      <th className="border-2 border-black p-4 text-left text-white font-black">What happens</th>
                      <th className="border-2 border-black p-4 text-left text-white font-black">Tech used</th>
                    </tr>
                  </thead>
                  <tbody className="text-black font-bold">
                    <tr className="bg-gray-100">
                      <td className="border-2 border-black p-4">1. Caller speaks symptoms</td>
                      <td className="border-2 border-black p-4">ElevenLabs Conversational AI transcribes and voices the dialogue in real time.</td>
                      <td className="border-2 border-black p-4">ElevenLabs API</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border-2 border-black p-4">2. Smart follow-ups</td>
                      <td className="border-2 border-black p-4">A lightweight symptom-checker API asks clarifying questions.</td>
                      <td className="border-2 border-black p-4">External API</td>
                    </tr>
                    <tr className="bg-gray-100">
                      <td className="border-2 border-black p-4">3. Guidance & hand-off</td>
                      <td className="border-2 border-black p-4">The agent tells the caller whether self-care is fine or a visit is advised.</td>
                      <td className="border-2 border-black p-4">Agent logic</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border-2 border-black p-4">4. Instant booking</td>
                      <td className="border-2 border-black p-4">If needed, the agent opens a pre-filled calendar slot and confirms by SMS.</td>
                      <td className="border-2 border-black p-4">Lovable backend + Twilio</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Try it Yourself */}
            <div className="bg-white border-4 border-black p-8 mb-8 transform rotate-1 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h2 className="text-3xl font-black text-black mb-6 transform -rotate-1">Try it yourself</h2>
              <p className="text-black mb-4 font-bold">
                Click the live demo and ask about your symptoms in plain English:
              </p>
              <div className="bg-gray-100 border-2 border-black p-4 mb-4 transform rotate-1">
                <p className="text-black mb-2 font-black">👉 Launch the Voice Nurse</p>
                <p className="text-gray-600 text-sm font-bold italic">(Works best on Chrome/Edge with a headset.)</p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-black text-black mb-4">Youtube demo presentation:</h3>
                <div className="bg-gray-100 border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <div className="aspect-video bg-white border-2 border-black flex items-center justify-center mb-4 overflow-hidden">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/YvmDjSutYFo"
                      title="ElevenLabs Hackathon Demo"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>

            {/* What the judges liked */}
            <div className="bg-white border-4 border-black p-8 mb-8 transform -rotate-1 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h2 className="text-3xl font-black text-black mb-6 transform rotate-1">What the judges liked</h2>
              <ul className="text-black space-y-4 font-bold">
                <li className="border-l-4 border-black pl-4"><strong>Practical vertical.</strong> "We were really impressed by the product: you built and the integration it had with the voice agent. We're really excited to see the future of voice agents in healthcare so we're so happy to see what you built." — Angelo, ElevenLabs</li>
                <li className="border-l-4 border-black pl-4"><strong>Polished hand-off.</strong> The smooth transfer to a human line showed a clear path to production use.</li>
                <li className="border-l-4 border-black pl-4"><strong>Complete experience in two hours.</strong> From greeting to booking, everything ran end-to-end and live.</li>
              </ul>
            </div>

            {/* What's next */}
            <div className="bg-white border-4 border-black p-8 mb-8 transform rotate-1 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h2 className="text-3xl font-black text-black mb-6 transform -rotate-1">What's next for the project</h2>
              <ol className="text-black space-y-4 list-decimal list-inside font-bold">
                <li className="border-l-4 border-black pl-4"><strong>HIPAA-grade data handling.</strong> We're mapping out the compliance work needed for US deployment.</li>
                <li className="border-l-4 border-black pl-4"><strong>Multilingual voice models.</strong> Moldovan Romanian and Russian come first, then wider EU languages.</li>
                <li className="border-l-4 border-black pl-4"><strong>Pilot with local clinics.</strong> We're lining up two private practices for a limited beta this autumn.</li>
                <li className="border-l-4 border-black pl-4"><strong>Open-source snippets.</strong> The triage flow and hooks will be published on GitHub after code cleanup.</li>
              </ol>
            </div>

            {/* Why this matters */}
            <div className="bg-white border-4 border-black p-8 mb-8 transform -rotate-1 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h2 className="text-3xl font-black text-black mb-6 transform rotate-1">Why this matters for Aichat.md</h2>
              <p className="text-black mb-4 font-bold">Winning the ElevenLabs hackathon gives us:</p>
              <ul className="text-black space-y-3 font-bold">
                <li className="border-l-4 border-black pl-4">• <strong>$20 000 in voice credits</strong> — enough capacity to serve thousands of patient calls while we refine the product.</li>
                <li className="border-l-4 border-black pl-4">• <strong>Visibility in the AI-voice community</strong>, attracting partners and talent.</li>
                <li className="border-l-4 border-black pl-4">• <strong>Proof that our team ships fast under real-world constraints.</strong></li>
              </ul>
              <p className="text-black mt-6 font-bold border-2 border-black p-4 bg-gray-100">
                This momentum feeds directly into our larger mission: building AI agents that take busywork off human teams so they can focus on high-value conversations.
              </p>
            </div>

            {/* Contact */}
            <div className="bg-white border-4 border-black p-8 mb-8 transform rotate-1 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h2 className="text-3xl font-black text-black mb-4 transform -rotate-1">Got feedback or want to run a pilot?</h2>
              <p className="text-black mb-4 font-bold">
                Email us at <span className="bg-black text-white px-2 py-1 transform rotate-1 inline-block">info@aichat.md</span> — we'd love to talk.
              </p>
              <p className="text-black text-sm font-bold">22 July 2025</p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <Link
              href="/demo"
              className="inline-flex items-center gap-2 bg-black text-white font-black px-8 py-4 border-4 border-black hover:bg-white hover:text-black transition-all duration-300 transform hover:translate-x-2 hover:translate-y-2 hover:shadow-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              <Zap className="w-5 h-5" />
              Try Our Voice AI Technology
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
