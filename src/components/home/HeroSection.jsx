import React from 'react';
import { Search, MapPin, Home, DollarSign } from 'lucide-react';
import PrivateParadiseImg from '../../assets/private-paradise.png';

const HeroSection = ({ content }) => {
  const title = content?.title || 'Find Your Private Paradise'
  const subtitle = content?.subtitle || "Access an exclusive portfolio of the world's most prestigious estates, curated for the discerning investor."

  return (
    <div className="relative w-full h-[80vh] min-h-155 bg-slate-50 overflow-hidden font-sans">
      

      <div className="absolute inset-0 bg-linear-to-b from-slate-50/0 via-slate-50/30 to-slate-50 z-10" />
      
      <img 
        src={PrivateParadiseImg} 
        alt="Luxe Estate Private Paradise Hero" 
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto gap-12">
        
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#002045] max-w-4xl">
            {title}
          </h1>
          <p className="text-sm sm:text-base text-[#645E5C]  max-w-xl mx-auto">
            {subtitle}
          </p>
        </div>

<div className="w-full max-w-md md:max-w-5xl mx-auto">
  <div className="bg-white rounded-2xl md:rounded-full shadow-2xl border border-slate-100/80 p-3 md:p-2 flex flex-col md:flex-row items-center justify-between gap-1 md:gap-0">
    
    <div className="flex items-center gap-3 px-4 md:px-6 py-3 w-full md:w-auto flex-1 border-b md:border-b-0 md:border-r border-slate-100">
      <MapPin className="w-5 h-5 text-slate-800 shrink-0" />
      <input 
        type="text" 
        placeholder="Location" 
        className="w-full bg-transparent border-none text-slate-900 font-medium placeholder-slate-400 focus:outline-hidden text-sm"
      />
    </div>

    <div className="flex items-center justify-between gap-3 px-4 md:px-6 py-3 w-full md:w-auto flex-1 border-b md:border-b-0 md:border-r border-slate-100">
      <div className="flex items-center gap-3 w-full relative">
        <Home className="w-5 h-5 text-slate-800 shrink-0" />
        <select className="w-full bg-transparent border-none text-slate-900 font-medium appearance-none focus:outline-hidden text-sm cursor-pointer dynamic-select">
          <option value="">Property Type</option>
          <option value="waterfront">Waterfront</option>
          <option value="penthouse">Penthouse</option>
          <option value="historic">Historic</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-1 text-slate-400 md:hidden">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>

    <div className="flex items-center gap-3 px-4 md:px-6 py-3 w-full md:w-auto flex-1 mb-2 md:mb-0">
      <DollarSign className="w-5 h-5 text-slate-800 shrink-0" />
      <input 
        type="text" 
        placeholder="Price Range" 
        className="w-full bg-transparent border-none text-slate-900 font-medium placeholder-slate-400 focus:outline-hidden text-sm"
      />
    </div>

    <button className="w-full md:w-12 h-12 bg-slate-950 hover:bg-slate-900 rounded-xl md:rounded-full flex items-center justify-center text-white transition shrink-0 cursor-pointer shadow-md py-3 md:py-0 gap-2 md:gap-0">
      <Search className="w-5 h-5" />
      <span className="md:hidden font-semibold text-sm">Search Properties</span>
    </button>

  </div>
</div>

      </div>
    </div>
  );
};

export default HeroSection;