import React from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const EVENT_TYPE_KEYS = [1, 2, 3, 4, 5, 6, 7, 8];

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

const EventsPage: React.FC = () => {
  const { t } = useLanguage();
  const whatsappHref = `https://wa.me/393358158411?text=${encodeURIComponent(t('events.cta.message'))}`;
  const mailHref = `mailto:greenwoodyhome@gmail.com?subject=${encodeURIComponent(t('events.cta.subject'))}&body=${encodeURIComponent(t('events.cta.message'))}`;

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
        <section className="relative flex min-h-[55vh] items-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/photos/DSC_0238 copy.jpg"
              alt="Villa with private garden for parties and events near Rome"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-bnb-dark/75 via-bnb-dark/35 to-transparent" />
          </div>
          <div className="container relative z-10 mx-auto px-4 py-16">
            <div className="max-w-3xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-bnb-green2">{t('events.eyebrow')}</p>
              <h1 className="text-4xl font-semibold leading-tight text-bnb-stone sm:text-5xl md:text-6xl">{t('events.title')}</h1>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-bnb-stone/90 md:text-xl">{t('events.subtitle')}</p>
            </div>
          </div>
        </section>

        <section className="section-container bg-background">
          <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold text-bnb-dark">{t('events.capacity.title')}</h2>
              <p className="text-lg leading-relaxed text-bnb-dark_gray">{t('events.capacity.text')}</p>
              <h2 className="pt-6 text-3xl font-semibold text-bnb-dark">{t('events.space.title')}</h2>
              <p className="text-lg leading-relaxed text-bnb-dark_gray">{t('events.space.text')}</p>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold text-bnb-dark">{t('events.types.title')}</h2>
              <p className="text-lg leading-relaxed text-bnb-dark_gray">{t('events.types.intro')}</p>
              <ul className="grid gap-2 sm:grid-cols-2">
                {EVENT_TYPE_KEYS.map((n) => (
                  <li key={n} className="flex items-center gap-2 text-bnb-dark_gray">
                    <Check className="h-4 w-4 shrink-0 text-bnb-green" />
                    {t(`events.type${n}`)}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section-container bg-bnb-stone">
          <div className="mx-auto max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold text-bnb-dark">{t('events.rules.title')}</h2>
            <ul className="list-disc space-y-2 pl-5 text-lg leading-relaxed text-bnb-dark_gray">
              <li>{t('events.rules.noise')}</li>
              <li>{t('events.rules.stay')}</li>
              <li>{t('events.rules.notIncluded')}</li>
            </ul>
            <p className="pt-2 text-bnb-dark_gray">
              {t('events.services.text')}{' '}
              <Link to="/services" className="underline hover:text-bnb-green" onClick={() => window.scrollTo(0, 0)}>
                {t('events.services.link')}
              </Link>
              .
            </p>
          </div>
        </section>

        <section className="section-container bg-background">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold text-bnb-dark md:text-4xl">{t('events.cta.title')}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-bnb-dark_gray">{t('events.cta.text')}</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild size="md" className="bg-bnb-green text-bnb-dark hover:bg-bnb-dark_green hover:text-bnb-dark">
                <a href={whatsappHref} target="_blank" rel="noopener noreferrer">{t('events.cta.whatsapp')}</a>
              </Button>
              <Button asChild size="md" variant="outline">
                <a href={mailHref}>{t('events.cta.email')}</a>
              </Button>
              <Button asChild size="md" variant="outline">
                <a href="tel:+393358158411">{t('events.cta.call')}</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default EventsPage;
