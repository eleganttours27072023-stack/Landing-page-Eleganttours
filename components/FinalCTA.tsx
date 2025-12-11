import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  onPreRegister: () => void;
}

const FinalCTA: React.FC<Props> = ({ onPreRegister }) => {
  return (
    <div className="relative py-24 px-6 text-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://eleganttours.co.in/wp-content/uploads/2023/11/Sundarban-5.webp" 
          alt="Sundarbans Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-nature-900/80"></div> {/* Green/Dark Overlay */}
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
          Ready to Feel It?
        </h2>
        <p className="text-xl md:text-2xl text-emerald-100 font-light mb-10">
          Your journey isn’t just a trip. It’s a return to what matters.
        </p>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onPreRegister}
          className="bg-emerald-500 hover:bg-emerald-600 text-white text-lg font-bold py-4 px-10 rounded-full shadow-lg shadow-emerald-500/30 transition-all mb-4"
        >
          Pre-Register & Lock My Price
        </motion.button>
        
        <p className="text-sm text-slate-300 mt-4">
          (Limited sailings from October 2025 to March 2026)
        </p>
      </div>
    </div>
  );
};

export default FinalCTA;