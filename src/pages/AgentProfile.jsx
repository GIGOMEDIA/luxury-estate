import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AboutAgent from '../components/agent-profile/AboutAgent'
import ActiveListings from '../components/agent-profile/ActiveListings'
import RecentlySold from '../components/agent-profile/RecentlySold'
import ConsultationSection from '../components/agent-profile/ConsultationSection'
import { apiRequest } from '../lib/backend'
import { useBackendData } from '../hooks/useBackendData'

const AgentProfile = () => {
  const { id, slug } = useParams()
  const agentIdentifier = id || slug || 'featured'

  const { data, loading, error } = useBackendData(async () => {
    const response = await apiRequest(`/agents/${agentIdentifier}`).catch(() => null)

    return {
      agent: response?.agent || response || null,
      activeListings: response?.activeListings || response?.listings || [],
      recentlySold: response?.recentlySold || response?.soldListings || [],
    }
  }, [agentIdentifier])

  return (
    <div className="min-h-screen bg-slate-50/30 flex flex-col justify-between">
      <div>
        <Navbar />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10 pb-24 font-sans antialiased">
          {error && (
            <div className="p-4 mb-6 bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl">
              Unable to load agent profile details. Please try again later.
            </div>
          )}

          <AboutAgent agent={data?.agent} loading={loading} />

          <ActiveListings listings={data?.activeListings} loading={loading} />

          <RecentlySold soldListings={data?.recentlySold} loading={loading} />

          <ConsultationSection agent={data?.agent} />
        </main>
      </div>

      <Footer />
    </div>
  )
}

export default AgentProfile