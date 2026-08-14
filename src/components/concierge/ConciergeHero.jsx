import React from 'react'

const ConciergeHero = () => {
  const scrollToServices = () => {
    const section = document.getElementById('concierge-services')
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative overflow-hidden bg-slate-900">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1600&q=80"
          alt="Private jet experience"
          className="h-full w-full object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-[#00162E]/60" />
        <div className="absolute inset-0 bg-linear-to-r from-[#00162E] via-[#00162E]/70 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-120 lg:min-h-130 py-16 lg:py-20 flex items-center">
        <div className="max-w-xl text-white pt-10 sm:pt-0">
          <p className="text-[10px] sm:text-xs font-bold tracking-[0.36em] text-[#8EA4BD] uppercase mb-4">
            The Pinnacle of Service
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-5 tracking-tight">
            Concierge Excellence for the Global Elite
          </h1>
          <p className="text-sm sm:text-base text-white/90 max-w-lg leading-relaxed mb-8">
            Beyond traditional brokerage, we offer a comprehensive ecosystem of services designed to manage, protect, and enhance your lifestyle and assets.
          </p>
          <button
            onClick={scrollToServices}
            className="inline-flex items-center gap-3 bg-white text-[#00162E] px-6 py-3.5 rounded-xl font-bold shadow-lg hover:bg-slate-100 transition-colors text-sm cursor-pointer"
          >
            Explore Our Services
            <span className="text-lg leading-none">↓</span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default ConciergeHero