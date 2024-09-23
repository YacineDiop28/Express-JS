const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('contact'); // Rendre la vue 'contact.ejs'
});

router.post('/', (req, res) => {
  const { email, message } = req.body;

  if (!email || !message) {
    return res.send('Veuillez fournir un email et un message.');
  }

  // Logique pour envoyer un email avec Nodemailer par exemple
  res.send('Merci pour votre message.');
});

module.exports = router;
