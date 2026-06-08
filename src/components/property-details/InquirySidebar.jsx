import React from 'react';

const InquirySidebar = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white p-6 border border-slate-100 rounded-3xl shadow-xl shadow-slate-100/50">
        <h4 className="text-lg font-bold text-slate-950 mb-4">Inquire Now</h4>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-[11px] font-bold tracking-wider uppercase text-slate-400 mb-1">Full Name</label>
            <input type="text" placeholder="John Doe" className="w-full bg-slate-50 border border-slate-100 text-sm p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-950 transition" />
          </div>
          <div>
            <label className="block text-[11px] font-bold tracking-wider uppercase text-slate-400 mb-1">Email Address</label>
            <input type="email" placeholder="john@luxemail.com" className="w-full bg-slate-50 border border-slate-100 text-sm p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-950 transition" />
          </div>
          <div>
            <label className="block text-[11px] font-bold tracking-wider uppercase text-slate-400 mb-1">Message</label>
            <textarea rows="3" placeholder="I am interested in viewing this property..." className="w-full bg-slate-50 border border-slate-100 text-sm p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-950 transition resize-none"></textarea>
          </div>
          <button className="w-full bg-slate-950 hover:bg-slate-900 text-white font-semibold text-sm p-3.5 rounded-xl transition shadow-xs">
            Schedule Private Tour
          </button>
        </form>
      </div>

      <div className="bg-white p-6 border border-slate-100 rounded-3xl shadow-xl shadow-slate-100/50 space-y-4">
        <h4 className="text-lg font-bold text-slate-950">Mortgage Calculator</h4>
        <div className="space-y-3 text-sm">
          <div className="flex justify-between border-b border-slate-50 pb-2">
            <span className="text-slate-400 font-medium">Down Payment</span>
            <span className="font-bold text-slate-800">$4.9M (20%)</span>
          </div>
          <div className="flex justify-between border-b border-slate-50 pb-2">
            <span className="text-slate-400 font-medium">Interest Rate</span>
            <span className="font-bold text-slate-800">6.5%</span>
          </div>
          <div className="pt-2 text-center">
            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Estimated Payment</p>
            <p className="text-2xl font-black text-slate-950 mt-0.5">$123,885 <span className="text-xs font-normal text-slate-400">/ mo</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InquirySidebar;