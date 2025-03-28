
const CSVProcessor = require('./src/csv.js');
const XMLProcessor = require('./src/xml.js');
const JSONProcessor = require('./src/json.js');
const TXTProcessor = require('./src/text.js');
const YMLProcessor = require('./src/yaml.js');

// Example data to process
const sampleData = [{ name: 'Alice' }, { name: 'Bob' }, { name: 'Charlie' }];

// Process the data in various formats
CSVProcessor(sampleData);
XMLProcessor(sampleData);
JSONProcessor(sampleData);
TXTProcessor(sampleData);
YMLProcessor(sampleData);
