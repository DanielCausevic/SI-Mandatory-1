
# Server-sent Events Example

This project demonstrates an application that uses **Server-sent Events (SSE)** to stream real-time data to clients. The application has a single **GET** endpoint `/sse` where clients can connect to receive the current time and the index of requests executed.

The **public/** directory contains an **HTML** file that utilizes the **EventSource** interface to receive server events.

## Installation

First, install the required dependencies:

```bash
npm install
```

## Usage

1. Start the server:

```bash
npm start
```

2. Open the application in your browser at [http://localhost:3000/](http://localhost:3000/).

This will connect to the `/sse` endpoint and start receiving server events.

## License

This project is licensed under the MIT License. Feel free to contribute and fork it!

