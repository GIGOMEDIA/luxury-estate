import React, { useState } from 'react';
import Sidebar from '../components/admin/Sidebar';
import AdminHeader from '../components/admin/AdminHeader';
import StatCards from '../components/admin/StatCards';
import RecentListings from '../components/admin/RecentListings';
import UserActivity from '../components/admin/UserActivity';
import NetworkLoad from '../components/admin/NetworkLoad';
import HouseRecordings from '../components/admin/HouseRecordings';
import Footer from '../components/Footer';
import { apiRequest } from '../lib/backend'
import { useBackendData } from '../hooks/useBackendData'

const SystemAdmin = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { data } = useBackendData(async () => {
    const [stats, recentListings, userActivity, networkLoad, recordings] = await Promise.all([
      apiRequest('/dashboard/admin-stats'),
      apiRequest('/dashboard/listings'),
      apiRequest('/dashboard/user-activity'),
      apiRequest('/dashboard/network-load'),
      apiRequest('/dashboard/recordings'),
    ])

    return {
      cards: stats.cards || [],
      recentListings: recentListings.items || [],
      userActivity: userActivity.items || [],
      networkLoad: networkLoad.items || [],
      recordings: recordings.items || [],
    }
  }, [])

  return (
    <div className="flex flex-col lg:flex-row min-h-screen lg:h-screen w-screen bg-slate-50/70 text-slate-800 font-sans antialiased relative overflow-x-hidden">
      
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/40 z-40 lg:hidden backdrop-blur-xs transition-opacity duration-300"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 lg:pl-64 flex flex-col min-h-screen lg:h-screen relative w-full">
        
        <AdminHeader onMenuClick={() => setSidebarOpen(true)} />

        <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 space-y-6 lg:space-y-8 no-scrollbar">
          
          <StatCards cards={data?.cards || []} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            <div className="grid grid-cols-1 lg:col-span-8 w-full overflow-hidden">
              <RecentListings items={data?.recentListings || []} />
            </div>
            <div className="grid grid-cols-1 lg:col-span-4 flex-col gap-6 w-full">
              <UserActivity items={data?.userActivity || []} />
              <NetworkLoad items={data?.networkLoad || []} />
            </div>
          </div>

          <div className="w-full pb-6 lg:pb-4">
            <HouseRecordings items={data?.recordings || []} />
          </div>
          
        </div>
      <Footer/>
        
        <div className="fixed bottom-24 right-4 sm:right-8 z-40 group flex items-center gap-3">
          <button className="px-4 py-2.5 bg-[#002045] text-white text-xs font-bold rounded-xl shadow-lg 
            opacity-0 translate-x-4 pointer-events-none scale-95
            group-hover:opacity-100 group-hover:translate-x-0 group-hover:pointer-events-auto group-hover:scale-100
            transition-all duration-300 ease-out delay-150 cursor-pointer whitespace-nowrap">
            Quick Action
          </button>
          <button className="w-14 h-14 bg-[#002045] hover:bg-[#002a5c] text-white rounded-full flex items-center justify-center 
            shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer">
            <span className="text-2xl font-light transform block duration-300 group-hover:rotate-90">
              +
            </span>
          </button>
        </div>

      </div>
    </div>
  );
};

export default SystemAdmin;