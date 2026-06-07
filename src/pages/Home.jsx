import React from 'react';
import Navbar from '../components/home/Navbar';
import Footer from '../components/home/Footer';

import HeroSection from '../components/home/HeroSection';
import CuratedCollections from '../components/home/CuratedCollections';
import FeaturedListings from '../components/home/FeaturedListings';
import ConciergeServices from '../components/home/ConciergeServices';

const Home = () => {
  return (
    <div className="min-h-screen bg-white antialiased flex flex-col">

      <Navbar />
      <main className="grow">
        
        <HeroSection />

        <CuratedCollections />

        <FeaturedListings />

        <ConciergeServices />

      </main>
      <Footer />

    </div>
  );
};

export default Home;