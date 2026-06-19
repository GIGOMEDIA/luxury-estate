import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CollectionsHero from '../components/collections/CollectionsHero'
import CollectionsGrid from '../components/collections/CollectionsGrid'
import BespokeAdvisory from '../components/collections/BespokeAdvisory'
import CuratorialJournal from '../components/collections/CuratorialJournal'

const CuratedCollections = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        <CollectionsHero />
        <CollectionsGrid />
        <BespokeAdvisory />
        <CuratorialJournal />
      </main>

      <Footer />
    </div>
  )
}

export default CuratedCollections