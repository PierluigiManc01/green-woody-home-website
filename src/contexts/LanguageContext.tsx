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
    'nav.menu': 'Open Menu',
    
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
    'about.car': 'drive',
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
    'gallery.subtitle': 'Take a virtual tour through our beautiful space and imagine your stay in our nature retreat.',
    'gallery.bedrooms': 'Bedrooms',
    'gallery.bathrooms': 'Bathrooms',
    'gallery.livingRoom': 'Living Room',
    'gallery.exteriors': 'Garden and Outdoor Space',
    'gallery.kitchen': 'Kitchen',
    'gallery.other': 'Extras',
    'gallery.viewFull': 'View Full Gallery',
    
    // Contact
    'contact.booking.title': "Do you like the Green Woody Home and you want to book it? Check our real-time availability through our calendar and get in touch with us for booking inquiries. This contact form is primarily used for booking Green Woody Home when available. We'll respond promptly with rates and booking details.",
    'contact.title': 'Get in Touch',
    'contact.title2': 'Contact Us',
    'contact.subtitle': 'Have questions or want to book directly? Contact us using any of these methods',
    'contact.availability': 'Availability & Pricing',
    'contact.name': 'Name',
    'contact.surname': 'Surname',
    'contact.email': 'Email',
    'contact.phone': 'Phone (optional)',
    'contact.phone2': 'Phone',
    'contact.placeholder': 'Hi! I would like to book the house for...',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.info.title': 'Contact Information',
    'contact.info.address': 'Via Clarice Tartufari, Castel di Decima, Rome',
    'contact.info.phone': '(+06) 5847332',
    'contact.info.email': 'info@greenwoody.home',
    'contact.availability.check': 'Check our real-time availability through our calendar. Pricing starts from **€120 per night**, but rates may vary depending on the season and length of stay.',
    'contact.booking.note': 'Have questions or want to book directly? Contact us using any of these methods',
    'contact.booking.airbnb': 'Book on Airbnb',
    'contact.booking.booking': 'Book on Booking.com',
    'contact.success': 'Message sent successfully!',
    'contact.error': 'Failed to send message. Please try again.',
    'contact.contactUs': 'Contact Us',
    'contact.contactUs2.1': 'Click the buttons',
    'contact.contactUs2.2': ' to contact us!',
    'contact.loc': 'Location',
    'contact.ctaLoc': 'Find us on Google Maps',

    // Calendar
    'calendar.loading': 'Loading calendar...',
    'calendar.available': 'Available',
    'calendar.unavailable': 'Unavailable',

    // Pricing Info
    'pricingInfo.title': 'Pricing Information',
    'pricingInfo.startingFrom': 'Starting from',
    'pricingInfo.perNight': 'per night',
    'pricingInfo.note1': 'Prices vary by season and availability',
    'pricingInfo.note2': 'Weekly discounts available',
    'pricingInfo.note3': 'Final price includes all fees and taxes',
    'pricingInfo.note4': 'Contact us for extended stays',
    'pricingInfo.disclaimer': 'For the most up-to-date pricing and to make a reservation, please use the contact form below or visit our Airbnb listing.',

    // Buttons
    'button.ctaAirbnb': 'Visit our Airbnb listing',
    'button.ctaBooking': 'Check availability on Booking.com',
    'button.ctaInstagram': 'Follow us on Instagram',

    // Footer
    'footer.quickLinks': 'Quick Links',
    'footer.contact': 'Contacts',
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

    // Cookie Consent
    'cookieConsent.title': 'Cookie Consent',
    'cookieConsent.description': 'We use cookies to enhance your experience on our website. By clicking "Accept All", you consent to the use of ALL cookies. Alternatively, you can choose to only accept necessary cookies by clicking "Accept Necessary Cookies".',
    'cookieConsent.necessary': 'Necessary cookies help make a website usable by enabling basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies.',
    'cookieConsent.analytics': 'We also use analytics cookies that help us understand how visitors interact with our website, and marketing cookies that are used to track visitors across websites.',
    'cookieConsent.acceptAll': 'Accept All',
    'cookieConsent.acceptNecessary': 'Accept Necessary Cookies',
  },
  it: {
    // Header
    'nav.home': 'Home',
    'nav.about': 'Chi Siamo',
    'nav.gallery': 'Galleria',
    'nav.services': 'Servizi',
    'nav.contact': 'Contatti',
    'nav.menu': 'Apri il Menu',
    
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
    'about.car': 'in auto',
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
    'gallery.bedrooms': 'Camere da Letto',
    'gallery.bathrooms': 'Bagni',
    'gallery.livingRoom': 'Soggiorno',
    'gallery.exteriors': 'Giardino e Spazio Esterno',
    'gallery.kitchen': 'Cucina',
    'gallery.other': 'Extra',
    'gallery.viewFull': 'Visualizza Galleria Completa',
    
    // Contact
    'contact.booking.title': "Ti piace Green Woody Home e vuoi prenotare? Controlla la nostra disponibilità in tempo reale attraverso il nostro calendario e mettiti in contatto con noi per richieste di prenotazione. Questo modulo di contatto viene utilizzato principalmente per prenotare Green Woody Home quando disponibile. Risponderemo prontamente con tariffe e dettagli sulla prenotazione.",
    'contact.title': 'Mettiti in Contatto',
    'contact.title2': 'Contattaci',
    'contact.subtitle': 'Hai domande o vuoi prenotare direttamente? Contattaci utilizzando uno di questi metodi',
    'contact.availability': 'Verifica Disponibilità',
    'contact.name': 'Nome',
    'contact.surname': 'Cognome',
    'contact.email': 'Email',
    'contact.phone': 'Telefono (opzionale)',
    'contact.phone2': 'Telefono',
    'contact.placeholder': 'Ciao! Vorrei prenotare la casa dal...',
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
    'contact.contactUs': 'Contattaci',
    'contact.contactUs2.1': 'Clicca i pulsanti',
    'contact.contactUs2.2': ' qui sotto per contattarci!',
    'contact.loc': 'Posizione',
    'contact.ctaLoc': 'Trovaci su Google Maps',

    // Calendar
    'calendar.loading': 'Caricando il calendario...',
    'calendar.available': 'Disponibile',
    'calendar.unavailable': 'Non Disponibile',

    // Pricing Info
    'pricingInfo.title': 'Informazioni sui Prezzi',
    'pricingInfo.startingFrom': 'A partire da',
    'pricingInfo.perNight': 'a notte',
    'pricingInfo.note1': 'I prezzi variano in base alla stagione e alla disponibilità',
    'pricingInfo.note2': 'Sconti settimanali disponibili',
    'pricingInfo.note3': 'Il prezzo finale include tutte le tasse e le spese di pulizia',
    'pricingInfo.note4': 'Contattaci per soggiorni prolungati (oltre 30 notti)',
    'pricingInfo.disclaimer': 'Per le informazioni sui prezzi più aggiornate e per effettuare una prenotazione, ti preghiamo di utilizzare il modulo di contatto qui sotto o di visitare il nostro annuncio su Airbnb.',

    // Footer
    'footer.quickLinks': 'Link Rapidi',
    'footer.contact': 'Contatti',
    'footer.identification': 'Codici di Identificazione',
    'footer.cookieSettings': 'Impostazioni Cookie',
    'footer.copyright': 'Tutti i diritti riservati.',
    'footer.bookAirbnb': 'Prenota su Airbnb',
    'footer.bookBooking': 'Prenota su Booking.com',
    
    // Services
    'services.title': 'I Nostri Servizi e Comfort',
    'services.subtitle': 'Vivi comfort e convenienza con la nostra gamma completa di servizi pensati per rendere il tuo soggiorno memorabile e rilassante. Tutto ciò di cui hai bisogno per un soggiorno confortevole è fornito.',
    
    // Buttons
    'button.ctaAirbnb': 'Cerca la nostra inserzione su Airbnb',
    'button.ctaBooking': 'Controlla la disponibilità su Booking.com',
    'button.ctaInstagram': 'Seguici su Instagram',

    // Days
    'days.sun': 'Dom',
    'days.mon': 'Lun',
    'days.tue': 'Mar',
    'days.wed': 'Mer',
    'days.thu': 'Gio',
    'days.fri': 'Ven',
    'days.sat': 'Sab',

    // Cookie Consent
    'cookieConsent.title': 'Consenso ai Cookie',
    'cookieConsent.description': 'Utilizziamo i cookie per migliorare la tua esperienza sul nostro sito web. Cliccando "Accetta Tutti", acconsenti all\'uso di TUTTI i cookie. In alternativa, puoi scegliere di accettare solo i cookie necessari cliccando su "Accetta Solo Cookie Necessari".',
    'cookieConsent.necessary': 'I cookie necessari aiutano a rendere un sito web utilizzabile abilitando funzioni di base come la navigazione della pagina e l\'accesso ad aree sicure del sito web. Il sito web non può funzionare correttamente senza questi cookie.',
    'cookieConsent.analytics': 'Utilizziamo anche i cookie analitici che ci aiutano a capire come i visitatori interagiscono con il nostro sito web, e i cookie di marketing che vengono utilizzati per tracciare i visitatori attraverso i siti web.',
    'cookieConsent.acceptAll': 'Accetta Tutti',
    'cookieConsent.acceptNecessary': 'Accetta Solo Cookie Necessari',
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