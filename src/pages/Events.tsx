import React from 'react';
import { ArrowDown, Check, Minus } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';
import Contact from '@/components/Contact';
import { Button } from '@/components/ui/button';
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
const INCLUDED = [1, 2, 3, 4, 5, 6, 7, 8];
const EXCLUDED = [1, 2, 3];

const SPACES = [
  { key: 'courtyard', src: '/photos/GREEN WOODY HOME-04.jpg' },
  { key: 'lawn', src: '/photos/GREEN WOODY HOME-02.jpg' },
  { key: 'terrace', src: '/photos/GREEN WOODY HOME-05.jpg' },
  { key: 'garden', src: '/photos/GREEN WOODY HOME-03.jpg' },
  { key: 'villa', src: '/photos/GREEN WOODY HOME-36.jpg' },
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
              <p className="mt-5 text-xl text-bnb-stone md:text-2xl">{t('events.sub')}</p>
              <ul className="mt-6 flex max-w-3xl flex-wrap gap-2">
                {OCCASIONS.map((n) => (
                  <li key={n} className="rounded-full border border-bnb-stone/70 px-4 py-1.5 text-sm text-bnb-stone md:text-base">
                    {t(`events.occ${n}`)}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  size="md"
                  className="bg-bnb-green text-bnb-dark shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-bnb-dark_green hover:text-bnb-dark hover:shadow-md"
                >
                  <a href="#data">
                    {t('events.hero.cta')}
                    <ArrowDown />
                  </a>
                </Button>
                <Button
                  asChild
                  size="md"
                  variant="outline"
                  className="border-bnb-stone/80 bg-transparent text-bnb-stone hover:bg-bnb-stone hover:text-bnb-dark"
                >
                  <a href="#spaces">{t('events.cta.spaces')}</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="spaces" className="scroll-mt-20 bg-bnb-stone pb-6 pt-16 md:pt-24">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-4xl font-semibold text-bnb-dark md:text-5xl">{t('events.spaces.title')}</h2>
          </div>
          <div
            tabIndex={0}
            role="region"
            aria-label={t('events.spaces.title')}
            style={{ '--pad': 'max(1rem, calc((100vw - 72rem) / 2 + 1rem))' } as React.CSSProperties}
            className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-[var(--pad)] pb-4 scroll-pl-[var(--pad)] md:gap-6 [scrollbar-color:#BFAE8F_transparent] [scrollbar-width:thin]"
          >
            {SPACES.map(({ key, src }) => (
              <figure key={key} className="w-[82vw] shrink-0 snap-start sm:w-[46vw] lg:w-[34rem]">
                <div className="overflow-hidden rounded-md">
                  <img
                    src={src}
                    alt={t(`events.space.${key}`)}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <figcaption className="mt-3 font-display text-xl text-bnb-dark">{t(`events.space.${key}`)}</figcaption>
              </figure>
            ))}
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
