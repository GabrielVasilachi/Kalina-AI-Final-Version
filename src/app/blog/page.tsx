'use client'

import { BasicPageLayout } from '@/components/BasicPageLayout'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import articlesData from '@/data/articles.json'

// Types for the new article structure
interface Article {
  id: string
  title: string
  content: string
  authorName: string
  sourceDomain: string
  seoMetadata: {
    keywords: string
    metaDescription: string
    metaTitle: string
  }
}

interface ArticlesData {
  articles: Article[]
}

export default function Blog() {
  const [articles, setArticles] = useState<Article[]>([])
  const [filteredArticles, setFilteredArticles] = useState<Article[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string>('toate')
  const [selectedTag, setSelectedTag] = useState<string>('toate')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadArticles = async () => {
      try {
        // Try to load from the articles.json file
        const data = articlesData as any
        const articlesList = data.articles || []
        setArticles(articlesList)
        setFilteredArticles(articlesList)
      } catch (error) {
        console.log('Articles file not found, showing empty state')
        setArticles([])
        setFilteredArticles([])
      } finally {
        setLoading(false)
      }
    }

    loadArticles()
  }, [])

  // Get unique categories from articles (using sourceDomain as category)
  const categories = ['toate', ...Array.from(new Set(articles.map(article => 
    article.sourceDomain
  )))]

  // Get unique tags from articles (using keywords)
  const allTags = articles.flatMap(article => 
    article.seoMetadata.keywords.split(',').map(keyword => keyword.trim())
  )
  const tags = ['toate', ...Array.from(new Set(allTags))]

  // Filter articles by category and tag
  useEffect(() => {
    let filtered = articles

    // Filter by category
    if (selectedCategory !== 'toate') {
      filtered = filtered.filter(article => article.sourceDomain === selectedCategory)
    }

    // Filter by tag
    if (selectedTag !== 'toate') {
      filtered = filtered.filter(article => 
        article.seoMetadata.keywords.split(',').map(k => k.trim()).includes(selectedTag)
      )
    }

    setFilteredArticles(filtered)
  }, [selectedCategory, selectedTag, articles])

  // Extract excerpt from content
  const getExcerpt = (content: string, maxLength: number = 150): string => {
    // Remove HTML tags and get plain text
    const plainText = content.replace(/<[^>]*>/g, '').replace(/\\n/g, ' ')
    if (plainText.length <= maxLength) return plainText
    return plainText.substring(0, maxLength).trim() + '...'
  }

  // Function to get the most representative tag for an article
  const getRepresentativeTag = (article: Article): string => {
    const articleTags = article.seoMetadata.keywords.split(',').map(keyword => keyword.trim())
    
    // Priority order for tag selection (most important first)
    const priorities = [
      'AI', 'inteligență artificială', 'aichat', 'automatizare', 'Moldova',
      'business', 'afaceri', 'tehnologie', 'digital', 'inovație'
    ]
    
    // Find the first priority tag that exists in the article
    for (const priority of priorities) {
      const found = articleTags.find(tag => 
        tag.toLowerCase().includes(priority.toLowerCase()) || 
        priority.toLowerCase().includes(tag.toLowerCase())
      )
      if (found) return found
    }
    
    // If no priority tag found, return the first tag
    return articleTags[0] || 'general'
  }

  if (loading) {
    return (
      <BasicPageLayout
        title="Blog"
        description="Ultimele articole și insights despre AI și tehnologie"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex justify-center items-center py-16">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        </div>
      </BasicPageLayout>
    )
  }

  return (
    <BasicPageLayout
      title="Blog"
      description="Ultimele articole și insights despre AI și tehnologie"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-0">
        {/* Header */}
       

        {/* Filter Reset Button */}
        {(selectedCategory !== 'toate' || selectedTag !== 'toate') && (
          <div className="text-center mb-6">
            <button
              onClick={() => {
                setSelectedCategory('toate')
                setSelectedTag('toate')
              }}
              className="px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors text-sm font-medium"
            >
              Resetează filtrele
            </button>
          </div>
        )}

        {/* Media Appearances Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Apariții în Media</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kallina AI în atenția presei naționale și internaționale - recunoașterea succesului nostru în domeniul inteligenței artificiale
            </p>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="divide-y divide-gray-200">
              {/* NewsMaker.md */}
              <a 
                href="https://newsmaker.md/ru/video-rabotaet-bez-sna-i-vyhodnyh-ii-pomoshnik-sozdannyi-v-moldove-zanyal-prizovoe-mesto-na-mejdunarodnom-startap-sammite"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center p-6 hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="flex-shrink-0 w-16 h-16 mr-4">
                  <img
                    src="https://newsmaker.md/favicon.ico"
                    alt="NewsMaker.md"
                    className="w-full h-full object-contain bg-gray-100 rounded-lg p-2"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const next = e.currentTarget.nextElementSibling;
                      if (next && 'style' in next && next.style) {
                        (next as HTMLElement).style.display = 'flex';
                      }
                    }}
                  />
                  <div className="w-full h-full bg-gray-100 rounded-lg hidden items-center justify-center">
                    <span className="text-gray-500 text-xs font-medium">NEWS</span>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    NewsMaker.md
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    AI помощник, созданный в Молдове, занял призовое место на международном стартап саммите
                  </p>
                  <div className="flex items-center mt-2">
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">Presă Online</span>
                    <span className="text-xs text-gray-400 ml-3">Featured Article</span>
                  </div>
                </div>
                <div className="flex-shrink-0 ml-4">
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </a>

              {/* YouTube Video 1 */}
              <a 
                href="https://www.youtube.com/watch?v=Xken4Qz0eHQ"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center p-6 hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="flex-shrink-0 w-16 h-16 mr-4">
                  <img
                    src="https://www.youtube.com/s/desktop/8b6ce55d/img/favicon_32x32.png"
                    alt="YouTube"
                    className="w-full h-full object-contain bg-gray-100 rounded-lg p-2"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const next = e.currentTarget.nextElementSibling;
                      if (next && 'style' in next && next.style) {
                        (next as HTMLElement).style.display = 'flex';
                      }
                    }}
                  />
                  <div className="w-full h-full bg-gray-100 rounded-lg hidden items-center justify-center">
                    <span className="text-gray-500 text-xs font-medium">VIDEO</span>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    YouTube Feature
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Kallina AI în reportaj video despre succesul la competițiile internaționale
                  </p>
                  <div className="flex items-center mt-2">
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">Video</span>
                    <span className="text-xs text-gray-400 ml-3">YouTube</span>
                  </div>
                </div>
                <div className="flex-shrink-0 ml-4">
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </a>

              {/* YouTube Video 2 */}
              <a 
                href="https://www.youtube.com/watch?v=QZz-G8WB2v0"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center p-6 hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="flex-shrink-0 w-16 h-16 mr-4">
                  <img
                    src="https://www.youtube.com/s/desktop/8b6ce55d/img/favicon_32x32.png"
                    alt="YouTube"
                    className="w-full h-full object-contain bg-gray-100 rounded-lg p-2"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const next = e.currentTarget.nextElementSibling;
                      if (next && 'style' in next && next.style) {
                        (next as HTMLElement).style.display = 'flex';
                      }
                    }}
                  />
                  <div className="w-full h-full bg-gray-100 rounded-lg hidden items-center justify-center">
                    <span className="text-gray-500 text-xs font-medium">VIDEO</span>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    YouTube Interview
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Interviu live despre tehnologia AI și viitorul automatizării în Moldova
                  </p>
                  <div className="flex items-center mt-2">
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">Video Live</span>
                    <span className="text-xs text-gray-400 ml-3">YouTube</span>
                  </div>
                </div>
                <div className="flex-shrink-0 ml-4">
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </a>

              {/* Facebook Video */}
              <a 
                href="https://www.facebook.com/watch/?mibextid=wwXIfr&v=524671923439667&rdid=Kum9Z7oLZP7Morp8"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center p-6 hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="flex-shrink-0 w-16 h-16 mr-4">
                  <img
                    src="https://www.facebook.com/favicon.ico"
                    alt="Facebook"
                    className="w-full h-full object-contain bg-gray-100 rounded-lg p-2"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const next = e.currentTarget.nextElementSibling;
                      if (next && 'style' in next && next.style) {
                        (next as HTMLElement).style.display = 'flex';
                      }
                    }}
                  />
                  <div className="w-full h-full bg-gray-100 rounded-lg hidden items-center justify-center">
                    <span className="text-gray-500 text-xs font-medium">SOCIAL</span>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    Facebook Feature
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Reportaj special despre echipa Kallina AI și succesurile obținute
                  </p>
                  <div className="flex items-center mt-2">
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">Social Media</span>
                    <span className="text-xs text-gray-400 ml-3">Facebook</span>
                  </div>
                </div>
                <div className="flex-shrink-0 ml-4">
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </a>

              {/* Radio Moldova */}
              <a 
                href="https://radiomoldova.md/tineret"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center p-6 hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="flex-shrink-0 w-16 h-16 mr-4">
                  <img
                    src="https://radiomoldova.md/favicon.ico"
                    alt="Radio Moldova"
                    className="w-full h-full object-contain bg-gray-100 rounded-lg p-2"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const next = e.currentTarget.nextElementSibling;
                      if (next && 'style' in next && next.style) {
                        (next as HTMLElement).style.display = 'flex';
                      }
                    }}
                  />
                  <div className="w-full h-full bg-gray-100 rounded-lg hidden items-center justify-center">
                    <span className="text-gray-500 text-xs font-medium">RADIO</span>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    Radio Moldova
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Emisiunea despre tineret și inovație cu participarea echipei Kallina AI
                  </p>
                  <div className="flex items-center mt-2">
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">Radio</span>
                    <span className="text-xs text-gray-400 ml-3">Emisiune Tineret</span>
                  </div>
                </div>
                <div className="flex-shrink-0 ml-4">
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </a>

              {/* EU4Innovation */}
              <a 
                href="https://eu4innovationeast.eu/moldovan-startups-expand-horizons-through-cross-border-engagement-at-startup-sevan-summit-2025/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center p-6 hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="flex-shrink-0 w-16 h-16 mr-4">
                  <img
                    src="https://eu4innovationeast.eu/favicon.ico"
                    alt="EU4Innovation East"
                    className="w-full h-full object-contain bg-gray-100 rounded-lg p-2"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const next = e.currentTarget.nextElementSibling;
                      if (next && 'style' in next && next.style) {
                        (next as HTMLElement).style.display = 'flex';
                      }
                    }}
                  />
                  <div className="w-full h-full bg-gray-100 rounded-lg hidden items-center justify-center">
                    <span className="text-gray-500 text-xs font-medium">EU</span>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    EU4Innovation East
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Startup-urile moldovenești își extind orizonturile prin Sevan Summit 2025
                  </p>
                  <div className="flex items-center mt-2">
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">Organizație EU</span>
                    <span className="text-xs text-gray-400 ml-3">Official Report</span>
                  </div>
                </div>
                <div className="flex-shrink-0 ml-4">
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </a>

              {/* Diez.md */}
              <a 
                href="https://diez.md/2025/07/30/un-start-up-din-moldova-premiat-cu-locul-ii-si-12-000-de-dolari-la-un-summit-din-armenia-unde-a-concurat-cu-peste-250-de-echipe/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center p-6 hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="flex-shrink-0 w-16 h-16 mr-4">
                  <img
                    src="https://diez.md/favicon.ico"
                    alt="Diez.md"
                    className="w-full h-full object-contain bg-gray-100 rounded-lg p-2"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const next = e.currentTarget.nextElementSibling;
                      if (next && 'style' in next && next.style) {
                        (next as HTMLElement).style.display = 'flex';
                      }
                    }}
                  />
                  <div className="w-full h-full bg-gray-100 rounded-lg hidden items-center justify-center">
                    <span className="text-gray-500 text-xs font-medium">NEWS</span>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    Diez.md
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Start-up din Moldova premiat cu locul II și $12,000 la summit din Armenia
                  </p>
                  <div className="flex items-center mt-2">
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">Presă Online</span>
                    <span className="text-xs text-gray-400 ml-3">Premium Article</span>
                  </div>
                </div>
                <div className="flex-shrink-0 ml-4">
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </a>
            </div>
            
            {/* Summary Footer */}
            <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Total apariții în media:</span>
                <span className="font-semibold text-gray-900">7 organizații</span>
              </div>
              <div className="flex items-center justify-between text-sm mt-1">
                <span className="text-gray-600">Tipuri de media:</span>
                <span className="text-gray-500">3 Video, 3 Presă Online, 1 Radio</span>
              </div>
            </div>
          </div>
        </div>

        {/* Premium Featured Articles */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Articole Premium</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Cele mai importante insights despre AI, automatizare și transformarea digitală pentru business-ul tău
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Article 1 - ElevenLabs Hackathon */}
            <div className="group relative bg-white border-4 border-black overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:-translate-y-1 transform hover:rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="relative p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-black text-white px-4 py-2 border-2 border-black font-black text-xs transform -rotate-2">🏆 1ST PLACE</span>
                  <span className="text-black text-sm font-bold border-2 border-black px-2 py-1 bg-gray-100">5 min citire</span>
                </div>
                <div className="w-16 h-16 bg-black border-4 border-black flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 transform rotate-3">
                  <span className="text-white text-2xl transform -rotate-3">🏆</span>
                </div>
                <h3 className="text-xl font-black text-black mb-3 group-hover:transform group-hover:rotate-1 transition-transform" style={{textShadow: '2px 2px 0px rgba(255,255,255,1), 4px 4px 0px rgba(0,0,0,1)'}}>
                  Câștigătorii ElevenLabs Hackathon: $20,000 pentru Agenții AI
                </h3>
                <p className="text-black mb-6 leading-relaxed font-bold border-l-4 border-black pl-4 bg-gray-100 p-3">
                  Cum am câștigat primul loc la ElevenLabs Hackathon cu tehnologia noastră de agenți AI vocali și ce înseamnă asta pentru viitorul industriei.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-black border-2 border-black flex items-center justify-center transform rotate-6">
                      <span className="text-white font-black text-sm transform -rotate-6">K</span>
                    </div>
                    <span className="text-sm text-black font-black">Echipa Kallina</span>
                  </div>
                  <Link href="/blog/elevenlabs-hackathon-winner" className="text-black bg-white hover:bg-black hover:text-white font-black text-sm flex items-center gap-1 group-hover:gap-2 transition-all border-2 border-black px-3 py-2 transform hover:translate-x-1 hover:translate-y-1 hover:shadow-none shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    Citește <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Article 2 - EBRD Star Venture */}
            <div className="group relative bg-white border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300">
              {/* EBRD Article Image */}
              <div className="aspect-video bg-gray-100 border-b border-gray-200 relative overflow-hidden">
                <img
                  src="/EbdrArticleBlog/image.png"
                  alt="EBRD Program"
                  className="object-cover w-full h-full absolute inset-0"
                />
                <div className="absolute bottom-2 left-2 bg-white/80 rounded px-3 py-1 text-sm font-medium text-gray-800 shadow">EBRD Program</div>
              </div>
              
              <div className="p-6">
                <div className="mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 text-xs font-semibold">SELECTED</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  EBRD ne Selectează pentru Programul Star Venture
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Aichat.md este selectat pentru prestigiosul program Star Venture de la EBRD. Ce înseamnă această recunoaștere pentru dezvoltarea AI în Moldova.
                </p>
                
                <div className="text-xs text-gray-500 mb-4">
                  Gabriel Vasilachi, Partnerships • Jul 16, 2025
                </div>
                
                <Link href="/blog/ebrd-star-venture-program" className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                  Citește articolul →
                </Link>
              </div>
            </div>

            {/* Article 3 - Sevan Startup Summit */}
            <div className="group relative bg-white border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300">
              {/* Image Placeholder */}
              <div className="aspect-video bg-gray-100 border-b border-gray-200 relative overflow-hidden">
                <img
                  src="/gallerySevanStartUp/IMG_6544.jpg"
                  alt="Summit Achievement"
                  className="object-cover w-full h-full absolute inset-0"
                />
                <div className="absolute bottom-2 left-2 bg-white/80 rounded px-3 py-1 text-sm font-medium text-gray-800 shadow">Summit Achievement</div>
              </div>
              
              <div className="p-6">
                <div className="mb-4">
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 text-xs font-semibold">2ND PLACE</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Locul 2 la Sevan Startup Summit: $6,000 pentru Aichat.md
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Performanța excepțională la Sevan Startup Summit ne aduce recunoașterea internațională și finanțarea pentru dezvoltarea ulterioară.
                </p>
                
                <div className="text-xs text-gray-500 mb-4">
                  Echipa Aichat, Competitions • Jul 16, 2025
                </div>
                
                <Link href="/blog/sevan-startup-summit-second-place" className="text-gray-600 hover:text-gray-800 font-medium text-sm">
                  Citește articolul →
                </Link>
              </div>
            </div>

            {/* Article 4 - YoHealth Challenge */}
            <div className="group relative bg-white border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="aspect-video bg-gray-100 border-b border-gray-200 relative overflow-hidden flex items-center justify-center">
                <img
                  src="/gallerySevanStartUp/IMG_5333.JPG"
                  alt="YoHealth Challenge Winners"
                  className="object-cover w-full h-full rounded-lg"
                  style={{ maxHeight: '100%', maxWidth: '100%' }}
                />
                <div className="absolute bottom-2 left-2 bg-white/80 rounded px-3 py-1 text-sm font-medium text-gray-800 shadow">YoHealth Challenge</div>
              </div>
              
              <div className="p-6">
                <div className="mb-4">
                  <span className="bg-green-100 text-green-800 px-3 py-1 text-xs font-semibold">WINNER</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Câștigători YoHealth Challenge: $6,000 pentru Inovația în Sănătate
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Cum tehnologia noastră AI revoluționează sectorul medical și de ce am fost aleși câștigători la YoHealth Challenge Sevan.
                </p>
                
                <div className="text-xs text-gray-500 mb-4">
                  Dr. Maria Health, Healthcare • Jul 16, 2025
                </div>
                
                <Link href="/blog/sevan-startup-summit-second-place" className="text-green-600 hover:text-green-800 font-medium text-sm">
                  Citește articolul →
                </Link>
              </div>
            </div>

            {/* Article 5 - Google Cloud */}
            <div className="group relative bg-white border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="aspect-video bg-gray-100 border-b border-gray-200 relative overflow-hidden flex items-center justify-center">
                <img
                  src="/GoogleCloud/image.png"
                  alt="Google Cloud Partnership"
                  className="object-contain w-2/3 h-2/3"
                  style={{ maxHeight: '220px', maxWidth: '320px' }}
                />
                <div className="absolute bottom-2 left-2 bg-white/80 rounded px-3 py-1 text-sm font-medium text-gray-800 shadow">Google Cloud Partnership</div>
              </div>
              
              <div className="p-6">
                <div className="mb-4">
                  <span className="bg-red-100 text-red-800 px-3 py-1 text-xs font-semibold">BACKED</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Google Cloud ne Susține: $25K Grant pentru Infrastructura AI
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Parteneriatul strategic cu Google Cloud ne permite să scalăm infrastructura AI la nivel global. Detalii despre grant-ul de $25,000.
                </p>
                
                <div className="text-xs text-gray-500 mb-4">
                  Alex Cloud, Partnerships • Jul 16, 2025
                </div>
                
                <Link href="/blog/google-cloud-partnership-grant" className="text-red-600 hover:text-red-800 font-medium text-sm">
                  Citește articolul →
                </Link>
              </div>
            </div>

            {/* Article 6 - UpNext Accelerator */}
            <div className="group relative bg-white border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300">
              {/* Image Placeholder */}
              <div className="aspect-video bg-gray-100 border-b border-gray-200 relative overflow-hidden flex items-center justify-center">
                <img
                  src="/UpNext/image copy.png"
                  alt="Accelerator Program"
                  className="object-contain w-2/3 h-2/3"
                  style={{ maxHeight: '220px', maxWidth: '320px' }}
                />
                <div className="absolute bottom-2 left-2 bg-white/80 rounded px-3 py-1 text-sm font-medium text-gray-800 shadow">Accelerator Program</div>
              </div>
              
              <div className="p-6">
                <div className="mb-4">
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 text-xs font-semibold">ACCELERATED</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Parteneri cu UpNext Accelerator: $10K Start Funding
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Alăturarea programului UpNext Accelerator by Dreamups marchează o nouă etapă în dezvoltarea Aichat.md cu finanțare de $10,000.
                </p>
                
                <div className="text-xs text-gray-500 mb-4">
                  Team Dreamups, Funding • Jul 16, 2025
                </div>
                
                <Link href="/blog/upnext-accelerator-partnership" className="text-purple-600 hover:text-purple-800 font-medium text-sm">
                  Citește articolul →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Tags Filter */}
        {tags.length > 1 && (
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Tag-uri</h3>
            <div className="flex flex-wrap justify-center gap-2 max-h-32 overflow-y-auto">
              {tags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                    selectedTag === tag
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {tag === 'toate' ? 'Toate' : tag}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Articles Grid */}
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <ArticleCard 
                key={article.id} 
                article={article} 
                excerpt={getExcerpt(article.content)}
                representativeTag={getRepresentativeTag(article)}
              />
            ))}
          </div>
        ) : (
          // Empty State
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Niciun articol disponibil</h3>
            <p className="text-gray-500">
              {selectedCategory === 'toate' && selectedTag === 'toate'
                ? 'Nu există articole în momentul acesta. Adaugă articole în fișierul articles.json pentru a le vedea aici.' 
                : `Nu există articole pentru filtrele selectate: ${selectedCategory !== 'toate' ? `categoria "${selectedCategory}"` : ''}${selectedCategory !== 'toate' && selectedTag !== 'toate' ? ' și ' : ''}${selectedTag !== 'toate' ? `tag-ul "${selectedTag}"` : ''}.`
              }
            </p>
          </div>
        )}
      </div>
    </BasicPageLayout>
  )
}

