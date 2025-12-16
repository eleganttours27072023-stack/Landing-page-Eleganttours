import React from 'react';
import { TourPackage } from '../types';
import { Clock, Check, Info } from 'lucide-react';

const packages: TourPackage[] = [
  {
    id: '1',
    title: 'Sundarbans Day Tour',
    duration: '1 Day',
    priceLabel: 'Budget Friendly',
    image: 'https://eleganttours.co.in/wp-content/uploads/2024/05/20e4ef6c07d336b2327186b27a42d90c.jpg', // Deer
    features: [
      { name: 'Breakfast & Lunch included', description: 'Authentic local cuisine freshly prepared and served on board.' },
      { name: 'Boat Safari', description: 'Explore the winding creeks and rivers on a safe, comfortable boat.' },
      { name: 'Watchtower Visit', description: 'Spot wildlife from the famous Sajnekhali Watchtower.' },
      { name: 'Pick up & Drop from Canning', description: 'Convenient transport to and from Canning station.' }
    ]
  },
  {
    id: '2',
    title: 'Classic Gateway',
    duration: '1 Night 2 Days',
    priceLabel: 'Best Seller',
    image: 'https://eleganttours.co.in/wp-content/uploads/2025/12/SUNDARBANS-HOTEL1-1.jpeg', 
    features: [
      { name: 'Resort Stay (AC/Non-AC)', description: 'Clean, comfortable AC or Non-AC rooms in the heart of nature.' },
      { name: '5 Meals Included', description: 'Full board dining: Breakfast, Lunch, Snacks, and Dinner included.' },
      { name: 'Sunset Cruise', description: 'Experience the mesmerizing colors of the setting sun on the river.' },
      { name: 'Tribal Dance Program', description: 'Enjoy a cultural evening with local folk dance performance.' },
      { name: 'Kolkata to Kolkata Transport', description: 'Hassle-free pick up and drop from Kolkata city points.' }
    ]
  },
  {
    id: '3',
    title: 'Deep Jungle Safari',
    duration: '2 Nights 3 Days',
    priceLabel: 'Most Popular',
    image: 'https://eleganttours.co.in/wp-content/uploads/2025/12/বাঘের-জঙ্গল-জঙ্গলের-বাঘ.jpg', // Tiger Main
    features: [
      { name: 'Extensive Safari', description: 'Deep jungle exploration covering multiple zones and creeks.' },
      { name: 'Canopy Walk (Dobanki)', description: 'Walk 20ft above ground at Dobanki for a unique perspective.' },
      { name: 'All Watchtowers', description: 'Visit Sudhanyakhali, Sajnekhali, and Dobanki watchtowers.' },
      { name: 'Premium Resort Stay', description: 'Stay in our finest cottages with best-in-class amenities.' },
      { name: 'Bonfire & BBQ (Seasonal)', description: 'Winter special: Grilled delights under the starry night sky.' }
    ]
  },
  {
    id: '4',
    title: 'Customized Expedition',
    duration: 'Flexible',
    priceLabel: 'Premium',
    image: 'https://eleganttours.co.in/wp-content/uploads/2025/12/SUNDARBANS-HOTEL1-3.jpeg', 
    features: [
      { name: 'We Make It For You', description: 'A completely personalized itinerary crafted from scratch to suit your pace.' },
      { name: 'Group or Individual', description: 'Perfect for large private groups, families, or solo travelers seeking solitude.' },
      { name: 'Tell Us Your Need', description: 'Simply share your specific requirements, and we will handle every detail.' }
    ]
  }
];

interface PackagesProps {
  onBook: (tourType: string) => void;
}

const Packages: React.FC<PackagesProps> = ({ onBook }) => {
  
  // Helper to map package title to Contact form dropdown values
  const handleBookClick = (pkg: TourPackage) => {
    let tourType = '2 Nights 3 Days'; // Default
    
    if (pkg.title.includes('Day Tour')) {
      tourType = 'Day Tour';
    } else if (pkg.title.includes('Classic Gateway') || pkg.duration.includes('1 Night')) {
      tourType = '1 Night 2 Days';
    } else if (pkg.title.includes('Deep Jungle') || pkg.duration.includes('2 Nights')) {
      tourType = '2 Nights 3 Days';
    } else if (pkg.title.includes('Customized')) {
      tourType = 'Customized';
    }
    
    onBook(tourType);
  };

  return (
    <div className="bg-white min-h-screen py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-nature-900">Our Curated Packages</h1>
          <div className="h-1 w-24 bg-gradient-to-r from-emerald-400 to-emerald-600 mx-auto mt-4 rounded-full"></div>
          <p className="text-slate-600 mt-6 max-w-2xl mx-auto text-lg">Choose the journey that fits your time and spirit.</p>
        </div>

        {/* Updated Grid: 2 columns on large screens instead of 4 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {packages.map((pkg) => (
            <div key={pkg.id} className="bg-[#ecfdf5] rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col relative group/card overflow-hidden hover:-translate-y-2 border border-emerald-100/50">
              {/* Increased height from h-56 to h-64/h-80 for better visibility on wider cards */}
              <div className="h-64 md:h-80 overflow-hidden relative">
                <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover transform group-hover/card:scale-110 transition-transform duration-700" />
                {/* Updated Price Label / Tag colors */}
                <div className="absolute top-4 right-0 bg-[#ecfdf5] text-[#064d3b] text-xs font-bold px-4 py-1.5 rounded-l-full shadow-md uppercase tracking-wider">
                  {pkg.priceLabel}
                </div>
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-2 text-emerald-600 text-sm font-bold mb-3 uppercase tracking-wide">
                  <Clock size={16} /> {pkg.duration}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6 font-serif leading-tight">{pkg.title}</h3>
                
                <ul className="space-y-4 mb-8 flex-1">
                  {pkg.features.map((feat, index) => (
                    <li key={index} className="text-base text-slate-600 flex items-start group relative w-fit">
                      <Check size={18} className="text-emerald-500 mr-3 mt-0.5 shrink-0" />
                      
                      <span className="cursor-help decoration-dotted decoration-emerald-300 underline underline-offset-4 hover:text-emerald-800 transition-colors">
                        {feat.name}
                      </span>

                      {/* Tooltip - Polished */}
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-64 p-4 bg-slate-900/95 backdrop-blur text-white text-xs rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 pointer-events-none z-50 text-center leading-relaxed border border-slate-700">
                        {feat.description}
                        {/* Arrow */}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-6 border-transparent border-t-slate-900/95"></div>
                      </div>
                    </li>
                  ))}
                </ul>
                
                <button 
                  onClick={() => handleBookClick(pkg)}
                  className="w-full border-2 border-emerald-600 text-emerald-700 font-bold py-4 rounded-xl hover:bg-[#064d3b] hover:border-[#064d3b] hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg uppercase tracking-wider text-base bg-white/50"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Packages;