import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CollectionsHero from '../components/collections/CollectionsHero'
import CollectionsGrid from '../components/collections/CollectionsGrid'
import BespokeAdvisory from '../components/collections/BespokeAdvisory'
import CuratorialJournal from '../components/collections/CuratorialJournal'
import { apiRequest } from '../lib/backend'
import { useBackendData } from '../hooks/useBackendData'

const CuratedCollections = () => {
  const { data, loading, error } = useBackendData(async () => {
    const [collections, articles] = await Promise.all([
      apiRequest('/collections/featured').catch(() => ({ items: [] })),
      apiRequest('/collections/articles').catch(() => ({ items: [] })),
    ])

    return {
      collections: collections?.items || collections || [],
      articles: articles?.items || articles || [],
    }
  }, [])

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <div>
        <Navbar />

        <main>
          <CollectionsHero />

          {error && (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <div className="p-4 bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl">
                Unable to load collections at this time. Please try again later.
              </div>
            </div>
          )}

          <CollectionsGrid collections={data?.collections} loading={loading} />
          <BespokeAdvisory />
          <CuratorialJournal articles={data?.articles} loading={loading} />
        </main>
      </div>

      <Footer />
    </div>
  )
}

export default CuratedCollections