
import React, { useState, useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

// Gallery categories with larger, organized images
const galleryCategories = {
  exteriors: {
    title: "Exteriors",
    images: [
      {
        id: 1,
        src: "/photos/GREEN WOODY HOME-02.jpg",
        alt: "Villa exterior surrounded by trees",
      },
      {
        id: 2,
        src: "/photos/GREEN WOODY HOME-04.jpg",
        alt: "Exterior view of the cabin",
      },
      {
        id: 3,
        src: "/photos/DSC_0238 copy.jpg",
        alt: "Exterior view of the villa with garden",
      },
      {
        id: 4,
        src: "/photos/GREEN WOODY HOME-03.jpg",
        alt: "Exterior relaxing view",
      },
      {
        id: 5,
        src: "/photos/GREEN WOODY HOME-05.jpg",
        alt: "Exterior relaxing view 2",
      },
      {
        id: 6,
        src: "/photos/GREEN WOODY HOME-36.jpg",
        alt: "Exterior front view",
      },
      {
        id: 31,
        src: "/photos/GREEN WOODY HOME-01.jpg",
        alt: "Exterior entrance view",
      },
    ]
  },
  livingRoom: {
    title: "Living Room",
    images: [
      {
        id: 7,
        src: "/photos/GREEN WOODY HOME-06.jpg",
        alt: "Cozy living room with wooden beams",
      },
      {
        id: 8,
        src: "/photos/GREEN WOODY HOME-07.jpg",
        alt: "Another living room angle",
      },
      {
        id: 9,
        src: "/photos/GREEN WOODY HOME-30.jpg",
        alt: "Living room interior design detail",
      },{
        id: 10,
        src: "/photos/GREEN WOODY HOME-09.jpg",
        alt: "Cozy living room with wooden beams",
      },
      {
        id: 11,
        src: "/photos/GREEN WOODY HOME-10.jpg",
        alt: "Another living room angle from kitchen",
      },
      {
        id: 12,
        src: "/photos/GREEN WOODY HOME-11.jpg",
        alt: "Living room interior design detail",
      }
    ]
  },
  kitchen: {
    title: "Kitchen",
    images: [
      {
        id: 13,
        src: "/photos/GREEN WOODY HOME-07.jpg",
        alt: "Another living room angle",
      },
      {
        id: 14,
        src: "/photos/GREEN WOODY HOME-12.jpg",
        alt: "Kitchen with wooden countertop and modern appliances",
      },
      {
        id: 15,
        src: "/photos/GREEN WOODY HOME-13.jpg", 
        alt: "Kitchen appliances and dining area",
      }
    ]
  },
  bedrooms: { 
    title: "Bedrooms",
      images: [
        {
          id: 16,
          src: "/photos/GREEN WOODY HOME-32.jpg",
          alt: "Master bedroom with large windows",
        },
        {
          id: 17,
          src: "/photos/GREEN WOODY HOME-22.jpg",
          alt: "Master bedroom interior design",
        },
        {
          id: 18,
          src: "/photos/GREEN WOODY HOME-23.jpg",
          alt: "Master bedroom with large windows facing nature",
        },
        {
          id: 19,
          src: "/photos/GREEN WOODY HOME-28.jpg",
          alt: "Master bedroom with large windows facing nature",
        },
        {
          id: 20,
          src: "/photos/GREEN WOODY HOME-18.jpg",
          alt: "Third bedroom bed view",
        },
          {
        id: 21,
        src: "/photos/GREEN WOODY HOME-20.jpg",
        alt: "Bedroom detail with comfortable bedding",
      }
    ]
  },
  bathrooms: {
    title: "Bathrooms",
    images: [
      {
        id: 22,
        src: "/photos/GREEN WOODY HOME-21.jpg",
        alt: "Bathroom with natural stone elements",
      },
      {
        id: 24,
        src: "/photos/GREEN WOODY HOME-25.jpg",
        alt: "Bathroom with natural stone elements",
      },
      {
        id: 25,
        src: "/photos/GREEN WOODY HOME-38.jpg",
        alt: "Second bathroom with modern fixtures",
      },
       {
        id: 26,
        src: "/photos/GREEN WOODY HOME-24.jpg",
        alt: "Second bathroom with modern fixtures",
      },
      {
        id: 27,
        src: "/photos/GREEN WOODY HOME-17.jpg",
        alt: "Bathroom with natural stone elements",
      },
      {
        id: 28,
        src: "/photos/GREEN WOODY HOME-16.jpg",
        alt: "Sink with modern fixtures",
      },
      {
        id: 29,
        src: "/photos/GREEN WOODY HOME-35-2.jpg",
        alt: "Sink with modern fixtures",
      }
    ]
  },
  other: {
    title: "Extras",
    images: [
      {
        id: 35,
        src: "/photos/GREEN WOODY HOME-29.jpg",
        alt: "Outdoor deck with lounge chairs",
      },
      {
        id: 36,
        src: "/photos/GREEN WOODY HOME-14.jpg",
        alt: "Vinyl music player in living room",
      },
      {
        id: 37,
        src: "/photos/GREEN WOODY HOME-26.jpg",
        alt: "Washing machine in utility area",
      },
      {
        id: 38,
        src: "/photos/GREEN WOODY HOME-15.jpg",
        alt: "Corridor to the bedrooms",
      },
      {
        id: 39,
        src: "/photos/Il-Castello-di-Decima-hero.jpg",
        alt: "Castle view in Decima",
      }
      
    ]
  }
};

interface GalleryProps {
  isHomepage?: boolean;
}

const Gallery: React.FC<GalleryProps> = ({ isHomepage = false }) => {
  const { t } = useLanguage();
  
  
  if (isHomepage) {
    // Simplified version for homepage
    const previewImages = [
      galleryCategories.exteriors.images[0],
      galleryCategories.exteriors.images[1],
      galleryCategories.livingRoom.images[4],
      galleryCategories.bedrooms.images[0],
      galleryCategories.bathrooms.images[0],
      galleryCategories.other.images[4]
    ];

    return (
      <section id="gallery" className="section-container bg-accent">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-bnb-green2 mb-4">{t('gallery.title')}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto whitespace-pre-line">
            {t('gallery.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-3 md:grid-cols-3 gap-4 mb-8">
            {previewImages.map((image) => (
              <div key={image.id} className="overflow-hidden rounded-lg">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-48 md:h-64 object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-lg leading-relaxed text-bnb-dark_gray mb-4">
              {t('gallery.conclusion')}
            </p>
            <Button asChild className="bg-bnb-green2 hover:bg-bnb-green2/90 text-bnb-dark_gray font-medium px-6 py-3">
              <Link to="/gallery">{t('gallery.viewFull')}</Link>
            </Button>
          </div>
      </section>
    );
  }

  // Full gallery page version
  return (
    <section className="section-container bg-accent">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-bnb-green2 mb-4">{t('gallery.title')}</h1>
        <p className="text-bnb-green2 text-muted-foreground max-w-2xl mx-auto">
          {t('gallery.subtitle')}
        </p>
      </div>
      
      <div className="max-w-7xl mx-auto space-y-16">
        {Object.entries(galleryCategories).map(([key, category]) => (
          <div key={key} className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-bnb-green2 text-center">
              {t(`gallery.${key}`)}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.images.map((image) => (
                <div key={image.id} className="overflow-hidden rounded-lg shadow-lg">
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-80 md:h-96 object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
