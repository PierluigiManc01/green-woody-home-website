import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Wifi, Coffee, Car, Utensils, Bed, Snowflake, Tv, Bath, Waves, Flame, Trees, Zap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import tennisCourtImg from '@/assets/tennis.jpeg';
import chefImg from '@/assets/pasta.jpg';
import tourGuideImg from '@/assets/tour_guide.jpg';
import gladiatorImg from '@/assets/gladiator.png';

const Services: React.FC = () => {
  const { t } = useLanguage();
  const [flippedCards, setFlippedCards] = useState<{ [key: number]: boolean }>({});

  const toggleCard = (index: number) => {
    setFlippedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const partnerships = [
    {
      title: "Barazzutti Tennis Academy",
      image: tennisCourtImg,
      content: (
        <div>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            {t('services.barazzutti.description')}
          </p>
          <div className="flex items-start text-base text-bnb-green2 mb-3">
            <CheckCircle className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
            <span>{t('services.barazzutti.note1')}</span>
          </div>
          <div className="flex items-start text-base text-bnb-green2 mb-3">
            <CheckCircle className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
            <span>{t('services.barazzutti.note2')}</span>
          </div>
          <div className="flex items-start text-base text-bnb-green2">
            <CheckCircle className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
            <span>
              {t('services.barazzutti.note3')}
              <a href="https://www.scuolatenniscorradobarazzutti.it/" 
                 className="text-bnb-green2 underline ml-1 hover:text-bnb-green2/80 transition-colors"
                 target="_blank" rel="noopener noreferrer">{t('services.barazzutti.linkText')}</a>.
            </span>
          </div>
        </div>
      )
    },
    {
      title: t('services.guide.title'),
      image: tourGuideImg,
      content: (
        <div>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            {t('services.guide.description')}
          </p>
          <div className="flex items-start text-base text-bnb-green2 mb-3">
            <CheckCircle className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
            <span>{t('services.guide.note1')}</span>
          </div>
          <div className="flex items-start text-base text-bnb-green2 mb-3">
            <CheckCircle className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
            <span>{t('services.guide.note2')}</span>
          </div>
          <div className="flex items-start text-base text-bnb-green2">
            <CheckCircle className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
            <span>{t('services.guide.note3')}</span>
          </div>
        </div>
      )
    },
    {
      title: t('services.chef.title'),
      image: chefImg,
      content: (
        <div>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
          {t('services.chef.description')}
          </p>
          <div className="flex items-start text-base text-bnb-green2 mb-3">
            <CheckCircle className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
            <span>{t('services.chef.note1')}</span>
          </div>
          <div className="flex items-start text-base text-bnb-green2 mb-3">
            <CheckCircle className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
            <span>{t('services.chef.note2')}</span>
          </div>
          <div className="flex items-start text-base text-bnb-green2">
            <CheckCircle className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
            <span>{t('services.chef.note3')}</span>
          </div>
        </div>
      )
    },
    {
      title: "Castrum Legionis",
      image: gladiatorImg,
      content: (
        <div>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            {t('services.castrum.description')}
          </p>
          <div className="flex items-start text-base text-bnb-green2 mb-3">
            <CheckCircle className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
            <span>{t('services.castrum.note1')}</span>
          </div>
          <div className="flex items-start text-base text-bnb-green2 mb-3">
            <CheckCircle className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
            <span>{t('services.castrum.note2')}</span>
          </div>
          <div className="flex items-start text-base text-bnb-green2">
            <CheckCircle className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
            <span>{t('services.castrum.note3')}</span>
          </div>
        </div>
      )
    }
  ];
  const amenities = [
    { icon: <Wifi className="h-5 w-5" />, title: "Free WiFi" },
    { icon: <Snowflake className="h-5 w-5" />, title: "Air Conditioning" },
    { icon: <Coffee className="h-5 w-5" />, title: "Coffee & Tea" },
    { icon: <Utensils className="h-5 w-5" />, title: "Fully Equipped Kitchen" },
    { icon: <Car className="h-5 w-5" />, title: "Free Parking" },
    { icon: <Zap className="h-5 w-5" />, title: "EV Charger" },
    { icon: <Tv className="h-5 w-5" />, title: "Smart TV" },
    { icon: <Bed className="h-5 w-5" />, title: "Premium Bedding" },
    { icon: <Bath className="h-5 w-5" />, title: "Bathroom Essentials" },
    { icon: <Waves className="h-5 w-5" />, title: "Washing Machine" },
    { icon: <Flame className="h-5 w-5" />, title: "Barbecue" },
    { icon: <Trees className="h-5 w-5" />, title: "Garden" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-bnb-dark_gray/10 via-bnb-dark_gray/5 to-bnb-dark_gray/30"></div>
          <div className="relative section-container">
            <div className="container mx-auto px-4 text-center mb-12">
              <h1 className="text-6xl md:text-5xl sm:text-4xl font-bold bg-gradient-to-r from-bnb-green2 to-bnb-green2/80 bg-clip-text text-transparent mb-6">
                {t('services.title')}
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
                {t('services.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {amenities.map((amenity, index) => (
                <div 
                  key={index} 
                  className="group relative flex flex-col items-center gap-3 p-6 bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl hover:border-bnb-green2/30 hover:shadow-lg hover:shadow-bnb-green2/10 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-bnb-green2/10 text-bnb-green2 group-hover:bg-bnb-green2 group-hover:text-white transition-all duration-300">
                    {amenity.icon}
                  </div>
                  <span className="text-sm font-medium text-center text-foreground/80 group-hover:text-foreground transition-colors">{amenity.title}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnerships Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-bnb-green2/10 to-background"></div>
          <div className="relative section-container">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-4xl sm:text-3xl font-bold bg-gradient-to-r from-bnb-green2 to-bnb-green2/70 bg-clip-text text-transparent mb-6">
                {t('services.partnerships.title')}
              </h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed whitespace-pre-line">
                {t('services.partnerships.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {partnerships.map((partnership, index) => (
                <div key={index} className="relative h-96 [perspective:1000px] group">
                  <div 
                    className={`relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] ${
                      flippedCards[index] ? '[transform:rotateY(180deg)]' : ''
                    }`}
                  >
                    {/* Front of card */}
                    <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-bnb-green2 to-bnb-green2/90 z-10">
                      <div className="w-full h-full flex flex-col items-center justify-center p-8 relative cursor-pointer hover:shadow-2xl transition-all duration-300">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        <div className="relative z-10 flex flex-col items-center">
                          <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mb-4 sm:mb-6 flex items-center justify-center bg-white/10 rounded-full backdrop-blur-sm border border-white/20">
                            <img 
                              src={partnership.image} 
                              alt={partnership.title}
                              className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 object-contain filter drop-shadow-lg"
                            />
                          </div>
                          <h3 className="text-xl sm:text-2xl md:text-xl font-bold text-bnb-dark_gray text-center mb-4 sm:mb-8 leading-tight">
                            {partnership.title}
                          </h3>
                        </div>
                        <div 
                          onClick={() => toggleCard(index)}
                          className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 px-3 py-2 sm:px-4 sm:py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 text-white hover:bg-white/30 text-sm sm:text-base cursor-pointer transition-all duration-300 font-medium"
                        >
                          More Info
                        </div>
                      </div>
                    </div>
                    
                    {/* Back of card */}
                    <div 
                      className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-2xl overflow-hidden shadow-xl bg-white dark:bg-card border border-border/20 z-20"
                    >
                      <Card className="h-full border-0 bg-transparent shadow-none flex flex-col">
                        <CardHeader className="pb-3 border-b border-border/20 flex-shrink-0">
                          <div className="flex justify-between items-start">
                            <CardTitle className="text-lg sm:text-xl md:text-2xl text-bnb-green2 font-bold pr-2">{partnership.title}</CardTitle>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => toggleCard(index)}
                              className="text-muted-foreground hover:text-foreground p-1 h-8 w-8 rounded-full flex-shrink-0"
                            >
                              ×
                            </Button>
                          </div>
                        </CardHeader>
                        <CardContent className="flex-1 overflow-y-auto p-4 sm:p-6 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 hover:scrollbar-thumb-gray-500 dark:scrollbar-thumb-gray-600 dark:scrollbar-track-gray-800 dark:hover:scrollbar-thumb-gray-500">
                          <div className="space-y-4 text-sm sm:text-base">
                            {partnership.content}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-20">
              <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-bnb-green2/5 to-bnb-green2/10 rounded-2xl border border-border/20">
                <p className="text-xl md:text-lg text-muted-foreground leading-relaxed">
                  {t('services.conclusion')}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;