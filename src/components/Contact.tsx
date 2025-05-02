
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // In a real app, you would send this data to your backend
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
  };

  return (
    <section id="contact" className="section-container bg-bnb-beige">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-bnb-green mb-4">Get in Touch</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Have questions or want to book directly? Contact us using any of these methods
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-display mb-6 text-bnb-dark">Contact Methods</h3>
          
          <div className="space-y-4">
            <a href="tel:+123456789" className="contact-method">
              <div className="w-10 h-10 rounded-full bg-bnb-green flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div>
                <p className="font-medium">Phone</p>
                <p className="text-sm text-muted-foreground">+1 (234) 567-8900</p>
              </div>
            </a>
            
            <a href="mailto:info@greenwoody.home" className="contact-method">
              <div className="w-10 h-10 rounded-full bg-bnb-green flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div>
                <p className="font-medium">Email</p>
                <p className="text-sm text-muted-foreground">info@greenwoody.home</p>
              </div>
            </a>
            
            <div className="contact-method">
              <div className="w-10 h-10 rounded-full bg-bnb-green flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div>
                <p className="font-medium">Address</p>
                <p className="text-sm text-muted-foreground">123 Forest Lane, Green Valley</p>
              </div>
            </div>
          </div>
          
          <div className="mt-10">
            <h3 className="text-2xl font-display mb-4 text-bnb-dark">Find Us Online</h3>
            <div className="space-y-3">
              <a href="https://www.airbnb.it/h/green-woody-home" target="_blank" rel="noopener noreferrer" className="contact-method">
                <div className="w-10 h-10 rounded-full bg-bnb-wood flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"></path>
                    <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2"></path>
                    <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8"></path>
                    <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"></path>
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Airbnb</p>
                  <p className="text-sm text-muted-foreground">Visit our Airbnb listing</p>
                </div>
              </a>
              
              <a href="#" target="_blank" rel="noopener noreferrer" className="contact-method">
                <div className="w-10 h-10 rounded-full bg-bnb-wood flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M2 12h20"></path>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Booking.com</p>
                  <p className="text-sm text-muted-foreground">Check availability on Booking.com</p>
                </div>
              </a>
              
              <a href="#" target="_blank" rel="noopener noreferrer" className="contact-method">
                <div className="w-10 h-10 rounded-full bg-bnb-wood flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Facebook</p>
                  <p className="text-sm text-muted-foreground">Follow us on Facebook</p>
                </div>
              </a>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-display mb-6 text-bnb-dark">Send Us a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="first-name" className="text-sm font-medium">First Name</label>
                <Input id="first-name" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="last-name" className="text-sm font-medium">Last Name</label>
                <Input id="last-name" required />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">Email</label>
              <Input id="email" type="email" required />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium">Phone (optional)</label>
              <Input id="phone" type="tel" />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">Message</label>
              <Textarea id="message" rows={5} required />
            </div>
            
            <Button type="submit" className="w-full bg-bnb-green hover:bg-bnb-green/90">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
