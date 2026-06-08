import React from 'react'
import PrimaryEstateView from '../../assets/primary-estate-view.png'

const Marker = ({ label, className }) => (
  <div className={`absolute ${className} flex flex-col items-center`}>
    <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#0B2A52] shadow-lg">
      {label}
    </span>
    <span className="h-4 w-px bg-[#0B2A52] opacity-60" />
  </div>
)

const MapPanel = () => {
  return (
    <section className="relative min-h-140 lg:min-h-205 overflow-hidden rounded-none lg:rounded-l-3xl bg-slate-700 shadow-[0_10px_28px_rgba(15,38,84,0.08)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_24%,rgba(255,255,255,0.12),transparent_24%),linear-gradient(145deg,#687688_0%,#8794a4_32%,#6f7a88_58%,#53616f_100%)]" />
      <div className="absolute inset-0 opacity-40 mix-blend-screen" style={{ backgroundImage: `url(${PrimaryEstateView})`, backgroundSize: 'cover', backgroundPosition: 'center', filter: 'grayscale(1) blur(2px)' }} />
      <div className="absolute inset-0 bg-[#2b3541]/55" />

      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)', backgroundSize: '120px 120px' }} />
      <div className="absolute inset-0 opacity-50" style={{ backgroundImage: 'radial-gradient(circle at 20% 70%, rgba(255,255,255,0.2) 0 2px, transparent 2px), radial-gradient(circle at 72% 53%, rgba(255,255,255,0.16) 0 2px, transparent 2px), radial-gradient(circle at 60% 86%, rgba(255,255,255,0.16) 0 2px, transparent 2px)', backgroundSize: '240px 240px' }} />

      <div className="absolute left-4 sm:left-6 top-20 flex flex-col gap-3 z-20">
        <button className="size-10 rounded-lg bg-white text-[#002045] shadow-md">+</button>
        <button className="size-10 rounded-lg bg-white text-[#002045] shadow-md">−</button>
        <button className="size-10 rounded-lg bg-white text-[#002045] shadow-md flex items-center justify-center">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="9" cy="9" r="5" stroke="#002045" strokeWidth="1.6" />
            <circle cx="9" cy="9" r="1.6" fill="#002045" />
          </svg>
        </button>
      </div>

      <Marker label="$12.4M" className="left-[44%] top-[33%]" />
      <Marker label="$15.2M" className="right-[18%] top-[48%]" />
      <Marker label="$8.9M" className="right-[28%] bottom-[24%]" />

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
        <div className="inline-flex items-center rounded-full bg-[#0B2A52] p-1 shadow-lg">
          <button className="rounded-full bg-[#0A2242] px-5 py-2 text-xs font-medium text-white">Map View</button>
          <button className="rounded-full px-5 py-2 text-xs font-medium text-white/65">Grid View</button>
        </div>
      </div>
    </section>
  )
}

export default MapPanel