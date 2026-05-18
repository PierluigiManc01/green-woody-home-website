
import React from 'react';
import { resetCookieConsent } from '@/lib/cookieManager';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();
  
  const handleResetCookieConsent = () => {
    resetCookieConsent();
    window.location.reload();
  };
  
  return (
    <footer id="footer" className="bg-bnb-dark_gray">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h4 className="text-lg text-white font-display font-medium mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-bnb-green2 hover:text-white transition-colors">{t('nav.home')}</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-bnb-green2 hover:text-white transition-colors">{t('nav.gallery')}</Link>
              </li>
              <li>
                <Link to="/services" className="text-bnb-green2 hover:text-white transition-colors">{t('nav.services')}</Link>
              </li>
              <li>
                <button 
                  onClick={handleResetCookieConsent}
                  className="text-bnb-green2 hover:text-white transition-colors cursor-pointer text-left"
                >
                  {t('footer.cookieSettings')}
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg text-white font-display font-medium mb-4">{t('footer.reservations')}</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/reservations" className="text-bnb-green2 hover:text-white transition-colors">{t('footer.privateReservation')}</Link>
              </li>
              <li>
                <a href="https://www.airbnb.it/h/green-woody-home" target="_blank" rel="noopener noreferrer" className="text-bnb-green2 hover:text-white transition-colors">
                  {t('footer.bookAirbnb')}
                </a>
              </li>
              <li>
                <a href="https://www.booking.com/hotel/it/green-woody-home" target="_blank" rel="noopener noreferrer" className="text-bnb-green2 hover:text-white transition-colors">
                  {t('footer.bookBooking')}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg text-white font-display font-medium mb-4">{t('footer.contact')}</h4>
            <address className="not-italic">
              <p className="mb-2">
                <a href="tel:+393358158411" className="text-bnb-green2 hover:text-white transition-colors">(+39) 3358158411</a>
              </p>
              <p>
                <a href="mailto:greenwoodyhome@gmail.com" className="text-bnb-green2 hover:text-white transition-colors">info@greenwoody.home</a>
              </p>
            </address>
          </div>

          <div>
            <h4 className="text-lg text-white font-display font-medium mb-4">{t('footer.identification')}</h4>
            <p className="mb-2 break-words text-bnb-green2">CIN: IT058091C2NI2MQGQ5</p>
            <p className="break-words text-bnb-green2">CIR: 058091-ALT-09921</p>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Green Woody Home. {t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
