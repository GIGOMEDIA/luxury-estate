import React from 'react';
import { Link } from 'react-router-dom';

const PlanCTA = () => {
  return (
    <section
      className="w-full relative py-32 text-center text-white bg-cover bg-center bg-slate-900"
      style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=80')` }}
    >
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight">
          Ready to secure your future?
        </h2>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link
            to="/inquiries"
            className="px-8 py-4 bg-white text-[#002045] text-sm font-bold rounded-xl shadow-lg hover:bg-slate-100 transition-colors w-full sm:w-auto"
          >
            Start Free Trial
          </Link>
          <Link
            to="/agents"
            className="px-8 py-4 bg-transparent text-white text-sm font-bold rounded-xl border-2 border-white hover:bg-white/10 transition-colors w-full sm:w-auto"
          >
            Speak to an Advisor
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PlanCTA;