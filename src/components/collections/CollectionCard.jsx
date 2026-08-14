import React from 'react'
import { useNavigate } from 'react-router-dom'

const CollectionCard = ({ id, title, description, count, countLabel, image, slug }) => {
  const navigate = useNavigate()

  const handleCardClick = () => {
    if (slug || id) {
      navigate(`/collections/${slug || id}`)
    } else {
      navigate('/properties')
    }
  }

  return (
    <div
      onClick={handleCardClick}
      className="group relative rounded-2xl overflow-hidden h-64 sm:h-72 lg:h-80 cursor-pointer shadow-xs hover:shadow-xl transition-all duration-300 bg-slate-900"
    >
      <div className="absolute inset-0">
        {image ? (
          <img
            src={image}
            alt={title || 'Collection'}
            className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500"
          />
        ) : (
          <div className="w-full h-full bg-slate-800" />
        )}
      </div>

      <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/40 to-transparent" />

      <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8">
        <div className="flex justify-end">
          <div className="bg-white/90 group-hover:bg-white p-2.5 rounded-full transition-colors shadow-sm">
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 10H12M10 8V12" stroke="#0B2A52" strokeWidth="2" strokeLinecap="round" />
              <circle cx="10" cy="10" r="9" stroke="#0B2A52" strokeWidth="1.5" />
            </svg>
          </div>
        </div>

        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-amber-200 transition-colors">
            {title}
          </h3>
          {description && (
            <p className="text-xs sm:text-sm text-slate-200 mb-4 line-clamp-2 leading-relaxed">
              {description}
            </p>
          )}
          <div className="flex items-center gap-2">
            <span className="inline-block bg-white/90 text-[#0B2A52] text-xs font-bold px-3 py-1 rounded-full shadow-xs">
              {count} {countLabel || 'Estates'}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CollectionCard