import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Sidebar from '../components/dashboard/Sidebar'
import StatCard from '../components/dashboard/StatCard'
import RecentActivity from '../components/dashboard/RecentActivity'
import PerformanceCard from '../components/dashboard/PerformanceCard'
import ListingManagement from '../components/dashboard/ListingManagement'

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#F3F6FC] text-[#002045]">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex gap-6">
        <Sidebar />

        <main className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <StatCard title="Total Listings" value="1,248" delta="+12% vs last month" />
            <StatCard title="Monthly Bookings" value="84" delta="+5.2% vs last month" />
            <StatCard title="Revenue" value="$1.2M" delta="-2.1% seasonal" />
            <StatCard title="Active Leads" value="312" delta="+24% campaign" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
            <div className="lg:col-span-2">
              <RecentActivity />
            </div>
            <div>
              <PerformanceCard />
            </div>
          </div>

          <div className="mt-6">
            <ListingManagement />
          </div>
        </main>
      </div>

      <Footer />
    </div>
  )
}

export default Dashboard
