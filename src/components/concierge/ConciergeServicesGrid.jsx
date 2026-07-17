import React from 'react'
import InteriorView from '../../assets/interior-view.png'
import VillaAzure from '../../assets/villa-azure.png'

const serviceCards = [
  {
    title: 'Private Aviation Coordination',
    description: 'On-demand chartering, fleet management, and ground logistics across six continents.',
    image: 'https://plus.unsplash.com/premium_photo-1677429923908-0f2348e32f7b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWVyb3BsYW5lJTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D',
    span: 'md:col-span-2'
  },
  {
    title: 'Interior Design',
    description: 'Curation of world-class living spaces with leading designers.',
    image: InteriorView
  },
  {
    title: 'Legal & Tax Services',
    description: 'Strategic structuring advisory for international property acquisition and holding.',
    icon: '',
    bullets: ['Asset Protection', 'Cross-border Compliance'],
    accent: true
  },
  {
    title: 'Property Management',
    description: 'White-glove maintenance, staffing, and security for your global portfolio.',
    image: VillaAzure,
    span: 'md:col-span-2'
  }
]

const ConciergeServicesGrid = () => {
  return (
    <section className="bg-[#F3F6FC] py-14 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-9 lg:mb-10">
          <h2 className="text-[30px] sm:text-4xl font-medium text-[#00162E] mb-3 tracking-tight">Bespoke Advisory</h2>
          <p className="text-sm sm:text-[15px] text-[#5B6470] leading-relaxed max-w-xl mx-auto">
            Our specialized divisions provide seamless coordination of your most complex lifestyle requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 items-stretch">
          {serviceCards.map((card) => (
            <div
              key={card.title}
              className={`relative overflow-hidden rounded-2xl shadow-lg min-h-68.75 ${card.span || ''} ${card.accent ? 'bg-[#173A67] text-white p-6 sm:p-7 flex flex-col justify-between' : ''} ${card.title === 'Legal & Tax Services' ? 'bg-[#173A67]' : ''}`}
            >
              {card.title === 'Legal & Tax Services' ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 1760 1760" className="mb-5">
                  <path d="M0 0h1760v1760H0z" fill="none" />
                  <path fill="#fff" d="M1739 1504q0 53-37 90l-107 108q-39 37-91 37q-53 0-90-37l-363-364q-38-36-38-90q0-53 43-96L800 896l-126 126q-14 14-34 14t-34-14q2 2 12.5 12t12.5 13t10 11.5t10 13.5t6 13.5t5.5 16.5t1.5 18q0 38-28 68q-3 3-16.5 18t-19 20.5T582 1243t-22 15.5t-22 9t-26 4.5q-40 0-68-28L36 836Q8 808 8 768q0-13 4.5-26t9-22T37 698t16.5-18.5t20.5-19T92 644q30-28 68-28q10 0 18 1.5t16.5 5.5t13.5 6t13.5 10t11.5 10t13 12.5t12 12.5q-14-14-14-34t14-34l348-348q14-14 34-14t34 14q-2-2-12.5-12T649 233t-10-11.5t-10-13.5t-6-13.5t-5.5-16.5t-1.5-18q0-38 28-68q3-3 16.5-18t19-20.5T698 37t22-15.5t22-9T768 8q40 0 68 28l408 408q28 28 28 68q0 13-4.5 26t-9 22t-15.5 22t-16.5 18.5t-20.5 19t-18 16.5q-30 28-68 28q-10 0-18-1.5t-16.5-5.5t-13.5-6t-13.5-10t-11.5-10t-13-12.5t-12-12.5q14 14 14 34t-14 34L896 800l256 256q43-43 96-43q52 0 91 37l363 363q37 39 37 91" />
                </svg>

              ) : null}
              {card.image && (
                <>
                  <img src={card.image} alt={card.title} className="absolute inset-0 h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-linear-to-t from-[#00162E]/82 via-[#00162E]/26 to-transparent" />
                </>
              )}

              {card.icon && (
                <div className="text-3xl mb-5">{card.icon}</div>
              )}

              {!card.image && !card.icon ? null : null}

              <div className={`relative z-10  ${card.image ? 'p-5 sm:p-6 flex h-full items-end' : ''}`}>
                <div className={`${card.image ? 'max-w-md' : ''}`}>
                  <h3 className={`text-[22px] sm:text-2xl font-semibold ${card.image ? 'text-white' : 'text-white'} mb-2 tracking-tight`}>{card.title}</h3>
                  <p className={`text-sm sm:text-[15px] ${card.image ? 'text-white/90' : 'text-slate-200'} leading-[1.55] max-w-60`}>
                    {card.title === 'Legal & Tax Services' ? (
                      <>
                        Strategic structuring advisory for <br />
                        international property acquisition and holding.
                      </>
                    ) : (
                      card.description
                    )}
                  </p>

                  {card.bullets && (
                    <ul className="mt-70 space-y-2 text-sm text-white/90">
                      {card.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-center gap-2">
                          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-white/60 text-[10px]">•</span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ConciergeServicesGrid
