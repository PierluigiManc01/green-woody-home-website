import React from 'react';
import { Head } from 'vite-react-ssg';

const SITE_URL = 'https://www.greenwoodyhome.com';

interface SeoProps {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
}

const Seo: React.FC<SeoProps> = ({ title, description, path, noindex = false }) => {
  const url = `${SITE_URL}${path}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {noindex ? <meta name="robots" content="noindex" /> : <link rel="canonical" href={url} />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
    </Head>
  );
};

export default Seo;
