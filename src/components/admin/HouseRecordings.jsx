import React from 'react';
import { UploadCloud, Video } from 'lucide-react';
import { resolveMediaUrl } from '../../lib/media';

const HouseRecordings = ({ items = [], loading = false }) => {
  return (
    <section className="bg-white rounded-2xl border border-slate-100 shadow-xs p-6 lg:col-span-8 space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-[25px] font-bold text-[#002045]">House Recordings</h3>
          <p className="text-[15px] text-slate-400 mt-0.5">Manage immersive video tours and cinematic walkthroughs.</p>
        </div>
        <button className="px-4 py-2 bg-slate-50 border border-slate-200 text-[#002045] hover:bg-slate-100 text-[15px] font-bold rounded-xl flex items-center gap-2 transition cursor-pointer">
          <UploadCloud className="w-4 h-4" /> Upload New Tour
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {loading ? (
          [...Array(4)].map((_, i) => (
            <div key={i} className="space-y-2 animate-pulse">
              <div className="aspect-video rounded-xl bg-slate-200"></div>
              <div className="h-4 bg-slate-200 rounded-md w-3/4"></div>
              <div className="h-3 bg-slate-100 rounded-md w-1/2"></div>
            </div>
          ))
        ) : (
          <>
            {items.map((vid) => {
              const status = vid.status || 'PUBLISHED';
              const imgUrl = resolveMediaUrl(vid.imageUrl || vid.image || vid.thumbnailUrl);

              return (
                <div key={vid.id || vid._id} className="space-y-2 group cursor-pointer">
                  <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-900 shadow-2xs">
                    <img
                      src={imgUrl}
                      alt={vid.title || 'Video walkthrough'}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />

                    {status === 'DRAFT' ? (
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center z-10">
                        <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      </div>
                    ) : (
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100">
                        <div className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow-xs text-[#002045] transform scale-95 group-hover:scale-100 transition-transform duration-300">
                          ▶
                        </div>
                      </div>
                    )}

                    {vid.duration && (
                      <span className="absolute top-2 right-2 bg-black/60 text-white font-mono text-[9px] px-1.5 py-0.5 rounded-md z-10">
                        {vid.duration}
                      </span>
                    )}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#002045] truncate">{vid.title}</h4>
                    <div className="flex items-center justify-between text-[10px] text-slate-400 font-medium mt-0.5">
                      <span>{vid.quality || '1080p'}</span>
                      <span className={`font-bold ${status === 'PUBLISHED' ? 'text-emerald-600' : 'text-amber-600'}`}>
                        {status}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="border-2 border-dashed border-slate-200 hover:border-[#002045] rounded-xl flex flex-col items-center justify-center p-4 text-center group transition cursor-pointer aspect-video">
              <Video className="w-5 h-5 text-slate-400 group-hover:text-[#002045] mb-2 transition" />
              <span className="text-xs font-bold text-slate-500 group-hover:text-[#002045] transition">New Recording</span>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default HouseRecordings;