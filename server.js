const express = require('express');
const app = express();
const pretty = require('express-prettify');

const PORT = 8080;
const HOST = '0.0.0.0';

app.set('json spaces', 2)

app.get('/', (req, res) => {
  res.status(200).json({
      dev: 'node',
      message: 'Hello World!'
  });
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);