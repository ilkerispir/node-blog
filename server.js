const express = require('express');
const app = express();

const PORT = 8080;
const HOST = '0.0.0.0';

app.use(express.static(__dirname + '/pages/layout'));

app.set('json spaces', 2);
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(PORT, HOST, () => console.log(`Running on http://${HOST}:${PORT}`));