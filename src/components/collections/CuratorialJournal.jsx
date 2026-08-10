import React from 'react'
import { Link } from 'react-router-dom'
import ArticleCard from './ArticleCard'

const defaultArticles = [
  {
    title: 'The Rise of Branded Residences in 2024',
    description: 'How luxury icons are reshaping residential real estate with unprecedented demand from cultural tastemakers.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    category: 'Market Trends',
  },
  {
    title: 'Quiet Luxury: The Post-Minimalist Home',
    description: 'Moving beyond stark minimalism into layered depth and material richness that whisper rather than shout.',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
    category: 'Design Philosophy',
  },
  {
    title: 'Sustainable Grandeur: The Eco-Estate',
    description: 'Integrating cutting-edge luxury with zero-impact sustainability—new benchmarks in responsible estate design.',
    image: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=80',
    category: 'Innovation',
  },
]

const CuratorialJournal = ({ articles = [] }) => {
  const items = articles.length ? articles : defaultArticles

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex items-center justify-between mb-12">
        <div>
          <h2 className="text-3xl font-bold text-[#0B2A52] mb-2">Curatorial Journal</h2>
          <p className="text-sm text-[#6B7280]">Analytical insights into luxury real estate trends</p>
        </div>
        <Link to="/collections" className="text-[#0B2A52] font-medium hover:text-[#0B2A52]/80 text-sm">
          View All Articles →
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((article) => (
          <ArticleCard key={article.title} {...article} />
        ))}
      </div>
    </section>
  )
}

export default CuratorialJournal
