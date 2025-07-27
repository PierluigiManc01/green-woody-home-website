// backend/index.js
const express = require('express');
const fetch = require('node-fetch'); // v2 or v3; adjust syntax if using v3+
const app = express();
const PORT = process.env.PORT || 3001;

const ICAL_URL = 'https://www.airbnb.it/calendar/ical/885987155364658565.ics?s=4ee4c8df128452549fd46e38172bd1b6';

app.get('/proxy-calendar', async (req, res) => {
  try {
    const response = await fetch(ICAL_URL);
    if (!response.ok) {
      return res.status(response.status).send('Failed to fetch calendar');
    }
    const data = await response.text();
    res.set('Content-Type', 'text/calendar');
    res.send(data);
  } catch (error) {
    res.status(500).send('Internal server error');
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server listening on port ${PORT}`);
});
