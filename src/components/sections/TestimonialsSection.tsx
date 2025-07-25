'use client'

import { useState } from 'react'
import Link from 'next/link'

export function TestimonialsSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const testimonials = [
    {
      name: 'Alexandru Marin',
      position: 'Proprietar Restaurant',
      company: 'Bistro Central',
      avatar: 'CH',
      industry: 'Restaurante',
      quote: 'În prima lună cu Kallina.ai am avut 40% mai multe rezervări și zero programări ratate. Ana, agentul nostru AI, lucrează 24/7 și clienții nici nu-și dau seama că nu vorbesc cu o persoană reală.',
      metrics: {
        increase: '+40%',
        savings: '4,500 lei/lună',
        rating: '4.9/5'
      },
      beforeAfter: {
        before: 'Pierdeam 20-30 de apeluri zilnic după program',
        after: 'Zero apeluri pierdute, rezervări automate non-stop'
      }
    },
    {
      name: 'Dr. Maria Popescu',
      position: 'Medic Specialist',
      company: 'Clinica MedExpert',
      avatar: 'MD',
      industry: 'Sănătate',
      quote: 'Pacienții sunt încântați de Mihai, asistentul nostru AI. Programează consultații, răspunde la întrebări și gestionează urgențele cu o empatie incredibilă. Nu mai avem cozi la telefon.',
      metrics: {
        increase: '+60%',
        savings: '7,200 lei/lună',
        rating: '4.8/5'
      },
      beforeAfter: {
        before: 'Asistenta era ocupată 80% din timp cu programări',
        after: 'Focus total pe pacienți, programări 100% automate'
      }
    },
    {
      name: 'Cristian Ionescu',
      position: 'CEO',
      company: 'AutoService Pro',
      avatar: 'ME',
      industry: 'Automotive',
      quote: 'Elena, agentul nostru de vânzări AI, a crescut conversiile cu 250%. Vorbește cu clienții în română perfectă, le explică serviciile și programează vizitele. ROI-ul s-a văzut din prima săptămână.',
      metrics: {
        increase: '+250%',
        savings: '12,000 lei/lună',
        rating: '5.0/5'
      },
      beforeAfter: {
        before: 'Rateam 70% din apelurile din afara programului',
        after: 'Capturăm fiecare lead, 24/7 fără excepție'
      }
    },
    {
      name: 'Andreea Dumitrescu',
      position: 'Proprietar Salon',
      company: 'Beauty Studio',
      avatar: 'BS',
      industry: 'Beauty & Wellness',
      quote: 'Implementarea a durat literal 3 minute. Acum clientele pot programa online, primesc confirmări automate și reminder-uri. Productivitatea salonului a crescut cu 80%.',
      metrics: {
        increase: '+80%',
        savings: '3,800 lei/lună',
        rating: '4.9/5'
      },
      beforeAfter: {
        before: 'Programări doar telefonic în timpul programului',
        after: 'Programări automate 24/7 cu confirmări smart'
      }
    },
    {
      name: 'Radu Constantinescu',
      position: 'Managing Partner',
      company: 'Law Firm & Associates',
      avatar: 'LW',
      industry: 'Juridic',
      quote: 'Clienții noștri apreciază că pot programa consultații juridice oricând. Sistemul filtrează cazurile, colectează informații preliminare și pregătește dosarele. Eficiența a explodat.',
      metrics: {
        increase: '+150%',
        savings: '8,500 lei/lună',
        rating: '4.7/5'
      },
      beforeAfter: {
        before: 'Secretara program 8-17, multe apeluri pierdute',
        after: 'Intake clienți 24/7, dosare pregătite automat'
      }
    }
  ]

  const industryStats = [
    { industry: 'Restaurante', clients: '150+', avgROI: '300%', satisfaction: '4.8/5' },
    { industry: 'Clinici Medicale', clients: '89+', avgROI: '280%', satisfaction: '4.9/5' },
    { industry: 'Service Auto', clients: '76+', avgROI: '420%', satisfaction: '4.7/5' },
    { industry: 'Saloane Beauty', clients: '95+', avgROI: '250%', satisfaction: '4.8/5' },
    { industry: 'Cabinete Juridice', clients: '45+', avgROI: '380%', satisfaction: '4.6/5' },
    { industry: 'Alte Industrii', clients: '200+', avgROI: '310%', satisfaction: '4.8/5' }
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-6">
            Ce Spun Clienții Despre Kallina.ai
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Peste 655+ afaceri românești și-au transformat comunicarea cu clienții. 
            Iată poveștile lor de succes cu rezultate măsurabile.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Testimonial Content */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <div className="text-4xl mr-4">
                  {testimonials[activeTestimonial].avatar}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black">
                    {testimonials[activeTestimonial].name}
                  </h3>
                  <p className="text-gray-600">
                    {testimonials[activeTestimonial].position}
                  </p>
                  <p className="text-sm text-gray-500">
                    {testimonials[activeTestimonial].company} • {testimonials[activeTestimonial].industry}
                  </p>
                </div>
              </div>
              
              <blockquote className="text-lg text-gray-800 mb-6 italic">
                "{testimonials[activeTestimonial].quote}"
              </blockquote>

              {/* Before/After */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-red-50 rounded-lg p-4">
                  <h4 className="font-semibold text-red-700 mb-2">✗ Înainte</h4>
                  <p className="text-red-600 text-sm">
                    {testimonials[activeTestimonial].beforeAfter.before}
                  </p>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-green-700 mb-2">✓ Acum</h4>
                  <p className="text-green-600 text-sm">
                    {testimonials[activeTestimonial].beforeAfter.after}
                  </p>
                </div>
              </div>
            </div>

            {/* Metrics */}
            <div className="bg-black text-white rounded-xl p-6">
              <h4 className="text-lg font-bold mb-6">Rezultate Măsurabile</h4>
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-1">
                    {testimonials[activeTestimonial].metrics.increase}
                  </div>
                  <div className="text-sm text-gray-300">Creștere Business</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400 mb-1">
                    {testimonials[activeTestimonial].metrics.savings}
                  </div>
                  <div className="text-sm text-gray-300">Economii Lunare</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400 mb-1">
                    {testimonials[activeTestimonial].metrics.rating}
                  </div>
                  <div className="text-sm text-gray-300">Rating Clienți</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {testimonials.map((testimonial, index) => (
            <button
              key={index}
              onClick={() => setActiveTestimonial(index)}
              className={`p-4 rounded-lg transition-all duration-200 ${
                activeTestimonial === index
                  ? 'bg-black text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              <div className="text-2xl mb-2">{testimonial.avatar}</div>
              <div className="text-sm font-medium">{testimonial.company}</div>
              <div className="text-xs text-gray-500">{testimonial.industry}</div>
            </button>
          ))}
        </div>

        {/* Industry Stats */}
        <div className="bg-white rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-black mb-8 text-center">
            Rezultate Pe Industrii
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industryStats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
                <h4 className="font-bold text-black mb-4">{stat.industry}</h4>
                <div className="space-y-3">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">{stat.clients}</div>
                    <div className="text-sm text-gray-600">Clienți Activi</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-green-600">{stat.avgROI}</div>
                    <div className="text-sm text-gray-600">ROI Mediu</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-yellow-600">{stat.satisfaction}</div>
                    <div className="text-sm text-gray-600">Satisfacție</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-black mb-4">
            Gata Să-ți Transformi Business-ul?
          </h3>
          <p className="text-gray-600 mb-8">
            Alătură-te comunității de 655+ antreprenori care și-au automatizat comunicarea
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/getting-started"
              className="bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors font-semibold text-lg"
            >
              Începe Gratuit Acum →
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-black text-black px-8 py-4 rounded-lg hover:bg-black hover:text-white transition-all duration-200 font-semibold text-lg"
            >
              Vezi Toate Cazurile
            </Link>
          </div>
          <div className="text-sm text-gray-500 mt-6">
            ▪ Fără contract pe termen lung • Poți anula oricând • Suport 24/7 inclus
          </div>
        </div>
      </div>
    </section>
  )
}
