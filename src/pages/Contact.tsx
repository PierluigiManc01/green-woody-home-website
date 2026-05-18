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
        <section className="section-container bg-bnb-stone">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-bnb-wood">
              Green Woody Home
            </p>
            <h1 className="text-5xl font-semibold leading-tight text-bnb-dark md:text-7xl">{t('contact.booking.title')}</h1>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-bnb-dark_gray md:text-xl">
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
