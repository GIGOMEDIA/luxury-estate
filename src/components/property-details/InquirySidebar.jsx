import React, { useState } from 'react';
import { apiRequest } from '../../lib/backend';

const InquirySidebar = ({ property }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await apiRequest('/inquiries', {
        method: 'POST',
        body: JSON.stringify({ fullName, email, message, propertyId: property?.id || property?._id }),
      });
      setSubmitted(true);
    } catch {
      alert('Failed to send inquiry. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const calculatedPrice = property?.price || 10000000;
  const estimatedMortgage = Math.round(calculatedPrice / 120);

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 border border-slate-100 rounded-3xl shadow-xl shadow-slate-100/50">
        <h4 className="text-lg font-bold text-slate-950 mb-4">Inquire Now</h4>
        {submitted ? (
          <div className="p-4 bg-emerald-50 text-emerald-800 text-xs rounded-xl text-center font-medium">
            Thank you. An advisor will contact you regarding this property.
          </div>
        ) : (
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-[11px] font-bold tracking-wider uppercase text-slate-400 mb-1">Full Name</label>
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="John Doe"
                className="w-full bg-slate-50 border border-slate-100 text-sm p-3 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-slate-950 transition"
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold tracking-wider uppercase text-slate-400 mb-1">Email Address</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="john@luxemail.com"
                className="w-full bg-slate-50 border border-slate-100 text-sm p-3 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-slate-950 transition"
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold tracking-wider uppercase text-slate-400 mb-1">Message</label>
              <textarea
                rows="3"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={`I am interested in ${property?.title || 'this property'}...`}
                className="w-full bg-slate-50 border border-slate-100 text-sm p-3 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-slate-950 transition resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-slate-950 hover:bg-slate-900 text-white font-semibold text-sm p-3.5 rounded-xl transition shadow-xs cursor-pointer disabled:opacity-50"
            >
              {submitting ? 'Transmitting...' : 'Schedule Private Tour'}
            </button>
          </form>
        )}
      </div>

      <div className="bg-white p-6 border border-slate-100 rounded-3xl shadow-xl shadow-slate-100/50 space-y-4">
        <h4 className="text-lg font-bold text-slate-950">Mortgage Calculator</h4>
        <div className="space-y-3 text-sm">
          <div className="flex justify-between border-b border-slate-50 pb-2">
            <span className="text-slate-400 font-medium">Down Payment</span>
            <span className="font-bold text-slate-800">
              {Math.round(calculatedPrice * 0.2).toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })} (20%)
            </span>
          </div>
          <div className="flex justify-between border-b border-slate-50 pb-2">
            <span className="text-slate-400 font-medium">Interest Rate</span>
            <span className="font-bold text-slate-800">6.5%</span>
          </div>
          <div className="pt-2 text-center">
            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Estimated Payment</p>
            <p className="text-2xl font-black text-slate-950 mt-0.5">
              {estimatedMortgage.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })}
              <span className="text-xs font-normal text-slate-400"> / mo</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InquirySidebar;