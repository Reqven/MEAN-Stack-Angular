var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});

var ctrlProfile = require('../controllers/profile');
var ctrlAuth = require('../controllers/authentication');
var ctrlFilms = require('../controllers/films');

// profile
router.get('/profile', auth, ctrlProfile.profileRead);

// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

//films
router.get('/films', ctrlFilms.findAll);
router.post('/film', ctrlFilms.create);
router.get('/film/:id', ctrlFilms.find);
router.put('/film/:id', ctrlFilms.update);
router.delete('/film/:id', ctrlFilms.delete);

module.exports = router;
