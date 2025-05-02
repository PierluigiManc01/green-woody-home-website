
import React from 'react';

// Sample image data - replace with your actual BnB photos
const images = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1613977257363-707b9b1151c0?ixlib=rb-4.0.3",
    alt: "Wooden cabin exterior surrounded by trees",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?ixlib=rb-4.0.3",
    alt: "Cozy living room with wooden beams",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1613575831056-0acd5da8f085?ixlib=rb-4.0.3",
    alt: "Modern kitchen with wooden elements",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1613575837971-f2b1cfbbc052?ixlib=rb-4.0.3", 
    alt: "Bedroom with large windows facing nature",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1594513414898-0f74bd078c06?ixlib=rb-4.0.3",
    alt: "Bathroom with natural stone elements",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3",
    alt: "Outdoor deck with lounge chairs",
  }
];

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="section-container bg-accent">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-bnb-green mb-4">Explore Our Space</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
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
