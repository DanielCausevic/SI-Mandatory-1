
# Webhook Receiver

This application provides a **POST** endpoint (`/webhook`) for subscribing to webhook services. External systems can send data to this endpoint, which will be processed and logged accordingly.

## Webhook Shop Service

The **Webhook Shop Service** allows users to subscribe and unsubscribe to an event named `purchased_confirmed`. It stores URLs in a **JSON file** to manage the event subscriptions.

### Available Endpoints:

- `POST /webhook` 
  - Registers a given URL to a specified event.
  - Payload: `{"url": String, "event": String}`

- `DELETE /webhook` 
  - Removes a URL from the subscription list.

## Installation

To run the service, clone the repository and install the dependencies:

```bash
git clone https://github.com/DanielCausevic/SI-Mandatory-1.git
cd your-repo-name
npm install
```

## Usage

1. Start the server:

```bash
npm start
```

2. Access the webhook service at [http://localhost:3000/](http://localhost:3000/).

## License

This project is open-source under the MIT License. Feel free to fork, contribute, and make improvements!

