import React from 'react';
import { Link } from 'react-router-dom';
import { resolvePropertyImage } from '../../lib/media'

const defaultListingsData = [
  { id: 1, name: "Bel Air Sky Garden", price: "$24,500,000", status: "ACTIVE", date: "Oct 24, 2023", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=100&q=80" },
  { id: 2, name: "Azure Coast Villa", price: "$18,200,000", status: "PENDING", date: "Oct 22, 2023", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=100&q=80" },
  { id: 3, name: "The Penthouse V", price: "$12,900,000", status: "SOLD", date: "Oct 15, 2023", img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=100&q=80" },
];

const RecentListings = ({ items = [] }) => {
  const listingsData = items.length
    ? items.map((item) => ({
        id: item.id,
        name: item.title,
        price: item.amount,
        status: item.status?.toUpperCase() || 'ACTIVE',
        date: item.createdAt ? new Date(item.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'Recently',
        img: resolvePropertyImage(item),
        slug: item.slug,
      }))
    : defaultListingsData

  return (
    <section className="bg-white rounded-2xl border border-slate-100 shadow-xs p-6 w-full flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-[#002045]">Recent Listings</h3>
        <Link to="/properties" className="text-xs font-bold text-slate-500 hover:text-[#002045] hover:underline underline-offset-4">View all</Link>
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
            {listingsData.map((listing) => (
              <tr key={listing.id} className="hover:bg-slate-50/50 transition">
                <td className="py-3.5 px-4 flex items-center gap-3 font-bold text-[#002045]">
                  <img src={listing.img} alt="" className="w-8 h-8 rounded-lg object-cover" />
                  {listing.name}
                </td>
                <td className="py-3.5 px-4">{listing.price}</td>
                <td className="py-3.5 px-4">
                  <span className={`px-2 py-1 rounded-md text-[10px] font-bold tracking-wide ${listing.status === 'ACTIVE' ? 'bg-emerald-50 text-emerald-700' :
                      listing.status === 'PENDING' ? 'bg-amber-50 text-amber-700' : 'bg-slate-100 text-slate-600'
                    }`}>
                    {listing.status}
                  </span>
                </td>
                <td className="py-3.5 px-4 text-slate-400">{listing.date}</td>
                <td className="py-3.5 px-4 text-center">
                  <button className="text-slate-400 hover:text-[#002045] text-lg font-bold tracking-widest cursor-pointer">···</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default RecentListings;