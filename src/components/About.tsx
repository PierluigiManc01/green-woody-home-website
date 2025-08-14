
import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="section-container bg-gray/80">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-bnb-green2 mb-6 text-center">{t('about.title')}</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <p className="text-lg leading-relaxed text-bnb-dark_gray" dangerouslySetInnerHTML={{ __html: t('about.description') }}>
            </p>
            
            <div className="grid grid-cols-2 gap-6 my-8">
              <div className="text-center p-4 bg-bnb-green2 rounded-lg shadow-sm">
                <span className="block text-3xl font-bold text-bnb-dark_gray">3</span>
                <span className="text-sm text-bnb-dark_gray">{t('about.bedrooms')}</span>
              </div>
              <div className="text-center p-4 bg-bnb-green2 rounded-lg shadow-sm">
                <span className="block text-3xl font-bold text-bnb-dark_gray">3</span>
                <span className="text-sm text-bnb-dark_gray">{t('about.bathrooms')}</span>
              </div>
              <div className="text-center p-4 bg-bnb-green2 rounded-lg shadow-sm">
                <span className="block text-3xl font-bold text-bnb-dark_gray">120</span>
                <span className="text-sm text-bnb-dark_gray">{t('about.livingSpace')}</span>
              </div>
              <div className="text-center p-4 bg-bnb-green2 rounded-lg shadow-sm">
                <span className="block text-3xl font-bold text-bnb-dark_gray">1500</span>
                <span className="text-sm text-bnb-dark_gray">{t('about.garden')}</span>
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

      <div id= "PoI" className="mt-20 pt-10 max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-bnb-green2 mb-6 text-center">{t('about.poi.title')}</h2> 
        <p className="text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto">
          {t('about.poi.description')}
        </p>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <a href="https://www.google.it/maps/dir/Via+Clarice+Tartufari,+00128+Castel+di+Decima+RM/Colosseo,+Roma,+RM/@41.8268438,12.3890226,12z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x13258d2aab8598f9:0xd5d8baeb741056a2!2m2!1d12.4381951!2d41.7562463!1m5!1m1!1s0x132f61b6fc6433df:0x165f79d5d2332163!2m2!1d12.4922986!2d41.8905691!3e0?hl=it&entry=ttu&g_ep=EgoyMDI1MDQzMC4xIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
            <div className="bg-bnb-dark_gray p-5 rounded-lg hover:bg-bnb-green2 h-40 flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-lg text-bnb-green2 hover:text-bnb-dark_gray">{t('about.poi.colosseum')}</h3>
                <p className="text-sm mb-2 text-white">{t('about.poi.colosseum.desc')}</p>
              </div>
              <div className="flex items-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>19 km • 28 min {t('about.car')}</span>
              </div>
            </div>
          </a>
          <a href="https://www.google.it/maps/dir/Via+Clarice+Tartufari,+00128+Castel+di+Decima+RM/Basilica+di+San+Pietro,+Piazza+San+Pietro,+Citt%C3%A0+del+Vaticano/@41.8319928,12.3536945,12z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x13258d2aab8598f9:0xd5d8baeb741056a2!2m2!1d12.4381951!2d41.7562463!1m5!1m1!1s0x132f6061b7149b59:0x724bf077cd875283!2m2!1d12.4539367!2d41.9021667!3e0?hl=it&entry=ttu&g_ep=EgoyMDI1MDQzMC4xIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
            <div className="bg-bnb-dark_gray p-5 rounded-lg hover:bg-bnb-green2 h-40 flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-lg text-bnb-green2 hover:text-bnb-dark_gray">{t('about.poi.vatican')}</h3>
                <p className="text-sm mb-2 text-white">{t('about.poi.vatican.desc')}</p>
              </div>
              <div className="flex items-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>21 km • 32 min {t('about.car')}</span>
              </div>
            </div>
          </a>
          <a href="https://www.google.it/maps/dir/Via+Clarice+Tartufari,+00128+Castel+di+Decima+RM/Fontana+di+Trevi,+Piazza+di+Trevi,+Roma,+RM/@41.8292617,12.3859549,12z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x13258d2aab8598f9:0xd5d8baeb741056a2!2m2!1d12.4381951!2d41.7562463!1m5!1m1!1s0x132f6053278340d5:0xf676f1e1cc02bbb6!2m2!1d12.483313!2d41.9009325!3e0?hl=it&entry=ttu&g_ep=EgoyMDI1MDQzMC4xIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
            <div className="bg-bnb-dark_gray p-5 rounded-lg hover:bg-bnb-green2 h-40 flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-lg text-bnb-green2 hover:text-bnb-dark_gray">{t('about.poi.trevi')}</h3>
                <p className="text-sm mb-2 text-white">{t('about.poi.trevi.desc')}</p>
              </div>
              <div className="flex items-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>19 km • 35 min {t('about.car')}</span>
              </div>
            </div>
          </a>
          <a href="https://www.google.it/maps/dir/Via+Clarice+Tartufari,+00128+Castel+di+Decima+RM/Torvaianica,+RM/@41.6909742,12.3786637,12z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x13258d2aab8598f9:0xd5d8baeb741056a2!2m2!1d12.4381951!2d41.7562463!1m5!1m1!1s0x13259495b27fba5f:0xa364b19248f13614!2m2!1d12.4626387!2d41.6208388!3e0?hl=it&entry=ttu&g_ep=EgoyMDI1MDQzMC4xIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
            <div className="bg-bnb-dark_gray p-5 rounded-lg hover:bg-bnb-green2 h-40 flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-lg text-bnb-green2 hover:text-bnb-dark_gray">{t('about.poi.torvaianica')}</h3>
                <p className="text-sm mb-2 text-white">{t('about.poi.torvaianica.desc')}</p>
              </div>
              <div className="flex items-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>20 km • 22 min {t('about.car')}</span>
              </div>
            </div>
          </a>
          <a href="https://www.google.it/maps/dir/Via+Clarice+Tartufari,+00128+Castel+di+Decima+RM/Aeroporto+di+Roma+-+Fiumicino+Leonardo+da+Vinci+(FCO),+00054+Fiumicino+RM/@41.7882109,12.2713693,12z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x13258d2aab8598f9:0xd5d8baeb741056a2!2m2!1d12.4381951!2d41.7562463!1m5!1m1!1s0x1325f0793898141f:0xafe513b4e358316f!2m2!1d12.2519211!2d41.8034632!3e0?hl=it&entry=ttu&g_ep=EgoyMDI1MDQzMC4xIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
            <div className="bg-bnb-dark_gray p-5 rounded-lg hover:bg-bnb-green2 h-40 flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-lg text-bnb-green2 hover:text-bnb-dark_gray">{t('about.poi.airport')}</h3>
                <p className="text-sm mb-2 text-white">{t('about.poi.airport.desc')}</p>
              </div>
              <div className="flex items-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>23 km • 22 min {t('about.car')}</span>
              </div>
            </div>
          </a>
          <a href="https://www.google.it/maps/dir/Via+Clarice+Tartufari,+00128+Castel+di+Decima+RM/Castel+Romano+Designer+Outlet,+Via+del+Ponte+di+Piscina+Cupa,+Roma,+RM/@41.7388889,12.4197819,14z/data=!3m2!4b1!5s0x13258d566c32cfe1:0x1e54ca82e3967825!4m14!4m13!1m5!1m1!1s0x13258d2aab8598f9:0xd5d8baeb741056a2!2m2!1d12.4381951!2d41.7562463!1m5!1m1!1s0x13258d57b3d81535:0x946b0e95e6647303!2m2!1d12.4444627!2d41.7168651!3e0?hl=it&entry=ttu&g_ep=EgoyMDI1MDQzMC4xIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
            <div className="bg-bnb-dark_gray p-5 rounded-lg hover:bg-bnb-green2 h-40 flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-lg text-bnb-green2 hover:text-bnb-dark_gray">{t('about.poi.outlet')}</h3>
                <p className="text-sm mb-2 text-white">{t('about.poi.outlet.desc')}</p>
              </div>
              <div className="flex items-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>7 km • 8 min {t('about.car')}</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
