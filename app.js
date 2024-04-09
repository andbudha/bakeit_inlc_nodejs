const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

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
app.post('/share', (req, res) => {
  const recipe = req.body;
  const filePath = path.join(__dirname, 'data', 'recipes.json');
  const fileData = fs.readFileSync(filePath);
  const recipes = JSON.parse(fileData);
  recipes.push(recipe);
  fs.writeFileSync(filePath, JSON.stringify(recipes));
  res.redirect('/confirmation');
});

app.listen(3000);
