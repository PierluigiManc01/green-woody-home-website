
import React from 'react';
import { Button } from '@/components/ui/button';

const About: React.FC = () => {
  return (
    <section id="about" className="section-container bg-bnb-stone">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-bnb-green2 mb-6 text-center">About Our Space</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <p className="text-lg leading-relaxed">
              Green Woody Home is a charming eco-conscious retreat nestled in Rome's countryside, 
              offering the perfect blend of rustic charm and modern comfort. Between the beauty of the city and the breaths of the sea, enjoy your stay in an exclusive location . Fully powered by 
              solar energy, our home respects nature while providing all the amenities you need.
            </p>
            
            <div className="grid grid-cols-2 gap-6 my-8">
              <div className="text-center p-4 bg-bnb-cream rounded-lg shadow-sm">
                <span className="block text-3xl font-bold text-bnb-green2">3</span>
                <span className="text-sm text-bnb-dark_gray">Bedrooms</span>
              </div>
              <div className="text-center p-4 bg-bnb-cream rounded-lg shadow-sm">
                <span className="block text-3xl font-bold text-bnb-green2">3</span>
                <span className="text-sm text-bnb-dark_gray">Bathrooms</span>
              </div>
              <div className="text-center p-4 bg-bnb-cream rounded-lg shadow-sm">
                <span className="block text-3xl font-bold text-bnb-green">120</span>
                <span className="text-sm text-bnb-dark_gray">m² Living Space</span>
              </div>
              <div className="text-center p-4 bg-bnb-cream rounded-lg shadow-sm">
                <span className="block text-3xl font-bold text-bnb-green">1500</span>
                <span className="text-sm text-bnb-dark_gray">m² Garden</span>
              </div>
            </div>
            
            <Button asChild className="bg-bnb-green2 hover:bg-bnb-green/90 text-bnb-dark_gray">
              <a href="#gallery">Explore Our Gallery</a>
            </Button>
          </div>
          
          <div className="relative">
            <img 
              src="/photos/GREEN WOODY HOME-02.jpg" 
              alt="Living space at Green Woody Home" 
              className="rounded-lg shadow-md w-full h-full object-cover"
            />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-bnb-green2 rounded-full -z-10"></div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-bnb-wood opacity-20 rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
