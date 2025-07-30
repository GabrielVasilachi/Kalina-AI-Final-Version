'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/lib/i18n'

export function TestimonialsSection() {
  const { t, translations } = useLanguage()
  const testimonials = translations?.testimonials
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  // Prevent rendering if testimonials or testimonialsList is not loaded
  if (!testimonials || !Array.isArray(testimonials.testimonialsList) || testimonials.testimonialsList.length === 0) {
    return null // or a loading spinner if you want
  }

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-6">
            {testimonials?.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {testimonials?.subtitle}
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="bg-gray-50 rounded-2xl shadow-lg p-8 mb-12 border border-gray-300 hover:shadow-2xl hover:shadow-brand-400/20 hover:scale-[1.02] transition-all duration-500 group">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Testimonial Content */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <div className="text-4xl mr-4 group-hover:scale-110 transition-transform duration-300">
                  {testimonials?.testimonialsList?.[activeTestimonial]?.avatar}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black group-hover:text-brand-500 transition-colors duration-300">
                    {testimonials?.testimonialsList?.[activeTestimonial]?.name}
                  </h3>
                  <p className="text-gray-600 group-hover:text-brand-400 transition-colors duration-300">
                    {testimonials?.testimonialsList?.[activeTestimonial]?.position}
                  </p>
                  <p className="text-sm text-gray-500 group-hover:text-brand-300 transition-colors duration-300">
                    {testimonials?.testimonialsList?.[activeTestimonial]?.company} • {testimonials?.testimonialsList?.[activeTestimonial]?.industry}
                  </p>
                </div>
              </div>
              
              <blockquote className="text-lg text-gray-800 mb-6 italic group-hover:text-brand-600 transition-colors duration-300">
                "{testimonials?.testimonialsList?.[activeTestimonial]?.quote}"
              </blockquote>

              {/* Before/After */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-red-50 rounded-lg p-4 hover:bg-red-100 hover:shadow-lg transition-all duration-300">
              <h4 className="font-semibold text-red-700 mb-2">{testimonials?.labels?.beforeLabel}</h4>
              <p className="text-red-600 text-sm">
                {testimonials?.testimonialsList?.[activeTestimonial]?.beforeAfter?.before}
              </p>
                </div>
                <div className="bg-green-50 rounded-lg p-4 hover:bg-green-100 hover:shadow-lg transition-all duration-300">
              <h4 className="font-semibold text-green-700 mb-2">{testimonials?.labels?.afterLabel}</h4>
              <p className="text-green-600 text-sm">
                {testimonials?.testimonialsList?.[activeTestimonial]?.beforeAfter?.after}
              </p>
                </div>
              </div>
            </div>

            {/* Metrics */}
            <div className="bg-black text-white rounded-xl p-6 hover:bg-gradient-to-br hover:from-black hover:to-brand-700 hover:scale-105 transition-all duration-300">
              <h4 className="text-lg font-bold mb-6">{testimonials?.labels?.measurableResults}</h4>
              <div className="space-y-4">
                <div className="text-center hover:scale-110 transition-transform duration-300">
                  <div className="text-3xl font-bold text-green-400 mb-1">
                    {testimonials?.testimonialsList?.[activeTestimonial]?.metrics?.increase}
                  </div>
                  <div className="text-sm text-gray-300">{testimonials?.labels?.businessGrowth}</div>
                </div>
                <div className="text-center hover:scale-110 transition-transform duration-300">
                  <div className="text-2xl font-bold text-blue-400 mb-1">
                    {testimonials?.testimonialsList?.[activeTestimonial]?.metrics?.savings}
                  </div>
                  <div className="text-sm text-gray-300">{testimonials?.labels?.monthlySavings}</div>
                </div>
                <div className="text-center hover:scale-110 transition-transform duration-300">
                  <div className="text-2xl font-bold text-yellow-400 mb-1">
                    {testimonials?.testimonialsList?.[activeTestimonial]?.metrics?.rating}
                  </div>
                  <div className="text-sm text-gray-300">{testimonials?.labels?.clientRating}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {testimonials?.testimonialsList?.map((testimonial: any, index: number) => (
            <button
              key={index}
              onClick={() => setActiveTestimonial(index)}
              className={`p-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                activeTestimonial === index
                  ? 'bg-black text-white shadow-xl'
                  : 'bg-white text-gray-950 hover:bg-brand-50 hover:border-brand-300 hover:text-brand-600 border border-gray-300 glass-card'
              }`}
            >
            <div className="text-2xl mb-2">{testimonial?.avatar}</div>
            <div className="text-sm font-medium">{testimonial?.company}</div>
            <div className="text-xs text-gray-500">{testimonial?.industry}</div>
            </button>
          ))}
        </div>

        {/* Industry Stats */}
        <div className="bg-white rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-black mb-8 text-center">
            {testimonials?.labels?.industryResultsTitle}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials?.industryStats?.map((stat: any, index: number) => (
              <div key={index} className="text-center p-6 bg-gray-100 border border-gray-300 rounded-xl">
                <h4 className="font-bold text-black mb-4">{stat?.industry}</h4>
                <div className="space-y-3">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">{stat?.clients}</div>
                    <div className="text-sm text-gray-600">{testimonials?.labels?.activeClients}</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-green-600">{stat?.avgROI}</div>
                    <div className="text-sm text-gray-600">{testimonials?.labels?.averageROI}</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-yellow-600">{stat?.satisfaction}</div>
                    <div className="text-sm text-gray-600">{testimonials?.labels?.satisfaction}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-black mb-4">
            {testimonials?.cta?.title}
          </h3>
          <p className="text-gray-600 mb-8">
            {testimonials?.cta?.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/getting-started"
              className="bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors font-semibold text-lg"
            >
              {testimonials?.cta?.primaryButton}
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-black text-black px-8 py-4 rounded-lg hover:bg-black hover:text-white transition-all duration-200 font-semibold text-lg"
            >
              {testimonials?.cta?.secondaryButton}
            </Link>
          </div>
          <div className="text-sm text-gray-500 mt-6">
            {testimonials?.cta?.benefits}
          </div>
        </div>
      </div>
    </section>
  )
}
