let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let jwt = require('jsonwebtoken');

let passport = require('passport');

let bookController = require('../controllers/contact');

// helper function for guard purposes
function requireAuth(req, res, next)
{
    // check if the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}

/* GET Route for the Contact List page - READ Operation */
router.get('/', contactController.displayContactList);

// GET Route for processing the Add page - CREATE Operation 
router.get('/add', requireAuth, contactController.displayAddPage);

// GET Route for displaying the Add page - CREATE Operation 
router.get('/add', requireAuth, contactController.processAddPage);

// GET Route for displaying the Edit page - CREATE Operation 
router.get('/edit/:id', requireAuth, contactController.displayEditPage);

// GET Route for processing the Edit page - CREATE Operation
router.get('/edit/:id', requireAuth, contactController.processEditPage);

/* GET to perform  Deletion - DELETE Operation */
router.get('/delete/:id', requireAuth, bookController.performDelete);

module.exports = router;
