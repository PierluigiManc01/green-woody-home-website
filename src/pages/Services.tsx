import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Wifi, Coffee, Car, Utensils, Bed, Snowflake, Tv, Bath, Waves, Flame, Trees, Zap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Services: React.FC = () => {
  const { t } = useLanguage();
  const amenities = [
    { icon: <Wifi className="h-5 w-5" />, title: "Free WiFi" },
    { icon: <Snowflake className="h-5 w-5" />, title: "Air Conditioning" },
    { icon: <Bed className="h-5 w-5" />, title: "Premium Bedding" },
    { icon: <Coffee className="h-5 w-5" />, title: "Coffee & Tea" },
    { icon: <Utensils className="h-5 w-5" />, title: "Fully Equipped Kitchen" },
    { icon: <Car className="h-5 w-5" />, title: "Free Parking" },
    { icon: <Tv className="h-5 w-5" />, title: "Smart TV" },
    { icon: <Bath className="h-5 w-5" />, title: "Bathroom Essentials" },
    { icon: <Waves className="h-5 w-5" />, title: "Washing Machine" },
    { icon: <Flame className="h-5 w-5" />, title: "Barbecue" },
    { icon: <Trees className="h-5 w-5" />, title: "Garden" },
    { icon: <Zap className="h-5 w-5" />, title: "EV Charger" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/10 to-background py-16 section-container">
          <div className="container mx-auto px-4 text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-bnb-green2 mb-6">
              {t('services.title')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
              {t('services.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {amenities.map((amenity, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center gap-2 p-4 bg-background border-2 border-border rounded-xl hover:border-primary/20 transition-colors"
              >
                <div className="text-bnb-green2">
                  {amenity.icon}
                </div>
                <span className="text-sm font-medium text-center">{amenity.title}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Partnerships Section */}
        <section className="section-container bg-accent">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-bnb-green2 mb-4">
              Our Partnerships
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
              We collaborate with trusted partners to enhance your experience and provide 
              additional services during your stay.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-xl text-bnb-green2">Barazzutti Tennis Academy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  We can arrange tennis lessons and court bookings at the renowned Barazzutti Tennis Academy, 
                  located in the same private area. Perfect for both beginners and experienced players, you 
                  can enjoy personalized coaching from a Davis Cup champion.
                </p>
                <div className="flex items-center text-sm text-bnb-green2">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Private tennis lessons
                </div>
                <div className="flex items-center text-sm text-bnb-green2">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Court bookings available
                </div>
                <div className="flex items-center text-sm text-bnb-green2">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Explore more about the academy on their 
                  <a href="https://scuolatenniscorradobarazzutti.it/" 
                     className="text-bnb-green2 underline ml-1"
                     target="_blank" rel="noopener noreferrer">official website</a>. 
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-xl text-bnb-green2">Local Tour Guide</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Discover the beauty of the ancient city of Rome with our trusted local guide, available for personalized tours  
                  in different languages. Explore historical sites, hidden gems, and cultural experiences tailored to your interests.
                </p>
                <div className="flex items-center text-sm text-bnb-green2">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Rome city tours in multiple languages
                </div>
                <div className="flex items-center text-sm text-bnb-green2">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Customized itineraries based on your interests
                </div>
                <div className="flex items-center text-sm text-bnb-green2">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Contact us to arrange a tour and learn more about our guide's expertise.
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-xl text-bnb-green2">Private Chef</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Experience authentic local cuisine through our partnerships with Cristina Amato, a talented private chef.
                  Enjoy personalized meal preparation in the comfort of your accommodation, or join her cooking classes to learn 
                  traditional recipes and culinary techniques.

                </p>
                <div className="flex items-center text-sm text-bnb-green2">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Traditional cuisine menu options available
                </div>
                <div className="flex items-center text-sm text-bnb-green2">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Cooking classes available for all skill levels
                </div>
                <div className="flex items-center text-sm text-bnb-green2">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Contact us to book a private chef experience or cooking class.
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-xl text-bnb-green2">Castrum Legionis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Step back into the history of the Gladiator of Rome and immerse yourself in the history of ancient Rome with a unique experience at Castrum Legionis. Just downhill from our property (200m away),
                  you can experience a leap back in time becoming a gladiator for a day in a historical archeological setting where ancient civilization once lived.
                  Wear authentic clothing and belts as you train on a field that could be the same as centuries ago.
                </p>
                <div className="flex items-center text-sm text-bnb-green2">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Practice sword fighting, archery, and marching like real soldiers
                </div>
                <div className="flex items-center text-sm text-bnb-green2">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Breathe in the history of the ancient Roman Empire for a day in a unique archeological setting
                </div>
              </CardContent>
            </Card>
            
          </div>

          <div className="text-center mt-12">
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
              Interested in any of these services? Contact us to arrange bookings and get more information 
              about our partnerships and special offers.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;