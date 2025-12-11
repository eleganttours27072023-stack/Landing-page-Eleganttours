import React, { useState } from 'react';
import { CheckCircle, MapPin, ChevronDown, ChevronUp, Binoculars, Eye, Footprints, Compass, Waves, Award, Home, Car, Music, Camera } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const StoryAndWhyUs: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative py-24 px-6 overflow-hidden">
      {/* Background Image with Enhanced Visibility */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://eleganttours.co.in/wp-content/uploads/2025/12/Hero3-scaled.jpg" 
          alt="Background Texture" 
          className="w-full h-full object-cover opacity-90"
        />
        {/* Gradient overlay: Completely transparent at top to show texture, fading to white at bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-white"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
        
        {/* Left Side: Story & Places */}
        <div className="lg:w-1/2 flex flex-col gap-10">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-serif font-bold text-white mb-8 drop-shadow-md leading-tight">
                Land of the <span className="text-[#064d3b] bg-[#ecfdf5] px-3 py-1 rounded-lg italic shadow-md inline-block">Tides</span>
              </h2>
            </motion.div>
            
            {/* Main Image with 'Haggy' / Atmospheric Style */}
            <div className="relative mb-12 group perspective-1000">
              <div className="absolute inset-0 bg-emerald-900/20 rounded-[2rem] blur-2xl -z-10 transform translate-y-4 group-hover:translate-y-6 transition-transform duration-700"></div>
              <img 
                src="https://eleganttours.co.in/wp-content/uploads/2025/12/DSC_0414-scaled.jpg" 
                alt="Sundarbans Landscape" 
                className="w-full h-[450px] object-cover rounded-[2rem] shadow-2xl brightness-105 contrast-[1.15] saturate-[1.1] hover:scale-[1.02] transition-transform duration-1000 ease-out animate-[float_6s_ease-in-out_infinite]"
                style={{
                  maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)'
                }}
              />
              
              {/* Decorative overlay text */}
              <div className="absolute bottom-10 left-6 text-white/90 font-serif text-6xl font-bold opacity-20 pointer-events-none select-none tracking-tighter">
                WILD
              </div>
            </div>

            {/* Story Text - Polished Glass Container */}
            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 border border-white/60 shadow-lg text-slate-800 leading-relaxed text-lg relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-emerald-400 to-nature-600"></div>
              <p className="mb-4 font-medium">
                The Sundarbans is a mystery wrapped in mangroves. It is the largest delta in the world, 
                where the land floats on water and the tiger swims. It is not just a forest; it is a 
                living, breathing entity that changes with the tides.
              </p>
              
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden text-slate-600"
                  >
                    <p className="mb-4 mt-4 border-t border-slate-200/60 pt-4">
                      Beneath the emerald canopy, the silence is broken only by the splash of an oar or the call of a kingfisher. 
                      This ecosystem serves as nature's shield against cyclones and a nursery for aquatic life. 
                      Here, locals revere 'Bonbibi', the forest goddess, creating a unique culture where man and nature coexist in a delicate balance.
                    </p>
                    <p>
                      To travel here is to step back in time, witnessing nature in its most primal and enchanting form. 
                      Every creek holds a secret, and every turn of the river offers a new perspective on resilience and beauty.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center gap-2 text-emerald-700 font-bold hover:text-emerald-900 transition-colors mt-4 text-sm uppercase tracking-wider group"
              >
                {isExpanded ? (
                  <>Read Less <ChevronUp size={16} className="group-hover:-translate-y-1 transition-transform" /></>
                ) : (
                  <>Read More <ChevronDown size={16} className="group-hover:translate-y-1 transition-transform" /></>
                )}
              </button>
            </div>
          </div>

          {/* Must Visit Places Container - Polished & Consistent */}
          <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 lg:p-10 border border-white/50 relative overflow-hidden group flex-grow">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-emerald-100/40 to-transparent rounded-bl-full -mr-10 -mt-10 pointer-events-none transition-transform duration-700 group-hover:scale-110"></div>
            
            <h3 className="text-3xl font-serif font-bold text-nature-900 mb-10 relative z-10 flex items-center gap-3">
              <span className="bg-emerald-100 p-2.5 rounded-xl text-emerald-700 shadow-sm">
                <MapPin size={24} />
              </span>
              Must Visit Places
            </h3>
            
            <ul className="space-y-6 relative z-10">
              {[
                { text: "Sajnekhali Watchtower", sub: "Interpretation Centre, Turtle Pond & Crocodile Park wildlife sanctuary", icon: Binoculars },
                { text: "Sudhanyakhali", sub: "Prime Tiger Spotting Zone with Sweet Water Pond viewing lines", icon: Eye },
                { text: "Dobanki Camp", sub: "Thrilling Canopy Walk Experience 20ft Above Ground over mangroves", icon: Compass },
                { text: "Pirkhali & Sarakkhali", sub: "Narrow Creek Safari for Close Wildlife Encounters in silence", icon: Compass },
                { text: "Panchmukhani", sub: "Spectacular Five River Junction & Scenic Confluence horizon view", icon: Waves }
              ].map((place, i) => (
                <li 
                  key={i} 
                  className="flex items-start gap-5 p-5 rounded-2xl bg-white/50 border border-white/60 hover:bg-[#f0fdf4] hover:border-emerald-100 hover:shadow-lg transition-all duration-300 group/item cursor-default"
                >
                  <div className="bg-emerald-50 p-3 rounded-full h-fit group-hover/item:bg-[#064d3b] transition-colors duration-300 shrink-0 shadow-sm group-hover/item:shadow-emerald-500/20 mt-1">
                    <place.icon size={22} className="text-nature-900 group-hover/item:text-[#ecfdf5] transition-colors" />
                  </div>
                  <div className="transform transition-transform duration-300 group-hover/item:scale-105 origin-left">
                    <span className="font-bold text-xl text-slate-800 group-hover/item:text-emerald-800 transition-colors block">
                      {place.text}
                    </span>
                    <span className="text-base text-slate-600 mt-1 block font-medium leading-snug">
                      {place.sub}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Side: Why Choose Us & Wildlife Sightings */}
        <div className="lg:w-1/2 flex flex-col gap-10">
          <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 lg:p-10 border border-white/50 relative flex-grow">
            {/* Experience Badge */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-emerald-500 to-nature-700 rounded-full flex flex-col items-center justify-center text-white font-bold text-center shadow-2xl transform rotate-12 ring-4 ring-white/80 z-20 hover:rotate-0 transition-transform duration-500">
              <span className="text-3xl leading-none drop-shadow-md">25</span>
              <span className="text-[10px] uppercase tracking-widest opacity-90 font-medium">Years<br/>Exp.</span>
            </div>
            
            <h2 className="text-4xl font-serif font-bold text-nature-900 mb-10 tracking-tight">Why Choose <br/>Elegant Tours?</h2>
            
            <div className="space-y-6">
              {[
                { 
                  icon: Award,
                  title: "Uncompromised Value", 
                  desc: "Premium hospitality crafted for the discerning traveler, ensuring luxury without hidden costs." 
                },
                { 
                  icon: Home,
                  title: "Handpicked Eco-Sanctuaries", 
                  desc: "Stay in exclusive, hygienic riverside resorts that blend modern amenities with the serenity of nature." 
                },
                { 
                  icon: Car,
                  title: "Seamless Door-to-Door Journey", 
                  desc: "Travel in sanitized, private AC vehicles from Kolkata directly to the boat, ensuring complete peace of mind." 
                },
                { 
                  icon: Music,
                  title: "Deep Cultural Immersion", 
                  desc: "Beyond sightseeing—engage with local folklore, tribal dance, and the living heritage of the delta." 
                }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-5 group p-5 rounded-2xl bg-white/50 border border-white/60 hover:bg-[#f0fdf4] hover:border-emerald-100 hover:shadow-lg transition-all duration-300 cursor-default">
                  <div className="bg-emerald-50 p-3 rounded-full h-fit group-hover:bg-[#064d3b] transition-colors duration-300 shrink-0 shadow-sm group-hover:shadow-emerald-500/20 mt-1">
                    <item.icon size={22} className="text-nature-900 group-hover:text-[#ecfdf5] transition-colors" />
                  </div>
                  <div className="transform transition-transform duration-300 group-hover:scale-105 origin-left">
                    <h4 className="font-bold text-xl text-slate-800 group-hover:text-emerald-800 transition-colors">{item.title}</h4>
                    <p className="text-base text-slate-600 mt-1 leading-relaxed group-hover:text-slate-700 font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Why Pre-register box */}
            <div className="mt-12 bg-slate-900 text-white p-8 rounded-2xl shadow-2xl relative overflow-hidden border border-slate-700 group hover:shadow-emerald-900/40 transition-shadow">
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-emerald-500/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-nature-800"></div>
              
              <h4 className="font-serif font-bold text-2xl mb-8 text-emerald-400 border-b border-slate-700 pb-4 flex items-center justify-between">
                Why Pre-Register?
                <span className="text-[10px] bg-emerald-600 text-white px-3 py-1 rounded-full font-sans uppercase tracking-widest shadow-lg">Benefits</span>
              </h4>
              
              <ul className="space-y-6 relative z-10">
                {[
                  { title: "Early Bird Discount:", desc: "Flat 15% off for priority bookings." },
                  { title: "Priority Room Selection:", desc: "Best River-View Cottages guaranteed." },
                  { title: "Exclusive Experience:", desc: "Complimentary private bonfire & tribal dance for groups > 4." },
                  { title: "Flexible Dates:", desc: "One-time free rescheduling." }
                ].map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-4 group/list">
                    <div className="mt-1 bg-emerald-500/10 p-1.5 rounded-lg text-emerald-400 border border-emerald-500/20 shrink-0 group-hover/list:bg-emerald-500 group-hover/list:text-white transition-colors">
                      <CheckCircle size={16} />
                    </div>
                    <div>
                      <span className="font-bold text-emerald-50 block text-lg group-hover/list:text-emerald-300 transition-colors">{benefit.title}</span>
                      <span className="text-sm text-slate-400 leading-snug block mt-1">{benefit.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Wildlife Sightings - Moved to Right Side */}
          <div className="bg-gradient-to-br from-slate-900 to-nature-900 text-white p-8 rounded-3xl shadow-xl border border-slate-700 relative overflow-hidden">
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
             <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-5">
                <div className="bg-white/10 p-4 rounded-2xl text-emerald-300 shrink-0 backdrop-blur-sm border border-white/10">
                  <Camera size={32} />
                </div>
                <div>
                   <h4 className="font-bold text-xl text-emerald-100 mb-2 font-serif">Wildlife Sightings</h4>
                   <p className="text-slate-300 leading-relaxed text-lg">
                     Look out for Spotted Deer, Wild Boar, Estuarine Crocodiles, and the majestic <strong className="text-white border-b-2 border-emerald-500 pb-0.5">Royal Bengal Tiger</strong>.
                   </p>
                </div>
             </div>
          </div>
        </div>
      </div>
      
      {/* Floating animation keyframes */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </div>
  );
};

export default StoryAndWhyUs;