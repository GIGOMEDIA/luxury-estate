import React from 'react';

import HeroSection from '../components/home/HeroSection';
import CuratedCollections from '../components/home/CuratedCollections';

const Home = () => {
  return (
    <div className="min-h-screen bg-white antialiased flex flex-col">

      <main className="grow">
        
        <HeroSection />

        <CuratedCollections />

      </main>

    </div>
  );
};

export default Home;