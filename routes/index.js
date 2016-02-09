var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Lesson 5 - Express' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  //load the about view.
  res.render('about', {
    title: 'Lesson 5 - About',
    myName: 'Matthew Thoms',
    month: 'February'});
});

/* GET random page. */
router.get('/random', function(req, res, next) {
  res.render('random', { title: 'Lesson 5 - Random', randomNumber: Math.random() });
});

//make this file public within the rest of the application.
module.exports = router;
