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
  const { data, loading, error } = useBackendData(async () => {
    const [summary, recentActivity, performance, listings] = await Promise.all([
      apiRequest('/dashboard/summary').catch(() => ({ cards: [] })),
      apiRequest('/dashboard/recent-activity').catch(() => ({ items: [] })),
      apiRequest('/dashboard/performance').catch(() => ({ items: [] })),
      apiRequest('/dashboard/listings').catch(() => ({ items: [] })),
    ])

    return {
      summary: summary?.cards || summary || [],
      recentActivity: recentActivity?.items || recentActivity || [],
      performance: performance?.items || performance || [],
      insight: performance?.insight,
      listings: listings?.items || listings || [],
      totals: listings,
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#F3F6FC] text-[#002045] flex flex-col justify-between">
      <div>
        <Navbar />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex gap-6">
          <Sidebar />

          <main className="flex-1 min-w-0">
            {error && (
              <div className="p-4 mb-6 bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl">
                Unable to load telemetry dashboard data. Please try refreshing.
              </div>
            )}

            {/* Stat Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {loading ? (
                [...Array(4)].map((_, i) => (
                  <div key={i} className="bg-white rounded-2xl p-4 shadow-xs border border-[#EEF3FA] h-24 animate-pulse">
                    <div className="h-3 bg-slate-200 rounded-md w-1/2 mb-3"></div>
                    <div className="h-6 bg-slate-200 rounded-md w-3/4"></div>
                  </div>
                ))
              ) : (
                (data?.summary || []).map((card, idx) => (
                  <StatCard
                    key={card.title || idx}
                    title={card.title}
                    value={card.value}
                    delta={card.delta}
                  />
                ))
              )}
            </div>

            {/* Main Section: Activity & Performance */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
              <div className="lg:col-span-2">
                <RecentActivity items={data?.recentActivity} loading={loading} />
              </div>
              <div>
                <PerformanceCard items={data?.performance} insight={data?.insight} loading={loading} />
              </div>
            </div>

            {/* Listing Management */}
            <div className="mt-6">
              <ListingManagement
                items={data?.listings}
                totalActive={data?.totals?.totalActive}
                totalPending={data?.totals?.totalPending}
                totalSold={data?.totals?.totalSold}
                loading={loading}
              />
            </div>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Dashboard