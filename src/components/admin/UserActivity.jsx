import React from 'react';

const UserActivity = ({ items = [], loading = false }) => {
  return (
    <section className="bg-white rounded-2xl border border-slate-100 shadow-xs p-6 flex flex-col justify-between min-h-75">
      <div>
        <h3 className="text-[25px] font-bold text-[#002045] mb-6">User Activity</h3>

        {loading ? (
          <div className="space-y-4 animate-pulse">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex gap-3">
                <div className="w-2 h-2 rounded-full bg-slate-200 mt-2"></div>
                <div className="space-y-1 flex-1">
                  <div className="h-4 bg-slate-200 rounded-md w-3/4"></div>
                  <div className="h-3 bg-slate-100 rounded-md w-1/4"></div>
                </div>
              </div>
            ))}
          </div>
        ) : items.length === 0 ? (
          <p className="text-slate-400 text-sm italic py-4">No recent user activity recorded.</p>
        ) : (
          <div className="space-y-5">
            {items.map((act, index) => (
              <div key={act.id || index} className="flex gap-3 text-[15px] leading-relaxed">
                <div className="mt-1.5">
                  <span className={`w-2 h-2 rounded-full block ${act.critical ? 'bg-red-500 animate-pulse' : 'bg-[#002045]'}`} />
                </div>
                <div>
                  <p className="text-slate-600">
                    <span className="font-bold text-[#002045]">{act.user}</span>{' '}
                    {act.action}{' '}
                    <span className={`font-bold ${act.critical ? 'text-red-600' : 'text-slate-900'}`}>
                      {act.item}
                    </span>
                  </p>
                  {act.time && <span className="text-[10px] text-slate-400 block mt-1">{act.time}</span>}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <button className="w-full mt-6 py-2.5 border border-slate-200 hover:border-[#002045] text-[#002045] text-[15px] font-bold rounded-xl transition cursor-pointer">
        Manage All Users
      </button>
    </section>
  );
};

export default UserActivity;