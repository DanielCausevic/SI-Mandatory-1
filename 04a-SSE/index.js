
import express from 'express';

const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static('public'));

// SSE endpoint to send real-time data
app.get('/sse', (req, res) => {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    
    let requestCount = 0;
    
    const interval = setInterval(() => {
        requestCount += 1;
        const currentTime = new Date().toISOString();
        console.log('Sending data. Current time:', currentTime);
        
        // Send the data to the client
        res.write(`data: { "time": "${currentTime}", "requestIndex": ${requestCount} }

`);
    }, 1000);
    
    // Stop sending events after 5 minutes
    setTimeout(() => {
        clearInterval(interval);
        res.write('data: [END]

');
        res.end();
    }, 300000); // 5 minutes
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
