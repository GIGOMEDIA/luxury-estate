import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { resolveMediaUrl } from '../../lib/media';

const CuratedCollections = ({ collections = [], loading = false }) => {
  const navigate = useNavigate();

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 font-sans">
      <div className="flex items-end justify-between border-b border-slate-100 pb-6 mb-10">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
            Signature Styles
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#002045] mt-1">
            Curated Collections
          </h2>
        </div>
        <Link
          to="/collections"
          className="text-xs font-bold text-slate-900 underline underline-offset-4 hover:text-[#002045] transition"
        >
          View All Collections
        </Link>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="w-full max-w-92 h-115 rounded-2xl bg-slate-200 animate-pulse" />
          ))}
        </div>
      ) : collections.length === 0 ? (
        <div className="text-center py-12 bg-slate-50 border border-dashed border-slate-200 rounded-2xl">
          <p className="text-slate-500 text-sm">No curated collections published at this time.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
          {collections.slice(0, 3).map((item) => {
            const imgUrl = resolveMediaUrl(item.coverImageUrl || item.image || item.imageUrl);
            const count = item.propertyIds?.length || item.count || 0;

            return (
              <div
                key={item.id || item._id || item.title}
                onClick={() => navigate(`/collections/${item.slug || item.id || item._id}`)}
                className="group relative w-full max-w-92 h-115 rounded-2xl overflow-hidden shadow-xs cursor-pointer bg-slate-950"
              >
                {imgUrl ? (
                  <img
                    src={imgUrl}
                    alt={`${item.title} Collection`}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-80"
                  />
                ) : (
                  <div className="absolute inset-0 bg-slate-900" />
                )}

                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent z-10 transition-opacity duration-300 group-hover:opacity-95" />

                <div className="absolute bottom-0 left-0 w-full p-6 z-20 text-white flex flex-col gap-1">
                  <h3 className="text-xl font-bold tracking-tight group-hover:text-amber-200 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs font-medium text-slate-300/90">
                    {count} {count === 1 ? 'Property' : 'Properties'}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default CuratedCollections;