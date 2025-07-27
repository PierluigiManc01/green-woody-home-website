export default async function handler(req, res) {
  const ICAL_URL = 'https://www.airbnb.it/calendar/ical/885987155364658565.ics?s=4ee4c8df128452549fd46e38172bd1b6';

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
