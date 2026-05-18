
import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import DirectBookingCTA from '@/components/DirectBookingCTA';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section id="home" className="relative min-h-[88vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="/photos/GREEN WOODY HOME-04.jpg" 
          alt="Green Woody Home" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bnb-dark/75 via-bnb-dark/35 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
      </div>
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-3xl animate-fade-in">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-bnb-green2">
            {t('hero.welcome')}
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold leading-none text-bnb-stone" translate='no'>
            {t('hero.title')}
          </h1>
          <p className="mt-6 max-w-2xl text-lg md:text-2xl leading-relaxed text-bnb-stone/90">
            {t('hero.subtitle')}
          </p>
          <div className="mt-8 flex flex-col gap-5">
            <DirectBookingCTA showValueProp size="md" />
            <div className="flex flex-col sm:flex-row gap-3">
            <Button asChild variant="outline" className="border-bnb-stone/70 bg-bnb-stone/10 px-6 py-6 text-bnb-stone backdrop-blur-sm hover:bg-bnb-stone hover:text-bnb-dark">
              <a href="#gallery">{t('hero.viewGallery')}</a>
            </Button>
            <Button asChild variant="outline" className="border-bnb-stone/70 bg-bnb-stone/10 px-6 py-6 text-bnb-stone backdrop-blur-sm hover:bg-bnb-stone hover:text-bnb-dark">
              <a href="#PoI">{t('hero.pointsOfInterest')}</a>
            </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
