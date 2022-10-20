let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect to contact model
let Contact = require('../models/contact');

// GET Route for the Book List page - READ Operation 
router.get('/', (req, res, next) => {
    Contact.find((err, contactList) => {
        if(err) {
            return console.error(err);
        }
        else {
            //console.log(ContactList);
            res.render('contact', {title: 'Contact List', ContactList: contactList});
        }
    });
});

module.exports = router;
