import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin, Home, DollarSign } from 'lucide-react';
import { resolveMediaUrl } from '../../lib/media';

const HeroSection = ({ content }) => {
  const navigate = useNavigate();
  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [priceRange, setPriceRange] = useState('');

  const title = content?.title || 'Find Your Private Paradise';
  const subtitle = content?.subtitle || "Access an exclusive portfolio of the world's most prestigious estates, curated for the discerning investor.";
  const bgImage = resolveMediaUrl(content?.imageUrl) || 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80';

  const handleSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (location.trim()) params.set('location', location.trim());
    if (propertyType) params.set('type', propertyType);
    if (priceRange.trim()) params.set('maxPrice', priceRange.trim());

    navigate(`/properties?${params.toString()}`);
  };

  return (
    <div className="relative w-full h-[80vh] min-h-155 bg-slate-900 overflow-hidden font-sans">
      <div className="absolute inset-0 bg-linear-to-b from-slate-950/40 via-slate-900/30 to-slate-50 z-10" />

      <img
        src={bgImage}
        alt="Luxe Estate Hero"
        className="absolute inset-0 w-full h-full object-cover opacity-80"
      />

      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto gap-10">
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-4xl drop-shadow-md">
            {title}
          </h1>
          <p className="text-sm sm:text-base text-slate-200 max-w-xl mx-auto leading-relaxed drop-shadow-xs">
            {subtitle}
          </p>
        </div>

        <form onSubmit={handleSearch} className="w-full max-w-md md:max-w-4xl mx-auto">
          <div className="bg-white/95 backdrop-blur-md rounded-2xl md:rounded-full shadow-2xl border border-slate-100 p-3 md:p-2 flex flex-col md:flex-row items-center justify-between gap-2 md:gap-0">

            {/* Location Filter */}
            <div className="flex items-center gap-3 px-4 md:px-6 py-2.5 w-full md:w-auto flex-1 border-b md:border-b-0 md:border-r border-slate-200">
              <MapPin className="w-5 h-5 text-slate-700 shrink-0" />
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Location..."
                className="w-full bg-transparent border-none text-slate-900 font-medium placeholder-slate-400 focus:outline-hidden text-sm"
              />
            </div>

            {/* Type Filter */}
            <div className="flex items-center justify-between gap-3 px-4 md:px-6 py-2.5 w-full md:w-auto flex-1 border-b md:border-b-0 md:border-r border-slate-200">
              <div className="flex items-center gap-3 w-full relative">
                <Home className="w-5 h-5 text-slate-700 shrink-0" />
                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="w-full bg-transparent border-none text-slate-900 font-medium appearance-none focus:outline-hidden text-sm cursor-pointer"
                >
                  <option value="">Property Type</option>
                  <option value="waterfront">Waterfront</option>
                  <option value="penthouse">Penthouse</option>
                  <option value="historic">Historic</option>
                  <option value="villa">Villa</option>
                </select>
              </div>
            </div>

            {/* Price Filter */}
            <div className="flex items-center gap-3 px-4 md:px-6 py-2.5 w-full md:w-auto flex-1 mb-1 md:mb-0">
              <DollarSign className="w-5 h-5 text-slate-700 shrink-0" />
              <input
                type="text"
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                placeholder="Max Price"
                className="w-full bg-transparent border-none text-slate-900 font-medium placeholder-slate-400 focus:outline-hidden text-sm"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full md:w-12 h-12 bg-[#002045] hover:bg-[#003366] rounded-xl md:rounded-full flex items-center justify-center text-white transition shrink-0 cursor-pointer shadow-md py-3 md:py-0 gap-2 md:gap-0"
            >
              <Search className="w-5 h-5" />
              <span className="md:hidden font-bold text-sm">Search Properties</span>
            </button>

          </div>
        </form>
      </div>
    </div>
  );
};

export default HeroSection;