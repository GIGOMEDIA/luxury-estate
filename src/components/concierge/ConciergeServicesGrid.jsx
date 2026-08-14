import React from 'react'
import { Scale, Plane, Building2, ShieldCheck } from 'lucide-react'
import { resolveMediaUrl } from '../../lib/media'

const ConciergeServicesGrid = ({ services = [], loading = false }) => {
  if (loading) {
    return (
      <section id="concierge-services" className="bg-[#F3F6FC] py-14 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-3xl font-bold text-[#00162E]">Bespoke Advisory</h2>
            <p className="text-sm text-[#5B6470] mt-2">Loading our premium lifestyle services...</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className={`h-72 bg-slate-200 rounded-2xl animate-pulse ${i === 0 || i === 3 ? 'md:col-span-2' : ''}`}
              />
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (!services.length) {
    return (
      <section id="concierge-services" className="bg-[#F3F6FC] py-14 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl p-12 border border-slate-200 max-w-2xl mx-auto shadow-xs">
            <ShieldCheck className="w-12 h-12 text-[#00162E] mx-auto mb-4 opacity-80" />
            <h3 className="text-xl font-bold text-[#00162E]">Bespoke Services Directory</h3>
            <p className="text-sm text-[#5B6470] mt-2">
              Our concierge catalog is currently being updated for institutional client access. Please contact an advisor directly for immediate assistance.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="concierge-services" className="bg-[#F3F6FC] py-14 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-9 lg:mb-10">
          <h2 className="text-[30px] sm:text-4xl font-bold text-[#00162E] mb-3 tracking-tight">Bespoke Advisory</h2>
          <p className="text-sm sm:text-[15px] text-[#5B6470] leading-relaxed max-w-xl mx-auto">
            Our specialized divisions provide seamless coordination of your most complex lifestyle requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 items-stretch">
          {services.map((card, index) => {
            const isFullWidth = card.span || index === 0 || index === services.length - 1
            const isAccentCard = card.accent || card.type === 'accent' || card.title?.toLowerCase().includes('legal')
            const imgUrl = resolveMediaUrl(card.image || card.imageUrl || card.icon)

            if (isAccentCard) {
              return (
                <div
                  key={card.id || card._id || card.title}
                  className="bg-[#173A67] text-white rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col justify-between min-h-75"
                >
                  <div>
                    <Scale className="w-10 h-10 text-white mb-6" />
                    <h3 className="text-2xl font-bold mb-3 tracking-tight">{card.title}</h3>
                    <p className="text-sm sm:text-[15px] text-slate-200 leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  {card.bullets && card.bullets.length > 0 && (
                    <ul className="mt-6 space-y-2 text-sm text-white/90 border-t border-white/10 pt-4">
                      {card.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-white inline-block" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )
            }

            return (
              <div
                key={card.id || card._id || card.title}
                className={`relative overflow-hidden rounded-2xl shadow-lg min-h-75 bg-slate-900 ${isFullWidth ? 'md:col-span-2' : ''
                  }`}
              >
                {imgUrl ? (
                  <>
                    <img
                      src={imgUrl}
                      alt={card.title}
                      className="absolute inset-0 h-full w-full object-cover opacity-80 hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[#00162E]/90 via-[#00162E]/30 to-transparent" />
                  </>
                ) : (
                  <div className="absolute inset-0 bg-[#00162E]" />
                )}

                <div className="relative z-10 p-6 sm:p-8 flex h-full items-end">
                  <div className="max-w-md">
                    <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">
                      {card.title}
                    </h3>
                    <p className="text-sm sm:text-[15px] text-white/90 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ConciergeServicesGrid