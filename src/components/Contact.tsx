import React, { useRef, useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';
import { Calendar } from '@/components/ui/calendar';
import { Instagram, Phone, Mail, MapPin, Calendar as CalendarIcon, Euro } from 'lucide-react';
import emailjs from '@emailjs/browser';
import ICAL from 'ical.js';
import { useLanguage } from '@/contexts/LanguageContext';


const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [unavailableDates, setUnavailableDates] = useState<Date[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useLanguage();

  // Helper to enumerate all dates in an inclusive date range
  const getAllDatesInRange = (start: Date, end: Date) => {
    const dates: Date[] = [];
    let current = new Date(start);
    while (current <= end) {
      dates.push(new Date(current));
      current.setDate(current.getDate() + 1);
    }
    return dates;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_kfqi9r6",
          "template_bzd6sal",
          form.current,
          "OcfiSI6EWgrMuMT6d"
        )
        .then(
          () => {
            toast({
              title: t('contact.success'),
              description: t('contact.success'),
            });
            form.current?.reset();
          },
          (error) => {
            console.error("FAILED...", error.text);
            toast({
              title: t('contact.error'),
              description: t('contact.error'),
              variant: "destructive",
            });
          }
        );
    }
  };

  const fetchCalendarData = async () => {
  setIsLoading(true);
  try {
    const response = await fetch('/api/calendar');

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    
    // ✅ Check if calendars exists and is an array
    if (!data.calendars || !Array.isArray(data.calendars)) {
      throw new Error('Invalid calendar data structure received');
    }

    const { calendars } = data;
    let allBlockedDates = [];

    // Process each calendar separately
    calendars.forEach((calendar, index) => {
      try {
        // ✅ Validate calendar object structure
        if (!calendar || !calendar.data || !calendar.source) {
          console.warn(`Invalid calendar object at index ${index}`);
          return;
        }
        
        console.log(`Processing ${calendar.source} calendar...`);
        
        // Parse individual calendar
        const jcalData = ICAL.parse(calendar.data);
        const comp = new ICAL.Component(jcalData);
        const vevents = comp.getAllSubcomponents('vevent');

        vevents.forEach((vevent) => {
          try {
            const event = new ICAL.Event(vevent);
            const start = event.startDate.toJSDate();
            const end = event.endDate.toJSDate();

            if (isNaN(start.getTime()) || isNaN(end.getTime())) {
              return;
            }

            const endInclusive = new Date(end);
            endInclusive.setDate(endInclusive.getDate() - 1);

            const eventDates = getAllDatesInRange(start, endInclusive);
            allBlockedDates = allBlockedDates.concat(eventDates);
          } catch (eventError) {
            console.warn(`Error processing event in ${calendar.source}:`, eventError);
          }
        });
      } catch (calendarError) {
        console.warn(`Error processing ${calendar.source} calendar:`, calendarError);
      }
    });

    // Remove duplicate dates
    const uniqueBlockedDates = allBlockedDates.filter((date, index, arr) => 
      arr.findIndex(d => d.toDateString() === date.toDateString()) === index
    );

    setUnavailableDates(uniqueBlockedDates);
    setLastUpdated(new Date());

    localStorage.setItem('last-calendar-update', new Date().toISOString());
    localStorage.setItem('unavailable-dates', JSON.stringify(uniqueBlockedDates.map(d => d.toISOString())));
    
  } catch (error) {
    console.error('Calendar fetch error:', error);
    toast({
      title: "Calendar Update Failed",
      description: `Error: ${error.message}`,
      variant: "destructive",
    });
  } finally {
    setIsLoading(false);
  }
};


  useEffect(() => {
    const refreshData = async () => {
      await fetchCalendarData();
    };

    // Load cached dates from localStorage for instant UI
    const storedDates = localStorage.getItem('unavailable-dates');
    if (storedDates) {
      try {
        setUnavailableDates(JSON.parse(storedDates).map((iso: string) => new Date(iso)));
      } catch {
        // Ignore JSON errors, fallback to fetch new data
      }
    }
    const last = localStorage.getItem('last-calendar-update');
    if (last) setLastUpdated(new Date(last));

    // If more than 12 hours elapsed since last update, refresh
    const now = Date.now();
    const lastUpdate = last ? new Date(last).getTime() : 0;
    if (!lastUpdate || now - lastUpdate > 12 * 60 * 60 * 1000) {
      refreshData();
    }

    // Set refresh interval every 12 hours while component is mounted
    const interval = setInterval(refreshData, 12 * 60 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Calendar Availability Section */}
      <section className="section-container bg-bnb-green2/10">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-bnb-green2 mb-4">{t('contact.availability')}</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('contact.availability.check')}
          </p>
        </div>

        <div className="w-full md:w-[90%] lg:w-[80%] mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-10">
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-2xl font-display mb-4 text-bnb-dark flex items-center gap-2">
                  <CalendarIcon className="w-6 h-6" />
                  {t('contact.availability')}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {t('contact.availability.check')}
                </p>

                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-4 w-full">
                    {isLoading ? (
                      <div className="text-center py-8">
                      <p className="text-muted-foreground">Loading calendar...</p>
                      </div>
                    ) : (
                      <div className="flex justify-center w-full">
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        disabled={date => {
                        if (date < new Date()) return true;
                        return unavailableDates.some(ud => date.toDateString() === ud.toDateString());
                        }}
                        modifiers={{
                        unavailable: unavailableDates.filter(date => date >= new Date())
                        }}
                        modifiersClassNames={{
                        unavailable: "bg-red-500 text-white hover:bg-red-600 line-through"
                        }}
                        className="rounded-md border pointer-events-auto w-full max-w-sm mx-auto"
                        classNames={{
                        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0 w-full",
                        month: "space-y-4 w-full",
                        caption: "flex justify-center pt-1 relative items-center text-base font-semibold",
                        table: "w-full border-collapse space-y-1",
                        head_row: "flex w-full",
                        head_cell: "text-muted-foreground rounded-md flex-1 h-8 md:h-10 font-normal text-xs md:text-sm flex items-center justify-center",
                        row: "flex w-full mt-1",
                        cell: "relative p-0 text-center text-xs md:text-sm focus-within:relative focus-within:z-20 flex-1 h-8 md:h-10",
                        day: "h-8 md:h-10 w-full p-0 font-normal flex items-center justify-center rounded-md hover:bg-accent hover:text-accent-foreground text-xs md:text-sm",
                        day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
                        day_today: "bg-accent text-accent-foreground font-semibold",
                        day_outside: "text-muted-foreground opacity-50",
                        day_disabled: "text-muted-foreground opacity-50"
                        }}
                      />
                      </div>
                    )}
                  </div>
                  {lastUpdated && (
                    <p className="text-sm text-muted-foreground">
                      Last updated: {lastUpdated.toLocaleDateString()} at {lastUpdated.toLocaleTimeString()}
                    </p>
                  )}
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-primary rounded"></div>
                      <span>Available</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded"></div>
                      <span>Unavailable</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-display mb-4 text-bnb-dark flex items-center gap-2">
                  <Euro className="w-6 h-6" />
                  Pricing Information
                </h3>
                <div className="space-y-4">
                  <div className="bg-bnb-green2/10 rounded-lg p-4">
                    <h4 className="font-semibold text-bnb-green2 mb-2">Starting Rate</h4>
                    <p className="text-2xl font-bold text-bnb-dark">€120 <span className="text-sm font-normal">per night</span></p>
                  </div>
                  
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>• Prices vary by season and availability</p>
                    <p>• Weekly discounts available</p>
                    <p>• Final price includes all fees and taxes</p>
                    <p>• Contact us for extended stays</p>
                  </div>
                  
                  <div className="pt-4">
                    <p className="text-sm text-muted-foreground">
                      For the most up-to-date pricing and to make a reservation, 
                      please use the contact form below or visit our Airbnb listing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section-container bg-bnb-stone2">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-bnb-green2 mb-4">{t('contact.title')}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-display mb-6 text-bnb-dark">Contact Methods</h3>
          <h4 className="text-md text-muted-foreground"><strong>Click the buttons</strong> to contact us!</h4>
          <div className="space-y-4">
            <a href="tel:+393358158411" className="contact-method">
              <div className="w-10 h-10 rounded-full bg-bnb-green2 flex items-center justify-center text-dark_gray">
                <Phone size={20} />
              </div>
              <div>
                <p className="font-medium">Phone</p>
                <p className="text-sm text-muted-foreground">(+06) 5847332</p>
              </div>
            </a>
            
            <a href="mailto:gigi.mancinelli@gmail.com" className="contact-method">
              <div className="w-10 h-10 rounded-full bg-bnb-green2 flex items-center justify-center text-dark_gray">
                <Mail size={20} />
              </div>
              <div>
                <p className="font-medium">Email</p>
                <p className="text-sm text-muted-foreground">info@greenwoody.home</p>
              </div>
            </a>
           
            <a href="https://maps.app.goo.gl/X9LD4aB8ZLAtTfGK8" target="_blank" rel="noopener noreferrer" className="contact-method">
              <div className="w-10 h-10 rounded-full bg-bnb-green2 flex items-center justify-center text-dark_gray">
                <MapPin size={20} />
              </div>
              <div>
                <p className="font-medium">Location</p>
                <p className="text-sm text-muted-foreground">View on Google Maps</p>
              </div>
            </a>
          </div>
          
          <div className="mt-10">
            <h3 className="text-2xl font-display mb-4 text-bnb-dark">Find Us Online</h3>
            <div className="space-y-3">
              <a href="https://www.airbnb.it/h/green-woody-home" target="_blank" rel="noopener noreferrer" className="contact-method">
                <div>
                  <svg width="24" height="24" viewBox="0 0 1991.3 2143.2" xmlns="http://www.w3.org/2000/svg">
                    <path d="m1851.6 1735.6c-15 111.6-90.1 208.1-195.2 251-51.5 21.4-107.3 27.9-163.1 21.4-53.6-6.4-107.3-23.6-163-55.7-77.2-43-154.5-109.4-244.6-208.1 141.6-173.8 227.4-332.5 259.6-474.1 15-66.5 17.2-126.6 10.7-182.4-8.6-53.6-27.9-103-57.9-145.9-66.5-96.5-178.1-152.3-302.5-152.3s-236 57.9-302.5 152.3c-30 42.9-49.3 92.3-57.9 145.9-8.6 55.8-6.4 118 10.7 182.4 32.2 141.6 120.1 302.5 259.6 476.2-88 98.7-167.3 165.2-244.6 208.1-55.8 32.2-109.4 49.4-163 55.8-55.3 6.2-111.2-1.2-163-21.4-105.1-42.9-180.2-139.5-195.2-251-6.4-53.6-2.1-107.2 19.3-167.3 6.4-21.5 17.2-42.9 27.9-68.6 15-34.3 32.2-70.8 49.3-107.3l2.2-4.3c148-319.7 306.8-645.8 472-963.3l6.4-12.9c17.2-32.1 34.3-66.5 51.5-98.7 17.2-34.3 36.5-66.5 60.1-94.4 45.1-51.5 105.1-79.4 171.6-79.4s126.6 27.9 171.6 79.4c23.6 27.9 42.9 60.1 60.1 94.4 17.2 32.2 34.3 66.5 51.5 98.6l6.5 12.9c163 319.6 321.8 645.7 469.8 965.4v2.1c17.2 34.3 32.2 73 49.3 107.3 10.7 25.8 21.5 47.2 27.9 68.6 17.1 55.9 23.5 109.5 14.9 165.3zm-856-100.9c-115.8-145.9-190.9-283.2-216.7-399-10.7-49.4-12.9-92.3-6.4-130.9 4.3-34.3 17.2-64.4 34.3-90.1 40.8-57.9 109.4-94.4 188.8-94.4s150.2 34.4 188.8 94.4c17.2 25.8 30 55.8 34.3 90.1 6.4 38.6 4.3 83.7-6.4 130.9-25.7 113.7-100.8 251-216.7 399zm967.6-111.5c-10.7-25.7-21.5-53.6-32.2-77.2-17.2-38.6-34.3-75.1-49.4-109.4l-2.1-2.1c-148-321.8-306.8-647.9-474.1-969.7l-6.4-12.9c-17.2-32.2-34.3-66.5-51.5-100.8-21.5-38.6-42.9-79.4-77.2-118-68.7-85.9-167.4-133.1-272.5-133.1-107.3 0-203.8 47.2-274.7 128.7-32.2 38.6-55.8 79.4-77.2 118-17.2 34.3-34.3 68.6-51.5 100.8l-6.4 12.8c-165.2 321.8-326.1 647.9-474.1 969.7l-2.1 4.3c-15 34.3-32.2 70.8-49.4 109.4-11.5 25.4-22.2 51.2-32.2 77.2-27.9 79.4-36.5 154.5-25.8 231.7 23.6 160.9 130.9 296.1 278.9 356.1 55.8 23.6 113.7 34.3 173.8 34.3 17.2 0 38.6-2.1 55.8-4.3 70.8-8.6 143.7-32.1 214.5-72.9 88-49.3 171.6-120.1 266-223.1 94.4 103 180.2 173.8 266 223.1 70.8 40.8 143.7 64.3 214.5 72.9 17.2 2.2 38.6 4.3 55.8 4.3 60.1 0 120.1-10.7 173.8-34.3 150.2-60.1 255.3-197.4 278.9-356.1 17.2-75 8.6-150-19.2-229.4z" fill="#e0565b"/>
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Airbnb</p>
                  <p className="text-sm text-muted-foreground">Visit our Airbnb listing</p>
                </div>
              </a>
              
              <a href="https://www.booking.com/hotel/it/green-woody-home" target="_blank" rel="noopener noreferrer" className="contact-method">
                <div>
                  <svg width="24" height="24" viewBox="0 0 2732 2672" xmlns="http://www.w3.org/2000/svg">
                    <path d="m2732.032 513.03c0-283.141-229.978-513.015-513.118-513.015h-1705.89c-283.138 0-513.116 229.874-513.116 513.015v1645.965c0 283.066 229.978 513.016 513.118 513.016h1705.889c283.14 0 513.118-229.95 513.118-513.016z" fill="#0c3b7c"/>
                    <path d="m.001 1659.991h1364.531v1012.019h-1364.53z" fill="#0c3b7c"/>
                    <g fill-rule="nonzero">
                      <path d="m1241.6 1768.638-220.052-.22v-263.12c0-56.22 21.808-85.48 69.917-92.165h150.136c107.068 0 176.328 67.507 176.328 176.766 0 112.219-67.507 178.63-176.328 178.739zm-220.052-709.694v-69.26c0-60.602 25.643-89.424 81.862-93.15h112.657c96.547 0 154.41 57.753 154.41 154.52 0 73.643-39.671 159.67-150.903 159.67h-198.026zm501.037 262.574-39.78-22.356 34.74-29.699c40.437-34.74 108.163-112.876 108.163-247.67 0-206.464-160.109-339.614-407.888-339.614h-282.738v-.11h-32.219c-73.424 2.74-132.273 62.466-133.04 136.329v1171.499h453.586c275.396 0 453.148-149.917 453.148-382.135 0-125.04-57.424-231.889-153.972-286.244" fill="#fff"/>
                      <path d="m1794.688 1828.066c0-89.492 72.178-161.894 161.107-161.894 89.154 0 161.669 72.402 161.669 161.894 0 89.379-72.515 161.894-161.67 161.894-88.928 0-161.106-72.515-161.106-161.894" fill="#00bafc"/>
                    </g>
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Booking.com</p>
                  <p className="text-sm text-muted-foreground">Check availability on Booking.com</p>
                </div>
              </a>
              
              <a
                href="https://www.instagram.com/green_woody_home/?igsh=MW55cTNjNXVidzhvbg%3D%3D#"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-method"
              >
                <div>
                  <Instagram size={24} />
                </div>
                <div>
                  <p className="font-medium">Instagram</p>
                  <p className="text-sm text-muted-foreground">Follow us on Instagram</p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-display mb-6 text-bnb-dark">{t('contact.title')}</h3>
          <form ref={form} onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="firstname" className="text-sm font-medium">{t('contact.name')}</label>
                <Input 
                  id="firstname" 
                  name="firstname" 
                  placeholder='Mario' 
                  className="placeholder:opacity-30" 
                  required 
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="lastname" className="text-sm font-medium">{t('contact.name')}</label>
                <Input id="lastname" name="lastname" placeholder='Rossi' className="placeholder:opacity-30"  required />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">{t('contact.email')}</label>
              <Input id="email" name="email" type="email" placeholder='mario.rossi@gmail.com' className="placeholder:opacity-30"  required />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium">Phone (optional)</label>
              <Input id="phone" name="phone" placeholder="3387392571" className="placeholder:opacity-30"  type="tel" />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">{t('contact.message')}</label>
              <Textarea id="message" name="message" rows={5} placeholder='Hi! I would like to book the house for...' className="placeholder:opacity-30"  required />
            </div>
            
            <Button type="submit" className="w-full bg-bnb-green2 hover:bg-bnb-green2/70 text-dark_gray">
              {t('contact.send')}
            </Button>
          </form>
        </div>
      </div>
    </section>
    </>
  );
};

export default Contact;