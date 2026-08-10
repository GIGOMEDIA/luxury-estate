import React from 'react'
import { Link } from 'react-router-dom'

const AdvisorCard = ({ image, name, title, tags }) => {
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-sm border border-[#E5E7EB] hover:shadow-lg transition-shadow">
      <div className="relative h-72 bg-linear-to-br from-slate-200 to-slate-300">
        <img src={image} alt={name} className="w-full h-full object-cover" />
        {tags && tags[0] === 'ELITE PARTNER' && (
          <div className="absolute top-3 left-3 bg-[#0B2A52] text-white text-[10px] font-bold px-3 py-1.5 rounded">
            ELITE PARTNER
          </div>
        )}
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold text-[#0B2A52]">{name}</h3>
        <p className="text-xs font-semibold text-[#6B7280] tracking-wider mt-1">{title}</p>

        {tags && (
          <div className="flex flex-wrap gap-2 mt-3">
            {tags.map((tag) => (
              tag !== 'ELITE PARTNER' && (
                <span key={tag} className="inline-block text-xs bg-[#EEF3FA] text-[#0B2A52] px-2.5 py-1 rounded-full">
                  {tag}
                </span>
              )
            ))}
          </div>
        )}

        <Link to="/agent-profile" className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-[#0B2A52] group-hover:gap-3 transition-all">
          View Portfolio
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 8H15M10 3L15 8L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </div>
  )
}

export default AdvisorCard
