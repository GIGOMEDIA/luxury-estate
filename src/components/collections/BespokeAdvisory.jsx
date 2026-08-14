import React from 'react'

const BespokeAdvisory = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mt-8">
      <div className="bg-[#0B2A52] rounded-3xl px-8 sm:px-12 py-16 text-center text-white">
        <p className="text-xs font-semibold tracking-widest text-slate-300 mb-4">BESPOKE ADVISORY</p>
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">Can't find your ideal narrative?</h2>
        <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
          Our curators specialize in unearthing off-market treasures tailored to your specific lifestyle requirements. Request a private curation and let us compose your next chapter.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-[#0B2A52] px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors">
            Request Custom Curator
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
            Speak with an Advisor
          </button>
        </div>
      </div>
    </section>
  )
}

export default BespokeAdvisory
