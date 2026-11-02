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
    'nav.contact': 'Reservations',
    'nav.menu': 'Open Menu',
    
    // Hero
    'hero.welcome': 'Welcome to',
    'hero.title': 'Green Woody Home',
    'hero.subtitle': 'Your perfect retreat in nature, combining modern comfort with rustic charm',
    'hero.viewGallery': 'View Our Gallery',
    'hero.pointsOfInterest': 'Points of Interest',
    'hero.contactUs': 'Reserve Direct',
    'booking.cta': 'Reserve Direct',
    'booking.valueProp': 'Best Rate Guaranteed • Plan your stay directly with us',
    
    // About
    'about.title': 'About Our Space',
    'about.description': 'Green Woody Home is an eco-friendly retreat nestled in the serene countryside of Rome, perfectly balancing nature and convenience. \nFully powered by solar energy, our villa offers a sustainable escape just 30 minutes from the historic city center and 15 minutes from the seaside. Experience rustic charm, modern comfort, and a unique connection to nature—all in one exclusive location.',
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
    'gallery.conclusion': 'Explore the full gallery to see more!',
    'gallery.bedrooms': 'Bedrooms',
    'gallery.bathrooms': 'Bathrooms',
    'gallery.livingRoom': 'Living Room',
    'gallery.exteriors': 'Garden and Outdoor Space',
    'gallery.kitchen': 'Kitchen',
    'gallery.other': 'Extras',
    'gallery.viewFull': 'View Full Gallery',
    
    // Contact
    'contact.booking.title': "Reservations",
    'contact.booking.subtitle': "Request your private stay at Green Woody Home. Share your preferred dates and guest details, and we will reply with a direct booking proposal.",
    'contact.title': 'Request Your Stay',
    'contact.title2': 'Contact Us',
    'contact.subtitle': 'A direct reservation gives you personal support, transparent pricing, and the most flexible way to plan your stay.',
    'contact.availability': 'Availability',
    'contact.availability2': 'Availability',
    'contact.name': 'Name',
    'contact.surname': 'Surname',
    'contact.email': 'Email',
    'contact.phone': 'Phone (optional)',
    'contact.phone2': 'Phone',
    'contact.placeholder': 'Tell us about arrival time, special requests, or services you would like to add.',
    'contact.message': 'Message',
    'contact.send': 'Request Reservation',
    'contact.checkin': 'Check-in',
    'contact.checkout': 'Check-out',
    'contact.guests': 'Guests',
    'contact.guests.placeholder': '2 adults, 1 child',
    'contact.adults': 'Adults',
    'contact.children': 'Children',
    'contact.maxGuestsWarning': 'Maximum 8 guests total.',
    'contact.concierge': 'Concierge assistance',
    'contact.directBenefits': 'Best Rate Guaranteed • Flexible Cancellation • Local Welcome Amenity',
    'contact.info.title': 'Contact Information',
    'contact.info.address': 'Via Clarice Tartufari, Castel di Decima, Rome',
    'contact.info.phone': '(+39) 3358158411',
    'contact.info.email': 'greenwoodyhome@gmail.com',
    'contact.availability.check': 'Review open dates, then send a private reservation request for a tailored direct rate.',
    'contact.availability.check2': 'Select your preferred stay window:',
    'contact.booking.airbnb': 'Book on Airbnb',
    'contact.booking.booking': 'Book on Booking.com',
    'contact.success': 'Message sent successfully!',
    'contact.error': 'Failed to send message. Please try again.',
    'contact.contactUs': 'Contacts',
    'contact.form.title': 'Reservation request',
    'contact.contactUs2.1': 'Need help before booking?',
    'contact.contactUs2.2': ' Use these direct channels for discreet assistance.',
    'contact.loc': 'Location',
    'contact.ctaLoc': 'Find us on Google Maps',
    'contact.finduUs': 'Other platforms',

    // Calendar
    'calendar.loading': 'Loading calendar...',
    'calendar.available': 'Available',
    'calendar.unavailable': 'Unavailable',
    'calendar.update': 'Last updated',

    // Pricing Info
    'pricingInfo.title': 'Direct booking advantages',
    'pricingInfo.startingFrom': 'Starting from',
    'pricingInfo.perNight': 'per night',
    'pricingInfo.note1': 'Prices vary by season and availability',
    'pricingInfo.note2': 'Weekly discounts available',
    'pricingInfo.note3': 'Final price includes all fees and taxes',
    'pricingInfo.note4': 'Contact us for extended stays',
    'pricingInfo.disclaimer': 'For the most accurate direct rate, send your dates through the reservation form.',

    // Buttons
    'button.ctaAirbnb': 'View Airbnb as secondary option',
    'button.ctaBooking': 'View Booking.com as secondary option',
    'button.ctaInstagram': 'Follow us on Instagram',

    // Footer
    'footer.quickLinks': 'Quick Links',
    'footer.reservations': 'Reservations',
    'footer.privateReservation': 'Private Reservation',
    'footer.contact': 'Contacts',
    'footer.identification': 'Identification Codes',
    'footer.cookieSettings': 'Cookie Settings',
    'footer.copyright': 'All rights reserved.',
    'footer.bookAirbnb': 'Book on Airbnb',
    'footer.bookBooking': 'Book on Booking.com',
    
    // Services
    'services.title': 'Our Services & Amenities',
    'services.subtitle': 'Experience comfort and convenience with our comprehensive range of services designed to make your stay memorable and relaxing. Everything you need for a comfortable stay is provided.',
    'services.partnerships.title': 'Our Partnerships',
    'services.partnerships.subtitle': 'We have partnered with local businesses to offer you exclusive services and experiences during your stay.\nFrom tennis lessons to private chefs, explore our partnerships below.',
    'services.freewifi': 'Free Wi-Fi',
    'services.parking': 'Free Parking',
    'services.kitchen': 'Fully Equipped Kitchen',
    'services.breakfast': 'Coffee & Tea',
    'services.charger': 'EV Charger',
    'services.tv': 'Smart TV',
    'services.bed': 'Bed Linen',
    'services.garden': '1,500 m² Garden',
    'services.bathroom': 'Bath Amenities',
    'services.washingmachine': 'Washing Machine',
    'services.air': 'Air Conditioning',
    //barazzutti
    'services.barazzutti.description': 'We can arrange tennis lessons and court bookings at the renowned Barazzutti Tennis Academy, located in the same private area. Perfect for both beginners and experienced players, you can enjoy personalized coaching from a Davis Cup champion.',
    'services.barazzutti.note1': 'Book private Tennis Lessons',
    'services.barazzutti.note2': 'Court bookings available',
    'services.barazzutti.note3': 'Explore more about the academy on their ',
    'services.barazzutti.linkText': 'official website',
    //local guide
    'services.guide.title': 'Local Tour Guide',
    'services.guide.description': 'Discover the beauty of the ancient city of Rome with our trusted local guide, available for personalized tours in different languages. Explore historical sites, hidden gems, and cultural experiences tailored to your interests.',
    'services.guide.note1': 'Rome city tours in multiple languages',
    'services.guide.note2': 'Customized itineraries based on your interests',
    'services.guide.note3': "Contact us to arrange a tour and learn more about our guide's expertise.",
    //private chef
    'services.chef.title': 'Traditional Cuisine',
    'services.chef.description': 'Experience authentic local cuisine through the hands of Leonardo, a talented cooker. Enjoy personalized meal preparation in the comfort of your accommodation and to learn traditional recipes and culinary techniques.',
    'services.chef.note1': 'Traditional cuisine: you will taste authentic roman pasta dishes , local wines, and seasonal ingredients',
    'services.chef.note2': 'Contact us to book a private dinner experience.',
    'services.chef.note3': 'Prices start from 30€ per person for 3 pasta tastes (Carbonara, Gricia, Amatriciana) and a bottle of wine. Every 3 people, one person is free.',
    // castrum
    'services.castrum.description': 'Step back into the history of the Gladiator of Rome and immerse yourself in the history of ancient Rome with a unique experience at Castrum Legionis. Just downhill from our property (200m away), you can experience a leap back in time becoming a gladiator for a day in a historical archeological setting where ancient civilization once lived. Wear authentic clothing and belts as you train on a field that could be the same as centuries ago.',
    'services.castrum.note1': 'Practice sword fighting, archery, and marching like real soldiers',
    'services.castrum.note2': 'Breathe in the history of the ancient Roman Empire for a day in a unique archeological setting',
    'services.castrum.note3': 'Contact us for more information and to book a daily experience.',

    'services.reserveService': 'Add to reservation',
    'services.conclusion':'Interested in any of these services? Add them to your reservation request and we will coordinate the details before arrival.',

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
    'nav.contact': 'Prenotazioni',
    'nav.menu': 'Apri il Menu',
    
    // Hero
    'hero.welcome': 'Benvenuti a',
    'hero.title': 'Green Woody Home',
    'hero.subtitle': 'Il vostro rifugio perfetto nella natura, che unisce comfort moderno e fascino rustico',
    'hero.viewGallery': 'Visualizza Galleria',
    'hero.pointsOfInterest': 'Punti di Interesse',
    'hero.contactUs': 'Prenota Subito',
    'booking.cta': 'Prenota Subito',
    'booking.valueProp': 'Miglior Tariffa Garantita • Organizza il soggiorno direttamente con noi',
    
    // About
    'about.title': 'Il Nostro Spazio',
    'about.description': 'Green Woody Home è un rifugio eco-sostenibile immerso nella serena campagna di Roma, che bilancia perfettamente natura e convenienza. \n Completamente alimentata da energia solare, la nostra villa offre una fuga sostenibile a soli 30 minuti dal centro storico della città e 15 minuti dal mare. Vivi il fascino rustico, il comfort moderno e una connessione unica con la natura—tutto in un\'unica location esclusiva.',
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
    'gallery.conclusion': 'Esplora tutta la nostra galleria per vedere di più!',
    'gallery.bedrooms': 'Camere da Letto',
    'gallery.bathrooms': 'Bagni',
    'gallery.livingRoom': 'Soggiorno',
    'gallery.exteriors': 'Giardino e Spazio Esterno',
    'gallery.kitchen': 'Cucina',
    'gallery.other': 'Extra',
    'gallery.viewFull': 'Visualizza Galleria Completa',
    
    // Contact
    'contact.booking.title': "Prenotazioni",
    'contact.booking.subtitle': "Richiedi il tuo soggiorno privato a Green Woody Home. Indica le date preferite e i dettagli degli ospiti: ti risponderemo con una proposta di prenotazione diretta.",
    'contact.title': 'Richiedi il tuo soggiorno',
    'contact.subtitle': 'La prenotazione diretta offre assistenza personale, prezzi trasparenti e il modo più flessibile per organizzare il soggiorno.',
    'contact.availability': 'Disponibilità',
    'contact.availability2': 'Verifica Disponibilità',
    // Form
    'contact.form.title': 'Compila il modulo per prenotare',
    'contact.name': 'Nome',
    'contact.surname': 'Cognome',
    'contact.email': 'Email',
    'contact.phone': 'Telefono (opzionale)',
    'contact.phone2': 'Telefono',
    'contact.placeholder': 'Raccontaci orario di arrivo, richieste speciali o servizi che vorresti aggiungere.',
    'contact.message': 'Messaggio',
    'contact.send': 'Richiedi Prenotazione',
    'contact.checkin': 'Check-in',
    'contact.checkout': 'Check-out',
    'contact.guests': 'Ospiti',
    'contact.guests.placeholder': '2 adulti, 1 bambino',
    'contact.adults': 'Adulti',
    'contact.children': 'Bambini',
    'contact.maxGuestsWarning': 'Massimo 8 ospiti in totale.',
    'contact.concierge': 'Assistenza concierge',
    'contact.directBenefits': 'Miglior Tariffa Garantita • Cancellazione Flessibile • Omaggio Locale',

    'contact.info.title': 'Informazioni di Contatto',
    'contact.info.address': 'Via Clarice Tartufari, Castel di Decima, Roma',
    'contact.info.phone': '(+39) 3358158411',
    'contact.info.email': 'greenwoodyhome@gmail.com',
    'contact.availability.check': 'Consulta le date disponibili, poi invia una richiesta privata per ricevere la tariffa diretta su misura.',
    'contact.availability.check2': 'Seleziona il periodo preferito:',
    'contact.booking.airbnb': 'Prenota su Airbnb',
    'contact.booking.booking': 'Prenota su Booking.com',
    'contact.success': 'Messaggio inviato con successo!',
    'contact.error': 'Errore nell\'invio del messaggio. Riprova.',
    'contact.contactUs': 'Contatti',
    'contact.contactUs2.1': 'Hai bisogno di assistenza prima di prenotare?',
    'contact.contactUs2.2': ' Usa questi canali diretti per un supporto discreto.',
    'contact.loc': 'Posizione',
    'contact.ctaLoc': 'Trovaci su Google Maps',
    'contact.finduUs': 'Altre piattaforme',

    // Calendar
    'calendar.loading': 'Caricando il calendario...',
    'calendar.available': 'Disponibile',
    'calendar.unavailable': 'Non Disponibile',
    'calendar.update': 'Aggiornato al',

    // Pricing Info
    'pricingInfo.title': 'Vantaggi della prenotazione diretta',
    'pricingInfo.startingFrom': 'A partire da',
    'pricingInfo.perNight': 'a notte',
    'pricingInfo.note1': 'I prezzi variano in base alla stagione e alla disponibilità',
    'pricingInfo.note2': 'Sconti settimanali disponibili',
    'pricingInfo.note3': 'Il prezzo finale include tutte le tasse e le spese di pulizia',
    'pricingInfo.note4': 'Contattaci per soggiorni prolungati (oltre 30 notti)',
    'pricingInfo.disclaimer': 'Per ricevere la tariffa diretta più accurata, invia le date tramite il modulo di prenotazione.',

    // Footer
    'footer.quickLinks': 'Link Rapidi',
    'footer.reservations': 'Prenotazioni',
    'footer.privateReservation': 'Prenotazione Privata',
    'footer.contact': 'Contatti',
    'footer.identification': 'Codici di Identificazione',
    'footer.cookieSettings': 'Impostazioni Cookie',
    'footer.copyright': 'Tutti i diritti riservati.',
    'footer.bookAirbnb': 'Prenota su Airbnb',
    'footer.bookBooking': 'Prenota su Booking.com',
    
    // Services
    'services.title': 'I Nostri Servizi e Comfort',
    'services.subtitle': 'Vivi comfort e convenienza con la nostra gamma completa di servizi pensati per rendere il tuo soggiorno memorabile e rilassante. Tutto ciò di cui hai bisogno per un soggiorno confortevole è fornito.',
    'services.partnerships.title': 'Le nostre Partnership',
    'services.partnerships.subtitle': 'Abbiamo stretto partnership con aziende locali per offrirti servizi ed esperienze esclusive durante il tuo soggiorno.\nDalle lezioni di tennis agli chef privati, esplora le nostre partnership qui sotto.',
    'services.freewifi': 'Wi-Fi Super Veloce',
    'services.parking': 'Parcheggio Gratuito',
    'services.kitchen': 'Cucina Completa',
    'services.breakfast': 'Caffè & Tè',
    'services.charger': 'Caricatore Veicoli Elettrici',
    'services.tv': 'Smart TV',
    'services.bed': 'Biancheria da Letto',
    'services.garden': 'Giardino 1,500 m²',
    'services.bathroom': 'Essenziali per il Bagno',
    'services.washingmachine': 'Lavatrice',
    'services.air': 'Aria Condizionata',
    //barazzutti
    'services.barazzutti.description': 'Possiamo organizzare lezioni di tennis e prenotazioni di campi presso la rinomata Barazzutti Tennis Academy, situata nel nostro consorzio privato. Perfetto per principianti ed esperti, potrai godere di un coaching personalizzato da un campione di Coppa Davis.',
    'services.barazzutti.note1': 'Prenota lezioni di tennis private',
    'services.barazzutti.note2': 'Prenotazioni di campi disponibili',
    'services.barazzutti.note3': 'Scopri di più sull\'accademia sul loro ',
    'services.barazzutti.linkText': 'sito ufficiale',
    //local guide
    'services.guide.title': 'Guida Turistica Locale',
    'services.guide.description': 'Scopri la bellezza dell\'antica città di Roma con la nostra guida turistica di fiducia, disponibile per tour personalizzati in diverse lingue. Esplora siti storici, gemme nascoste ed esperienze culturali su misura per i tuoi interessi.',
    'services.guide.note1': 'Tour della città di Roma in più lingue',
    'services.guide.note2': 'Itinerari personalizzati in base ai tuoi interessi',
    'services.guide.note3': "Contattaci per organizzare un tour e scoprire di più sull'esperienza della nostra guida.",
    //private chef
    'services.chef.title': 'Cucina Tradizionale',
    'services.chef.description': 'Scopri la cucina locale autentica attraverso le mani di Leonardo, un cuoco talentuoso. Goditi la preparazione di pasti personalizzati nel comfort del tuo alloggio e impara ricette tradizionali e tecniche culinarie.',
    'services.chef.note1': 'Cucina tradizionale: assaporerai autentici piatti di pasta romana, vini locali e ingredienti di stagione',
    'services.chef.note2': 'Contattaci per prenotare un\'esperienza di cena privata.',
    'services.chef.note3': 'I prezzi partono da 30€ a persona per 3 assaggi di pasta (Carbonara, Gricia, Amatriciana) e una bottiglia di vino. Ogni 3 persone, una persona è gratuita.',
    // castrum
    'services.castrum.description': 'Fai un passo indietro nella storia del Gladiatore di Roma e immergiti nella storia dell\'antica Roma con un\'esperienza unica al Castrum Legionis. A soli 200 metri dalla nostra struttura, puoi vivere un salto indietro nel tempo diventando un gladiatore per un giorno in un contesto archeologico storico dove un tempo viveva la civiltà antica. Indossa abiti e cinture autentiche mentre ti alleni in un campo che potrebbe essere lo stesso di secoli fa.',
    'services.castrum.note1': 'Pratica la scherma, il tiro con l\'arco e il marciare come veri soldati',
    'services.castrum.note2': 'Respira la storia dell\'antico Impero Romano per un giorno in un contesto archeologico unico',
    'services.castrum.note3': 'Contattaci per ulteriori informazioni e per prenotare una giornata dedicata.',

    'services.reserveService': 'Aggiungi alla prenotazione',
    'services.conclusion':'Interessato a qualcuno di questi servizi? Aggiungilo alla richiesta di prenotazione e coordineremo i dettagli prima del tuo arrivo.',

    // Buttons
    'button.ctaAirbnb': 'Vedi Airbnb come opzione secondaria',
    'button.ctaBooking': 'Vedi Booking.com come opzione secondaria',
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
