import React from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const FAQ_KEYS = [1, 2, 3, 4, 5];

// Native <details> keeps the answers in the pre-rendered HTML while staying collapsed for visitors.
const Faq: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="section-container bg-bnb-stone">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-8 text-center text-3xl font-semibold text-bnb-dark md:text-4xl">{t('faq.title')}</h2>
        <div className="divide-y divide-bnb-sand/50 border-y border-bnb-sand/50">
          {FAQ_KEYS.map((n) => (
            <details key={n} className="group py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-medium text-bnb-dark [&::-webkit-details-marker]:hidden">
                {t(`faq.q${n}`)}
                <ChevronDown className="h-5 w-5 shrink-0 transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-3 leading-relaxed text-bnb-dark_gray">{t(`faq.a${n}`)}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
