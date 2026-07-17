import React from 'react';

const PlanCTA = () => {
  return (
    <section 
      className="w-full relative py-41 text-center text-white bg-cover bg-center" 
      style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=80')` }}
    >
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-semibold mb-10 tracking-tight">
          Ready to secure your future?
        </h2>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
          <button className="px-8 py-5 bg-white text-[#002045] text-[17px] font-semibold rounded-xl shadow-lg 
            transition-all duration-300 ease-out transform hover:-translate-y-1 hover:shadow-white/10 hover:bg-slate-50 
            active:scale-[0.98] w-52 cursor-pointer">
            Start Free Trial
          </button>
          <button className="px-7 py-4 bg-transparent text-white text-[17px] font-semibold rounded-xl border-2 border-white hover:bg-white hover:text-[#002045] transition w-60 cursor-pointer">
            Speak to an Advisor
          </button>
        </div>
      </div>
    </section>
  );
};

export default PlanCTA;