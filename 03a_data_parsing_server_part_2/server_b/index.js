
import express from "express";
import parseCSV from "./src/csv.js";
import parseJSON from "./src/json.js";
import parseXML from "./src/xml.js";
import parseYAML from "./src/yaml.js";
import parseText from "./src/text.js";

const app = express();

// Serve static files from the 'public' directory
app.use(express.static("public"));

// Function to fetch data from the provided URL
const fetchData = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
        return { error: `HTTP error! status: ${response.status}` };
    }

    return { text: await response.text() };
};

// API endpoints to process different file formats
app.get("/csv.json", async (req, res) => {
    const { url } = req.query;
    const data = await fetchData(url);
    res.json(parseCSV(data.text));
});

app.get("/json.json", async (req, res) => {
    const { url } = req.query;
    const data = await fetchData(url);
    res.json(parseJSON(data.text));
});

app.get("/xml.json", async (req, res) => {
    const { url } = req.query;
    const data = await fetchData(url);
    res.json(parseXML(data.text));
});

app.get("/yaml.json", async (req, res) => {
    const { url } = req.query;
    const data = await fetchData(url);
    res.json(parseYAML(data.text));
});

app.get("/text.json", async (req, res) => {
    const { url } = req.query;
    const data = await fetchData(url);
    res.json(parseText(data.text));
});

// Start the server on port 3000
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
