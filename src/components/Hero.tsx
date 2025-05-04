
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <img 
          src="/photos/GREEN WOODY HOME-04.jpg" 
          alt="Green Woody Home" 
          className="w-full h-full object-cover brightness-60"
          style={{ filter: 'brightness(0.7)' }}
        />
      </div>
      <div className="container relative z-10 mx-auto px-4 -translate-y-24">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4" style={{ color: '#B6E6AC' }}>
            Welcome to Green Woody Home
          </h1>
          <p className="text-xl md:text-2xl mb-8" style={{ color: '#B6E6AC' }}>
            Your perfect retreat in nature, combining modern comfort with rustic charm
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild className="bg-bnb-green2 hover:bg-bnb-green2/90 text-gray font-medium px-6 py-6">
              <a href="#gallery">View Our Gallery</a>
            </Button>
            <Button asChild variant="outline" className="bg-white/20 backdrop-blur-sm border-white hover:bg-white/30 px-6 py-6" style={{ color: '#B6E6AC' }}>
              <a href="#contact">Contact Us</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
