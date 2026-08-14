import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ConciergeHero from '../components/concierge/ConciergeHero'
import ConciergeServicesGrid from '../components/concierge/ConciergeServicesGrid'
import ConciergeContact from '../components/concierge/ConciergeContact'
import { apiRequest } from '../lib/backend'
import { useBackendData } from '../hooks/useBackendData'

const ConciergeServices = () => {
  const { data, loading, error } = useBackendData(async () => {
    const [services, contact] = await Promise.all([
      apiRequest('/concierge').catch(() => ({ items: [] })),
      apiRequest('/concierge/contact').catch(() => null),
    ])

    return {
      services: services?.items || services || [],
      contact,
    }
  }, [])

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <div>
        <Navbar />

        <main>
          <ConciergeHero />

          {error && (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <div className="p-4 bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl">
                Unable to load concierge services telemetry at this time.
              </div>
            </div>
          )}

          <ConciergeServicesGrid services={data?.services} loading={loading} />
          <ConciergeContact contact={data?.contact} />
        </main>
      </div>

      <Footer />
    </div>
  )
}

export default ConciergeServices