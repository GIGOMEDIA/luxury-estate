import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Sidebar from '../components/dashboard/Sidebar'
import StatCard from '../components/dashboard/StatCard'
import RecentActivity from '../components/dashboard/RecentActivity'
import PerformanceCard from '../components/dashboard/PerformanceCard'
import ListingManagement from '../components/dashboard/ListingManagement'
import { apiRequest } from '../lib/backend'
import { useBackendData } from '../hooks/useBackendData'

const Dashboard = () => {
  const { data } = useBackendData(async () => {
    const [summary, recentActivity, performance, listings] = await Promise.all([
      apiRequest('/dashboard/summary'),
      apiRequest('/dashboard/recent-activity'),
      apiRequest('/dashboard/performance'),
      apiRequest('/dashboard/listings'),
    ])

    return {
      summary: summary.cards || [],
      recentActivity: recentActivity.items || [],
      performance: performance.items || [],
      insight: performance.insight,
      listings: listings.items || [],
      totals: listings,
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#F3F6FC] text-[#002045]">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex gap-6">
        <Sidebar />

        <main className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {(data?.summary || []).map((card) => (
              <StatCard key={card.title} title={card.title} value={card.value} delta={card.delta} />
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
            <div className="lg:col-span-2">
              <RecentActivity items={data?.recentActivity || []} />
            </div>
            <div>
              <PerformanceCard items={data?.performance || []} insight={data?.insight} />
            </div>
          </div>

          <div className="mt-6">
            <ListingManagement items={data?.listings || []} totalActive={data?.totals?.totalActive} totalPending={data?.totals?.totalPending} totalSold={data?.totals?.totalSold} />
          </div>
        </main>
      </div>

      <Footer />
    </div>
  )
}

export default Dashboard
