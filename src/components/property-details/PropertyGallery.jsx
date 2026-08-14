import React from 'react';
import { resolveMediaUrl } from '../../lib/media';

const PropertyGallery = ({ property, loading = false }) => {
  if (loading) {
    return (
      <section className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-[3fr_2fr] gap-3 h-80 md:h-140">
          <div className="md:col-span-2 md:row-span-2 bg-slate-200 rounded-3xl animate-pulse" />
          <div className="bg-slate-200 rounded-3xl animate-pulse" />
          <div className="bg-slate-200 rounded-3xl animate-pulse" />
        </div>
      </section>
    );
  }

  const images = property?.galleryImages?.length
    ? property.galleryImages.map((image) => resolveMediaUrl(image))
    : property?.heroImageUrl
      ? [resolveMediaUrl(property.heroImageUrl)]
      : []

  return (
    <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-[3fr_2fr] gap-3 h-auto md:h-140">
        <div className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-3xl md:rounded-l-3xl md:rounded-r-none group shadow-xs bg-slate-900 min-h-75">
          {images[0] ? (
            <img
              src={images[0]}
              alt={property?.title || 'Property exterior'}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
            />
          ) : (
            <div className="w-full h-full bg-slate-800 flex items-center justify-center text-slate-400">
              No Primary Image
            </div>
          )}
        </div>

        <div className="overflow-hidden rounded-3xl md:rounded-none md:rounded-tr-3xl group shadow-xs relative bg-slate-900 min-h-45">
          {images[1] ? (
            <img
              src={images[1]}
              alt="Interior view"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
            />
          ) : (
            <div className="w-full h-full bg-slate-800 flex items-center justify-center text-slate-400 text-xs">
              Interior View
            </div>
          )}
        </div>

        <div className="overflow-hidden rounded-3xl md:rounded-none md:rounded-br-3xl group shadow-xs relative bg-slate-900 min-h-45">
          {images[2] ? (
            <img
              src={images[2]}
              alt="Kitchen view"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
            />
          ) : (
            <div className="w-full h-full bg-slate-800 flex items-center justify-center text-slate-400 text-xs">
              Kitchen View
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PropertyGallery;