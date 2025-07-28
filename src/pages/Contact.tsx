import React from 'react';
import Header from '@/components/Header';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="section-container bg-accent">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-bnb-green2 mb-4">Contact & Booking</h1>
            <p className="text-bnb-green2 text-muted-foreground max-w-3xl mx-auto text-lg">
              Do you like the Green Woody Home and you want to book it? 
              Check our real-time availability through our calendar and get in touch with us for booking inquiries.
              This contact form is primarily used for booking Green Woody Home when available.
              We'll respond promptly with rates and booking details.
            </p>
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;