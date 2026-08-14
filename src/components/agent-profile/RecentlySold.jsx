import React from 'react'
import { resolvePropertyImage } from '../../lib/media'

const RecentlySold = ({ soldListings = [], loading = false }) => {
  if (loading) {
    return (
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pb-12">
        <h3 className="text-xl font-bold text-[#002045] text-center mb-8">Recently Sold</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-44 bg-slate-200 rounded-xl animate-pulse"></div>
          ))}
        </div>
      </section>
    )
  }

  if (!soldListings.length) return null

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pb-12">
      <div className="text-center mb-8">
        <h3 className="text-xl font-bold text-[#002045]">Recently Sold</h3>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {soldListings.map((s, i) => {
          const imgUrl = resolvePropertyImage(s)
          return (
            <div key={s.id || s._id || i} className="rounded-xl overflow-hidden bg-white shadow-xs border border-slate-100">
              <div className="relative h-36 bg-slate-200">
                {imgUrl ? (
                  <img src={imgUrl} alt={s.title || 'Sold property'} className="w-full h-full object-cover" />
                ) : null}
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute left-3 bottom-3 bg-white/90 text-[#002045] text-xs px-2 py-1 rounded-md font-bold shadow-xs">
                  Sold
                </div>
              </div>
              <div className="p-3">
                <p className="text-sm font-bold text-[#002045] truncate">{s.title || s.name}</p>
                {s.price && <p className="text-xs text-slate-500 font-medium mt-0.5">{s.price}</p>}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default RecentlySold