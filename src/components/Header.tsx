
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { useIsMobile } from '@/hooks/use-mobile';
import DirectBookingCTA from '@/components/DirectBookingCTA';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const isMobile = useIsMobile();
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      // Close the menu if the click is outside the menu container
      if (isMenuOpen && !target.closest('.mobile-menu-container')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);
  return (
    <header className="sticky top-0 z-50 w-full border-b border-bnb-sand/30 bg-bnb-stone/95 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between h-16 lg:h-20 px-4">
        <Link to="/" 
              onClick={() => window.scrollTo(0, 0)} 
              className="flex items-center">
          {/* Logo */}
          <img
            src="/logo.png" 
            alt="Green Woody Home Logo"
            className="h-10 lg:h-12 w-auto ml-2" 
          />
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <Link to="/" onClick={() => window.scrollTo(0, 0)} className="text-sm lg:text-base font-medium text-bnb-dark hover:text-bnb-green transition-colors">
            {t('nav.home')}
          </Link>
          <Link to="/" onClick={() => {window.scrollTo(0, 800); <a href="#about"></a>}} className="text-sm lg:text-base font-medium text-bnb-dark hover:text-bnb-green transition-colors">
            {t('nav.about')}
          </Link>
          <Link to="/gallery" onClick={() => window.scrollTo(0, 0)} className="text-sm lg:text-base font-medium text-bnb-dark hover:text-bnb-green transition-colors">
            {t('nav.gallery')}
          </Link>
          <Link to="/services" onClick={() => window.scrollTo(0, 0)} className="text-sm lg:text-base font-medium text-bnb-dark hover:text-bnb-green transition-colors">
            {t('nav.services')}
          </Link>
          <Link to="/events" onClick={() => window.scrollTo(0, 0)} className="text-sm lg:text-base font-medium text-bnb-dark hover:text-bnb-green transition-colors">
            {t('nav.events')}
          </Link>
          <Link to="/reservations" onClick={() => window.scrollTo(0, 0)} className="text-sm lg:text-base font-medium text-bnb-dark hover:text-bnb-green transition-colors">
            {t('nav.contact')}
          </Link>
        </nav>
        
        {/* Language Toggle Button */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={() => setLanguage(language === 'en' ? 'it' : 'en')}
            className="flex items-center space-x-1 lg:space-x-2 text-bnb-dark hover:text-bnb-green transition-colors p-2"
            title={language === 'en' ? 'Switch to Italian' : 'Cambia in Inglese'}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
              <path d="M2 12h20"/>
            </svg>
            <span className="text-sm font-medium">{language.toUpperCase()}</span>
          </button>
          <DirectBookingCTA />
        </div>
        
        <div className="md:hidden relative">
          {/* Mobile menu button with toggle functionality */}
          <button 
            className="p-2 text-bnb-dark hover:text-bnb-green transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">{t('nav.menu')}</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
          
          {/* Mobile menu dropdown */}
          {isMenuOpen && (
            <div className="mobile-menu-container absolute top-12 right-0 w-56 rounded-md border border-bnb-sand/40 bg-bnb-stone shadow-xl py-2">
              <Link to="/" className="block px-4 py-2 text-bnb-dark hover:text-bnb-green hover:bg-white/70"
                onClick={() => {
                  setIsMenuOpen(false);
                  window.scrollTo(0, 0);
                }}
              >
                {t('nav.home')}
              </Link>

              <Link to="/" className="block px-4 py-2 text-bnb-dark hover:text-bnb-green hover:bg-white/70"
                onClick={() => {
                  setIsMenuOpen(false);
                  const scrollPosition = isMobile ? 600 : 800;
                  window.scrollTo(0, scrollPosition);
                }}
              >
                {t('nav.about')}
              </Link>

              <Link to="/gallery" className="block px-4 py-2 text-bnb-dark hover:text-bnb-green hover:bg-white/70"
                  onClick={() => {
                  setIsMenuOpen(false);
                  window.scrollTo(0, 0);
                }}
              > 
                {t('nav.gallery')}
              </Link>
              <Link to="/services" className="block px-4 py-2 text-bnb-dark hover:text-bnb-green hover:bg-white/70"
                onClick={() => {
                  setIsMenuOpen(false);
                  window.scrollTo(0, 0);
                }}
              >
                {t('nav.services')}
              </Link>
              <Link to="/events" className="block px-4 py-2 text-bnb-dark hover:text-bnb-green hover:bg-white/70"
                onClick={() => {
                  setIsMenuOpen(false);
                  window.scrollTo(0, 0);
                }}
              >
                {t('nav.events')}
              </Link>
              <Link to="/reservations" className="block px-4 py-2 text-bnb-dark hover:text-bnb-green hover:bg-white/70"
                onClick={() => {
                  setIsMenuOpen(false);
                  window.scrollTo(0, 0);
                }}
              >
                {t('nav.contact')}
              </Link>
              <div className="border-t border-bnb-sand/40 my-2"></div>
              <button
                onClick={() => {
                  setLanguage(language === 'en' ? 'it' : 'en');
                  setIsMenuOpen(false);
                }}
                className="flex items-center space-x-2 px-4 py-2 text-bnb-dark hover:text-bnb-green hover:bg-white/70 w-full"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
                  <path d="M2 12h20"/>
                </svg>
                <span className="text-sm">{language.toUpperCase()}</span>
              </button>
              <div className="px-4 pt-2">
                <DirectBookingCTA showValueProp />
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
