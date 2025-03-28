
# Data Parsing Servers (A & B)

This project demonstrates two data parsing servers: **Server A** and **Server B**, which fetch data from a given URL and return it as JSON. It supports various file formats, including **CSV**, **JSON**, and **XML**.

## Server A

To start **Server A**, follow these steps:

```bash
cd server_a
flask --app main run
```

Server A will run on the **Flask** framework, processing data requests.

## Server B

To start **Server B**, follow these steps:

```bash
cd server_b
npm start
```

Server B uses **Node.js** and processes data in JSON format.

## Example Usage

1. Start **Server A** and **Server B** as outlined above.
2. Test one of the following endpoints:

    - Fetch CSV data: `http://127.0.0.1:5000/csv.json?url=http://127.0.0.1:5000/static/data.csv`
    - Fetch JSON data: `http://127.0.0.1:5000/json.json?url=http://127.0.0.1:5000/static/data.json`
    - Fetch XML data: `http://127.0.0.1:5000/xml.json?url=http://127.0.0.1:5000/static/data.xml`

## License

This project is open-source under the MIT License. Feel free to fork and contribute!

