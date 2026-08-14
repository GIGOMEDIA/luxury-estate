import React from 'react'

const CollectionsHero = () => {
  return (
    <section className="relative overflow-hidden bg-slate-900">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80"
          alt="Curated collections background"
          className="h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-linear-to-b from-slate-950/60 via-slate-900/40 to-white" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-28 lg:py-32 min-h-95 flex items-end">
        <div className="max-w-2xl">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.35em] text-[#0B2A52] mb-4">
            The Anthologies
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0B2A52] mb-4 tracking-tight">
            Collections
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-xl font-medium leading-relaxed">
            Thoughtfully curated narratives defining the luxury real estate landscape
          </p>
        </div>
      </div>
    </section>
  )
}

export default CollectionsHero