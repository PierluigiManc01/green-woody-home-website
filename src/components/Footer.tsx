
import React from 'react';
import { resetCookieConsent } from '@/lib/cookieManager';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const handleResetCookieConsent = () => {
    resetCookieConsent();
    window.location.reload();
  };
  
  return (
    <footer id="footer" className="bg-bnb-dark_gray text-bnb-green2">
      <div className="container mx-auto py-12 px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* First Column: Points of interest */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-display font-medium mb-4">Green Woody Home - points of interest</h3>
            <p className="text-sm text-black-300 leading-relaxed">
            <p>In the heart of Rome's countryside, close to the sea, by car you can reach:</p>
            <ul className="list-disc list-inside text-sm text-black-300 leading-relaxed">
              <li>The Colosseum in 30 minutes</li>
              <li>FCO airport in 20 minutes</li>
              <li>CIA airport in 20 minutes</li>
              <li>PalaSport metro station in 10 minutes</li>
              <li>The seaside (Torvajanica) in 15 minutes</li>
              <li>Castel Romano Designer Outlet in 5 minutes</li>
            </ul>
            <strong>NB:</strong> A car is mandatory to reach the house.
            </p>
          </div>
          {/* Vertical Divider */}
          <div className="hidden md:block border-l border-white"></div>

          {/* Second and Third Columns */}
          <div>
            <h4 className="text-lg font-display font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-black-300 hover:text-gray transition-colors">Home</a>
              </li>
              <li>
                <a href="#gallery" className="text-black-300 hover:text-gray transition-colors">Gallery</a>
              </li>
              <li>
                <a href="#contact" className="text-black-300 hover:text-gray transition-colors">Contact</a>
              </li>
              <li>
                <a href="https://www.airbnb.it/h/green-woody-home" target="_blank" rel="noopener noreferrer" className="text-black-300 hover:text-gray transition-colors">
                  Book on Airbnb
                </a>
              </li>
              <li>
                <a href="https://www.booking.com/hotel/it/green-woody-home" target="_blank" rel="noopener noreferrer" className="text-black-300 hover:text-gray transition-colors">
                  Book on Booking.com
                </a>
              </li>
              <li>
                <button 
                  onClick={handleResetCookieConsent}
                  className="text-black-300 hover:text-gray transition-colors cursor-pointer text-left"
                >
                  Cookie Settings
                </button>
              </li>
            </ul>
          </div>   
          <div>
            <h4 className="text-lg font-display font-medium mb-4">Contact</h4>
            <address className="not-italic">
              <p className="mb-2">
                <a href="tel:+393358158411" className="hover:text-gray transition-colors">(+06) 5847332</a>
              </p>
              <p>
                <a href="mailto:gigi.mancinelli@gmail.com" className="hover:text-gray transition-colors">info@greenwoody.home</a>
              </p>
            </address>
          </div>
          <div>
          <h4 className="text-lg font-display font-medium mb-4">Identification Codes</h4>
              <p className="mb-2">
                <a className="hover:text-gray transition-colors">CIN: IT058091C2NI2MQGQ5</a>
              </p>
              <p>
                <a className="hover:text-gray transition-colors">CIR: 058091-ALT-09921</a>
              </p>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Green Woody Home. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
