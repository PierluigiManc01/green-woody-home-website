
import React from 'react';
import { Button } from '@/components/ui/button';

const About: React.FC = () => {
  return (
    <section id="about" className="section-container bg-gray/80">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-bnb-green2 mb-6 text-center">About Our Space</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <p className="text-lg leading-relaxed">
            Green Woody Home is an eco-friendly retreat nestled in the serene countryside of Rome, perfectly balancing nature and convenience. <br /> 
            Fully powered by solar energy, our villa offers a sustainable escape just 30 minutes from the historic city center and 15 minutes from the seaside. Experience rustic charm, modern comfort, and a unique connection to nature—all in one exclusive location.
            </p>
            
            <div className="grid grid-cols-2 gap-6 my-8">
              <div className="text-center p-4 bg-bnb-green2 rounded-lg shadow-sm">
                <span className="block text-3xl font-bold text-bnb-dark_gray">3</span>
                <span className="text-sm text-bnb-dark_gray">Bedrooms</span>
              </div>
              <div className="text-center p-4 bg-bnb-green2 rounded-lg shadow-sm">
                <span className="block text-3xl font-bold text-bnb-dark_gray">3</span>
                <span className="text-sm text-bnb-dark_gray">Bathrooms</span>
              </div>
              <div className="text-center p-4 bg-bnb-green2 rounded-lg shadow-sm">
                <span className="block text-3xl font-bold text-bnb-dark_gray">120</span>
                <span className="text-sm text-bnb-dark_gray">m² Living Space</span>
              </div>
              <div className="text-center p-4 bg-bnb-green2 rounded-lg shadow-sm">
                <span className="block text-3xl font-bold text-bnb-dark_gray">1500</span>
                <span className="text-sm text-bnb-dark_gray">m² Garden</span>
              </div>
            </div>
            
          </div>
          
          <div className="relative">
            <img 
              src="/photos/GREEN WOODY HOME-02.jpg" 
              alt="Living space at Green Woody Home" 
              className="rounded-lg shadow-md w-full h-full object-cover"
            />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-bnb-green2 rounded-full -z-10"></div>
            <div className="absolute -top-4 -right-4 w-28 h-28 bg-bnb-wood opacity-20 rounded-full -z-10"></div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-bnb-green2 mb-6 text-center">Points of Interest</h2> 
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white/90 p-5 rounded-lg shadow-sm border-l-4 border-bnb-green2">
            <h3 className="font-bold text-lg text-bnb-green2">Colosseum</h3>
            <p className="text-sm mb-2">Ancient Roman amphitheater and iconic symbol of Imperial Rome.</p>
            <div className="flex items-center text-bnb-dark_gray">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>28 km • 35 min drive</span>
            </div>
          </div>
          
          <div className="bg-white/90 p-5 rounded-lg shadow-sm border-l-4 border-bnb-green2">
            <h3 className="font-bold text-lg text-bnb-green2">Vatican City</h3>
            <p className="text-sm mb-2">Home to St. Peter's Basilica and the Vatican Museums with the Sistine Chapel.</p>
            <div className="flex items-center text-bnb-dark_gray">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>32 km • 40 min drive</span>
            </div>
          </div>
          
          <div className="bg-white/90 p-5 rounded-lg shadow-sm border-l-4 border-bnb-green2">
            <h3 className="font-bold text-lg text-bnb-green2">Trevi Fountain</h3>
            <p className="text-sm mb-2">Baroque masterpiece and one of the most famous fountains in the world.</p>
            <div className="flex items-center text-bnb-dark_gray">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>25 km • 30 min drive</span>
            </div>
          </div>
          
          <div className="bg-white/90 p-5 rounded-lg shadow-sm border-l-4 border-bnb-green2">
            <h3 className="font-bold text-lg text-bnb-green2">Ostia Beach</h3>
            <p className="text-sm mb-2">Nearest seaside destination with sandy beaches and crystal clear waters.</p>
            <div className="flex items-center text-bnb-dark_gray">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>12 km • 15 min drive</span>
            </div>
          </div>
          
          <div className="bg-white/90 p-5 rounded-lg shadow-sm border-l-4 border-bnb-green2">
            <h3 className="font-bold text-lg text-bnb-green2">Tivoli Gardens</h3>
            <p className="text-sm mb-2">Renaissance garden with elaborate fountains and breathtaking views.</p>
            <div className="flex items-center text-bnb-dark_gray">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>22 km • 25 min drive</span>
            </div>
          </div>
          
          <div className="bg-white/90 p-5 rounded-lg shadow-sm border-l-4 border-bnb-green2">
            <h3 className="font-bold text-lg text-bnb-green2">Appian Way</h3>
            <p className="text-sm mb-2">Ancient Roman road with historical ruins and catacombs to explore.</p>
            <div className="flex items-center text-bnb-dark_gray">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>18 km • 20 min drive</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
