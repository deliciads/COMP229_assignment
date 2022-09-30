var express = require('express');
const app = require('../app');
var router = express.Router();

//var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home'});
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home'});
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About'});
});

/* GET projects page. */
router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Projects'});
});

/* GET services page. */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services'});
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact'});
});

router.get("/process_get", function (req, res, next) {
  response = {
    name: req.query.name,
    lname: req.query.lname,
    email: req.query.email,
    number: req.query.number,
    message: req.query.message,
  };
  console.log(response);
  res.redirect('/');
});

/*app.get("/process_get", function (req, res) {
  response = {
    name: req.query.name,
    lname: req.query.lname,
    //email: req.query.email,
    //number: req.query.number,
    //message: req.query.message,
  };
  console.log(response);
  res.end(JSON.stringify(response));
});*/

//pdf function
/*app.get('/', function(req, res) {
  res.sendFile(__dirname + "/public/pdf/resume.pdf");
})*/

/*app.get('/pdf', function (req, res) {
  var filePath = "/public/pdf/resume.pdf";

  fs.readFile(__dirname +filePath, function (err,data) {
    res.contentType("application/pdf");
    res.send(data);
  });
});*/

module.exports = router;
