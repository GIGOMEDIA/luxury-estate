import React from 'react'
import { Link } from 'react-router-dom'

const PropertyResultCard = ({ image, featured, amount, title, address, beds, baths, area, slug }) => {
  return (
    <article className="bg-white rounded-2xl shadow-xs hover:shadow-md overflow-hidden border border-[#E8EEF7] transition-all duration-300 group">
      <Link to={slug ? `/properties/${slug}` : '/properties'} className="block">
        <div className="relative h-56 sm:h-64 bg-slate-900">
          {image ? (
            <img
              src={image}
              alt={title || 'Estate view'}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
            />
          ) : (
            <div className="w-full h-full bg-slate-800 flex items-center justify-center text-slate-500 text-xs">
              No Image Available
            </div>
          )}
          <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />

          {featured && (
            <div className="absolute left-0 bottom-0 bg-[#002045] text-white text-[10px] font-extrabold tracking-[0.2em] px-3.5 py-1.5 rounded-tr-xl">
              FEATURED
            </div>
          )}
        </div>

        <div className="p-5">
          <div className="flex flex-col gap-2">
            <div>
              <p className="text-xl font-extrabold text-[#002045] leading-tight">{amount || 'Price Upon Request'}</p>
              <h3 className="mt-1 text-base font-bold text-[#002045] group-hover:text-blue-900 transition-colors truncate">
                {title}
              </h3>
              {address && <p className="mt-0.5 text-xs font-medium text-[#697082] truncate">{address}</p>}
            </div>

            <div className="flex items-center gap-4 text-xs font-bold text-[#697082] pt-2 border-t border-slate-100 mt-2">
              {beds !== undefined && (
                <span className="inline-flex items-center gap-1">
                  {beds} Beds
                </span>
              )}
              {baths !== undefined && (
                <span className="inline-flex items-center gap-1">
                  {baths} Baths
                </span>
              )}
              {area && (
                <span className="inline-flex items-center gap-1">
                  {area} sqft
                </span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </article>
  )
}

export default PropertyResultCard