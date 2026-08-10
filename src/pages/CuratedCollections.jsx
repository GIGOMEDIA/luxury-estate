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
  const { data } = useBackendData(async () => {
    const [collections, articles] = await Promise.all([
      apiRequest('/collections/featured'),
      apiRequest('/collections/articles'),
    ])

    return {
      collections: collections.items || [],
      articles: articles.items || [],
    }
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        <CollectionsHero />
        <CollectionsGrid collections={data?.collections || []} />
        <BespokeAdvisory />
        <CuratorialJournal articles={data?.articles || []} />
      </main>

      <Footer />
    </div>
  )
}

export default CuratedCollections