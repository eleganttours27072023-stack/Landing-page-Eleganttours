import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InfoSections from './components/InfoSections';
import SeasonBooking from './components/SeasonBooking';
import StoryAndWhyUs from './components/StoryAndWhyUs';
import Packages from './components/Packages';
import Contact from './components/Contact';
import FinalCTA from './components/FinalCTA';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import StickyActions from './components/StickyActions';
import { PageView } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageView>('home');
  const [selectedPackage, setSelectedPackage] = useState<string>('');

  const navigateTo = (page: PageView) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentPage(page);
  };

  const handleBookPackage = (tourType: string) => {
    setSelectedPackage(tourType);
    navigateTo('contact');
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-nature-100 antialiased">
      <Navbar currentPage={currentPage} onNavigate={navigateTo} />
      
      {/* Sticky Right-Side Action Buttons */}
      <StickyActions 
        onBook={() => navigateTo('packages')} 
        onPreRegister={() => navigateTo('contact')} 
      />
      
      {currentPage === 'home' && (
        <>
          <Hero onCheckPackages={() => navigateTo('packages')} />
          <InfoSections />
          <SeasonBooking />
          <StoryAndWhyUs />
          <Testimonials />
          <FAQ />
          <FinalCTA onPreRegister={() => navigateTo('contact')} />
        </>
      )}

      {currentPage === 'packages' && (
        <div className="pt-20">
          <Packages onBook={handleBookPackage} />
        </div>
      )}

      {currentPage === 'contact' && (
        <div className="pt-20">
          <Contact preSelectedTourType={selectedPackage} />
        </div>
      )}
      
      {/* Footer Simple Copyright */}
      <footer className="bg-nature-900 text-white py-8 text-center text-sm tracking-wide">
        <p className="opacity-80">&copy; {new Date().getFullYear()} Elegant Tours. <span className="mx-2">|</span> Crafted for the Wild.</p>
      </footer>
    </div>
  );
};

export default App;