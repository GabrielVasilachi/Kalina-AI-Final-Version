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
