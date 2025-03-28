
import WebhookStorage from './storage.js';
import express from 'express';

const app = express();
const port = 3000;

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Webhook POST endpoint to register a URL for an event
app.post('/webhook', (req, res) => {
    const { url, event } = req.body;

    if (!url) {
        return res.status(400).json({ message: 'URL is required' });
    }

    if (!event) {
        return res.status(400).json({ message: 'Event is required' });
    }

    const storedData = WebhookStorage.read();
    if (!storedData[event]) {
        return res.status(404).json({ message: `Event ${event} not found` });
    }

    // Add the URL to the event's subscription list
    storedData[event].push(url);
    WebhookStorage.write(storedData);

    res.status(200).json({ message: `URL ${url} successfully subscribed to event ${event}` });
});

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Webhook shop service running on http://localhost:${port}`);
});
