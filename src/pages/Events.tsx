import React from 'react';
import { Check, Minus } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';
import Contact from '@/components/Contact';
import { useLanguage } from '@/contexts/LanguageContext';

const venueSchema = {
  '@context': 'https://schema.org',
  '@type': 'EventVenue',
  name: 'Green Woody Home',
  description:
    'Private villa with a 1,500 m² garden near Rome for parties and events: birthdays, graduations, corporate events, photo shoots and more.',
  url: 'https://www.greenwoodyhome.com/events',
  image: 'https://www.greenwoodyhome.com/photos/DSC_0238%20copy.jpg',
  telephone: '+393358158411',
  email: 'greenwoodyhome@gmail.com',
  maximumAttendeeCapacity: 100,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Via Clarice Tartufari',
    addressLocality: 'Castel di Decima, Rome',
    postalCode: '00128',
    addressCountry: 'IT',
  },
};

const OCCASIONS = [1, 2, 3, 4, 5, 6, 7];
const PRICES = ['base', 'extra', 'stay'];
const INCLUDED = [1, 3, 4, 5, 7, 8];
const EXCLUDED = [1, 2, 3];

// Two rows that alternate wide and narrow on desktop.
const SPACES = [
  { key: 'courtyard', src: '/photos/GREEN WOODY HOME-04.jpg', span: 'md:col-span-8' },
  { key: 'lawn', src: '/photos/GREEN WOODY HOME-02.jpg', span: 'md:col-span-4 object-[75%_50%]' },
  { key: 'terrace', src: '/photos/GREEN WOODY HOME-05.jpg', span: 'md:col-span-4' },
  { key: 'villa', src: '/photos/GREEN WOODY HOME-36.jpg', span: 'md:col-span-8' },
];

const EventsPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <Seo
        title="Parties & Events Venue Near Rome | Green Woody Home"
        description="Host birthdays, graduations, corporate events, photo shoots and more at Green Woody Home: private villa with a 1,500 m² garden near Rome, up to 100 guests, overnight stay available."
        path="/events"
        jsonLd={venueSchema}
      />
      <Header />
      <main className="flex-grow">
        <section className="relative flex min-h-[calc(100svh-5rem)] items-end overflow-hidden">
          <img
            src="/photos/DSC_0238 copy.jpg"
            alt="Villa with a private garden near Rome, available for parties and events"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bnb-dark/90 via-bnb-dark/50 to-bnb-dark/10" />
          <div className="container relative z-10 mx-auto px-4 pb-12 md:pb-20">
            <div className="max-w-4xl animate-fade-in">
              <h1 className="text-balance text-4xl font-semibold leading-[1.08] text-bnb-stone sm:text-5xl md:text-7xl">
                {t('events.h1')}
              </h1>
              <p className="mt-5 max-w-2xl text-xl leading-relaxed text-bnb-stone md:text-2xl">{t('events.sub')}</p>
            </div>
          </div>
        </section>

        <section className="bg-bnb-stone px-4 py-16 md:py-24">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-4xl font-semibold text-bnb-dark md:text-5xl">{t('events.spaces.title')}</h2>
            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-6">
              {SPACES.map(({ key, src, span }) => (
                <img
                  key={key}
                  src={src}
                  alt={t(`events.space.${key}`)}
                  className={`aspect-[4/3] w-full rounded-md object-cover md:aspect-auto md:h-[22rem] ${span}`}
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-bnb-dark px-4 py-16 md:py-24">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="font-display text-2xl text-bnb-green2 md:text-3xl">{t('events.occasions.title')}</h2>
            <ul className="mt-8 flex flex-wrap items-baseline justify-center gap-x-6 gap-y-2 md:mt-10 md:gap-x-10 md:gap-y-4">
              {OCCASIONS.map((n, i) => (
                <li key={n} className={`font-display text-3xl md:text-5xl ${i % 2 ? 'text-bnb-green2' : 'text-bnb-stone'}`}>
                  {t(`events.occ${n}`)}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-bnb-stone px-4 pt-16 md:pt-24">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-12">
            <h2 className="text-4xl font-semibold text-bnb-dark md:text-5xl lg:col-span-4">{t('events.price.title')}</h2>
            <dl className="border-t border-bnb-sand/60 lg:col-span-7 lg:col-start-6">
              {PRICES.map((key) => (
                <div key={key} className="flex items-baseline justify-between gap-6 border-b border-bnb-sand/60 py-4">
                  <dt className="text-lg text-bnb-dark_gray">{t(`events.price.${key}`)}</dt>
                  <dd className="shrink-0 font-display text-2xl text-bnb-dark">{t(`events.price.${key}.value`)}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="bg-bnb-stone px-4 py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h2 className="text-4xl font-semibold text-bnb-dark md:text-5xl">{t('events.included.title')}</h2>
              <ul className="mt-8 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                {INCLUDED.map((n) => (
                  <li key={n} className="flex items-start gap-3 text-lg text-bnb-dark">
                    <Check className="mt-1 h-5 w-5 shrink-0 text-bnb-dark_green" />
                    {t(`events.included.${n}`)}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <h2 className="text-4xl font-semibold text-bnb-dark md:text-5xl">{t('events.excluded.title')}</h2>
              <ul className="mt-8 space-y-4">
                {EXCLUDED.map((n) => (
                  <li key={n} className="flex items-start gap-3 text-lg text-bnb-dark_gray">
                    <Minus className="mt-1 h-5 w-5 shrink-0 text-bnb-wood" />
                    {t(`events.excluded.${n}`)}
                  </li>
                ))}
              </ul>
              <p className="mt-10 border-t border-bnb-sand/60 pt-6 font-display text-2xl text-bnb-dark">{t('events.noise')}</p>
            </div>
          </div>
        </section>

        <div id="data" className="scroll-mt-20">
          <Contact variant="event" />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EventsPage;
