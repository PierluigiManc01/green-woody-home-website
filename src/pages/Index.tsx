
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Index;
