import React from 'react';
import { Check, X } from 'lucide-react';

const PlanTable = ({ comparison }) => {
  const defaultComparisonFeatures = [
    { name: "Priority Property Access", ind: true, prof: true, inst: true },
    { name: "Off-market Listings", ind: true, prof: true, inst: true },
    { name: "HD House Recordings", ind: "5 / month", prof: "20 / month", inst: "Unlimited" },
    { name: "Virtual Reality Tours", ind: false, prof: true, inst: true },
    { name: "Market Prediction Engine", ind: false, prof: true, inst: true },
    { name: "API Integrations", ind: false, prof: false, inst: true },
  ];

  const comparisonFeatures = comparison?.items || defaultComparisonFeatures;
  const columns = comparison?.columns || ['Individual', 'Professional', 'Institutional'];

  const renderCell = (value) => {
    if (typeof value === 'boolean') {
      return value ? <Check className="w-5 h-5 mx-auto text-[#002045] stroke-[3px]" /> : <X className="w-5 h-5 mx-auto text-slate-300 stroke-[2px]" />;
    }
    return value;
  };

  return (
    <section className="max-w-6xl mx-auto px-6 pb-36">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-semibol text-[#002045] mb-3 tracking-tight">Compare Capabilities</h2>
        <p className="text-[16px] font-bold text-slate-600 tracking-wide">
          The definitive choice for institutional-grade asset management.
        </p>
      </div>

      <div className="bg-white rounded-2xl border-2 border-slate-100 shadow-md overflow-hidden">
        <table className="w-full border-collapse text-left text-sm font-bold text-slate-700">
          <thead>
            <tr className="bg-[#002045] text-white text-base text-[20px]">
              <th className="p-6 md:p-7 font-black">Features</th>
              {columns.map((column) => (
                <th key={column} className="p-6 md:p-7 font-black text-center">{column}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {comparisonFeatures.map((row, idx) => (
              <tr key={idx} className="hover:bg-slate-50/70 transition">
                <td className="p-6 md:p-7 font-semibold text-slate-900 text-base">{row.name}</td>
                <td className="p-6 md:p-7 text-center text-slate-600">{renderCell(row.ind)}</td>
                <td className="p-6 md:p-7 text-center text-slate-600">{renderCell(row.prof)}</td>
                <td className="p-6 md:p-7 text-center text-slate-600">{renderCell(row.inst)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default PlanTable;