import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  Bath,
  Bed,
  Car,
  CheckCircle,
  Coffee,
  Flame,
  Snowflake,
  Trees,
  Tv,
  Utensils,
  Waves,
  Wifi,
  Zap,
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import tennisCourtImg from '@/assets/tennis.jpg';
import chefImg from '@/assets/pasta.jpg';
import tourGuideImg from '@/assets/tour_guide.jpg';
import gladiatorImg from '@/assets/castrum_logo.jpg';

const Services: React.FC = () => {
  const { t } = useLanguage();

  const amenities = [
    { icon: <Wifi className="h-5 w-5" />, title: t('services.freewifi') },
    { icon: <Snowflake className="h-5 w-5" />, title: t('services.air') },
    { icon: <Coffee className="h-5 w-5" />, title: t('services.breakfast') },
    { icon: <Utensils className="h-5 w-5" />, title: t('services.kitchen') },
    { icon: <Car className="h-5 w-5" />, title: t('services.parking') },
    { icon: <Zap className="h-5 w-5" />, title: t('services.charger') },
    { icon: <Tv className="h-5 w-5" />, title: t('services.tv') },
    { icon: <Bed className="h-5 w-5" />, title: t('services.bed') },
    { icon: <Bath className="h-5 w-5" />, title: t('services.bathroom') },
    { icon: <Waves className="h-5 w-5" />, title: t('services.washingmachine') },
    { icon: <Flame className="h-5 w-5" />, title: 'Barbecue' },
    { icon: <Trees className="h-5 w-5" />, title: t('services.garden') },
  ];

  const partnerships = [
    {
      title: 'Barazzutti Tennis Academy',
      image: tennisCourtImg,
      description: t('services.barazzutti.description'),
      notes: [
        t('services.barazzutti.note1'),
        t('services.barazzutti.note2'),
        t('services.barazzutti.note3'),
      ],
      link: {
        href: 'https://www.scuolatenniscorradobarazzutti.it/',
        label: t('services.barazzutti.linkText'),
      },
    },
    {
      title: t('services.guide.title'),
      image: tourGuideImg,
      description: t('services.guide.description'),
      notes: [t('services.guide.note1'), t('services.guide.note2'), t('services.guide.note3')],
    },
    {
      title: t('services.chef.title'),
      image: chefImg,
      description: t('services.chef.description'),
      notes: [t('services.chef.note1'), t('services.chef.note2'), t('services.chef.note3')],
    },
    {
      title: 'Castrum Legionis',
      image: gladiatorImg,
      description: t('services.castrum.description'),
      notes: [t('services.castrum.note1'), t('services.castrum.note2'), t('services.castrum.note3')],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <section className="section-container bg-bnb-stone">
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[0.95fr_1.05fr] md:items-end">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-bnb-wood">
                Green Woody Home
              </p>
              <h1 className="text-5xl font-semibold leading-tight text-bnb-dark md:text-7xl">
                {t('services.title')}
              </h1>
            </div>
            <p className="text-lg leading-relaxed text-bnb-dark_gray md:text-xl">
              {t('services.subtitle')}
            </p>
          </div>
        </section>

        <section className="section-container bg-background">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-2 gap-x-6 gap-y-5 md:grid-cols-3 lg:grid-cols-4">
              {amenities.map((amenity) => (
                <div key={amenity.title} className="flex items-center gap-3 border-b border-bnb-sand/40 pb-4">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-bnb-green/10 text-bnb-green">
                    {amenity.icon}
                  </span>
                  <span className="text-sm font-medium leading-snug text-bnb-dark md:text-base">{amenity.title}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-container bg-bnb-stone2">
          <div className="mx-auto max-w-6xl">
            <div className="mb-14 grid gap-5 md:grid-cols-[0.8fr_1.2fr] md:items-end">
              <h2 className="text-4xl font-semibold leading-tight text-bnb-dark md:text-6xl">
                {t('services.partnerships.title')}
              </h2>
              <p className="text-lg leading-relaxed text-bnb-dark_gray whitespace-pre-line">
                {t('services.partnerships.subtitle')}
              </p>
            </div>

            <div className="space-y-16">
              {partnerships.map((partnership, index) => (
                <article
                  key={partnership.title}
                  className="grid gap-8 border-t border-bnb-sand/50 pt-10 lg:grid-cols-2 lg:items-center"
                >
                  <div className={index % 2 === 1 ? 'lg:order-2' : undefined}>
                    <div className="overflow-hidden rounded-md bg-bnb-dark">
                      <img
                        src={partnership.image}
                        alt={partnership.title}
                        className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                  </div>
                  <div className="max-w-xl">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-bnb-wood">
                      0{index + 1}
                    </p>
                    <h3 className="font-display text-3xl font-semibold text-bnb-dark md:text-5xl">
                      {partnership.title}
                    </h3>
                    <p className="mt-5 text-lg leading-relaxed text-bnb-dark_gray">
                      {partnership.description}
                    </p>
                    <div className="mt-6 space-y-3">
                      {partnership.notes.map((note) => (
                        <p key={note} className="flex gap-3 text-bnb-dark_gray">
                          <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-bnb-green" />
                          <span>
                            {note}
                            {partnership.link && note === t('services.barazzutti.note3') && (
                              <a
                                href={partnership.link.href}
                                className="ml-1 font-medium text-bnb-green underline-offset-4 hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {partnership.link.label}
                              </a>
                            )}
                          </span>
                        </p>
                      ))}
                    </div>
                    <Button asChild className="mt-8 bg-bnb-green text-bnb-dark hover:bg-bnb-dark_green hover:text-bnb-dark">
                      <Link to="/reservations" onClick={() => window.scrollTo(0, 0)}>
                        {t('services.reserveService')}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-16 border-t border-bnb-sand/50 pt-8 text-center">
              <p className="mx-auto max-w-3xl text-lg leading-relaxed text-bnb-dark_gray">
                {t('services.conclusion')}
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
