import React, { useState } from 'react';
import PlanHero from '../components/pricing/PlanHero';
import PlanCards from '../components/pricing/PlanCards';
import PlanTable from '../components/pricing/PlanTable';
import PlanCTA from '../components/pricing/PlanCTA';
import PlanFooter from '../components/pricing/PlanFooter';
import Navbar from '../components/Navbar';
import { apiRequest } from '../lib/backend';
import { useBackendData } from '../hooks/useBackendData';

const MembershipPlans = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const { data, loading, error } = useBackendData(async () => {
    const [hero, plans, comparison] = await Promise.all([
      apiRequest('/membership/hero').catch(() => null),
      apiRequest('/membership').catch(() => ({ items: [] })),
      apiRequest('/membership/comparison').catch(() => null),
    ]);

    return {
      hero,
      plans: plans?.items || plans || [],
      comparison,
    };
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#f8fafc] text-slate-900 font-sans antialiased flex flex-col justify-between">
      <div>
        <Navbar />

        <main>
          {error && (
            <div className="max-w-7xl mx-auto px-6 pt-6">
              <div className="p-4 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl">
                Unable to load membership plans. Please check your connection.
              </div>
            </div>
          )}

          <PlanHero isAnnual={isAnnual} setIsAnnual={setIsAnnual} content={data?.hero} />

          <PlanCards isAnnual={isAnnual} plans={data?.plans} loading={loading} />

          <PlanTable comparison={data?.comparison} loading={loading} />

          <PlanCTA />
        </main>
      </div>

      <PlanFooter />
    </div>
  );
};

export default MembershipPlans;