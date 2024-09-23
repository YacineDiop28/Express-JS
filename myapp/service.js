const express = require('express');
const path = require('path');
const app = express();

// Middleware pour servir les fichiers statiques (CSS, JS, images)
app.use(express.static(path.join(__dirname, 'public')));

// Utiliser le moteur de templates EJS
app.set('view engine', 'ejs');

// Middleware pour analyser les données des formulaires
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
const indexRoute = require('./routes/index');
const servicesRoute = require('./routes/services');
const contactRoute = require('./routes/contact');

// Utiliser les routes
app.use('/', indexRoute);
app.use('/services', servicesRoute);
app.use('/contact', contactRoute);

// Lancer le serveur
const port = 3000;
app.listen(port, () => {
  console.log(`Le serveur est lancé sur le port ${port}`);
});
