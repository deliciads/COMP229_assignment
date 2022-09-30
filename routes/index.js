/* 
  File name: COMP229_assignment
  Student Name: Delicia
  Student id: 301294501
  Date: 30th September 2022
*/

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
  res.render('projects', { title: 'Projects'});
});

/* GET services page. */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services'});
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact'});
});

/* redirect to home page */
router.post("/contact", function (req, res) {
  res.redirect("/");
  console.log();
});

module.exports = router;
