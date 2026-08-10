import React from 'react';
import { useParams } from 'react-router-dom';

import Navbar from '../components/Navbar'; 
import Footer from '../components/Footer';

import PropertyGallery from '../components/property-details/PropertyGallery';
import PropertyHeader from '../components/property-details/PropertyHeader';
import PropertyOverview from '../components/property-details/PropertyOverview';
import FloorPlans from '../components/property-details/FloorPlans';
import InquirySidebar from '../components/property-details/InquirySidebar';
import BottomDetails from '../components/property-details/BottomDetails';
import { apiRequest } from '../lib/backend';
import { useBackendData } from '../hooks/useBackendData';

const PropertyDetails = () => {
  const { slug } = useParams()

  const { data } = useBackendData(async () => {
    const propertyResponse = slug
      ? await apiRequest(`/properties/slug/${slug}`)
      : await apiRequest('/properties/featured')

    const property = propertyResponse.property || propertyResponse.items?.[0] || null
    const related = propertyResponse.related || []
    const agentResponse = property?.agentId ? await apiRequest(`/agents/${property.agentId}`) : null

    return {
      property,
      related,
      agent: agentResponse?.agent || null,
      activeListings: agentResponse?.activeListings || [],
      soldListings: agentResponse?.soldListings || [],
    }
  }, [slug])

  return (
    <div className="min-h-screen bg-slate-50/30">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10 pb-24 font-sans antialiased">
        
        <PropertyGallery property={data?.property} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mt-8 lg:mt-12 items-start">
          
          <div className="lg:col-span-2 space-y-8">
            <PropertyHeader property={data?.property} />
            <PropertyOverview property={data?.property} />
            <FloorPlans property={data?.property} />
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-6 lg:top-28 self-start">
              <InquirySidebar property={data?.property} />
            </div>
          </div>

        </div>

        <BottomDetails property={data?.property} related={data?.related} agent={data?.agent} activeListings={data?.activeListings} soldListings={data?.soldListings} />

      </main>
      <Footer />
    </div>
  );
};

export default PropertyDetails;
