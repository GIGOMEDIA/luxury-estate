import React from 'react';
import PrimaryEstateView from '../../assets/primary-estate-view.png';
import InteriorView from '../../assets/interior-view.png';
import ModernKitchenView from '../../assets/kitchen.png';   

const PropertyGallery = () => {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px] md:auto-rows-[300px] lg:auto-rows-[280px]">
        
        <div className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-3xl group shadow-sm">
          <img 
            src={PrimaryEstateView} 
            alt="The Obsidian Pavilion Exterior" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        <div className="overflow-hidden rounded-3xl group shadow-sm relative">
          <img 
            src={InteriorView} 
            alt="Interior Bedroom View" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        <div className="overflow-hidden rounded-3xl group shadow-sm relative">
          <img 
            src={ModernKitchenView} 
            alt="Modern Kitchen View" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

      </div>
    </section>
  );
};

export default PropertyGallery;