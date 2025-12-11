import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "What is the best time to visit the Sundarbans?",
    answer: "The ideal time to visit is from October to March when the weather is cool and pleasant, making it perfect for wildlife spotting. We also operate during the monsoon (June-September) for a lush, green experience, but this is exclusive to pre-registered guests seeking a unique perspective of the mangroves."
  },
  {
    question: "Is the tour safe for families and children?",
    answer: "Absolutely. Safety is our non-negotiable priority. We use sturdy, government-registered boats equipped with life jackets, first aid kits, and experienced crews who know the waters inside out. Our resorts are fenced and secure. It is a wonderful educational trip for children."
  },
  {
    question: "What are the chances of seeing a Royal Bengal Tiger?",
    answer: "The Sundarbans is the world's largest home for Royal Bengal Tigers, but they are elusive masters of camouflage. Sightings are a matter of luck, though our guides' 25 years of tracking experience maximizes your chances, especially near Sudhanyakhali and Dobanki watchtowers. We encourage guests to enjoy the entire ecosystem—the birds, crocodiles, and deer are equally mesmerizing."
  },
  {
    question: "What kind of food is served on the tour?",
    answer: "We believe food is a part of the journey. We serve fresh, hygienic, and authentic Bengali cuisine (both Vegetarian and Non-Vegetarian) cooked on board or at the resort using organic local produce. Typical menus include Rice, Dal, Bhaja, vegetable curries, Fish curry (Rui/Katla/Prawn), Chicken, and sweets. Special dietary needs can be accommodated if requested in advance."
  },
  {
    question: "Do you provide pick-up and drop-off services?",
    answer: "Yes, our standard packages include organized transportation from Kolkata (usually The LaLiT Great Eastern Kolkata Near Dalhousie or Esplanade) to the Godkhali ferry ghat and back. For our 'Customized Expedition' guests, we can arrange private doorstep pick-up and drop-off in sanitized AC vehicles."
  }
];

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-[#f0fdf4] py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-white rounded-full shadow-sm mb-4">
            <HelpCircle className="text-emerald-600" size={24} />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-nature-900 mb-6">Frequently Asked Questions</h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-emerald-400 to-nature-600 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Everything you need to know before you step into the wild.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white rounded-2xl border ${activeIndex === index ? 'border-emerald-500 shadow-emerald-100' : 'border-white'} shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className={`text-xl font-bold font-serif ${activeIndex === index ? 'text-emerald-800' : 'text-slate-800'}`}>
                  {faq.question}
                </span>
                <span className={`ml-4 p-2 rounded-full transition-colors ${activeIndex === index ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-50 text-slate-400'}`}>
                  {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-8 pt-0 text-slate-600 leading-relaxed text-lg border-t border-slate-100/50 mt-2">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
            <p className="text-slate-500">
                Still have questions? 
                <a href="https://wa.me/919903292946" className="text-emerald-700 font-bold hover:underline ml-2">Chat with us on WhatsApp</a>
            </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;