import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Phone, Share2, ChevronLeft, ChevronRight } from 'lucide-react';
import { resolveAgentImage, resolvePropertyImage } from '../../lib/media';

const BottomDetails = ({ property, related = [], agent, loading = false }) => {
  const navigate = useNavigate();
  const contactAgentImage = resolveAgentImage(agent);

  if (loading) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12 pt-8 border-t border-slate-100 animate-pulse">
        <div className="h-32 bg-slate-200 rounded-3xl"></div>
        <div className="lg:col-span-2 h-32 bg-slate-200 rounded-3xl"></div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12 pt-8 border-t border-slate-100">
      {agent && (
        <div className="lg:col-span-1 space-y-4">
          <h3 className="text-xl font-bold text-slate-950">Exclusive Representation</h3>
          <div className="bg-white border border-slate-100 rounded-3xl p-6 flex items-center gap-4 shadow-xs">
            {contactAgentImage ? (
              <img
                src={contactAgentImage}
                alt={agent.name || 'Representative'}
                className="w-16 h-16 rounded-2xl object-cover shadow-xs"
              />
            ) : (
              <div className="w-16 h-16 rounded-2xl bg-slate-200 flex items-center justify-center text-slate-400 font-bold text-xs">
                Agent
              </div>
            )}
            <div>
              <h4 className="font-bold text-slate-900 text-base">{agent.name}</h4>
              <p className="text-xs font-medium text-slate-400">{agent.title || 'Senior Global Advisor'}</p>
              <div className="flex gap-2 mt-2">
                <a href={`mailto:${agent.email}`} className="p-2 bg-slate-50 hover:bg-slate-100 rounded-xl text-xs transition border border-slate-100/50">
                  <Mail className="w-3.5 h-3.5 text-slate-600" />
                </a>
                <a href={`tel:${agent.phone}`} className="p-2 bg-slate-50 hover:bg-slate-100 rounded-xl text-xs transition border border-slate-100/50">
                  <Phone className="w-3.5 h-3.5 text-slate-600" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {related.length > 0 && (
        <div className={`space-y-4 ${agent ? 'lg:col-span-2' : 'lg:col-span-3'}`}>
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-slate-950">Similar Estates</h3>
            <div className="flex gap-2">
              <button className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition shadow-xs cursor-pointer">
                <ChevronLeft className="w-4 h-4 text-slate-700" />
              </button>
              <button className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition shadow-xs cursor-pointer">
                <ChevronRight className="w-4 h-4 text-slate-700" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {related.slice(0, 2).map((estate) => {
              const imgUrl = resolvePropertyImage(estate);
              return (
                <div
                  key={estate.id || estate._id || estate.title}
                  onClick={() => navigate(`/properties/${estate.slug || estate.id || estate._id}`)}
                  className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-xs group cursor-pointer"
                >
                  <div className="h-40 overflow-hidden relative bg-slate-900">
                    {imgUrl && (
                      <img
                        src={imgUrl}
                        alt={estate.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-90"
                      />
                    )}
                  </div>
                  <div className="p-4">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      {estate.city || property?.city || 'Luxury Estate'}
                    </p>
                    <h4 className="font-bold text-slate-900 text-sm mt-0.5 truncate">{estate.title}</h4>
                    <p className="text-sm font-extrabold text-slate-800 mt-2">{estate.amount || estate.price}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default BottomDetails;