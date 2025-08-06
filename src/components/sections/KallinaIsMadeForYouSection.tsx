'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/lib/i18n'
import { title } from 'process'

export function KallinaIsMadeForYouSection() {
  const { t } = useLanguage()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

  // Category data with descriptions and content
  const categoryData = [
    {
      name: 'Customer Support',
      title: 'Kallina for Customer Support',
      description: 'Automate support calls and provide instant answers to customers.',
      image: '/KallinaIsMadeForYouSection/1stCategoryImage.png'
    },
    {
      name: 'Sales Teams',
      title: 'Kallina for Sales Teams',
      description: 'Boost sales with AI agents that qualify leads and schedule calls.',
      image: '/KallinaIsMadeForYouSection/2ndCategoryImage.png'
    },
    {
      name: 'Healthcare',
      title: 'Kallina for Healthcare',
      description: 'Handle patient inquiries and appointment scheduling securely.',
      image: '/KallinaIsMadeForYouSection/3rdCategoryImage.png'
    },
    {
      name: 'Real Estate',
      title: 'Kallina for Real Estate',
      description: 'Automate property inquiries and follow-ups for agents.',
      image: '/KallinaIsMadeForYouSection/4thCategoryImage.png'
    },
    {
      name: 'Restaurants',
      title: 'Kallina for Restaurants',
      description: 'Take reservations and answer menu questions automatically.',
      image: '/KallinaIsMadeForYouSection/5thCategoryImage.png'
    },
    {
      name: 'E-commerce',
      title: 'Kallina for E-commerce',
      description: 'Assist shoppers, track orders, and handle returns with AI.',
        image: '/KallinaIsMadeForYouSection/6thCategoryImage.png'
    },
    {
      name: 'Legal Services',
      title: 'Kallina for Legal Services',
      description: 'Screen clients and automate intake for law firms.',
        image: '/KallinaIsMadeForYouSection/7thCategoryImage.png'
    },
    {
      name: 'Insurance',
      title: 'Kallina for Insurance',
      description: 'Process claims and answer policy questions 24/7.',
        image: '/KallinaIsMadeForYouSection/8thCategoryImage.png'
    },
    {
      name: 'Education',
      title: 'Kallina for Education',
      description: 'Automate admissions and student support calls.',
        image: '/KallinaIsMadeForYouSection/9thCategoryImage.png'
    },
    {
      name: 'Finance',
      title: 'Kallina for Finance',
      description: 'Handle account queries and loan applications securely.',
        image: '/KallinaIsMadeForYouSection/10thCategoryImage.png'
    },
    {
      name: 'Hospitality',
      title: 'Kallina for Hospitality',
      description: 'Automate bookings and guest support for hotels.',
        image: '/KallinaIsMadeForYouSection/11thCategoryImage.png'
    },
    {
      name: 'Automotive',
      title: 'Kallina for Automotive',
      description: 'Schedule service appointments and answer vehicle questions.',
        image: '/KallinaIsMadeForYouSection/12thCategoryImage.png'
    },
    {
      name: 'Technology',
      title: 'Kallina for Technology',
      description: 'Support IT helpdesks and automate onboarding.',
        image: '/KallinaIsMadeForYouSection/13thCategoryImage.png'
    },
    {
      name: 'Manufacturing',
      title: 'Kallina for Manufacturing',
      description: 'Automate supply chain and vendor communications.',
        image: '/KallinaIsMadeForYouSection/14thCategoryImage.png'
    },
    {
      name: 'Consulting',
      title: 'Kallina for Consulting',
      description: 'Qualify leads and automate client onboarding.',
        image: '/KallinaIsMadeForYouSection/15thCategoryImage.png'
    },
    {
      name: 'Retail',
      title: 'Kallina for Retail',
      description: 'Answer product questions and automate store support.',
        image: '/KallinaIsMadeForYouSection/16thCategoryImage.png'
    }
  ]

  // State for selected category
  const [selectedCategory, setSelectedCategory] = React.useState(categoryData[0])
  // State for showing all categories on mobile
  const [showAllCategories, setShowAllCategories] = React.useState(false)

  // Handler for category click
  const handleCategoryClick = (category: typeof categoryData[0]) => {
    setSelectedCategory(category)
  }

  // Responsive screen width state
  const [isMobile, setIsMobile] = React.useState(
    typeof window !== 'undefined' ? window.innerWidth < 1024 : false
  )

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Get categories to display based on screen size and state
  const getCategoriesToShow = () => {
    if (!isMobile || showAllCategories) {
      return categoryData
    }
    return categoryData.slice(0, 6) // Show first 6 categories on mobile
  }

  return (
    <section className="relative py-24 sm:py-32 bg-black overflow-hidden">
      <div className="relative z-10 w-full mx-auto flex items-center justify-center">
        <div className="w-full rounded-3xl bg-white shadow-xl min-h-[500px] flex items-center justify-center">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full"
            style={{ marginTop: '40px' }}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
          {/* Left Content */}
          <motion.div className="space-y-8" variants={itemVariants}>

            {/* Main Headline */}
            <motion.h1 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight ml-4 sm:ml-8 lg:ml-24"
              variants={itemVariants}
            >
              <span className="text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl m-2 sm:m-4 lg:m-8">Kallina is made</span>
              <br />
              <span className="bg-gray-600 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl bg-clip-text text-transparent m-2 sm:m-4 lg:m-8">
                for you
              </span>
            </motion.h1>

            {/* Categories Grid */}
            <motion.div 
              className="flex flex-wrap gap-1 ml-4 sm:ml-8 lg:ml-24 mr-4 sm:mr-8 px-2 sm:px-4 justify-start z-30 relative"
              variants={itemVariants}
            >
              {getCategoriesToShow().map((category, index) => (
                <motion.span
                  key={category.name}
                  className={`px-2 sm:px-3 lg:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium border transition-all duration-300 cursor-pointer select-none ${
                    selectedCategory.name === category.name
                      ? 'bg-gray-100 text-gray-700 border-gray-400'
                      : 'bg-white/80 text-gray-700 border-gray-200 hover:bg-gray-50'
                  }`}
                  animate={selectedCategory.name === category.name ? { rotate: 4 } : { rotate: 0 }}
                  transition={{ type: 'spring', stiffness: 2200, damping: 2200 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleCategoryClick(category)}
                >
                  {category.name}
                </motion.span>
              ))}
              
              {/* Show More/Less Button - Only on mobile */}
              <motion.button
                className="lg:hidden px-2 sm:px-3 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium border bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100 transition-all duration-300 cursor-pointer select-none flex items-center gap-1"
                onClick={() => setShowAllCategories(!showAllCategories)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {showAllCategories ? (
                  <>
                    Show Less
                    <svg className="w-3 h-3 transform rotate-180" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </>
                ) : (
                  <>
                    Show More
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </>
                )}
              </motion.button>
            </motion.div>

            {/* Mobile Image - Shows only on small screens */}
            {selectedCategory.image && (
              <motion.div 
                className="lg:hidden flex justify-center mt-8"
                variants={itemVariants}
              >
                <img
                  src={selectedCategory.image}
                  alt={selectedCategory.title}
                  className="w-[160px] h-[160px] sm:w-[192px] sm:h-[192px] scale-[1.6] object-contain drop-shadow-2xl"
                />
              </motion.div>
            )}

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 pt-4"
              variants={itemVariants}
            >
            </motion.div>
          </motion.div>

          {/* Right Content - AI Dashboard Preview */}
          <motion.div 
            className="relative flex flex-col items-center -ml-24"
            variants={itemVariants}
          >
            <div className="relative">
              {/* Image above the white container, overlapping - Hidden on mobile */}
              {selectedCategory.image && (
                <img
                  src={selectedCategory.image}
                  alt={selectedCategory.title}
                  className="hidden lg:block absolute left-1/2 -translate-x-1/2 -top-[260px] w-[400px] h-[400px] object-contain z-20 drop-shadow-2xl pointer-events-none"
                />
              )}
              <motion.div
                className="bg-white rounded-2xl p-6 flex flex-col justify-start items-start relative z-10 -mt-8"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                key={selectedCategory.name}
              >
                <div className="flex flex-col items-center w-full">
                  <div className="flex items-left w-full justify-start mt-0 lg:mt-32">
                    <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mr-2 sm:mr-4 text-center sm:text-left ml-20 sm:ml-32 lg:ml-48 max-w-xs sm:max-w-lg break-words overflow-hidden">{selectedCategory.title}</div>
                  </div>
                  <div className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-700 mt-4 sm:mt-6 lg:mt-7 ml-20 sm:ml-32 lg:ml-48 text-center sm:text-left max-w-xs sm:max-w-lg break-words overflow-hidden">{selectedCategory.description}</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
        </div>
      </div>
    </section>
  )
}
