const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res) => {
  const filePath = path.join(__dirname, 'views', 'index');
  res.send(filePath);
});

app.get('/about', (req, res) => {
  const filePath = path.join(__dirname, 'views', 'about.html');
  res.send(filePath);
});

app.listen(3000);
