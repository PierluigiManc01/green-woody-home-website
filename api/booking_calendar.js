// /api/calendar.js 
export default async function handler(req, res) {
  const ICAL_URL = 'https://ical.booking.com/v1/export?t=37c9f884-f307-49df-a0b3-9e09e3e32d17';

  try {
    const response = await fetch(ICAL_URL);
    if (!response.ok) {
      return res.status(response.status).send('Failed to fetch calendar');
    }
    const icalData = await response.text();
    // Set headers for CORS if you want this endpoint opened to other sites:
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'text/calendar');
    res.status(200).send(icalData);
  } catch (err) {
    res.status(500).send('Internal server error');
  }
}
