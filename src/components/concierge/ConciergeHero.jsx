import React from 'react'

const ConciergeHero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YWVyb3BsYW5lfGVufDB8fDB8fHww"
          alt="Private jet on runway"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#00162E]/42" />
        <div className="absolute inset-0 bg-linear-to-r from-[#00162E]/72 via-[#00162E]/38 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-135 lg:min-h-107.5 py-16 lg:py-20 flex items-center">
        <div className="max-w-xl text-white pt-10 sm:pt-0">
          <p className="text-[10px] sm:text-xs font-semibold tracking-[0.36em] text-[#8EA4BD] uppercase mb-4">The Pinnacle of Service</p>
          <h1 className="text-[40px] sm:text-5xl lg:text-[56px] font-bold leading-[1.03] mb-5 tracking-tight">
            Concierge Excellence for
            the Global Elite
          </h1>
          <p className="text-sm sm:text-base text-white/90 max-w-97.5 leading-relaxed mb-6">
            Beyond traditional brokerage, we offer a comprehensive ecosystem of services designed to manage, protect, and enhance your lifestyle and assets.
          </p>
          <button className="inline-flex items-center gap-3 bg-white text-[#00162E] px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-slate-50 transition-colors text-sm">
            Explore Our Services
            <span className="text-lg leading-none">↓</span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default ConciergeHero
