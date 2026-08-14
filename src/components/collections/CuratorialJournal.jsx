import React from 'react'
import { Link } from 'react-router-dom'
import ArticleCard from './ArticleCard'
import { resolveMediaUrl } from '../../lib/media'

const CuratorialJournal = ({ articles = [], loading = false }) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex items-center justify-between mb-12">
        <div>
          <h2 className="text-3xl font-bold text-[#0B2A52] mb-2">Curatorial Journal</h2>
          <p className="text-sm text-[#6B7280]">Analytical insights into luxury real estate trends</p>
        </div>
        <Link to="/collections" className="text-[#0B2A52] font-bold hover:underline text-sm">
          View All Articles →
        </Link>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-80 bg-slate-200 rounded-xl animate-pulse" />
          ))}
        </div>
      ) : articles.length === 0 ? (
        <div className="text-center py-12 bg-slate-50 rounded-xl border border-dashed border-slate-200">
          <p className="text-slate-500 text-sm">No journal articles published at this time.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <ArticleCard
              key={article.id || article._id || article.title || idx}
              id={article.id || article._id}
              title={article.title}
              description={article.description || article.excerpt}
              image={resolveMediaUrl(article.image || article.imageUrl || article.cover)}
              category={article.category || 'INSIGHTS'}
              slug={article.slug}
            />
          ))}
        </div>
      )}
    </section>
  )
}

export default CuratorialJournal