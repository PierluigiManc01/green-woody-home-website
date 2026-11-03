import React from 'react';
import { Head } from 'vite-react-ssg';
import { useLanguage } from '@/contexts/LanguageContext';
import { PAGE_PATHS, type PageKey } from '@/lib/routes';

const SITE_URL = 'https://www.greenwoodyhome.com';

interface SeoProps {
  title: string;
  description: string;
  // A site page gets its URL, language and hreflang alternates from the route table.
  page?: PageKey;
  path?: string;
  noindex?: boolean;
  jsonLd?: Record<string, unknown>;
}

const Seo: React.FC<SeoProps> = ({ title, description, page, path = '/', noindex = false, jsonLd }) => {
  const { language: lang } = useLanguage();
  const url = `${SITE_URL}${page ? PAGE_PATHS[page][lang] : path}`;
  // Italian first, so it is also the x-default.
  const alternateEntries = page ? Object.entries({ it: PAGE_PATHS[page].it, en: PAGE_PATHS[page].en }) : [];

  return (
    <Head>
      <html lang={lang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      {noindex ? <meta name="robots" content="noindex" /> : <link rel="canonical" href={url} />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:locale" content={lang === 'it' ? 'it_IT' : 'en_US'} />
      {alternateEntries.map(([hreflang, href]) => (
        <link key={hreflang} rel="alternate" hrefLang={hreflang} href={`${SITE_URL}${href}`} />
      ))}
      {alternateEntries.length > 0 && <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}${alternateEntries[0][1]}`} />}
      {jsonLd && <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>}
    </Head>
  );
};

export default Seo;
