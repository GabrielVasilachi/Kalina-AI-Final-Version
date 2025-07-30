'use client'

import { BasicPageLayout } from '@/components/BasicPageLayout'
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import articlesData from '@/data/articles.json'

// Types for the article structure
interface Article {
  id: string
  title: string
  content: string
  htmlContent?: string
  authorName: string
  sourceDomain: string
  seoMetadata: {
    keywords: string
    metaDescription: string
    metaTitle: string
  }
}

export default function ArticlePage() {
  const params = useParams()
  const [article, setArticle] = useState<Article | null>(null)
  const [loading, setLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    const loadArticle = async () => {
      try {
        // Load the articles and find the specific one
        const data = articlesData as any
        const articles = data.articles || []
        
        const foundArticle = articles.find((a: Article) => a.id === params.id)
        
        if (foundArticle) {
          setArticle(foundArticle)
        } else {
          setNotFound(true)
        }
      } catch (error) {
        console.error('Error loading article:', error)
        setNotFound(true)
      } finally {
        setLoading(false)
      }
    }

    loadArticle()
  }, [params.id])

  // Format content with proper line breaks or use HTML content if available
  const formatContent = (content: string, htmlContent?: string) => {
    // If htmlContent is available, use it with dangerouslySetInnerHTML
    if (htmlContent) {
      return (
        <div 
          className="prose prose-lg max-w-none [&>h1]:text-2xl [&>h1]:font-bold [&>h1]:mb-6 [&>h1]:text-gray-800 [&>h2]:text-xl [&>h2]:font-semibold [&>h2]:mb-4 [&>h2]:text-gray-800 [&>p]:mb-6 [&>p]:leading-relaxed [&>p]:text-lg"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      )
    }
    
    // Fallback to plain text formatting
    return content.split('\n').map((paragraph, index) => {
      if (paragraph.trim() === '') return null
      return (
        <p key={index} className="mb-6 text-gray-700 leading-relaxed text-lg">
          {paragraph}
        </p>
      )
    }).filter(Boolean)
  }

  if (loading) {
    return (
      <BasicPageLayout title="Se încarcă..." description="Se încarcă articolul">
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="container mx-auto px-4 py-20">
            <div className="max-w-4xl mx-auto">
              <div className="animate-pulse">
                <div className="h-8 bg-gray-300 rounded mb-4"></div>
                <div className="h-4 bg-gray-300 rounded mb-2"></div>
                <div className="h-4 bg-gray-300 rounded mb-2"></div>
                <div className="h-4 bg-gray-300 rounded mb-8"></div>
                <div className="h-64 bg-gray-300 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </BasicPageLayout>
    )
  }

  if (notFound || !article) {
    return (
      <BasicPageLayout title="Articol negăsit" description="Articolul căutat nu există">
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="container mx-auto px-4 py-20">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl font-bold text-gray-800 mb-6">
                Articolul nu a fost găsit
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Ne pare rău, articolul pe care îl căutați nu există.
              </p>
              <Link 
                href="/blog"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                ← Înapoi la Blog
              </Link>
            </div>
          </div>
        </div>
      </BasicPageLayout>
    )
  }

  return (
    <BasicPageLayout title={article.seoMetadata.metaTitle} description={article.seoMetadata.metaDescription}>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* SEO Meta Tags */}
        <head>
          <title>{article.seoMetadata.metaTitle}</title>
          <meta name="description" content={article.seoMetadata.metaDescription} />
          <meta name="keywords" content={article.seoMetadata.keywords} />
          <meta property="og:title" content={article.seoMetadata.metaTitle} />
          <meta property="og:description" content={article.seoMetadata.metaDescription} />
          <meta property="og:type" content="article" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={article.seoMetadata.metaTitle} />
          <meta name="twitter:description" content={article.seoMetadata.metaDescription} />
        </head>

        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            {/* Navigation */}
            <div className="mb-8">
              <Link 
                href="/blog"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200 font-medium"
              >
                ← Înapoi la Blog
              </Link>
            </div>

            {/* Article Header */}
            <article className="bg-white rounded-2xl shadow-xl overflow-hidden">
              {/* Hero Image Placeholder */}
              <div className="h-64 md:h-80 bg-blue-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 px-6">
                    {article.title}
                  </h1>
                </div>
              </div>

              {/* Article Content */}
              <div className="p-8 md:p-12">
                {/* Article Meta */}
                <div className="flex flex-wrap items-center justify-between mb-8 pb-6 border-b border-gray-200">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                        {article.authorName.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">{article.authorName}</p>
                        <p className="text-sm text-gray-500">{article.sourceDomain}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      {article.sourceDomain}
                    </span>
                  </div>
                </div>

                {/* Article Body */}
                <div className="prose prose-lg max-w-none">
                  {formatContent(article.content, article.htmlContent)}
                </div>

                {/* Tags */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Cuvinte cheie:</h3>
                  <div className="flex flex-wrap gap-2">
                    {article.seoMetadata.keywords.split(',').map((keyword, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors duration-200"
                      >
                        {keyword.trim()}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Related Articles CTA */}
                <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    Citește mai multe articole
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Descoperă mai multe resurse și ghiduri pentru a-ți optimiza afacerea.
                  </p>
                  <Link 
                    href="/blog"
                    className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
                  >
                    Vezi toate articolele
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </BasicPageLayout>
  )
}
