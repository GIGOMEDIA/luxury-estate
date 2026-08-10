import React from 'react'
import { Link } from 'react-router-dom'

const ArticleCard = ({ title, description, image, category }) => {
  return (
    <article className="group flex flex-col rounded-xl overflow-hidden shadow-sm border border-[#E5E7EB] hover:shadow-lg transition-shadow">
      <div className="relative h-48 bg-slate-200 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
      </div>

      <div className="flex-1 flex flex-col p-6">
        <p className="text-xs font-semibold text-[#0B2A52] tracking-wider uppercase mb-2">{category}</p>
        <h3 className="text-lg font-bold text-[#0B2A52] mb-3 group-hover:text-[#0B2A52]/80">{title}</h3>
        <p className="text-sm text-[#6B7280] mb-4 flex-1">{description}</p>
        <Link to="/collections" className="inline-flex items-center gap-2 text-sm font-medium text-[#0B2A52] group-hover:gap-3 transition-all">
          Read Article
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 8H15M10 3L15 8L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </article>
  )
}

export default ArticleCard
