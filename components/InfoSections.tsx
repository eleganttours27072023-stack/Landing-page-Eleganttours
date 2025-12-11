import React from 'react';
import { Leaf, Camera, Heart, ShieldCheck, Map, Sun, Users, UtensilsCrossed, LifeBuoy } from 'lucide-react';
import { motion } from 'framer-motion';

const SectionWrapper: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <motion.div 
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className={`py-16 md:py-24 px-6 ${className}`}
  >
    <div className="max-w-7xl mx-auto">
      {children}
    </div>
  </motion.div>
);

const InfoSections: React.FC = () => {
  return (
    <>
      {/* 1. About / Why We Organize */}
      <SectionWrapper className="bg-white">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          <div className="md:w-1/2">
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl group">
              <div className="absolute inset-0 bg-nature-900/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <img 
                src="https://eleganttours.co.in/wp-content/uploads/2025/12/IMG20241109135157-scaled.jpg" 
                alt="Sundarbans Connection" 
                className="w-full h-[500px] object-cover transform transition-transform hover:scale-110 duration-[1.5s] ease-out"
              />
              <div className="absolute bottom-0 left-0 bg-nature-900 text-white px-10 py-4 rounded-tr-3xl font-serif text-xl tracking-wider shadow-lg z-20">
                Since 2001
              </div>
            </div>
          </div>
          <div className="md:w-1/2 space-y-8">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-nature-900 leading-[1.1]">
              More than a tour. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500 italic pr-2">It's a Connection.</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-emerald-400 to-nature-600 rounded-full"></div>
            {/* Made paragraph medium weight (bold-ish) and slightly darker for emphasis */}
            <p className="text-slate-700 text-xl leading-relaxed font-medium">
              We don't just guide you through the wilderness; we invite the wilderness to <span className="font-serif italic text-nature-800 font-bold">speak to you</span>. 
              <br/><br/>
              Amidst the whispering mangroves and the tidal rhythms, you don't just observe nature—you become a part of it. 
              Leave the chaos behind and find your rhythm in the ancient, healing calm of the delta.
              <br/><br/>
              <span className="text-nature-700 font-bold text-lg">Come, let the forest touch your soul.</span>
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* 2. Unique Experience */}
      <SectionWrapper className="bg-nature-50">
        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
           <div className="md:w-1/2 grid grid-cols-2 gap-4">
             {/* Column 1 */}
             <div className="flex flex-col gap-4 mt-8">
               <motion.img 
                 whileHover={{ scale: 1.03 }}
                 src="https://eleganttours.co.in/wp-content/uploads/2025/12/gettyimages-466914139-612x612-1.jpg" 
                 className="rounded-2xl shadow-xl w-full h-64 object-cover" 
                 alt="Sundarbans Wildlife"
               />
               <motion.img 
                 whileHover={{ scale: 1.03 }}
                 src="https://eleganttours.co.in/wp-content/uploads/2024/05/Sundarbans_Bengal-tiger_Soumyajit-Nandy4-copy_e24jma-1.jpg" 
                 className="rounded-2xl shadow-xl w-full h-48 object-cover" 
                 alt="Royal Bengal Tiger Walking"
               />
             </div>
             
             {/* Column 2 */}
             <div className="flex flex-col gap-4">
               <motion.img 
                 whileHover={{ scale: 1.03 }}
                 src="https://eleganttours.co.in/wp-content/uploads/2025/12/gettyimages-2249433767-612x612-1.jpg" 
                 className="rounded-2xl shadow-xl w-full h-56 object-cover" 
                 alt="Mangrove Nature"
               />
               <motion.img 
                 whileHover={{ scale: 1.03 }}
                 src="https://eleganttours.co.in/wp-content/uploads/2024/05/20e4ef6c07d336b2327186b27a42d90c.jpg" 
                 className="rounded-2xl shadow-xl w-full h-64 object-cover" 
                 alt="Spotted Deer"
               />
             </div>
           </div>
           
           <div className="md:w-1/2">
             <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 mb-4">
               A Unique Unfiltered Experience
             </h2>
             <p className="text-slate-600 mb-8 text-lg">
               Believe in the magic of the wild. Our itinerary isn't a checklist; it's a curated flow of moments designed for the soul.
             </p>
             
             <div className="space-y-6">
               {[
                 { icon: <Leaf className="text-emerald-600" size={24} />, title: "Authentic Jungle Stay", desc: "Eco-resorts that breathe with the forest." },
                 { icon: <Camera className="text-emerald-600" size={24} />, title: "Guided Safari", desc: "Expert naturalists who know every creek." },
                 { icon: <Sun className="text-emerald-600" size={24} />, title: "Sunset Cruise", desc: "Golden hour on the river like nowhere else." },
               ].map((item, idx) => (
                 <div key={idx} className="flex items-start gap-5 p-5 bg-white rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-emerald-100">
                   <div className="p-3 bg-emerald-50 rounded-full shrink-0">{item.icon}</div>
                   <div>
                     <h4 className="font-bold text-xl text-nature-900 mb-1">{item.title}</h4>
                     <p className="text-slate-500">{item.desc}</p>
                   </div>
                 </div>
               ))}
             </div>
           </div>
        </div>
      </SectionWrapper>

      {/* 3. Differentiation */}
      <SectionWrapper className="bg-white">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-nature-900">What Makes Us Different?</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-emerald-400 to-emerald-600 mx-auto mt-5 rounded-full"></div>
          <p className="mt-6 text-slate-600 max-w-2xl mx-auto text-lg">
            In a sea of travel options, we stand apart by prioritizing your experience over volume.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3 h-full">
             <img 
              src="https://eleganttours.co.in/wp-content/uploads/2024/12/466102127_122184756974232579_8975534908190880046_n-1.jpg" 
              alt="Tour Group on Boat" 
              className="w-full h-full object-cover rounded-2xl shadow-xl min-h-[400px] hover:brightness-110 transition-all duration-500"
            />
          </div>
          <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { 
                icon: Users,
                title: "Personalized Care", 
                text: "We strictly limit group sizes to ensure you aren't just a number. Our guides adapt the itinerary to your pace and interests." 
              },
              { 
                icon: UtensilsCrossed,
                title: "Culinary Delight", 
                text: "Savor hygienic, home-cooked Bengali cuisine prepared fresh on board using organic ingredients sourced from local villages." 
              },
              { 
                icon: LifeBuoy,
                title: "Safety First", 
                text: "Travel with peace of mind. Our government-registered boats are equipped with life jackets, first aid, and experienced crews." 
              },
              { 
                icon: Leaf,
                title: "Respect for Nature", 
                text: "We practice responsible tourism with a strict no-plastic and low-noise policy to protect the delicate mangrove ecosystem." 
              },
            ].map((benefit, i) => (
              <motion.div 
                whileHover={{ y: -5 }}
                key={i} 
                className="bg-[#f0fdf4] p-8 rounded-2xl border border-transparent hover:border-emerald-200 hover:shadow-lg transition-all shadow-sm flex flex-col justify-center"
              >
                 <benefit.icon className="text-emerald-500 mb-4" size={36} />
                 <h3 className="text-xl font-bold text-slate-800 mb-3">{benefit.title}</h3>
                 <p className="text-slate-600 leading-relaxed">{benefit.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 4. Ecotourism / Is this for you? */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="bg-nature-900 text-white py-24 px-6 relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8 leading-tight">
            Experience Ecotourism in its Unfiltered Glory
          </h2>
          <p className="text-2xl italic text-emerald-200 mb-12 font-serif">
            "Is this for you? Our guests are not looking for 'deals'. They're looking for depth."
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {[
              "You prefer the sounds of birds over the noise of traffic.",
              "You want to understand the ecosystem, not just see it.",
              "You value comfort but respect the rustic nature of the wild."
            ].map((point, i) => (
              <motion.div 
                whileHover={{ y: -10 }}
                key={i} 
                className="bg-gradient-to-br from-emerald-800/30 to-nature-900/80 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-emerald-400/50 shadow-lg hover:shadow-emerald-500/20 transition-all duration-300 group"
              >
                <Heart className="text-emerald-400 mb-4 group-hover:scale-110 group-hover:text-emerald-300 transition-all duration-300" size={28} />
                <p className="font-medium text-lg leading-relaxed text-emerald-50 group-hover:text-white transition-colors">{point}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default InfoSections;