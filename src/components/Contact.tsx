import React, { useCallback, useRef, useState, useEffect } from 'react';
import type { DateRange } from 'react-day-picker';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';
import { Calendar } from '@/components/ui/calendar';
import {
  Calendar as CalendarIcon,
  Euro,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Minus,
  Phone,
  Plus,
  ShieldCheck,
} from 'lucide-react';
import emailjs from '@emailjs/browser';
import ICAL from 'ical.js';
import { useLanguage } from '@/contexts/LanguageContext';

const getAllDatesInRange = (start: Date, end: Date) => {
  const dates: Date[] = [];
  const current = new Date(start);
  while (current <= end) {
    dates.push(new Date(current));
    current.setDate(current.getDate() + 1);
  }
  return dates;
};

const AirbnbLogo = () => (
  <svg width="28" height="28" viewBox="0 0 32 32" aria-hidden="true" className="flex-shrink-0">
    <path
      d="M25.6 24.2c-1.9 1.1-4.2.8-6.3-.8-1-.8-2.1-1.9-3.3-3.3-1.2 1.4-2.3 2.5-3.3 3.3-2.1 1.6-4.4 1.9-6.3.8-1.9-1-3-3.1-2.7-5.3.1-1 .5-2.1 1.1-3.4L11.3 3.8C12.3 2 14 1 16 1s3.7 1 4.7 2.8l6.5 11.7c.7 1.3 1 2.4 1.1 3.4.3 2.2-.8 4.3-2.7 5.3ZM16 17.2c1.7-2.1 2.7-3.9 3-5.4.2-1 .1-1.8-.3-2.5-.5-.8-1.5-1.3-2.7-1.3s-2.2.5-2.7 1.3c-.4.7-.5 1.5-.3 2.5.3 1.5 1.3 3.3 3 5.4Zm-1.8 1.9c-1.9-2.5-3-4.6-3.4-6.7-.3-1.6-.1-3 .6-4.1C12.3 6.9 14 6 16 6s3.7.9 4.6 2.3c.7 1.1.9 2.5.6 4.1-.4 2.1-1.5 4.2-3.4 6.7 1.1 1.3 2.1 2.3 3 3 1.4 1 2.7 1.2 3.8.6 1.1-.7 1.7-2 1.5-3.4-.1-.7-.3-1.5-.9-2.5L18.8 4.9C18.2 3.7 17.2 3 16 3s-2.2.7-2.8 1.9L6.8 16.8c-.6 1-.8 1.8-.9 2.5-.2 1.4.4 2.7 1.5 3.4 1.1.6 2.4.4 3.8-.6.9-.7 1.9-1.7 3-3Z"
      fill="#E0565B"
    />
  </svg>
);

const BookingLogo = () => (
  <svg width="28" height="28" viewBox="0 0 32 32" aria-hidden="true" className="flex-shrink-0">
    <rect width="32" height="32" rx="6" fill="#0C3B7C" />
    <path
      d="M10 7h7.3c3.3 0 5.4 1.8 5.4 4.6 0 1.6-.7 2.8-2 3.5 1.8.7 2.8 2.2 2.8 4.2 0 3.4-2.5 5.3-6.6 5.3H10V7Zm6.9 6.8c1.8 0 2.8-.7 2.8-2s-1-2-2.8-2h-3.8v4h3.8Zm.3 8c2.1 0 3.2-.9 3.2-2.5s-1.1-2.6-3.2-2.6h-4.1v5.1h4.1Z"
      fill="white"
    />
    <circle cx="25.2" cy="22.8" r="1.8" fill="#00BAFC" />
  </svg>
);

const GuestStepper: React.FC<{
  label: string;
  value: number;
  min: number;
  max: number;
  onChange: (value: number) => void;
}> = ({ label, value, min, max, onChange }) => (
  <div className="flex items-center justify-between gap-3 rounded-md border border-input bg-background px-3 py-2">
    <span className="min-w-0 text-sm font-medium text-bnb-dark">{label}</span>
    <div className="flex items-center gap-3">
      <Button
        type="button"
        variant="outline"
        size="icon"
        className="h-9 w-9 rounded-full"
        onClick={() => onChange(Math.max(min, value - 1))}
        disabled={value <= min}
        aria-label={`Decrease ${label}`}
      >
        <Minus className="h-4 w-4" />
      </Button>
      <span className="w-6 text-center text-sm font-semibold text-bnb-dark">{value}</span>
      <Button
        type="button"
        variant="outline"
        size="icon"
        className="h-9 w-9 rounded-full"
        onClick={() => onChange(Math.min(max, value + 1))}
        disabled={value >= max}
        aria-label={`Increase ${label}`}
      >
        <Plus className="h-4 w-4" />
      </Button>
    </div>
  </div>
);

