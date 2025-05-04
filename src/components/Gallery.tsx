
import React, { useState, useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Sample image data organized in sets
const imageSets = [
  // First set
  [
    {
      id: 1,
      src: "/photos/GREEN WOODY HOME-04.jpg",
      alt: "Wooden cabin exterior surrounded by trees",
    },
    {
      id: 2,
      src: "/photos/GREEN WOODY HOME-02.jpg",
      alt: "Cozy living room with wooden beams",
    },
    {
      id: 3,
      src: "/photos/DSC_0238 copy.jpg",
      alt: "Exterior view of the cabin with garden",
    },
    {
      id: 4,
      src: "/photos/GREEN WOODY HOME-36.jpg", 
      alt: "Bedroom with large windows facing nature",
    },
    {
      id: 5,
      src: "/photos/GREEN WOODY HOME-03.jpg",
      alt: "Bathroom with natural stone elements",
    },
    {
      id: 6,
      src: "/photos/GREEN WOODY HOME-09.jpg",
      alt: "Outdoor deck with lounge chairs",
    }
  ],
  // Second set
  [
    {
      id: 7,
      src: "/photos/GREEN WOODY HOME-07.jpg",
      alt: "Exterior view of the cabin",
    },
    {
      id: 8,
      src: "/photos/GREEN WOODY HOME-10.jpg",
      alt: "Another living room angle",
    },
    {
      id: 9,
      src: "/photos/GREEN WOODY HOME-08.jpg",
      alt: "Kitchen detail with wooden countertop",
    },
    {
      id: 10,
      src: "/photos/GREEN WOODY HOME-11.jpg", 
      alt: "Second bedroom view",
    },
    {
      id: 11,
      src: "/photos/GREEN WOODY HOME-34.jpg",
      alt: "Second bathroom view",
    },
    {
      id: 12,
      src: "/photos/GREEN WOODY HOME-16.jpg",
      alt: "Patio with garden view",
    }
  ],
  // Third set (you can add more sets as needed)
  [
    {
      id: 13,
      src: "/photos/GREEN WOODY HOME-22.jpg",
      alt: "Garden view from the patio",
    },
    {
      id: 14,
      src: "/photos/GREEN WOODY HOME-19.jpg",
      alt: "Interior design detail",
    },
    {
      id: 15,
      src: "/photos/GREEN WOODY HOME-32.jpg",
      alt: "Backyard view",
    },
    {
      id: 16,
      src: "/photos/GREEN WOODY HOME-21.jpg", 
      alt: "Kitchen appliances",
    },
    {
      id: 17,
      src: "/photos/GREEN WOODY HOME-24.jpg",
      alt: "Master bedroom detail",
    },
    {
      id: 18,
      src: "/photos/GREEN WOODY HOME-25.jpg",
      alt: "Exterior front view",
    }
  ]
];

const Gallery: React.FC = () => {
  const [autoplay, setAutoplay] = useState(true);
  const [currentSetIndex, setCurrentSetIndex] = useState(0);
  
  // Autoplay functionality
  useEffect(() => {
    let interval: number | undefined;
    
    if (autoplay) {
      interval = window.setInterval(() => {
        setCurrentSetIndex((prevIndex) => (prevIndex + 1) % imageSets.length);
      }, 5000); // Change set every 5 seconds
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoplay]);
  
  // Pause autoplay when user interacts with carousel
  const handleManualNavigation = (newIndex: number) => {
    setAutoplay(false);
    setCurrentSetIndex(newIndex);
    
    // Resume autoplay after 30 seconds of inactivity
    setTimeout(() => {
      setAutoplay(true);
    }, 30000);
  };
  
  const nextSet = () => {
    handleManualNavigation((currentSetIndex + 1) % imageSets.length);
  };
  
  const prevSet = () => {
    handleManualNavigation((currentSetIndex - 1 + imageSets.length) % imageSets.length);
  };

  return (
    <section id="gallery" className="section-container bg-accent">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-bnb-green2 mb-4">Explore Our Space</h2>
        <p className="text-bnb-green2 text-muted-foreground max-w-2xl mx-auto">
          Take a virtual tour through our beautiful space and imagine your stay in our nature retreat. More photos are available on our Airbnb and Booking.com listings.
        </p>
      </div>
      
      <div className="relative max-w-6xl mx-auto">
        <Carousel className="w-full">
          <CarouselContent>
            {imageSets.map((imageSet, index) => (
              <CarouselItem key={`set-${index}`} className={index === currentSetIndex ? 'block' : 'hidden'}>
                <div className="image-gallery">
                  {imageSet.map((image) => (
                    <div key={image.id} className="overflow-hidden rounded-lg">
                      <img 
                        src={image.src} 
                        alt={image.alt} 
                        className="w-full h-64 md:h-80 object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <div className="flex justify-center mt-6 space-x-2">
            {imageSets.map((_, index) => (
              <Button 
                key={`indicator-${index}`}
                variant="outline"
                size="icon"
                className={`w-3 h-3 rounded-full p-0 border ${currentSetIndex === index ? 'bg-bnb-green2 border-bnb-green2' : 'bg-transparent border-gray-300'}`}
                onClick={() => handleManualNavigation(index)}
                aria-label={`View image set ${index + 1}`}
              />
            ))}
          </div>
          
          <Button 
            variant="outline" 
            size="icon" 
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white/80 hover:bg-white rounded-full z-10"
            onClick={prevSet}
          >
            <ChevronLeft className="h-5 w-5" />
            <span className="sr-only">Previous</span>
          </Button>
          
          <Button 
            variant="outline" 
            size="icon" 
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white/80 hover:bg-white rounded-full z-10"
            onClick={nextSet}
          >
            <ChevronRight className="h-5 w-5" />
            <span className="sr-only">Next</span>
          </Button>
        </Carousel>
      </div>
    </section>
  );
};

export default Gallery;
