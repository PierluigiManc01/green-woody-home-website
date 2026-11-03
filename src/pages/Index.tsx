
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

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Seo
        title="Green Woody Home | Private Eco Villa Near Rome"
        description="Book Green Woody Home, a private eco-friendly villa in the Roman countryside with a 1,500 m² garden, modern comfort, and easy access to Rome and the sea."
        path="/"
      />
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
