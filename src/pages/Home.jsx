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
  const { data, loading, error } = useBackendData(async () => {
    const [siteContent, featuredProperties, collections] = await Promise.all([
      apiRequest('/content/site-content').catch(() => null),
      apiRequest('/properties/featured').catch(() => ({ items: [] })),
      apiRequest('/collections/featured').catch(() => ({ items: [] })),
    ]);

    return {
      siteContent,
      featuredProperties: featuredProperties?.items || featuredProperties || [],
      collections: collections?.items || collections || [],
    };
  }, []);

  return (
    <div className="min-h-screen bg-white antialiased flex flex-col justify-between">
      <Navbar />

      <main className="grow">
        {error && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="p-4 bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl">
              Unable to sync landing page content. Please refresh or check your internet connection.
            </div>
          </div>
        )}

        <HeroSection content={data?.siteContent?.hero} />

        <CuratedCollections collections={data?.collections} loading={loading} />

        <FeaturedListings properties={data?.featuredProperties} loading={loading} />

        <ConciergeServices />
      </main>

      <Footer />
    </div>
  );
};

export default Home;