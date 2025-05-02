
import React from 'react';

// Sample image data
const images = [
  {
    id: 1,
    src: "cozy-contact-haven/photos/GREEN WOODY HOME-04.jpg",
    alt: "Wooden cabin exterior surrounded by trees",
  },
  {
    id: 2,
    src: "photos/GREEN WOODY HOME-07.jpg",
    alt: "Cozy living room with wooden beams",
  },
  {
    id: 3,
    src: "photos/GREEN WOODY HOME-25.jpg",
    alt: "Modern kitchen with wooden elements",
  },
  {
    id: 4,
    src: "photos/GREEN WOODY HOME-36.jpg", 
    alt: "Bedroom with large windows facing nature",
  },
  {
    id: 5,
    src: "photos/GREEN WOODY HOME-20.jpg",
    alt: "Bathroom with natural stone elements",
  },
  {
    id: 6,
    src: "photos/GREEN WOODY HOME-10.jpg",
    alt: "Outdoor deck with lounge chairs",
  }
];

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="section-container bg-accent">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-bnb-green2 mb-4">Explore Our Space</h2>
        <p className="text-bnb-green2 text-muted-foreground max-w-2xl mx-auto">
          Take a virtual tour through our beautiful space and imagine your stay in our nature retreat
        </p>
      </div>
      
      <div className="image-gallery">
        {images.map((image) => (
          <div key={image.id} className="overflow-hidden rounded-lg">
            <img 
              src={image.src} 
              alt={image.alt} 
              className="w-full h-64 md:h-80 object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
