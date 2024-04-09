const express = require('express');
const path = require('path');
const app = express();
app.use(express.static('public'));

app.get('/', function (req, res) {
  const filePath = path.join(__dirname, 'views', 'index.html');
  res.sendFile(filePath);
});

app.get('/about', function (req, res) {
  const filePath = path.join(__dirname, 'views', 'about.html');
  res.sendFile(filePath);
});
app.get('/confirmation', function (req, res) {
  const filePath = path.join(__dirname, 'views', 'confirmation.html');
  res.sendFile(filePath);
});

app.get('/contact', function (req, res) {
  const filePath = path.join(__dirname, 'views', 'contact.html');
  res.sendFile(filePath);
});
app.get('/recipes', function (req, res) {
  const filePath = path.join(__dirname, 'views', 'recipes.html');
  res.sendFile(filePath);
});
app.get('/share', function (req, res) {
  const filePath = path.join(__dirname, 'views', 'share.html');
  res.sendFile(filePath);
});

app.listen(3000);
