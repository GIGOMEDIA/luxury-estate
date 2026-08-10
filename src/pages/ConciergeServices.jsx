import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ConciergeHero from '../components/concierge/ConciergeHero'
import ConciergeServicesGrid from '../components/concierge/ConciergeServicesGrid'
import ConciergeContact from '../components/concierge/ConciergeContact'
import { apiRequest } from '../lib/backend'
import { useBackendData } from '../hooks/useBackendData'

const ConciergeServices = () => {
  const { data } = useBackendData(async () => {
    const [services, contact] = await Promise.all([
      apiRequest('/concierge'),
      apiRequest('/concierge/contact'),
    ])

    return {
      services: services.items || [],
      contact,
    }
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        <ConciergeHero />
        <ConciergeServicesGrid services={data?.services || []} />
        <ConciergeContact contact={data?.contact} />
      </main>

      <Footer />
    </div>
  )
}

export default ConciergeServices