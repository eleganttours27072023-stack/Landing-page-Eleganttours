import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Calendar, Users, Clock, Mail, User, Phone, Home, CheckCircle, Loader2 } from 'lucide-react';

interface HeroProps {
  onCheckPackages: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCheckPackages }) => {
  const [showForm, setShowForm] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    date: '',
    accommodation: 'ac',
    guests: '',
    tourType: '2 Nights 3 Days',
    name: '',
    email: '',
    phone: ''
  });

  // Background images
  const slides = [
    "https://eleganttours.co.in/wp-content/uploads/2025/12/Copy-of-tination.png",
    "https://eleganttours.co.in/wp-content/uploads/2025/12/IMG20241109135240-1-scaled.jpg",
    "https://eleganttours.co.in/wp-content/uploads/2025/12/Hero-1.jpg"
  ];

  useEffect(() => {
    // Show form after 3 seconds
    const timer = setTimeout(() => setShowForm(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Slide rotation
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(slideTimer);
  }, [slides.length]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    try {
      // Use FormSubmit.co for direct AJAX email sending
      const response = await fetch("https://formsubmit.co/ajax/Info@eleganttours.co.in", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          _subject: `New Hero Form Inquiry: ${formData.name}`,
          _template: "table", // Sends data in a clean table format
          _captcha: "false"   // Disable captcha redirect
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        // Fallback or error handling if needed, but usually 200 OK
        console.error("Form submission failed");
        alert("Something went wrong. Please try again or contact us on WhatsApp.");
      }
    } catch (error) {
      console.error("Error submitting form", error);
      alert("Network error. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="relative w-full min-h-[100dvh] md:min-h-screen bg-slate-900 flex flex-col justify-center">
      {/* Background Slider */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence mode='wait'>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            <img 
              src={slides[currentSlide]} 
              alt="Sundarbans Scenery" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30 z-10" />
      </div>

      {/* Content Container */}
      <div className="relative z-20 w-full flex-grow flex items-center py-20 md:py-32">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-12 pt-12 md:pt-0">
          
          {/* Left Side Content */}
          <div className="w-full md:w-1/2 text-white text-center md:text-left mb-8 md:mb-0">
            <motion.h1 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-serif font-bold leading-tight drop-shadow-2xl mb-6 tracking-tight"
            >
              Wilderness Calling.<br/>
              <span className="text-emerald-300 bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 to-emerald-100">Answer with Elegance.</span>
            </motion.h1>
            <p className="text-lg md:text-xl font-light opacity-95 max-w-lg mx-auto md:mx-0 drop-shadow-lg mb-10 leading-relaxed text-slate-100">
              Trust the experts with 25 years of experience to guide you through the mystical mangroves of the Sundarbans.
            </p>
            
            <div className="flex justify-center md:justify-start">
              <button 
                onClick={onCheckPackages}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-4 rounded-full font-bold transition-all transform hover:scale-105 shadow-xl shadow-emerald-900/40 text-lg border border-emerald-500/30 backdrop-blur-sm"
              >
                Check Dates & Pre-Register
              </button>
            </div>
          </div>

          {/* Right Side - Delayed Form */}
          <div className="w-full md:w-5/12 lg:w-1/3 flex justify-center md:justify-end">
            <AnimatePresence>
              {showForm && (
                <motion.div
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="w-full max-w-lg bg-[#f0fdf4]/95 backdrop-blur-xl p-6 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-t-4 border-emerald-600"
                >
                  {isSubmitted ? (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center py-10 text-center"
                    >
                      <div className="bg-emerald-100 p-4 rounded-full mb-6 shadow-inner">
                        <CheckCircle size={64} className="text-emerald-600" />
                      </div>
                      <h3 className="text-2xl font-serif font-bold text-nature-900 mb-4">Form submitted Successfully</h3>
                      <p className="text-slate-600 text-lg font-medium">...we will get back to You</p>
                      
                      <button 
                        onClick={() => setIsSubmitted(false)}
                        className="mt-8 text-sm text-emerald-700 hover:underline font-bold"
                      >
                        Submit another inquiry
                      </button>
                    </motion.div>
                  ) : (
                    <>
                      <div className="mb-6 text-center">
                        <h3 className="text-xl font-serif font-bold text-nature-800 uppercase tracking-wide">Get Your Package Details</h3>
                        <div className="h-1 w-16 bg-gradient-to-r from-emerald-400 to-emerald-600 mx-auto mt-3 rounded-full"></div>
                      </div>

                      <form className="space-y-4" onSubmit={handleSubmit}>
                        
                        {/* Date & Accommodation */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-bold text-slate-700 block mb-2">Preferred Date</label>
                            <div className="flex items-center ring-1 ring-slate-200 rounded-lg bg-white/80 py-3 px-3 focus-within:ring-2 focus-within:ring-emerald-500 transition-all shadow-sm hover:bg-white">
                              <Calendar size={20} className="text-emerald-600 mr-2 shrink-0" />
                              <input 
                                type="date" 
                                name="date"
                                value={formData.date}
                                onChange={handleInputChange}
                                className="w-full text-base outline-none bg-transparent text-slate-800 p-0 leading-none placeholder:text-slate-400" 
                                required 
                              />
                            </div>
                          </div>
                          <div>
                            <label className="text-sm font-bold text-slate-700 block mb-2">Accommodation</label>
                            <div className="relative shadow-sm group">
                              <select 
                                name="accommodation"
                                value={formData.accommodation}
                                onChange={handleInputChange}
                                className="w-full text-base ring-1 ring-slate-200 rounded-lg bg-white/80 py-3 pl-3 pr-10 outline-none appearance-none focus:ring-2 focus:ring-emerald-500 text-slate-800 hover:bg-white transition-all cursor-pointer" 
                                required
                              >
                                <option value="ac">AC Room</option>
                                <option value="non_ac">Non-AC Room</option>
                              </select>
                              <Home size={20} className="absolute right-3 top-1/2 -translate-y-1/2 text-emerald-600 pointer-events-none group-hover:scale-110 transition-transform" />
                            </div>
                          </div>
                        </div>

                        {/* Guests & Duration */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-bold text-slate-700 block mb-2">Guests (Adults)</label>
                            <div className="flex items-center ring-1 ring-slate-200 rounded-lg bg-white/80 py-3 px-3 focus-within:ring-2 focus-within:ring-emerald-500 transition-all shadow-sm hover:bg-white">
                              <Users size={20} className="text-emerald-600 mr-2 shrink-0" />
                              <input 
                                type="number" 
                                min="1" 
                                name="guests"
                                value={formData.guests}
                                onChange={handleInputChange}
                                placeholder="0" 
                                className="w-full text-base outline-none bg-transparent text-slate-800 leading-none" 
                                required 
                              />
                            </div>
                          </div>
                          <div>
                            <label className="text-sm font-bold text-slate-700 block mb-2">We're Up For</label>
                            <div className="relative shadow-sm group">
                              <select 
                                name="tourType"
                                value={formData.tourType}
                                onChange={handleInputChange}
                                className="w-full text-base ring-1 ring-slate-200 rounded-lg bg-white/80 py-3 pl-3 pr-10 outline-none appearance-none focus:ring-2 focus:ring-emerald-500 text-slate-800 hover:bg-white transition-all cursor-pointer" 
                                required
                              >
                                  <option>1 Day Tour</option>
                                  <option>1 Night 2 Days</option>
                                  <option>2 Nights 3 Days</option>
                                  <option>Customized</option>
                              </select>
                              <Clock size={20} className="absolute right-3 top-1/2 -translate-y-1/2 text-emerald-600 pointer-events-none group-hover:scale-110 transition-transform" />
                            </div>
                          </div>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-4 pt-2">
                          <div className="flex items-center border-b border-slate-300 py-2 focus-within:border-emerald-500 transition-colors">
                            <User size={20} className="text-emerald-600 mr-3 shrink-0" />
                            <input 
                              type="text" 
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              placeholder="Your Name" 
                              className="w-full text-base bg-transparent outline-none text-slate-800 placeholder:text-slate-400" 
                              required 
                            />
                          </div>
                          <div className="flex items-center border-b border-slate-300 py-2 focus-within:border-emerald-500 transition-colors">
                            <Mail size={20} className="text-emerald-600 mr-3 shrink-0" />
                            <input 
                              type="email" 
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              placeholder="Email ID" 
                              className="w-full text-base bg-transparent outline-none text-slate-800 placeholder:text-slate-400" 
                              required 
                            />
                          </div>
                          <div className="flex items-center border-b border-slate-300 py-2 focus-within:border-emerald-500 transition-colors">
                            <Phone size={20} className="text-emerald-600 mr-3 shrink-0" />
                            <input 
                              type="tel" 
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              placeholder="Phone / WhatsApp" 
                              className="w-full text-base bg-transparent outline-none text-slate-800 placeholder:text-slate-400" 
                              required 
                            />
                          </div>
                        </div>

                        <button 
                          type="submit" 
                          disabled={isSending}
                          className="w-full bg-gradient-to-r from-slate-900 to-slate-800 hover:from-emerald-800 hover:to-emerald-700 text-white font-bold py-4 rounded-xl mt-6 transition-all shadow-lg hover:shadow-xl text-lg tracking-wide transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                        >
                          {isSending ? (
                            <>
                              <Loader2 className="animate-spin" size={24} />
                              Sending...
                            </>
                          ) : (
                            "Check Our Package"
                          )}
                        </button>

                        {/* WhatsApp Button */}
                        <div className="mt-6 pt-4 border-t border-slate-200/50 text-center">
                          <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">For Faster Response</p>
                          <a 
                            href="https://wa.me/919903292946?text=Hi!%20I'm%20interested%20in%20Sundarbans%20Tour"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center justify-center gap-3 w-full border-2 border-emerald-500 text-emerald-700 bg-white hover:bg-emerald-50 hover:shadow-md font-bold py-3 rounded-xl transition-all text-base group"
                          >
                            <MessageCircle size={22} className="group-hover:scale-110 transition-transform" />
                            Say Hi On WhatsApp!
                          </a>
                        </div>
                      </form>
                    </>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;