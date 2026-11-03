
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import EventsTeaser from '@/components/EventsTeaser';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import Seo from '@/components/Seo';
import { useLanguage } from '@/contexts/LanguageContext';

const Index: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <Seo title={t('seo.home.title')} description={t('seo.home.description')} page="home" />
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <EventsTeaser />
        <Gallery isHomepage={true} />
        <Contact />
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Index;
