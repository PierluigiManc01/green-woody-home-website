export default async function handler(req, res) {
  const AIRBNB_URL = 'https://www.airbnb.it/calendar/ical/885987155364658565.ics?s=4ee4c8df128452549fd46e38172bd1b6';
  const BOOKING_URL = 'https://ical.booking.com/v1/export?t=37c9f884-f307-49df-a0b3-9e09e3e32d17';

  try {
    const calendars = [];
    
    // Fetch Airbnb calendar with error handling
    try {
      const airbnbResponse = await fetch(AIRBNB_URL);
      if (airbnbResponse.ok) {
        const airbnbData = await airbnbResponse.text();
        if (airbnbData.includes('BEGIN:VCALENDAR')) {
          calendars.push({ source: 'airbnb', data: airbnbData });
        }
      }
    } catch (error) {
      console.warn('Airbnb calendar fetch failed:', error.message);
    }

    // Fetch Booking calendar with error handling
    try {
      // ✅ Fixed: Simply check if BOOKING_URL exists
      if (BOOKING_URL) {
        const bookingResponse = await fetch(BOOKING_URL);
        if (bookingResponse.ok) {
          const bookingData = await bookingResponse.text();
          if (bookingData.includes('BEGIN:VCALENDAR')) {
            calendars.push({ source: 'booking', data: bookingData });
          }
        }
      }
    } catch (error) {
      console.warn('Booking calendar fetch failed:', error.message);
    }

    // If no calendars fetched successfully
    if (calendars.length === 0) {
      return res.status(500).json({ error: 'Failed to fetch any calendar data' });
    }

    // Return the calendars as JSON for frontend processing
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json({ calendars });
    
  } catch (err) {
    res.status(500).json({ 
      error: 'Internal server error',
      message: err.message 
    });
  }
}
