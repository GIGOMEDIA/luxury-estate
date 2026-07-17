import React, { useState } from 'react'

const CollectionCard = ({ title, description, count, countLabel, image, featured }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="group relative rounded-2xl overflow-hidden h-64 sm:h-72 lg:h-80 cursor-pointer" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className="absolute inset-0 bg-black">
        <img src={image} alt={title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />

      <div className="absolute inset-0 flex flex-col justify-between p-5 sm:p-6">
        <div className="flex justify-end">
          <button className="bg-white/90 hover:bg-white p-2 rounded-full transition-colors">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 10H12M10 8V12" stroke="#0B2A52" strokeWidth="2" strokeLinecap="round" />
              <circle cx="10" cy="10" r="9" stroke="#0B2A52" strokeWidth="1.5" />
            </svg>
          </button>
        </div>

        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{title}</h3>
          <p className="text-xs sm:text-sm text-slate-200 mb-4 line-clamp-2">{description}</p>
          <div className="flex items-center gap-2">
            <span className="inline-block bg-white text-[#0B2A52] text-xs font-semibold px-3 py-1 rounded-full">
              {count} {countLabel}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CollectionCard
