import React from 'react';
import Header from '@/components/Header';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';
import { useLanguage } from '@/contexts/LanguageContext';

const GalleryPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <Seo title={t('seo.gallery.title')} description={t('seo.gallery.description')} page="gallery" />
      <Header />
      <main className="flex-grow">
        <Gallery isHomepage={false} />
      </main>
      <Footer />
    </div>
  );
};

export default GalleryPage;