import React from 'react';
import { Mail, Phone, Share2, ChevronLeft, ChevronRight } from 'lucide-react';
import AlexanderImage from '../../assets/alexander-knight.jpg';
import Coaster from '../../assets/coastal-estate.png'
import mountainRetreat from '../../assets/mountain-modern.png';

const BottomDetails = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12 pt-8 border-t border-slate-100">
      <div className="lg:col-span-1 space-y-4">
        <h3 className="text-xl font-bold text-slate-950">Exclusive Representation</h3>
        <div className="bg-white border border-slate-100 rounded-3xl p-6 flex items-center gap-4 shadow-sm">
          <img 
            src={AlexanderImage} 
            alt="Alexander Knight" 
            className="w-16 h-16 rounded-2xl object-cover shadow-xs"
          />
          <div>
            <h4 className="font-bold text-slate-900 text-base">Alexander Knight</h4>
            <p className="text-xs font-medium text-slate-400">Senior Global Advisor</p>
            <div className="flex gap-2 mt-2">
              <button className="p-2 bg-slate-50 hover:bg-slate-100 rounded-xl text-xs transition border border-slate-100/50">
                <Mail className="w-3.5 h-3.5 text-slate-600" />
              </button>
              <button className="p-2 bg-slate-50 hover:bg-slate-100 rounded-xl text-xs transition border border-slate-100/50">
                <Phone className="w-3.5 h-3.5 text-slate-600" />
              </button>
              <button className="p-2 bg-slate-50 hover:bg-slate-100 rounded-xl text-xs transition border border-slate-100/50">
                <Share2 className="w-3.5 h-3.5 text-slate-600" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:col-span-2 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-slate-950">Similar Estates</h3>
          <div className="flex gap-2">
            <button className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition shadow-xs">
              <ChevronLeft className="w-4 h-4 text-slate-700" />
            </button>
            <button className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition shadow-xs">
              <ChevronRight className="w-4 h-4 text-slate-700" />
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
          <div className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-xs group cursor-pointer">
            <div className="h-40 overflow-hidden relative">
              <img src={Coaster} alt="The Azure Retreat" className="w-full h-full object-cover group-hover:scale-102 transition duration-500"/>
            </div>
            <div className="p-4">
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Malibu, CA</p>
              <h4 className="font-bold text-slate-900 text-sm mt-0.5">The Azure Retreat</h4>
              <p className="text-sm font-extrabold text-slate-800 mt-2">$18,900,000</p>
            </div>
          </div>

          <div className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-xs group cursor-pointer">
            <div className="h-40 overflow-hidden relative">
              <img src={mountainRetreat} alt="Ironwood Lodge" className="w-full h-full object-cover group-hover:scale-102 transition duration-500"/>
            </div>
            <div className="p-4">
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Aspen, CO</p>
              <h4 className="font-bold text-slate-900 text-sm mt-0.5">Ironwood Lodge</h4>
              <p className="text-sm font-extrabold text-slate-800 mt-2">$12,400,000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomDetails;