
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
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
    <header className="sticky top-0 z-50 w-full bg-bnb-dark_gray backdrop-blur-sm border-b">
      <div className="container mx-auto flex items-center justify-between h-16 lg:h-20 xl:h-24 px-4">
        <Link to="/" className="flex items-center">
          {/* Logo */}
          <img
            src="/logo.png" 
            alt="Green Woody Home Logo"
            className="h-10 lg:h-12 xl:h-14 w-auto ml-2" 
          />
        </Link>
        
        <nav className="hidden md:flex space-x-6 lg:space-x-8 xl:space-x-10">
          <Link to="/" className="font-medium lg:text-lg xl:text-xl text-bnb-green2 hover:text-white transition-colors">
            {t('nav.home')}
          </Link>
          <a href="#about" className="font-medium lg:text-lg xl:text-xl text-bnb-green2 hover:text-white transition-colors">
            {t('nav.about')}
          </a>
          <Link to="/gallery" className="font-medium lg:text-lg xl:text-xl text-bnb-green2 hover:text-white transition-colors">
            {t('nav.gallery')}
          </Link>
          <Link to="/services" className="font-medium lg:text-lg xl:text-xl text-bnb-green2 hover:text-white transition-colors">
            {t('nav.services')}
          </Link>
          <Link to="/contact" className="font-medium lg:text-lg xl:text-xl text-bnb-green2 hover:text-white transition-colors">
            {t('nav.contact')}
          </Link>
        </nav>
        
        {/* Language Toggle Button */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={() => setLanguage(language === 'en' ? 'it' : 'en')}
            className="flex items-center space-x-1 lg:space-x-2 text-bnb-green2 hover:text-white transition-colors p-2 lg:p-3"
            title={language === 'en' ? 'Switch to Italian' : 'Cambia in Inglese'}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lg:w-6 lg:h-6 xl:w-7 xl:h-7">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
              <path d="M2 12h20"/>
            </svg>
            <span className="text-sm lg:text-base xl:text-lg font-medium">{language.toUpperCase()}</span>
          </button>
        </div>
        
        <div className="md:hidden relative">
          {/* Mobile menu button with toggle functionality */}
          <button 
            className="p-2 text-bnb-green2 hover:text-white transition-colors"
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
            <div className="mobile-menu-container absolute top-12 right-0 bg-bnb-dark_gray border border-gray-700 rounded-md shadow-lg py-2 w-40">
              <Link to="/" className="block px-4 py-2 text-bnb-green2 hover:text-white hover:bg-gray-800"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.home')}
              </Link>
              <a href="#about" className="block px-4 py-2 text-bnb-green2 hover:text-white hover:bg-gray-800"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.about')}
              </a>
              <Link to="/gallery" className="block px-4 py-2 text-bnb-green2 hover:text-white hover:bg-gray-800"
                onClick={() => setIsMenuOpen(false)}
              > 
                {t('nav.gallery')}
              </Link>
              <Link to="/services" className="block px-4 py-2 text-bnb-green2 hover:text-white hover:bg-gray-800"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.services')}
              </Link>
              <Link to="/contact" className="block px-4 py-2 text-bnb-green2 hover:text-white hover:bg-gray-800"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.contact')}
              </Link>
              <div className="border-t border-gray-700 my-2"></div>
              <button
                onClick={() => {
                  setLanguage(language === 'en' ? 'it' : 'en');
                  setIsMenuOpen(false);
                }}
                className="flex items-center space-x-2 px-4 py-2 text-bnb-green2 hover:text-white hover:bg-gray-800 w-full"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
                  <path d="M2 12h20"/>
                </svg>
                <span className="text-sm">{language.toUpperCase()}</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;