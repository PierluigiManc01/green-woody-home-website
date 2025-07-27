// /api/calendar.js   (for plain Vercel projects)
// or /pages/api/calendar.js  (for Next.js on Vercel)
import fetch from 'node-fetch';

const ICAL_URL = 'https://www.airbnb.it/calendar/ical/885987155364658565.ics?s=4ee4c8df128452549fd46e38172bd1b6';

export default async function handler(req, res) {
  try {
    const response = await fetch(ICAL_URL);
    if (!response.ok) {
      return res.status(response.status).send('Failed to fetch calendar');
    }
    const data = await response.text();
    res.setHeader('Content-Type', 'text/calendar');
    res.status(200).send(data);
  } catch (err) {
    res.status(500).send('Internal server error');
  }
}
