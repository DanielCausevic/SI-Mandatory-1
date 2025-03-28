
import express from 'express';

const app = express();
const port = 3000;

// Middleware to parse incoming JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// POST endpoint to receive webhook data
app.post('/webhook', (req, res) => {
    console.log('Received webhook data:', req.body);
    res.status(200).send('Webhook received successfully');
});

// Start the server and listen for incoming requests
app.listen(port, () => {
    console.log(`Webhook receiver running on http://localhost:${port}`);
});
