import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Wifi, Coffee, Car, Utensils, Bed, Snowflake, Tv, Bath, Waves } from 'lucide-react';

const Services: React.FC = () => {
  const amenities = [
    { icon: <Wifi className="h-6 w-6" />, title: "Free WiFi", description: "High-speed internet throughout the property" },
    { icon: <Snowflake className="h-6 w-6" />, title: "Air Conditioning", description: "Climate control in all rooms" },
    { icon: <Bed className="h-6 w-6" />, title: "Premium Bedding", description: "Fresh linens and comfortable mattresses" },
    { icon: <Coffee className="h-6 w-6" />, title: "Coffee & Tea", description: "Complimentary coffee and tea selection" },
    { icon: <Utensils className="h-6 w-6" />, title: "Fully Equipped Kitchen", description: "Everything you need to cook meals and clean up afterwards" },
    { icon: <Car className="h-6 w-6" />, title: "Free Parking", description: "Dedicated private parking space available in courtyard" },
    { icon: <Tv className="h-6 w-6" />, title: "Smart TV", description: "Entertainment system with streaming services" },
    { icon: <Bath className="h-6 w-6" />, title: "Bathroom Essentials", description: "Towels, shampoo, and toiletries provided" },
    { icon: <Waves className="h-6 w-6" />, title: "Washing Machine", description: "In-unit washing machine for your convenience" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/10 to-background py-16 section-container">
          <div className="container mx-auto px-4 text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-bnb-green2 mb-6">
              Our Services & Amenities
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
              Experience comfort and convenience with our comprehensive range of services 
              designed to make your stay memorable and relaxing. Everything you need for a comfortable stay is provided.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {amenities.map((amenity, index) => (
              <Card key={index} className="border-2 hover:border-primary/20 transition-colors">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-2 text-bnb-green2">
                    {amenity.icon}
                  </div>
                  <CardTitle className="text-lg">{amenity.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">{amenity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Partnerships Section */}
        <section className="section-container bg-accent">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-bnb-green2 mb-4">
              Our Partnerships
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
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
                <CardTitle className="text-xl text-bnb-green2">Transportation Services</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Reliable private vans to help you explore the area or reach your destination 
                  with ease through our trusted partners. 
                  Recall that our property is accessible almost only by car, so we strongly recommend arranging transportation in advance for your convenience.
                </p>
                <div className="flex items-center text-sm text-bnb-green2">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Airport transfers
                </div>
                <div className="flex items-center text-sm text-bnb-green2">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Local taxi services (NCC)
                </div>
              </CardContent>
            </Card>
            
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground">
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