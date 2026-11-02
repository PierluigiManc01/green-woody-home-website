import React from 'react';
import Header from '@/components/Header';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';

const GalleryPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Seo
        title="Photo Gallery | Green Woody Home, Eco Villa Near Rome"
        description="Photos of Green Woody Home: three bedrooms, three bathrooms, living room, kitchen and a 1,500 m² private garden in the Roman countryside."
        path="/gallery"
      />
      <Header />
      <main className="flex-grow">
        <Gallery isHomepage={false} />
      </main>
      <Footer />
    </div>
  );
};

export default GalleryPage;