interface ContactProps {
  variant?: 'stay' | 'event';
}

const MAX_EVENT_GUESTS = 100;

const Contact: React.FC<ContactProps> = ({ variant = 'stay' }) => {
  const isEvent = variant === 'event';
  const form = useRef<HTMLFormElement>(null);
  const [eventGuests, setEventGuests] = useState(30);
  const [eventType, setEventType] = useState('');
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [unavailableDates, setUnavailableDates] = useState<Date[]>([]);
  const [selectedRange, setSelectedRange] = useState<DateRange | undefined>();
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [guestMessage, setGuestMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useLanguage();

  const formatDateInput = (date?: Date) => {
    if (!date) return '';
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const handleRangeSelect = (range?: DateRange) => {
    setSelectedRange(range);
    setCheckIn(formatDateInput(range?.from));
    setCheckOut(formatDateInput(range?.to));
  };

  const isDateUnavailable = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (date < today) return true;
    return unavailableDates.some(ud => date.toDateString() === ud.toDateString());
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          'service_kfqi9r6',
          'template_bzd6sal',
          form.current,
          'OcfiSI6EWgrMuMT6d'
        )
        .then(
          () => {
            toast({
              title: t('contact.success'),
              description: t('contact.success'),
            });
            form.current?.reset();
            setSelectedRange(undefined);
            setCheckIn('');
            setCheckOut('');
            setAdults(2);
            setChildren(0);
            setEventGuests(30);
            setEventType('');
            setGuestMessage('');
          },
          (error) => {
            console.error('FAILED...', error.text);
            toast({
              title: t('contact.error'),
              description: t('contact.error'),
              variant: 'destructive',
            });
          }
        );
    }
  };

  const fetchCalendarData = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/calendar');

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();

      if (!data.calendars || !Array.isArray(data.calendars)) {
        throw new Error('Invalid calendar data structure received');
      }

      const { calendars } = data;
      let allBlockedDates: Date[] = [];

      calendars.forEach((calendar, index) => {
        try {
          if (!calendar || !calendar.data || !calendar.source) {
            console.warn(`Invalid calendar object at index ${index}`);
            return;
          }

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
        title: 'Calendar Update Failed',
        description: error instanceof Error ? `Error: ${error.message}` : 'Calendar data could not be loaded.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    const refreshData = async () => {
      await fetchCalendarData();
    };

    const storedDates = localStorage.getItem('unavailable-dates');
    if (storedDates) {
      try {
        setUnavailableDates(JSON.parse(storedDates).map((iso: string) => new Date(iso)));
      } catch {
        // Fallback to fetching fresh calendar data.
      }
    }
    const last = localStorage.getItem('last-calendar-update');
    if (last) setLastUpdated(new Date(last));

    const now = Date.now();
    const lastUpdate = last ? new Date(last).getTime() : 0;
    if (!lastUpdate || now - lastUpdate > 2 * 60 * 60 * 1000) {
      refreshData();
    }

    const interval = setInterval(refreshData, 2 * 60 * 60 * 1000);
    return () => clearInterval(interval);
  }, [fetchCalendarData]);

  // The event fields travel inside the same message body so the email template stays unchanged.
  const reservationSummary = (isEvent
    ? [
        'Event request',
        `Event type: ${eventType || '-'}`,
        `Event date: ${checkIn || '-'}`,
        `End date: ${checkOut || '-'}`,
        `Guests: ${eventGuests}`,
      ]
    : [
        'Reservation request',
        `Check-in: ${checkIn || '-'}`,
        `Check-out: ${checkOut || '-'}`,
        `Guests: ${adults} adults, ${children} children`,
      ]
  )
    .concat(['', 'Guest message:', guestMessage || '-'])
    .join('\n');

  const maxGuests = 8;
  const isMaxGuestsReached = adults + children >= maxGuests;
  const maxAdults = maxGuests - children;
  const maxChildren = maxGuests - adults;

  const calendarCard = (
            <div className="rounded-md border border-bnb-sand/40 bg-white p-5 shadow-sm md:p-8">
              <div className="mb-6 flex items-center gap-3 text-bnb-dark">
                <CalendarIcon className="h-5 w-5 text-bnb-green" />
                <h3 className="font-display text-2xl">{isEvent ? t('eventForm.pick') : t('contact.availability.check2')}</h3>
              </div>

              {isLoading ? (
                <div className="py-16 text-center text-muted-foreground">{t('calendar.loading')}</div>
              ) : (
                <Calendar
                  mode="range"
                  selected={selectedRange}
                  onSelect={handleRangeSelect}
                  disabled={isDateUnavailable}
                  modifiers={{
                    unavailable: unavailableDates.filter(date => date >= new Date()),
                  }}
                  modifiersClassNames={{
                    unavailable: 'bg-red-500 text-white hover:bg-red-600 line-through',
                  }}
                  className="mx-auto w-full max-w-xl rounded-md border border-bnb-sand/30 bg-bnb-stone/30"
                  classNames={{
                    months: 'flex flex-col sm:flex-row gap-6 sm:space-x-0 sm:space-y-0 w-full',
                    month: 'space-y-4 w-full',
                    caption: 'flex justify-center pt-1 relative items-center text-base font-semibold',
                    table: 'w-full border-collapse space-y-1',
                    head_row: 'flex w-full',
                    head_cell: 'text-muted-foreground rounded-md flex-1 h-9 font-normal text-xs md:text-sm flex items-center justify-center',
                    row: 'flex w-full mt-1',
                    cell: 'relative p-0 text-center text-xs md:text-sm focus-within:relative focus-within:z-20 flex-1 h-9',
                    day: 'h-9 w-full p-0 font-normal flex items-center justify-center rounded-md hover:bg-bnb-green/10 hover:text-bnb-dark text-xs md:text-sm',
                    day_selected: 'bg-bnb-green text-bnb-dark hover:bg-bnb-green hover:text-bnb-dark focus:bg-bnb-green focus:text-bnb-dark',
                    day_range_middle: 'aria-selected:bg-bnb-green/15 aria-selected:text-bnb-dark',
                    day_today: 'bg-bnb-stone text-bnb-dark font-semibold',
                    day_outside: 'text-muted-foreground opacity-50',
                    day_disabled: 'text-muted-foreground opacity-50',
                  }}
                />
              )}

              <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-bnb-dark_gray">
                {lastUpdated && (
                  <span>
                    {t('calendar.update')}: {lastUpdated.toLocaleDateString()} - {lastUpdated.toLocaleTimeString()}
                  </span>
                )}
                <span className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-sm bg-bnb-green" />
                  {t('calendar.available')}
                </span>
                <span className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-sm bg-red-500" />
                  {t('calendar.unavailable')}
                </span>
              </div>
            </div>
  );

  const formCard = (
            <form ref={form} onSubmit={handleSubmit} className="rounded-md border border-bnb-sand/40 bg-white p-5 shadow-sm md:p-8">
              <input type="hidden" name="adults" value={isEvent ? eventGuests : adults} readOnly />
              <input type="hidden" name="children" value={isEvent ? 0 : children} readOnly />
              <input type="hidden" name="guests" value={isEvent ? `${eventGuests} guests` : `${adults} adults, ${children} children`} readOnly />
              {isEvent && <input type="hidden" name="event_type" value={eventType} readOnly />}
              <input type="hidden" name="message" value={reservationSummary} readOnly />
              <div className="grid gap-5 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="firstname" className="text-sm font-medium text-bnb-dark">{t('contact.name')}</label>
                  <Input id="firstname" name="firstname" placeholder="Mario" className="placeholder:opacity-40" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastname" className="text-sm font-medium text-bnb-dark">{t('contact.surname')}</label>
                  <Input id="lastname" name="lastname" placeholder="Rossi" className="placeholder:opacity-40" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="checkin" className="text-sm font-medium text-bnb-dark">{isEvent ? t('eventForm.date') : t('contact.checkin')}</label>
                  <Input id="checkin" name="checkin" type="date" value={checkIn} onChange={event => setCheckIn(event.target.value)} required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="checkout" className="text-sm font-medium text-bnb-dark">{isEvent ? t('eventForm.endDate') : t('contact.checkout')}</label>
                  <Input id="checkout" name="checkout" type="date" value={checkOut} onChange={event => setCheckOut(event.target.value)} required={!isEvent} />
                </div>
                {isEvent ? (
                  <>
                    <div className="space-y-2">
                      <label htmlFor="eventtype" className="text-sm font-medium text-bnb-dark">{t('eventForm.type')}</label>
                      <Input
                        id="eventtype"
                        value={eventType}
                        onChange={event => setEventType(event.target.value)}
                        placeholder={t('eventForm.typePlaceholder')}
                        className="placeholder:opacity-40"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="eventguests" className="text-sm font-medium text-bnb-dark">{t('eventForm.guests')}</label>
                      <Input
                        id="eventguests"
                        type="number"
                        inputMode="numeric"
                        min={1}
                        max={MAX_EVENT_GUESTS}
                        value={eventGuests}
                        onChange={event => {
                          const next = Math.round(Number(event.target.value));
                          setEventGuests(Number.isFinite(next) ? Math.min(MAX_EVENT_GUESTS, Math.max(1, next)) : 1);
                        }}
                        required
                      />
                    </div>
                  </>
                ) : (
                <div className="space-y-2 md:col-span-2">
                  <label htmlFor="guests" className="text-sm font-medium text-bnb-dark">{t('contact.guests')}</label>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <GuestStepper label={t('contact.adults')} value={adults} min={1} max={maxAdults} onChange={setAdults} />
                    <GuestStepper label={t('contact.children')} value={children} min={0} max={maxChildren} onChange={setChildren} />
                  </div>
                  {isMaxGuestsReached && (
                    <p className="rounded-md border border-bnb-wood/30 bg-bnb-beige/20 px-3 py-2 text-sm font-medium text-bnb-forest-brown">
                      {t('contact.maxGuestsWarning')}
                    </p>
                  )}
                </div>
                )}
                <div className="space-y-2 md:col-span-2">
                  <label htmlFor="email" className="text-sm font-medium text-bnb-dark">{t('contact.email')}</label>
                  <Input id="email" name="email" type="email" placeholder="mario.rossi@gmail.com" className="placeholder:opacity-40" required />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label htmlFor="phone" className="text-sm font-medium text-bnb-dark">{t('contact.phone')}</label>
                  <Input id="phone" name="phone" placeholder="+39 335 815 8411" className="placeholder:opacity-40" type="tel" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label htmlFor="message" className="text-sm font-medium text-bnb-dark">{t('contact.message')}</label>
                  <Textarea
                    id="message"
                    name="guest_message"
                    rows={5}
                    value={guestMessage}
                    onChange={event => setGuestMessage(event.target.value)}
                    placeholder={t('contact.placeholder')}
                    className="placeholder:opacity-40"
                  />
                </div>
              </div>

              <Button type="submit" size="md" className="mt-6 w-full bg-bnb-green text-bnb-dark hover:bg-bnb-dark_green hover:text-bnb-dark">
                {isEvent ? t('events.cta.title') : t('contact.send')}
              </Button>
            </form>
  );

  if (isEvent) {
    return (
      <section className="section-container bg-background">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-center text-4xl font-semibold text-bnb-dark md:text-5xl">{t('eventForm.title')}</h2>
          <div className="grid items-start gap-8 lg:grid-cols-2">
            {calendarCard}
            {formCard}
          </div>
          <p className="mt-8 text-center text-bnb-dark_gray">
            {t('eventForm.reach')}{' '}
            <a href="https://wa.me/393358158411" target="_blank" rel="noopener noreferrer" className="underline hover:text-bnb-green">{t('events.cta.whatsapp')}</a>
            {' · '}
            <a href="tel:+393358158411" className="underline hover:text-bnb-green">{t('events.cta.call')}</a>
            {' · '}
            <a href="mailto:greenwoodyhome@gmail.com" className="underline hover:text-bnb-green">{t('events.cta.email')}</a>
          </p>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="section-container bg-background">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 grid gap-6 md:grid-cols-[0.9fr_1.1fr] md:items-end">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-bnb-wood">
                {t('contact.availability')}
              </p>
              <h2 className="text-4xl font-semibold leading-tight text-bnb-dark md:text-6xl">
                {t('contact.title')}
              </h2>
            </div>
            <p className="text-lg leading-relaxed text-bnb-dark_gray md:text-xl">
              {t('contact.availability.check')}
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            {calendarCard}

            <div className="rounded-md border border-bnb-sand/40 bg-bnb-stone p-6 md:p-8">
              <div className="mb-5 flex items-center gap-3 text-bnb-dark">
                <Euro className="h-5 w-5 text-bnb-green" />
                <h3 className="font-display text-2xl">{t('pricingInfo.title')}</h3>
              </div>
              <div className="space-y-5">
                <div className="border-b border-bnb-sand/50 pb-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-bnb-wood">
                    {t('pricingInfo.startingFrom')}
                  </p>
                  <p className="mt-2 text-4xl font-semibold text-bnb-dark">
                    €150 <span className="text-base font-normal text-bnb-dark_gray">{t('pricingInfo.perNight')}</span>
                  </p>
                </div>
                <div className="grid gap-3 text-bnb-dark_gray">
                  {[t('pricingInfo.note1'), t('pricingInfo.note2'), t('pricingInfo.note3'), t('pricingInfo.note4')].map((note) => (
                    <p key={note} className="flex gap-3">
                      <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-bnb-green" />
                      <span>{note}</span>
                    </p>
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-bnb-dark_gray">{t('pricingInfo.disclaimer')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section-container bg-bnb-stone2">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-bnb-wood">
              {t('contact.directBenefits')}
            </p>
            <h2 className="text-4xl font-semibold text-bnb-dark md:text-6xl">{t('contact.form.title')}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-bnb-dark_gray">
              {t('contact.subtitle')}
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            {formCard}

            <div className="space-y-8">
              <div className="rounded-md border border-bnb-sand/40 bg-background p-6">
                <h3 className="font-display text-2xl text-bnb-dark">{t('contact.contactUs')}</h3>
                <p className="mt-2 text-sm leading-relaxed text-bnb-dark_gray">
                  <strong>{t('contact.contactUs2.1')}</strong>{t('contact.contactUs2.2')}
                </p>
                <div className="mt-6 space-y-3">
                  <a href="https://wa.me/393358158411" target="_blank" rel="noopener noreferrer" className="contact-method">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-bnb-green text-bnb-dark">
                      <MessageCircle size={20} />
                    </span>
                    <span>
                      <span className="block font-medium">WhatsApp</span>
                      <span className="text-sm text-muted-foreground">(+39) 3358158411</span>
                    </span>
                  </a>
                  <a href="tel:+393358158411" className="contact-method">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-bnb-green text-bnb-dark">
                      <Phone size={20} />
                    </span>
                    <span>
                      <span className="block font-medium">{t('contact.phone2')}</span>
                      <span className="text-sm text-muted-foreground">(+39) 3358158411</span>
                    </span>
                  </a>
                  <a href="mailto:greenwoodyhome@gmail.com" className="contact-method">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-bnb-green text-bnb-dark">
                      <Mail size={20} />
                    </span>
                    <span>
                      <span className="block font-medium">{t('contact.email')}</span>
                      <span className="text-sm text-muted-foreground">greenwoodyhome@gmail.com</span>
                    </span>
                  </a>
                  <a href="https://maps.app.goo.gl/X9LD4aB8ZLAtTfGK8" target="_blank" rel="noopener noreferrer" className="contact-method">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-bnb-green text-bnb-dark">
                      <MapPin size={20} />
                    </span>
                    <span>
                      <span className="block font-medium">{t('contact.loc')}</span>
                      <span className="text-sm text-muted-foreground">{t('contact.ctaLoc')}</span>
                    </span>
                  </a>
                </div>
              </div>

              <div className="rounded-md border border-bnb-sand/30 p-6">
                <h3 className="font-display text-xl text-bnb-dark">{t('contact.finduUs')}</h3>
                <div className="mt-4 grid gap-3">
                  <a href="https://www.airbnb.it/h/green-woody-home" target="_blank" rel="noopener noreferrer" className="contact-method">
                    <AirbnbLogo />
                    <span>
                      <span className="block font-medium">Airbnb</span>
                      <span className="text-sm text-muted-foreground">{t('button.ctaAirbnb')}</span>
                    </span>
                  </a>
                  <a href="https://www.booking.com/hotel/it/green-woody-home" target="_blank" rel="noopener noreferrer" className="contact-method">
                    <BookingLogo />
                    <span>
                      <span className="block font-medium">Booking.com</span>
                      <span className="text-sm text-muted-foreground">{t('button.ctaBooking')}</span>
                    </span>
                  </a>
                  <a
                    href="https://www.instagram.com/green_woody_home/?igsh=MW55cTNjNXVidzhvbg%3D%3D#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-method"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-bnb-green text-bnb-dark">
                      <Instagram size={20} />
                    </span>
                    <span>
                      <span className="block font-medium">Instagram</span>
                      <span className="text-sm text-muted-foreground">{t('button.ctaInstagram')}</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
