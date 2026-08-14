import React from 'react'
import { Link } from 'react-router-dom'

const AdvisorCard = ({ id, image, name, title, tags, slug }) => {
  const isElite = tags && (tags.includes('ELITE PARTNER') || tags.includes('Elite Partner'))

  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-xs border border-[#E5E7EB] hover:shadow-lg transition-shadow flex flex-col justify-between">
      <div>
        <div className="relative h-72 bg-slate-100 overflow-hidden">
          {image ? (
            <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-slate-200 text-slate-400 font-medium">
              No Photo Available
            </div>
          )}

          {isElite && (
            <div className="absolute top-3 left-3 bg-[#0B2A52] text-white text-[10px] font-bold px-3 py-1.5 rounded shadow-xs">
              ELITE PARTNER
            </div>
          )}
        </div>

        <div className="p-5">
          <h3 className="text-lg font-semibold text-[#0B2A52]">{name}</h3>
          <p className="text-xs font-semibold text-[#6B7280] tracking-wider mt-1 uppercase">{title}</p>

          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {tags.map((tag) => (
                tag.toUpperCase() !== 'ELITE PARTNER' && (
                  <span key={tag} className="inline-block text-xs bg-[#EEF3FA] text-[#0B2A52] px-2.5 py-1 rounded-full font-medium">
                    {tag}
                  </span>
                )
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="px-5 pb-5 pt-0">
        <Link
          to={id || slug ? `/agent-profile/${id || slug}` : `/agents`}
          className="inline-flex items-center gap-2 text-sm font-medium text-[#0B2A52] group-hover:gap-3 transition-all"
        >
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