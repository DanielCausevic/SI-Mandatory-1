import { WebSocketServer } from 'ws';

const server = new WebSocketServer({ port: 8080 });

server.on('connection', (socket) => {
    socket.on('error', (err) => console.error('Socket error:', err));

    socket.on('message', (message) => {
        console.log(`Received message: ${message}`);
        socket.send('pong');
    });
});
