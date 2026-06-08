import React from 'react'
import Sold1 from '../../assets/recently-sold-1.png'
import Sold2 from '../../assets/recently-sold-2.png'
import Sold3 from '../../assets/recently-sold-3.png'
import Sold4 from '../../assets/recently-sold-4.png'

const RecentlySold = () => {
  const sold = [
    { image: Sold1, title: 'The Helix House' },
    { image: Sold2, title: 'Sutton Place Flat' },
    { image: Sold3, title: 'Crestview Estate' },
    { image: Sold4, title: 'The Artisan Studio' },
  ]

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pb-12">
      <div className="text-center mb-8">
        <h3 className="text-xl font-semibold text-[#002045]">Recently Sold</h3>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {sold.map((s, i) => (
          <div key={i} className="rounded-lg overflow-hidden bg-white shadow-sm">
            <div className="relative h-36">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${s.image})` }}></div>
              <div className="absolute inset-0 bg-black/30"></div>
              <div className="absolute left-3 bottom-3 bg-white/90 text-[#002045] text-xs px-2 py-1 rounded-md font-medium">Sold</div>
            </div>
            <div className="p-3">
              <p className="text-sm font-medium text-[#002045]">{s.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default RecentlySold
