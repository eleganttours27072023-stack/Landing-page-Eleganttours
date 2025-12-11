import React from 'react';
import { CalendarCheck, Lock } from 'lucide-react';

const SeasonBooking: React.FC = () => {
  return (
    <div className="py-20 px-6 bg-[#f0fdf4]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-slate-800">Season Information & Booking Access</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Open Card - Updated to Dark Theme */}
          <div className="bg-nature-900 text-white p-8 rounded-2xl shadow-2xl border-t-8 border-emerald-400 relative overflow-hidden group hover:shadow-emerald-900/50 transition-shadow duration-300">
            {/* Live Badge */}
            <div className="absolute top-0 right-0 bg-emerald-500 text-white px-4 py-1 rounded-bl-lg text-sm font-bold shadow-sm">LIVE</div>
            
            <CalendarCheck className="w-12 h-12 text-emerald-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
            
            <h3 className="text-2xl font-bold text-white mb-2 font-serif">October 2025 – March 2026</h3>
            <p className="text-emerald-400 font-bold mb-4 uppercase tracking-wide text-sm">Booking is OPEN</p>
            
            <p className="text-emerald-100 mb-8 leading-relaxed border-l-2 border-emerald-700 pl-4">
              Ideal weather. Prime wildlife sighting season. Limited slots available for those who want priority access.
            </p>
            
            <button className="bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:translate-x-1 shadow-lg shadow-emerald-900/40">
              Book Today &rarr;
            </button>
          </div>

          {/* Locked Card */}
          <div className="bg-slate-800 text-white p-8 rounded-2xl shadow-lg border-t-8 border-slate-600 relative overflow-hidden opacity-90 hover:opacity-100 transition-opacity">
            <div className="absolute top-0 right-0 bg-slate-600 px-4 py-1 rounded-bl-lg text-sm font-bold">EXCLUSIVE</div>
            <Lock className="w-12 h-12 text-slate-400 mb-4" />
            <h3 className="text-2xl font-bold mb-2 font-serif">June 2026 – September 2026</h3>
            <p className="text-slate-400 font-bold mb-4 uppercase tracking-wide text-sm">Bookings Not Public Yet</p>
            <p className="text-slate-300 mb-8 leading-relaxed border-l-2 border-slate-600 pl-4">
              The Monsoon Magic. Pre-registration is mandatory. We open only for pre-registered guests who want Exclusive Benefits.
            </p>
            <button className="bg-white/10 hover:bg-white/20 px-6 py-3 rounded-full text-sm font-medium transition-colors border border-white/10">
              Pre-Register Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeasonBooking;