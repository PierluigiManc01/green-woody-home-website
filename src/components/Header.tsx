
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full bg-bnb-dark_gray backdrop-blur-sm border-b">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center">
          {/* Logo */}
          <img
            src="/logo.png" 
            alt="Green Woody Home Logo"
            className="h-10 w-auto ml-2" 
          />
        </Link>
        
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="font-medium text-bnb-green2 hover:text-white transition-colors">
            Home
          </a>
          <a href="#gallery" className="font-medium text-bnb-green2 hover:text-white  transition-colors">
            Gallery
          </a>
          <a href="#contact" className="font-medium text-bnb-green2 hover:text-white  transition-colors">
            Contact
          </a>
        </nav>
        
        <div className="md:hidden relative">
          {/* Mobile menu button with toggle functionality */}
          <>
            <button 
              className="p-2 text-bnb-green2 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open menu</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </button>
            
            {React.useEffect(() => {
              const handleClickOutside = (event: MouseEvent) => {
                const target = event.target as HTMLElement;
                if (isMenuOpen && !target.closest('.mobile-menu-container')) {
                  setIsMenuOpen(false);
                }
              };
              
              document.addEventListener('mousedown', handleClickOutside);
              return () => document.removeEventListener('mousedown', handleClickOutside);
            }, [isMenuOpen])}
          </>
          
          {/* Mobile menu dropdown */}
          {isMenuOpen && (
            <div className="absolute top-12 right-0 bg-bnb-dark_gray border border-gray-700 rounded-md shadow-lg py-2 w-40">
              <a 
                href="#home" 
                className="block px-4 py-2 text-bnb-green2 hover:text-white hover:bg-gray-800"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="#about" 
                className="block px-4 py-2 text-bnb-green2 hover:text-white hover:bg-gray-800"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#gallery" 
                className="block px-4 py-2 text-bnb-green2 hover:text-white hover:bg-gray-800"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </a>
              <a 
                href="#contact" 
                className="block px-4 py-2 text-bnb-green2 hover:text-white hover:bg-gray-800"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
