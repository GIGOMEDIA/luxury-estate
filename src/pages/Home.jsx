import React from 'react';
import Navbar from '../components/home/Navbar';
import Footer from '../components/home/Footer';

import HeroSection from '../components/home/HeroSection';
import CuratedCollections from '../components/home/CuratedCollections';
import FeaturedListings from '../components/home/FeaturedListings';
import ConciergeServices from '../components/home/ConciergeServices';
import { apiRequest } from '../lib/backend';
import { useBackendData } from '../hooks/useBackendData';

const Home = () => {
  const { data } = useBackendData(async () => {
    const [siteContent, featuredProperties, collections] = await Promise.all([
      apiRequest('/content/site-content'),
      apiRequest('/properties/featured'),
      apiRequest('/collections/featured'),
    ])

    return {
      siteContent,
      featuredProperties: featuredProperties.items || [],
      collections: collections.items || [],
    }
  }, [])

  return (
    <div className="min-h-screen bg-white antialiased flex flex-col">

      <Navbar />
      <main className="grow">
        
        <HeroSection content={data?.siteContent?.hero} />

        <CuratedCollections collections={data?.collections || []} />

        <FeaturedListings properties={data?.featuredProperties || []} />

        <ConciergeServices />

      </main>
      <Footer />

    </div>
  );
};

export default Home;