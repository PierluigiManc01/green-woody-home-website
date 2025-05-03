
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-bnb-dark_gray text-bnb-green2">
      <div className="container mx-auto py-12 px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-display font-medium mb-4">Green Woody Home - about</h3>
            <p className="text-black-300 mb-4">
            In the heart of Rome countryside and close to the sea, you can experience the historical beauty of the city while staying in an enchanting location in the woods. By car it is 30 minutes away from the Colosseum, 20 mins from the airport (FCO) and 15 mins from the seaside.
            At Green Woody Home we offer an eco-conscious living experience by providing energy and heat entirely powered by our solar panels. Your stay will be a truly “green” experience.
            
            NB: Having a car is mandatory to reach the house
            </p>
          </div>
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
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Green Woody Home. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
