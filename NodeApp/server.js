const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const port = 3080;
const appPath = process.cwd() + "/dist/";

app.use(bodyParser.json());
app.use(express.static(appPath));

app.get('/', (req, res) => {
  res.sendFile(appPath + "index.html")
});

app.get('/approotpage', (req, res) => {
  res.sendFile(appPath + "index.html")
});

app.listen(port, () => {
  console.log(`Server listening on the port::${port}`);
});
