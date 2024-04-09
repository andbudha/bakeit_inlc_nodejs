const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

//telling expressjs to use the ejs-engine and which files to process
app.set('view emgine', 'ejs');
//here we tell nodejs what and where to find the teplate files
app.set('views', path.join(__dirname, 'views'));

//handling routes
app.get('/', function (req, res) {
  res.render('index');
});

app.get('/about', function (req, res) {
  res.render('about');
});
app.get('/confirmation', function (req, res) {
  res.render('confirmation');
});

app.get('/contact', function (req, res) {
  res.render('contact');
});
app.get('/recipes', function (req, res) {
  res.render('recipes');
});
app.get('/share', function (req, res) {
  res.render('share');
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
