import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AboutAgent from '../components/agent-profile/AboutAgent'
import ActiveListings from '../components/agent-profile/ActiveListings'
import RecentlySold from '../components/agent-profile/RecentlySold'
import ConsultationSection from '../components/agent-profile/ConsultationSection'

const AgentProfile = () => {
  return (
    <div className="min-h-screen bg-slate-50/30">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10 pb-24 font-sans antialiased">
        <AboutAgent />

        <ActiveListings />

        <RecentlySold />

        <ConsultationSection />
      </main>

      <Footer />
    </div>
  )
}

export default AgentProfile