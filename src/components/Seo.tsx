import React from 'react';
import { Head } from 'vite-react-ssg';

const SITE_URL = 'https://www.greenwoodyhome.com';

interface SeoProps {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
  jsonLd?: Record<string, unknown>;
  lang?: string;
  // Language versions of this page, e.g. { en: '/events', it: '/eventi' }; the first one is x-default.
  alternates?: Record<string, string>;
}

const Seo: React.FC<SeoProps> = ({ title, description, path, noindex = false, jsonLd, lang = 'en', alternates }) => {
  const url = `${SITE_URL}${path}`;
  const alternateEntries = alternates ? Object.entries(alternates) : [];

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
