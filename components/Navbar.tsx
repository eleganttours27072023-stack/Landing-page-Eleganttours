import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { PageView } from '../types';

interface NavbarProps {
  currentPage: PageView;
  onNavigate: (page: PageView) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Updated to use specific color #f0fdf4 with more transparency when not scrolled
  const navClass = `fixed w-full z-50 transition-all duration-500 backdrop-blur-lg ${
    isScrolled 
      ? 'bg-white/90 shadow-sm py-3' 
      : 'bg-[#f0fdf4]/60 py-6'
  }`;

  // Links are always dark for visibility against the light background
  const linkClass = (active: boolean) => 
    `cursor-pointer text-lg font-medium transition-colors duration-300 hover:text-nature-600 ${
      active 
        ? 'text-nature-700 font-bold' 
        : 'text-slate-800'
    }`;

  const logoUrl = "https://eleganttours.co.in/wp-content/uploads/2025/12/Untitled-design-28.png";

  return (
    <nav className={navClass}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div 
          className="flex items-center gap-2 cursor-pointer" 
          onClick={() => onNavigate('home')}
        >
          <img src={logoUrl} alt="Elegant Tours" className="h-12 md:h-16 w-auto object-contain" />
        </div>

        {/* Desktop Menu - Removed About Us and Day Tours */}
        <div className="hidden md:flex space-x-8 items-center font-serif">
          <button onClick={() => onNavigate('home')} className={linkClass(currentPage === 'home')}>Home</button>
          <button onClick={() => onNavigate('packages')} className={linkClass(currentPage === 'packages')}>Packages</button>
          <button onClick={() => onNavigate('contact')} className={linkClass(currentPage === 'contact')}>Contact</button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-slate-900">
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl shadow-xl py-6 px-6 flex flex-col space-y-4 border-t border-slate-100">
          <button onClick={() => { onNavigate('home'); setMobileMenuOpen(false); }} className="text-left text-lg text-slate-800 font-serif font-medium border-b border-slate-100 pb-2">Home</button>
          <button onClick={() => { onNavigate('packages'); setMobileMenuOpen(false); }} className="text-left text-lg text-slate-800 font-serif font-medium border-b border-slate-100 pb-2">Packages</button>
          <button onClick={() => { onNavigate('contact'); setMobileMenuOpen(false); }} className="text-left text-lg text-slate-800 font-serif font-medium pb-2">Contact</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;