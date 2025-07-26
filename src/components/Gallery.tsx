
import React, { useState, useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Gallery categories with larger, organized images
const galleryCategories = {
  exteriors: {
    title: "Exteriors",
    images: [
      {
        id: 1,
        src: "/photos/GREEN WOODY HOME-04.jpg",
        alt: "Wooden cabin exterior surrounded by trees",
      },
      {
        id: 2,
        src: "/photos/GREEN WOODY HOME-07.jpg",
        alt: "Exterior view of the cabin",
      },
      {
        id: 3,
        src: "/photos/DSC_0238 copy.jpg",
        alt: "Exterior view of the cabin with garden",
      },
      {
        id: 4,
        src: "/photos/GREEN WOODY HOME-25.jpg",
        alt: "Exterior front view",
      }
    ]
  },
  livingRoom: {
    title: "Living Room",
    images: [
      {
        id: 5,
        src: "/photos/GREEN WOODY HOME-02.jpg",
        alt: "Cozy living room with wooden beams",
      },
      {
        id: 6,
        src: "/photos/GREEN WOODY HOME-10.jpg",
        alt: "Another living room angle",
      },
      {
        id: 7,
        src: "/photos/GREEN WOODY HOME-32.jpg",
        alt: "Living room interior design detail",
      }
    ]
  },
  bedrooms: {
    title: "Bedrooms",
    images: [
      {
        id: 8,
        src: "/photos/GREEN WOODY HOME-36.jpg", 
        alt: "Master bedroom with large windows facing nature",
      },
      {
        id: 9,
        src: "/photos/GREEN WOODY HOME-11.jpg", 
        alt: "Second bedroom view",
      },
      {
        id: 10,
        src: "/photos/GREEN WOODY HOME-24.jpg",
        alt: "Bedroom detail with comfortable bedding",
      }
    ]
  },
  kitchen: {
    title: "Kitchen",
    images: [
      {
        id: 11,
        src: "/photos/GREEN WOODY HOME-08.jpg",
        alt: "Kitchen with wooden countertop and modern appliances",
      },
      {
        id: 12,
        src: "/photos/GREEN WOODY HOME-21.jpg", 
        alt: "Kitchen appliances and dining area",
      }
    ]
  },
  bathrooms: {
    title: "Bathrooms",
    images: [
      {
        id: 13,
        src: "/photos/GREEN WOODY HOME-03.jpg",
        alt: "Bathroom with natural stone elements",
      },
      {
        id: 14,
        src: "/photos/GREEN WOODY HOME-34.jpg",
        alt: "Second bathroom with modern fixtures",
      }
    ]
  },
  outdoor: {
    title: "Outdoor Areas",
    images: [
      {
        id: 15,
        src: "/photos/GREEN WOODY HOME-09.jpg",
        alt: "Outdoor deck with lounge chairs",
      },
      {
        id: 16,
        src: "/photos/GREEN WOODY HOME-16.jpg",
        alt: "Patio with garden view",
      },
      {
        id: 17,
        src: "/photos/GREEN WOODY HOME-22.jpg",
        alt: "Garden view from the patio",
      },
      {
        id: 18,
        src: "/photos/GREEN WOODY HOME-19.jpg",
        alt: "Backyard view with nature",
      }
    ]
  }
};

interface GalleryProps {
  isHomepage?: boolean;
}

const Gallery: React.FC<GalleryProps> = ({ isHomepage = false }) => {
  if (isHomepage) {
    // Simplified version for homepage
    const previewImages = [
      galleryCategories.exteriors.images[0],
      galleryCategories.livingRoom.images[0],
      galleryCategories.bedrooms.images[0],
      galleryCategories.outdoor.images[0]
    ];

    return (
      <section id="gallery" className="section-container bg-accent">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-bnb-green2 mb-4">Explore Our Space</h2>
          <p className="text-bnb-green2 text-muted-foreground max-w-2xl mx-auto">
            Take a virtual tour through our beautiful space and imagine your stay in our nature retreat.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
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
            <p className="text-bnb-green2 mb-4">
              More photos are available in our complete gallery
            </p>
            <Button asChild className="bg-bnb-green2 hover:bg-bnb-green2/90 text-gray font-medium px-6 py-3">
              <a href="/gallery">View Full Gallery</a>
            </Button>
          </div>
        </div>
      </section>
    );
  }

  // Full gallery page version
  return (
    <section className="section-container bg-accent">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-bnb-green2 mb-4">Photo Gallery</h1>
        <p className="text-bnb-green2 text-muted-foreground max-w-2xl mx-auto">
          Discover every corner of Green Woody Home through our comprehensive photo collection
        </p>
      </div>
      
      <div className="max-w-7xl mx-auto space-y-16">
        {Object.entries(galleryCategories).map(([key, category]) => (
          <div key={key} className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-bnb-green2 text-center">
              {category.title}
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
