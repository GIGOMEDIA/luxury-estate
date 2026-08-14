import React from 'react'

const Marker = ({ label, className }) => (
  <div className={`absolute ${className} flex flex-col items-center transform -translate-x-1/2 -translate-y-1/2 z-10 hover:scale-110 transition-transform cursor-pointer`}>
    <span className="rounded-full bg-[#002045] text-white px-3 py-1 text-[11px] font-bold shadow-xl border border-white/20">
      {label}
    </span>
    <span className="h-3 w-0.5 bg-[#002045]" />
  </div>
)

const MapPanel = ({ properties = [], loading = false }) => {
  return (
    <section className="relative min-h-100 lg:min-h-162.5 overflow-hidden rounded-2xl lg:rounded-l-3xl bg-slate-800 shadow-md border border-slate-700/50">
      <div className="absolute inset-0 bg-slate-900" />

      {/* Map Graphic Overlay */}
      <div
        className="absolute inset-0 opacity-20 mix-blend-screen bg-cover bg-center filter grayscale"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80')` }}
      />

      {/* Grid Pattern Lines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }}
      />

      {/* Zoom Controls */}
      <div className="absolute left-4 sm:left-6 top-6 flex flex-col gap-2 z-20">
        <button className="size-9 rounded-lg bg-white/90 text-[#002045] font-bold shadow-md hover:bg-white transition cursor-pointer flex items-center justify-center">+</button>
        <button className="size-9 rounded-lg bg-white/90 text-[#002045] font-bold shadow-md hover:bg-white transition cursor-pointer flex items-center justify-center">−</button>
      </div>

      {/* Render Dynamic Property Markers */}
      {!loading && properties.length > 0 ? (
        properties.slice(0, 5).map((item, index) => {
          const positions = [
            'left-[40%] top-[30%]',
            'left-[65%] top-[45%]',
            'left-[30%] top-[60%]',
            'left-[75%] top-[25%]',
            'left-[50%] top-[70%]',
          ]
          return (
            <Marker
              key={item.id || item._id || index}
              label={item.amount || item.price || 'Inquire'}
              className={positions[index % positions.length]}
            />
          )
        })
      ) : (
        <div className="absolute inset-0 flex items-center justify-center text-slate-400 text-xs font-semibold">
          {loading ? 'Plotting estate coordinates...' : 'Interactive map bounds ready'}
        </div>
      )}

      {/* Bottom Mode Switcher */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
        <div className="inline-flex items-center rounded-full bg-[#002045] p-1 shadow-lg border border-white/10">
          <button className="rounded-full bg-white/15 px-5 py-1.5 text-xs font-bold text-white cursor-pointer">Map View</button>
          <button className="rounded-full px-5 py-1.5 text-xs font-bold text-slate-300 hover:text-white cursor-pointer">Satellite</button>
        </div>
      </div>
    </section>
  )
}

export default MapPanel