import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'it';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Header
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.gallery': 'Gallery',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.welcome': 'Welcome to',
    'hero.title': 'Green Woody Home',
    'hero.subtitle': 'Your perfect retreat in nature, combining modern comfort with rustic charm',
    'hero.viewGallery': 'View Our Gallery',
    'hero.pointsOfInterest': 'Points of Interest',
    'hero.contactUs': 'Contact Us',
    
    // About
    'about.title': 'About Our Space',
    'about.description': 'Green Woody Home is an eco-friendly retreat nestled in the serene countryside of Rome, perfectly balancing nature and convenience. <br /> Fully powered by solar energy, our villa offers a sustainable escape just 30 minutes from the historic city center and 15 minutes from the seaside. Experience rustic charm, modern comfort, and a unique connection to nature—all in one exclusive location.',
    'about.bedrooms': 'Bedrooms',
    'about.bathrooms': 'Bathrooms',
    'about.livingSpace': 'm² Living Space',
    'about.garden': 'm² Garden',
    'about.poi.title': 'Points of Interest',
    'about.poi.description': 'Explore the rich history and culture of Rome and its surroundings. Here are some must-visit places within a short drive from Green Woody Home: click to see where they are!',
    'about.poi.colosseum': 'Colosseum',
    'about.poi.colosseum.desc': 'Ancient Roman amphitheater and iconic symbol of Imperial Rome.',
    'about.poi.vatican': 'Vatican City',
    'about.poi.vatican.desc': 'Home to St. Peter\'s Basilica and the Vatican Museums with the Sistine Chapel.',
    'about.poi.trevi': 'Trevi Fountain',
    'about.poi.trevi.desc': 'Baroque masterpiece and one of the most famous fountains in the world.',
    'about.poi.torvaianica': 'Torvaianica - Marine Village',
    'about.poi.torvaianica.desc': 'Nearest seaside destination with sandy beaches and crystal clear waters.',
    'about.poi.airport': 'Fiumicino Airport',
    'about.poi.airport.desc': 'Main International airport in Rome.',
    'about.poi.outlet': 'Castel Romano Designer Outlet',
    'about.poi.outlet.desc': 'Luxury apparel outlet by McArthurGlen.',
    
    // Gallery
    'gallery.title': 'Gallery',
    'gallery.subtitle': 'Take a virtual tour of our beautiful eco-friendly retreat',
    'gallery.viewFull': 'View Full Gallery',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Get in touch to book your stay or ask any questions',
    'contact.availability': 'Check Availability',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.info.title': 'Contact Information',
    'contact.info.address': 'Via Clarice Tartufari, Castel di Decima, Rome',
    'contact.info.phone': '(+06) 5847332',
    'contact.info.email': 'info@greenwoody.home',
    'contact.availability.check': 'Check our availability by selecting your preferred dates:',
    'contact.booking.note': 'Ready to book? Reserve directly through our trusted partners:',
    'contact.booking.airbnb': 'Book on Airbnb',
    'contact.booking.booking': 'Book on Booking.com',
    'contact.success': 'Message sent successfully!',
    'contact.error': 'Failed to send message. Please try again.',
    
    // Footer
    'footer.quickLinks': 'Quick Links',
    'footer.contact': 'Contact',
    'footer.identification': 'Identification Codes',
    'footer.cookieSettings': 'Cookie Settings',
    'footer.copyright': 'All rights reserved.',
    'footer.bookAirbnb': 'Book on Airbnb',
    'footer.bookBooking': 'Book on Booking.com',
    
    // Services
    'services.title': 'Our Services & Amenities',
    'services.subtitle': 'Experience comfort and convenience with our comprehensive range of services designed to make your stay memorable and relaxing. Everything you need for a comfortable stay is provided.',
    
    // Days
    'days.sun': 'Sun',
    'days.mon': 'Mon',
    'days.tue': 'Tue',
    'days.wed': 'Wed',
    'days.thu': 'Thu',
    'days.fri': 'Fri',
    'days.sat': 'Sat',
  },
  it: {
    // Header
    'nav.home': 'Home',
    'nav.about': 'Chi Siamo',
    'nav.gallery': 'Galleria',
    'nav.services': 'Servizi',
    'nav.contact': 'Contatti',
    
    // Hero
    'hero.welcome': 'Benvenuti a',
    'hero.title': 'Green Woody Home',
    'hero.subtitle': 'Il vostro rifugio perfetto nella natura, che unisce comfort moderno e fascino rustico',
    'hero.viewGallery': 'Visualizza Galleria',
    'hero.pointsOfInterest': 'Punti di Interesse',
    'hero.contactUs': 'Contattaci',
    
    // About
    'about.title': 'Il Nostro Spazio',
    'about.description': 'Green Woody Home è un rifugio eco-sostenibile immerso nella serena campagna di Roma, che bilancia perfettamente natura e convenienza. <br /> Completamente alimentata da energia solare, la nostra villa offre una fuga sostenibile a soli 30 minuti dal centro storico della città e 15 minuti dal mare. Vivi il fascino rustico, il comfort moderno e una connessione unica con la natura—tutto in un\'unica location esclusiva.',
    'about.bedrooms': 'Camere da Letto',
    'about.bathrooms': 'Bagni',
    'about.livingSpace': 'm² Spazio Abitabile',
    'about.garden': 'm² Giardino',
    'about.poi.title': 'Punti di Interesse',
    'about.poi.description': 'Esplora la ricca storia e cultura di Roma e dei suoi dintorni. Ecco alcuni luoghi da visitare assolutamente a breve distanza da Green Woody Home: clicca per vedere dove si trovano!',
    'about.poi.colosseum': 'Colosseo',
    'about.poi.colosseum.desc': 'Anfiteatro romano antico e simbolo iconico della Roma Imperiale.',
    'about.poi.vatican': 'Città del Vaticano',
    'about.poi.vatican.desc': 'Casa della Basilica di San Pietro e dei Musei Vaticani con la Cappella Sistina.',
    'about.poi.trevi': 'Fontana di Trevi',
    'about.poi.trevi.desc': 'Capolavoro barocco e una delle fontane più famose al mondo.',
    'about.poi.torvaianica': 'Torvaianica - Borgo Marinaro',
    'about.poi.torvaianica.desc': 'Destinazione balneare più vicina con spiagge sabbiose e acque cristalline.',
    'about.poi.airport': 'Aeroporto di Fiumicino',
    'about.poi.airport.desc': 'Principale aeroporto internazionale di Roma.',
    'about.poi.outlet': 'Castel Romano Designer Outlet',
    'about.poi.outlet.desc': 'Outlet di abbigliamento di lusso di McArthurGlen.',
    
    // Gallery
    'gallery.title': 'Galleria',
    'gallery.subtitle': 'Fai un tour virtuale del nostro bellissimo rifugio eco-sostenibile',
    'gallery.viewFull': 'Visualizza Galleria Completa',
    
    // Contact
    'contact.title': 'Contattaci',
    'contact.subtitle': 'Mettiti in contatto per prenotare il tuo soggiorno o per qualsiasi domanda',
    'contact.availability': 'Verifica Disponibilità',
    'contact.name': 'Nome',
    'contact.email': 'Email',
    'contact.message': 'Messaggio',
    'contact.send': 'Invia Messaggio',
    'contact.info.title': 'Informazioni di Contatto',
    'contact.info.address': 'Via Clarice Tartufari, Castel di Decima, Roma',
    'contact.info.phone': '(+06) 5847332',
    'contact.info.email': 'info@greenwoody.home',
    'contact.availability.check': 'Controlla la nostra disponibilità selezionando le tue date preferite:',
    'contact.booking.note': 'Pronto per prenotare? Prenota direttamente tramite i nostri partner di fiducia:',
    'contact.booking.airbnb': 'Prenota su Airbnb',
    'contact.booking.booking': 'Prenota su Booking.com',
    'contact.success': 'Messaggio inviato con successo!',
    'contact.error': 'Errore nell\'invio del messaggio. Riprova.',
    
    // Footer
    'footer.quickLinks': 'Link Rapidi',
    'footer.contact': 'Contatto',
    'footer.identification': 'Codici di Identificazione',
    'footer.cookieSettings': 'Impostazioni Cookie',
    'footer.copyright': 'Tutti i diritti riservati.',
    'footer.bookAirbnb': 'Prenota su Airbnb',
    'footer.bookBooking': 'Prenota su Booking.com',
    
    // Services
    'services.title': 'I Nostri Servizi e Comfort',
    'services.subtitle': 'Vivi comfort e convenienza con la nostra gamma completa di servizi pensati per rendere il tuo soggiorno memorabile e rilassante. Tutto ciò di cui hai bisogno per un soggiorno confortevole è fornito.',
    
    // Days
    'days.sun': 'Dom',
    'days.mon': 'Lun',
    'days.tue': 'Mar',
    'days.wed': 'Mer',
    'days.thu': 'Gio',
    'days.fri': 'Ven',
    'days.sat': 'Sab',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};