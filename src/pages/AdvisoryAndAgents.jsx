import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroSection from '../components/advisory/HeroSection'
import SearchFilters from '../components/advisory/SearchFilters'
import AdvisorsGrid from '../components/advisory/AdvisorsGrid'
import PartnershipCTA from '../components/advisory/PartnershipCTA'
import { apiRequest } from '../lib/backend'
import { useBackendData } from '../hooks/useBackendData'

const AdvisoryAndAgents = () => {
  const { data } = useBackendData(async () => {
    const [agents, stats] = await Promise.all([
      apiRequest('/agents/featured'),
      apiRequest('/agents/stats'),
    ])

    return {
      advisors: agents.items || [],
      stats,
    }
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        <HeroSection />
        <SearchFilters />
        <AdvisorsGrid advisors={data?.advisors || []} stats={data?.stats} />
        <PartnershipCTA />
      </main>

      <Footer />
    </div>
  )
}

export default AdvisoryAndAgents