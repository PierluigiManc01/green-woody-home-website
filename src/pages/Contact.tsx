import React from 'react';
import Header from '@/components/Header';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

const ContactPage: React.FC = () => {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="section-container bg-accent">
          <div className="text-center mb-4">
            <h1 className="text-4xl md:text-5xl font-bold text-bnb-green2 mb-4">{t('contact.booking.title')}</h1>
            <p className="text-bnb-green2 text-muted-foreground max-w-3xl mx-auto text-lg whitespace-pre-line">
               {t('contact.booking.subtitle')}
            </p>
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;