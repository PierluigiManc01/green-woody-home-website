
import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-gray-80 backdrop-blur-sm border-b">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center">
          <span className="font-display text-2xl font-medium text-bnb-green2">Green Woody Home</span>
          <img
            src="/logo.png" 
            alt="Green Woody Home Logo"
            className="h-8 w-auto ml-2" // Adjust size if needed
          />
        </Link>
        
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="font-medium text-foreground hover:text-bnb-green2 transition-colors">
            Home
          </a>
          <a href="#gallery" className="font-medium text-foreground hover:text-bnb-green2 transition-colors">
            Gallery
          </a>
          <a href="#contact" className="font-medium text-foreground hover:text-bnb-green2 transition-colors">
            Contact
          </a>
        </nav>
        
        <div className="md:hidden">
          {/* Mobile menu button - simple version */}
          <button className="p-2 text-foreground">
            <span className="sr-only">Open menu</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
