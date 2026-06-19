import React from 'react'
import HeroImage from '../../assets/primary-estate-view.png'

const CollectionsHero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={HeroImage} alt="Curated collections background" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-white/72" />
        <div className="absolute inset-0 bg-linear-to-b from-white/50 via-white/30 to-[#F3F6FC]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-28 lg:py-32 min-h-95 flex items-end">
        <div className="max-w-2xl">
          <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-[#0B2A52]/50 mb-4">The Anthologies</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0B2A52] mb-4">Collections</h1>
          <p className="text-base sm:text-lg text-[#334155] max-w-xl">Thoughtfully curated narratives defining the luxury real estate landscape</p>
        </div>
      </div>
    </section>
  )
}

export default CollectionsHero
