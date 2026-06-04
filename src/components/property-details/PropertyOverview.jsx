import React from 'react';
import { Waves, Clapperboard, Dumbbell, Car, Wine, Cpu } from 'lucide-react';

const PropertyOverview = () => {
  const amenities = [
    { name: 'Infinity Edge Pool', icon: <Waves className="w-5 h-5 text-slate-700" /> },
    { name: 'Private Cinema', icon: <Clapperboard className="w-5 h-5 text-slate-700" /> },
    { name: 'Wellness Studio', icon: <Dumbbell className="w-5 h-5 text-slate-700" /> },
    { name: '8-Car Gallery', icon: <Car className="w-5 h-5 text-slate-700" /> },
    { name: 'Wine Cellar', icon: <Wine className="w-5 h-5 text-slate-700" /> },
    { name: 'Full Home Automation', icon: <Cpu className="w-5 h-5 text-slate-700" /> },
  ];

  return (
    <div className="space-y-8 mt-8">
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-slate-950">Property Overview</h3>
        <p className="text-slate-600 leading-relaxed text-sm md:text-base">
          Designed by renowned architect Marcus Sterling, The Obsidian Pavilion represents the pinnacle of contemporary luxury living. This architectural masterpiece seamlessly integrates natural obsidian stone elements with expansive glass vistas, offering 270-degree views of the Los Angeles basin and the Pacific Ocean.
        </p>
        <p className="text-slate-600 leading-relaxed text-sm md:text-base">
            Every detail has been meticulously curated, from the hand-polished marble floors to the custom-integrated smart home system. The estate features a double-height entry gallery, a professional-grade cinema room, and a 2,000-bottle temperature-controlled wine cellar.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold text-slate-950">Elite Amenities</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {amenities.map((item, idx) => (
            <div key={idx} className="flex items-center gap-4 p-5 bg-linear-to-tr from-slate-50/50 to-slate-50 border border-slate-100 rounded-2xl">
              <div className="p-2 bg-white rounded-xl border border-slate-100 shadow-xs">
                {item.icon}
              </div>
              <span className="text-sm font-semibold text-slate-800">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyOverview;