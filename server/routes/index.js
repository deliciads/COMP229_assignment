/* 
  File name: COMP229_assignment
  Student Name: Delicia
  Student id: 301294501
  Date: 30th September 2022
*/

let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET home page. */
router.get('/home', indexController.displayHomePage);

/* GET About Us page. */
router.get('/about', indexController.displayAboutPage);

/* GET Projects page. */
router.get('/projects', indexController.displayProductsPage);

/* GET Services page. */
router.get('/services', indexController.displayServicesPage);

/* GET Contact Us page. */
//router.get('/contact', indexController.displayContactPage);

/* GET Route for displaying the Login page */
router.get('/login', indexController.displayLoginPage);

/* POST Route for processing the Login page */
router.post('/login', indexController.processLoginPage);

/* GET Route for displaying the Register page */
router.get('/register', indexController.displayRegisterPage);

/* POST Route for processing the Register page */
router.post('/register', indexController.processRegisterPage);

/* GET to perform UserLogout */
router.get('/logout', indexController.performLogout);

/* Get contact details and redirect to home */
/*router.post("/contact", function (req, res) {
  res.redirect("/");
  response = {
    fname: req.query.fname,
    lname: req.query.lname,
    email: req.query.email,
    number: req.query.number,
    message: req.query.message,
  };
  console.log(response);
  res.end(JSON.stringify(response));
});
*/

module.exports = router;
