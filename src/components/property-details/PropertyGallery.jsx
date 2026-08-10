import React from 'react';
import PrimaryEstateView from "../../assets/primary-estate-view.png";
import InteriorView from "../../assets/interior-view.png";
import ModernKitchenView from "../../assets/kitchen.png";
import { resolveMediaUrl } from '../../lib/media';

const PropertyGallery = ({ property }) => {
  const images = property?.galleryImages?.length
    ? property.galleryImages.map((image) => resolveMediaUrl(image))
    : [PrimaryEstateView, InteriorView, ModernKitchenView]

  return (
    <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-[3fr_2fr] gap-3 h-auto md:h-140">
        
        <div className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-3xl md:rounded-l-3xl md:rounded-r-none group shadow-xs">
          <img 
            src={images[0]} 
            alt={property?.title || 'Property exterior'} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        <div className="overflow-hidden rounded-3xl md:rounded-none md:rounded-tr-3xl group shadow-xs relative">
          <img 
            src={images[1] || InteriorView} 
            alt="Interior view" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        <div className="overflow-hidden rounded-3xl md:rounded-none md:rounded-br-3xl group shadow-xs relative">
          <img 
            src={images[2] || ModernKitchenView} 
            alt="Kitchen view" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

      </div>
    </section>
  );
};

export default PropertyGallery;