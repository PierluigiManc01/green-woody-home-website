export default async function handler(req, res) {
  const AIRBNB_URL = 'https://www.airbnb.it/calendar/ical/885987155364658565.ics?s=4ee4c8df128452549fd46e38172bd1b6';
  const BOOKING_URL = 'https://ical.booking.com/v1/export?t=37c9f884-f307-49df-a0b3-9e09e3e32d17';

  try {
    // Fetch both calendars simultaneously
    const [airbnbResponse, bookingResponse] = await Promise.all([
      fetch(AIRBNB_URL),
      fetch(BOOKING_URL)
    ]);

    let combinedIcalData = '';

    // Process Airbnb calendar
    if (airbnbResponse.ok) {
      const airbnbData = await airbnbResponse.text();
      combinedIcalData += airbnbData;
    } else {
      console.warn('Failed to fetch Airbnb calendar');
    }

    // Process Booking.com calendar
    if (bookingResponse.ok) {
      const bookingData = await bookingResponse.text();
      // Remove the header/footer from the second calendar and append events
      const bookingEvents = bookingData
        .split('\n')
        .filter(line => 
          !line.startsWith('BEGIN:VCALENDAR') && 
          !line.startsWith('END:VCALENDAR') &&
          !line.startsWith('VERSION:') &&
          !line.startsWith('PRODID:') &&
          line.trim() !== ''
        )
        .join('\n');
      
      combinedIcalData += '\n' + bookingEvents;
    } else {
      console.warn('Failed to fetch Booking.com calendar');
    }

    // If we got at least one calendar, return it
    if (combinedIcalData) {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Content-Type', 'text/calendar');
      res.status(200).send(combinedIcalData);
    } else {
      res.status(500).json({ error: 'Failed to fetch any calendar data' });
    }
    
  } catch (err) {
    res.status(500).json({ 
      error: 'Internal server error',
      message: err.message 
    });
  }
}
