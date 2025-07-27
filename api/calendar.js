export default async function handler(req, res) {
  try {
    const [airbnbRes, bookingRes] = await Promise.all([
      fetch('/api/airbnb_calendar'),
      fetch('/api/booking_calendar')
    ]);

    let allEvents = [];

    // Process Airbnb data
    if (airbnbRes.ok) {
      const airbnbData = await airbnbRes.text();
      allEvents.push(airbnbData);
    }

    // Process Booking data  
    if (bookingRes.ok) {
      const bookingData = await bookingRes.text();
      allEvents.push(bookingData);
    }

    // Combine calendars
    const combinedData = allEvents.join('\n');
    
    res.setHeader('Content-Type', 'text/calendar');
    res.status(200).send(combinedData);
    
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
