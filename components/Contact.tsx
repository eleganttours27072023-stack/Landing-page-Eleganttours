import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Globe, ArrowRight, ChevronDown, CheckCircle, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface ContactProps {
  preSelectedTourType?: string;
}

const Contact: React.FC<ContactProps> = ({ preSelectedTourType }) => {
  const [formData, setFormData] = useState({
    date: '',
    tourType: '2 Nights 3 Days',
    accommodation: 'ac',
    guests: '',
    name: '',
    email: '',
    phone: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    if (preSelectedTourType) {
      setFormData(prev => ({ ...prev, tourType: preSelectedTourType }));
    }
  }, [preSelectedTourType]);

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
          _subject: `New Contact Form Inquiry: ${formData.name}`,
          _template: "table", // Sends data in a clean table format
          _captcha: "false"   // Disable captcha redirect
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
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
    <div className="bg-[#ecfdf5] min-h-screen py-20 px-6 flex items-center justify-center">
      <div className="max-w-7xl w-full mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-nature-900 mb-4">Start Your Journey</h1>
          <div className="h-1.5 w-24 bg-gradient-to-r from-emerald-400 to-nature-600 mx-auto rounded-full"></div>
          <p className="text-slate-600 mt-6 max-w-2xl mx-auto text-lg font-light">
            We are here to help you plan the perfect Sundarbans getaway.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-0 shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-3xl overflow-hidden bg-white max-w-6xl mx-auto">
          
          {/* Left Side: Contact Info (2/5) */}
          <div className="lg:w-2/5 bg-gradient-to-br from-nature-900 to-emerald-900 text-white p-12 flex flex-col justify-between relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <h3 className="text-3xl font-serif font-bold mb-2">Get in Touch</h3>
              <p className="text-emerald-100 mb-12 font-light">Have questions? We'd love to hear from you.</p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-5 group">
                  <div className="bg-white/10 p-3 rounded-xl backdrop-blur-sm group-hover:bg-emerald-500 transition-colors duration-300 shadow-inner border border-white/5">
                    <MapPin className="text-white shrink-0" size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-lg text-white mb-1">Registered Office</p>
                    <p className="text-emerald-100/80 leading-relaxed font-light">
                      Elegant Tours,<br/>
                      Kolkata, West Bengal,<br/>
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5 group">
                  <div className="bg-white/10 p-3 rounded-xl backdrop-blur-sm group-hover:bg-emerald-500 transition-colors duration-300 shadow-inner border border-white/5">
                     <Phone className="text-white shrink-0" size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-lg text-white mb-1">Call Us</p>
                    <p className="text-emerald-100/80 font-light">+91 99032 92946</p>
                    <p className="text-emerald-100/80 font-light">+91 98312 21626</p>
                  </div>
                </div>

                <div className="flex items-start gap-5 group">
                   <div className="bg-white/10 p-3 rounded-xl backdrop-blur-sm group-hover:bg-emerald-500 transition-colors duration-300 shadow-inner border border-white/5">
                      <Mail className="text-white shrink-0" size={24} />
                   </div>
                  <div>
                    <p className="font-bold text-lg text-white mb-1">Email</p>
                    <p className="text-emerald-100/80 font-light">Info@eleganttours.co.in</p>
                  </div>
                </div>

                <div className="flex items-start gap-5 group">
                   <div className="bg-white/10 p-3 rounded-xl backdrop-blur-sm group-hover:bg-emerald-500 transition-colors duration-300 shadow-inner border border-white/5">
                      <Globe className="text-white shrink-0" size={24} />
                   </div>
                  <div>
                    <p className="font-bold text-lg text-white mb-1">Website</p>
                    <p className="text-emerald-100/80 font-light">eleganttours.co.in</p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>

          {/* Right Side: Form (3/5) */}
          <div className="lg:w-3/5 bg-white p-10 lg:p-14 relative">
             {isSubmitted ? (
               <motion.div 
                 initial={{ opacity: 0, scale: 0.95 }}
                 animate={{ opacity: 1, scale: 1 }}
                 className="h-full flex flex-col items-center justify-center text-center p-6"
               >
                  <div className="bg-emerald-100 p-6 rounded-full mb-8 shadow-sm">
                    <CheckCircle size={80} className="text-emerald-600" />
                  </div>
                  <h3 className="text-3xl font-serif font-bold text-nature-900 mb-4">Form submitted Successfully</h3>
                  <p className="text-slate-600 text-xl font-medium leading-relaxed">...we will get back to You</p>
                  
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-10 px-8 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg font-bold transition-colors"
                  >
                    Return to Form
                  </button>
               </motion.div>
             ) : (
                <>
                    <div className="mb-10 text-center">
                        <h3 className="text-3xl font-serif font-bold text-nature-900 inline-block relative">
                            Get A Call
                            <span className="absolute bottom-0 left-0 w-full h-1.5 bg-emerald-100 rounded-full transform translate-y-3"></span>
                        </h3>
                        <p className="text-slate-500 mt-6 text-lg">Fill out the form below and our travel expert will reach out to you shortly.</p>
                    </div>

                    <form className="space-y-6" onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                         <div className="group">
                            <label className="block text-sm font-bold text-slate-700 mb-2 group-focus-within:text-emerald-700 transition-colors">Preferred Date</label>
                            <input 
                              type="date" 
                              name="date"
                              value={formData.date}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all duration-300 text-slate-700 font-medium" 
                              required
                            />
                         </div>
                         <div className="group">
                            <label className="block text-sm font-bold text-slate-700 mb-2 group-focus-within:text-emerald-700 transition-colors">Tour Type</label>
                            <div className="relative">
                                <select 
                                  name="tourType"
                                  value={formData.tourType}
                                  onChange={handleInputChange}
                                  className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all duration-300 text-slate-700 font-medium appearance-none cursor-pointer"
                                >
                                   <option>2 Nights 3 Days</option>
                                   <option>1 Night 2 Days</option>
                                   <option>Day Tour</option>
                                   <option>Customized</option>
                                </select>
                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={18}/>
                            </div>
                         </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                         <div className="group">
                            <label className="block text-sm font-bold text-slate-700 mb-2 group-focus-within:text-emerald-700 transition-colors">Accommodation</label>
                            <div className="relative">
                                <select 
                                  name="accommodation"
                                  value={formData.accommodation}
                                  onChange={handleInputChange}
                                  className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all duration-300 text-slate-700 font-medium appearance-none cursor-pointer"
                                >
                                   <option value="ac">AC Room</option>
                                   <option value="non_ac">Non-AC Room</option>
                                </select>
                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={18}/>
                            </div>
                         </div>
                         <div className="group">
                            <label className="block text-sm font-bold text-slate-700 mb-2 group-focus-within:text-emerald-700 transition-colors">No. of Guests (Adult)</label>
                            <input 
                              type="number" 
                              min="1" 
                              name="guests"
                              value={formData.guests}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all duration-300 text-slate-700 font-medium placeholder:text-slate-400" 
                              placeholder="e.g. 2" 
                              required
                            />
                         </div>
                      </div>

                      <div className="group">
                        <label className="block text-sm font-bold text-slate-700 mb-2 group-focus-within:text-emerald-700 transition-colors">Your Name</label>
                        <input 
                          type="text" 
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all duration-300 text-slate-700 font-medium placeholder:text-slate-400" 
                          placeholder="Enter your full name" 
                          required
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="group">
                           <label className="block text-sm font-bold text-slate-700 mb-2 group-focus-within:text-emerald-700 transition-colors">Email Address</label>
                           <input 
                             type="email" 
                             name="email"
                             value={formData.email}
                             onChange={handleInputChange}
                             className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all duration-300 text-slate-700 font-medium placeholder:text-slate-400" 
                             placeholder="name@company.com" 
                             required
                           />
                        </div>
                        <div className="group">
                           <label className="block text-sm font-bold text-slate-700 mb-2 group-focus-within:text-emerald-700 transition-colors">Phone / WhatsApp</label>
                           <input 
                             type="tel" 
                             name="phone"
                             value={formData.phone}
                             onChange={handleInputChange}
                             className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all duration-300 text-slate-700 font-medium placeholder:text-slate-400" 
                             placeholder="+91 ..." 
                             required
                           />
                        </div>
                      </div>

                      <button 
                        type="submit" 
                        disabled={isSending}
                        className="group w-full bg-gradient-to-r from-slate-900 to-nature-900 hover:from-emerald-700 hover:to-nature-800 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl hover:-translate-y-1 mt-6 disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                         {isSending ? (
                            <>
                              <Loader2 className="animate-spin" size={20} />
                              <span className="text-lg tracking-wide">Sending...</span>
                            </>
                          ) : (
                            <>
                                <span className="text-lg tracking-wide">Request Callback</span>
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </>
                          )}
                      </button>
                    </form>
                </>
             )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;