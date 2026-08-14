import React from 'react';
import { Check, X } from 'lucide-react';

const PlanTable = ({ comparison, loading = false }) => {
  const comparisonFeatures = comparison?.items || [];
  const columns = comparison?.columns || ['Individual', 'Professional', 'Institutional'];

  const renderCell = (value) => {
    if (typeof value === 'boolean') {
      return value ? <Check className="w-5 h-5 mx-auto text-[#002045] stroke-[3px]" /> : <X className="w-5 h-5 mx-auto text-slate-300 stroke-[2px]" />;
    }
    return value || <X className="w-5 h-5 mx-auto text-slate-300 stroke-[2px]" />;
  };

  if (loading) {
    return (
      <section className="max-w-6xl mx-auto px-6 pb-36 animate-pulse">
        <div className="h-64 bg-slate-200 rounded-2xl" />
      </section>
    );
  }

  if (!comparisonFeatures.length) return null;

  return (
    <section className="max-w-6xl mx-auto px-6 pb-36">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#002045] mb-3 tracking-tight">Compare Capabilities</h2>
        <p className="text-sm sm:text-base font-bold text-slate-600 tracking-wide">
          The definitive choice for institutional-grade asset management.
        </p>
      </div>

      <div className="bg-white rounded-2xl border-2 border-slate-100 shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm font-bold text-slate-700">
            <thead>
              <tr className="bg-[#002045] text-white text-sm sm:text-base">
                <th className="p-6 md:p-7 font-black">Features</th>
                {columns.map((column) => (
                  <th key={column} className="p-6 md:p-7 font-black text-center">{column}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {comparisonFeatures.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/70 transition">
                  <td className="p-6 md:p-7 font-semibold text-slate-900 text-sm sm:text-base">{row.name || row.title}</td>
                  <td className="p-6 md:p-7 text-center text-slate-600">{renderCell(row.ind ?? row.individual)}</td>
                  <td className="p-6 md:p-7 text-center text-slate-600">{renderCell(row.prof ?? row.professional)}</td>
                  <td className="p-6 md:p-7 text-center text-slate-600">{renderCell(row.inst ?? row.institutional)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default PlanTable;