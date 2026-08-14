import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroSection from '../components/advisory/HeroSection'
import SearchFilters from '../components/advisory/SearchFilters'
import AdvisorsGrid from '../components/advisory/AdvisorsGrid'
import PartnershipCTA from '../components/advisory/PartnershipCTA'
import { apiRequest } from '../lib/backend'
import { useBackendData } from '../hooks/useBackendData'

const AdvisoryAndAgents = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedFilter, setSelectedFilter] = useState('All Advisors')

  const { data, loading, error } = useBackendData(async () => {
    const [agents, stats] = await Promise.all([
      apiRequest('/agents/featured').catch(() => ({ items: [] })),
      apiRequest('/agents/stats').catch(() => null),
    ])

    return {
      advisors: agents?.items || agents || [],
      stats,
    }
  }, [])

  // Filter advisors locally based on user search and selected topic tag
  const filteredAdvisors = (data?.advisors || []).filter((advisor) => {
    const nameMatch = advisor.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      advisor.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      advisor.location?.toLowerCase().includes(searchQuery.toLowerCase())

    if (!nameMatch) return false

    if (selectedFilter === 'All Advisors') return true

    const tags = advisor.tags || []
    return tags.some((t) => t.toLowerCase() === selectedFilter.toLowerCase()) ||
      advisor.specialty?.toLowerCase() === selectedFilter.toLowerCase()
  })

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <div>
        <Navbar />

        <main>
          <HeroSection />
          <SearchFilters
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedFilter={selectedFilter}
            setSelectedFilter={setSelectedFilter}
          />

          {error && (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <div className="p-4 bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl">
                Unable to load advisors at this time. Please check your connection.
              </div>
            </div>
          )}

          <AdvisorsGrid
            advisors={filteredAdvisors}
            stats={data?.stats}
            loading={loading}
            searchQuery={searchQuery}
            selectedFilter={selectedFilter}
          />
          <PartnershipCTA />
        </main>
      </div>

      <Footer />
    </div>
  )
}

export default AdvisoryAndAgents