function ArticleCard({ article, excerpt, representativeTag }: { article: Article; excerpt: string; representativeTag: string }) {
  const handleClick = () => {
    // Navigate to the dynamic article page
    window.location.href = `/blog/${article.id}`
  }

  const category = article.sourceDomain
  const author = article.authorName

  return (
    <article 
      onClick={handleClick}
      className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group transform hover:-translate-y-1"
    >
      {/* Image Container - Always show placeholder */}
      <div className="aspect-video bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden">
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-center">
            <svg className="w-16 h-16 text-blue-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <p className="text-sm text-blue-600 font-medium">{category}</p>
          </div>
        </div>
        
        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="bg-white/95 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-xs font-semibold shadow-sm">
            {category}
          </span>
        </div>

        {/* Reading indicator */}
        <div className="absolute top-3 right-3">
          <div className="bg-black/70 text-white px-2 py-1 rounded-full text-xs font-medium">
            {Math.ceil(article.content.length / 1000)} min
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors leading-tight">
          {article.title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
          {excerpt}
        </p>

        {/* Meta Info */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-blue-600 font-semibold text-sm">
                {author.charAt(0).toUpperCase()}
              </span>
            </div>
            <span className="text-sm text-gray-700 font-medium">{author}</span>
          </div>
          
          <div className="text-right">
            <div className="text-xs text-gray-500">
              Recent
            </div>
            <div className="text-xs text-blue-600 font-medium">
              {article.sourceDomain}
            </div>
          </div>
        </div>

        {/* Keywords tags */}
        <div className="mt-3 pt-3 border-t border-gray-50">
          <div className="flex flex-wrap gap-1">
            {article.seoMetadata.keywords.split(',').slice(0, 3).map((keyword, index) => (
              <span 
                key={index}
                className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
              >
                {keyword.trim()}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}
