import React from 'react';
import { CalendarRange, UserPlus, MessageCircle } from 'lucide-react';

interface Props {
  onBook: () => void;
  onPreRegister: () => void;
}

const StickyActions: React.FC<Props> = ({ onBook, onPreRegister }) => {
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col shadow-[0_4px_20px_rgba(0,0,0,0.15)] rounded-l-2xl overflow-hidden bg-white border-l border-y border-slate-100">
      
      {/* Book Now Button */}
      <button 
        onClick={onBook}
        className="group bg-white hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 p-2 md:p-3 flex flex-col items-center gap-3 transition-all border-b border-slate-100 w-12 md:w-14"
        aria-label="Book Now"
      >
        <CalendarRange size={20} className="text-emerald-600 group-hover:scale-110 transition-transform duration-300" />
        <span className="text-[10px] font-bold uppercase tracking-wider text-center leading-tight [writing-mode:vertical-rl] rotate-180 whitespace-nowrap py-2">Book Now</span>
      </button>
      
      {/* Pre-Register Button */}
      <button 
        onClick={onPreRegister}
        className="group bg-nature-900 hover:bg-emerald-800 text-white p-2 md:p-3 flex flex-col items-center gap-3 transition-all border-b border-nature-800 w-12 md:w-14"
        aria-label="Pre-Register"
      >
        <UserPlus size={20} className="text-emerald-300 group-hover:text-white group-hover:scale-110 transition-transform duration-300" />
        <span className="text-[10px] font-bold uppercase tracking-wider text-center leading-tight text-emerald-50 [writing-mode:vertical-rl] rotate-180 whitespace-nowrap py-2">Pre Register</span>
      </button>
      
      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/919903292946?text=Hi!%20I'm%20interested%20in%20Sundarbans%20Tour" 
        target="_blank" 
        rel="noreferrer"
        className="group bg-[#25D366] hover:bg-[#20bd5a] text-white p-2 md:p-3 flex flex-col items-center gap-3 transition-all w-12 md:w-14"
        aria-label="WhatsApp"
      >
        <MessageCircle size={22} className="text-white group-hover:scale-110 transition-transform duration-300" />
        <span className="text-[10px] font-bold uppercase tracking-wider text-center leading-tight [writing-mode:vertical-rl] rotate-180 whitespace-nowrap py-2">WhatsApp</span>
      </a>
    </div>
  );
};

export default StickyActions;