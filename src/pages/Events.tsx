import React from 'react';
import { ArrowDown } from 'lucide-react';
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

const NOTES = ['guests', 'music', 'sleep', 'excluded'];

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
          <div className="absolute inset-0 bg-gradient-to-t from-bnb-dark/90 via-bnb-dark/55 to-bnb-dark/10" />
          <div className="container relative z-10 mx-auto px-4 pb-12 md:pb-20">
            <div className="max-w-3xl animate-fade-in">
              <h1 className="text-balance text-5xl font-semibold leading-[1.05] text-bnb-stone sm:text-6xl md:text-7xl">
                {t('events.hero.title')}
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-bnb-stone/90 md:text-xl">{t('events.hero.line')}</p>
              <Button
                asChild
                size="md"
                className="mt-8 bg-bnb-green text-bnb-dark shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-bnb-dark_green hover:text-bnb-dark hover:shadow-md"
              >
                <a href="#data">
                  {t('events.hero.cta')}
                  <ArrowDown />
                </a>
              </Button>
            </div>
          </div>
        </section>

        <section className="bg-bnb-stone px-4 py-16 md:py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-12">
            <p className="text-balance font-display text-2xl leading-snug text-bnb-dark md:text-3xl lg:col-span-7">
              {t('events.intro')}
            </p>
            <dl className="h-fit divide-y divide-bnb-sand/60 border-y border-bnb-sand/60 lg:col-span-4 lg:col-start-9">
              {NOTES.map((key) => (
                <div key={key} className="py-4">
                  <dt className="text-sm text-bnb-dark_gray">{t(`events.note.${key}`)}</dt>
                  <dd className="mt-1 font-display text-2xl text-bnb-dark">{t(`events.note.${key}.value`)}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="bg-background px-4 pb-20 pt-4 md:pb-28">
          <div className="mx-auto grid max-w-6xl grid-cols-12 gap-4 md:gap-8">
            <figure className="col-span-12 md:col-span-8">
              <img
                src="/photos/GREEN WOODY HOME-03.jpg"
                alt={t('events.photo.courtyard')}
                className="aspect-[3/2] w-full rounded-md object-cover"
                loading="lazy"
              />
              <figcaption className="mt-3 text-sm text-bnb-dark_gray">{t('events.photo.courtyard')}</figcaption>
            </figure>
            <figure className="col-span-12 md:col-span-4 md:mt-24">
              <img
                src="/photos/GREEN WOODY HOME-05.jpg"
                alt={t('events.photo.villa')}
                className="aspect-[4/5] w-full rounded-md object-cover object-[75%_50%]"
                loading="lazy"
              />
              <figcaption className="mt-3 text-sm text-bnb-dark_gray">{t('events.photo.villa')}</figcaption>
            </figure>
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
