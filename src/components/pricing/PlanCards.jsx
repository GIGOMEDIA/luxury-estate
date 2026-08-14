import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Check } from 'lucide-react';

const PlanCards = ({ isAnnual, plans = [], loading = false }) => {
  const navigate = useNavigate();

  if (loading) {
    return (
      <section className="max-w-7xl mx-auto px-6 pb-32 grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="rounded-3xl p-10 bg-slate-200 h-96 animate-pulse" />
        ))}
      </section>
    );
  }

  if (!plans.length) {
    return (
      <section className="max-w-4xl mx-auto px-6 pb-20 text-center">
        <div className="bg-white rounded-2xl border border-dashed border-slate-200 p-12">
          <p className="text-slate-500 text-sm font-medium">Membership tiers are currently being updated.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-6 pb-32 grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
      {plans.map((plan, idx) => {
        const name = plan.title || plan.name;
        const desc = plan.description || plan.desc;
        const isPopular = Boolean(plan.featured || plan.isPopular);
        const monthlyPrice = plan.monthlyPrice;
        const annualPrice = plan.annualPrice;
        const priceLabel = plan.priceLabel;
        const subLabel = plan.subLabel || (isAnnual ? '/year' : '/month');
        const features = plan.features || [];

        const handleSelectPlan = () => {
          navigate(`/inquiries?plan=${encodeURIComponent(name)}&billing=${isAnnual ? 'annual' : 'monthly'}`);
        };

        return (
          <div
            key={plan.id || plan._id || idx}
            className={`rounded-3xl p-10 border-2 relative flex flex-col justify-between 
              transition-all duration-300 ease-out cursor-pointer
              ${isPopular
                ? 'bg-[#002045] text-white border-[#002045] shadow-2xl md:-translate-y-6 hover:-translate-y-8'
                : 'bg-white text-slate-900 border-slate-100 shadow-xs hover:-translate-y-4 hover:shadow-xl'
              }`}
          >
            {isPopular && (
              <span className="absolute top-0 right-0 bg-slate-400/30 text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-bl-xl rounded-tr-[22px] backdrop-blur-md">
                Most Popular
              </span>
            )}

            <div>
              <h2 className={`text-3xl font-black tracking-tight mb-2 pt-2 ${isPopular ? 'text-slate-200' : 'text-[#002045]'}`}>
                {name}
              </h2>

              <p className={`text-sm mb-10 font-bold ${isPopular ? 'text-slate-400' : 'text-slate-500'}`}>
                {desc}
              </p>

              <div className="flex items-baseline gap-1 mb-10">
                <span className={`text-4xl font-black tracking-tight ${isPopular ? 'text-white' : 'text-slate-900'}`}>
                  {priceLabel ? priceLabel : `$${isAnnual ? annualPrice || monthlyPrice : monthlyPrice}`}
                </span>
                <span className={`text-xs font-semibold ${isPopular ? 'text-slate-400/80' : 'text-slate-500'}`}>
                  {subLabel}
                </span>
              </div>

              {features.length > 0 && (
                <ul className="space-y-5 mb-12 text-sm font-bold tracking-wide">
                  {features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-4">
                      <Check className={`w-5 h-5 shrink-0 stroke-[3px] ${isPopular ? 'text-amber-200' : 'text-[#002045]'}`} />
                      <span className={isPopular ? 'text-slate-200' : 'text-slate-700'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <button
              onClick={handleSelectPlan}
              className={`w-full py-4 px-6 rounded-xl text-sm font-black border-2 transition-all duration-300 ease-out active:scale-[0.98] cursor-pointer ${isPopular
                  ? 'bg-white text-[#002045] border-white hover:bg-slate-100'
                  : 'bg-white text-[#002045] border-[#002045] hover:bg-[#002045] hover:text-white'
                }`}
            >
              {isPopular ? 'Choose Featured Plan' : 'Select Plan'}
            </button>
          </div>
        );
      })}
    </section>
  );
};

export default PlanCards;