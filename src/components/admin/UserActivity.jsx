import React from 'react';

const activitiesData = [
  { id: 1, user: "Julianne Moore", action: "booked a virtual tour for", item: "The Reserve", time: "2 mins ago" },
  { id: 2, user: "Marcus Chen", action: "listed a new property in", item: "Aspen Ridge", time: "45 mins ago" },
  { id: 3, user: "Compliance alert", action: "Missing documentation for", item: "Listing #892", time: "1 hour ago", critical: true },
];

const UserActivity = () => {
  return (
    <section className="bg-white rounded-2xl border border-slate-100 shadow-xs p-6 lg:col-span-4 flex flex-col justify-between min-h-[300px]">
      <div>
        <h3 className="text-[25px] font-bold text-[#002045] mb-6">User Activity</h3>
        <div className="space-y-5">
          {activitiesData.map((act) => (
            <div key={act.id} className="flex gap-3 text-[15px] leading-relaxed">
              <div className="mt-1.5">
                <span className={`w-2 h-2 rounded-full block ${act.critical ? 'bg-red-500 animate-pulse' : 'bg-[#002045]'}`} />
              </div>
              <div>
                <p className="text-slate-600">
                  <span className='font-bold text-[#002045]'>{act.user}</span>{' '}
                  {act.action} <span className={`font-bold ${act.critical ? 'text-red-600' : 'text-slate-900'}`}>{act.item}</span>
                </p>
                <span className="text-[10px] text-slate-400 block mt-1">{act.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className="w-full mt-6 py-2.5 border border-slate-200 hover:border-[#002045] text-[#002045] text-[15px] font-bold rounded-xl transition cursor-pointer">
        Manage All Users
      </button>
    </section>
  );
};

export default UserActivity;