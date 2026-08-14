import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ConciergeHero from '../components/concierge/ConciergeHero'
import ConciergeServicesGrid from '../components/concierge/ConciergeServicesGrid'
import ConciergeContact from '../components/concierge/ConciergeContact'

const ConciergeServices = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        <ConciergeHero />
        <ConciergeServicesGrid />
        <ConciergeContact />
      </main>

      <Footer />
    </div>
  )
}

export default ConciergeServices