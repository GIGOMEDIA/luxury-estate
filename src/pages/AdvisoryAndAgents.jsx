import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroSection from '../components/advisory/HeroSection'
import SearchFilters from '../components/advisory/SearchFilters'
import AdvisorsGrid from '../components/advisory/AdvisorsGrid'
import PartnershipCTA from '../components/advisory/PartnershipCTA'

const AdvisoryAndAgents = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        <HeroSection />
        <SearchFilters />
        <AdvisorsGrid />
        <PartnershipCTA />
      </main>

      <Footer />
    </div>
  )
}

export default AdvisoryAndAgents