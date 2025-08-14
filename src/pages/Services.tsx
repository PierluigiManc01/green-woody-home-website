import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Wifi, Coffee, Car, Utensils, Bed, Snowflake, Tv, Bath, Waves, Flame, Trees, Zap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import tennisCourtImg from '@/assets/tennis_court.jpg';
import chefImg from '@/assets/chef.png';
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
          <p className="text-muted-foreground mb-4">
            {t('services.barazzutti.description')}
          </p>
          <div className="flex items-center text-sm text-bnb-green2 mb-2">
            <CheckCircle className="h-4 w-4 mr-2" />
            {t('services.barazzutti.note1')}
          </div>
          <div className="flex items-center text-sm text-bnb-green2 mb-2">
            <CheckCircle className="h-4 w-4 mr-2" />
            {t('services.barazzutti.note2')}
          </div>
          <div className="flex items-center text-sm text-bnb-green2">
            <CheckCircle className="h-4 w-4 mr-2" />
            {t('services.barazzutti.note3')}
            <a href="https://scuolatenniscorradobarazzutti.it/" 
               className="text-bnb-green2 underline ml-1"
               target="_blank" rel="noopener noreferrer">{t('services.barazzutti.linkText')}</a>.
          </div>
        </div>
      )
    },
    {
      title: "Local Tour Guide",
      image: tourGuideImg,
      content: (
        <div>
          <p className="text-muted-foreground mb-4">
            {t('services.tourGuide.description')}
          </p>
          <div className="flex items-center text-sm text-bnb-green2 mb-2">
            <CheckCircle className="h-4 w-4 mr-2" />
            {t('services.tourGuide.note1')}
          </div>
          <div className="flex items-center text-sm text-bnb-green2 mb-2">
            <CheckCircle className="h-4 w-4 mr-2" />
            {t('services.tourGuide.note2')}
          </div>
          <div className="flex items-center text-sm text-bnb-green2">
            <CheckCircle className="h-4 w-4 mr-2" />
            {t('services.tourGuide.note3')}
          </div>
        </div>
      )
    },
    {
      title: "Private Chef",
      image: chefImg,
      content: (
        <div>
          <p className="text-muted-foreground mb-4">
          {t('services.chef.description')}
          </p>
          <div className="flex items-center text-sm text-bnb-green2 mb-2">
            <CheckCircle className="h-4 w-4 mr-2" />
            {t('services.chef.note1')}
          </div>
          <div className="flex items-center text-sm text-bnb-green2 mb-2">
            <CheckCircle className="h-4 w-4 mr-2" />
            {t('services.chef.note2')}
          </div>
          <div className="flex items-center text-sm text-bnb-green2">
            <CheckCircle className="h-4 w-4 mr-2" />
            {t('services.chef.note3')}
          </div>
        </div>
      )
    },
    {
      title: "Castrum Legionis",
      image: gladiatorImg,
      content: (
        <div>
          <p className="text-muted-foreground mb-4">
            {t('services.castrum.description')}
          </p>
          <div className="flex items-center text-sm text-bnb-green2 mb-2">
            <CheckCircle className="h-4 w-4 mr-2" />
            {t('services.castrum.note1')}
          </div>
          <div className="flex items-center text-sm text-bnb-green2">
            <CheckCircle className="h-4 w-4 mr-2" />
            {t('services.castrum.note2')}
          </div>
          <div className="flex items-center text-sm text-bnb-green2">
            <CheckCircle className="h-4 w-4 mr-2" />
            {t('services.castrum.note3')}
          </div>
        </div>
      )
    }
  ];
  const amenities = [
    { icon: <Wifi className="h-5 w-5" />, title: "Free WiFi" },
    { icon: <Snowflake className="h-5 w-5" />, title: "Air Conditioning" },
    { icon: <Bed className="h-5 w-5" />, title: "Premium Bedding" },
    { icon: <Coffee className="h-5 w-5" />, title: "Coffee & Tea" },
    { icon: <Utensils className="h-5 w-5" />, title: "Fully Equipped Kitchen" },
    { icon: <Car className="h-5 w-5" />, title: "Free Parking" },
    { icon: <Tv className="h-5 w-5" />, title: "Smart TV" },
    { icon: <Bath className="h-5 w-5" />, title: "Bathroom Essentials" },
    { icon: <Waves className="h-5 w-5" />, title: "Washing Machine" },
    { icon: <Flame className="h-5 w-5" />, title: "Barbecue" },
    { icon: <Trees className="h-5 w-5" />, title: "Garden" },
    { icon: <Zap className="h-5 w-5" />, title: "EV Charger" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/10 to-background py-6 section-container">
          <div className="container mx-auto px-4 text-center mb-4">
            <h1 className="text-5xl md:text-5xl sm:text-3xl font-bold text-bnb-green2 mb-4">
              {t('services.title')}
            </h1>
            <p className="text-2xl text-muted-foreground max-w-3xl mx-auto mb-6">
              {t('services.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {amenities.map((amenity, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center gap-2 p-4 bg-background border-2 border-border rounded-xl hover:border-primary/20 transition-colors"
              >
                <div className="text-bnb-green2">
                  {amenity.icon}
                </div>
                <span className="text-sm font-medium text-center">{amenity.title}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Partnerships Section */}
        <section className="section-container bg-accent">
          <div className="text-center mb-2">
            <h2 className="text-5xl md:text-5xl sm:text-3xl font-bold text-bnb-green2 mb-4">
              {t('services.partnerships.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4 whitespace-pre-line">
              {t('services.partnerships.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {partnerships.map((partnership, index) => (
              <div key={index} className="relative h-80 [perspective:1000px]">
                <div 
                  className={`relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] ${
                    flippedCards[index] ? '[transform:rotateY(180deg)]' : ''
                  }`}
                >
                  {/* Front of card */}
                  <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-lg overflow-hidden">
                    <div className="w-full h-full bg-bnb-green2 flex flex-col items-center justify-center p-6 relative cursor-pointer">
                      <img 
                        src={partnership.image} 
                        alt={partnership.title}
                        className="w-40 h-40 object-contain mb-4"
                      />
                      <h3 className="text-3xl md:text-2xl sm:text-xl font-bold text-bnb-dark_gray text-center mb-6">
                        {partnership.title}
                      </h3>
                      <span 
                        onClick={() => toggleCard(index)}
                        className="absolute bottom-4 right-4 text-white hover:text-bnb-dark_gray text-lg cursor-pointer underline font-medium"
                      >
                        More Info
                      </span>
                    </div>
                  </div>
                  
                  {/* Back of card */}
                  <div 
                    className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-lg overflow-hidden cursor-pointer"
                    onClick={() => toggleCard(index)}
                  >
                    <Card className="h-full border-2 flex flex-col">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg text-bnb-green2">{partnership.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="flex-1 overflow-y-auto text-sm">
                        {partnership.content}
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-2xl md:text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
              {t('services.conclusion')}
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;