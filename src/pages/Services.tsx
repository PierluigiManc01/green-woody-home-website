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
    { icon: <Utensils className="h-6 w-6" />, title: "Fully Equipped Kitchen", description: "Everything you need to cook meals" },
    { icon: <Car className="h-6 w-6" />, title: "Free Parking", description: "Dedicated parking space available" },
    { icon: <Tv className="h-6 w-6" />, title: "Smart TV", description: "Entertainment system with streaming services" },
    { icon: <Bath className="h-6 w-6" />, title: "Bathroom Essentials", description: "Towels, shampoo, and toiletries provided" },
    { icon: <Waves className="h-6 w-6" />, title: "Hot Water", description: "24/7 hot water availability" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/10 to-background py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-bnb-green2 mb-6">
              Our Services & Amenities
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience comfort and convenience with our comprehensive range of services 
              designed to make your stay memorable and relaxing.
            </p>
          </div>
        </section>

        {/* Amenities Section */}
        <section className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-bnb-green2 mb-4">
              House Amenities
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need for a comfortable stay is provided. Our property comes 
              fully equipped with modern amenities and thoughtful touches.
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
                <CardTitle className="text-xl text-bnb-green2">Local Tour Operators</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Discover the beauty of the surrounding nature with our trusted local tour guides. 
                  From hiking trails to cultural experiences, we can arrange memorable adventures.
                </p>
                <div className="flex items-center text-sm text-bnb-green2">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Hiking and nature walks
                </div>
                <div className="flex items-center text-sm text-bnb-green2">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Cultural site visits
                </div>
                <div className="flex items-center text-sm text-bnb-green2">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Photography tours
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-xl text-bnb-green2">Local Restaurants & Cafes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Experience authentic local cuisine through our partnerships with nearby restaurants 
                  and cafes. Enjoy special discounts and recommendations.
                </p>
                <div className="flex items-center text-sm text-bnb-green2">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Traditional cuisine recommendations
                </div>
                <div className="flex items-center text-sm text-bnb-green2">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Special guest discounts
                </div>
                <div className="flex items-center text-sm text-bnb-green2">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Delivery services
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-xl text-bnb-green2">Transportation Services</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Reliable transportation options to help you explore the area or reach your destination 
                  with ease through our trusted partners.
                </p>
                <div className="flex items-center text-sm text-bnb-green2">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Airport transfers
                </div>
                <div className="flex items-center text-sm text-bnb-green2">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Local taxi services
                </div>
                <div className="flex items-center text-sm text-bnb-green2">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Car rental assistance
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-xl text-bnb-green2">Wellness & Spa</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Relax and rejuvenate with our wellness partners offering massage, spa treatments, 
                  and wellness activities right at your doorstep.
                </p>
                <div className="flex items-center text-sm text-bnb-green2">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  In-house massage services
                </div>
                <div className="flex items-center text-sm text-bnb-green2">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Yoga and meditation sessions
                </div>
                <div className="flex items-center text-sm text-bnb-green2">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Wellness consultations
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