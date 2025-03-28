
# Data Parsing Server A

This server handles data fetching and parsing from various file formats like **CSV**, **JSON**, **XML**, **YAML**, and **Text**. The data is fetched from a URL and returned as JSON.

## Usage

To start the server, use **Flask** as the framework:

```bash
$ flask --app main run
```

## Endpoints

- `GET /csv.json?url={url}` - Fetch CSV data
- `GET /json.json?url={url}` - Fetch JSON data
- `GET /xml.json?url={url}` - Fetch XML data
- `GET /yaml.json?url={url}` - Fetch YAML data
- `GET /text.json?url={url}` - Fetch Text data

### Use Server B as a Parser

- `GET /csv.json?url={url}&server=B&header={header1,header2}` - Use Server B for CSV parsing
- `GET /json.json?url={url}&server=B` - Use Server B for JSON parsing
- `GET /xml.json?url={url}&server=B` - Use Server B for XML parsing
- `GET /yaml.json?url={url}&server=B` - Use Server B for YAML parsing
- `GET /text.json?url={url}&server=B` - Use Server B for Text parsing
