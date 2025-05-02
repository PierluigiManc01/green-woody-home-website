
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-[90vh] flex items-center">
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1613977257363-707b9b1151c0?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1470")', filter: 'brightness(0.7)' }}
        ></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Welcome to Green Woody Home
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Your perfect retreat in nature, combining modern comfort with rustic charm
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild className="bg-bnb-green hover:bg-bnb-green/90 text-white font-medium px-6 py-6">
              <a href="#gallery">View Our Gallery</a>
            </Button>
            <Button asChild variant="outline" className="bg-white/20 backdrop-blur-sm border-white hover:bg-white/30 text-white px-6 py-6">
              <a href="#contact">Contact Us</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
