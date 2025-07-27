
import React, { useRef, useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';
import { Calendar } from '@/components/ui/calendar';
import { Instagram, Phone, Mail, MapPin, Calendar as CalendarIcon, Euro } from 'lucide-react';
import emailjs from '@emailjs/browser';
import * as icalParser from 'ical-parser';

// --- ADDED: The Airbnb iCal URL constant
const ICAL_URL = 'https://www.airbnb.it/calendar/ical/885987155364658565.ics?s=4ee4c8df128452549fd46e38172bd1b6';

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  // --- useState for iCal is not needed anymore since ICAL_URL is a constant
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [unavailableDates, setUnavailableDates] = useState<Date[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [isLoading, setIsLoading] = useState(false);

  // --- ADDED: Helper to enumerate all dates in a (inclusive) interval
  const getAllDatesInRange = (start: Date, end: Date) => {
    const dates: Date[] = [];
    const current = new Date(start);
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
              title: "Messaggio inviato!",
              description: "Ti risponderemo appena possibile.",
            });
            form.current.reset();
          },
          (error) => {
            console.log("FAILED...", error.text);
            toast({
              title: "Invio del messaggio fallito",
              description: "Per favore ritenta in seguito.",
              variant: "destructive",
            });
          }
        );
    }
  };

  // --- CHANGED: Calendar fetch always uses ICAL_URL
  const fetchCalendarData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(ICAL_URL);
      const icalData = await response.text();

      // Parse iCal data using ical-parser
      const parsed = icalParser.parseString(icalData);
      const events = parsed.events || [];

      let blocked: Date[] = [];

      events.forEach((event) => {
        // Defensive: support both startDate.value and startDate
        const start = new Date(event.startDate?.value || event.startDate);
        const end = new Date(event.endDate?.value || event.endDate);

        // iCal end is exclusive, so use end-1
        const endDt = new Date(end);
        endDt.setDate(endDt.getDate() - 1);

        blocked = blocked.concat(getAllDatesInRange(start, endDt));
      });

      setUnavailableDates(blocked);
      setLastUpdated(new Date());
      localStorage.setItem('last-calendar-update', new Date().toISOString());
      localStorage.setItem('unavailable-dates', JSON.stringify(blocked.map(d => d.toISOString())));
    } catch (error) {
      console.error('Error fetching calendar data:', error);
      toast({
        title: "Calendar Update Failed",
        description: "Could not fetch calendar data. Please check the URL.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // --- CHANGED: only use ICAL_URL; always refresh if 12h elapsed
  useEffect(() => {
    const refreshData = async () => {
      await fetchCalendarData();
    };

    // From cache if available for quick UI
    const storedDates = localStorage.getItem('unavailable-dates');
    if (storedDates) {
      setUnavailableDates(JSON.parse(storedDates).map((iso: string) => new Date(iso)));
    }
    const last = localStorage.getItem('last-calendar-update');
    if (last) setLastUpdated(new Date(last));

    const now = Date.now();
    const lastUpdate = last ? new Date(last).getTime() : 0;
    if (!lastUpdate || now - lastUpdate > (12 * 60 * 60 * 1000)) {
      refreshData();
    }

    // 12-hour interval update
    const interval = setInterval(refreshData, 12 * 60 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Calendar Availability Section */}
      <section className="section-container bg-bnb-green2/10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-bnb-green2 mb-4">Availability & Pricing</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Check our real-time availability through our Airbnb calendar. Pricing starts from <strong>€120 per night</strong>, 
            but rates may vary depending on the season and length of stay.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-display mb-4 text-bnb-dark flex items-center gap-2">
                  <CalendarIcon className="w-6 h-6" />
                  Availability Calendar
                </h3>
                <p className="text-muted-foreground mb-6">
                  View our real-time availability. Unavailable dates are shown in red.
                  Calendar updates automatically every 12 hours.
                </p>

                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-4 w-full">
                    {isLoading ? (
                      <div className="text-center py-8">
                        <p className="text-muted-foreground">Loading calendar...</p>
                      </div>
                    ) : (
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        disabled={(date) => {
                          // Disable past dates
                          if (date < new Date()) return true;
                          // Check if date is unavailable
                          return unavailableDates.some(unavailableDate =>
                            date.toDateString() === unavailableDate.toDateString()
                          );
                        }}
                        modifiers={{
                          unavailable: unavailableDates.filter(date => date >= new Date())
                        }}
                        modifiersClassNames={{
                          unavailable: "bg-red-500 text-white hover:bg-red-600 line-through"
                        }}
                        className="rounded-md border pointer-events-auto w-full scale-110 origin-center"
                        classNames={{
                          months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0 w-full",
                          month: "space-y-4 w-full",
                          caption: "flex justify-center pt-1 relative items-center text-lg font-semibold",
                          table: "w-full border-collapse space-y-1",
                          head_row: "flex w-full",
                          head_cell: "text-muted-foreground rounded-md w-12 h-12 font-normal text-sm flex items-center justify-center",
                          row: "flex w-full mt-2",
                          cell: "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 w-12 h-12",
                          day: "h-12 w-12 p-0 font-normal flex items-center justify-center rounded-md hover:bg-accent hover:text-accent-foreground",
                          day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
                          day_today: "bg-accent text-accent-foreground font-semibold",
                          day_outside: "text-muted-foreground opacity-50",
                          day_disabled: "text-muted-foreground opacity-50"
                        }}
                      />
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
              {/* ...rest of the right column, no change needed */}
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

      {/* Contact Section: no changes needed, continue below as in your original */}
      <section id="contact" className="section-container bg-bnb-stone2">
        {/* ...keep the remainder unchanged */}
        {/* Contact form, contact info, etc. */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-bnb-green2 mb-4">Get in Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions or want to book directly? Contact us using any of these methods
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            {/* Contact methods... */}
            {/* Use your original code here without modification */}
          </div>
          <div>
            <h3 className="text-2xl font-display mb-6 text-bnb-dark">Send Us a Message</h3>
            <form ref={form} onSubmit={handleSubmit} className="space-y-4">
              {/* ...rest of your form, unchanged */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="firstname" className="text-sm font-medium">First Name</label>
                  <Input 
                    id="firstname" 
                    name="firstname" 
                    placeholder='Mario' 
                    className="placeholder:opacity-30" 
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastname" className="text-sm font-medium">Last Name</label>
                  <Input id="lastname" name="lastname" placeholder='Rossi' className="placeholder:opacity-30"  required />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <Input id="email" name="email" type="email" placeholder='mario.rossi@gmail.com' className="placeholder:opacity-30"  required />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium">Phone (optional)</label>
                <Input id="phone" name="phone" placeholder="3387392571" className="placeholder:opacity-30"  type="tel" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <Textarea id="message" name="message" rows={5} placeholder='Hi! I would like to book the house for...' className="placeholder:opacity-30"  required />
              </div>
              <Button type="submit" className="w-full bg-bnb-green2 hover:bg-bnb-green2/70 text-dark_gray">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
