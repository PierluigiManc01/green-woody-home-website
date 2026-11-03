import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const EventsTeaser: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="events" className="section-container bg-bnb-stone">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <img
          src="/photos/DSC_0238 copy.jpg"
          alt="Villa with private garden for parties and events near Rome"
          className="rounded-md shadow-sm w-full h-full max-h-[420px] object-cover"
          loading="lazy"
        />
        <div className="space-y-5">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-bnb-wood">{t('events.eyebrow')}</p>
          <h2 className="text-4xl md:text-5xl font-semibold text-bnb-dark">{t('events.teaser.title')}</h2>
          <p className="text-lg leading-relaxed text-bnb-dark_gray">{t('events.teaser.text')}</p>
          <Button
            asChild
            className="group bg-bnb-green text-bnb-dark hover:bg-bnb-dark_green hover:text-bnb-dark shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
          >
            <Link to="/events" onClick={() => window.scrollTo(0, 0)}>
              {t('events.teaser.cta')}
              <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EventsTeaser;
