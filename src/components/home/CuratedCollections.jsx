import React from 'react';
import WaterfrontImg from '../../assets/Waterfall.png';
import PenthouseImg from '../../assets/penthouse.png';
import HistoricImg from '../../assets/historic.png';

const collectionsData = [
  { id: 1, title: 'Waterfront', count: 124, img: WaterfrontImg },
  { id: 2, title: 'Penthouse', count: 82, img: PenthouseImg },
  { id: 3, title: 'Historic', count: 45, img: HistoricImg },
];

const CuratedCollections = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-16 font-sans">
      
      <div className="flex items-end justify-between border-b border-slate-100 pb-6 mb-10">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
            Signature Styles
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
            Curated Collections
          </h2>
        </div>
        <a 
          href="#collections" 
          className="text-xs font-bold text-slate-900 underline underline-offset-4 hover:text-slate-700 transition"
        >
          View All Collections
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {collectionsData.map((item) => (
          <div 
            key={item.id} 
            className="group relative aspect-4/5 rounded-3xl overflow-hidden shadow-xs cursor-pointer bg-slate-950"
          >
            <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-transparent z-10 transition-opacity duration-300 group-hover:opacity-90" />
            
            <img 
              src={item.img} 
              alt={`${item.title} Collections`} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
            />

            <div className="absolute bottom-0 left-0 w-full p-8 z-20 text-white flex flex-col gap-1">
              <h3 className="text-xl font-bold tracking-wide">
                {item.title}
              </h3>
              <p className="text-xs font-medium text-slate-300/90">
                {item.count} Properties
              </p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default CuratedCollections;