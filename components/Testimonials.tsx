import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: "Moumita Das",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    text: "The depth of knowledge our guide had was astounding. It wasn't just a sightseeing tour; it was a masterclass in ecology. The silence of the mangroves is something I'll carry with me forever.",
    rating: 5
  },
  {
    id: 2,
    name: "Sourav & Maitreyi Ganguly",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    text: "We were worried about comfort in such a remote area, but Elegant Tours surprised us. The resort was serene, clean, and the local food was the highlight of our trip. Highly recommended!",
    rating: 5
  },
  {
    id: 3,
    name: "Krishna Chowdhury",
    // Updated image for Krishna Chowdhury
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop", 
    text: "Seeing the Royal Bengal Tiger in its natural habitat was a dream come true. The team's tracking skills are legendary. 25 years of experience really shows in how they manage the logistics.",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-nature-50 to-white py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-4xl md:text-6xl font-serif font-bold text-nature-900 mb-6">Guest Diaries</h2>
                <div className="h-1.5 w-24 bg-gradient-to-r from-emerald-400 to-nature-600 mx-auto rounded-full mb-8"></div>
                <p className="text-slate-600 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
                    Real stories from travelers who ventured into the heart of the mangrove and returned with memories for a lifetime.
                </p>
            </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map((t, index) => (
            <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="bg-white p-10 rounded-[2.5rem] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] border border-slate-100 hover:border-emerald-100 hover:shadow-[0_25px_60px_-10px_rgba(6,78,59,0.1)] transition-all duration-500 group flex flex-col relative"
            >
              {/* Decorative Quote Icon - Subtle and elegant */}
              <div className="absolute top-8 right-8 text-emerald-50 group-hover:text-emerald-100 transition-colors duration-500 transform group-hover:scale-110 group-hover:rotate-6 origin-center">
                <Quote size={80} fill="currentColor" />
              </div>

              {/* Rating Stars */}
              <div className="flex gap-1.5 mb-8 relative z-10">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={18} className="text-yellow-400 fill-yellow-400 drop-shadow-sm" />
                ))}
              </div>

              {/* Quote Text */}
              <p className="text-slate-600 italic mb-10 relative z-10 leading-loose text-lg font-light flex-grow">
                "{t.text}"
              </p>

              {/* Profile Section */}
              <div className="flex items-center gap-5 border-t border-slate-100 pt-8 mt-auto relative z-10">
                <div className="relative group-hover:scale-105 transition-transform duration-300">
                    <div className="absolute inset-0 bg-emerald-500 rounded-full blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md relative z-10 ring-2 ring-transparent group-hover:ring-emerald-100 transition-all"
                    />
                </div>
                <div>
                  <h4 className="font-bold text-nature-900 font-serif text-xl group-hover:text-emerald-700 transition-colors">{t.name}</h4>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;