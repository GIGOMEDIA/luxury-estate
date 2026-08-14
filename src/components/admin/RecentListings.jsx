import React from 'react';
import { Link } from 'react-router-dom';
import { resolvePropertyImage } from '../../lib/media';

const RecentListings = ({ items = [], loading = false }) => {
  return (
    <section className="bg-white rounded-2xl border border-slate-100 shadow-xs p-6 w-full flex flex-col min-h-87.5">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-[#002045]">Recent Listings</h3>
        <Link to="/properties" className="text-xs font-bold text-slate-500 hover:text-[#002045] hover:underline underline-offset-4">
          View all
        </Link>
      </div>

      <div className="overflow-x-auto grow">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-100 text-[14px] font-bold uppercase tracking-wider text-slate-400 bg-slate-50/50">
              <th className="py-3 px-4">Property</th>
              <th className="py-3 px-4">Price</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4">Date</th>
              <th className="py-3 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-[15.5px] font-medium text-slate-700">
            {loading ? (
              [...Array(3)].map((_, i) => (
                <tr key={i} className="animate-pulse">
                  <td className="py-3.5 px-4 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-200"></div>
                    <div className="h-4 bg-slate-200 rounded-md w-32"></div>
                  </td>
                  <td className="py-3.5 px-4"><div className="h-4 bg-slate-200 rounded-md w-20"></div></td>
                  <td className="py-3.5 px-4"><div className="h-4 bg-slate-200 rounded-md w-16"></div></td>
                  <td className="py-3.5 px-4"><div className="h-4 bg-slate-200 rounded-md w-24"></div></td>
                  <td className="py-3.5 px-4 text-center"><div className="h-4 bg-slate-200 rounded-md w-6 mx-auto"></div></td>
                </tr>
              ))
            ) : items.length === 0 ? (
              <tr>
                <td colSpan="5" className="py-12 text-center text-slate-400 text-sm">
                  No recent listings found.
                </td>
              </tr>
            ) : (
              items.map((item) => {
                const status = (item.status || 'ACTIVE').toUpperCase();
                const formattedDate = item.createdAt
                  ? new Date(item.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
                  : 'Recently';

                return (
                  <tr key={item.id || item._id} className="hover:bg-slate-50/50 transition">
                    <td className="py-3.5 px-4 flex items-center gap-3 font-bold text-[#002045]">
                      <img
                        src={resolvePropertyImage(item)}
                        alt={item.title || item.name || ''}
                        className="w-8 h-8 rounded-lg object-cover bg-slate-100"
                      />
                      {item.title || item.name}
                    </td>
                    <td className="py-3.5 px-4">{item.amount || item.price}</td>
                    <td className="py-3.5 px-4">
                      <span className={`px-2 py-1 rounded-md text-[10px] font-bold tracking-wide ${status === 'ACTIVE' ? 'bg-emerald-50 text-emerald-700' :
                          status === 'PENDING' ? 'bg-amber-50 text-amber-700' : 'bg-slate-100 text-slate-600'
                        }`}>
                        {status}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-slate-400">{formattedDate}</td>
                    <td className="py-3.5 px-4 text-center">
                      <button className="text-slate-400 hover:text-[#002045] text-lg font-bold tracking-widest cursor-pointer">···</button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default RecentListings;